// src/app/hemp-export/page.tsx
import type { Metadata } from "next";
import VerticalPageTemplate, { VerticalData } from "@/components/verticals/VerticalPageTemplate";

const TITLE = "Wholesale Hemp Derivative Export (CBD, CBG, CBN) from Thailand";
const DESCRIPTION =
  "Wholesale CBD, CBG, and CBN isolates, water-soluble formats, and raw hemp paste — exported from Thailand and Colorado, with batch-specific CoAs and THC-threshold compliance documentation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hemp-export" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/hemp-export" },
};

const data: VerticalData = {
  slug: "hemp-export",
  navLabel: "Hemp Export",
  eyebrow: "Wellness & B2B",
  heroTitle: "Wholesale hemp derivatives — CBD, CBG, CBN.",
  heroSubtitle:
    "Crystalline isolates, water-soluble formats, and raw paste sourced from Thailand and Colorado, with THC-threshold documentation matched to your destination market's actual testing standard.",
  stats: [
    { value: "3", label: "Cannabinoid Isolates" },
    { value: "2", label: "Sourcing Origins" },
    { value: "500g", label: "Minimum Per Isolate" },
  ],
  overview: [
    "Hemp derivatives sit on a materially more open commercial framework than high-THC cannabis, but compliance still hinges on getting the THC threshold documentation right for your specific destination — which is where most first-time hemp import shipments actually run into trouble, not on the underlying legality of the trade itself.",
    "We source from both Thai and Colorado-based growers, giving buyers flexibility on origin depending on preferred sourcing narrative, price point, or specific regulatory documentation needs.",
    "Every isolate order ships with a batch-specific Certificate of Analysis, and we'll confirm upfront whether that CoA reports Delta-9 THC or total THC — since destination markets don't uniformly test for the same metric.",
  ],
  specs: [
    { title: "Crystalline Isolates", body: "CBD, CBG, and CBN in crystalline powder form, independently verified, with a CoA issued per batch." },
    { title: "Water-Soluble Formats", body: "Formulated for beverage and wellness-product manufacturers requiring consistent, predictable dosing across production runs." },
    { title: "Raw Paste & Bulk", body: "Raw hemp paste for further processing, sourced from Thai and Colorado origins, EU-compliant THC thresholds maintained across formats." },
  ],
  tags: ["EU Compliant", "US Compliant", "Colorado & Thai Origin", "Batch-Specific CoA"],
  compliance: [
    { title: "THC Threshold Verification", body: "We confirm which threshold and testing methodology (Delta-9 vs. total THC) applies before your order ships, matched to your destination market." },
    { title: "Certificate of Analysis", body: "Independent lab verification issued per batch — not a reference CoA — covering cannabinoid profile and THC content." },
    { title: "Origin Documentation", body: "Certificate of origin provided for every shipment, confirming whether product is Thai or Colorado-sourced." },
    { title: "Finished-Product Guidance", body: "If your order will be sold as a finished consumer good rather than reformulated, we flag additional regulation (e.g. EU novel food rules) that may apply beyond the raw THC threshold." },
  ],
  faqs: [
    { q: "What's the difference between Delta-9 and total THC testing?", a: "Total THC accounts for THCA, which converts to Delta-9 THC when heated — a product compliant under Delta-9-only testing can read differently under a total-THC standard. We confirm which applies to your destination before shipping." },
    { q: "Can I order a mix of isolates in one shipment?", a: "Yes — CBD, CBG, and CBN can be consolidated into a single shipment, each with its own batch CoA." },
    { q: "Do you supply for finished consumer products or only raw material?", a: "Both — raw isolate and paste for reformulation, or discuss finished-format requirements with our team if you need guidance on additional regulation that applies at that stage." },
  ],
  relatedMarkets: [
    { label: "Export to USA", href: "/export-to-usa" },
    { label: "Export to Germany", href: "/export-to-germany" },
    { label: "Export to UK", href: "/export-to-uk" },
    { label: "Export to Canada", href: "/export-to-canada" },
  ],
  relatedPosts: [
    { category: "Compliance", title: "CBD isolate wholesale: pricing, MOQs and what to verify", href: "/blog/cbd-isolate-wholesale-guide" },
    { category: "Compliance", title: "Hemp derivative import compliance: EU vs US THC thresholds", href: "/blog/hemp-derivative-import-compliance-eu-us" },
    { category: "Compliance", title: "Reading a certificate of analysis: what buyers need to check", href: "/blog/certificate-of-analysis-what-to-check" },
  ],
};

export default function Page() {
  return <VerticalPageTemplate data={data} />;
}
