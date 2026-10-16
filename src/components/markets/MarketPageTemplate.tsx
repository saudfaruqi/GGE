// src/components/markets/MarketPageTemplate.tsx
import Link from "next/link";
import {
  Breadcrumbs,
  Container,
  CtaBand,
  Label,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui/Primitives";
import { SITE_URL } from "@/lib/site";

export type MarketVerticalNote = {
  vertical: string;
  href: string;
  note: string;
};

export type MarketData = {
  slug: string;
  country: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  intro: string[];
  verticalNotes: MarketVerticalNote[];
  logisticsNote: string;
  faqs: { q: string; a: string }[];
  relatedPosts?: { title: string; href: string; category: string }[];
};

export default function MarketPageTemplate({ data }: { data: MarketData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Wholesale", item: `${SITE_URL}/wholesale` },
      { "@type": "ListItem", position: 3, name: data.country, item: `${SITE_URL}/${data.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Wholesale", href: "/wholesale" },
          { label: data.country },
        ]}
      />

      <PageHero eyebrow={data.eyebrow} title={data.heroTitle} subtitle={data.heroSubtitle} stats={data.stats} />

      <Section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeader label="Overview" title={`Exporting to ${data.country}.`} />
            </div>
            <Reveal className="space-y-5 text-[16px] leading-relaxed text-[var(--text-70)] md:col-span-7">
              {data.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <SectionHeader label="By vertical" title={`What we ship to ${data.country}.`} />
          <div className="mt-12">
            {data.verticalNotes.map((v) => (
              <Link
                key={v.vertical}
                href={v.href}
                className="group grid gap-3 border-t border-[var(--line)] py-6 transition-colors last:border-b md:grid-cols-12 md:gap-8"
              >
                <div className="text-[16px] font-medium text-[var(--text)] transition-colors group-hover:text-signal md:col-span-4">
                  {v.vertical}
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-55)] md:col-span-7">{v.note}</p>
                <span className="font-mono text-[11px] text-[var(--text-25)] transition-colors group-hover:text-signal md:col-span-1 md:text-right">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <Label>Logistics</Label>
            </div>
            <p className="text-[15px] leading-relaxed text-[var(--text-70)] md:col-span-9">
              {data.logisticsNote}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="FAQ" title={`Shipping to ${data.country}.`} />
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-[var(--line)]">
                {data.faqs.map((faq, i) => (
                  <div key={faq.q} className="border-b border-[var(--line)] py-6">
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] text-signal">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-[16px] font-medium text-[var(--text)]">{faq.q}</h3>
                        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--text-55)]">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-[12px] leading-relaxed text-[var(--text-40)]">
                This page is general information, not legal or import-compliance advice. Import
                requirements change and vary by product classification — confirm current requirements
                with your own customs broker or legal counsel before committing to an order.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {data.relatedPosts && data.relatedPosts.length > 0 && (
        <Section className="border-t border-[var(--line)] py-16 md:py-20">
          <Container>
            <Label>Related reading</Label>
            <div className="mt-5">
              {data.relatedPosts.map((p) => (
                <Link key={p.href} href={p.href} className="group flex items-baseline justify-between gap-6 border-t border-[var(--line)] py-4 last:border-b">
                  <span className="text-[14px] text-[var(--text)] transition-colors group-hover:text-signal">{p.title}</span>
                  <span className="micro shrink-0 text-[var(--text-40)]">{p.category}</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand
        title={`Start sourcing for ${data.country}.`}
        subtitle="Tell us your vertical, volume and required documentation — we'll confirm feasibility within 48 hours."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="All products"
        secondaryHref="/products"
      />
    </>
  );
}
