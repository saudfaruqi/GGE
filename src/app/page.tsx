"use client";

import {
  useEffect,
  useRef,
  useState,
  memo,
  useCallback,
  useMemo,
} from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";

// ============================================================
// DESIGN TOKENS (injected via CSS vars in global.css or here)
// ============================================================
// --white:      #FFFFFF
// --off-white:  #F7F6F3
// --surface:    #EFEFEC
// --forest:     #0E2318   (primary ink — deep forest, not pure black)
// --forest-mid: #1A3D28
// --sage:       #5E9E6E   (only accent — cold acid sage)
// --sage-light: #A8CDB5
// --rule:       #D8D6D0   (hairline dividers)
// --muted:      #8A8880   (secondary text)

// ============================================================
// 1. HOOKS
// ============================================================

function useGsapReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
      gsap.utils.toArray<Element>(".reveal-left").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
            delay: i * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          }
        );
      });
      gsap.utils.toArray<Element>(".reveal-right").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
            delay: i * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
}

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }, []);
}

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrollY;
}

function useVideoScroll(stageRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;

    // Responsive values
    const EXPAND_START = isMobile ? 150 : 300; // Start expanding earlier on mobile
    const EXPAND_END = isMobile ? (isSmallMobile ? 350 : 450) : 650;

    // Responsive margins (smaller margins on mobile so video doesn't get too small)
    const startMargin = isMobile ? (isSmallMobile ? 40 : 60) : 300;
    const endMargin = isMobile ? (isSmallMobile ? 10 : 20) : 0;

    // Responsive height
    const minH = isMobile ? (isSmallMobile ? 120 : 150) : 180;
    const maxH = Math.min(
      window.innerHeight * (isMobile ? 0.75 : 0.88), // Less height on mobile
      isMobile ? 600 : 800
    );

    // Responsive opacity
    const startOpacity = isMobile ? 0.6 : 0.4; // More visible on mobile
    const endOpacity = 1;

    // Responsive border radius
    const startRadius = isMobile ? (isSmallMobile ? 16 : 24) : 40;
    const endRadius = 0;

    // Responsive font size for label
    const labelFontSize = isMobile ? "14px" : "16px";

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const progress = Math.min(Math.max((scrollY - EXPAND_START) / (EXPAND_END - EXPAND_START), 0), 1);

      // Ease function for smoother animation
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const hMargin = startMargin - ease * (startMargin - endMargin);
      const height = minH + ease * (maxH - minH);
      const opacity = startOpacity + ease * (endOpacity - startOpacity);
      const radius = startRadius - ease * (startRadius - endRadius);

      // Apply styles
      stage.style.marginLeft = `${hMargin}px`;
      stage.style.marginRight = `${hMargin}px`;
      stage.style.height = `${Math.round(height)}px`;
      stage.style.borderRadius = `${Math.round(radius)}px`;
      stage.style.opacity = String(opacity);

      // Update hint text with mobile adjustments
      const hint = document.getElementById("scroll-hint-row");
      if (hint) {
        hint.style.opacity = String(Math.max(0, 1 - ease * 3));
        hint.style.transform = `translateY(${ease * (isMobile ? 10 : 20)}px)`;
        
        // Smaller hint on mobile
        if (isMobile) {
          hint.style.fontSize = "12px";
        }
      }

      const label = document.getElementById("video-scroll-label");
      if (label) {
        label.style.fontSize = labelFontSize;
        
        if (ease > 0.9) {
          label.textContent = isMobile ? "↑ Tap to collapse" : "Scroll up to collapse";
        } else if (ease > 0.1) {
          label.textContent = isMobile ? "Expanding…" : "Expanding…";
        } else {
          label.textContent = isMobile ? "↓ Swipe to expand" : "Scroll to expand ↓";
        }
      }
    };

    // Debounced resize handler to update responsive values
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Re-run the scroll handler with new dimensions
        handleScroll();
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    handleScroll(); // Set initial state
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [stageRef]);
}

// ============================================================
// 2. DATA
// ============================================================

const TICKER_ITEMS = [
  "GACP Certified",
  "Thai FDA Licensed",
  "Escrow-Protected Trade",
  "30+ Active Markets",
  "In-House Documentation",
  "48hr Enquiry Response",
  "Direct Supplier Relationships",
  "No Broker Intermediaries",
  "Fee-Based Sourcing Available",
  "End-to-End Logistics",
] as const;

