// src/app/hvac-export/page.tsx
import type { Metadata } from "next";
import VerticalPageTemplate, { VerticalData } from "@/components/verticals/VerticalPageTemplate";

const TITLE = "Tropical-Rated HVAC Equipment Export from Thailand";
const DESCRIPTION =
  "Split systems, ducted units, and commercial HVAC engineered for tropical and warm-weather climates, exported from Thailand with components and parts supply for ongoing maintenance contracts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hvac-export" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/hvac-export" },
};

const data: VerticalData = {
  slug: "hvac-export",
  navLabel: "HVAC Equipment",
  eyebrow: "Industrial & Commercial",
  heroTitle: "Climate-specific HVAC, engineered for warm markets.",
  heroSubtitle:
    "Split systems, ducted units, and commercial HVAC engineered for high-humidity, high-ambient-temperature climates — plus ongoing components and parts supply, not just new-install units.",
  stats: [
    { value: "Tropical", label: "Climate-Optimized" },
    { value: "Residential + Commercial", label: "Coverage" },
    { value: "Parts Supply", label: "Maintenance Contracts" },
  ],
  overview: [
    "Thailand's HVAC manufacturing base has been built around exactly the conditions many of our buyers' end markets share — high humidity and sustained high ambient temperature — which gives units sourced here a genuine efficiency edge over standard-climate equipment retrofitted for tropical use.",
    "We supply across the full deployment spectrum: residential and light-commercial split systems, ducted systems for larger retail or hospitality builds, and commercial-scale units for office developments.",
    "This vertical also covers ongoing parts and components supply — compressors, coils, and replacement parts — for buyers managing maintenance contracts on installed equipment, not just buyers sourcing new units for a single build.",
  ],
  specs: [
    { title: "Split Systems", body: "Residential and light-commercial split systems engineered for high-humidity, high-ambient-temperature climates." },
    { title: "Ducted & Commercial Units", body: "Ducted systems and commercial-scale HVAC for retail, hospitality, and office developments." },
    { title: "Components & Parts Supply", body: "Compressors, coils, and replacement components sourced for ongoing maintenance contracts." },
  ],
  tags: ["Tropical Optimized", "Commercial Units", "Components & Parts", "Maintenance Contract Supply"],
  compliance: [
    { title: "Efficiency Documentation", body: "Units ship with manufacturer efficiency ratings relevant to warm-climate deployment, to support your own destination-market energy compliance filings." },
    { title: "Certificate of Origin", body: "Included on every shipment for customs clearance." },
    { title: "Component Traceability", body: "Replacement parts and components are traceable to the originating manufacturer for warranty and maintenance-contract purposes." },
    { title: "Destination Market Standards", body: "We flag where destination-specific electrical or refrigerant standards apply before your order ships, so equipment arrives compatible with local installation requirements." },
  ],
  faqs: [
    { q: "Do you supply replacement parts, or only complete new units?", a: "Both — this vertical covers new-install units and ongoing components/parts supply for buyers managing existing installed equipment under maintenance contracts." },
    { q: "Are these units suitable for non-tropical markets too?", a: "Yes, though the primary efficiency advantage is in high-humidity, high-ambient-temperature deployment — talk to us about your specific climate if you're sourcing for a temperate market." },
    { q: "What refrigerant standards do the units use?", a: "Varies by model and destination market requirement — we'll confirm compatibility with your local standards before your order ships." },
  ],
  relatedMarkets: [
    { label: "Export to Australia", href: "/export-to-australia" },
    { label: "Export to USA", href: "/export-to-usa" },
    { label: "Export to UK", href: "/export-to-uk" },
  ],
};

export default function Page() {
  return <VerticalPageTemplate data={data} />;
}
