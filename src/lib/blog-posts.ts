// src/lib/blog-posts.ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readTime: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gacp-certification-explained",
    title: "GACP Certification Explained: What Buyers Need to Verify Before Importing Thai Cannabis",
    description:
      "What GACP certification actually covers, how it differs from GMP, and the specific documentation a buyer should request before importing cannabis or hemp from a Thai supplier.",
    category: "Compliance",
    date: "2026-07-14",
    readTime: "8 min read",
    excerpt:
      "GACP gets cited constantly in cannabis sourcing conversations, but few buyers actually know what it certifies — or what it doesn't. Here's the breakdown.",
  },
  {
    slug: "thailand-cannabis-export-license-guide",
    title: "Thailand Cannabis Export License Requirements: The Thai FDA Process for International Buyers",
    description:
      "A walkthrough of how Thai FDA export licensing for cannabis and hemp actually works, who holds licenses today, and what buyers should ask a supplier to confirm.",
    category: "Regulation",
    date: "2026-07-21",
    readTime: "9 min read",
    excerpt:
      "Only a handful of licenses exist for high-THC extract export from Thailand. Here's what the license landscape looks like and how to verify a supplier actually holds one.",
  },
  {
    slug: "escrow-protected-b2b-trade-explained",
    title: "Escrow-Protected B2B Trade: How It Works for Regulated Goods Import",
    description:
      "How third-party escrow settlement works for cross-border B2B trade in regulated goods, why it matters more for cannabis/hemp than commodity trade, and what to check before you fund one.",
    category: "Trade & Finance",
    date: "2026-06-30",
    readTime: "7 min read",
    excerpt:
      "Wiring a deposit to a new overseas supplier is how most first-time cross-border trades go wrong. Escrow exists specifically to remove that risk — here's the mechanics.",
  },
  {
    slug: "hemp-derivative-import-compliance-eu-us",
    title: "Hemp Derivative Import Compliance: EU vs US THC Thresholds for CBD, CBG & CBN",
    description:
      "How EU and US THC compliance thresholds differ for hemp-derived CBD, CBG, and CBN, and what that means for sourcing wholesale isolates for either market.",
    category: "Compliance",
    date: "2026-08-04",
    readTime: "8 min read",
    excerpt:
      "0.2% vs 0.3% sounds like a rounding error until it's the difference between a customs clearance and a seized shipment. Here's how the two regimes actually diverge.",
  },
  {
    slug: "thailand-cannabis-export-digital-filing-dtam-nsw",
    title: "Thailand's New Digital Cannabis Export Pipeline: What DTAM Next and the National Single Window Change",
    description:
      "Thailand connected its DTAM Next system to the Customs Department's National Single Window in 2026 — replacing manual Por Thor 32 filings. Here's what changed for exporters and buyers.",
    category: "Industry News",
    date: "2026-08-20",
    readTime: "6 min read",
    excerpt:
      "Thailand just digitized the paperwork bottleneck that used to slow every cannabis export shipment down. Here's what the DTAM Next → NSW pipeline actually automates.",
  },
  {
    slug: "thailand-hemp-cbd-market-2026",
    title: "Thailand's Hemp & CBD Market in 2026: Why Buyers Are Sourcing Here",
    description:
      "Thailand was the first Asian country to legalize hemp-derived CBD commercially. Here's why the market has scaled the way it has, and what it means for wholesale buyers.",
    category: "Industry News",
    date: "2026-08-11",
    readTime: "7 min read",
    excerpt:
      "Thailand didn't just legalize hemp — it built the region's most developed hemp supply chain around that legalization. Here's what that means if you're sourcing wholesale.",
  },
  {
    slug: "container-load-sourcing-thailand-guide",
    title: "Container-Load Sourcing from Thailand: A Buyer's Guide to Consolidating Multiple Product Categories",
    description:
      "How container-load consolidation works when sourcing across multiple product categories from Thailand — pricing structure, logistics, and when it actually saves money.",
    category: "Trade & Finance",
    date: "2026-07-28",
    readTime: "7 min read",
    excerpt:
      "Ordering five separate categories in five separate shipments is rarely the efficient move. Here's how container consolidation actually works, and when it doesn't make sense.",
  },
  {
    slug: "certificate-of-analysis-what-to-check",
    title: "Reading a Certificate of Analysis: What Buyers Actually Need to Check",
    description:
      "A Certificate of Analysis is only useful if you know what to check on it. Here's a practical breakdown of what matters on a CoA and what's just noise.",
    category: "Compliance",
    date: "2026-08-27",
    readTime: "6 min read",
    excerpt:
      "Most buyers glance at a CoA, see a lab logo, and move on. Here's what actually matters on the document — and the handful of details that catch problems before they ship.",
  },
  {
    slug: "thailand-construction-materials-export-guide",
    title: "Sourcing Construction Materials from Thailand: A Guide for Developers and Contractors",
    description:
      "What developers and contractors need to know about sourcing structural steel, prefab components, and finishing materials from Thailand — specs, documentation, and lead times.",
    category: "Trade & Finance",
    date: "2026-06-16",
    readTime: "8 min read",
    excerpt:
      "Structural steel sourcing from a new country isn't just about price per ton — it's about mill certificates, spec matching, and inspection before the container closes.",
  },
  {
    slug: "import-medical-cannabis-thailand-to-uk",
    title: "Importing Medical Cannabis into the UK from Thailand: Home Office & MHRA Licensing Explained",
    description:
      "How the UK medical cannabis import route actually works — Home Office import licences, the Specialist Importer requirement, the MHRA notification, and what a Thai supplier must be able to evidence.",
    category: "Regulation",
    date: "2026-10-15",
    readTime: "9 min read",
    excerpt:
      "The UK isn't an open commercial market — it's a closed, licence-gated channel. Here's who is allowed to import, and why a supplier's GMP certificate decides whether a shipment can happen at all.",
  },
  {
    slug: "cbd-isolate-wholesale-guide",
    title: "CBD Isolate Wholesale: Pricing, MOQs and What to Verify Before You Buy",
    description:
      "A practical guide to buying CBD isolate in bulk — current wholesale price ranges, MOQ tiers, the CoA checks that matter, and the EU novel-food rules that apply to ingestible products.",
    category: "Compliance",
    date: "2026-10-08",
    readTime: "8 min read",
    excerpt:
      "Isolate is the most standardised hemp derivative you can buy — and the most vulnerable to quietly substandard supply. Here's what to pay and what to check.",
  },
  {
    slug: "choosing-gacp-cannabis-supplier-thailand-checklist",
    title: "Choosing a GACP Cannabis Supplier in Thailand: A 12-Point Due-Diligence Checklist",
    description:
      "A 12-point checklist for vetting a GACP-certified cannabis supplier in Thailand before you commit to volume — certificates, CoAs, lab accreditation, traceability and escrow.",
    category: "Compliance",
    date: "2026-09-24",
    readTime: "9 min read",
    excerpt:
      "Thailand has more suppliers claiming GACP certification than farms that can evidence it at site level. This is the checklist that tells them apart.",
  },
  {
    slug: "import-medical-cannabis-thailand-to-germany",
    title: "Importing Medical Cannabis from Thailand to Germany: Licensing & Documentation Guide",
    description:
      "How medical cannabis import into Germany works under the MedCanG framework — BfArM authorisation, the GMP requirement for flower processing, and the documentation a Thai supplier must provide.",
    category: "Regulation",
    date: "2026-09-10",
    readTime: "9 min read",
    excerpt:
      "Germany is Europe's largest medical cannabis market — and the one where 'GACP plus a lab report' most reliably fails. Here's what the German route actually requires.",
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