const VERTICALS = [
  {
    num: "01",
    name: "Cannabis",
    sub: "Medical · Pharmaceutical",
    color: "#1A3D28",
    bgImg: "/gallery/47.jpeg",
    previewImg: "/gallery/35.jpeg",
    specs: [
      "GACP-certified whole flower",
      "Full-spectrum & isolate extracts",
      "80–99% purity",
      "CoA with every batch",
    ],
    tags: ["Whole Flower", "Full-Spectrum", "Isolate", "CBD-Dominant", "THC Variants"],
    note: "Buyers must hold valid import authorisation. We assist with DEA, TGA, and EMA documentation.",
  },
  {
    num: "02",
    name: "Hemp Derivatives",
    sub: "Wellness · B2B",
    color: "#3D6B4A",
    bgImg: "/gallery/34.jpeg",
    previewImg: "/gallery/33.jpeg",
    specs: [
      "CBD · CBG · CBN",
      "Water-soluble & crystalline",
      "Colorado & Thai-origin",
      "EU-compliant THC thresholds",
    ],
    tags: ["CBD Isolate", "CBG", "CBN", "Water-Soluble", "Raw Paste"],
    note: "Colorado hemp processing partnerships enable domestic US fulfilment alongside Thai-origin imports.",
  },
  {
    num: "03",
    name: "Housing Materials",
    sub: "Construction · Development",
    color: "#6B5B3E",
    bgImg: "/gallery/38.jpeg",
    previewImg: "/gallery/44.jpeg",
    specs: [
      "Structural steel & prefab",
      "Flooring, cladding & finishing",
      "Quality-inspected per shipment",
      "Sourced to client specification",
    ],
    tags: ["Structural Steel", "Prefab", "Flooring", "Cladding", "Hardware"],
    note: "Full certificates of origin and quality inspection documentation provided on every order.",
  },
  {
    num: "04",
    name: "Appliances",
    sub: "Commercial · Retail",
    color: "#2A4A6B",
    bgImg: "/gallery/16.jpeg",
    previewImg: "/gallery/17.jpeg",
    specs: [
      "White goods & commercial kitchen",
      "Laundry systems & electronics",
      "CE · UL/ETL · SAA certified",
      "Container-load pricing available",
    ],
    tags: ["White Goods", "Commercial Kitchen", "Laundry", "CE Marked", "UL/ETL"],
    note: "Destination compliance checked per order. Electrical standards and voltage verified before shipment.",
  },
  {
    num: "05",
    name: "HVAC Equipment",
    sub: "Industrial · Commercial",
    color: "#4A3D6B",
    bgImg: "/gallery/20.jpeg",
    previewImg: "/gallery/22.jpeg",
    specs: [
      "Split & ducted systems",
      "Commercial & industrial units",
      "Components, controls & parts",
      "All climate specifications",
    ],
    tags: ["Split Systems", "Ducted", "Commercial Units", "Components", "Parts"],
    note: "Thai manufacturers produce HVAC designed for tropical climates — highly efficient in warm-weather markets.",
  },
] as const;

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Initial Enquiry",
    desc: "Submit requirements — product type, volume, and target market. We respond within 48h with a feasibility assessment.",
  },
  {
    n: "02",
    title: "Compliance Review",
    desc: "We assess destination regulations and confirm export feasibility under Thai law, identifying document needs upfront.",
  },
  {
    n: "03",
    title: "Sample & Documentation",
    desc: "Receive representative samples alongside full documentation — CoA, certificate of origin, and inspection reports.",
  },
  {
    n: "04",
    title: "Escrow & Confirmation",
    desc: "A secure escrow arrangement is established. Funds are held by a neutral third party until verified delivery.",
  },
  {
    n: "05",
    title: "Logistics & Export",
    desc: "Full export documentation handled in-house: phytosanitary certs, customs, and freight coordination end-to-end.",
  },
  {
    n: "06",
    title: "Escrow Release",
    desc: "Upon confirmed receipt and quality verification by the buyer, escrow funds are released and documentation archived.",
  },
] as const;

const CERTS = [
  { name: "GACP Certification", tag: "Cannabis" },
  { name: "Thai FDA Export Licence", tag: "All Verticals" },
  { name: "Phytosanitary Certificates", tag: "Botanical" },
  { name: "Certificate of Origin", tag: "All Verticals" },
  { name: "Third-Party Lab Testing", tag: "Cannabis · Hemp" },
  { name: "Destination Assist", tag: "DEA · TGA · EMA" },
] as const;

const MARKETS = [
  {
    region: "EU",
    full: "European Union",
    countries: ["Germany", "Netherlands", "Switzerland", "Czech Republic", "Denmark", "Portugal", "Poland"],
    count: 7,
    color: "#1A3D28",
  },
  {
    region: "APAC",
    full: "Asia-Pacific",
    countries: ["Australia", "New Zealand"],
    count: 2,
    color: "#3D6B4A",
  },
  {
    region: "UK",
    full: "United Kingdom",
    countries: ["United Kingdom"],
    count: 1,
    color: "#2A4A6B",
  },
  {
    region: "NA",
    full: "North America",
    countries: ["Canada", "United States"],
    count: 2,
    color: "#4A3D6B",
  },
] as const;

const PILLARS = [
  {
    n: "01",
    title: "Direct Supplier Access",
    body: "No broker markups. We work directly with vetted Thai manufacturers and GACP-certified cultivation facilities. Your cost reflects the supply chain — not intermediary layers.",
    spec: "Direct relationships with certified farms, extraction labs, and government-approved export operations.",
  },
  {
    n: "02",
    title: "Escrow on Every Trade",
    body: "Funds are deposited with a neutral third-party escrow provider and released only upon confirmed delivery and quality verification. Mandatory for first-time buyers.",
    spec: "Standard for all new clients. Direct invoice terms available following two successful escrow-cleared cycles.",
  },
  {
    n: "03",
    title: "In-House Documentation",
    body: "Every export document — phytosanitary certs, certificates of origin, CoA, DEA permits, EMA filings — prepared by our compliance team. Nothing outsourced.",
    spec: "End-to-end management of Thai export permits and destination-country import paperwork assistance.",
  },
  {
    n: "04",
    title: "Fee-Based Sourcing",
    body: "Can't find what you need in our catalogue? We source to your specification for a transparent, pre-agreed service fee. Same escrow model applies.",
    spec: "Includes manufacturer compliance assessment, quality inspection, and freight coordination.",
  },
  {
    n: "05",
    title: "Dedicated Account Manager",
    body: "One point of contact from enquiry to delivery. No handoffs, no ambiguity. Your manager oversees compliance, logistics, and documentation throughout.",
    spec: "48-hour response SLA on new enquiries. Real-time tracking and proactive milestone updates.",
  },
  {
    n: "06",
    title: "Regulatory Support",
    body: "We assist buyers with destination requirements: DEA Schedule I/II permits, TGA SAS applications, EMA filings, and customs pre-clearance.",
    spec: "Currently supporting: USA, Australia, Germany, UK, Switzerland, Netherlands, NZ, and Canada.",
  },
] as const;

