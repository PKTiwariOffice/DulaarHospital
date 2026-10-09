"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [next, paused]);

  const active = TESTIMONIALS[index];

  return (
    <section id="reviews" className="bg-slate-50/70 py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Patient Testimonials"
          title="Families trust Dulaar Hospital"
          description="Real feedback from parents and patients who experienced our care, hygiene and doctor supervision first-hand."
        />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-12 max-w-4xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="card relative overflow-hidden p-6 sm:p-10">
              <span
                className="absolute right-6 top-6 rounded-full bg-brand-50 p-3 text-brand-500"
                aria-hidden="true"
              >
                <Quote className="h-7 w-7" />
              </span>

              <div
                className="flex gap-1"
                aria-label={`${active.rating} out of 5 stars`}
                role="img"
              >
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-sun-400 text-sun-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-4"
                >
                  <p className="text-lg font-medium leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-teal-600 text-sm font-bold text-white">
                      {active.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <span>
                      <cite className="block text-sm font-bold not-italic text-slate-900">
                        {active.name}
                      </cite>
                      <span className="block text-xs font-medium text-slate-500">
                        {active.context}
                      </span>
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-brand-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
