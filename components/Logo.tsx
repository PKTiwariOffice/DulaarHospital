import { HeartPulse } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={`${SITE.shortName} - Home`}>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-600 shadow-soft transition-transform duration-300 group-hover:-rotate-6">
        <HeartPulse className="h-6 w-6 text-white" strokeWidth={2.2} aria-hidden="true" />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-sun-400" />
      </span>
      <span className="leading-tight">
        <span
          className={`block text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          Dulaar Hospital
        </span>
        <span
          className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-brand-200" : "text-teal-600"
          }`}
        >
          Children Clinic
        </span>
      </span>
    </a>
  );
}
