// app/escrow/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";


// ============================================================
// DATA
// ============================================================

const PROTECTIONS = [
  {
    id: "01",
    title: "Buyer Protection",
    description: "Funds are never released until product is verified and delivered to specification.",
  },
  {
    id: "02",
    title: "Seller Protection",
    description: "Guaranteed payment upon successful, compliant delivery — no chargeback risk.",
  },
  {
    id: "03",
    title: "Documentation Control",
    description: "GGE manages all export documents, CoA, and compliance paperwork for both parties.",
  },
  {
    id: "04",
    title: "Cross-Border Compliance",
    description: "We verify destination country import requirements before any transaction is authorised.",
  },
  {
    id: "05",
    title: "Dispute Resolution",
    description: "Neutral third-party dispute resolution process if any condition of trade is contested.",
  },
  {
    id: "06",
    title: "Secure Fund Holding",
    description: "Escrow funds are held in dedicated, segregated accounts throughout the transaction lifecycle.",
  },
];

const WORKFLOW_STEPS = [
  {
    id: "01",
    title: "Agreement Established",
    description: "Buyer and seller agree on specs, quantity, and pricing. GGE documents conditions in a binding agreement.",
  },
  {
    id: "02",
    title: "Funds Deposited",
    description: "Buyer deposits payment into the GGE escrow account. Funds are held securely and are inaccessible to the seller.",
  },
  {
    id: "03",
    title: "Product Verified",
    description: "GGE verifies GACP certification and CoA documentation before shipment is authorised and logistics coordinated.",
  },
  {
    id: "04",
    title: "Delivery & Release",
    description: "Upon confirmed delivery and buyer sign-off, escrow funds are released to the seller. Documentation is archived.",
  },
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

export default function EscrowPage() {
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
        <section ref={heroRef} className="relative min-h-screen bg-[var(--ink)] overflow-hidden" aria-label="Escrow services">
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
                Eliminating risk
                <br />
                from
                <br />
                <span className="text-[var(--jade)]">cross-border trade.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-body text-[15px] leading-relaxed text-white/50 max-w-lg mt-8"
              >
                International cannabis trade carries inherent capital risk. Our
                escrow service eliminates uncertainty — protecting buyers and
                sellers through a verified, neutral holding mechanism.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── SECURITY LOGIC ── */}
        <section className="border-t border-[var(--line)]" aria-label="Security logic">
          <div className="grid lg:grid-cols-2">
            <div className="px-6 md:px-12 py-24 md:py-32 border-r border-[var(--line)]">
              <div className="relative">
                <span className="font-display text-[clamp(80px,12vw,160px)] leading-none text-[var(--line)] absolute -top-12 left-0 select-none">
                  01
                </span>
                <div className="relative z-10 pt-16">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Security Logic</span>
                  <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-6 mb-10">
                    The case for neutral holding.
                  </h2>
                  <div className="space-y-6 font-body text-[14px] leading-relaxed text-[var(--ink-60)]">
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
            </div>

            <div className="px-6 md:px-12 py-24 md:py-32 bg-[var(--ink)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/20">— Institutional Neutrality</span>
                <blockquote className="font-display italic text-[clamp(22px,3vw,36px)] leading-tight text-white/80 border-l-2 border-[var(--jade)] pl-8 mt-8">
                  "GGE has no financial interest in either party. Our role
                  is strictly to verify, hold, and release — ensuring fair
                  outcomes for every participant."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROTECTIONS ── */}
        <section className="border-t border-[var(--line)] bg-[var(--paper-2)]" aria-label="Protections">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader label="02 Risk Mitigation" title="Six layers of protection." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)]">
              {PROTECTIONS.map((protection, i) => (
                <motion.div
                  key={protection.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper-2)] px-8 py-12"
                >
                  <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6 block">{protection.id}</span>
                  <h3 className="font-bold text-[15px] tracking-tight text-[var(--ink)] mb-4">{protection.title}</h3>
                  <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)]">{protection.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className="border-t border-[var(--line)] bg-[var(--paper)]" aria-label="Workflow">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader label="03 Workflow" title="The escrow process." />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--line)]">
              {WORKFLOW_STEPS.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper)] px-8 py-12 relative"
                >
                  <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6 block">{step.id}</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--jade)] flex items-center justify-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-2 h-2 rounded-full bg-[var(--jade)]"
                    />
                  </div>
                  <h3 className="font-bold text-[15px] tracking-tight text-[var(--ink)] mb-4">{step.title}</h3>
                  <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--ink)] px-6 md:px-12 py-32" aria-label="Call to action">
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.9] tracking-tight text-white/90">
                Trade with
                <br />
                <span className="text-[var(--jade)]">confidence.</span>
              </h2>
            </motion.div>
            <Link
              href="/contact"
              className="px-12 py-6 bg-[var(--jade)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-[var(--ink)] transition-all duration-500"
            >
              Start an Escrow-Protected Trade
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}