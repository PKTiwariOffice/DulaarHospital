import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer for the Dulaar Hospital & Children Clinic website. Online appointments are for OPD consultations only - emergencies require a direct call or visit.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage eyebrow="Legal" title="Medical Disclaimer" updated="9 October 2026">
      <div
        role="alert"
        className="not-prose flex items-start gap-3 rounded-2xl border border-alert-100 bg-alert-50 p-5 text-alert-700"
      >
        <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
        <p className="text-sm font-semibold leading-relaxed">
          Medical emergencies require immediate attention. Do not use this website or the online
          appointment form in an emergency. Call{" "}
          <a href={SITE.phoneHref} className="underline">
            {SITE.phone}
          </a>{" "}
          or visit the hospital immediately.
        </p>
      </div>

      <h2>1. General Information Only</h2>
      <p>
        The content on this website - including descriptions of services, specialties and
        facilities - is provided for general informational purposes only. It is not intended to be,
        and should not be treated as, professional medical advice, diagnosis or treatment.
      </p>

      <h2>2. No Substitute for Consultation</h2>
      <p>
        Always seek the advice of a qualified medical professional with any questions about a
        medical condition or treatment. Never disregard professional medical advice, or delay
        seeking it, because of something you have read on this website.
      </p>

      <h2>3. Online Appointments Are for OPD &amp; Consultations</h2>
      <ul>
        <li>
          The online appointment form is intended only for <strong>routine OPD and general
          consultation</strong> requests.
        </li>
        <li>
          It is <strong>not a confirmed booking</strong> and is not suitable for emergencies,
          urgent care, or life-threatening conditions.
        </li>
        <li>
          A request is confirmed only after our reception team calls you back. Do not assume your
          slot is confirmed until you receive that call.
        </li>
      </ul>

      <h2>4. Emergencies Require a Direct Call or Visit</h2>
      <p>
        For any emergency - such as difficulty breathing, high fever in a newborn, severe pain,
        injury or loss of consciousness - do not wait for an online response. Contact us directly
        or come to the hospital.
      </p>
      <div className="not-prose mt-4">
        <a href={SITE.phoneHref} className="btn-emergency">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Emergency: {SITE.phone}
        </a>
      </div>

      <h2>5. Accuracy of Records</h2>
      <p>
        Information such as doctor availability, timings and services may change. While we try to
        keep details current, please confirm specifics by calling us before your visit.
      </p>

      <h2>6. External Links</h2>
      <p>
        Any third-party links or embedded content are provided for convenience only. We are not
        responsible for the accuracy or content of external resources.
      </p>

      <h2>7. Contact</h2>
      <p>
        {SITE.fullAddress}. Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>. Email:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p>
        Please also read our <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
