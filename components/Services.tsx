"use client";

import { Baby, CheckCircle2, HeartPulse, ShieldPlus, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SERVICES, type Service } from "@/lib/site";

const ICONS: Record<Service["icon"], typeof Baby> = {
  baby: Baby,
  heart: HeartPulse,
  stethoscope: Stethoscope,
  shield: ShieldPlus,
};

const TINTS = [
  "from-brand-500 to-brand-700 bg-brand-50 text-brand-700",
  "from-rose-500 to-rose-600 bg-rose-50 text-rose-600",
  "from-teal-500 to-teal-700 bg-teal-50 text-teal-700",
  "from-sun-500 to-sun-700 bg-sun-50 text-sun-700",
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50/70 py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services & Specialties"
          title="Complete care for every member of your family"
          description="Four focused specialties under one roof, supported by 24x7 emergency response and a dedicated newborn care unit."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            const tint = TINTS[i % TINTS.length].split(" ");

            return (
              <Reveal key={service.title} delay={0.07 * i}>
                <article className="group card relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-100">
                  <span
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tint[0]} ${tint[1]} text-white shadow-soft`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>

                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm font-medium text-slate-600"
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${tint[2]}`}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#appointment"
                    className="mt-auto pt-5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-800"
                  >
                    Book this consultation →
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
