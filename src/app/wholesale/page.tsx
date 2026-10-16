// src/app/wholesale/page.tsx
import type { Metadata } from "next";
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
import { MARKETS, SITE_URL } from "@/lib/site";

const TITLE = "Wholesale & Container-Load Pricing | Thailand Export";
const DESCRIPTION =
  "Wholesale sourcing from Thailand across cannabis, hemp, construction materials, appliances and HVAC — MOQs, container-load pricing tiers, and fee-based custom sourcing for B2B buyers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/wholesale" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/wholesale` },
};

const MOQS = [
  { vertical: "Cannabis (whole flower & extracts)", moq: "1kg minimum, container-load pricing from 25kg+" },
  { vertical: "Hemp derivatives (CBD/CBG/CBN)", moq: "500g minimum per isolate" },
  { vertical: "Construction materials", moq: "Assessed per project — typically full container load (FCL)" },
  { vertical: "Appliances", moq: "Container-load pricing; mixed-category consolidation available" },
  { vertical: "HVAC equipment", moq: "Assessed per unit type and destination volume" },
];

const TIERS = [
  { name: "Sample order", desc: "Verify quality and documentation before committing to volume.", points: ["Representative samples with full CoA", "Standard lead time", "No escrow-tier commitment"] },
  { name: "Standard wholesale", desc: "Recurring or single-shipment orders at published wholesale pricing.", points: ["Escrow-protected settlement", "Full export documentation", "48-hour enquiry response"], featured: true },
  { name: "Container-load / custom", desc: "Custom sourcing across one or multiple verticals, consolidated into container-load shipments.", points: ["Dedicated account manager", "Custom formulation / white-label on request", "Multi-vertical consolidation"] },
];

export default function WholesalePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Wholesale", item: `${SITE_URL}/wholesale` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wholesale" }]} />

      <PageHero
        eyebrow="Wholesale Sourcing"
        title="Container-load pricing, built for B2B volume."
        subtitle="From single sample orders to full container-load consolidation across multiple verticals — every tier is escrow-protected and fully documented."
        stats={[
          { value: "5", label: "Sourceable Verticals" },
          { value: "30+", label: "Export Markets" },
          { value: "48h", label: "Response Time" },
        ]}
      />

      <Section className="py-20 md:py-32">
        <Container>
          <SectionHeader
            label="Minimum order quantities"
            title="MOQs by vertical."
            subtitle="Minimums vary by category — talk to us if your target volume sits below these and we'll assess feasibility."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--line-strong)]">
                  <th className="pb-4 pr-6 micro text-[var(--text-40)]">Vertical</th>
                  <th className="pb-4 micro text-[var(--text-40)]">Minimum order quantity</th>
                </tr>
              </thead>
              <tbody>
                {MOQS.map((row) => (
                  <tr key={row.vertical} className="border-b border-[var(--line)]">
                    <td className="py-4 pr-6 text-[15px] font-medium text-[var(--text)]">{row.vertical}</td>
                    <td className="py-4 text-[14px] text-[var(--text-55)]">{row.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section id="markets" className="scroll-mt-28 border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <SectionHeader label="Order tiers" title="Three ways to buy." />
          <div className="mt-12">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name}>
                <div className="grid gap-4 border-t border-[var(--line)] py-8 last:border-b md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] text-signal">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-[18px] font-medium text-[var(--text)]">{tier.name}</h3>
                    </div>
                    {tier.featured && <div className="micro mt-2 text-signal">Most common</div>}
                  </div>
                  <p className="text-[14px] leading-relaxed text-[var(--text-55)] md:col-span-4">{tier.desc}</p>
                  <ul className="space-y-2 md:col-span-4">
                    {tier.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px] text-[var(--text-70)]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader
                label="Export markets"
                title="30+ countries, one process."
                subtitle="We supply licensed importers across Europe, North America, South America, Central America and Asia-Pacific."
              />
            </div>
            <div className="md:col-span-8 md:pt-2">
              <Label>Markets</Label>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {MARKETS.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="border border-[var(--line-strong)] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-55)] transition-colors hover:border-signal hover:text-signal"
                  >
                    Export to {m.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Request wholesale pricing."
        subtitle="Tell us your vertical, target volume and destination — we'll respond with feasibility and pricing within 48 hours."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
}
