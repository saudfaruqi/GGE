// src/app/export-to-australia/page.tsx
import type { Metadata } from "next";
import MarketPageTemplate, { MarketData } from "@/components/markets/MarketPageTemplate";

const TITLE = "Thailand Export to Australia | Cannabis, Hemp, Construction, Appliances & HVAC";
const DESCRIPTION =
  "Sourcing from Thailand for Australian import — TGA-pathway medical cannabis, hemp derivatives, SAA-certified appliances, structural materials, and tropical-rated HVAC for the Australian market.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/export-to-australia" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://www.globalgreenexport.com/export-to-australia" },
};

const data: MarketData = {
  slug: "export-to-australia",
  country: "Australia",
  eyebrow: "Export Market",
  heroTitle: "Sourcing from Thailand for Australia.",
  heroSubtitle:
    "TGA-pathway medical cannabis, hemp derivatives, and SAA-certified appliances alongside HVAC equipment built for climates as demanding as Australia's own — sourced and documented for Australian import.",
  stats: [
    { value: "TGA", label: "Medical Cannabis Pathway" },
    { value: "SAA", label: "Appliance Certification" },
    { value: "48h", label: "Enquiry Response" },
  ],
  intro: [
    "Australia permits medical cannabis import through the Therapeutic Goods Administration's Special Access Scheme and Authorised Prescriber pathways, both of which require the importing entity to hold the relevant TGA approval — we ship cannabis product only to buyers who can confirm that status.",
    "Hemp as a food product has been legal in Australia since 2017, though CBD as a therapeutic good sits under separate TGA regulation from hemp food products — the pathway that applies depends on how your specific product is classified, which we confirm before sourcing.",
    "Australia is also a strong fit for our HVAC vertical specifically — units engineered for high-humidity, high-ambient-temperature deployment translate directly to the demands of the Australian climate across most of the country's population centers.",
  ],
  verticalNotes: [
    { vertical: "Cannabis", href: "/cannabis-export", note: "TGA Special Access Scheme or Authorised Prescriber pathway required — we confirm your approval status before processing." },
    { vertical: "Hemp Derivatives", href: "/hemp-export", note: "Classification-dependent — hemp food product rules differ from CBD-as-therapeutic-good rules; we confirm the correct pathway for your product." },
    { vertical: "Construction Materials", href: "/construction-materials-export", note: "Structural steel and finishing materials with certificate of origin, sourced to Australian project specifications." },
    { vertical: "Appliances & HVAC", href: "/appliances-export", note: "SAA-certified appliances and tropical-rated HVAC units, well suited to Australian climate conditions." },
  ],
  logisticsNote:
    "Australia's biosecurity import requirements are notably stricter than many markets for agricultural and botanical products — cannabis and hemp shipments should expect biosecurity review in addition to standard customs clearance. Non-botanical verticals (appliances, HVAC, most construction materials) move through more standard clearance timelines.",
  faqs: [
    { q: "Can I import cannabis to Australia without TGA approval?", a: "No — commercial cannabis import requires the corresponding TGA pathway approval on the importer's side. We verify this before any order is processed." },
    { q: "Does Australia's hemp food legalization cover CBD products too?", a: "Not automatically — hemp as a food product and CBD as a therapeutic good are regulated separately. We confirm which classification applies to your specific product before sourcing." },
    { q: "Are HVAC units sourced for Australia different from other markets?", a: "Not fundamentally — the same tropical/high-ambient-temperature engineering that suits Southeast Asian deployment tends to translate well to Australian conditions, particularly in northern and coastal regions." },
  ],
};

export default function Page() {
  return <MarketPageTemplate data={data} />;
}
