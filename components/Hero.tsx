"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CalendarCheck,
  Clock4,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const BADGES = [
  { icon: Clock4, label: "24x7 Emergency Care" },
  { icon: Star, label: "Experienced Specialists" },
  { icon: ShieldCheck, label: "Well-Equipped NICU" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a5b] via-[#10408f] to-brand-700" />
      <div className="hero-pattern absolute inset-0" aria-hidden="true" />
      <div className="dots-grid absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-px relative py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur sm:text-sm">
                <Sparkles className="h-4 w-4 text-sun-300" aria-hidden="true" />
                Specialized Children&apos;s Hospital &amp; Maternity Care
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Trusted Pediatric &amp; Multi-Specialty{" "}
                <span className="relative whitespace-nowrap text-sun-300">
                  Healthcare
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7C40 2 150 2 198 6"
                      stroke="#ffc171"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                in Bhopal
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
                {SITE.shortName} is a specialized children&apos;s hospital offering compassionate
                pediatric care, a well-maintained NICU, and complete maternity &amp; women&apos;s
                healthcare - led by experienced specialists Dr. Akhil Singh and Dr. Varun Rai - in
                a clean, child-friendly environment that families across Bhopal rely on, day and
                night.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#appointment" className="btn-primary px-7 py-4 text-base">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={SITE.phoneHref} className="btn-emergency px-7 py-4 text-base">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Emergency Call
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {BADGES.map((badge) => (
                  <li
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur sm:text-sm"
                  >
                    <badge.icon className="h-4 w-4 text-teal-300" aria-hidden="true" />
                    {badge.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-400/30 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sun-400/25 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Dulaar Care
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-alert-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live 24x7
                </span>
              </div>

              <div className="relative mt-8 flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-teal-500 shadow-[0_20px_45px_-20px_rgba(16,183,175,0.9)] sm:h-44 sm:w-44">
                  <Baby className="h-16 w-16 text-white sm:h-20 sm:w-20" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                  <HeartPulse className="h-6 w-6 text-sun-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-bold text-white">NICU &amp; Newborn Care</p>
                  <p className="text-xs text-brand-100">Monitored round the clock</p>
                </div>
                <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                  <ShieldCheck className="h-6 w-6 text-teal-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-bold text-white">Emergency Ready</p>
                  <p className="text-xs text-brand-100">Doctors available 24x7</p>
                </div>
              </div>

              <div className="relative mt-3 rounded-2xl bg-white p-4 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Specialists on call
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  Dr. Akhil Singh <span className="font-medium text-slate-400">·</span> Dr. Varun
                  Rai
                </p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-teal-400" />
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-1/3 hidden -translate-y-1/2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-lg font-extrabold text-brand-700">24x7</p>
              <p className="text-[11px] font-semibold text-slate-500">OPD &amp; Emergency</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#0b2a5b]/60 backdrop-blur">
        <div className="container-px flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center text-xs font-semibold text-brand-100 sm:text-sm">
          <span>Pediatrics &amp; Newborn Care</span>
          <span className="hidden text-white/30 sm:inline">•</span>
          <span>Obstetrics &amp; Gynecology</span>
          <span className="hidden text-white/30 sm:inline">•</span>
          <span>General Medicine &amp; Surgery</span>
          <span className="hidden text-white/30 sm:inline">•</span>
          <span>Critical Care &amp; NICU</span>
        </div>
      </div>
    </section>
  );
}
