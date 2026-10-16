// src/components/legal/LegalPage.tsx
import type { ReactNode } from "react";
import { Breadcrumbs, Container, SectionWrapper } from "@/components/ui/Primitives";

export type LegalSection = { heading: string; body: ReactNode };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />

      <SectionWrapper className="border-b border-[var(--line)] bg-[var(--bg-1)]">
        <Container className="py-16 md:py-20">
          <h1 className="max-w-3xl text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--text)]">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-40)]">
            Last updated {updated}
          </p>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[15px] leading-relaxed text-[var(--text-70)]">{intro}</p>

            <div className="mt-12 space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-[20px] font-semibold tracking-[-0.01em] text-[var(--text)]">
                    {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-[var(--text-55)]">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-[var(--line)] pt-6">
              <p className="text-[12px] leading-relaxed text-[var(--text-40)]">
                This page is provided for general information and is not legal advice. Have your
                own counsel review these terms against your jurisdiction and business before
                relying on them.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
