// app/escrow/page.tsx  —  Global Green Exports · Escrow Services

import type { Metadata } from "next";
import { Shield, Lock, CheckCircle, ArrowRight, FileText, Banknote, RefreshCw } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escrow Services",
  description:
    "Global Green Exports offers secure escrow-protected trade for international medicinal cannabis transactions — protecting both buyers and sellers.",
};

const steps = [
  {
    num: "01",
    icon: <FileText size={20} />,
    title: "Agreement Established",
    desc: "Buyer and seller agree on product specifications, quantity, pricing, and delivery terms. GGE documents all conditions in a binding escrow agreement.",
  },
  {
    num: "02",
    icon: <Banknote size={20} />,
    title: "Funds Deposited",
    desc: "Buyer deposits payment into the GGE escrow account. Funds are held securely — inaccessible to the seller until all conditions are verified.",
  },
  {
    num: "03",
    icon: <Shield size={20} />,
    title: "Product Verified & Shipped",
    desc: "GGE verifies GACP certification, CoA documentation, and product quality before shipment is authorised. Logistics are coordinated end-to-end.",
  },
  {
    num: "04",
    icon: <CheckCircle size={20} />,
    title: "Delivery Confirmed",
    desc: "Upon confirmed delivery and buyer acceptance, GGE releases funds to the seller. All parties are fully protected throughout the process.",
  },
];

const protections = [
  { icon: "🛡️", title: "Buyer Protection", desc: "Funds are never released until product is verified and delivered to specification." },
  { icon: "💰", title: "Seller Protection", desc: "Guaranteed payment upon successful, compliant delivery — no chargeback risk." },
  { icon: "📋", title: "Documentation Control", desc: "GGE manages all export documents, CoA, and compliance paperwork on behalf of both parties." },
  { icon: "🌍", title: "Cross-Border Compliance", desc: "We verify destination country import requirements before any transaction is authorised." },
  { icon: "⚖️", title: "Dispute Resolution", desc: "Neutral third-party dispute resolution process if any condition of trade is contested." },
  { icon: "🔒", title: "Secure Fund Holding", desc: "Escrow funds are held in dedicated, segregated accounts throughout the transaction lifecycle." },
];

export default function EscrowPage() {
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
            <Shield size={12} style={{ color: "var(--gold-light)" }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-light)", fontWeight: 600 }}>
              Secure Trade Services
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
            Escrow-Protected{" "}
            <span style={{ color: "var(--gold)" }}>Cannabis Trade</span>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "580px", margin: "0 auto" }}>
            International cannabis trade carries inherent risk. Our escrow service eliminates that risk —
            protecting buyers and sellers with a verified, neutral holding and release mechanism.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── WHY ESCROW ── */}
      <section className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left: explanation */}
            <div className="lg:col-span-5">
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                What We Offer
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1, marginBottom: "28px" }}>
                Why Escrow Matters in{" "}
                <span style={{ color: "var(--gold)" }}>Cannabis Export</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.88rem", lineHeight: 1.8, color: "#777", fontWeight: 300 }}>
                <p>
                  Cross-border medicinal cannabis transactions involve significant capital, complex documentation,
                  and strict regulatory requirements. Traditional payment terms expose both parties to risk —
                  buyers risk non-delivery or substandard product, while sellers risk non-payment.
                </p>
                <p>
                  <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>
                    Global Green Exports acts as a trusted neutral intermediary.
                  </strong>{" "}
                  We hold buyer funds securely while independently verifying that all product,
                  documentation, and compliance conditions are met before authorising shipment
                  and releasing payment.
                </p>
                <p>
                  Our escrow service is particularly valuable for first-time trade relationships,
                  large-volume transactions, and buyers sourcing from Thailand for the first time —
                  where building trust is essential.
                </p>
              </div>

              {/* Neutral intermediary note */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(26,58,31,0.12)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "24px 28px",
                  marginTop: "28px",
                }}
              >
                <div className="flex items-center gap-3 mb-10">
                  <Lock size={16} style={{ color: "var(--gold)" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--green-dark)" }}>
                    Fully Neutral & Transparent
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "#777", fontWeight: 300 }}>
                  GGE has no financial interest in either party beyond our service fee. Our role is strictly
                  to verify, hold, and release — ensuring fair outcomes for all participants.
                </p>
              </div>
            </div>

            {/* Right: protection grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {protections.map((p) => (
                  <div
                    key={p.title}
                    className="group"
                    style={{ background: "#fff", border: "1px solid rgba(26,58,31,0.1)", padding: "28px", transition: "box-shadow 0.2s, transform 0.2s" }}
                  >
                    <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>{p.icon}</div>
                    <h4 style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "8px" }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "#888", fontWeight: 300 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "14px" }}>
              How It Works
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              The Escrow{" "}<span style={{ color: "var(--gold)" }}>Process</span>
            </h2>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777", fontWeight: 300, marginTop: "12px" }}>
              A transparent, step-by-step process that protects every party from agreement to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(26,58,31,0.08)" }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{ background: "var(--cream)", padding: "36px 28px", position: "relative" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: "rgba(26,58,31,0.07)",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--green-mid)",
                    marginBottom: "18px",
                  }}
                >
                  {step.icon}
                </div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "#777", fontWeight: 300 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div
            style={{
              background: "var(--green-dark)",
              padding: "60px 52px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "8rem",
                fontWeight: 700,
                color: "rgba(201,168,76,0.04)",
                position: "absolute",
                bottom: "-20px",
                right: "20px",
                lineHeight: 1,
              }}
            >
              ESCROW
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, color: "#fff", marginBottom: "14px" }}>
                Ready to Trade with Confidence?
              </h2>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "520px" }}>
                Contact our team to discuss your transaction, receive our escrow fee structure, and begin
                the verification process. We support one-off transactions and ongoing supply agreements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3"
                style={{ background: "var(--gold)", color: "var(--green-dark)", padding: "15px 28px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Enquire About Escrow
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/wholesale"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "15px 28px", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                View Wholesale Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}