const FAQS = [
  {
    q: "Who can purchase from Global Green Export?",
    a: "We supply licensed importers, pharmaceutical companies, research institutions, government health agencies, commercial developers, and hospitality operators. Cannabis buyers must demonstrate valid import authorisation in their jurisdiction prior to order confirmation.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimums vary by vertical. Cannabis whole flower starts at 1kg; extracts at 500g; hemp derivatives at 1kg. Housing, appliance, and HVAC orders are assessed per project. Contact us with your specific requirements for a full assessment.",
  },
  {
    q: "How does the escrow mechanism work?",
    a: "For every order, funds are deposited with a neutral third-party escrow provider. Funds are released only upon confirmed delivery and buyer quality verification. This is mandatory for first-time buyers; established clients may access direct invoice terms after two completed escrow cycles.",
  },
  {
    q: "Can you source products not listed on your site?",
    a: "Yes. Our fee-based sourcing service is designed for exactly this. Submit your specification and we will assess feasibility, identify compliant Thai manufacturers, and provide a sourcing proposal with a transparent, pre-agreed fee structure.",
  },
  {
    q: "How long does a typical order take?",
    a: "Cannabis: 4–8 weeks from signed agreement to delivery. Construction materials and appliances: 6–12 weeks depending on volume and destination customs processing. HVAC systems: assessed per project scope.",
  },
  {
    q: "What documentation is provided with each order?",
    a: "All orders include commercial invoice, packing list, and bill of lading. Cannabis orders additionally include CoA, phytosanitary certificate, and Thai FDA export permit. Non-cannabis orders include certificate of origin and relevant quality certifications.",
  },
] as const;

// ============================================================
// 3. COMPONENTS
// ============================================================

