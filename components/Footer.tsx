import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE, SERVICES, DOCTORS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <div className="h-1 bg-gradient-to-r from-brand-500 via-teal-400 to-sun-400" />

      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {SITE.name} - trusted pediatric, neonatal (NICU), general medicine, surgery and
            gynecology care for families across Bhopal, open 24x7.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Pediatrics", "NICU", "24x7 Emergency"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                className="text-sm font-semibold text-sun-400 transition-colors hover:text-sun-300"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Specialties &amp; Doctors
          </h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                >
                  {service.title}
                </a>
              </li>
            ))}
            {DOCTORS.map((doctor) => (
              <li key={doctor.name}>
                <a
                  href="#doctors"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                >
                  {doctor.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <span className="text-slate-400">
                {SITE.addressLine1}, {SITE.addressLine2}, {SITE.city}, {SITE.state} -{" "}
                {SITE.pincode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <a
                href={SITE.phoneHref}
                className="font-bold text-white transition-colors hover:text-teal-300"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-slate-400 transition-colors hover:text-teal-300"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock4 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <span className="text-slate-400">
                {SITE.hours}
                <br />
                <span className="text-slate-500">{SITE.emergency}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p>
              © {year} {SITE.name}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex items-center gap-4">
              <a href="/privacy" className="transition-colors hover:text-teal-300">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-teal-300">
                Terms
              </a>
              <a href="/disclaimer" className="transition-colors hover:text-teal-300">
                Medical Disclaimer
              </a>
            </nav>
          </div>
          <p className="text-slate-600">
            Pediatrician in Bhopal | Children&apos;s Hospital &amp; Maternity Care | Emergency 24x7
          </p>
        </div>
      </div>
    </footer>
  );
}
