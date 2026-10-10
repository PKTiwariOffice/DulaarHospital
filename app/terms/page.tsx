import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the Dulaar Hospital website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="9 October 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the{" "}
        {SITE.name} website. By using this website, you agree to be bound by these Terms. If you do
        not agree, please do not use the website.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        This website is provided for general information about our hospital and services and to
        allow you to request appointments. You agree to use it only for lawful purposes and in a
        manner that does not infringe the rights of, or restrict the use of, this website by others.
      </p>

      <h2>2. Appointments Are Requests Only</h2>
      <p>
        Submitting the online appointment form creates a <strong>request</strong>, not a confirmed
        booking. A slot is only confirmed once our reception team contacts you by phone. Submitting
        a request does not guarantee a particular doctor, time, or availability.
      </p>

      <h2>3. No Medical Advice &amp; Emergencies</h2>
      <p>
        Content on this website is for general information only and is not a substitute for
        professional medical advice, diagnosis or treatment. See our{" "}
        <Link href="/disclaimer">Medical Disclaimer</Link> for important details. In a medical
        emergency, do not use this website - call us directly at{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a> or visit the hospital immediately.
      </p>

      <h2>4. No Doctor-Patient Relationship</h2>
      <p>
        Use of this website, including sending an appointment request, does not create a
        doctor-patient relationship. Such a relationship is established only during an actual
        consultation with our medical professionals.
      </p>

      <h2>5. Accuracy of Information</h2>
      <p>
        We aim to keep information accurate and up to date, but we make no warranties regarding its
        completeness, reliability or accuracy. Medical and service details may change without
        notice.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos and design, is the property of{" "}
        {SITE.name} or its licensors and is protected by applicable laws. You may not reproduce,
        distribute or use it without our prior written permission.
      </p>

      <h2>7. User Conduct</h2>
      <ul>
        <li>You must not submit false, misleading or fraudulent information.</li>
        <li>
          You must not attempt to disrupt, hack, or gain unauthorised access to the website or its
          systems.
        </li>
        <li>You must not use the website to send spam or unlawful content.</li>
      </ul>

      <h2>8. Third-Party Services</h2>
      <p>
        The website may embed maps or link to third-party services. Your use of those services is
        subject to their own terms and policies, and we are not responsible for their content or
        practices.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.name} shall not be liable for any indirect,
        incidental or consequential damages arising from your use of, or inability to use, this
        website.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, and any disputes shall be subject to the
        exclusive jurisdiction of the courts at Bhopal, Madhya Pradesh.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may revise these Terms at any time. Continued use of the website after changes are posted
        constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        {SITE.fullAddress}. Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>. Email:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPage>
  );
}
