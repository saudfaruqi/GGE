// src/components/verticals/VerticalPageTemplate.tsx
import Link from "next/link";
import {
  Breadcrumbs,
  Container,
  CtaBand,
  DefList,
  Label,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui/Primitives";
import { SITE_URL } from "@/lib/site";

export type VerticalData = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  overview: string[];
  specs: { title: string; body: string }[];
  compliance: { title: string; body: string }[];
  tags: string[];
  faqs: { q: string; a: string }[];
  relatedMarkets: { label: string; href: string }[];
  relatedPosts?: { title: string; href: string; category: string }[];
};

export default function VerticalPageTemplate({ data }: { data: VerticalData }) {
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
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: data.navLabel, item: `${SITE_URL}/${data.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: data.navLabel },
        ]}
      />

      <PageHero eyebrow={data.eyebrow} title={data.heroTitle} subtitle={data.heroSubtitle} stats={data.stats} />

      <Section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeader label="Overview" title="What we supply." />
            </div>
            <Reveal className="space-y-5 text-[16px] leading-relaxed text-[var(--text-70)] md:col-span-7">
              {data.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {data.tags.map((tag) => (
                  <span key={tag} className="border border-[var(--line-strong)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-55)]">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="Specifications" title="Available formats." />
            </div>
            <div className="md:col-span-8">
              <DefList items={data.specs} className="md:mt-2" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="Compliance" title="Documentation on every shipment." />
            </div>
            <div className="md:col-span-8">
              <DefList items={data.compliance} className="md:mt-2" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="FAQ" title="Common questions." />
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
            </div>
          </div>
        </Container>
      </Section>

      {(data.relatedMarkets.length > 0 || (data.relatedPosts && data.relatedPosts.length > 0)) && (
        <Section className="border-t border-[var(--line)] py-16 md:py-20">
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              {data.relatedMarkets.length > 0 && (
                <div>
                  <Label>Export markets</Label>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {data.relatedMarkets.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="border border-[var(--line-strong)] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-55)] transition-colors hover:border-signal hover:text-signal"
                      >
                        {m.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {data.relatedPosts && data.relatedPosts.length > 0 && (
                <div>
                  <Label>Related reading</Label>
                  <div className="mt-5">
                    {data.relatedPosts.map((p) => (
                      <Link key={p.href} href={p.href} className="group flex items-baseline justify-between gap-6 border-t border-[var(--line)] py-4 last:border-b">
                        <span className="text-[14px] text-[var(--text)] transition-colors group-hover:text-signal">
                          {p.title}
                        </span>
                        <span className="micro shrink-0 text-[var(--text-40)]">{p.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand
        title="Request a quote."
        subtitle="Tell us your volume, spec and destination — we respond within 48 hours."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="All products"
        secondaryHref="/products"
      />
    </>
  );
}
