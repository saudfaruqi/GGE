"use client";

import { useEffect, useCallback, memo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. TYPES
// ============================================================

type InventoryCategory = {
  readonly n: string;
  readonly title: string;
  readonly items: readonly string[];
};

type Tier = {
  readonly name: string;
  readonly subtitle: string;
  readonly features: readonly string[];
  readonly highlight: boolean;
  readonly badge?: string; // Made optional with ?
};

type Requirement = {
  readonly n: string;
  readonly title: string;
};

// ============================================================
// 2. HOOKS
// ============================================================

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }, []);
}

// ============================================================
// 3. DATA
// ============================================================

const INVENTORY = [
  {
    n: "01",
    title: "Whole Flower",
    items: [
      "Indoor A-Grade",
      "Greenhouse Premium",
      "Outdoor / Sun-Grown",
      "Trimmed & Manicured",
      "Machine-Trimmed",
    ],
  },
  {
    n: "02",
    title: "Extracts & Oils",
    items: [
      "Full-Spectrum Oil",
      "Broad-Spectrum Distillate",
      "CBD Isolate Powder",
      "CBG Isolate",
      "Raw THCA Crystalline",
    ],
  },
  {
    n: "03",
    title: "Research-Grade",
    items: [
      "High-Purity Isolates",
      "Certified Standards",
      "Terpene Isolates",
      "Custom Analytical Batches",
    ],
  },
  {
    n: "04",
    title: "Hemp Products",
    items: [
      "Hemp Biomass",
      "CBD Hemp Flower",
      "Hemp Seed Oil",
      "CBG Hemp",
      "Hemp Extract Powder",
    ],
  },
] as const;

const TIERS = [
  {
    name: "Standard",
    subtitle: "From 5 kg",
    features: [
      "Minimum 5 kg per SKU",
      "Lead time 4–6 weeks",
      "CoA included",
      "EXW Bangkok pricing",
      "Standard Support",
    ],
    highlight: false,
  },
  {
    name: "Commercial",
    subtitle: "From 25 kg",
    features: [
      "Minimum 25 kg per SKU",
      "Priority: 2–4 weeks",
      "Full documentation pack",
      "CIF pricing available",
      "Dedicated Manager",
      "Volume Discounting",
    ],
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    subtitle: "100 kg+",
    features: [
      "100 kg+ per order",
      "Negotiated lead times",
      "White-label options",
      "Custom formulations",
      "Quarterly contracts",
      "Escrow standard",
    ],
    highlight: false,
  },
] as const;

const REQUIREMENTS = [
  { n: "01", title: "Valid Import Licence" },
  { n: "02", title: "Business Registration" },
  { n: "03", title: "Intended Use Declaration" },
  { n: "04", title: "End-User Certificate" },
] as const;

const LOGISTICS = [
  { label: "Incoterms", value: "EXW · FOB · CIF" },
  { label: "Transport", value: "Air & Sea Cargo" },
  { label: "Packaging", value: "GDP-Compliant" },
  { label: "Tracking", value: "Real-time API" },
] as const;

// ============================================================
// 4. COMPONENTS
// ============================================================



