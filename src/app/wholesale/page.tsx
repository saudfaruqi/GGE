// app/wholesale/page.tsx  —  Global Green Exports · Wholesale

import type { Metadata } from "next";
import { Package, CheckCircle, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Global Green Exports wholesale cannabis and hemp products for dispensaries, pharmaceutical companies, and licensed importers worldwide.",
};

const tiers = [
  {
    tier: "Standard",
    minOrder: "5 kg",
    label: "Entry Wholesale",
    features: [
      "Minimum 5 kg per SKU",
      "Standard lead time 4–6 weeks",
      "CoA included with every batch",
      "EXW Bangkok pricing",
      "Email support",
    ],
    highlight: false,
  },
  {
    tier: "Commercial",
    minOrder: "25 kg",
    label: "Most Popular",
    features: [
      "Minimum 25 kg per SKU",
      "Priority processing 2–4 weeks",
      "Full documentation package",
      "CIF pricing available",
      "Dedicated account manager",
      "Volume discount pricing",
    ],
    highlight: true,
  },
  {
    tier: "Enterprise",
    minOrder: "100 kg+",
    label: "Bulk Supply",
    features: [
      "100 kg+ per order",
      "Custom lead times negotiated",
      "White-label packaging available",
      "Custom formulations",
      "Quarterly supply contracts",
      "C-suite relationship management",
      "Escrow payment standard",
    ],
    highlight: false,
  },
];

const categories = [
  {
    emoji: "🌸",
    title: "Whole Flower – Bulk",
    items: ["Indoor A-Grade", "Greenhouse Premium", "Outdoor/Sun-Grown", "Trimmed & Manicured", "Machine-Trimmed"],
  },
  {
    emoji: "⚗️",
    title: "Extracts & Oils",
    items: ["Full-Spectrum Oil", "Broad-Spectrum Distillate", "CBD Isolate Powder", "CBG Isolate", "Raw THCA Crystalline"],
  },
  {
    emoji: "🧪",
    title: "Research-Grade",
    items: ["High-Purity Cannabinoid Isolates", "Certified Reference Standards", "Terpene Isolates (GC-grade)", "Custom Analytical Batches"],
  },
  {
    emoji: "🌿",
    title: "Hemp Products",
    items: ["Hemp Biomass", "CBD Hemp Flower", "Hemp Seed Oil", "CBG Hemp", "Hemp Extract Powder"],
  },
];


const requirements = [
  "Valid import licence for destination country",
  "Proof of business registration",
  "Intended use declaration",
  "Compliance with destination country cannabis laws",
];

const logistics = [
  "EXW, FOB, CIF available",
  "Air freight & sea freight",
  "GDP-compliant packaging",
  "Full tracking & insurance",
];

export default function WholesalePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1a0d 0%, #122318 50%, #0f1e13 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "8px 18px", background: "rgba(201,168,76,0.08)" }}
          >
            <Package size={12} style={{ color: "var(--gold-light)" }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-light)", fontWeight: 600 }}>
              Wholesale Trading
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Wholesale{" "}
            <span style={{ color: "var(--gold)" }}>Cannabis & Hemp</span>
            <br />Supply Solutions
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "560px", margin: "0 auto" }}>
            Serving licensed dispensaries, pharmaceutical importers, research institutions, and
            wellness brands with bulk GACP-certified medicinal cannabis and hemp products from Thailand.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── WHO WE SERVE ── */}
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Who We Serve
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
                Wholesale Partners{" "}<span style={{ color: "var(--gold)" }}>Worldwide</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "#777", fontWeight: 300 }}>
                Our wholesale programme is designed for licensed, compliant buyers operating
                in jurisdictions where medicinal cannabis importation is legal. We verify
                all buyer credentials before any transaction is authorised.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-xl mb-12">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Product Categories
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              Available for{" "}<span style={{ color: "var(--gold)" }}>Wholesale Purchase</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                style={{ background: "var(--cream)", borderTop: "2px solid var(--gold)", padding: "28px" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{cat.emoji}</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "14px" }}>
                  {cat.title}
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#777", fontWeight: 300 }}>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "14px" }}>
              Wholesale Tiers
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              Pricing &{" "}<span style={{ color: "var(--gold)" }}>Order Tiers</span>
            </h2>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777", fontWeight: 300, marginTop: "12px" }}>
              Competitive pricing structured around order volume. Contact us for exact pricing on your required products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.tier}
                style={{
                  background: t.highlight ? "var(--green-dark)" : "#fff",
                  border: t.highlight ? "2px solid var(--gold)" : "1px solid rgba(26,58,31,0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {t.highlight && (
                  <div style={{ background: "var(--gold)", textAlign: "center", padding: "8px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--green-dark)" }}>
                    {t.label}
                  </div>
                )}
                {!t.highlight && (
                  <div style={{ height: "2px", background: "rgba(26,58,31,0.1)" }} />
                )}
                <div style={{ padding: "36px" }}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: t.highlight ? "var(--gold-light)" : "var(--gold)", marginBottom: "6px" }}>
                    {t.tier}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 700, color: t.highlight ? "#fff" : "var(--green-dark)", lineHeight: 1, marginBottom: "4px" }}>
                    From {t.minOrder}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: t.highlight ? "rgba(255,255,255,0.4)" : "#999", fontWeight: 300, marginBottom: "28px" }}>
                    minimum order quantity
                  </div>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3" style={{ fontSize: "0.83rem", color: t.highlight ? "rgba(255,255,255,0.7)" : "#666", fontWeight: 300 }}>
                        <CheckCircle size={13} style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "13px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      background: t.highlight ? "var(--gold)" : "transparent",
                      color: t.highlight ? "var(--green-dark)" : "var(--green-dark)",
                      border: t.highlight ? "none" : "1px solid rgba(26,58,31,0.25)",
                    }}
                  >
                    Get Pricing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYER REQUIREMENTS + LOGISTICS ── */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div style={{ background: "var(--cream)", padding: "40px" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="w-6 h-px" style={{ background: "var(--gold)" }} />
                Buyer Requirements
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1, marginBottom: "16px" }}>
                Who Can Purchase Wholesale?
              </h3>
              <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "#777", fontWeight: 300, marginBottom: "24px" }}>
                To maintain regulatory compliance and the integrity of our supply chain, all wholesale buyers must meet these minimum requirements:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3" style={{ fontSize: "0.83rem", color: "#666", fontWeight: 300 }}>
                    <CheckCircle size={14} style={{ color: "var(--green-mid)", marginTop: "2px", flexShrink: 0 }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics */}
            <div
              style={{
                background: "var(--green-dark)",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
              <Truck size={28} style={{ color: "var(--gold)", opacity: 0.7, marginBottom: "20px" }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 600, color: "#fff", lineHeight: 1.1, marginBottom: "16px" }}>
                Logistics & Delivery
              </h3>
              <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", fontWeight: 300, marginBottom: "24px" }}>
                We coordinate end-to-end logistics including packaging, cold-chain where required,
                phytosanitary certificates, customs documentation, and last-mile delivery arrangements.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {logistics.map((l) => (
                  <li key={l} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#fff", marginBottom: "14px" }}>
            Start Your Wholesale Enquiry
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: "32px" }}>
            Send us your product requirements and we'll respond with availability, pricing, and next steps.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3"
            style={{ background: "var(--gold)", color: "var(--green-dark)", padding: "16px 36px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Contact Our Wholesale Team
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}