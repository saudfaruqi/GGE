"use client";

import { useEffect, useCallback, memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. TYPES
// ============================================================

type ProductLine = {
  readonly n: string;
  readonly category: string;
  readonly name: string;
  readonly desc: string;
  readonly packaging: string;
  readonly tags: readonly string[];
};

type Isolate = {
  readonly compound: string;
  readonly name: string;
  readonly uses: string;
  readonly purity: string;
  readonly bar: number;
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

const PRODUCT_LINES = [
  {
    n: "01",
    category: "Medical",
    name: "Premium Whole Flower",
    desc: "GACP-certified whole flower cannabis from Thailand's finest licensed indoor and greenhouse cultivators. Consistent terpene profiles and cannabinoid ratios across every batch.",
    packaging:
      "Available in 5g to 1kg units. Nitrogen-flushed, vacuum-sealed packaging. Full CoA included.",
    tags: ["Indoor", "Greenhouse", "Multiple Strains"],
  },
  {
    n: "02",
    category: "Pharmaceutical",
    name: "Extracts & Distillates",
    desc: "High-quality full-spectrum, broad-spectrum, and isolated extracts at 80–99% purity levels. Produced under ISO-compliant extraction conditions with third-party verification.",
    packaging:
      "Distillate, crude, or winterised oil. Custom formulation and white-label on request.",
    tags: ["Full-Spectrum", "Broad-Spectrum", "Isolate", "High Purity"],
  },
  {
    n: "03",
    category: "Wellness · B2B",
    name: "Hemp-Derived Products",
    desc: "Compliant hemp-derived CBD, CBG, CBN, and blended wellness products. EU-compliant THC thresholds maintained across all formats. Colorado and Thai-origin available.",
    packaging:
      "Crystalline isolate, raw paste, and water-soluble formats. COA with each order.",
    tags: ["CBD", "CBG", "CBN", "Water-Soluble", "EU-Compliant"],
  },
] as const;

const ISOLATES = [
  {
    compound: "CBD",
    name: "Cannabidiol",
    uses: "Therapeutic, anti-inflammatory, anxiety relief",
    purity: "99%",
    bar: 99,
  },
  {
    compound: "CBG",
    name: "Cannabigerol",
    uses: "Neuroprotective, antibacterial, anti-tumour",
    purity: "98%",
    bar: 98,
  },
  {
    compound: "CBN",
    name: "Cannabinol",
    uses: "Sleep disorders, sedation, appetite stimulation",
    purity: "97%",
    bar: 97,
  },
  {
    compound: "THC",
    name: "Tetrahydrocannabinol",
    uses: "Pain management, nausea, appetite, sleep",
    purity: "95%+",
    bar: 95,
  },
  {
    compound: "CBC",
    name: "Cannabichromene",
    uses: "Anti-inflammatory, antidepressant, analgesic",
    purity: "96%",
    bar: 96,
  },
  {
    compound: "CBDV",
    name: "Cannabidivarin",
    uses: "Epilepsy, autism spectrum, anti-nausea",
    purity: "95%",
    bar: 95,
  },
] as const;

// ============================================================
// 4. COMPONENTS
// ============================================================



// ---- 4.2 PRODUCT LINE CARD ----
const ProductLineCard = memo(function ProductLineCard({
  product,
  index,
}: {
  product: (typeof PRODUCT_LINES)[number];
  index: number;
}) {
  return (
    <div
      className="bg-[var(--paper)] reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-1 px-6 md:px-12 py-12 flex items-start justify-between lg:justify-start lg:flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[var(--rule)]">
          <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)]">
            {product.n}
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--forest)]">
            {product.category}
          </span>
        </div>
        <div className="lg:col-span-5 px-6 md:px-12 py-12 border-b lg:border-b-0 lg:border-r border-[var(--rule)]">
          <h3 className="font-serif text-[clamp(24px,3vw,42px)] leading-tight tracking-tighter text-[var(--ink)] mb-6">
            {product.name}
          </h3>
          <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)]">
            {product.desc}
          </p>
        </div>
        <div className="lg:col-span-3 px-6 md:px-12 py-12 border-b lg:border-b-0 lg:border-r border-[var(--rule)]">
          <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--ink-30)] mb-4">
            Packaging & Format
          </div>
          <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)]">
            {product.packaging}
          </p>
        </div>
        <div className="lg:col-span-3 px-6 md:px-12 py-12">
          <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--ink-30)] mb-4">
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 border border-[var(--rule)] font-mono text-[9px] text-[var(--ink-40)] uppercase tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
ProductLineCard.displayName = "ProductLineCard";

