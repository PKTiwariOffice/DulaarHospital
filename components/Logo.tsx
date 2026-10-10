import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Logo({
  light = false,
  priority = false,
}: {
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={`${SITE.shortName} - Home`}>
      <Image
        src={light ? "/images/logo-mark-white.png" : "/images/logo-mark.png"}
        alt=""
        aria-hidden="true"
        width={170}
        height={171}
        priority={priority}
        className="h-11 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:-rotate-6"
      />
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
          Children&apos;s Hospital &amp; Maternity Care
        </span>
      </span>
    </a>
  );
}