// ---- 4.2 INVENTORY CARD ----
const InventoryCard = memo(function InventoryCard({
  category,
  index,
}: {
  category: (typeof INVENTORY)[number];
  index: number;
}) {
  return (
    <div
      className="bg-[var(--paper)] px-8 py-12 reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6">
        — {category.n}
      </div>
      <h3 className="font-sans font-bold text-[16px] tracking-tight text-[var(--ink)] mb-8 uppercase">
        {category.title}
      </h3>
      <ul className="space-y-3">
        {category.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-sans text-[13px] text-[var(--ink-60)]"
          >
            <div className="w-1 h-1 rounded-full bg-[var(--forest)] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});
InventoryCard.displayName = "InventoryCard";

// ---- 4.3 TIER CARD ----
const TierCard = memo(function TierCard({
  tier,
  index,
}: {
  tier: Tier;
  index: number;
}) {
  return (
    <div
      className={`px-8 py-12 relative reveal ${
        tier.highlight
          ? "bg-[var(--ink)] text-white"
          : "bg-[var(--paper-2)]"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.badge && (
        <div className="absolute top-6 right-6 font-mono text-[8px] tracking-widest uppercase px-3 py-1.5 bg-[var(--forest)] text-[var(--paper)]">
          {tier.badge}
        </div>
      )}
      <div
        className={`font-mono text-[9px] tracking-[0.3em] uppercase mb-4 ${
          tier.highlight ? "text-[var(--forest-mid)]" : "text-[var(--forest)]"
        }`}
      >
        {tier.subtitle}
      </div>
      <h3
        className={`font-serif text-[clamp(28px,3vw,42px)] leading-none tracking-tighter mb-10 ${
          tier.highlight ? "text-white/90" : "text-[var(--ink)]"
        }`}
      >
        {tier.name}
      </h3>
      <ul className="space-y-4 mb-12">
        {tier.features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-3 font-sans text-[13px] ${
              tier.highlight ? "text-white/60" : "text-[var(--ink-60)]"
            }`}
          >
            <div
              className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${
                tier.highlight ? "bg-[var(--forest-mid)]" : "bg-[var(--forest)]"
              }`}
            />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/#contact"
        className={`block text-center font-mono text-[10px] tracking-widest uppercase py-4 px-6 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 ${
          tier.highlight
            ? "bg-[var(--forest)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)] focus-visible:ring-[var(--forest)] focus-visible:ring-offset-[var(--ink)]"
            : "border border-[var(--ink)]/20 text-[var(--ink-60)] hover:bg-[var(--ink)] hover:text-white hover:border-[var(--ink)] focus-visible:ring-[var(--ink)]"
        }`}
      >
        Request Pricing
      </Link>
    </div>
  );
});
TierCard.displayName = "TierCard";

// ---- 4.4 REQUIREMENT ROW ----
const RequirementRow = memo(function RequirementRow({
  requirement,
  index,
}: {
  requirement: (typeof REQUIREMENTS)[number];
  index: number;
}) {
  return (
    <div
      className="flex items-center gap-8 bg-[var(--paper)] px-8 py-6 reveal"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)]">
        {requirement.n}
      </span>
      <span className="font-sans text-[14px] text-[var(--ink-70)]">
        {requirement.title}
      </span>
    </div>
  );
});
RequirementRow.displayName = "RequirementRow";

// ---- 4.5 SCROLL TO TOP ----
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--forest)] text-white rounded-full shadow-lg hover:bg-[var(--forest-mid)] transition-all duration-300 flex items-center justify-center border border-white/10 focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

// ---- 4.6 COOKIE CONSENT ----
function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") setAccepted(true);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
  }, []);

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[var(--ink)] border-t border-white/10 p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[12px] text-white/70 leading-relaxed max-w-2xl">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[var(--forest)] text-white font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--forest-mid)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
          >
            Accept
          </button>
          <Link
            href="/privacy"
            className="px-6 py-2 border border-white/20 text-white/60 font-mono text-[10px] tracking-widest uppercase hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 5. MAIN PAGE
// ============================================================

export default function WholesalePage() {
  useReveal();
  const smoothScroll = useSmoothScroll();

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Wholesale Cannabis & Hemp Supply",
    description:
      "Bulk GACP-certified medicinal cannabis and hemp products for licensed dispensaries, pharmaceutical importers, and research institutions.",
    brand: {
      "@type": "Brand",
      name: "Global Green Exports",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Volume-based wholesale tiers from 5kg to 100kg+",
    },
    category: "Wholesale Cannabis",
  };

  return (
    <>
      
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ── HERO ── */}
        <section
          className="bg-[var(--ink)] px-6 md:px-12 py-32 md:py-48 relative overflow-hidden"
          aria-label="Wholesale hero"
        >
          <div
            className="absolute inset-0 flex items-end pointer-events-none select-none p-12 opacity-10"
            aria-hidden="true"
          >
            <div className="grid grid-cols-6 gap-1 w-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-px bg-white" />
              ))}
            </div>
          </div>

          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay noise-overlay"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1800px] mx-auto">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest-mid)] mb-8">
              — Bulk Supply
            </div>
            <h1 className="font-serif text-[clamp(48px,9vw,120px)] leading-[0.85] tracking-tighter text-white/90 mb-12">
              Wholesale Cannabis
              <br />
              <em className="text-[var(--forest-mid)] not-italic">
                &amp; Hemp Supply.
              </em>
            </h1>
            <p className="font-sans text-[14px] leading-relaxed text-white/50 max-w-lg">
              Serving licensed dispensaries, pharmaceutical importers, and
              research institutions with bulk GACP-certified medicinal products
              directly from our Thai cultivation network.
            </p>
          </div>
        </section>

        {/* ── INVENTORY ── */}
        <section
          className="border-b border-[var(--rule)]"
          aria-label="Inventory categories"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — 01 Inventory
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Four product categories.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)]">
              {INVENTORY.map((cat, i) => (
                <InventoryCard key={cat.n} category={cat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING TIERS ── */}
        <section
          className="bg-[var(--paper-2)] border-b border-[var(--rule)]"
          aria-label="Volume-based pricing tiers"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — 02 Pricing
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Volume-based tiers.
              </h2>
              <p className="font-sans text-[13px] text-[var(--ink-50)] mt-4">
                Prices are indexed to current market rates and production
                cycles. Contact us for today&apos;s quote.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--rule)]">
              {TIERS.map((tier, i) => (
                <TierCard key={tier.name} tier={tier} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE & LOGISTICS ── */}
        <section
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Compliance and logistics"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Compliance */}
              <div className="reveal">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                  — 03 Compliance
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-tighter text-[var(--ink)] mb-8">
                  Who can purchase?
                </h2>
                <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] mb-12">
                  Mandatory documentation required for all international exports
                  to ensure seamless customs clearance.
                </p>
                <div className="space-y-px bg-[var(--rule)]">
                  {REQUIREMENTS.map((r, i) => (
                    <RequirementRow key={r.n} requirement={r} index={i} />
                  ))}
                </div>
              </div>

              {/* Logistics */}
              <div className="reveal">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                  — 04 Distribution
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-tighter text-[var(--ink)] mb-8">
                  Global logistics.
                </h2>
                <div className="space-y-6">
                  {LOGISTICS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-5 border-b border-[var(--rule)]"
                    >
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-30)]">
                        {item.label}
                      </span>
                      <span className="font-sans text-[14px] text-[var(--ink-70)]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-[var(--ink)]">
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mb-6">
                    Start your wholesale enquiry
                  </div>
                  <p className="font-sans text-[13px] text-white/50 mb-8">
                    Request a current inventory list and commercial pricing
                    based on your volume requirements.
                  </p>
                  <Link
                    href="/#contact"
                    onClick={(e) => smoothScroll(e, "/#contact")}
                    className="inline-flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 bg-[var(--forest)] text-[var(--paper)] hover:bg-[var(--forest-mid)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
                  >
                    Contact Wholesale Team
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1 9L9 1M9 1H3M9 1V7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}