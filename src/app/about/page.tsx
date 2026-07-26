// app/about/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";


// ============================================================
// DATA
// ============================================================

const VERTICALS = [
  { name: "Cannabis", sub: "Medical · Pharmaceutical" },
  { name: "Hemp Derivatives", sub: "Wellness · B2B" },
  { name: "Housing Materials", sub: "Construction · Development" },
  { name: "Appliances", sub: "Commercial · Retail" },
  { name: "HVAC Equipment", sub: "Industrial · Commercial" },
];

const CERTIFICATIONS = [
  {
    id: "01",
    title: "GACP Compliant",
    description: "All cannabis and hemp growers in our network meet Good Agricultural and Collection Practices — the international baseline for medical-grade cultivation quality.",
  },
  {
    id: "02",
    title: "Thai Export Licensed",
    description: "We operate under Thai FDA and government-approved export frameworks. Every export begins with the correct authorisation in place.",
  },
  {
    id: "03",
    title: "Third-Party Lab Tested",
    description: "All cannabis and hemp products are independently verified by accredited laboratories. CoA issued with every batch, no exceptions.",
  },
  {
    id: "04",
    title: "Certificate of Origin",
    description: "Full traceability from source to destination. Certificates of origin prepared for every shipment across all five verticals.",
  },
  {
    id: "05",
    title: "Phytosanitary Certified",
    description: "Botanical and agricultural products ship with valid phytosanitary certificates — required for customs clearance in all destination markets.",
  },
  {
    id: "06",
    title: "Escrow-Settled",
    description: "Our trade protocol mandates escrow settlement for new clients — eliminating counterparty risk for both buyers and sellers.",
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

export default function AboutPage() {
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
        <section ref={heroRef} className="relative min-h-screen bg-[var(--ink)] overflow-hidden" aria-label="About us">
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
                One partner.
                <br />
                Five verticals.
                <br />
                <span className="text-[var(--jade)]">Global reach.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-body text-[15px] leading-relaxed text-white/50 max-w-lg mt-8"
              >
                Global Green Export is a Bangkok-based export house specialising in
                regulated goods — from GACP-certified cannabis and hemp derivatives
                to construction materials, appliances, and HVAC systems.
                Escrow-protected. Fully documented. Compliance-first.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="border-t border-[var(--line)]" aria-label="Our story">
          <div className="grid lg:grid-cols-2">
            <div className="px-6 md:px-12 py-24 md:py-32 border-r border-[var(--line)]">
              <div className="relative">
                <span className="font-display text-[clamp(80px,12vw,160px)] leading-none text-[var(--line)] absolute -top-12 left-0 select-none">
                  01
                </span>
                <div className="relative z-10 pt-16">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Our Story</span>
                  <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-6 mb-10">
                    Built for complex supply chains.
                  </h2>
                  <div className="space-y-6 font-body text-[14px] leading-relaxed text-[var(--ink-60)]">
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
            </div>

            <div className="px-6 md:px-12 py-24 md:py-32 bg-[var(--paper-2)]">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— How We Operate</span>
              <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-6 mb-10">
                Precision in every step.
              </h2>
              <ul className="space-y-6">
                {[
                  "Direct supplier relationships — no broker markups",
                  "Escrow on every new trade cycle",
                  "In-house compliance and documentation",
                  "Dedicated account manager, one point of contact",
                  "Fee-based custom sourcing on request",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 font-body text-[14px] text-[var(--ink-70)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--jade)] mt-1.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-[var(--line)] flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[var(--jade)]" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--ink-40)]">Bangkok · Thailand</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERTICALS ── */}
        <section className="border-t border-[var(--line)] bg-[var(--paper)]" aria-label="Our verticals">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader 
              label="Our Five Verticals" 
              title="Five verticals. One standard."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--line)]">
              {VERTICALS.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper)] px-8 py-12 hover:bg-[var(--ink)] group transition-colors duration-500"
                >
                  <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] group-hover:text-white/20 transition-colors mb-6 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-tight tracking-tight text-[var(--ink)] group-hover:text-white/90 transition-colors mb-3">
                    {v.name}
                  </h3>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--ink-30)] group-hover:text-white/30 transition-colors">
                    {v.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="border-t border-[var(--line)] bg-[var(--paper-2)]" aria-label="Certifications">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Standards & Certifications</span>
                <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
                  Compliance across
                  <br />
                  all verticals.
                </h2>
              </div>
              <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[280px]">
                Every product category has its own certification framework. We
                manage them all in-house.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)]">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--paper-2)] px-8 py-12"
                >
                  <span className="font-mono text-[11px] tracking-widest text-[var(--ink-20)] mb-6 block">
                    {cert.id}
                  </span>
                  <h3 className="font-bold text-[16px] tracking-tight text-[var(--ink)] mb-4">
                    {cert.title}
                  </h3>
                  <p className="font-body text-[13px] leading-relaxed text-[var(--ink-60)]">
                    {cert.description}
                  </p>
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
                Ready to
                <br />
                <span className="text-[var(--jade)]">source smarter?</span>
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-10 py-5 bg-[var(--jade)] text-[var(--paper)] font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-[var(--ink)] transition-all duration-500"
              >
                Start an Enquiry
              </Link>
              <Link
                href="/products"
                className="px-10 py-5 border border-white/20 text-white/70 font-mono text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}