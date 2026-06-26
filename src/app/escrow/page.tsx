"use client";

import { useEffect, useCallback, memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. TYPES
// ============================================================

type Protection = {
  readonly n: string;
  readonly title: string;
  readonly desc: string;
};

type WorkflowStep = {
  readonly n: string;
  readonly title: string;
  readonly desc: string;
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

const PROTECTIONS = [
  {
    n: "01",
    title: "Buyer Protection",
    desc: "Funds are never released until product is verified and delivered to specification.",
  },
  {
    n: "02",
    title: "Seller Protection",
    desc: "Guaranteed payment upon successful, compliant delivery — no chargeback risk.",
  },
  {
    n: "03",
    title: "Documentation Control",
    desc: "GGE manages all export documents, CoA, and compliance paperwork for both parties.",
  },
  {
    n: "04",
    title: "Cross-Border Compliance",
    desc: "We verify destination country import requirements before any transaction is authorised.",
  },
  {
    n: "05",
    title: "Dispute Resolution",
    desc: "Neutral third-party dispute resolution process if any condition of trade is contested.",
  },
  {
    n: "06",
    title: "Secure Fund Holding",
    desc: "Escrow funds are held in dedicated, segregated accounts throughout the transaction lifecycle.",
  },
] as const;

const WORKFLOW_STEPS = [
  {
    n: "01",
    title: "Agreement Established",
    desc: "Buyer and seller agree on specs, quantity, and pricing. GGE documents conditions in a binding agreement.",
  },
  {
    n: "02",
    title: "Funds Deposited",
    desc: "Buyer deposits payment into the GGE escrow account. Funds are held securely and are inaccessible to the seller.",
  },
  {
    n: "03",
    title: "Product Verified",
    desc: "GGE verifies GACP certification and CoA documentation before shipment is authorised and logistics coordinated.",
  },
  {
    n: "04",
    title: "Delivery & Release",
    desc: "Upon confirmed delivery and buyer sign-off, escrow funds are released to the seller. Documentation is archived.",
  },
] as const;

// ============================================================
// 4. COMPONENTS
// ============================================================



// ---- 4.2 PROTECTION CARD ----
const ProtectionCard = memo(function ProtectionCard({
  protection,
  index,
}: {
  protection: (typeof PROTECTIONS)[number];
  index: number;
}) {
  return (
    <div
      className="bg-[var(--paper-2)] px-8 py-12 reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6">
        {protection.n}
      </div>
      <h3 className="font-sans font-bold text-[15px] tracking-tight text-[var(--ink)] mb-4">
        {protection.title}
      </h3>
      <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)]">
        {protection.desc}
      </p>
    </div>
  );
});
ProtectionCard.displayName = "ProtectionCard";

// ---- 4.3 WORKFLOW STEP ----
const WorkflowStep = memo(function WorkflowStep({
  step,
  index,
}: {
  step: (typeof WORKFLOW_STEPS)[number];
  index: number;
}) {
  return (
    <div
      className="bg-[var(--paper)] px-8 py-12 relative reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6">
        {step.n}
      </div>
      <div className="w-8 h-8 rounded-full border border-[var(--forest)] flex items-center justify-center mb-8">
        <div className="w-2 h-2 rounded-full bg-[var(--forest)]" />
      </div>
      <h3 className="font-sans font-bold text-[15px] tracking-tight text-[var(--ink)] mb-4">
        {step.title}
      </h3>
      <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)]">
        {step.desc}
      </p>
    </div>
  );
});
WorkflowStep.displayName = "WorkflowStep";

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

