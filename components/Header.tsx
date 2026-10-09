"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const offset = window.scrollY + 180;
      let current = "#home";
      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href);
        if (el && (el as HTMLElement).offsetTop <= offset) current = link.href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-alert-500 text-white">
        <div className="container-px flex h-10 items-center justify-between gap-3 text-xs sm:text-sm">
          <span className="hidden items-center gap-2 font-semibold sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            24x7 Emergency &amp; OPD
          </span>

          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 font-bold tracking-wide hover:underline"
            aria-label={`Call emergency number ${SITE.phone}`}
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            {SITE.phone}
          </a>

          <span className="hidden items-center gap-1.5 font-medium text-white/90 lg:flex">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Bagsewaniya, Hoshangabad Road, Bhopal
          </span>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(15,23,42,0.5)]" : ""
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between gap-4 sm:h-[68px]">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-brand-700"
                        : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-brand-700"
            >
              <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {SITE.phone}
            </a>
            <a href="#appointment" className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-h-[calc(100dvh-104px)] overflow-y-auto border-b border-slate-100 bg-white px-4 pb-6 pt-4 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                      active === link.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#appointment" onClick={() => setOpen(false)} className="btn-primary w-full">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </a>
              <a href={SITE.phoneHref} className="btn-emergency w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency: {SITE.phone}
              </a>
            </div>

            <p className="mt-4 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-500">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              {SITE.fullAddress}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
