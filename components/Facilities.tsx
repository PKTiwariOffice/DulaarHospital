"use client";

import {
  BadgeCheck,
  Baby,
  Clock4,
  Smile,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { FACILITIES, type Facility } from "@/lib/site";

const ICONS: Record<Facility["icon"], LucideIcon> = {
  clock: Clock4,
  baby: Baby,
  smile: Smile,
  sparkles: Sparkles,
  users: Users,
  badge: BadgeCheck,
};

export default function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden bg-slate-900 py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(51,133,251,0.35),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(16,183,175,0.28),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="dots-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-200">
            <Sparkles className="h-3.5 w-3.5 text-sun-300" aria-hidden="true" />
            Our Facilities
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Everything your family needs, under one roof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Modern infrastructure, a dedicated NICU and a warm environment built for children -
            supported by staff who genuinely care.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, i) => {
            const Icon = ICONS[facility.icon];
            return (
              <Reveal key={facility.title} delay={0.06 * i}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-white/10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{facility.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {facility.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
