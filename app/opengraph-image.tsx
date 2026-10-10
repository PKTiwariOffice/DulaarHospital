import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "Dulaar Hospital - Pediatric & Maternity Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SPECIALTIES = [
  "Pediatrics & Newborn",
  "NICU & Critical Care",
  "Obstetrics & Gynaecology",
  "General Medicine & Surgery",
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0b2a5b 0%, #10408f 55%, #06958f 100%)",
          fontFamily: "Segoe UI, Arial, sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "rgba(47, 210, 200, 0.30)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-100px",
            width: "460px",
            height: "460px",
            borderRadius: "9999px",
            background: "rgba(255, 157, 56, 0.25)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "22px",
              background: "linear-gradient(135deg, #3385fb, #06958f)",
              boxShadow: "0 18px 40px -18px rgba(0,0,0,0.6)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 21s-7-4.35-9.5-8.5C.9 9.7 2.3 6 5.7 6c1.9 0 3.3 1 4.3 2.4C11 7 12.4 6 14.3 6c3.4 0 4.8 3.7 3.2 6.5C19 16.65 12 21 12 21z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "40px", fontWeight: 800, letterSpacing: "-0.5px" }}>
              Dulaar Hospital
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "4px",
                color: "#8ec6ff",
                textTransform: "uppercase",
              }}
            >
              Pediatric &amp; Maternity Care
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "900px",
              letterSpacing: "-1px",
            }}
          >
            Trusted Pediatric &amp; Multi-Specialty Care in Bhopal
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#d9ecff", maxWidth: "820px" }}>
            Compassionate child care, complete maternity &amp; women&apos;s healthcare, a
            well-equipped NICU and 24x7 emergency support.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "14px" }}>
            {SPECIALTIES.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: 600,
                  padding: "12px 22px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px 26px",
              borderRadius: "9999px",
              background: "#e11d48",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            24x7 {SITE.phone}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
