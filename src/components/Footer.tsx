// app/components/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const verticals = ["Cannabis", "Hemp Derivatives", "Housing Materials", "Appliances", "HVAC Equipment"];
const framework = ["How We Operate", "Compliance Framework", "Export Markets", "Fee-Based Sourcing", "Start an Enquiry"];

// Fill these in with the real, verifiable registration numbers once received
const THAI_FDA_LICENSE_NO = ""; // e.g. "TH-FDA-EXP-XXXX"
const GACP_CERT_NO = ""; // e.g. "GACP-XXXX-XXXX"

const ArrowIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const LicenseField = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span className="font-mono text-[9px] tracking-widest uppercase text-[var(--paper-3)] block mb-2">
        {label}
      </span>
      {value ? (
        <span className="font-mono text-[11px] tracking-wider text-[var(--brass)]">{value}</span>
      ) : (
        <span className="font-mono text-[11px] tracking-wider text-[var(--paper-3)]">
          Provided during compliance review — contact us to verify
        </span>
      )}
    </div>
  );
};

export default function Footer() {
  const [hoveredVertical, setHoveredVertical] = useState<string | null>(null);
  const [hoveredFramework, setHoveredFramework] = useState<string | null>(null);

  return (
    <footer className="bg-[var(--ink)] border-t border-white/5 pt-24 pb-12">
      <div className="px-6 md:px-12 max-w-[1700px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div 
                className="mb-8 w-[92px] h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/logo1.png" alt="Global Green Export" width={92} height={46} className="invert" />
              </motion.div>
              <p className="font-body text-[13px] leading-relaxed text-white/60 max-w-sm mb-12">
                Bangkok-based export house handling regulated Thai supply chains
                under an FDA-licensed framework. Escrow-settled. Documented at
                every stage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/70 block mb-3">Corporate HQ</span>
                <address className="font-mono text-[10px] leading-relaxed text-white/70 not-italic tracking-wide">
                  7550 East 53rd Place<br />
                  STE 17125, Denver, CO<br />
                  80217, USA
                </address>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/70 block mb-3">Operations Hub</span>
                <p className="font-mono text-[10px] leading-relaxed text-white/70 tracking-wide">
                  Sukhumvit Road<br />
                  Bangkok 10110<br />
                  Thailand
                </p>
              </div>
            </div>
          </div>

          {/* Verticals */}
          <div className="lg:col-span-3 lg:col-start-7">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/70 block mb-7">— Verticals</span>
            <ul className="space-y-4">
              {verticals.map((v) => (
                <li key={v}>
                  <Link 
                    href="/products" 
                    className="group flex items-center justify-between font-body text-xs text-white/75 hover:text-white transition-all duration-300"
                    onMouseEnter={() => setHoveredVertical(v)}
                    onMouseLeave={() => setHoveredVertical(null)}
                  >
                    <span className="relative">
                      {v}
                      {hoveredVertical === v && (
                        <motion.span
                          layoutId="footer-vertical-underline"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-white/40"
                        />
                      )}
                    </span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Framework */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/70 block mb-7">— Framework</span>
            <ul className="space-y-4">
              {framework.map((f) => (
                <li key={f}>
                  <Link 
                    href="/contact" 
                    className="group flex items-center justify-between font-body text-xs text-white/75 hover:text-white transition-all duration-300"
                    onMouseEnter={() => setHoveredFramework(f)}
                    onMouseLeave={() => setHoveredFramework(null)}
                  >
                    <span className="relative">
                      {f}
                      {hoveredFramework === f && (
                        <motion.span
                          layoutId="footer-framework-underline"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-white/40"
                        />
                      )}
                    </span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Licensing */}
        <div className="pt-8 pb-8 border-t border-white/5 flex flex-col md:flex-row gap-8 md:gap-16">
          <LicenseField label="Thai FDA Export License" value={THAI_FDA_LICENSE_NO} />
          <LicenseField label="GACP Certification" value={GACP_CERT_NO} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <span className="font-mono text-[9px] tracking-widest text-white/60 uppercase">
            © {new Date().getFullYear()} Global Green Export
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/privacy" 
              className="font-mono text-[9px] tracking-widest text-white/40 hover:text-white/60 transition-colors uppercase"
            >
              Privacy
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link 
              href="/terms" 
              className="font-mono text-[9px] tracking-widest text-white/40 hover:text-white/60 transition-colors uppercase"
            >
              Terms
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link 
              href="/cookies" 
              className="font-mono text-[9px] tracking-widest text-white/40 hover:text-white/60 transition-colors uppercase"
            >
              Cookies
            </Link>
          </div>
          <p className="font-mono text-[9px] leading-relaxed text-white/45 uppercase tracking-[0.04em] max-w-lg lg:text-right">
            Cannabis and hemp transactions require valid import authorization in
            the buyer&apos;s jurisdiction. Global Green Export does not obtain
            import permits on a buyer&apos;s behalf; we provide documentation to
            support the buyer&apos;s own compliance process.
          </p>
        </div>
      </div>
    </footer>
  );
}