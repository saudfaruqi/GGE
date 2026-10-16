// src/app/export-to-germany/page.tsx
import type { Metadata } from "next";
import MarketPageTemplate, { MarketData } from "@/components/markets/MarketPageTemplate";

const TITLE = "Thailand Export to Germany | Cannabis, Hemp, Construction, Appliances & HVAC";
const DESCRIPTION =
  "Sourcing from Thailand for German import — medical and licensed cannabis, EU Novel Food-compliant hemp derivatives, CE-marked appliances, and construction materials for the German market.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export-to-germany" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/export-to-germany" },
};

const data: MarketData = {
  slug: "export-to-germany",
  country: "Germany",
  eyebrow: "Export Market",
  heroTitle: "Sourcing from Thailand for Germany.",
  heroSubtitle:
    "Germany's 2024 cannabis reform and long-standing medical cannabis framework, alongside CE-marked appliances and construction materials — sourced and documented for German import requirements.",
  stats: [
    { value: "2024", label: "Cannabis Law Reform" },
    { value: "EU", label: "Novel Food Framework" },
    { value: "48h", label: "Enquiry Response" },
  ],
  intro: [
    "Germany partially reformed its cannabis law in 2024, permitting adult possession and home cultivation, while medical cannabis has sat on its own prescription-based framework since 2017. Since the 2024 reform, medical cannabis is governed by the Medicinal Cannabis Act (MedCanG) rather than the general narcotics framework — but commercial import is still licensed, requiring BfArM authorisation under MedCanG. We work with buyers who hold that authorisation rather than shipping into the adult-use consumption space directly.",
    "Hemp-derived CBD and other cannabinoid isolates fall under EU Novel Food regulation, which applies uniformly across Germany as an EU member state, alongside Germany's own THC threshold enforcement.",
    "Construction materials, appliances, and HVAC equipment ship under standard EU CE marking requirements, with no cannabis-specific complexity — this is typically the more straightforward sourcing category for German buyers new to working with us.",
  ],
  verticalNotes: [
    { vertical: "Cannabis", href: "/cannabis-export", note: "Pharmaceutical import channel under BfArM authorisation (MedCanG) — confirm your authorisation status before ordering." },
    { vertical: "Hemp Derivatives", href: "/hemp-export", note: "EU Novel Food-compliant isolates and formats, with German-specific THC threshold documentation confirmed before shipping." },
    { vertical: "Construction Materials", href: "/construction-materials-export", note: "Structural and finishing materials with certificate of origin, suited to German and broader EU development projects." },
    { vertical: "Appliances & HVAC", href: "/appliances-export", note: "CE-marked equipment sourced for the German and wider EU market under standard conformity requirements." },
  ],
  logisticsNote:
    "As an EU member state, Germany benefits from harmonized customs procedures for non-controlled goods once cleared into the EU. Cannabis and hemp shipments carry additional BfArM-authorisation or Novel Food documentation respectively — build this into your timeline rather than assuming standard freight timelines apply across all verticals.",
  faqs: [
    { q: "Does Germany's 2024 reform mean cannabis import is now open commercially?", a: "No — the 2024 reform covers personal possession and home cultivation, not commercial import. Commercial supply still runs through the pharmaceutical licensing framework under MedCanG, requiring BfArM authorisation." },
    { q: "Is the THC threshold for hemp the same across the whole EU?", a: "Not fully harmonized — Germany applies its own enforcement alongside EU Novel Food rules. We confirm the current German-specific threshold before your order ships." },
    { q: "Can materials cleared into Germany move freely to other EU countries?", a: "Generally yes for non-controlled goods within the EU single market, though product-specific rules can still vary by destination member state — confirm for your specific case." },
  ],
  relatedPosts: [
    { category: "Regulation", title: "Importing medical cannabis from Thailand to Germany: licensing & documentation", href: "/blog/import-medical-cannabis-thailand-to-germany" },
    { category: "Compliance", title: "Choosing a GACP cannabis supplier in Thailand: a 12-point checklist", href: "/blog/choosing-gacp-cannabis-supplier-thailand-checklist" },
    { category: "Compliance", title: "Hemp derivative import compliance: EU vs US THC thresholds", href: "/blog/hemp-derivative-import-compliance-eu-us" },
  ],
};

export default function Page() {
  return <MarketPageTemplate data={data} />;
}
