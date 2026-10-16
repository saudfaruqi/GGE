// src/app/export-to-usa/page.tsx
import type { Metadata } from "next";
import MarketPageTemplate, { MarketData } from "@/components/markets/MarketPageTemplate";

const TITLE = "Thailand Export to the USA | Hemp, Construction, Appliances & HVAC";
const DESCRIPTION =
  "Sourcing from Thailand for US import — Farm Bill-compliant hemp derivatives, UL/ETL-certified commercial appliances, construction materials, and HVAC equipment. Note: cannabis remains federally restricted.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export-to-usa" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/export-to-usa" },
};

const data: MarketData = {
  slug: "export-to-usa",
  country: "United States",
  eyebrow: "Export Market",
  heroTitle: "Sourcing from Thailand for the US.",
  heroSubtitle:
    "Farm Bill-compliant hemp derivatives, UL/ETL-certified commercial appliances, and construction and HVAC equipment — sourced for US import. Note: high-THC cannabis remains federally restricted and is not part of our US-bound supply.",
  stats: [
    { value: "0.3%", label: "Federal Hemp THC Limit" },
    { value: "UL/ETL", label: "Commercial Equipment Standard" },
    { value: "48h", label: "Enquiry Response" },
  ],
  intro: [
    "Cannabis remains a Schedule I controlled substance under US federal law, and there is no legal commercial pathway for importing high-THC cannabis into the US regardless of individual state legalization — we do not ship cannabis product to US-based buyers under any circumstances.",
    "Hemp is a different story: the 2018 Farm Bill established a federal legal framework for hemp-derived products at or below 0.3% Delta-9 THC, and this is where our US supply focuses — CBD, CBG, and CBN isolates, water-soluble formats, and raw paste, all documented against the federal threshold.",
    "The US is also one of our strongest markets for the non-botanical verticals — commercial kitchen equipment sourced UL/ETL certified for hospitality and food-service buyers, alongside construction materials and HVAC equipment for developers and contractors.",
  ],
  verticalNotes: [
    { vertical: "Hemp Derivatives", href: "/hemp-export", note: "Sourced and documented against the federal 0.3% Delta-9 THC threshold — note some states apply additional restrictions beyond the federal baseline." },
    { vertical: "Construction Materials", href: "/construction-materials-export", note: "Structural steel and finishing materials sourced to spec, with certificate of origin for US customs clearance." },
    { vertical: "Appliances", href: "/appliances-export", note: "Commercial kitchen and food-service equipment sourced UL/ETL certified for the US market specifically." },
    { vertical: "HVAC Equipment", href: "/hvac-export", note: "Components and parts supply available for buyers managing US-based maintenance contracts on installed equipment." },
  ],
  logisticsNote:
    "Hemp shipments to the US should account for state-level variation on top of the federal baseline — some states apply additional restrictions or licensing requirements beyond the 0.3% federal threshold, and we flag this during the enquiry process rather than assuming federal compliance alone is sufficient for every state destination.",
  faqs: [
    { q: "Can you ship cannabis to US buyers under any state's legal framework?", a: "No. Cannabis remains federally restricted regardless of state law, and we don't ship cannabis product to the US under any circumstances." },
    { q: "Is 0.3% THC hemp legal to import into every US state?", a: "It's legal under the federal Farm Bill framework, but some states impose additional restrictions beyond the federal threshold — confirm your specific state's requirements before ordering." },
    { q: "What certification do commercial kitchen appliances need for the US?", a: "UL or ETL certification is the standard requirement we source against for US-bound commercial kitchen and food-service equipment." },
  ],
};

export default function Page() {
  return <MarketPageTemplate data={data} />;
}
