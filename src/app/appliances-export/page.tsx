// src/app/appliances-export/page.tsx
import type { Metadata } from "next";
import VerticalPageTemplate, { VerticalData } from "@/components/verticals/VerticalPageTemplate";

const TITLE = "Wholesale Appliance Export from Thailand | CE & UL Certified";
const DESCRIPTION =
  "CE-marked residential white goods and UL/ETL-certified commercial kitchen equipment, exported from Thailand at container-load pricing for retail, hospitality, and food-service buyers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/appliances-export" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/appliances-export" },
};

const data: VerticalData = {
  slug: "appliances-export",
  navLabel: "Appliances",
  eyebrow: "Commercial & Retail",
  heroTitle: "White goods & commercial equipment, container-load ready.",
  heroSubtitle:
    "CE-marked residential appliances and UL/ETL-certified commercial kitchen equipment, priced per container load, with consolidated shipping across categories for retail and hospitality buyers.",
  stats: [
    { value: "CE / UL / ETL", label: "Certification Coverage" },
    { value: "Multi-Category", label: "Consolidation Available" },
    { value: "48h", label: "Quote Turnaround" },
  ],
  overview: [
    "This vertical serves two distinct buyer types: retail importers sourcing residential white goods for resale, and hospitality or food-service operators sourcing commercial-grade kitchen equipment for their own operations. The certification requirements differ between the two, and we source and document accordingly.",
    "Residential appliances ship CE-marked for EU, UK, and Australian import; commercial kitchen equipment is sourced UL/ETL certified where the destination is the US market. Confirm your destination market when you enquire, since certification requirements are market-specific rather than universal.",
    "Container-load pricing is the standard structure for this vertical — mixed-category consolidation (e.g. refrigeration units alongside commercial ranges in a single container) is available on request for buyers who don't need a full container of a single category.",
  ],
  specs: [
    { title: "Residential White Goods", body: "Refrigeration, laundry, and kitchen appliances, CE-marked and export-certified for EU, UK, and Australian markets." },
    { title: "Commercial Kitchen Equipment", body: "Commercial-grade cooking, refrigeration, and food-service equipment, UL/ETL certified for US-bound orders." },
    { title: "Container-Load Pricing", body: "Volume pricing structured per container, with consolidated shipping across multiple appliance categories on request." },
  ],
  tags: ["CE Marked", "UL/ETL Certified", "Commercial Grade", "Multi-Category Consolidation"],
  compliance: [
    { title: "CE Marking", body: "Residential appliances destined for EU, UK, or Australian markets ship with CE marking and supporting conformity documentation." },
    { title: "UL/ETL Certification", body: "Commercial kitchen equipment bound for the US market is sourced with UL or ETL certification in place." },
    { title: "Certificate of Origin", body: "Included on every shipment for customs clearance and origin-based tariff assessment." },
    { title: "Category-Specific Sourcing", body: "We confirm the correct certification standard for your destination before sourcing — certification isn't universal across markets." },
  ],
  faqs: [
    { q: "Can I mix residential and commercial equipment in one container?", a: "Yes — multi-category consolidation is available; confirm the mix when you enquire so we can price the container correctly." },
    { q: "Do you handle certification for markets outside CE/UL/ETL coverage?", a: "Talk to us about your specific destination — we'll confirm feasibility and what certification path applies before quoting." },
    { q: "What's the typical lead time for a container-load order?", a: "Varies by category and current supplier capacity; we provide a specific estimate with your quote, generally within 48 hours of enquiry." },
  ],
  relatedMarkets: [
    { label: "Export to Australia", href: "/export-to-australia" },
    { label: "Export to UK", href: "/export-to-uk" },
    { label: "Export to USA", href: "/export-to-usa" },
    { label: "Export to Germany", href: "/export-to-germany" },
  ],
};

export default function Page() {
  return <VerticalPageTemplate data={data} />;
}
