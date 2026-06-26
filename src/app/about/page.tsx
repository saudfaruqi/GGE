"use client";

import { useEffect, useCallback, memo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. TYPES
// ============================================================

type Vertical = {
  readonly name: string;
  readonly sub: string;
};

type Cert = {
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

const CERTS = [
  {
    n: "01",
    title: "GACP Compliant",
    desc: "All cannabis and hemp growers in our network meet Good Agricultural and Collection Practices — the international baseline for medical-grade cultivation quality.",
  },
  {
    n: "02",
    title: "Thai Export Licensed",
    desc: "We operate under Thai FDA and government-approved export frameworks. Every export begins with the correct authorisation in place.",
  },
  {
    n: "03",
    title: "Third-Party Lab Tested",
    desc: "All cannabis and hemp products are independently verified by accredited laboratories. CoA issued with every batch, no exceptions.",
  },
  {
    n: "04",
    title: "Certificate of Origin",
    desc: "Full traceability from source to destination. Certificates of origin prepared for every shipment across all five verticals.",
  },
  {
    n: "05",
    title: "Phytosanitary Certified",
    desc: "Botanical and agricultural products ship with valid phytosanitary certificates — required for customs clearance in all destination markets.",
  },
  {
    n: "06",
    title: "Escrow-Settled",
    desc: "Our trade protocol mandates escrow settlement for new clients — eliminating counterparty risk for both buyers and sellers.",
  },
] as const;

const VERTICALS = [
  { name: "Cannabis", sub: "Medical · Pharmaceutical" },
  { name: "Hemp Derivatives", sub: "Wellness · B2B" },
  { name: "Housing Materials", sub: "Construction · Development" },
  { name: "Appliances", sub: "Commercial · Retail" },
  { name: "HVAC Equipment", sub: "Industrial · Commercial" },
] as const;

const HOW_WE_OPERATE = [
  "Direct supplier relationships — no broker markups",
  "Escrow on every new trade cycle",
  "In-house compliance and documentation",
  "Dedicated account manager, one point of contact",
  "Fee-based custom sourcing on request",
] as const;

// ============================================================
// 4. COMPONENTS
// ============================================================



// ---- 4.2 VERTICAL CARD ----
const VerticalCard = memo(function VerticalCard({
  vertical,
  index,
}: {
  vertical: (typeof VERTICALS)[number];
  index: number;
}) {
  return (
    <Link
      href="/products"
      className="group bg-[var(--paper)] px-8 py-12 hover:bg-[var(--ink)] transition-colors duration-500 reveal focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] group-hover:text-white/20 transition-colors mb-6">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="font-serif text-[clamp(22px,2.5vw,32px)] leading-tight tracking-tighter text-[var(--ink)] group-hover:text-white/90 transition-colors mb-3">
        {vertical.name}
      </h3>
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--ink-30)] group-hover:text-white/30 transition-colors">
        {vertical.sub}
      </p>
    </Link>
  );
});
VerticalCard.displayName = "VerticalCard";

// ---- 4.3 CERT CARD ----
const CertCard = memo(function CertCard({
  cert,
  index,
}: {
  cert: (typeof CERTS)[number];
  index: number;
}) {
  return (
    <div
      className="bg-[var(--paper-2)] px-8 py-12 reveal focus-within:ring-2 focus-within:ring-[var(--forest)]"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6">
        {cert.n}
      </div>
      <h3 className="font-sans font-bold text-[16px] tracking-tight text-[var(--ink)] mb-4">
        {cert.title}
      </h3>
      <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)]">
        {cert.desc}
      </p>
    </div>
  );
});
CertCard.displayName = "CertCard";

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

