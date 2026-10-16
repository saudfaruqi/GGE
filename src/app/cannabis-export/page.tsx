// src/app/cannabis-export/page.tsx
import type { Metadata } from "next";
import VerticalPageTemplate, { VerticalData } from "@/components/verticals/VerticalPageTemplate";

const TITLE = "GACP-Certified Cannabis Export from Thailand";
const DESCRIPTION =
  "GACP-certified whole flower, extracts, and cannabinoid isolates exported from Thailand under Thai FDA licensing. Full CoA, escrow-protected, documented for licensed international importers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cannabis-export" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/cannabis-export" },
};

const data: VerticalData = {
  slug: "cannabis-export",
  navLabel: "Cannabis Export",
  eyebrow: "Medical & Pharmaceutical",
  heroTitle: "GACP-certified cannabis, exported from Thailand.",
  heroSubtitle:
    "Whole flower, distillate, and cannabinoid isolates sourced from GACP-certified Thai cultivators, exported under Thai FDA licensing to buyers with the corresponding import authorization in their own jurisdiction.",
  stats: [
    { value: "80–99%", label: "Extract Purity Range" },
    { value: "100%", label: "Batch-Level CoA" },
    { value: "1kg", label: "Minimum Order" },
  ],
  overview: [
    "Global Green Export sources cannabis flower and extracts exclusively from GACP-certified cultivation sites in Thailand, working within a Thai FDA-licensed export framework rather than the broader, less regulated domestic supply chain.",
    "Every order — whether flower, distillate, crude oil, or isolate — ships with a Certificate of Analysis for the specific batch, not a reference document from a prior harvest. We work with buyers who already hold, or are actively securing, the import authorization required in their own destination market; we don't represent that Thai export authorization alone is sufficient for legal import anywhere else.",
    "Custom formulation, white-label packaging, and recurring supply agreements are available for established buyers, alongside one-time sample or trial orders for new relationships.",
  ],
  specs: [
    { title: "Whole Flower", body: "GACP-certified indoor and greenhouse cultivation, consistent terpene and cannabinoid profiles, nitrogen-flushed and vacuum-sealed in 5g–1kg units." },
    { title: "Extracts & Distillate", body: "Full-spectrum, broad-spectrum, and crude oil at 80–99% purity, produced under ISO-compliant extraction and independently verified." },
    { title: "Cannabinoid Isolates", body: "CBD, CBG, CBN, THC, CBC, and CBDV isolates, each independently verified with a batch-specific Certificate of Analysis." },
  ],
  tags: ["GACP Certified", "Thai FDA Licensed", "Batch-Specific CoA", "Escrow Protected"],
  compliance: [
    { title: "GACP Certification", body: "Every cultivation site in our network holds current GACP certification, verifiable by certificate number on request." },
    { title: "Thai FDA Export License", body: "Extract and flower export is processed under valid Thai FDA authorization — we provide the license reference for your own verification." },
    { title: "Certificate of Analysis", body: "Independent, third-party lab verification issued per batch, covering cannabinoid content and contaminant screening." },
    { title: "Buyer Import Responsibility", body: "We supply full export documentation to support your compliance process; securing import authorization in your jurisdiction remains your responsibility." },
  ],
  faqs: [
    { q: "Do you export to any country?", a: "No. We only export cannabis and extracts to buyers who can demonstrate valid import authorization in their destination jurisdiction — this is a controlled substance in most markets and we don't ship without that confirmation." },
    { q: "What's the minimum order for extracts?", a: "1kg for most extract categories; isolates can start lower depending on the specific cannabinoid. Container-load pricing applies above 25kg." },
    { q: "Can you provide a sample before a full order?", a: "Yes — sample orders with full CoA documentation are available to verify quality and paperwork before committing to volume." },
  ],
  relatedMarkets: [
    { label: "Export to UK", href: "/export-to-uk" },
    { label: "Export to Germany", href: "/export-to-germany" },
    { label: "Export to Australia", href: "/export-to-australia" },
    { label: "Export to Canada", href: "/export-to-canada" },
  ],
  relatedPosts: [
    { category: "Compliance", title: "Choosing a GACP cannabis supplier in Thailand: a 12-point checklist", href: "/blog/choosing-gacp-cannabis-supplier-thailand-checklist" },
    { category: "Regulation", title: "Importing medical cannabis into the UK from Thailand", href: "/blog/import-medical-cannabis-thailand-to-uk" },
    { category: "Regulation", title: "Importing medical cannabis from Thailand to Germany", href: "/blog/import-medical-cannabis-thailand-to-germany" },
  ],
};

export default function Page() {
  return <VerticalPageTemplate data={data} />;
}
