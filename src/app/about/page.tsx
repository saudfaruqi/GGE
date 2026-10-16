// src/app/about/page.tsx
import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  CtaBand,
  DefList,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui/Primitives";
import { SITE_URL } from "@/lib/site";

const TITLE = "About Us | Thailand's FDA-Licensed Cannabis & Hemp Export House";
const DESCRIPTION =
  "Global Green Export is a Bangkok-based, Thai FDA-licensed export house covering five verticals — GACP-certified cannabis, hemp derivatives, construction materials, appliances and HVAC — with escrow-protected trade to 30+ countries.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/about` },
};

const OPERATIONS = [
  "Direct supplier relationships — no broker markups",
  "Escrow on every new trade cycle",
  "In-house compliance and documentation",
  "A dedicated account manager, one point of contact",
  "Fee-based custom sourcing on request",
];

const VERTICALS = [
  { title: "Cannabis", sub: "Medical · Pharmaceutical", core: true },
  { title: "Hemp Derivatives", sub: "Wellness · B2B", core: true },
  { title: "Housing Materials", sub: "Construction · Development", core: false },
  { title: "Appliances", sub: "Commercial · Retail", core: false },
  { title: "HVAC Equipment", sub: "Industrial · Commercial", core: false },
];

const CERTS = [
  { title: "GACP Compliant", body: "All cannabis and hemp growers in our network meet Good Agricultural and Collection Practices — the international baseline for medical-grade cultivation quality." },
  { title: "Thai Export Licensed", body: "We operate under Thai FDA and government-approved export frameworks. Every export begins with the correct authorisation in place." },
  { title: "Third-Party Lab Tested", body: "All cannabis and hemp products are independently verified by accredited laboratories. A CoA is issued with every batch, no exceptions." },
  { title: "Certificate of Origin", body: "Full traceability from source to destination. Certificates of origin are prepared for every shipment across all five verticals." },
  { title: "Phytosanitary Certified", body: "Botanical and agricultural products ship with valid phytosanitary certificates — required for customs clearance in destination markets." },
  { title: "Escrow-Settled", body: "Our trade protocol mandates escrow settlement for new clients — eliminating counterparty risk for both buyers and sellers." },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <PageHero
        eyebrow="Who We Are"
        title="One partner. Five verticals. Global reach."
        subtitle="Global Green Export is a Bangkok-based export house specialising in regulated goods — from GACP-certified cannabis and hemp derivatives to construction materials, appliances and HVAC systems."
      />

      <Section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeader label="Our story" title="Built for complex supply chains." />
              <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-[var(--text-55)]">
                <p>
                  Global Green Export was founded in Bangkok to solve a specific problem: regulated
                  goods are hard to source correctly. Too many intermediaries, too little
                  documentation, and too much uncertainty at the destination.
                </p>
                <p>
                  We built GGE around verticals where compliance is non-negotiable — cannabis and hemp
                  for pharmaceutical and wellness markets, construction materials for development
                  projects, appliances and HVAC equipment for commercial buyers.
                </p>
                <p>
                  Each vertical runs on the same model: direct supplier relationships, in-house
                  documentation and escrow-protected settlement. Whether you need a single shipment or
                  an ongoing supply agreement, you deal with one account manager who owns the process.
                </p>
              </div>
            </div>

            <Reveal id="how-we-operate" className="scroll-mt-28 md:col-span-5">
              <SectionHeader label="How we operate" title="Precision in every step." />
              <ul className="mt-7">
                {OPERATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-t border-[var(--line)] py-4 text-[14px] text-[var(--text-70)] last:border-b">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-20 md:py-32">
        <Container>
          <SectionHeader
            label="Our verticals"
            title="Five verticals. One standard."
            subtitle="Regulated core verticals, plus industrial supply — all under the same compliance framework."
          />
          <div className="mt-12">
            {VERTICALS.map((v) => (
              <div key={v.title} className="grid items-baseline gap-2 border-t border-[var(--line)] py-5 last:border-b md:grid-cols-12 md:gap-8">
                <div className="text-[17px] font-medium text-[var(--text)] md:col-span-4">{v.title}</div>
                <div className="micro text-[var(--text-40)] md:col-span-5">{v.sub}</div>
                <div className="micro md:col-span-3 md:text-right">
                  <span className={v.core ? "text-signal" : "text-[var(--text-25)]"}>
                    {v.core ? "Core vertical" : "Secondary"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="certifications" className="scroll-mt-28 border-t border-[var(--line)] py-20 md:py-32">
        <Container>
          <SectionHeader
            label="Standards & certifications"
            title="Compliance across all verticals."
            subtitle="Every certificate is issued by accredited bodies and available for verification on request."
          />
          <div className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
            <DefList items={CERTS.slice(0, 3)} />
            <DefList items={CERTS.slice(3)} />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to source smarter?"
        subtitle="One account manager, five verticals, full documentation — from enquiry to delivery."
        primaryLabel="Start an enquiry →"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
}
