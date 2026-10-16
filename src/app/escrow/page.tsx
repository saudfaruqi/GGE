// src/app/escrow/page.tsx
import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  CtaBand,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui/Primitives";
import { SITE_URL } from "@/lib/site";

const TITLE = "Escrow-Protected Trade | Secure B2B Settlement for Regulated Goods";
const DESCRIPTION =
  "How Global Green Export's escrow-protected settlement works for regulated-goods trade — funds held by a neutral third party until delivery is verified, eliminating counterparty risk for both sides.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/escrow" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/escrow` },
};

const STEPS = [
  { step: "01", title: "Order confirmed", desc: "Buyer and seller agree terms, volume and price. An escrow account is opened with a neutral third-party provider." },
  { step: "02", title: "Funds deposited", desc: "Buyer deposits full payment into escrow. Funds are held — not released to the seller — until delivery is verified." },
  { step: "03", title: "Production & documentation", desc: "Goods are sourced, produced or picked, alongside full documentation: CoA, certificate of origin, phytosanitary certification where applicable." },
  { step: "04", title: "Shipment & tracking", desc: "Export processing and freight coordination handled in-house, with tracking shared throughout transit." },
  { step: "05", title: "Delivery verification", desc: "Buyer inspects and confirms the shipment matches agreed specification and documentation." },
  { step: "06", title: "Escrow release", desc: "On buyer confirmation, escrow funds release to the seller and the full transaction record is archived." },
];

const FAQS = [
  { q: "Who holds the escrow funds?", a: "A neutral third-party escrow provider — not Global Green Export and not the seller. Neither party can access the funds until the agreed release conditions are met." },
  { q: "What happens if the shipment doesn't match specification?", a: "Funds remain in escrow until the dispute is resolved. Because documentation (CoA, certificate of origin, inspection reports) is prepared before release, most discrepancies are caught before funds move at all." },
  { q: "Is escrow mandatory?", a: "Yes, for new trade relationships. It's the mechanism that lets a first-time buyer and a first-time supplier transact without either side taking on the other's counterparty risk." },
  { q: "Does escrow cover import compliance?", a: "No — escrow protects the transaction itself. Import authorization in the buyer's jurisdiction remains the buyer's responsibility; we provide the documentation needed to support that process but don't obtain import permits on a buyer's behalf." },
];

export default function EscrowPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Escrow", item: `${SITE_URL}/escrow` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Escrow" }]} />

      <PageHero
        eyebrow="Trade Protection"
        title="Escrow-protected settlement, on every order."
        subtitle="Funds are held by a neutral third party until delivery is verified — eliminating counterparty risk for both buyer and seller on every regulated-goods transaction."
        stats={[
          { value: "100%", label: "Escrow Protected" },
          { value: "6", label: "Step Process" },
          { value: "0", label: "Direct Party Fund Access" },
        ]}
      />

      <Section className="py-20 md:py-32">
        <Container>
          <SectionHeader label="How it works" title="Six steps, start to finish." />
          <div className="mt-14">
            {STEPS.map((s) => (
              <Reveal key={s.step}>
                <div className="grid gap-3 border-t border-[var(--line)] py-7 last:border-b md:grid-cols-12 md:gap-8">
                  <div className="font-mono text-[14px] text-signal md:col-span-1">{s.step}</div>
                  <div className="text-[16px] font-medium text-[var(--text)] md:col-span-4">{s.title}</div>
                  <p className="text-[14px] leading-relaxed text-[var(--text-55)] md:col-span-7">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="FAQ" title="Escrow, explained." />
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-[var(--line)]">
                {FAQS.map((faq, i) => (
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

      <CtaBand
        title="Trade with escrow protection."
        subtitle="Every new relationship starts on escrow terms — no exceptions, no counterparty risk."
        primaryLabel="Start an enquiry →"
        primaryHref="/contact"
        secondaryLabel="Wholesale pricing"
        secondaryHref="/wholesale"
      />
    </>
  );
}
