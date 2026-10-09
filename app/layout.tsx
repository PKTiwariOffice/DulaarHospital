import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Dulaar Hospital & Children Clinic - Child Hospital & Pediatrician in Bhopal | 24x7",
    template: "%s | Dulaar Hospital, Bhopal",
  },
  description: SITE.description,
  keywords: [
    "Dulaar Hospital Bhopal",
    "Dulaar Children Hospital",
    "child hospital Hoshangabad Road",
    "pediatrician Bagsewaniya Bhopal",
    "NICU Bhopal",
    "children doctor Bhopal",
    "Dr Akhil Singh pediatrician",
    "Dr Varun Rai pediatrician",
    "24x7 hospital Bhopal",
    "gynecologist Bhopal",
    "general medicine Bhopal",
    "general surgery Bhopal",
  ],
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name }],
  category: "health",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Dulaar Hospital & Children Clinic - Trusted Pediatric & Multi-Specialty Care in Bhopal",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulaar Hospital & Children Clinic - Bhopal",
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b66f0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hospital", "MedicalClinic"],
  "@id": `${SITE.url}/#hospital`,
  name: SITE.name,
  alternateName: [SITE.alternateName, "Dulaar Hospital Bhopal"],
  url: SITE.url,
  telephone: "+91-755-2446809",
  email: SITE.email,
  slogan: SITE.tagline,
  description: SITE.description,
  priceRange: "$$",
  isAcceptingNewPatients: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-11, Surendra Garden, Bagsewaniya, Ahmedpur (Near Bagsewaniya Thana)",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462043",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.1595,
    longitude: 77.5097,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  medicalSpecialty: [
    "Pediatric",
    "Neonatology",
    "Obstetric",
    "Gynecologic",
    "General",
    "Surgical",
    "Emergency",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Pediatric Consultation" },
    { "@type": "MedicalProcedure", name: "Newborn & Neonatal Care (NICU)" },
    { "@type": "MedicalProcedure", name: "Child Immunization" },
    { "@type": "MedicalProcedure", name: "Obstetrics & Gynecology Consultation" },
    { "@type": "MedicalProcedure", name: "General Medicine" },
    { "@type": "MedicalProcedure", name: "General Surgery" },
    { "@type": "MedicalProcedure", name: "24x7 Emergency Care" },
  ],
  physician: [
    {
      "@type": "Physician",
      name: "Dr. Akhil Singh",
      jobTitle: "Consultant Pediatrician",
      description: "MBBS, MD (Pediatrics) - Pediatrician & Newborn Specialist",
      worksFor: { "@id": `${SITE.url}/#hospital` },
    },
    {
      "@type": "Physician",
      name: "Dr. Varun Rai",
      jobTitle: "Consultant Pediatrician",
      description: "MBBS - Pediatrician",
      worksFor: { "@id": `${SITE.url}/#hospital` },
    },
  ],
  hasMap: SITE.mapLink,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