// ---- 4.3 ISOLATE ROW ----
const IsolateRow = memo(function IsolateRow({
  isolate,
  index,
}: {
  isolate: (typeof ISOLATES)[number];
  index: number;
}) {
  return (
    <div
      className="grid grid-cols-12 gap-4 px-4 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group reveal"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="col-span-2">
        <span className="font-serif text-[clamp(20px,2.5vw,32px)] text-[var(--forest-mid)] group-hover:text-white/90 transition-colors">
          {isolate.compound}
        </span>
      </div>
      <div className="col-span-3 hidden md:flex items-center">
        <span className="font-sans text-[13px] text-white/50">{isolate.name}</span>
      </div>
      <div className="col-span-4 hidden lg:flex items-center">
        <span className="font-sans text-[12px] text-white/30 leading-relaxed">
          {isolate.uses}
        </span>
      </div>
      <div className="col-span-3 flex items-center gap-4">
        <div className="flex-1 h-px bg-white/10 relative">
          <div
            className="absolute left-0 top-0 h-full bg-[var(--forest-mid)] transition-all duration-1000"
            style={{ width: `${isolate.bar}%` }}
          />
        </div>
        <span className="font-mono text-[11px] text-white/60 shrink-0">
          {isolate.purity}
        </span>
      </div>
    </div>
  );
});
IsolateRow.displayName = "IsolateRow";

// ---- 4.4 SCROLL TO TOP ----
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

// ---- 4.5 COOKIE CONSENT ----
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

export default function ProductsPage() {
  useReveal();
  const smoothScroll = useSmoothScroll();

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GACP-Certified Cannabis & Hemp Products",
    description:
      "Premium cannabis whole flower, extracts, distillates, and hemp-derived products. GACP-certified, Thai FDA licensed, with full CoA provided.",
    brand: {
      "@type": "Brand",
      name: "Global Green Exports",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    category: "Medical Cannabis",
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
          aria-label="Products hero"
        >
          <div
            className="absolute inset-0 flex items-end justify-end pointer-events-none select-none p-12"
            aria-hidden="true"
          >
            <span
              className="font-serif text-[16vw] leading-none text-transparent"
              style={{ WebkitTextStroke: "1px rgba(247,244,238,0.04)" }}
            >
              Products
            </span>
          </div>

          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay noise-overlay"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1800px] mx-auto">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest-mid)] mb-8">
              — Premium Cannabis & Hemp
            </div>
            <h1 className="font-serif text-[clamp(48px,10vw,120px)] leading-[0.85] tracking-tighter text-white/90 mb-12">
              GACP-Certified
              <br />
              <em className="text-[var(--forest-mid)] not-italic">
                Cannabis & Hemp.
              </em>
            </h1>
            <p className="font-sans text-[14px] leading-relaxed text-white/50 max-w-lg mb-16">
              Every shipment includes a full Certificate of Analysis, GACP
              documentation, and export compliance paperwork verified by the Thai
              FDA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {[
                { val: "3", label: "Product Lines" },
                { val: "6+", label: "Cannabinoid Isolates" },
                { val: "99%", label: "Max Purity" },
                { val: "100%", label: "GACP Certified" },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--ink)] px-6 py-8">
                  <div className="font-serif text-[clamp(28px,4vw,52px)] text-white/90 mb-2">
                    {s.val}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT LINES ── */}
        <section
          className="border-b border-[var(--rule)]"
          aria-label="Product categories"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — 01 Product Categories
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Three core product lines.
                <br />
                <em className="text-[var(--forest)] not-italic">
                  Direct from source.
                </em>
              </h2>
            </div>

            <div className="space-y-px bg-[var(--rule)]">
              {PRODUCT_LINES.map((p, i) => (
                <ProductLineCard key={p.n} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ISOLATES TABLE ── */}
        <section
          className="bg-[var(--ink)] border-b border-white/10"
          aria-label="Cannabinoid isolates catalogue"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest-mid)] mb-4">
                — 02 Laboratory Catalogue
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-white/90">
                Pure isolated cannabinoids.
              </h2>
              <p className="font-sans text-[13px] text-white/40 mt-4">
                All isolates independently verified. CoA provided on every order.
              </p>
            </div>

            <div className="space-y-px">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/10">
                <div className="col-span-2 font-mono text-[9px] tracking-widest uppercase text-white/20">
                  Compound
                </div>
                <div className="col-span-3 font-mono text-[9px] tracking-widest uppercase text-white/20 hidden md:block">
                  Full Name
                </div>
                <div className="col-span-4 font-mono text-[9px] tracking-widest uppercase text-white/20 hidden lg:block">
                  Primary Applications
                </div>
                <div className="col-span-3 font-mono text-[9px] tracking-widest uppercase text-white/20">
                  Max Purity
                </div>
              </div>

              {/* Isolate rows */}
              {ISOLATES.map((iso, i) => (
                <IsolateRow key={iso.compound} isolate={iso} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="bg-[var(--paper)] px-6 md:px-12 py-24 border-b border-[var(--rule)]"
          aria-label="Call to action"
        >
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 reveal">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — Ready to order?
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Request a
                <br />
                <em className="text-[var(--forest)] not-italic">
                  product catalogue.
                </em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                onClick={(e) => smoothScroll(e, "/#contact")}
                className="px-10 py-5 bg-[var(--forest)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--forest-mid)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
              >
                Start Enquiry
              </Link>
              <Link
                href="/wholesale"
                className="px-10 py-5 border border-[var(--ink)]/20 text-[var(--ink-60)] font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--paper-2)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
              >
                Wholesale Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <CookieConsent />
    </>
  );
}