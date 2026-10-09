import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWidget from "./FloatingWidget";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow = "Legal",
  title,
  updated,
  children,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[104px] sm:pt-[108px]">
        <section className="bg-gradient-to-b from-brand-50 to-white py-14 sm:py-16">
          <div className="container-px">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 text-sm font-medium text-slate-500">Last updated: {updated}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="container-px">
            <div
              className={`mx-auto max-w-3xl text-sm leading-relaxed text-slate-600
                [&_h2]:mt-9 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900
                [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-800
                [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-slate-800
                [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5
                [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5
                [&_a]:font-semibold [&_a]:text-brand-600 [&_a:hover]:text-brand-800
                [&_li]:leading-relaxed`}
            >
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}