export default function EscrowPage() {
  useReveal();
  const smoothScroll = useSmoothScroll();

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Escrow-Protected Trade Services",
    description:
      "Neutral escrow services for cross-border medicinal cannabis and hemp transactions. Protecting buyers and sellers through verified, secure fund holding.",
    provider: {
      "@type": "Organization",
      name: "Global Green Exports",
    },
    serviceType: "Escrow Services",
    areaServed: "Global",
    termsOfService: "https://globalgreenexports.com/terms",
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
          aria-label="Escrow services hero"
        >
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <span
              className="font-serif text-[15vw] leading-none text-transparent"
              style={{ WebkitTextStroke: "1px rgba(247,244,238,0.04)" }}
            >
              Escrow
            </span>
          </div>

          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay noise-overlay"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1800px] mx-auto">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest-mid)] mb-8">
              — Escrow-Protected Trade
            </div>
            <h1 className="font-serif text-[clamp(48px,9vw,120px)] leading-[0.85] tracking-tighter text-white/90 mb-12 max-w-4xl">
              Eliminating risk
              <br />
              from
              <br />
              <em className="text-[var(--forest-mid)] not-italic">
                cross-border trade.
              </em>
            </h1>
            <p className="font-sans text-[14px] leading-relaxed text-white/50 max-w-lg">
              International cannabis trade carries inherent capital risk. Our
              escrow service eliminates uncertainty — protecting buyers and
              sellers through a verified, neutral holding mechanism.
            </p>
          </div>
        </section>

        {/* ── SECURITY LOGIC ── */}
        <section
          className="border-b border-[var(--rule)]"
          aria-label="Security logic"
        >
          <div className="grid lg:grid-cols-2">
            <div className="px-6 md:px-12 py-20 md:py-32 border-r border-[var(--rule)]">
              <div className="reveal">
                <div className="flex items-center gap-4 mb-12">
                  <span
                    className="font-serif text-[clamp(60px,10vw,100px)] leading-none text-[var(--paper-3)]"
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] pt-4">
                    — Security Logic
                  </div>
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-tighter text-[var(--ink)] mb-10">
                  The case for neutral holding.
                </h2>
                <div className="space-y-6 font-sans text-[14px] leading-relaxed text-[var(--ink-60)]">
                  <p>
                    Cross-border medicinal cannabis transactions involve
                    significant capital and strict regulatory hurdles.
                    Traditional payment terms often leave one party vulnerable:
                    buyers risk non-delivery, while sellers risk non-payment
                    after export.
                  </p>
                  <p>
                    GGE acts as a trusted intermediary. We hold buyer funds
                    securely while independently verifying that all GACP
                    certifications, CoAs, and export documents are in order
                    before releasing payment.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-12 py-20 md:py-32 bg-[var(--ink)]">
              <div className="reveal">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/20 mb-8">
                  — Institutional Neutrality
                </div>
                <blockquote className="font-serif italic text-[clamp(22px,3vw,36px)] leading-tight text-white/80 border-l-2 border-[var(--forest)] pl-8">
                  &quot;GGE has no financial interest in either party. Our role
                  is strictly to verify, hold, and release — ensuring fair
                  outcomes for every participant.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 PROTECTIONS ── */}
        <section
          className="bg-[var(--paper-2)] border-b border-[var(--rule)]"
          aria-label="Risk mitigation protections"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — 02 Risk Mitigation
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Six layers of protection.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)]">
              {PROTECTIONS.map((p, i) => (
                <ProtectionCard key={p.n} protection={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Escrow workflow"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — 03 Workflow
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                The escrow process.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--rule)]">
              {WORKFLOW_STEPS.map((step, i) => (
                <WorkflowStep key={step.n} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="bg-[var(--ink)] px-6 md:px-12 py-24"
          aria-label="Call to action"
        >
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 reveal">
            <h2 className="font-serif text-[clamp(32px,5vw,72px)] leading-[0.9] tracking-tighter text-white/90">
              Trade with
              <br />
              <em className="text-[var(--forest-mid)] not-italic">
                confidence.
              </em>
            </h2>
            <Link
              href="/#contact"
              onClick={(e) => smoothScroll(e, "/#contact")}
              className="px-12 py-6 bg-[var(--forest)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-[var(--ink)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
            >
              Start an Escrow-Protected Trade
            </Link>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}