export default function AboutPage() {
  useReveal();
  const smoothScroll = useSmoothScroll();

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Global Green Exports",
    description:
      "Bangkok-based export house specialising in regulated goods — from GACP-certified cannabis and hemp derivatives to construction materials, appliances, and HVAC systems.",
    url: "https://globalgreenexports.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Global Green Exports",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressCountry: "Thailand",
        },
      },
    },
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
          aria-label="About us hero"
        >
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <span
              className="font-serif text-[20vw] leading-none text-transparent"
              style={{ WebkitTextStroke: "1px rgba(247,244,238,0.05)" }}
            >
              GGE
            </span>
          </div>

          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay noise-overlay"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1800px] mx-auto">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest-mid)] mb-8">
              — Who We Are
            </div>
            <h1 className="font-serif text-[clamp(48px,10vw,140px)] leading-[0.85] tracking-tighter text-white/90 mb-12 max-w-4xl">
              One partner.
              <br />
              Five verticals.
              <br />
              <em className="text-[var(--forest-mid)] not-italic">Global reach.</em>
            </h1>
            <p className="font-sans text-[15px] leading-relaxed text-white/50 max-w-lg">
              Global Green Export is a Bangkok-based export house specialising in
              regulated goods — from GACP-certified cannabis and hemp derivatives
              to construction materials, appliances, and HVAC systems.
              Escrow-protected. Fully documented. Compliance-first.
            </p>
          </div>
        </section>

        {/* ── STORY ── */}
        <section
          className="border-b border-[var(--rule)]"
          aria-label="Our story"
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
                    — Our Story
                  </div>
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-tighter text-[var(--ink)] mb-10">
                  Built for complex supply chains.
                </h2>
                <div className="space-y-6 font-sans text-[14px] leading-relaxed text-[var(--ink-60)]">
                  <p>
                    Global Green Export was founded in Bangkok to solve a
                    specific problem: regulated goods are hard to source
                    correctly. Too many intermediaries, too little
                    documentation, and too much uncertainty at the destination.
                  </p>
                  <p>
                    We built GGE around five verticals where compliance is
                    non-negotiable — cannabis and hemp for pharmaceutical
                    markets, construction materials for development projects,
                    appliances and HVAC equipment for commercial buyers.
                  </p>
                  <p>
                    Each vertical operates under the same procurement model:
                    direct supplier relationships, in-house documentation, and
                    escrow-protected settlement. Whether you need a single
                    shipment or an ongoing supply agreement, you deal with one
                    account manager who owns the process from enquiry to
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-12 py-20 md:py-32 bg-[var(--paper-2)]">
              <div className="reveal">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-12">
                  — How we operate
                </div>
                <ul className="space-y-6 mb-20">
                  {HOW_WE_OPERATE.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 font-sans text-[14px] text-[var(--ink-70)]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-[var(--forest)] mt-1.5 shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 pt-8 border-t border-[var(--rule)]">
                  <div
                    className="w-2 h-2 rounded-full bg-[var(--forest)]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--ink-40)]">
                    Bangkok · Thailand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERTICALS GRID ── */}
        <section
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Our five sourcing verticals"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="reveal mb-16">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                — Our Five Verticals
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                Five verticals.
                <br />
                One standard.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--rule)]">
              {VERTICALS.map((v, i) => (
                <VerticalCard key={v.name} vertical={v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section
          className="bg-[var(--paper-2)] border-b border-[var(--rule)]"
          aria-label="Certifications and compliance"
        >
          <div className="px-6 md:px-12 py-20 md:py-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 reveal">
              <div className="flex items-end gap-8">
                <span
                  className="font-serif text-[clamp(60px,10vw,120px)] leading-[0.7] text-[var(--paper-3)] select-none"
                  aria-hidden="true"
                >
                  02
                </span>
                <div className="pb-2">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
                    — Standards & Certifications
                  </div>
                  <h2 className="font-serif text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                    Compliance across
                    <br />
                    all verticals.
                  </h2>
                </div>
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[280px]">
                Every product category has its own certification framework. We
                manage them all in-house.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)]">
              {CERTS.map((c, i) => (
                <CertCard key={c.n} cert={c} index={i} />
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
              Ready to
              <br />
              <em className="text-[var(--forest-mid)] not-italic">source smarter?</em>
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                onClick={(e) => smoothScroll(e, "/#contact")}
                className="px-10 py-5 bg-[var(--forest)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-[var(--ink)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
              >
                Start an Enquiry
              </Link>
              <Link
                href="/products"
                className="px-10 py-5 border border-white/20 text-white/70 font-mono text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/50"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}