"use client";

import { IndianRupee, Sparkles, Stethoscope, Users } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { STATS } from "@/lib/site";

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Clean & Hygienic Infrastructure",
    text: "Well-maintained wards and consultation areas held to strict hygiene standards.",
  },
  {
    icon: Users,
    title: "Experienced Nursing Staff",
    text: "Polite, attentive nurses who guide families calmly through every stage of care.",
  },
  {
    icon: Stethoscope,
    title: "Accurate Diagnoses",
    text: "Careful examination and reliable diagnostics so treatment starts on the right note.",
  },
  {
    icon: IndianRupee,
    title: "Reasonable Pricing",
    text: "Honest, transparent costing with no unnecessary procedures or hidden charges.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Dulaar Hospital"
              title="Ethical, reliable and affordable care - with a child-friendly touch"
              description="Our mission is simple: to make quality healthcare stress-free for every family that walks through our doors."
            />

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  {`Dulaar Hospital`} is a specialized children&apos;s hospital with complete
                  maternity &amp; women&apos;s healthcare on Hoshangabad Road, Bhopal, built around
                  a simple belief - healthcare should feel safe, honest and welcoming. From the
                  front desk to the NICU, every corner is designed to keep patients calm and
                  families informed.
                </p>
                <p>
                  We combine comprehensive pediatric and newborn care with obstetrics &amp;
                  gynecology, general medicine and general surgery, so that one reliable hospital
                  can look after your entire family - from a newborn&apos;s first check-up to a
                  grandparent&apos;s routine consultation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5"
                  >
                    <p className="text-2xl font-extrabold text-brand-700 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <figure className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-soft">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/hospital-reception.jpg"
                    alt="Reception and waiting area at Dulaar Hospital, Bagsewaniya, Bhopal"
                    fill
                    sizes="(min-width: 1024px) 50vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent p-4 text-xs font-semibold text-white sm:text-sm">
                  Our reception &amp; waiting area - welcoming families 24x7
                </figcaption>
              </figure>
            </Reveal>

            {HIGHLIGHTS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={0.08 * i}
                className={i % 2 === 1 ? "sm:mt-8" : undefined}
              >
                <article className="card h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-white shadow-soft">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
