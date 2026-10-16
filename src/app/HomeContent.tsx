// src/app/HomeContent.tsx
import Link from "next/link";
import Image from "next/image";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import Faq, { type FaqItem } from "@/components/home/Faq";
import {
  Button,
  Container,
  CtaBand,
  DefList,
  Label,
  Reveal,
  Section,
  SectionHeader,
  TradeRoute,
} from "@/components/ui/Primitives";

// ============================================================
// DATA
// ============================================================

const CORE = [
  {
    id: "cannabis",
    n: "01",
    kicker: "Cannabis — medical & pharmaceutical",
    title: "GACP-certified cannabis, batch-tested and licensed.",
    body: "Whole flower, distillate, crude and cannabinoid isolates from GACP-certified Thai cultivators, exported under Thai FDA licensing. Every order carries a batch-specific Certificate of Analysis — not a reference report.",
    facts: [
      { k: "Certification", v: "GACP (site-level)" },
      { k: "Documentation", v: "Batch CoA + THC/CBD assay" },
      { k: "Minimum", v: "1 kg" },
    ],
    image: "/gallery/35.jpeg",
    href: "/cannabis-export",
  },
  {
    id: "hemp",
    n: "02",
    kicker: "Hemp derivatives — wellness & B2B",
    title: "CBD, CBG and CBN, held to your market's THC threshold.",
    body: "Crystalline isolates, water-soluble formats and raw paste, sourced from Thai and Colorado origins. We confirm whether your destination tests delta-9 or total THC before anything ships.",
    facts: [
      { k: "Assay", v: "≥98% purity, THC ND" },
      { k: "Origins", v: "Thai + Colorado" },
      { k: "Minimum", v: "500 g per isolate" },
    ],
    image: "/gallery/47.jpeg",
    href: "/hemp-export",
  },
];

const INDUSTRIAL = [
  { title: "Construction materials", body: "Structural steel, prefab components and finishing materials, inspected per shipment with certificate of origin.", href: "/construction-materials-export" },
  { title: "Appliances", body: "CE, UL/ETL and SAA certified white goods and commercial equipment at container-load pricing.", href: "/appliances-export" },
  { title: "HVAC equipment", body: "Split, ducted and commercial units engineered for tropical climates, plus components and parts.", href: "/hvac-export" },
];

const CAPABILITIES = [
  { title: "Compliance & documentation", body: "Destination regulations mapped and every required document flagged before a commitment — CoA, certificate of origin, phytosanitary certification, customs filings." },
  { title: "Escrow settlement", body: "Funds held by a neutral third party and released only on verified delivery. Mandatory on new relationships, so neither side carries counterparty risk." },
  { title: "Sourcing & quality control", body: "Direct supplier relationships with no broker markups, and in-house inspection before any container closes." },
  { title: "Logistics & freight", body: "Export processing, freight coordination and consolidated container loading across verticals, handled in-house." },
];

const MARKETS = [
  { c: "Germany", r: "Europe" },
  { c: "United Kingdom", r: "Europe" },
  { c: "Netherlands", r: "Europe" },
  { c: "Switzerland", r: "Europe" },
  { c: "Czech Republic", r: "Europe" },
  { c: "United States", r: "North America" },
  { c: "Canada", r: "North America" },
  { c: "Mexico", r: "North America" },
  { c: "Brazil", r: "South America" },
  { c: "Costa Rica", r: "Central America" },
  { c: "Australia", r: "Asia-Pacific" },
  { c: "New Zealand", r: "Asia-Pacific" },
];

const PROCESS = [
  { n: "01", title: "Enquiry & assessment", body: "Submit product, volume and destination. We respond within 48 hours with a feasibility assessment and preliminary pricing." },
  { n: "02", title: "Compliance review", body: "We map destination-country rules and flag every required document before any commitment." },
  { n: "03", title: "Sample & verification", body: "Representative samples ship with a CoA, certificate of origin and inspection reports." },
  { n: "04", title: "Escrow hold", body: "Funds are deposited with a neutral escrow provider and held until delivery is verified." },
  { n: "05", title: "Export & logistics", body: "Phytosanitary certification, customs filings and freight coordination handled in-house." },
  { n: "06", title: "Release & archive", body: "On confirmed delivery, escrow releases and the full transaction record is archived." },
];