// ---- 3.1 TICKER ----
const Ticker = memo(function Ticker() {
  return (
    <div
      className="overflow-hidden border-b border-[#D8D6D0]"
      style={{ background: "#0E2318", paddingTop: "14px", paddingBottom: "14px" }}
    >
      <div className="flex whitespace-nowrap animate-ticker will-change-transform">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className="font-mono text-[9px] tracking-[0.28em] uppercase px-8"
              style={{ color: "rgba(168,205,181,0.7)" }}
            >
              {item}
            </span>
            <span
              className="w-[3px] h-[3px] rounded-full flex-shrink-0"
              style={{ background: "#5E9E6E", opacity: 0.5 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
Ticker.displayName = "Ticker";

// ---- 3.2 VERTICAL ACCORDION ----
const VerticalAccordion = memo(function VerticalAccordion({
  v,
  isOpen,
  onToggle,
}: {
  v: (typeof VERTICALS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `panel-${v.num}`;
  const buttonId = `button-${v.num}`;

  return (
    <div
      className={`relative border-b overflow-hidden transition-colors duration-500`}
      style={{
        borderColor: "#D8D6D0",
        background: isOpen ? "#0E2318" : "#FFFFFF",
      }}
    >
      <button
        id={buttonId}
        className="relative z-10 w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-[#5E9E6E] focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex items-center justify-between px-8 md:px-14 py-8 md:py-11 gap-8">
          <div className="flex items-center gap-10 md:gap-16 flex-1">
            <span
              className="font-mono text-[10px] tracking-widest hidden md:block transition-colors duration-500"
              style={{ color: isOpen ? "rgba(168,205,181,0.4)" : "#8A8880" }}
            >
              {v.num}
            </span>
            <h3
              className="font-serif text-[clamp(32px,4.5vw,62px)] leading-none tracking-tighter transition-all duration-500"
              style={{
                color: isOpen ? "#A8CDB5" : "#0E2318",
                fontWeight: 400,
              }}
            >
              {v.name}
            </h3>
          </div>
          <div className="flex items-center gap-10">
            <span
              className="font-mono text-[9px] tracking-[0.2em] uppercase hidden lg:block transition-colors duration-500"
              style={{ color: isOpen ? "rgba(168,205,181,0.5)" : "#8A8880" }}
            >
              {v.sub}
            </span>
            {/* Toggle icon */}
            <div
              className="w-10 h-10 flex items-center justify-center border transition-all duration-500 relative"
              style={{
                borderColor: isOpen ? "rgba(94,158,110,0.4)" : "#D8D6D0",
                background: isOpen ? "rgba(94,158,110,0.1)" : "transparent",
              }}
            >
              <div
                className="w-3 h-px transition-colors"
                style={{ background: isOpen ? "#5E9E6E" : "#0E2318" }}
              />
              {!isOpen && (
                <div className="h-3 w-px absolute" style={{ background: "#0E2318" }} />
              )}
            </div>
          </div>
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? "800px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div
          className="px-8 md:px-14 pb-16 pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(168,205,181,0.4)" }}>
              Technical Specs
            </div>
            <ul className="space-y-4">
              {v.specs.map((s) => (
                <li key={s} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#5E9E6E" }} />
                  <span className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(168,205,181,0.4)" }}>
              Supply Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {v.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 border font-mono text-[9px] uppercase tracking-widest"
                  style={{ borderColor: "rgba(94,158,110,0.25)", color: "rgba(168,205,181,0.6)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(168,205,181,0.4)" }}>
              Logistics Note
            </div>
            <p className="text-[13px] leading-relaxed italic" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "sans-serif" }}>
              {v.note}
            </p>
            <div className="pt-4">
              <button
                className="font-mono text-[10px] border-b pb-1 uppercase tracking-[0.2em] transition-colors"
                style={{
                  color: "rgba(168,205,181,0.8)",
                  borderColor: "rgba(94,158,110,0.3)",
                }}
                aria-label={`Download catalog for ${v.name}`}
              >
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
VerticalAccordion.displayName = "VerticalAccordion";

// ---- 3.3 PROCESS STEP ----
function ProcessStep({ step, index, total }: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  total: number;
}) {
  return (
    <div className="group relative flex gap-8 py-8 reveal-left">
      {index < total - 1 && (
        <div
          className="absolute left-4 top-14 bottom-0 w-px transition-colors duration-500"
          style={{ background: "#D8D6D0" }}
        />
      )}
      <div
        className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-mono text-[10px] transition-all duration-400"
        style={{
          borderColor: "#D8D6D0",
          color: "#8A8880",
          background: "#FFFFFF",
        }}
      >
        <style>{`.process-step-${index}:hover { border-color: #5E9E6E !important; color: #5E9E6E !important; }`}</style>
        <span className={`process-step-${index}`}>{step.n}</span>
      </div>
      <div className="pt-1">
        <h4
          className="text-[12px] font-bold uppercase tracking-wider mb-2"
          style={{ color: "#0E2318", fontFamily: "sans-serif" }}
        >
          {step.title}
        </h4>
        <p className="text-[13px] leading-relaxed max-w-md" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

// ---- 3.4 MARKET ROW ----
function MarketRow({ market }: { market: (typeof MARKETS)[number] }) {
  return (
    <div
      className="px-3 lg:px-14 py-8 lg:py-14 border-b transition-colors duration-200 group"
      style={{ borderColor: "#D8D6D0" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
        <div className="md:col-span-3">
          <div
            className="font-serif text-[clamp(52px,6.5vw,88px)] leading-none tracking-tighter mb-2 transition-colors duration-300 group-hover:text-[#5E9E6E]"
            style={{ color: "#0E2318" }}
          >
            {market.region}
          </div>
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "#8A8880" }}>
            {market.full}
          </div>
        </div>
        <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-3">
          {market.countries.map((c) => (
            <span
              key={c}
              className="text-[clamp(15px,1.8vw,21px)] tracking-tight"
              style={{ color: "#8A8880", fontFamily: "sans-serif" }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="md:col-span-2 md:text-right">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border"
            style={{ borderColor: "#D8D6D0" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#5E9E6E" }}
            />
            <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "#8A8880" }}>
              {market.count} {market.count === 1 ? "Market" : "Markets"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- 3.5 TRUST PILLAR ----
function TrustPillar({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  return (
    <div
      className="px-3 lg:px-14 py-10 lg:py-20 border-b reveal-right group hover:bg-[#F7F6F3] transition-colors duration-300"
      style={{ borderColor: "#D8D6D0" }}
    >
      <div className="flex items-start gap-6 mb-6">
        <span
          className="font-serif text-[clamp(44px,5vw,68px)] leading-none select-none mt-1 transition-colors duration-300 group-hover:text-[#5E9E6E]"
          style={{ color: "#EFEFEC", fontWeight: 400 }}
        >
          {pillar.n}
        </span>
        <h3
          className="text-[clamp(18px,2vw,23px)] leading-tight tracking-tight pt-3"
          style={{ color: "#0E2318", fontFamily: "sans-serif", fontWeight: 700 }}
        >
          {pillar.title}
        </h3>
      </div>
      <p
        className="text-[14px] leading-relaxed mb-8 md:pl-[calc(clamp(44px,5vw,68px)+24px)]"
        style={{ color: "#6B6966", fontFamily: "sans-serif" }}
      >
        {pillar.body}
      </p>
      <div className="md:pl-[calc(clamp(44px,5vw,68px)+24px)]">
        <div className="border-l-2 pl-5 py-1" style={{ borderColor: "#5E9E6E" }}>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: "#8A8880" }}>
            Technical Specification
          </span>
          <p className="font-mono text-[11px] leading-relaxed" style={{ color: "#6B6966" }}>
            {pillar.spec}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- 3.6 FAQ ITEM ----
function FaqItem({ faq, index, isOpen, onToggle }: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className="border-b transition-colors duration-300"
      style={{
        borderColor: "#D8D6D0",
        background: isOpen ? "#F7F6F3" : "transparent",
      }}
    >
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start justify-between lg:gap-8 gap-4 py-8 px-3 lg:px-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#5E9E6E] group"
      >
        <div className="flex gap-6 items-start">
          <span className="font-mono text-[10px] pt-1 hidden sm:block" style={{ color: "#D8D6D0" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="text-[15px] md:text-[17px] tracking-tight leading-snug"
            style={{ color: "#0E2318", fontFamily: "sans-serif", fontWeight: 600 }}
          >
            {faq.q}
          </span>
        </div>
        <div
          className="w-7 h-7 flex items-center justify-center border rounded-full shrink-0 mt-1 transition-all duration-400 relative"
          style={{
            borderColor: isOpen ? "#5E9E6E" : "#D8D6D0",
            background: isOpen ? "#5E9E6E" : "transparent",
          }}
        >
          <div className="w-2.5 h-px absolute" style={{ background: isOpen ? "#fff" : "#8A8880" }} />
          {!isOpen && <div className="h-2.5 w-px absolute" style={{ background: "#8A8880" }} />}
        </div>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? "300px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-10 pl-6 sm:pl-[68px] pr-10">
          <p className="text-[14px] leading-relaxed max-w-2xl" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- 3.7 CONTACT FORM ----
function ContactForm() {
  const [formState, setFormState] = useState({ name: "", company: "", email: "", vertical: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim() || formState.name.length < 2) newErrors.name = "Name is required";
    if (!formState.email.includes("@") || !formState.email.includes(".")) newErrors.email = "Valid email address required";
    if (!formState.message.trim() || formState.message.length < 10) newErrors.message = "Please provide more detail (minimum 10 characters)";
    return newErrors;
  }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById(Object.keys(newErrors)[0])?.focus();
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => { const n = { ...prev }; delete n[id]; return n; });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center py-32">
        <div
          className="w-16 h-16 border-2 flex items-center justify-center"
          style={{ borderColor: "#5E9E6E" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L10 17L19 7" stroke="#5E9E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-3xl mb-4" style={{ color: "#0E2318" }}>Enquiry Received</h3>
          <p className="text-[13px]" style={{ color: "#8A8880", fontFamily: "sans-serif" }}>
            We will respond within 48 business hours.
          </p>
        </div>
      </div>
    );
  }

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    background: "transparent",
    borderBottom: `1px solid ${hasError ? "#DC2626" : "#D8D6D0"}`,
    paddingBottom: "12px",
    paddingTop: "4px",
    fontSize: "14px",
    color: "#0E2318",
    outline: "none",
    fontFamily: "sans-serif",
    transition: "border-color 0.3s",
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {[
          { id: "name", label: "Principal Name", type: "text", required: true },
          { id: "company", label: "Organisation / Entity", type: "text" },
          { id: "email", label: "Direct Email Address", type: "email", required: true },
          { id: "vertical", label: "Target Vertical", type: "text", placeholder: "Cannabis, HVAC, etc." },
        ].map((field) => (
          <div key={field.id} className="col-span-1">
            <label
              htmlFor={field.id}
              className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-4"
              style={{ color: "#8A8880" }}
            >
              {field.label}
              {field.required && <span style={{ color: "#DC2626" }} className="ml-1">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              value={formState[field.id as keyof typeof formState]}
              onChange={handleChange}
              aria-invalid={!!errors[field.id]}
              style={inputStyle(!!errors[field.id])}
            />
            {errors[field.id] && (
              <p className="font-mono text-[11px] mt-2" style={{ color: "#DC2626" }}>
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-4" style={{ color: "#8A8880" }}>
          Specifications & Context <span style={{ color: "#DC2626" }} className="ml-1">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Volume, frequency, destination, and any specific technical requirements..."
          value={formState.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          style={{
            ...inputStyle(!!errors.message),
            resize: "none",
            display: "block",
          }}
        />
        {errors.message && (
          <p className="font-mono text-[11px] mt-2" style={{ color: "#DC2626" }}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-4 flex flex-col md:flex-row items-start md:items-center gap-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] uppercase px-12 py-5 transition-all duration-400"
          style={{
            background: "#0E2318",
            color: "#FFFFFF",
            opacity: isSubmitting ? 0.5 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => { if (!isSubmitting) (e.currentTarget as HTMLElement).style.background = "#5E9E6E"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0E2318"; }}
        >
          {isSubmitting ? "Submitting..." : "Submit Intake"}
          {!isSubmitting && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-2">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <p className="font-mono text-[9px] leading-relaxed max-w-[200px] uppercase tracking-widest" style={{ color: "#8A8880" }}>
          Subject to international trade compliance standards.
        </p>
      </div>
    </form>
  );
}

// ---- 3.8 SCROLL TO TOP ----
function ScrollToTop() {
  const scrollY = useScrollY();
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  if (scrollY < 500) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center border transition-all duration-300"
      style={{
        background: "#0E2318",
        borderColor: "rgba(255,255,255,0.1)",
        color: "#fff",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5E9E6E"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0E2318"; }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

// ---- 3.9 COOKIE CONSENT ----
function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookie-consent") === "accepted") {
      setAccepted(true);
    }
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
      className="fixed bottom-0 left-0 right-0 z-[9998] border-t"
      style={{ background: "#FFFFFF", borderColor: "#D8D6D0" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-5">
        <p className="text-[12px] leading-relaxed max-w-2xl" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 font-mono text-[10px] tracking-widest uppercase text-white transition-colors"
            style={{ background: "#0E2318" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5E9E6E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0E2318"; }}
          >
            Accept
          </button>
          <Link
            href="/privacy"
            className="px-6 py-2.5 border font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ borderColor: "#D8D6D0", color: "#8A8880" }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 4. MAIN PAGE
// ============================================================

export default function HomePage() {
  useGsapReveal();

  const [openVertical, setOpenVertical] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const smoothScroll = useSmoothScroll();
  const scrollY = useScrollY();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStageRef = useRef<HTMLDivElement>(null);

  useVideoScroll(videoStageRef);

  const handleVerticalToggle = useCallback((index: number) => {
    setOpenVertical((prev) => (prev === index ? -1 : index));
  }, []);

  const handleFaqToggle = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Green Exports",
    description: "Licensed Thai exporter of GACP-certified medicinal cannabis and hemp.",
    url: "https://globalgreenexports.com",
  }), []);

  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ══════════════════════════════════════════
            HERO — Editorial full-width, scroll-expand video
        ══════════════════════════════════════════ */}
        <section
          style={{ background: "#FFFFFF", paddingTop: "72px" }}
          aria-label="Hero banner"
        >
          {/* ── ABOVE THE FOLD ── */}
          <div className="px-3 lg:px-14 pt-14 pb-0">

            {/* Main headline */}
            <div className="mb-10">
              {/* Index number + first line */}
              <div className="flex items-start gap-5 md:gap-8">
                <div>
                  <h1
                    className="font-serif leading-[0.87] tracking-tighter"
                    style={{
                      fontSize: "clamp(64px, 10.5vw, 160px)",
                      color: "#0E2318",
                      fontWeight: 400,
                    }}
                  >
                    Where Southeast
                  </h1>
                  <h1
                    className="font-serif leading-[0.87] tracking-tighter"
                    style={{
                      fontSize: "clamp(64px, 10.5vw, 160px)",
                      color: "#0E2318",
                      fontWeight: 400,
                    }}
                  >
                    Asia{" "}
                    <em
                      className="font-serif not-italic"
                      style={{ color: "#5E9E6E", fontStyle: "italic" }}
                    >
                      meets
                    </em>
                  </h1>
                  <h1
                    className="font-serif italic leading-[0.87] tracking-tighter"
                    style={{
                      fontSize: "clamp(64px, 10.5vw, 160px)",
                      color: "#5E9E6E",
                      fontWeight: 400,
                    }}
                  >
                    the world.
                  </h1>
                </div>
              </div>
            </div>

            {/* Sub-row — descriptor + CTAs */}
            <div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 pb-10 border-t"
              style={{ borderColor: "#EFEFEC" }}
            >
              <p
                className="text-[13px] md:text-[14px] leading-relaxed max-w-sm"
                style={{ color: "#6B6966", fontFamily: "sans-serif" }}
              >
                GACP-certified cannabis, hemp derivatives, construction materials,
                appliances, and HVAC — sourced direct from Thailand, delivered globally
                with escrow protection on every order.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  onClick={(e) => smoothScroll(e, "#contact")}
                  className="px-8 py-4 font-mono text-[10px] tracking-widest uppercase text-white"
                  style={{ background: "#0E2318" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5E9E6E"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0E2318"; }}
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/wholesale"
                  className="px-8 py-4 border font-mono text-[10px] tracking-widest uppercase"
                  style={{ borderColor: "#D8D6D0", color: "#0E2318" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#0E2318";
                    (e.currentTarget as HTMLElement).style.background = "#F7F6F3";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#D8D6D0";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  View Inventory
                </Link>
              </div>
            </div>
          </div>

          {/* ── SCROLL-EXPAND VIDEO STAGE ── */}
          {/*
            Starts as a contained card (margin: 0 56px, height: 220px, border-radius: 6px).
            On scroll, useVideoScroll() interpolates it to full-bleed (margin: 0, height: 88vh, radius: 0).
            The transition uses easeInOutQuad for a smooth, intentional feel.
          */}
          <div
            ref={videoStageRef}
            className="relative overflow-hidden"
            style={{
              // Remove these - the hook will control them
              // height: "120px",
              // opacity: "0.4",
              // marginLeft: "56px",
              // marginRight: "56px",
              // borderRadius: "6px",
              transition: "border-radius 0.1s, margin 0.1s, height 0.1s, opacity 0.1s",
            }}
          >
            <video
              ref={videoRef}
              src="/video/showreel.mp4"
              poster="/video/showreel-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.82) saturate(0.85)" }}
            />
          </div>

          {/* Scroll nudge */}
          <div
            id="scroll-hint-row"
            className="flex flex-col items-center gap-2 py-5"
            style={{ transition: "opacity 0.3s" }}
          >
            <span
              className="font-mono text-[8px] tracking-[0.3em] uppercase"
              style={{ color: "#C8C5BE" }}
            >
              Scroll
            </span>
            <div style={{ width: "1px", height: "24px", background: "#D8D6D0" }} />
          </div>

          {/* ── STATS BAR ── */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 border-t"
            style={{ borderColor: "#EFEFEC" }}
          >
            {[
              { val: "05", label: "Sourcing Verticals" },
              { val: "30+", label: "Export Markets" },
              { val: "48h", label: "Enquiry Response" },
              { val: "Escrow", label: "Every Trade" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="px-8 md:px-12 py-7 group"
                style={{
                  borderRight: i < 3 ? "1px solid #EFEFEC" : "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F7F6F3"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <div
                  className="font-serif mb-1.5"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 46px)",
                    color: "#0E2318",
                    fontWeight: 400,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#5E9E6E"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0E2318"; }}
                >
                  {s.val}
                </div>
                <div
                  className="font-mono text-[8px] tracking-[0.22em] uppercase"
                  style={{ color: "#8A8880" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TICKER ── */}
        <Ticker />

        {/* ══════════════════════════════════════════
            VERTICALS
        ══════════════════════════════════════════ */}
        <section
          id="verticals"
          className="border-b"
          style={{ background: "#FFFFFF", borderColor: "#D8D6D0" }}
          aria-label="Sourcing verticals"
        >
          <div
            className="px-3 lg:px-14 py-16 lg:py-28 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal border-b"
            style={{ borderColor: "#EFEFEC" }}
          >
            <h2
              className="font-serif leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0E2318", fontWeight: 400 }}
            >
              Sourcing Verticals.
            </h2>
            <p className="text-[13px] leading-relaxed max-w-[280px]" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
              Direct-from-source procurement with in-house compliance and escrow-protected logistics.
            </p>
          </div>
          <div>
            {VERTICALS.map((v, i) => (
              <VerticalAccordion
                key={v.num}
                v={v}
                isOpen={openVertical === i}
                onToggle={() => handleVerticalToggle(i)}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════ */}
        <section
          id="process"
          className="border-b"
          style={{ background: "#F7F6F3", borderColor: "#D8D6D0" }}
          aria-label="Operational process"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left col */}
            <div
              className="px-3 lg:px-14 py-16 lg:py-28 border-r"
              style={{ borderColor: "#D8D6D0" }}
            >
              <div className="reveal">
                <h2
                  className="font-serif leading-[0.9] tracking-tighter mb-16"
                  style={{ fontSize: "clamp(32px,4.5vw,58px)", color: "#0E2318", fontWeight: 400 }}
                >
                  The infrastructure of{" "}
                  <em
                    className="not-italic"
                    style={{ color: "#5E9E6E", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "8px" }}
                  >
                    trustworthy trade.
                  </em>
                </h2>
                <div>
                  {PROCESS_STEPS.map((step, i) => (
                    <ProcessStep key={step.n} step={step} index={i} total={PROCESS_STEPS.length} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right col — dark compliance panel */}
            <div
              className="relative px-3 lg:px-14 py-16 lg:py-28 flex flex-col justify-between"
              style={{ background: "#0E2318" }}
            >
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 reveal">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-8" style={{ color: "rgba(168,205,181,0.4)" }}>
                  — 04 Compliance
                </div>
                <blockquote
                  className="font-serif italic leading-tight mb-20 border-l-2 pl-8"
                  style={{
                    fontSize: "clamp(22px,3vw,40px)",
                    color: "rgba(255,255,255,0.88)",
                    borderColor: "#5E9E6E",
                  }}
                >
                  &quot;Built to satisfy regulators in the world&apos;s most demanding markets — TGA, BfArM, DEA, and beyond.&quot;
                </blockquote>

                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase mb-6 px-4" style={{ color: "rgba(168,205,181,0.35)" }}>
                    Verification & Certification
                  </div>
                  {CERTS.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between p-4 border transition-all duration-200 group cursor-default"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase transition-colors"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {c.name}
                      </span>
                      <span
                        className="font-mono text-[8px] tracking-tight border px-2 py-1 uppercase"
                        style={{ borderColor: "rgba(94,158,110,0.25)", color: "rgba(168,205,181,0.5)" }}
                      >
                        {c.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative z-10 mt-16 pt-10 border-t reveal"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <p className="text-[12px] max-w-[240px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}>
                    Detailed compliance dossiers and CoA reports available for vetted wholesale partners.
                  </p>
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase px-8 py-4 border transition-all duration-400"
                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#5E9E6E";
                      (e.currentTarget as HTMLElement).style.borderColor = "#5E9E6E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                  >
                    Request Compliance Data
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MARKETS
        ══════════════════════════════════════════ */}
        <section
          id="markets"
          className="border-b"
          style={{ background: "#FFFFFF", borderColor: "#D8D6D0" }}
          aria-label="Export markets"
        >
          <div
            className="px-3 lg:px-14 py-16 lg:py-28 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal border-b"
            style={{ borderColor: "#EFEFEC" }}
          >
            <h2
              className="font-serif leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(36px,5.5vw,68px)", color: "#0E2318", fontWeight: 400 }}
            >
              Export Markets.
            </h2>
            <p className="text-[13px] leading-relaxed max-w-[280px]" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
              Actively servicing or securing authorisation for 30+ countries across four core economic regions.
            </p>
          </div>

          <div className="reveal">
            {MARKETS.map((m) => (
              <MarketRow key={m.region} market={m} />
            ))}

            {/* Emerging markets CTA */}
            <div
              className="px-3 lg:px-14 py-10 lg:py-20"
              style={{ background: "#0E2318" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
                <div className="md:col-span-3">
                  <div className="font-serif text-[80px] leading-none" style={{ color: "rgba(255,255,255,0.06)" }}>+</div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(168,205,181,0.4)" }}>
                    Emerging
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="text-lg italic leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}>
                    &quot;Our logistics infrastructure is designed for rapid deployment into new jurisdictions based on buyer requirements and regulatory feasibility.&quot;
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="inline-block px-10 py-5 border font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-400"
                    style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#5E9E6E";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.borderColor = "#5E9E6E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    }}
                  >
                    Request Market Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TRUST PILLARS
        ══════════════════════════════════════════ */}
        <section
          id="trust"
          className="border-b"
          style={{ background: "#FFFFFF", borderColor: "#D8D6D0" }}
          aria-label="Trust pillars"
        >
          <div
            className="px-3 lg:px-14 py-16 lg:py-24 border-b reveal"
            style={{ borderColor: "#EFEFEC" }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2
                className="font-serif leading-[0.9] tracking-tighter"
                style={{ fontSize: "clamp(32px,5vw,60px)", color: "#0E2318", fontWeight: 400 }}
              >
                Built for{" "}
                <em className="not-italic" style={{ color: "#5E9E6E" }}>
                  regulated markets.
                </em>
              </h2>
              <p className="text-[13px] leading-relaxed max-w-[320px]" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
                Whether you are a pharmaceutical formulator or a licensed importer, you require a supplier who mirrors your own compliance rigour.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sticky photo */}
            <div className="hidden md:block md:w-[40%] relative">
              <div className="sticky top-0 h-screen overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85&fit=crop"
                  alt="Regulated trade infrastructure"
                  fill
                  className="object-cover"
                  sizes="40vw"
                  priority
                />
                <div className="absolute inset-0" style={{ background: "rgba(14,35,24,0.35)" }} />
                <div
                  className="absolute top-0 right-0 bottom-0 w-px"
                  style={{ background: "#EFEFEC" }}
                />
              </div>
            </div>

            {/* Pillars list */}
            <div className="md:w-[60%] divide-y" style={{ borderColor: "#D8D6D0" }}>
              {PILLARS.map((p, i) => (
                <TrustPillar key={p.n} pillar={p} />
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div
            className="px-3 lg:px-14 py-14 flex flex-col md:flex-row items-center justify-between gap-8 border-t"
            style={{ background: "#F7F6F3", borderColor: "#D8D6D0" }}
          >
            <div className="flex items-center gap-6">
              <div className="w-10 h-px" style={{ background: "#D8D6D0" }} aria-hidden="true" />
              <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#8A8880" }}>
                Escrow-protected · GACP Certified · Direct Source
              </p>
            </div>
            <Link
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-5 transition-all duration-400 text-white"
              style={{ background: "#0E2318" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5E9E6E"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0E2318"; }}
            >
              Begin Onboarding
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-2">
                <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section
          id="faq"
          className="border-b"
          style={{ background: "#FFFFFF", borderColor: "#D8D6D0" }}
          aria-label="Frequently asked questions"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left sidebar */}
            <div
              className="lg:col-span-4 px-3 lg:px-14 py-16 lg:py-28 lg:border-r"
              style={{ borderColor: "#EFEFEC" }}
            >
              <div className="reveal">
                <h2
                  className="font-serif leading-[0.9] tracking-tighter mb-10"
                  style={{ fontSize: "clamp(32px,4vw,56px)", color: "#0E2318", fontWeight: 400 }}
                >
                  Frequently{" "}
                  <em
                    className="not-italic"
                    style={{
                      color: "#5E9E6E",
                      textDecoration: "underline",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "8px",
                    }}
                  >
                    asked.
                  </em>
                </h2>

                <p
                  className="text-[13px] leading-relaxed mb-10 max-w-xs"
                  style={{ color: "#6B6966", fontFamily: "sans-serif" }}
                >
                  Detailed procedural queries regarding customs, bulk logistics, and financial instruments are addressed within 48 hours.
                </p>

                <div
                  className="p-6 border"
                  style={{ background: "#F7F6F3", borderColor: "#EFEFEC" }}
                >
                  <span className="font-mono text-[9px] tracking-widest uppercase block mb-4" style={{ color: "#8A8880" }}>
                    Response Guarantee
                  </span>
                  <p
                    className="text-[13px] font-semibold italic mb-6"
                    style={{ color: "#0E2318", fontFamily: "sans-serif" }}
                  >
                    &quot;All technical enquiries receive a response within 48 business hours.&quot;
                  </p>
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="group flex items-center justify-between font-mono text-[10px] tracking-widest uppercase py-4 px-6 border transition-all duration-400"
                    style={{ borderColor: "#0E2318", color: "#0E2318" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#0E2318";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#0E2318";
                    }}
                  >
                    Send Inquiry
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ list */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="border-t lg:border-t-0 border-[#EFEFEC] reveal">
                {FAQS.map((faq, i) => (
                  <FaqItem
                    key={i}
                    faq={faq}
                    index={i}
                    isOpen={openFaq === i}
                    onToggle={() => handleFaqToggle(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════ */}
        <section
          id="contact"
          style={{ background: "#FFFFFF" }}
          aria-label="Contact and procurement"
        >
          {/* Top banner strip */}
          <div
            className="px-3 lg:px-14 py-10 lg:py-20 border-b"
            style={{ background: "#0E2318", borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <h2
                className="font-serif italic leading-[0.88] tracking-tighter"
                style={{ fontSize: "clamp(52px,8vw,112px)", color: "#5E9E6E", fontWeight: 400 }}
              >
                Initiate Supply.
              </h2>
              <p
                className="text-[13px] leading-relaxed max-w-sm"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}
              >
                We maintain strict vetting protocols. Please provide comprehensive regulatory context for cannabis and hemp derivatives to expedite compliance review.
              </p>
            </div>
          </div>

          {/* Form + details split */}
          <div className="reveal">
            <div className="grid lg:grid-cols-2">
              {/* Details sidebar */}
              <div
                className="px-3 lg:px-14 py-10 lg:py-24 border-r"
                style={{ borderColor: "#EFEFEC", background: "#F7F6F3" }}
              >
                <div
                  className="mb-16 pb-16 border-b"
                  style={{ borderColor: "#EFEFEC" }}
                >
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-8" style={{ color: "#8A8880" }}>
                    Contact Details
                  </div>
                  {[
                    { label: "HQ / Administration", value: "7550 East 53rd Place, STE 17125\nDenver, CO 80217, USA" },
                    { label: "Logistics Hub", value: "Bangkok, Thailand" },
                    { label: "Protocol", value: "Escrow-Protected Settlement" },
                    { label: "Response SLA", value: "48 Business Hours" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="py-6 flex items-start justify-between border-b"
                      style={{ borderColor: "#EFEFEC" }}
                    >
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "#8A8880" }}>
                        {item.label}
                      </span>
                      <span
                        className="text-[11px] leading-relaxed text-right whitespace-pre-line"
                        style={{ color: "#0E2318", fontFamily: "sans-serif", fontWeight: 500 }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust signals */}
                <div className="space-y-4">
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-6" style={{ color: "#8A8880" }}>
                    Why Global Green Exports
                  </div>
                  {[
                    "Direct supplier relationships — no broker markups",
                    "GACP & Thai FDA certified export operations",
                    "Escrow on every transaction",
                    "48h response SLA on all enquiries",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#5E9E6E" }} />
                      <span className="text-[12px] leading-snug" style={{ color: "#6B6966", fontFamily: "sans-serif" }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="px-3 lg:px-14 py-10 lg:py-24">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-10" style={{ color: "#8A8880" }}>
                  Procurement Intake Form
                </div>
                <ContactForm />
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