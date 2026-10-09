"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  Loader2,
  Phone,
  RotateCcw,
  User,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { appointmentSchema, DEPARTMENTS, TIME_SLOTS, type AppointmentValues } from "@/lib/form-schema";
import { SITE } from "@/lib/site";

const DEFAULTS: AppointmentValues = {
  name: "",
  age: "",
  phone: "",
  department: "",
  date: "",
  timeSlot: "",
  symptoms: "",
};

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState<AppointmentValues | null>(null);
  const [error, setError] = useState<string | null>(null);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: DEFAULTS,
    mode: "onTouched",
  });

  const onSubmit = async (values: AppointmentValues) => {
    setError(null);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setError(
          data.message ?? "We could not submit your request. Please call us directly."
        );
        return;
      }

      setSubmitted(values);
      reset(DEFAULTS);
    } catch {
      setError("Network error. Please check your connection or call us directly.");
    }
  };

  const fieldClass = (hasError?: boolean) =>
    `field-input${hasError ? " border-alert-500 focus:border-alert-500 focus:ring-alert-100" : ""}`;

  return (
    <section id="appointment" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-50 to-white"
        aria-hidden="true"
      />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Book an Appointment"
          title="Reserve your visit in under a minute"
          description="Fill in the details below and our team will call you back to confirm the slot. For emergencies, please call us directly."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="bg-gradient-to-r from-brand-600 to-teal-600 px-6 py-5 text-white sm:px-8">
                <h3 className="flex items-center gap-2 text-lg font-bold sm:text-xl">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Appointment Request Form
                </h3>
                <p className="mt-1 text-sm text-brand-100">
                  OPD &amp; emergency services available 24x7, Monday to Sunday.
                </p>
              </div>

              {submitted ? (
                <div className="px-6 py-10 text-center sm:px-8">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <h4 className="mt-5 text-2xl font-extrabold text-slate-900">
                    Appointment request received!
                  </h4>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                    Thank you, <strong>{submitted.name}</strong>. Our reception team will call you
                    on <strong>{submitted.phone}</strong> shortly to confirm your slot.
                  </p>

                  <dl className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-3 text-left sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Department
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-slate-800">
                        {submitted.department}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Preferred Date
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-slate-800">{submitted.date}</dd>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 sm:col-span-2">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Time Slot
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-slate-800">
                        {submitted.timeSlot}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setSubmitted(null)}
                      className="btn-primary"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Book another appointment
                    </button>
                    <a href={SITE.phoneHref} className="btn-outline">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call {SITE.phone}
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-5 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8"
                >
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="field-label">
                      Patient / Child&apos;s Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Aarav Sharma"
                      className={fieldClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name ? (
                      <span className="field-error" role="alert">
                        {errors.name.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="age" className="field-label">
                      Age (years)
                    </label>
                    <input
                      id="age"
                      type="text"
                      inputMode="decimal"
                      placeholder="e.g. 4 or 0.5"
                      className={fieldClass(!!errors.age)}
                      aria-invalid={!!errors.age}
                      {...register("age")}
                    />
                    {errors.age ? (
                      <span className="field-error" role="alert">
                        {errors.age.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="field-label">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                        +91
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="tel-national"
                        placeholder="10-digit mobile number"
                        className={`${fieldClass(!!errors.phone)} pl-12`}
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                      />
                    </div>
                    {errors.phone ? (
                      <span className="field-error" role="alert">
                        {errors.phone.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="department" className="field-label">
                      Department / Specialty
                    </label>
                    <select
                      id="department"
                      defaultValue=""
                      className={fieldClass(!!errors.department)}
                      aria-invalid={!!errors.department}
                      {...register("department")}
                    >
                      <option value="" disabled>
                        Select a department
                      </option>
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department ? (
                      <span className="field-error" role="alert">
                        {errors.department.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="date" className="field-label">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      className={fieldClass(!!errors.date)}
                      aria-invalid={!!errors.date}
                      {...register("date")}
                    />
                    {errors.date ? (
                      <span className="field-error" role="alert">
                        {errors.date.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="timeSlot" className="field-label">
                      Preferred Time Slot
                    </label>
                    <select
                      id="timeSlot"
                      defaultValue=""
                      className={fieldClass(!!errors.timeSlot)}
                      aria-invalid={!!errors.timeSlot}
                      {...register("timeSlot")}
                    >
                      <option value="" disabled>
                        Select a time slot
                      </option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.timeSlot ? (
                      <span className="field-error" role="alert">
                        {errors.timeSlot.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="symptoms" className="field-label">
                      Symptoms / Notes <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="symptoms"
                      rows={4}
                      placeholder="Describe the symptoms, duration or any existing medication..."
                      className={fieldClass(!!errors.symptoms)}
                      aria-invalid={!!errors.symptoms}
                      {...register("symptoms")}
                    />
                    {errors.symptoms ? (
                      <span className="field-error" role="alert">
                        {errors.symptoms.message}
                      </span>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    {error ? (
                      <p
                        role="alert"
                        className="mb-4 flex items-start gap-2 rounded-xl border border-alert-100 bg-alert-50 p-3 text-sm font-medium text-alert-700"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        {error}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                          Request Appointment
                        </>
                      )}
                    </button>
                    <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                      This form is a request, not a confirmed booking. Our team will call to verify.
                      In a medical emergency, dial {SITE.phone} immediately.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#0b2a5b] to-brand-700 p-6 text-white shadow-soft sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                Need urgent help?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">Emergency Helpline</h3>
              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/20"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-alert-500">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-2xl font-extrabold tracking-wide">{SITE.phone}</span>
                  <span className="block text-xs text-brand-100">
                    24x7 emergency &amp; ambulance support
                  </span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-brand-100">
                Our doctors are available round the clock for newborn emergencies, high fever,
                breathing difficulty and other urgent needs.
              </p>
            </div>

            <div className="card p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <User className="h-5 w-5 text-brand-600" aria-hidden="true" />
                Why book online?
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Skip the queue - your slot is pre-registered.",
                  "Get an instant call-back to confirm timing.",
                  "Share symptoms ahead so the doctor is prepared.",
                  "Free of charge - no advance payment required.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