const FAQS: FaqItem[] = [
  { q: "What products do you export from Thailand?", a: "GACP-certified cannabis and hemp derivatives are our core regulated verticals. We also export construction materials, appliances and HVAC equipment — all sourced from Thai suppliers and shipped with full documentation." },
  { q: "What certifications do you hold?", a: "We operate under Thai FDA export licensing and work with GACP-certified cultivation sites. Every shipment carries a certificate of origin; cannabis and hemp orders include a batch-specific Certificate of Analysis and phytosanitary certification where required." },
  { q: "How does escrow protection work?", a: "On new trade relationships the buyer deposits funds with a neutral third-party escrow provider. Funds are held — not released to the seller — until the buyer confirms delivery and product quality." },
  { q: "What are your minimum order quantities?", a: "Cannabis starts at 1 kg and hemp derivatives at 500 g per isolate. Construction, appliance and HVAC orders are assessed per project or container load." },
  { q: "Which countries do you export to?", a: "We supply licensed importers across Europe, North America, South America, Central America and Asia-Pacific, including Germany, the UK, the US, Canada, Australia and Brazil." },
  { q: "Do you help with import authorization?", a: "We supply the full export documentation needed to support your compliance process, but securing import authorization in your own jurisdiction remains your responsibility." },
];

const HERO_STATS = [
  { v: "30+", l: "Export markets" },
  { v: "FDA", l: "Thai export licensed" },
  { v: "100%", l: "Escrow-settled" },
  { v: "48h", l: "Enquiry response" },
];

// ============================================================
// HOME
// ============================================================

