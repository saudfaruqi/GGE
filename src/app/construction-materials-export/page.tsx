// src/app/construction-materials-export/page.tsx
import type { Metadata } from "next";
import VerticalPageTemplate, { VerticalData } from "@/components/verticals/VerticalPageTemplate";

const TITLE = "Construction Materials Export from Thailand | Structural Steel, Prefab & Finishing";
const DESCRIPTION =
  "Structural steel, prefabricated components, and finishing materials sourced from Thailand and quality-inspected per shipment, with mill certificates and certificate of origin for development projects.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/construction-materials-export" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/construction-materials-export" },
};

const data: VerticalData = {
  slug: "construction-materials-export",
  navLabel: "Construction Materials",
  eyebrow: "Construction & Development",
  heroTitle: "Structural & finishing materials, sourced to spec.",
  heroSubtitle:
    "Structural steel, prefabricated components, flooring, and cladding — sourced from vetted Thai manufacturers and quality-inspected before container loading, for developers and contractors sourcing at project scale.",
  stats: [
    { value: "100%", label: "Quality Inspected" },
    { value: "FCL", label: "Typical Order Format" },
    { value: "Per Project", label: "Custom Spec Sourcing" },
  ],
  overview: [
    "Global Green Export's construction materials sourcing works from a project brief — we don't hold generic warehouse stock, we source structural and finishing materials against your specific spec, inspected before they're loaded for shipment.",
    "This vertical primarily serves developers and contractors sourcing at container-load scale for a specific build, rather than smaller ad-hoc orders. If your requirement is below full-container volume, talk to us — we can sometimes consolidate smaller construction-material orders alongside other verticals in the same shipment.",
    "Every shipment ships with mill certificates (for structural steel) and a certificate of origin, giving your project documentation the same paper trail customs and building inspectors expect from any legitimate materials import.",
  ],
  specs: [
    { title: "Structural Steel & Framing", body: "Beams, rebar, and structural steel sourced to spec for residential and commercial development, with mill certificates on every shipment." },
    { title: "Prefabricated Components", body: "Prefab wall panels and modular structural elements for faster-turnaround builds, quality-inspected before loading." },
    { title: "Flooring, Cladding & Finishing", body: "Tile, cladding systems, and finishing materials from vetted Thai manufacturers, inspected per shipment." },
  ],
  tags: ["Certificate of Origin", "Mill Certificates", "Quality Inspected", "Sourced to Spec"],
  compliance: [
    { title: "Certificate of Origin", body: "Prepared for every shipment, confirming Thai origin for customs clearance and any origin-based tariff considerations." },
    { title: "Mill Certificates", body: "Structural steel ships with mill certification confirming grade and composition against your project's engineering spec." },
    { title: "Pre-Loading Inspection", body: "Materials are inspected for defects and spec compliance before container loading, not after arrival." },
    { title: "Project-Level Documentation", body: "We can assemble a consolidated documentation package matched to your project's import/customs requirements on request." },
  ],
  faqs: [
    { q: "Do you hold stock, or is everything sourced per order?", a: "Sourced per order, against your specific project spec — we don't carry generic warehouse inventory for this vertical." },
    { q: "What's the minimum order size?", a: "Typically assessed per project; construction materials generally move at full container load, but smaller consolidated orders are possible alongside other verticals." },
    { q: "Can you match a specific engineering spec or grade?", a: "Yes — send your spec sheet and we'll confirm feasibility, lead time, and pricing before you commit." },
  ],
  relatedMarkets: [
    { label: "Export to Australia", href: "/export-to-australia" },
    { label: "Export to UK", href: "/export-to-uk" },
    { label: "Export to USA", href: "/export-to-usa" },
  ],
};

export default function Page() {
  return <VerticalPageTemplate data={data} />;
}
