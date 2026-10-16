// src/app/export-to-uk/page.tsx
import type { Metadata } from "next";
import MarketPageTemplate, { MarketData } from "@/components/markets/MarketPageTemplate";

const TITLE = "Thailand Export to the UK | Cannabis, Hemp, Construction, Appliances & HVAC";
const DESCRIPTION =
  "Sourcing from Thailand for UK import — medical cannabis for Home Office-licensed importers, Novel Food-compliant hemp derivatives, CE-marked appliances, and construction materials.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export-to-uk" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/export-to-uk" },
};

const data: MarketData = {
  slug: "export-to-uk",
  country: "United Kingdom",
  eyebrow: "Export Market",
  heroTitle: "Sourcing from Thailand for the UK.",
  heroSubtitle:
    "Medical cannabis for licensed importers, Novel Food-compliant hemp derivatives, and CE-marked appliances, construction materials, and HVAC equipment — documented for UK customs from the outset.",
  stats: [
    { value: "2018", label: "UK Medical Cannabis Framework" },
    { value: "CE", label: "Appliance Marking Standard" },
    { value: "48h", label: "Enquiry Response" },
  ],
  intro: [
    "The UK has permitted specialist medical cannabis prescribing since 2018, with import handled under Home Office controlled-drug licensing — this is a licensed-importer-only channel, not an open commercial market, and we only ship cannabis product to buyers who hold the corresponding Home Office import license.",
    "Hemp-derived CBD sits on a separate, more accessible track under the UK's Novel Food framework, with THC content and product-form requirements distinct from the medical cannabis pathway.",
    "The UK is also one of our more active markets for construction materials, appliances, and HVAC equipment, where CE marking (retained in UK regulation post-Brexit via UKCA transition arrangements) is the relevant compliance standard rather than anything cannabis-specific.",
  ],
  verticalNotes: [
    { vertical: "Cannabis", href: "/cannabis-export", note: "Licensed-importer channel only, under Home Office controlled-drug import authorization — we verify your license before processing an order." },
    { vertical: "Hemp Derivatives", href: "/hemp-export", note: "Sourced against UK Novel Food framework requirements; confirm current THC threshold and product-form rules with us before ordering." },
    { vertical: "Construction Materials", href: "/construction-materials-export", note: "Structural steel and finishing materials with certificate of origin, suited to UK development project documentation requirements." },
    { vertical: "Appliances & HVAC", href: "/appliances-export", note: "CE-marked residential and commercial equipment, sourced with UK/UKCA transition compliance in mind." },
  ],
  logisticsNote:
    "Shipments to the UK typically route via major container ports with standard customs clearance timelines for non-controlled goods. Cannabis shipments involve additional Home Office-aligned documentation and correspondingly longer lead times — factor this into your project or supply timeline planning.",
  faqs: [
    { q: "Can any UK business import cannabis through you?", a: "No — only buyers holding a valid Home Office import license for controlled drugs. We verify this before any cannabis order is processed." },
    { q: "Is hemp-derived CBD easier to import than cannabis?", a: "Generally yes — it follows the Novel Food framework rather than controlled-drug licensing, though THC threshold and product-form compliance still apply and should be confirmed for your specific product." },
    { q: "Do appliances need UKCA marking as well as CE?", a: "UK marking requirements have been in transition — confirm current UKCA/CE acceptance for your product category with us before ordering, since requirements have shifted over time." },
  ],
  relatedPosts: [
    { category: "Regulation", title: "Importing medical cannabis into the UK from Thailand: Home Office & MHRA licensing", href: "/blog/import-medical-cannabis-thailand-to-uk" },
    { category: "Compliance", title: "Choosing a GACP cannabis supplier in Thailand: a 12-point checklist", href: "/blog/choosing-gacp-cannabis-supplier-thailand-checklist" },
    { category: "Compliance", title: "Reading a certificate of analysis: what buyers need to check", href: "/blog/certificate-of-analysis-what-to-check" },
  ],
};

export default function Page() {
  return <MarketPageTemplate data={data} />;
}
