"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";


// ============================================================
// HOOKS
// ============================================================

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

function useMagnetic(ref: React.RefObject<HTMLElement>, strength: number = 0.15) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);
}

// ============================================================
// COMPONENTS
// ============================================================

function Reveal({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.8,
  viewportOnce = true,
  className = "",
  onMouseEnter,
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: "up" | "left" | "right" | "scale" | "fade";
  duration?: number;
  viewportOnce?: boolean;
  className?: string;
  onMouseEnter?: () => void;
}) {
  const variants = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    scale: { opacity: 0, scale: 0.96 },
    fade: { opacity: 0 },
  };

  const initial = variants[direction] || variants.up;
  const animate = direction === "scale" ? { opacity: 1, scale: 1 } : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: viewportOnce }}
      className={className}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </motion.div>
  );
}

function StampSeal({ label, sub, size = "md", rotate = -8, className = "" }: { 
  label: string; 
  sub?: string; 
  size?: "sm" | "md" | "lg";
  rotate?: number;
  className?: string;
}) {
  const sizes = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-24 h-24" };
  const textSizes = { sm: "text-[8px]", md: "text-[9px]", lg: "text-[11px]" };
  
  return (
    <div 
      className={`${sizes[size]} shrink-0 text-[var(--stamp)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full border-2 border-current rounded-full flex items-center justify-center">
        <div className="absolute inset-1 border border-current rounded-full opacity-50" />
        <div className={`text-center px-2 ${textSizes[size]}`}>
          <div className="font-mono tracking-[0.15em] uppercase leading-tight">{label}</div>
          {sub && <div className="font-mono tracking-[0.1em] uppercase opacity-60 text-[0.7em] mt-0.5">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

function TearLine() {
  return <div className="tear-line" />;
}

function SectionWrapper({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({ 
  label, 
  title, 
  subtitle, 
  centered = false,
  direction = "up",
  delay = 0,
  className = "",
}: { 
  label: string; 
  title: string | React.ReactNode; 
  subtitle?: string; 
  centered?: boolean;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal direction={direction} delay={delay} className={`${centered ? "text-center" : ""} ${className}`}>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— {label}</span>
      <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] text-[var(--ink-55)] mt-4 ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

const MagneticButton = ({
  children,
  href,
  className,
  variant = "primary",
  onClick,
  size = "default",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  size?: "sm" | "default" | "lg";
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.15);

  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    default: "px-10 py-5 text-[11px]",
    lg: "px-12 py-6 text-[12px]",
  };

  const baseStyles =
    "inline-flex items-center gap-3 font-mono tracking-[0.25em] uppercase transition-all duration-500";

  const variants = {
    primary: "bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--jade-deep)]",
    secondary: "border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--paper-2)]",
    outline: "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]",
  };

  return (
    <Link ref={ref} href={href || "#"} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};

// ============================================================
// SEO DATA
// ============================================================

const SEO = {
  title: "Global Green Export | Thailand's Premier Export Partner for Cannabis, Hemp, Construction & HVAC",
  description: "Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC systems. Escrow-protected global supply chains with full documentation.",
  keywords: "cannabis export Thailand, GACP certified cannabis, hemp derivatives wholesale, construction materials export, HVAC equipment supply, Thai FDA licensed exporter, escrow protected trade, international supply chain, Bangkok export house",
  ogImage: "/images/og-image.jpg",
};

// ============================================================
// DATA
// ============================================================

const VERTICALS = [
  {
    id: "cannabis",
    title: "Cannabis",
    subtitle: "GACP-Certified Medical Cannabis",
    image: "/gallery/35.jpeg",
    description: "Premium whole flower, full-spectrum extracts, and pharmaceutical-grade isolates — each batch verified with Certificate of Analysis (CoA) and GACP documentation.",
    stats: ["GACP Certified", "Thai FDA Approved", "80-99% Purity"],
    link: "/products#cannabis",
    seoTitle: "GACP-Certified Cannabis Export from Thailand",
    seoDesc: "Medical-grade cannabis whole flower and extracts from Thai GACP-certified cultivators. Full CoA and export documentation provided.",
  },
  {
    id: "hemp",
    title: "Hemp Derivatives",
    subtitle: "CBD · CBG · CBN Wholesale",
    image: "/gallery/32.jpeg",
    description: "Water-soluble isolates, crystalline powders, and raw paste — all EU-compliant with verified THC thresholds. Colorado and Thai-origin supply available.",
    stats: ["EU Compliant", "Colorado Partner", "US Fulfillment"],
    link: "/products#hemp",
    seoTitle: "Wholesale Hemp Derivatives | CBD, CBG, CBN Supply",
    seoDesc: "Premium CBD, CBG, and CBN isolates for B2B wellness and pharmaceutical applications. EU-compliant with full documentation.",
  },
  {
    id: "construction",
    title: "Housing Materials",
    subtitle: "Structural & Finishing Supplies",
    image: "/gallery/2.jpeg",
    description: "Structural steel, prefabricated components, flooring, cladding, and finishing materials — quality-inspected per shipment with certificates of origin.",
    stats: ["Certificate of Origin", "Quality Inspected", "Sourced to Spec"],
    link: "/products#construction",
    seoTitle: "Construction Materials Export from Thailand",
    seoDesc: "High-quality structural steel, prefab components, and finishing materials for residential and commercial development projects.",
  },
  {
    id: "appliances",
    title: "Appliances",
    subtitle: "White Goods & Commercial Equipment",
    image: "/gallery/14.jpeg",
    description: "CE, UL/ETL, and SAA certified appliances — from residential white goods to commercial kitchen equipment. Container-load pricing available.",
    stats: ["CE Marked", "UL/ETL Certified", "Commercial Grade"],
    link: "/products#appliances",
    seoTitle: "Wholesale Appliances Export from Thailand",
    seoDesc: "Premium white goods and commercial kitchen equipment with international certifications. Container-load pricing for global buyers.",
  },
  {
    id: "hvac",
    title: "HVAC Equipment",
    subtitle: "Climate-Specific Systems",
    image: "/gallery/18.jpeg",
    description: "Split systems, ducted units, commercial and industrial HVAC — engineered for tropical climates with significant efficiency advantages in warm-weather markets.",
    stats: ["Tropical Optimized", "Commercial Units", "Components & Parts"],
    link: "/products#hvac",
    seoTitle: "HVAC Equipment Export from Thailand",
    seoDesc: "Climate-specific split systems, ducted units, and commercial HVAC equipment built for tropical and warm-weather markets.",
  },
];

const DESTINATIONS = [
  { country: "Germany", region: "Europe" },
  { country: "Canada", region: "North America" },
  { country: "Australia", region: "Asia-Pacific" },
  { country: "United Kingdom", region: "Europe" },
  { country: "Netherlands", region: "Europe" },
  { country: "Switzerland", region: "Europe" },
  { country: "Czech Republic", region: "Europe" },
  { country: "Denmark", region: "Europe" },
  { country: "Portugal", region: "Europe" },
  { country: "Poland", region: "Europe" },
  { country: "New Zealand", region: "Asia-Pacific" },
  { country: "United States", region: "North America" },
];

const CERTIFICATES = [
  { 
    name: "GACP Certification", 
    type: "Cannabis",
    image: "/gallery/35.jpeg",
    description: "Good Agricultural and Collection Practices certification for medicinal cannabis cultivation — the international standard for pharmaceutical-grade production.",
  },
  { 
    name: "Thai FDA Export License", 
    type: "All Verticals",
    image: "/gallery/1.jpeg",
    description: "Licensed by the Thai Food and Drug Administration to export regulated products from Thailand to international markets with full compliance.",
  },
  { 
    name: "Phytosanitary Certificates", 
    type: "Botanical",
    image: "/gallery/28.jpeg",
    description: "Certified plant health documentation ensuring compliance with international phytosanitary standards for customs clearance in all destination countries.",
  },
  { 
    name: "Certificate of Origin", 
    type: "All Verticals",
    image: "/gallery/37.jpeg",
    description: "Full traceability documentation from source to destination — verifying product origin, quality, and compliance for every shipment.",
  },
];

const STATS = [
  { value: "30+", label: "Export Markets", description: "Active supply chains across Europe, North America, Asia-Pacific, and the United Kingdom with full regulatory clearance in each market." },
  { value: "100%", label: "Escrow Protected", description: "Every transaction is secured through neutral third-party escrow — funds held until delivery verification is confirmed by the buyer." },
  { value: "48h", label: "Response Time", description: "Feasibility assessment and initial response within 48 business hours of enquiry submission — no delays, no waiting." },
  { value: "FDA", label: "Thai Licensed", description: "Licensed by the Thai Food and Drug Administration to export regulated products globally — full compliance and documentation." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Initial Enquiry & Assessment", description: "Submit your product requirements, volume, and destination. We respond within 48 hours with a feasibility assessment and preliminary pricing." },
  { step: "02", title: "Compliance & Documentation Review", description: "We assess destination-country regulations and flag all required documentation before any commitment is made — no surprises." },
  { step: "03", title: "Sample & Quality Verification", description: "Representative samples ship alongside comprehensive documentation — Certificate of Analysis, certificate of origin, and inspection reports." },
  { step: "04", title: "Escrow & Order Confirmation", description: "Funds are deposited with a neutral third-party escrow provider and held securely until delivery is verified and confirmed by the buyer." },
  { step: "05", title: "Logistics & Export Processing", description: "All export documentation — phytosanitary certificates, customs filings, freight coordination — handled in-house by our logistics team." },
  { step: "06", title: "Escrow Release & Archive", description: "Upon confirmed delivery and buyer sign-off, escrow funds are released to the seller and all transaction documentation is archived." },
];

const FAQS = [
  {
    q: "What products does Global Green Export supply?",
    a: "We supply GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment — all sourced from Thai manufacturers and verified with full documentation."
  },
  {
    q: "What certifications do you hold?",
    a: "We hold Thai FDA export licensing, GACP certification for cannabis products, and provide phytosanitary certificates and certificates of origin for all shipments."
  },
  {
    q: "How does escrow protection work?",
    a: "Buyers deposit funds into a neutral third-party escrow account. Funds are held securely and released only once the buyer confirms delivery and product quality."
  },
  {
    q: "What is your minimum order quantity?",
    a: "Minimums vary by vertical. Cannabis starts at 1kg, hemp derivatives at 500g, and construction/appliance/HVAC orders are assessed per project requirements."
  },
  {
    q: "Which countries do you export to?",
    a: "We export to 30+ countries including Germany, Canada, Australia, United Kingdom, Netherlands, Switzerland, and the United States, among others."
  },
  {
    q: "What documentation is provided with each order?",
    a: "Every order includes a commercial invoice, packing list, bill of lading, certificate of origin, and relevant quality certifications. Cannabis orders additionally include CoA and phytosanitary certificates."
  },
];

// ============================================================
// SECTIONS
// ============================================================

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-black" aria-label="Hero">
      {/* Video Background - No animation wrapper */}
      <div className="absolute inset-0">
        <ScrollVideoHero />
      </div>

      {/* Overlay gradients - keep these */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content - Keep animations but adjust */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 md:px-12">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/70">Bangkok, Thailand</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-display leading-[0.92] tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
          >
            Global Supply.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="font-display italic leading-[0.92] tracking-tight text-white/80"
            style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
          >
            Without Compromise.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 font-mono text-[10px] tracking-[0.2em] uppercase">
              <span>Thailand → Europe</span>
              <span className="w-px h-4 bg-white/30" />
              <span>Thailand → USA</span>
              <span className="w-px h-4 bg-white/30" />
              <span>Thailand → Australia</span>
            </div>

            <MagneticButton href="/contact" variant="primary" className="mt-4" size="lg">
              Request Procurement →
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function BrandStory() {
  const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <SectionWrapper className="bg-[var(--paper)] py-24">
      <div className="px-5 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Who We Are</span>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
              Thailand's Trusted
              <br />
              <span className="text-[var(--jade)] italic">Export Partner</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--ink-60)] mt-6">
              Global Green Export is a Bangkok-based export house specializing in regulated goods — from GACP-certified cannabis and hemp derivatives to construction materials, appliances, and HVAC systems.
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--ink-60)] mt-4">
              We operate under Thai FDA licensing with escrow-protected settlement, full documentation, and compliance-first approach for every transaction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="/about" variant="secondary" size="sm">
                Learn More
              </MagneticButton>
              <MagneticButton href="/contact" variant="primary" size="sm" onClick={(e) => smoothScroll(e, "/contact")}>
                Get Started
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-[var(--ink)] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[url('/gallery/1.jpeg')] bg-cover bg-center" />
                  </div>
                  <div className="aspect-[4/3] bg-[var(--ink)] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[url('/gallery/35.jpeg')] bg-cover bg-center" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] bg-[var(--ink)] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[url('/gallery/2.jpeg')] bg-cover bg-center" />
                  </div>
                  <div className="aspect-square bg-[var(--ink)] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[url('/gallery/14.jpeg')] bg-cover bg-center" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function VerticalPanels() {
  return (
    <SectionWrapper className="bg-[var(--paper-2)] py-24">
      <div className="px-5 md:px-12 max-w-[1800px] mx-auto">
        <SectionHeader 
          label="What We Supply" 
          title="Five Vertical Categories"
          subtitle="From cannabis to HVAC — each vertical operates under the same compliance framework and documentation standards."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {VERTICALS.map((vertical, index) => (
            <Reveal 
              key={vertical.id} 
              direction="up" 
              delay={index * 0.08}
              className="group relative h-[420px] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <Link href={vertical.link} className="block h-full">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${vertical.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/60">{vertical.subtitle}</span>
                  <h3 className="font-display text-[26px] leading-tight mt-1">{vertical.title}</h3>
                  <p className="text-[12px] text-white/80 mt-2 line-clamp-2">{vertical.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {vertical.stats.slice(0, 2).map((stat) => (
                      <span key={stat} className="px-2 py-1 border border-white/30 text-white/90 font-mono text-[8px] tracking-[0.15em] uppercase backdrop-blur-sm bg-black/30">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.4} className="text-center mt-12">
          <MagneticButton href="/products" variant="secondary" size="lg">
            View All Products →
          </MagneticButton>
        </Reveal>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function GlobalReach() {
  return (
    <SectionWrapper className="relative bg-[var(--ink)] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--jade)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="px-5 md:px-12 max-w-[1800px] mx-auto relative z-10">
        <SectionHeader 
          label="Global Reach" 
          title="30+ Countries"
          subtitle="We supply licensed importers across Europe, Asia-Pacific, North America, and the United Kingdom."
          centered
          direction="up"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest, index) => (
            <Reveal 
              key={dest.country} 
              direction="scale" 
              delay={index * 0.03}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="font-display text-[18px] text-white/90 group-hover:text-white transition-colors">
                {dest.country}
              </div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/40 mt-2">
                {dest.region}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.3} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 border border-white/10 rounded-full backdrop-blur-sm bg-white/5">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">Thailand → Global</span>
            <span className="w-px h-6 bg-white/20 hidden md:block" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">Escrow Protected</span>
            <span className="w-px h-6 bg-white/20 hidden md:block" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">FDA Licensed</span>
          </div>
        </Reveal>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function WhyUs() {
  return (
    <SectionWrapper className="bg-[var(--paper)] py-24">
      <div className="px-5 md:px-12 max-w-[1800px] mx-auto">
        <SectionHeader 
          label="Why Choose Us" 
          title="Built on Trust"
          subtitle="Every transaction is backed by escrow protection, documented compliance, and dedicated account management."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((item, index) => (
            <Reveal 
              key={item.label} 
              direction="up" 
              delay={index * 0.1}
              className="bg-[var(--paper-2)] p-8 rounded-2xl border border-[var(--line)] hover:shadow-xl transition-shadow duration-500 group"
            >
              <div className="font-display text-[clamp(48px,5vw,72px)] leading-[0.8] tracking-tight text-[var(--jade)] numeral-embossed group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <div className="font-bold text-[14px] text-[var(--ink)] mt-3">{item.label}</div>
              <p className="text-[13px] text-[var(--ink-55)] mt-2">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  // Step icons as SVG components
  const StepIcons = {
    "01": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    "02": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    "03": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    "04": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    "05": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    "06": (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  };

  // Step images for the visual display
  const stepImages = [
    "/gallery/1.jpeg",
    "/gallery/35.jpeg",
    "/gallery/28.jpeg",
    "/gallery/37.jpeg",
    "/gallery/2.jpeg",
    "/gallery/14.jpeg",
  ];

  const stepColors = [
    "from-[var(--jade)]/80 to-[var(--jade-deep)]",
    "from-blue-500/80 to-blue-700",
    "from-emerald-500/80 to-emerald-700",
    "from-amber-500/80 to-amber-700",
    "from-purple-500/80 to-purple-700",
    "from-rose-500/80 to-rose-700",
  ];

  return (
    <SectionWrapper className="relative bg-[var(--paper-2)] py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--jade)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="px-5 md:px-12 max-w-[1800px] mx-auto relative z-10">
        <SectionHeader 
          label="How We Work" 
          title="Precision in Motion"
          subtitle="Every step is documented, verified, and tracked — from initial enquiry to final delivery."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-16 pt-8">
          {/* Steps List - Left Side */}
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal 
                key={step.step} 
                direction="left" 
                delay={index * 0.12}
                className={`cursor-pointer border-l-2 pl-6 transition-all duration-500 ${
                  activeStep === index ? "border-[var(--jade)]" : "border-[var(--line)] hover:border-[var(--jade)]/50"
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index 
                      ? "bg-[var(--jade)] text-white shadow-lg shadow-[var(--jade)]/30 scale-110" 
                      : "bg-[var(--paper)] text-[var(--ink-30)] border border-[var(--line)]"
                  }`}>
                    <span className="text-sm">{StepIcons[step.step as keyof typeof StepIcons]}</span>
                  </div>
                  <div>
                    <div className={`font-display text-[clamp(18px,2vw,24px)] leading-tight transition-colors duration-500 ${
                      activeStep === index ? "text-[var(--ink)]" : "text-[var(--ink-55)]"
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                <p className={`text-[13px] mt-2 max-w-sm ml-16 transition-colors duration-500 ${
                  activeStep === index ? "text-[var(--ink-70)]" : "text-[var(--ink-40)]"
                }`}>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Visual Display - Right Side - Full Height Image */}
          <Reveal direction="right" delay={0.3}>
            <div className="relative bg-[var(--paper)] rounded-2xl border border-[var(--line)] shadow-lg overflow-hidden h-screen">
              {/* Full Height Background Image */}
              <div className="absolute inset-0">
                <div
                  className="w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    backgroundImage: `url(${stepImages[activeStep]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: `scale(${1 + activeStep * 0.02})`,
                  }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stepColors[activeStep]} opacity-60 transition-opacity duration-500`} />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content Overlay - Centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="font-display text-[clamp(80px,10vw,120px)] leading-[0.8] tracking-tight text-white/10">
                    {PROCESS_STEPS[activeStep].step}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <div className="text-white w-10 h-10">
                        {StepIcons[PROCESS_STEPS[activeStep].step as keyof typeof StepIcons]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                <div className="text-center max-w-sm">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">
                    Step {PROCESS_STEPS[activeStep].step}
                  </div>
                  <div className="font-display text-[clamp(28px,3vw,40px)] leading-tight">
                    {PROCESS_STEPS[activeStep].title}
                  </div>
                  <div className="h-px w-12 mx-auto my-4 bg-white/30" />
                  <p className="text-[14px] text-white/80 leading-relaxed">
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {PROCESS_STEPS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeStep === index 
                          ? "w-8 h-2 bg-white" 
                          : "w-2 h-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Step Counter */}
                <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.2em] text-white/40">
                  {activeStep + 1} / {PROCESS_STEPS.length}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function Certifications() {
  return (
    <SectionWrapper className="relative bg-[var(--ink)] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--jade)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="px-5 md:px-12 max-w-[1800px] mx-auto relative z-10">
        <SectionHeader 
          label="Certifications" 
          title="Verified Credentials"
          subtitle="Every certificate is issued by accredited bodies and available for verification upon request."
          centered
          direction="up"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <Reveal 
              key={cert.name} 
              direction="up" 
              delay={index * 0.1}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-[3/4] bg-[var(--ink)] relative overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${cert.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/60">{cert.type}</div>
                <div className="font-display text-[18px] leading-tight mt-1">{cert.name}</div>
                <p className="text-[11px] text-white/50 mt-2">{cert.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className="bg-[var(--paper-2)] py-24">
      <div className="px-5 md:px-12 max-w-[1800px] mx-auto">
        <SectionHeader 
          label="Frequently Asked Questions" 
          title="Common Questions"
          subtitle="Everything you need to know about sourcing, compliance, and our export process."
          centered
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} direction="up" delay={index * 0.05}>
                <div 
                  className={`border ${isOpen ? 'border-[var(--jade)]' : 'border-[var(--line)]'} bg-[var(--paper)] rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-display text-[18px] text-[var(--ink)]">{faq.q}</h3>
                    <motion.span 
                      className="text-[var(--jade)] text-2xl font-light"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isOpen ? "auto" : 0, 
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[15px] text-[var(--ink-60)] leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

function FinalCTA() {
  const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <SectionWrapper className="relative bg-[var(--paper)] py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--jade)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="px-5 md:px-12 text-center relative z-10 max-w-[1800px] mx-auto">
        <Reveal direction="up">
          <div className="inline-block px-6 py-2 border border-[var(--jade)]/20 rounded-full mb-8">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--jade)]">Ready to Scale</span>
          </div>
          
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-[var(--ink)]">
            Let's Build Your
          </h2>
          <h2 className="font-display italic text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight text-[var(--jade)] mt-2">
            Next Supply Chain
          </h2>
          <p className="text-[15px] text-[var(--ink-55)] max-w-md mx-auto mt-6">
            From initial enquiry to final delivery — we handle the complexity so you can focus on growth.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="lg" onClick={(e) => smoothScroll(e, "/contact")}>
              Start Procurement →
            </MagneticButton>
            <MagneticButton href="/products" variant="secondary" size="lg">
              Explore Products
            </MagneticButton>
          </div>
        </Reveal>
      </div>
      <TearLine />
    </SectionWrapper>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function HomePage() {
  useLenis();

  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Green Export",
    description: SEO.description,
    url: "https://globalgreenexport.com",
    logo: "https://globalgreenexport.com/logo.png",
    foundingDate: "2020",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "Thailand"
      }
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      availableLanguage: ["English", "Thai"]
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  return (
    <>
      {/* SEO Meta */}
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://globalgreenexport.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.ogImage} />
      <link rel="canonical" href="https://globalgreenexport.com" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="paper-grain" role="main">
        <Hero />
        <BrandStory />
        <VerticalPanels />
        <GlobalReach />
        <WhyUs />
        <ProcessTimeline />
        <Certifications />
        <FaqSection />
        <FinalCTA />
      </main>
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}