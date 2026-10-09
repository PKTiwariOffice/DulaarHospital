"use client";

import { CalendarCheck, Clock4, GraduationCap, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "@/lib/site";

export default function Doctors() {
  return (
    <section id="doctors" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Meet Our Doctors"
          title="Specialists who treat every child like their own"
          description="Experienced, approachable pediatricians available for consultations and emergencies - all week, around the clock."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {DOCTORS.map((doctor, i) => (
            <Reveal key={doctor.name} delay={0.1 * i}>
              <article className="card relative h-full overflow-hidden p-6 sm:p-8">
                <span
                  className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-brand-50"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${doctor.tint} text-2xl font-extrabold text-white shadow-soft`}
                    aria-hidden="true"
                  >
                    {doctor.initials}
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600">
                      {doctor.role}
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold text-slate-900">{doctor.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                      <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden="true" />
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  <span className="font-semibold text-slate-900">{doctor.specialty}.</span>{" "}
                  {doctor.bio}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {doctor.focus.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                    <Clock4 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                    {doctor.availability}
                  </p>
                  <a href="#appointment" className="btn-outline px-5 py-2.5">
                    <Stethoscope className="h-4 w-4" aria-hidden="true" />
                    Consult
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-brand-600 to-teal-600 p-6 text-center shadow-soft sm:flex-row sm:justify-between sm:p-8 sm:text-left">
            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                Not sure which specialist you need?
              </p>
              <p className="mt-1 text-sm text-brand-100">
                Tell us the symptoms and our team will guide you to the right doctor.
              </p>
            </div>
            <a href="#appointment" className="btn shrink-0 bg-white text-brand-700 hover:bg-brand-50">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
