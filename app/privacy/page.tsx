import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Dulaar Hospital collects, uses and protects your personal and health information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="9 October 2026"
    >
      <p>
        {SITE.name} (&quot;Dulaar Hospital&quot;, &quot;we&quot;, &quot;us&quot;) respects your
        privacy. This policy explains what information we collect through our website, how we use
        it, and the choices you have. By using this website, you agree to this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Details you provide</strong> when you submit an appointment request or contact us:
          your name, the patient&apos;s age, phone number, preferred department, preferred date and
          time, and any symptoms or notes you choose to share.
        </li>
        <li>
          <strong>Automatic technical data</strong> such as IP address, browser type, device type
          and pages visited, collected through standard server logs and analytics.
        </li>
        <li>
          <strong>Cookies</strong> and similar technologies to remember preferences and understand
          how the site is used.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To schedule and confirm appointments and to call you back.</li>
        <li>To provide healthcare services and coordinate your care with our medical team.</li>
        <li>To respond to your enquiries and provide customer support.</li>
        <li>To maintain and improve the safety, security and functionality of our website.</li>
        <li>To comply with applicable legal and regulatory obligations.</li>
      </ul>

      <h2>3. Legal Basis &amp; Consent</h2>
      <p>
        We process your information based on your consent and for the legitimate purposes of
        providing healthcare services and running our hospital. By submitting an appointment
        request, you consent to us contacting you about your request.
      </p>

      <h2>4. Appointment &amp; Health Information</h2>
      <p>
        Information shared through the appointment form may include health-related details. We
        treat such information as sensitive and use it only to coordinate your care and to contact
        you. Appointment requests are transmitted securely to our reception team by email.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share it with trusted service providers
        (such as our email delivery provider and hosting provider) strictly to operate the website
        and deliver services, or where required by law.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain appointment and contact information only as long as necessary to fulfil the
        purposes described here, to maintain medical records as required by law, and to resolve
        disputes.
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable administrative and technical safeguards to protect your information.
        However, no method of transmission over the internet is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Subject to applicable law, you may request access to, correction of, or deletion of your
        personal information, and you may withdraw consent to marketing communications at any time.
        To exercise these rights, contact us using the details below.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are directed to parents and guardians. Appointment details for a child should
        be submitted by a parent or legal guardian. We do not knowingly collect information directly
        from children without appropriate consent.
      </p>

      <h2>10. Third-Party Links &amp; Services</h2>
      <p>
        Our website may embed maps or link to third-party sites. We are not responsible for the
        privacy practices of those third parties, and we encourage you to review their policies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date above shows
        when it was last revised.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        {SITE.fullAddress}. Phone:{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>. Email:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p>
        See also our <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/disclaimer">Medical Disclaimer</Link>.
      </p>
    </LegalPage>
  );
}
