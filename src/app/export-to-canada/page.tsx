// src/app/export-to-canada/page.tsx
import type { Metadata } from "next";
import MarketPageTemplate, { MarketData } from "@/components/markets/MarketPageTemplate";

const TITLE = "Thailand Export to Canada | Cannabis, Hemp, Construction, Appliances & HVAC";
const DESCRIPTION =
  "Sourcing from Thailand for Canadian import — Health Canada-licensed cannabis, hemp derivatives, and CSA-compliant appliances, construction materials, and HVAC equipment for the Canadian market.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export-to-canada" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/export-to-canada" },
};

const data: MarketData = {
  slug: "export-to-canada",
  country: "Canada",
  eyebrow: "Export Market",
  heroTitle: "Sourcing from Thailand for Canada.",
  heroSubtitle:
    "Health Canada-licensed cannabis import, hemp derivatives, and CSA-compliant appliances and HVAC — one of the more established legal frameworks we work within, sourced and documented accordingly.",
  stats: [
    { value: "2018", label: "Cannabis Act in Force" },
    { value: "CSA", label: "Appliance Certification" },
    { value: "48h", label: "Enquiry Response" },
  ],
  intro: [
    "Canada has operated a federally legal recreational and medical cannabis framework since the Cannabis Act came into force in 2018, with commercial import requiring a Health Canada license under that Act — this is one of the more established legal import frameworks we work within, though the licensing requirement is still absolute for any commercial shipment.",
    "Hemp is regulated separately under Canadian industrial hemp rules, with its own THC threshold and licensing structure distinct from the Cannabis Act framework that governs higher-THC product.",
    "Construction materials, appliances, and HVAC equipment ship under standard Canadian and CSA certification requirements, with no cannabis-specific complexity involved.",
  ],
  verticalNotes: [
    { vertical: "Cannabis", href: "/cannabis-export", note: "Health Canada import license required under the Cannabis Act — we verify license status before processing any order." },
    { vertical: "Hemp Derivatives", href: "/hemp-export", note: "Regulated under Canadian industrial hemp rules, distinct from the Cannabis Act framework — we confirm the applicable threshold before shipping." },
    { vertical: "Construction Materials", href: "/construction-materials-export", note: "Structural and finishing materials with certificate of origin, suited to Canadian development project requirements." },
    { vertical: "Appliances & HVAC", href: "/appliances-export", note: "CSA-compliant appliances and HVAC equipment, sourced for Canadian market standards." },
  ],
  logisticsNote:
    "Cannabis shipments to Canada move through Health Canada's licensed-import framework and should be planned with the corresponding documentation lead time in mind. Non-cannabis verticals move through standard customs clearance without cannabis-specific delays.",
  faqs: [
    { q: "Does Canada's legal cannabis market mean any business can import?", a: "No — commercial import still requires a Health Canada license under the Cannabis Act, regardless of the domestic market being federally legal." },
    { q: "Is hemp treated the same as cannabis under Canadian law?", a: "No — industrial hemp is regulated separately, with its own THC threshold and licensing path distinct from the Cannabis Act." },
    { q: "What certification applies to appliances and HVAC for Canada?", a: "CSA certification is the standard requirement we source against for the Canadian market." },
  ],
};

export default function Page() {
  return <MarketPageTemplate data={data} />;
}
