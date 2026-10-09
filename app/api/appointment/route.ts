import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appointmentSchema } from "@/lib/form-schema";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.APPOINTMENT_TO_EMAIL ?? SITE.email;
const FROM_EMAIL =
  process.env.APPOINTMENT_FROM_EMAIL ?? "Dulaar Hospital <onboarding@resend.dev>";

type FieldErrors = Record<string, string[] | undefined>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(values: {
  name: string;
  age: string;
  phone: string;
  department: string;
  date: string;
  timeSlot: string;
  symptoms?: string;
}) {
  const rows: Array<[string, string]> = [
    ["Patient / Child Name", values.name],
    ["Age", `${values.age} years`],
    ["Phone", `+91 ${values.phone}`],
    ["Department", values.department],
    ["Preferred Date", values.date],
    ["Preferred Time Slot", values.timeSlot],
    ["Symptoms / Notes", values.symptoms?.trim() ? values.symptoms : "-"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#334155;width:190px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px 16px;border:1px solid #e2e8f0;color:#0f172a;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Segoe UI,Arial,sans-serif;max-width:640px;margin:0 auto;padding:8px;">
      <div style="background:linear-gradient(90deg,#1b66f0,#06958f);padding:22px 24px;border-radius:14px 14px 0 0;">
        <h1 style="margin:0;color:#ffffff;font-size:20px;">New Appointment Request</h1>
        <p style="margin:6px 0 0;color:#d9ecff;font-size:13px;">
          ${escapeHtml(SITE.name)} &middot; ${escapeHtml(SITE.city)}
        </p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 14px 14px;padding:20px 24px;">
        <p style="margin:0 0 16px;color:#334155;font-size:14px;">
          A new appointment request was submitted through the website. Please call the patient back to confirm the slot.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${tableRows}
        </table>
        <p style="margin:18px 0 0;color:#64748b;font-size:12px;">
          Submitted on ${escapeHtml(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))} (IST).
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = appointmentSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: FieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 }
    );
  }

  const values = parsed.data;

  if (!RESEND_API_KEY) {
    console.warn(
      "[appointment] RESEND_API_KEY is not set - appointment was validated but no email was sent.",
      values
    );
    return NextResponse.json({
      ok: true,
      delivered: false,
      message:
        "Request received. Email delivery is not configured on this environment, so our team will follow up manually.",
    });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Appointment Request: ${values.name} (${values.department})`,
      html: buildEmailHtml(values),
    });

    if (error) {
      console.error("[appointment] Resend error:", error);
      return NextResponse.json(
        { ok: false, message: "We could not send your request. Please call us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[appointment] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please call us directly." },
      { status: 500 }
    );
  }
}
