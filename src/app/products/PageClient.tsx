// app/products/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// ============================================================
// DATA
// ============================================================

const PRODUCT_LINES = [
  {
    id: "01",
    category: "Medical",
    name: "Premium Whole Flower",
    description: "GACP-certified whole flower cannabis from Thailand's finest licensed indoor and greenhouse cultivators. Consistent terpene profiles and cannabinoid ratios across every batch.",
    packaging: "Available in 5g to 1kg units. Nitrogen-flushed, vacuum-sealed packaging. Full CoA included.",
    tags: ["Indoor", "Greenhouse", "Multiple Strains"],
  },
  {
    id: "02",
    category: "Pharmaceutical",
    name: "Extracts & Distillates",
    description: "High-quality full-spectrum, broad-spectrum, and isolated extracts at 80–99% purity levels. Produced under ISO-compliant extraction conditions with third-party verification.",
    packaging: "Distillate, crude, or winterised oil. Custom formulation and white-label on request.",
    tags: ["Full-Spectrum", "Broad-Spectrum", "Isolate", "High Purity"],
  },
  {
    id: "03",
    category: "Wellness · B2B",
    name: "Hemp-Derived Products",
    description: "Compliant hemp-derived CBD, CBG, CBN, and blended wellness products. EU-compliant THC thresholds maintained across all formats. Colorado and Thai-origin available.",
    packaging: "Crystalline isolate, raw paste, and water-soluble formats. COA with each order.",
    tags: ["CBD", "CBG", "CBN", "Water-Soluble", "EU-Compliant"],
  },
];

const ISOLATES = [
  { compound: "CBD", name: "Cannabidiol", uses: "Therapeutic, anti-inflammatory, anxiety relief", purity: "99%", bar: 99 },
  { compound: "CBG", name: "Cannabigerol", uses: "Neuroprotective, antibacterial, anti-tumour", purity: "98%", bar: 98 },
  { compound: "CBN", name: "Cannabinol", uses: "Sleep disorders, sedation, appetite stimulation", purity: "97%", bar: 97 },
  { compound: "THC", name: "Tetrahydrocannabinol", uses: "Pain management, nausea, appetite, sleep", purity: "95%+", bar: 95 },
  { compound: "CBC", name: "Cannabichromene", uses: "Anti-inflammatory, antidepressant, analgesic", purity: "96%", bar: 96 },
  { compound: "CBDV", name: "Cannabidivarin", uses: "Epilepsy, autism spectrum, anti-nausea", purity: "95%", bar: 95 },
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

export default function ProductsPage() {
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
        <section ref={heroRef} className="relative min-h-screen bg-[var(--ink)] overflow-hidden" aria-label="Products">
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
                GACP-Certified
                <br />
                <span className="text-[var(--jade)]">Cannabis & Hemp.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-body text-[15px] leading-relaxed text-white/50 max-w-lg mt-8"
              >
                Every shipment includes a full Certificate of Analysis, GACP
                documentation, and export compliance paperwork verified by the Thai FDA.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-16 max-w-3xl"
              >
                {[
                  { val: "3", label: "Product Lines" },
                  { val: "6+", label: "Cannabinoid Isolates" },
                  { val: "99%", label: "Max Purity" },
                  { val: "100%", label: "GACP Certified" },
                ].map((s) => (
                  <div key={s.label} className="bg-[var(--ink)] px-6 py-8">
                    <div className="font-display text-[clamp(28px,4vw,52px)] text-white/90 mb-2">{s.val}</div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PRODUCT LINES ── */}
        <section className="border-t border-[var(--line)]" aria-label="Product categories">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader 
              label="01 Product Categories" 
              title="Three core product lines."
              subtitle="Direct from source."
            />

            <div className="space-y-px bg-[var(--line)]">
              {PRODUCT_LINES.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-1 px-6 md:px-12 py-12 flex items-start justify-between lg:justify-start lg:flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                      <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)]">{product.id}</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--jade)]">{product.category}</span>
                    </div>
                    <div className="lg:col-span-5 px-6 md:px-12 py-12 border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                      <h3 className="font-display text-[clamp(24px,3vw,42px)] leading-tight tracking-tight text-[var(--ink)] mb-6">
                        {product.name}
                      </h3>
                      <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)]">{product.description}</p>
                    </div>
                    <div className="lg:col-span-3 px-6 md:px-12 py-12 border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--ink-30)] mb-4">Packaging & Format</div>
                      <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)]">{product.packaging}</p>
                    </div>
                    <div className="lg:col-span-3 px-6 md:px-12 py-12">
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--ink-30)] mb-4">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((t) => (
                          <span key={t} className="px-3 py-1.5 border border-[var(--line)] font-mono text-[9px] text-[var(--ink-40)] uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISOLATES ── */}
        <section className="bg-[var(--ink)] border-t border-white/10" aria-label="Isolates">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <div className="mb-16">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— 02 Laboratory Catalogue</span>
              <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-tight text-white/90 mt-4">
                Pure isolated cannabinoids.
              </h2>
              <p className="font-body text-[15px] text-white/40 mt-4">All isolates independently verified. CoA provided on every order.</p>
            </div>

            <div className="space-y-px">
              <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/10">
                <div className="col-span-2 font-mono text-[9px] tracking-widest uppercase text-white/20">Compound</div>
                <div className="col-span-3 font-mono text-[9px] tracking-widest uppercase text-white/20 hidden md:block">Full Name</div>
                <div className="col-span-4 font-mono text-[9px] tracking-widest uppercase text-white/20 hidden lg:block">Primary Applications</div>
                <div className="col-span-3 font-mono text-[9px] tracking-widest uppercase text-white/20">Max Purity</div>
              </div>

              {ISOLATES.map((iso, i) => (
                <motion.div
                  key={iso.compound}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-12 gap-4 px-4 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="col-span-2">
                    <span className="font-display text-[clamp(20px,2.5vw,32px)] text-[var(--jade)] group-hover:text-white/90 transition-colors">
                      {iso.compound}
                    </span>
                  </div>
                  <div className="col-span-3 hidden md:flex items-center">
                    <span className="font-body text-[13px] text-white/50">{iso.name}</span>
                  </div>
                  <div className="col-span-4 hidden lg:flex items-center">
                    <span className="font-body text-[12px] text-white/30 leading-relaxed">{iso.uses}</span>
                  </div>
                  <div className="col-span-3 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/10 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${iso.bar}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="absolute left-0 top-0 h-full bg-[var(--jade)]"
                      />
                    </div>
                    <span className="font-mono text-[11px] text-white/60 shrink-0">{iso.purity}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--paper)] px-6 md:px-12 py-32 border-t border-[var(--line)]" aria-label="Call to action">
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Ready to order?</span>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
                Request a
                <br />
                <span className="text-[var(--jade)]">product catalogue.</span>
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-10 py-5 bg-[var(--jade)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--jade-deep)] transition-colors"
              >
                Start Enquiry
              </Link>
              <Link
                href="/wholesale"
                className="px-10 py-5 border border-[var(--ink)]/20 text-[var(--ink-60)] font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--paper-2)] transition-colors"
              >
                Wholesale Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}