export default function HomeContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <ScrollVideoHero />
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-between pb-10 pt-28">
          <div className="flex items-center justify-between">
            <Label className="text-[var(--text-55)]">Global Green Export — export house</Label>
            <Label className="hidden text-[var(--text-40)] sm:block">BKK 13.75N 100.50E</Label>
          </div>

          <div className="max-w-4xl py-16">
            <h1 className="h-display text-[clamp(40px,7vw,104px)] text-[var(--text)]">
              Thailand&apos;s export house for
              <span className="text-[var(--text-55)]"> regulated supply.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-[var(--text-55)] sm:text-[17px]">
              GACP-certified cannabis and hemp derivatives, plus construction materials,
              appliances and HVAC — sourced, documented and escrow-settled from Bangkok.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="signal" size="lg">
                Request procurement →
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Explore exports
              </Button>
            </div>
          </div>

          <div>
            <TradeRoute codes={["BKK", "SIN", "RTM", "HAM", "LAX"]} />
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
              {HERO_STATS.map((s) => (
                <div key={s.l}>
                  <dt className="h-display text-[clamp(22px,2.4vw,32px)] text-[var(--text)]">{s.v}</dt>
                  <dd className="micro mt-1.5 text-[var(--text-40)]">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* MANIFESTO */}
      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeader
                label="Who we are"
                title="One partner for the parts of the supply chain that are hard to get right."
              />
            </div>
            <div className="md:col-span-5 md:pt-3">
              <Reveal className="space-y-5 text-[15px] leading-relaxed text-[var(--text-55)]">
                <p>
                  Global Green Export is a Bangkok-based export house built around regulated goods:
                  GACP-certified cannabis and hemp for pharmaceutical and wellness markets, and
                  construction, appliance and HVAC supply for commercial buyers.
                </p>
                <p>
                  Every vertical runs on the same model — direct supplier relationships, in-house
                  documentation, escrow-protected settlement, and one account manager from enquiry to
                  delivery.
                </p>
                <Link href="/about" className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-signal hover:underline">
                  About the house →
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* CORE VERTICALS — alternating asymmetric bands */}
      <Section className="border-t border-[var(--line)]">
        <Container className="pt-20 md:pt-28">
          <SectionHeader
            label="Core exports"
            title="Regulated supply, documented to the batch."
            subtitle="Our cannabis and hemp verticals carry the heaviest compliance load — site-level certification, batch testing, and paperwork built for customs from the outset."
          />
        </Container>

        <div className="mt-16">
          {CORE.map((v, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={v.id} className="border-t border-[var(--line)]">
                <div className="grid md:grid-cols-12">
                  <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[520px]">
                      <Image
                        src={v.image}
                        alt={v.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 58vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,17,16,0.85)] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[rgba(18,17,16,0.35)]" />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center bg-[var(--bg-1)] px-6 py-12 sm:px-10 md:col-span-5 md:px-14 ${flip ? "md:order-1" : ""}`}>
                    <Reveal>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[12px] text-signal">{v.n}</span>
                        <span className="micro text-[var(--text-40)]">{v.kicker}</span>
                      </div>
                      <h3 className="h-display mt-6 text-[clamp(24px,2.8vw,38px)] text-[var(--text)]">
                        {v.title}
                      </h3>
                      <p className="mt-5 text-[14px] leading-relaxed text-[var(--text-55)]">{v.body}</p>

                      <dl className="mt-8 border-t border-[var(--line)]">
                        {v.facts.map((f) => (
                          <div key={f.k} className="leader border-b border-[var(--line)] py-3">
                            <dt className="micro text-[var(--text-40)]">{f.k}</dt>
                            <dd className="text-[13px] text-[var(--text-70)]">{f.v}</dd>
                          </div>
                        ))}
                      </dl>

                      <Link href={v.href} className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-signal hover:underline">
                        View vertical →
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* INDUSTRIAL */}
      <Section className="border-t border-[var(--line)] py-24 md:py-36">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:items-center">
            <div className="relative aspect-[4/3] md:col-span-5 md:aspect-[3/4]">
              <Image src="/gallery/2.jpeg" alt="Construction materials, appliances and HVAC export" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="md:col-span-7 md:pl-6">
              <SectionHeader
                label="Also exporting"
                title="Industrial and commercial supply."
                subtitle="The same documentation-first process, applied to construction materials, appliances and HVAC equipment."
              />
              <div className="mt-8">
                {INDUSTRIAL.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start justify-between gap-8 border-t border-[var(--line)] py-6 transition-colors last:border-b"
                  >
                    <div className="max-w-md">
                      <div className="text-[17px] font-medium text-[var(--text)] transition-colors group-hover:text-signal">
                        {item.title}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-55)]">{item.body}</p>
                    </div>
                    <span className="mt-1 font-mono text-[11px] text-[var(--text-25)] transition-colors group-hover:text-signal">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CAPABILITIES */}
      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-24 md:py-36">
        <Container>
          <SectionHeader
            label="How we operate"
            title="One partner from enquiry to delivery."
          />
          <DefList items={CAPABILITIES} className="mt-14" />
        </Container>
      </Section>

      {/* MARKETS */}
      <Section className="border-t border-[var(--line)] py-24 md:py-36">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader
                label="Global reach"
                title="Active supply chains across 30+ markets."
                subtitle="Each market's compliance path is mapped before your order ships."
              />
              <Button href="/wholesale" variant="outline" className="mt-8">
                Wholesale & markets →
              </Button>
            </div>
            <div className="md:col-span-8">
              <dl className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
                {MARKETS.map((m) => (
                  <div key={m.c} className="border-t border-[var(--line)] py-4">
                    <dt className="text-[14px] text-[var(--text)]">{m.c}</dt>
                    <dd className="micro mt-1.5 text-[var(--text-40)]">{m.r}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-24 md:py-36">
        <Container>
          <SectionHeader label="How it works" title="Six documented steps." />
          <div className="mt-14">
            {PROCESS.map((s) => (
              <div key={s.n} className="grid gap-3 border-t border-[var(--line)] py-7 md:grid-cols-12 md:gap-8">
                <div className="font-mono text-[13px] text-signal md:col-span-1">{s.n}</div>
                <div className="text-[16px] font-medium text-[var(--text)] md:col-span-4">{s.title}</div>
                <p className="text-[14px] leading-relaxed text-[var(--text-55)] md:col-span-7">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-[var(--line)] py-24 md:py-36">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeader label="FAQ" title="Common questions." />
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <Faq items={FAQS} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Request a procurement assessment."
        subtitle="Tell us your product, volume and destination. We respond within 48 hours with feasibility and preliminary pricing."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="Browse exports"
        secondaryHref="/products"
      />
    </>
  );
}
