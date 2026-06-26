"use client";

import { useEffect, useRef, useState, memo, lazy, Suspense, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. HOOKS
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useSmoothScroll() {
  const router = useRouter();
  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
        // Update URL without reload
        window.history.pushState(null, "", href);
      }
    },
    []
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY.current ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return scrollDirection;
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
    color: "#2D5A3C",
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
    color: "#7A9E6A",
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
    color: "#A68B6A",
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
    color: "#4A6B8A",
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
    color: "#5A4A7A",
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
    desc: "Full export documentation handled in-house: phytosanitary certs, customs, and freight coordination handled end-to-end.",
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
    color: "#2D5A3C",
  },
  {
    region: "APAC",
    full: "Asia-Pacific",
    countries: ["Australia", "New Zealand"],
    count: 2,
    color: "#A68B6A",
  },
  {
    region: "UK",
    full: "United Kingdom",
    countries: ["United Kingdom"],
    count: 1,
    color: "#4A6B8A",
  },
  {
    region: "NA",
    full: "North America",
    countries: ["Canada", "United States"],
    count: 2,
    color: "#5A4A7A",
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
    spec: "Standard for all new clients. Direct invoice terms are available following two successful escrow-cleared cycles.",
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


// ---- 3.2 TICKER ----
const Ticker = memo(function Ticker() {
  return (
    <div className="overflow-hidden py-3.5" style={{ background: "var(--forest)" }}>
      <div className="flex whitespace-nowrap animate-ticker will-change-transform">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className="font-mono text-[9px] tracking-[0.22em] uppercase px-8"
              style={{ color: "rgba(247,244,238,0.60)" }}
            >
              {item}
            </span>
            <span
              className="w-[3px] h-[3px] rounded-full flex-shrink-0"
              style={{ background: "rgba(247,244,238,0.22)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
Ticker.displayName = "Ticker";

// ---- 3.3 VERTICAL ACCORDION ----
const VerticalAccordion = memo(function VerticalAccordion({
  v,
  isOpen,
  onToggle,
  dark,
}: {
  v: (typeof VERTICALS)[number];
  isOpen: boolean;
  onToggle: () => void;
  dark: boolean;
}) {
  const panelId = `panel-${v.num}`;
  const buttonId = `button-${v.num}`;

  return (
    <div
      className={`relative border-b border-[var(--rule)] overflow-hidden transition-colors duration-500 ${
        isOpen && dark ? "bg-[var(--ink)]" : isOpen ? "bg-[var(--ink)]" : ""
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: isOpen ? 0.06 : 0.09 }}
      >
        <img src={v.bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--paper)]/60" />
      </div>

      {/* Preview image */}
      <div
        className="hidden md:block absolute top-0 right-0 bottom-0 w-[260px] pointer-events-none transition-all duration-500"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateX(0)" : "translateX(32px)",
        }}
      >
        <img
          src={v.previewImg}
          alt=""
          className="w-full h-full object-cover"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          }}
        />
        <div
          className="absolute left-0 top-8 bottom-8 w-[2px]"
          style={{ backgroundColor: v.color }}
        />
      </div>

      {/* Header button */}
      <button
        id={buttonId}
        className="relative z-10 w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-8 md:py-12 gap-8">
          <div className="flex items-center gap-8 md:gap-16 flex-1">
            <span
              className={`font-mono text-[11px] tracking-widest hidden md:block transition-colors duration-500 ${
                isOpen ? "text-white/20" : "text-[var(--ink-20)]"
              }`}
            >
              {v.num}
            </span>
            <h3
              className={`font-serif text-[clamp(28px,4vw,56px)] leading-none tracking-tighter transition-all duration-500 pl-0`}
              style={{ color: isOpen ? v.color : "var(--ink)" }}
            >
              {v.name}
            </h3>
          </div>
          <div className="flex items-center gap-12">
            <span
              className={`font-mono text-[9px] tracking-[0.2em] uppercase hidden lg:block transition-colors duration-500 ${
                isOpen ? "text-white/30" : "text-[var(--ink-40)]"
              }`}
            >
              {v.sub}
            </span>
            <div
              className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${
                isOpen ? "bg-white border-white" : "border-[var(--rule)] bg-transparent"
              }`}
            >
              <div
                className={`w-3 h-px transition-colors ${
                  isOpen ? "bg-[var(--ink)]" : "bg-[var(--ink-40)]"
                }`}
              />
              {!isOpen && (
                <div
                  className={`h-3 w-px absolute transition-colors bg-[var(--ink-40)]`}
                />
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded content */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="relative z-10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: isOpen ? "800px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 md:px-12 pb-16 pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5">
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/20">
              Technical Specs
            </div>
            <ul className="space-y-4">
              {v.specs.map((s) => (
                <li key={s} className="flex items-start gap-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: v.color }}
                  />
                  <span className="text-[13px] text-white/50 font-sans leading-snug">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/20">
              Supply Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {v.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 border border-white/10 font-mono text-[9px] text-white/40 uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/20">
              Logistics Note
            </div>
            <p className="text-[13px] text-white/40 font-sans leading-relaxed italic">
              {v.note}
            </p>
            <div className="pt-4">
              <button
                className="font-mono text-[10px] text-white/80 border-b border-white/20 pb-1 hover:text-[var(--forest-mid)] hover:border-[var(--forest-mid)] transition-colors uppercase tracking-[0.2em]"
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

// ---- 3.4 PROCESS STEP ----
function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  total: number;
}) {
  return (
    <div
      className="group relative flex gap-8 py-8 reveal-left"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {index < total - 1 && (
        <div className="absolute left-4 top-16 bottom-0 w-px bg-[var(--rule)] group-hover:bg-[var(--forest)] transition-colors duration-500" />
      )}
      <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border border-[var(--rule)] bg-[var(--paper)] flex items-center justify-center font-mono text-[10px] text-[var(--ink-40)] group-hover:border-[var(--forest)] group-hover:text-[var(--forest)] transition-colors">
        {step.n}
      </div>
      <div className="pt-1">
        <h4 className="font-sans font-bold text-[13px] uppercase tracking-wider text-[var(--ink)] mb-2">
          {step.title}
        </h4>
        <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-md">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

// ---- 3.5 MARKET ROW ----
function MarketRow({
  market,
  index,
}: {
  market: (typeof MARKETS)[number];
  index: number;
}) {
  return (
    <div className="px-6 md:px-12 py-10 md:py-16 border-b border-[var(--rule)]">
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-12">
        <div className="md:col-span-3">
          <div
            className="font-serif text-[clamp(48px,6vw,84px)] leading-none tracking-tighter mb-2"
            style={{ color: "var(--ink)" }}
          >
            {market.region}
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-30)]">
            {market.full}
          </div>
        </div>
        <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-4">
          {market.countries.map((c, i) => (
            <span
              key={c}
              className="font-sans text-[clamp(15px,1.8vw,22px)] tracking-tight text-[var(--ink-40)]"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="md:col-span-2 md:text-right pt-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--rule)]">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: market.color }}
            />
            <span className="font-mono text-[10px] tracking-widest text-[var(--ink-60)] uppercase">
              {market.count} {market.count === 1 ? "Market" : "Markets"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- 3.6 TRUST PILLAR ----
function TrustPillar({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  return (
    <div
      className="px-6 md:px-12 py-16 md:py-20 reveal-right"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-6 mb-8">
        <span className="font-serif text-[clamp(40px,5vw,64px)] leading-none text-[var(--ink-10)] select-none mt-1">
          {pillar.n}
        </span>
        <h3 className="font-sans font-bold text-[clamp(18px,2vw,24px)] leading-tight tracking-tight text-[var(--ink)] pt-2">
          {pillar.title}
        </h3>
      </div>
      <p className="font-sans text-[14px] leading-relaxed text-[var(--ink-70)] mb-8 md:pl-[calc(clamp(40px,5vw,64px)+24px)]">
        {pillar.body}
      </p>
      <div className="md:pl-[calc(clamp(40px,5vw,64px)+24px)]">
        <div className="border-l-2 border-[var(--forest-mid)] pl-5 py-1">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--ink-30)] mb-1.5 block">
            Technical Specification
          </span>
          <p className="font-mono text-[11px] leading-relaxed text-[var(--ink-50)]">
            {pillar.spec}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- 3.7 FAQ ITEM ----
function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[var(--rule)] transition-colors duration-500 hover:bg-[var(--paper-2)]/50">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-8 py-8 px-4 md:px-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 group"
      >
        <div className="flex gap-6">
          <span className="font-mono text-[10px] text-[var(--ink-20)] pt-1.5 hidden sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans font-semibold text-[15px] md:text-[17px] text-[var(--ink)] tracking-tight leading-snug">
            {faq.q}
          </span>
        </div>
        <div className="w-6 h-6 flex items-center justify-center border border-[var(--rule)] rounded-full shrink-0 mt-1 transition-all duration-500 group-hover:border-[var(--ink-40)]">
          <div className="w-2.5 h-px absolute transition-colors bg-[var(--ink-40)]" />
          {!isOpen && (
            <div className="h-2.5 w-px absolute transition-colors bg-[var(--ink-40)]" />
          )}
        </div>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-10 pl-4 sm:pl-[64px] pr-8 md:pr-12">
          <p className="font-sans text-[14px] leading-relaxed text-[var(--ink-60)] max-w-2xl">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- 3.8 CONTACT FORM ----
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    vertical: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim() || formState.name.length < 2) {
      newErrors.name = "Name is required";
    }
    if (!formState.email.includes("@") || !formState.email.includes(".")) {
      newErrors.email = "Valid email address required";
    }
    if (!formState.message.trim() || formState.message.length < 10) {
      newErrors.message = "Please provide more detail (minimum 10 characters)";
    }
    return newErrors;
  }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstError = Object.keys(newErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
    // Clear error on change
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
        <div className="w-16 h-16 border border-[var(--forest)] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12L10 17L19 7"
              stroke="#4a8c60"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-3xl text-white/90 mb-4">
            Enquiry Received
          </h3>
          <p className="font-sans text-[13px] text-white/50">
            We will respond within 48 business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {[
          { id: "name", label: "Principal Name", type: "text", required: true },
          { id: "company", label: "Organisation / Entity", type: "text" },
          { id: "email", label: "Direct Email Address", type: "email", required: true },
          { id: "vertical", label: "Target Vertical", type: "text", placeholder: "Cannabis, HVAC, etc." },
        ].map((field) => (
          <div key={field.id} className="col-span-1">
            <label
              htmlFor={field.id}
              className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-4 text-white/70"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              value={formState[field.id as keyof typeof formState]}
              onChange={handleChange}
              aria-invalid={!!errors[field.id]}
              aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              className={`w-full bg-transparent border-b py-3 font-sans text-[14px] text-white/80 outline-none transition-all duration-500 placeholder:text-white/5 ${
                errors[field.id]
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/10 focus:border-[var(--forest-mid)]"
              }`}
            />
            {errors[field.id] && (
              <p id={`${field.id}-error`} className="text-red-400 text-[11px] mt-2 font-mono">
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="w-full">
        <label
          htmlFor="message"
          className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-4 text-white/70"
        >
          Specifications & Context <span className="text-red-400 ml-1">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Volume, frequency, destination, and any specific technical requirements..."
          value={formState.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full bg-transparent border-b py-3 font-sans text-[14px] text-white/80 outline-none transition-all duration-500 placeholder:text-white/5 resize-none ${
            errors.message
              ? "border-red-400 focus:border-red-400"
              : "border-white/10 focus:border-[var(--forest-mid)]"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-[11px] mt-2 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-6 flex flex-col md:flex-row items-start md:items-center gap-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] uppercase px-12 py-6 bg-[var(--forest)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Intake"}
          {!isSubmitting && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover:translate-x-2"
            >
              <path
                d="M1 11L11 1M11 1H4M11 1V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <p className="font-mono text-[9px] leading-relaxed text-white/60 max-w-[200px] uppercase tracking-widest">
          Submission subject to international trade compliance standards.
        </p>
      </div>
    </form>
  );
}

// ---- 3.9 SCROLL TO TOP ----
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollDirection = useScrollDirection();

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
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--forest)] text-white rounded-full shadow-lg hover:bg-[var(--forest-mid)] transition-all duration-300 flex items-center justify-center border border-white/10 ${
        scrollDirection === "down" ? "opacity-100 translate-y-0" : "opacity-80"
      }`}
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

// ---- 3.10 COOKIE CONSENT ----
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
            className="px-6 py-2 bg-[var(--forest)] text-white font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--forest-mid)] transition-colors"
          >
            Accept
          </button>
          <Link
            href="/privacy"
            className="px-6 py-2 border border-white/20 text-white/60 font-mono text-[10px] tracking-widest uppercase hover:bg-white/5 transition-colors"
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
  useReveal();
  const [openVertical, setOpenVertical] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const smoothScroll = useSmoothScroll();

  // Memoized handlers
  const handleVerticalToggle = useCallback((index: number) => {
    setOpenVertical((prev) => (prev === index ? -1 : index));
  }, []);

  const handleFaqToggle = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  // Structured data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Green Exports",
      description:
        "Licensed Thai exporter of GACP-certified medicinal cannabis and hemp. Wholesale supply, escrow-protected trade, and compliant global logistics.",
      url: "https://globalgreenexports.com",
      logo: "https://globalgreenexports.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        availableLanguage: ["English", "Thai"],
      },
      sameAs: [
        "https://linkedin.com/company/globalgreenexports",
        "https://twitter.com/globalgreenex",
      ],
    }),
    []
  );

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
          className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--ink)]"
          aria-label="Hero banner"
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "radial-gradient(var(--paper) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-serif text-[25vw] leading-none text-transparent select-none"
                style={{ WebkitTextStroke: "1px rgba(247,244,238,0.09)" }}
              >
                GGE
              </span>
            </div>
          </div>

          <div className="relative z-20 px-6 md:px-12 pt-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" />

          <div className="relative z-20 px-6 md:px-12 flex-1 flex flex-col justify-center">
            <div>
              <h1 className="font-serif text-[clamp(64px,14vw,220px)] leading-[0.75] tracking-tighter text-white/90 animate-fade-up">
                Thailand
              </h1>
              <div
                className="h-px bg-[var(--forest)] my-8 md:my-12 animate-expand"
                aria-hidden="true"
              />
              <h1 className="font-serif italic text-[clamp(64px,14vw,220px)] leading-[0.75] tracking-tighter text-[var(--forest-mid)] animate-fade-up">
                to the World.
              </h1>
            </div>
          </div>

          <div className="relative z-20 border-t border-white/10 animate-fade-up">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 md:px-12 py-10 gap-10">
              <p className="font-sans text-xs md:text-sm text-white/60 max-w-sm leading-relaxed">
                Integrated export house across five sourcing verticals. We bridge
                Southeast Asian production with global demand through
                GACP-standardized supply chains and escrow protection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  onClick={(e) => smoothScroll(e, "#contact")}
                  className="px-8 py-4 bg-[var(--forest)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--forest-mid)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/wholesale"
                  className="px-8 py-4 border border-white/20 text-white/70 font-mono text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  View Inventory
                </Link>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/5 divide-x divide-white/5">
              {[
                { val: "05", label: "Sourcing Verticals" },
                { val: "30+", label: "Export Markets" },
                { val: "48h", label: "Enquiry Response" },
                { val: "Escrow", label: "Safe Transactions" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-6 md:px-12 py-8 group hover:bg-white/[0.02] transition-colors"
                >
                  <div className="font-serif text-3xl md:text-5xl text-white/90 mb-2 group-hover:text-[var(--forest-mid)] transition-colors">
                    {s.val}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay noise-overlay"
            aria-hidden="true"
          />
        </section>

        {/* ── TICKER ── */}
        <Ticker />

        {/* ── VERTICALS ── */}
        <section
          id="verticals"
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Sourcing verticals"
        >
          <div className="px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
            <div className="flex items-end gap-8">
              <div className="pb-2">
                <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                  Sourcing Verticals.
                </h2>
              </div>
            </div>
            <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[280px]">
              Direct-from-source procurement with in-house compliance and
              escrow-protected logistics.
            </p>
          </div>

          <div className="border-t border-[var(--rule)]">
            {VERTICALS.map((v, i) => (
              <VerticalAccordion
                key={v.num}
                v={v}
                isOpen={openVertical === i}
                onToggle={() => handleVerticalToggle(i)}
                dark={openVertical === i}
              />
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          id="process"
          className="border-b border-[var(--rule)] overflow-hidden bg-[var(--paper)]"
          aria-label="Operational process"
        >
          <div className="grid lg:grid-cols-2">
            {/* Steps column */}
            <div className="px-6 md:px-12 py-20 md:py-32 border-r border-[var(--rule)]">
              <div className="reveal">
                <h2 className="font-serif text-[clamp(32px,5vw,56px)] leading-[0.9] tracking-tighter mb-16 text-[var(--ink)]">
                  The infrastructure of
                  <br />
                  <em className="text-[var(--forest)] not-italic underline decoration-1 underline-offset-8">
                    trustworthy trade.
                  </em>
                </h2>

                <div className="space-y-0">
                  {PROCESS_STEPS.map((step, i) => (
                    <ProcessStep
                      key={step.n}
                      step={step}
                      index={i}
                      total={PROCESS_STEPS.length}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance column */}
            <div className="relative px-6 md:px-12 py-20 md:py-32 flex flex-col justify-between bg-[var(--ink)] text-[var(--paper)]">
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 reveal">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8">
                  — 04 Compliance
                </div>
                <blockquote className="font-serif italic text-[clamp(24px,3.5vw,42px)] leading-tight text-white/90 mb-20 border-l-2 border-[var(--forest)] pl-8">
                  &quot;Built to satisfy regulators in the world&apos;s most
                  demanding markets — TGA, BfArM, DEA, and beyond.&quot;
                </blockquote>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20 mb-6 px-4">
                    Verification &amp; Certification
                  </div>
                  {CERTS.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between p-4 border border-white/5 hover:bg-white/[0.03] transition-colors group"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-white/60 group-hover:text-[var(--forest-mid)] transition-colors uppercase">
                        {c.name}
                      </span>
                      <span className="font-mono text-[8px] tracking-tighter text-white/20 border border-white/10 px-2 py-1 uppercase">
                        {c.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-20 pt-12 border-t border-white/10 reveal">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <p className="font-sans text-[12px] text-white/40 max-w-[240px]">
                    Detailed compliance dossiers and CoA reports are available
                    for vetted wholesale partners.
                  </p>
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase px-8 py-5 border border-white/20 text-white/80 hover:bg-[var(--forest)] hover:border-[var(--forest)] hover:text-[var(--paper)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
                  >
                    Request Compliance Data
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M2 10L10 2M10 2H4M10 2V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
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

        {/* ── MARKETS ── */}
        <section
          id="markets"
          className="bg-[var(--paper-2)] border-b border-[var(--rule)]"
          aria-label="Export markets"
        >
          <div className="px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
            <div className="flex items-end gap-8">
              <div className="pb-2">
                <h2 className="font-serif text-[clamp(32px,5vw,56px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                  Export Markets.
                </h2>
              </div>
            </div>
            <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[280px]">
              Actively servicing or securing authorisation for 30+ countries
              across four core economic regions.
            </p>
          </div>

          <div className="border-t border-[var(--rule)] reveal">
            {MARKETS.map((m, i) => (
              <MarketRow key={m.region} market={m} index={i} />
            ))}

            {/* Emerging */}
            <div className="px-6 md:px-12 py-12 md:py-20 bg-[var(--ink)] text-[var(--paper)]">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
                <div className="md:col-span-3">
                  <div className="font-serif text-[clamp(48px,6vw,84px)] leading-none text-white/10">
                    +
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
                    Emerging
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-lg text-white/40 italic leading-relaxed">
                    &quot;Our logistics infrastructure is designed for rapid
                    deployment. We assess and enter new jurisdictions based on
                    buyer requirements and regulatory feasibility.&quot;
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="inline-block px-10 py-5 bg-white/5 border border-white/10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 hover:bg-[var(--forest)] hover:text-[var(--paper)] hover:border-[var(--forest)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
                  >
                    Request Market Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST PILLARS ── */}
        <section
          id="trust"
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Trust pillars"
        >
          <div className="px-6 md:px-12 py-24 md:py-32 border-b border-[var(--rule)] reveal">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="flex items-end gap-8">
                <div className="pb-2">
                  <h2 className="font-serif text-[clamp(32px,5vw,56px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
                    Built for
                    <br />
                    <em className="text-[var(--forest)] not-italic">
                      regulated markets.
                    </em>
                  </h2>
                </div>
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[320px]">
                Whether you are a pharmaceutical formulator or a licensed
                importer, you require a supplier who mirrors your own compliance
                rigour.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sticky image */}
            <div className="hidden md:block md:w-[42%] relative">
              <div className="sticky top-0 h-screen overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85&fit=crop"
                  alt="Regulated trade infrastructure"
                  fill
                  className="object-cover"
                  sizes="42vw"
                  priority
                />
                <div className="absolute inset-0 bg-[var(--ink)]/50" />
                <div
                  className="absolute inset-0 opacity-[0.18] pointer-events-none mix-blend-overlay noise-overlay"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 w-px bg-[var(--rule)]" />
              </div>
            </div>

            {/* Pillars list */}
            <div className="md:w-[58%] divide-y divide-[var(--rule)] overflow-hidden">
              {PILLARS.map((p, i) => (
                <TrustPillar key={p.n} pillar={p} index={i} />
              ))}
            </div>
          </div>

          {/* CTA bar */}
          <div className="px-6 md:px-12 py-16 bg-[var(--ink)] text-[var(--paper)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-white/20" aria-hidden="true" />
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                Escrow-protected · GACP Certified · Direct Source
              </p>
            </div>
            <Link
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-5 bg-[var(--forest)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2"
            >
              Begin Onboarding
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform group-hover:translate-x-2"
              >
                <path
                  d="M2 6H10M10 6L7 3M10 6L7 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="bg-[var(--paper)] border-b border-[var(--rule)]"
          aria-label="Frequently asked questions"
        >
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-4 px-6 md:px-12 py-20 lg:py-32 lg:border-r border-[var(--rule)]">
              <div className="reveal">
                <h2 className="font-serif text-[clamp(32px,4vw,56px)] leading-[0.9] tracking-tighter mb-8 text-[var(--ink)]">
                  Frequently
                  <br />
                  <em className="text-[var(--forest)] not-italic underline decoration-1 underline-offset-8">
                    asked.
                  </em>
                </h2>
                <div className="space-y-8">
                  <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-xs">
                    Detailed procedural queries regarding customs, bulk
                    logistics, and financial instruments are addressed within 48
                    hours of initial enquiry.
                  </p>
                  <div className="p-6 bg-[var(--paper-2)] border border-[var(--rule)] inline-block w-full">
                    <span className="font-mono text-[9px] tracking-widest text-[var(--ink-30)] uppercase block mb-4">
                      Response Guarantee
                    </span>
                    <p className="font-sans text-[12px] text-[var(--ink)] font-bold mb-6 italic">
                      &quot;All technical enquiries receive a response within 48
                      business hours.&quot;
                    </p>
                    <Link
                      href="#contact"
                      onClick={(e) => smoothScroll(e, "#contact")}
                      className="group flex items-center justify-between font-mono text-[10px] tracking-widest uppercase py-4 px-6 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
                    >
                      Send Inquiry
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                      >
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

            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="divide-y divide-[var(--rule)] border-t lg:border-t-0 border-[var(--rule)] reveal">
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

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="bg-[var(--ink)] overflow-hidden"
          aria-label="Contact and procurement"
        >
          <div className="reveal">

            <div className="grid lg:grid-cols-2">
              {/* Info */}
              <div className="px-6 md:px-12 py-20 md:py-32 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-[clamp(48px,8vw,96px)] leading-[0.85] tracking-tighter text-white/90 mb-12">
                    Initiate
                    <br />
                    <em className="text-[var(--forest-mid)] not-italic underline decoration-1 underline-offset-8">
                      Supply.
                    </em>
                  </h2>
                  <p className="font-sans text-[13px] leading-relaxed text-white/60 max-w-[340px]">
                    We maintain strict vetting protocols. Please provide
                    comprehensive regulatory context for cannabis and hemp
                    derivatives to expedite compliance review.
                  </p>
                </div>

                <div className="mt-20 space-y-0 border-t border-white/5">
                  {[
                    {
                      label: "HQ / Administration",
                      value:
                        "7550 East 53rd Place, STE 17125\nDenver, CO 80217, USA",
                    },
                    { label: "Logistics Hub", value: "Bangkok, Thailand" },
                    {
                      label: "Protocol",
                      value: "Escrow-Protected Settlement",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="py-6 flex items-start justify-between border-b border-white/5 group"
                    >
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/70">
                        {item.label}
                      </span>
                      <span className="font-sans text-[11px] leading-relaxed text-white/70 text-right whitespace-pre-line group-hover:text-white/80 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="px-6 md:px-12 py-20 md:py-32 bg-white/[0.01]">
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