// app/wholesale/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// ============================================================
// DATA
// ============================================================

const INVENTORY = [
  {
    id: "01",
    title: "Whole Flower",
    items: ["Indoor A-Grade", "Greenhouse Premium", "Outdoor / Sun-Grown", "Trimmed & Manicured", "Machine-Trimmed"],
  },
  {
    id: "02",
    title: "Extracts & Oils",
    items: ["Full-Spectrum Oil", "Broad-Spectrum Distillate", "CBD Isolate Powder", "CBG Isolate", "Raw THCA Crystalline"],
  },
  {
    id: "03",
    title: "Research-Grade",
    items: ["High-Purity Isolates", "Certified Standards", "Terpene Isolates", "Custom Analytical Batches"],
  },
  {
    id: "04",
    title: "Hemp Products",
    items: ["Hemp Biomass", "CBD Hemp Flower", "Hemp Seed Oil", "CBG Hemp", "Hemp Extract Powder"],
  },
];

const TIERS = [
  {
    name: "Standard",
    subtitle: "From 5 kg",
    features: ["Minimum 5 kg per SKU", "Lead time 4–6 weeks", "CoA included", "EXW Bangkok pricing", "Standard Support"],
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
    features: ["100 kg+ per order", "Negotiated lead times", "White-label options", "Custom formulations", "Quarterly contracts", "Escrow standard"],
    highlight: false,
  },
];

const REQUIREMENTS = [
  { id: "01", title: "Valid Import Licence" },
  { id: "02", title: "Business Registration" },
  { id: "03", title: "Intended Use Declaration" },
  { id: "04", title: "End-User Certificate" },
];

const LOGISTICS = [
  { label: "Incoterms", value: "EXW · FOB · CIF" },
  { label: "Transport", value: "Air & Sea Cargo" },
  { label: "Packaging", value: "GDP-Compliant" },
  { label: "Tracking", value: "Real-time API" },
];

// ============================================================
// COMPONENTS
// ============================================================

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— {label}</span>
      <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
        {title}
      </h2>
      {subtitle && <p className="text-[15px] text-[var(--ink-55)] max-w-xl mt-4">{subtitle}</p>}
    </motion.div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function WholesalePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-screen bg-[var(--ink)] overflow-hidden" aria-label="Wholesale">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 origin-top"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--jade-deep)]" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay" />
          </motion.div>

          <div className="relative z-10 flex items-center min-h-screen px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto w-full">

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-[clamp(48px,10vw,120px)] leading-[0.85] tracking-tight text-white mt-8"
              >
                Wholesale Cannabis
                <br />
                <span className="text-[var(--jade)]">&amp; Hemp Supply.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-body text-[15px] leading-relaxed text-white/50 max-w-lg mt-8"
              >
                Serving licensed dispensaries, pharmaceutical importers, and
                research institutions with bulk GACP-certified medicinal products
                directly from our Thai cultivation network.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── INVENTORY ── */}
        <section className="border-t border-[var(--line)]" aria-label="Inventory">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader label="01 Inventory" title="Four product categories." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)]">
              {INVENTORY.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper)] px-8 py-12"
                >
                  <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6 block">— {cat.id}</span>
                  <h3 className="font-bold text-[16px] tracking-tight text-[var(--ink)] mb-8 uppercase">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-[13px] text-[var(--ink-60)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--jade)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING TIERS ── */}
        <section className="bg-[var(--paper-2)] border-t border-[var(--line)]" aria-label="Pricing tiers">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader 
              label="02 Pricing" 
              title="Volume-based tiers."
              subtitle="Prices are indexed to current market rates and production cycles. Contact us for today's quote."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--line)]">
              {TIERS.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-8 py-12 relative ${
                    tier.highlight ? "bg-[var(--ink)] text-white" : "bg-[var(--paper-2)]"
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute top-6 right-6 font-mono text-[8px] tracking-widest uppercase px-3 py-1.5 bg-[var(--jade)] text-[var(--paper)]">
                      {tier.badge}
                    </span>
                  )}
                  <div className={`font-mono text-[9px] tracking-[0.3em] uppercase mb-4 ${tier.highlight ? "text-[var(--jade)]" : "text-[var(--jade)]"}`}>
                    {tier.subtitle}
                  </div>
                  <h3 className={`font-display text-[clamp(28px,3vw,42px)] leading-none tracking-tight mb-10 ${
                    tier.highlight ? "text-white/90" : "text-[var(--ink)]"
                  }`}>
                    {tier.name}
                  </h3>
                  <ul className="space-y-4 mb-12">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 font-body text-[13px] ${
                        tier.highlight ? "text-white/60" : "text-[var(--ink-60)]"
                      }`}>
                        <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${
                          tier.highlight ? "bg-[var(--jade)]" : "bg-[var(--jade)]"
                        }`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center font-mono text-[10px] tracking-widest uppercase py-4 px-6 transition-all duration-500 ${
                      tier.highlight
                        ? "bg-[var(--jade)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)]"
                        : "border border-[var(--ink)]/20 text-[var(--ink-60)] hover:bg-[var(--ink)] hover:text-white hover:border-[var(--ink)]"
                    }`}
                  >
                    Request Pricing
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE & LOGISTICS ── */}
        <section className="bg-[var(--paper)] border-t border-[var(--line)]" aria-label="Compliance and logistics">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Compliance */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— 03 Compliance</span>
                <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4 mb-8">
                  Who can purchase?
                </h2>
                <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)] mb-12">
                  Mandatory documentation required for all international exports to ensure seamless customs clearance.
                </p>
                <div className="space-y-px bg-[var(--line)]">
                  {REQUIREMENTS.map((r, i) => (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-8 bg-[var(--paper)] px-8 py-6"
                    >
                      <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)]">{r.id}</span>
                      <span className="font-body text-[14px] text-[var(--ink-70)]">{r.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Logistics */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— 04 Distribution</span>
                <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4 mb-8">
                  Global logistics.
                </h2>
                <div className="space-y-6">
                  {LOGISTICS.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-5 border-b border-[var(--line)]">
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-30)]">{item.label}</span>
                      <span className="font-body text-[14px] text-[var(--ink-70)]">{item.value}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-[var(--ink)]"
                >
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mb-6">Start your wholesale enquiry</div>
                  <p className="font-body text-[13px] text-white/50 mb-8">
                    Request a current inventory list and commercial pricing based on your volume requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 bg-[var(--jade)] text-[var(--paper)] hover:bg-[var(--jade-deep)] transition-colors"
                  >
                    Contact Wholesale Team
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}