"use client";

import { Clock4, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

const CARDS = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: [
      SITE.addressLine1,
      SITE.addressLine2,
      `${SITE.city}, ${SITE.state} - ${SITE.pincode}`,
    ],
    action: { label: "Get Directions", href: SITE.mapLink },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [SITE.phone, "Emergency & Reception"],
    action: { label: `Dial ${SITE.phone}`, href: SITE.phoneHref },
  },
  {
    icon: Clock4,
    title: "Working Hours",
    lines: [SITE.hours, SITE.opd, SITE.emergency],
    action: { label: "Book an Appointment", href: "#appointment" },
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50/70 py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Dulaar Hospital in Bagsewaniya, Bhopal"
          description="Located on Hoshangabad Road near Bagsewaniya Thana - easy to reach from across Bhopal, with 24x7 access."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.06 * i}>
                <article className="card h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <card.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                      <div className="mt-1.5 space-y-0.5">
                        {card.lines.map((line) => (
                          <p key={line} className="text-sm leading-relaxed text-slate-600">
                            {line}
                          </p>
                        ))}
                      </div>
                      <a
                        href={card.action.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-800"
                      >
                        {card.action.label} →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="card h-full overflow-hidden p-2">
              <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[420px]">
                <iframe
                  title="Dulaar Hospital location on Google Maps"
                  src={SITE.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <p className="text-xs font-semibold text-slate-500">
                  {SITE.addressLine1}, {SITE.city} - {SITE.pincode}
                </p>
                <a
                  href={SITE.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
