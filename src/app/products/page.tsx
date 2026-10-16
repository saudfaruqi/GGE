// src/app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  Container,
  CtaBand,
  DefList,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/ui/Primitives";

const TITLE =
  "Products | Cannabis, Hemp, Construction, Appliances & HVAC Export";
const DESCRIPTION =
  "All five Global Green Export verticals: GACP-certified cannabis and hemp derivatives, construction materials, CE-certified appliances, and tropical-rated HVAC equipment — sourced from Thailand with full export documentation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/products" },
};

type Vertical = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { title: string; body: string }[];
  tags: string[];
  keywordNote: string;
};

const VERTICALS: Vertical[] = [
  {
    id: "cannabis",
    eyebrow: "01 · Medical & Pharmaceutical",
    title: "GACP-Certified Cannabis & Extracts.",
    subtitle:
      "Premium whole flower and pharmaceutical-grade extracts, verified with a Certificate of Analysis and GACP documentation on every batch.",
    items: [
      {
        title: "Premium Whole Flower",
        body: "GACP-certified whole flower from Thailand's licensed indoor and greenhouse cultivators. Consistent terpene profiles and cannabinoid ratios across every batch, available in 5g to 1kg units, nitrogen-flushed and vacuum-sealed.",
      },
      {
        title: "Extracts & Distillates",
        body: "Full-spectrum, broad-spectrum, and isolated extracts at 80–99% purity, produced under ISO-compliant extraction conditions with third-party verification. Distillate, crude, or winterised oil, with custom formulation and white-label available on request.",
      },
      {
        title: "Cannabinoid Isolates",
        body: "Independently verified isolates — CBD, CBG, CBN, THC, CBC, and CBDV — each with a Certificate of Analysis on every order.",
      },
    ],
    tags: ["GACP Certified", "Thai FDA Approved", "80–99% Purity"],
    keywordNote: "GACP certified cannabis export Thailand",
  },
  {
    id: "hemp",
    eyebrow: "02 · Wellness & B2B",
    title: "Hemp Derivatives — CBD, CBG, CBN.",
    subtitle:
      "Water-soluble isolates, crystalline powders, and raw paste — all EU-compliant with verified THC thresholds. Colorado and Thai-origin supply available.",
    items: [
      {
        title: "Crystalline Isolates",
        body: "CBD, CBG, and CBN in crystalline powder form, independently lab-verified, with a CoA issued on every order.",
      },
      {
        title: "Water-Soluble Formats",
        body: "Water-soluble hemp derivatives formulated for beverage and wellness-product manufacturers, with consistent dosing across batches.",
      },
      {
        title: "Raw Paste & Bulk Supply",
        body: "Raw hemp paste for further processing, sourced from both Colorado and Thai origins, with EU-compliant THC thresholds maintained across all formats.",
      },
    ],
    tags: ["EU Compliant", "Colorado Partner", "US Fulfillment"],
    keywordNote: "wholesale hemp derivatives CBD CBG CBN supplier",
  },
  {
    id: "construction",
    eyebrow: "03 · Construction & Development",
    title: "Structural & Finishing Materials.",
    subtitle:
      "Structural steel, prefabricated components, and finishing materials — quality-inspected per shipment with certificates of origin, sourced to your project spec.",
    items: [
      {
        title: "Structural Steel & Framing",
        body: "Beams, rebar, and structural steel sourced to spec for residential and commercial development. Mill certificates and certificate of origin provided with every shipment.",
      },
      {
        title: "Prefabricated Components",
        body: "Prefab wall panels, modular structural elements, and finishing components for faster-turnaround builds. Quality-inspected before container loading.",
      },
      {
        title: "Flooring, Cladding & Finishing Materials",
        body: "Tile, cladding systems, and finishing supplies sourced from vetted Thai manufacturers, inspected per shipment.",
      },
    ],
    tags: ["Certificate of Origin", "Quality Inspected", "Sourced to Spec"],
    keywordNote: "construction materials export Thailand, structural steel supplier Thailand",
  },
  {
    id: "appliances",
    eyebrow: "04 · Commercial & Retail",
    title: "White Goods & Commercial Equipment.",
    subtitle:
      "CE, UL/ETL, and SAA certified appliances — from residential white goods to commercial kitchen equipment, at container-load pricing.",
    items: [
      {
        title: "Residential White Goods",
        body: "Refrigeration, laundry, and kitchen appliances, CE-marked and export-certified for EU, UK, and Australian markets.",
      },
      {
        title: "Commercial Kitchen Equipment",
        body: "Commercial-grade cooking, refrigeration, and food-service equipment for hospitality and food-service buyers, UL/ETL certified for the US market.",
      },
      {
        title: "Container-Load Pricing",
        body: "Volume pricing structured per container load, with consolidated shipping across multiple appliance categories on request.",
      },
    ],
    tags: ["CE Marked", "UL/ETL Certified", "Commercial Grade"],
    keywordNote: "wholesale appliances export Thailand, container load white goods supplier",
  },
  {
    id: "hvac",
    eyebrow: "05 · Industrial & Commercial",
    title: "Climate-Specific HVAC Systems.",
    subtitle:
      "Split systems, ducted units, and commercial HVAC — engineered for tropical and warm-weather markets, with parts and components supply.",
    items: [
      {
        title: "Split Systems",
        body: "Residential and light-commercial split systems engineered for high-humidity, high-ambient-temperature climates, with efficiency advantages over standard-climate units in warm-weather markets.",
      },
      {
        title: "Ducted & Commercial Units",
        body: "Ducted systems and commercial-scale HVAC for retail, hospitality, and office developments.",
      },
      {
        title: "Components & Parts Supply",
        body: "Compressors, coils, and replacement components sourced for ongoing maintenance contracts, not just new installs.",
      },
    ],
    tags: ["Tropical Optimized", "Commercial Units", "Components & Parts"],
    keywordNote: "HVAC equipment export Thailand, tropical climate HVAC export",
  },
];

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: VERTICALS.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.title.replace(".", ""),
      url: `https://www.globalgreenexport.com/products#${v.id}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalgreenexport.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.globalgreenexport.com/products" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

      <PageHero
        eyebrow="What We Supply"
        title="Regulated core. Industrial reach."
        subtitle="Cannabis and hemp derivatives are our regulated core verticals. Construction materials, appliances and HVAC equipment round out the supply — all under the same documentation-first process."
        stats={[
          { value: "5", label: "Product Verticals" },
          { value: "99%", label: "Max Isolate Purity" },
          { value: "100%", label: "Documented Shipments" },
        ]}
      />

      {/* Jump nav removed */}

      {VERTICALS.map((v, index) => {
        const led = index < 2;
        return (
          <Section
            key={v.id}
            id={v.id}
            className={`scroll-mt-32 py-20 md:py-32 ${
              index % 2 === 0 ? "border-t border-[var(--line)]" : "border-t border-[var(--line)] bg-[var(--bg-1)]"
            }`}
          >
            <Container>
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <SectionHeader label={v.eyebrow} title={v.title} subtitle={v.subtitle} />
                  {led && (
                    <div className="mt-6 inline-flex items-center gap-2 border border-signal/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      Regulated core vertical
                    </div>
                  )}
                </div>
                <div className="md:col-span-7">
                  <DefList items={v.items} />
                  <div className="mt-7 flex flex-wrap gap-2">
                    {v.tags.map((tag) => (
                      <span key={tag} className="border border-[var(--line-strong)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-55)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section className="border-t border-[var(--line)] py-10">
        <Container>
          <Link href="/wholesale" className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal hover:underline">
            See wholesale &amp; container-load pricing →
          </Link>
        </Container>
      </Section>

      <CtaBand
        title="Request a product catalogue."
        subtitle="Tell us your product, volume and destination — we respond within 48 hours."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="Wholesale pricing"
        secondaryHref="/wholesale"
      />
    </>
  );
}
