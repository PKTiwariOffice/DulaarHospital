import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
