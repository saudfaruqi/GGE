// app/escrow/page.tsx — Global Green Exports · Escrow Services

import type { Metadata } from "next";
import { Shield, Lock, CheckCircle, ArrowRight, FileText, Banknote, Truck, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escrow Services",
  description:
    "Global Green Exports offers secure escrow-protected trade for international medicinal cannabis transactions — protecting both buyers and sellers.",
};

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Agreement Established",
    desc: "Buyer and seller agree on product specifications, quantity, pricing, and delivery terms. GGE documents all conditions in a binding escrow agreement.",
  },
  {
    num: "02",
    icon: Banknote,
    title: "Funds Deposited",
    desc: "Buyer deposits payment into the GGE escrow account. Funds are held securely — inaccessible to the seller until all conditions are verified.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Product Verified & Shipped",
    desc: "GGE verifies GACP certification, CoA documentation, and product quality before shipment is authorised. Logistics are coordinated end-to-end.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Delivery Confirmed",
    desc: "Upon confirmed delivery and buyer acceptance, GGE releases funds to the seller. All parties are fully protected throughout the process.",
  },
];

const protections = [
  {
    title: "Buyer Protection",
    desc: "Funds are never released until product is verified and delivered to specification.",
  },
  {
    title: "Seller Protection",
    desc: "Guaranteed payment upon successful, compliant delivery — no chargeback risk.",
  },
  {
    title: "Documentation Control",
    desc: "GGE manages all export documents, CoA, and compliance paperwork on behalf of both parties.",
  },
  {
    title: "Cross-Border Compliance",
    desc: "We verify destination country import requirements before any transaction is authorised.",
  },
  {
    title: "Dispute Resolution",
    desc: "Neutral third-party dispute resolution process if any condition of trade is contested.",
  },
  {
    title: "Secure Fund Holding",
    desc: "Escrow funds are held in dedicated, segregated accounts throughout the transaction lifecycle.",
  },
];

const TAG: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#3a8042",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "16px",
};
const LINE: React.CSSProperties = {
  width: "28px",
  height: "1px",
  background: "#3a8042",
  display: "inline-block",
  flexShrink: 0,
};

export default function EscrowPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0a0a0a",
          minHeight: "58vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
          paddingTop: "160px",
          paddingBottom: "80px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "1px",
            height: "120px",
            background: "linear-gradient(to bottom, rgba(58,128,66,0.4), transparent)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,31,15,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 20px",
            width: "100%",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid rgba(58,128,66,0.3)",
              padding: "6px 16px 6px 10px",
              marginBottom: "32px",
            }}
          >
            <Shield size={11} style={{ color: "#3a8042" }} />
            <span
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#3a8042",
                fontWeight: 500,
              }}
            >
              Secure Trade Services
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "24px",
            }}
          >
            Escrow-Protected{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>Cannabis Trade</em>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.38)",
              fontWeight: 300,
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            International cannabis trade carries inherent risk. Our escrow service eliminates that
            risk — protecting buyers and sellers with a verified, neutral holding and release
            mechanism.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── WHY ESCROW ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: "80px" }} className="lg:grid-cols-[1fr_1fr]">

            {/* Left: explanation */}
            <div>
              <p style={TAG}>
                <span style={LINE} />
                What We Offer
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  marginBottom: "28px",
                }}
              >
                Why escrow matters in{" "}
                <em style={{ color: "#1a3d1e" }}>cannabis export</em>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "rgba(0,0,0,0.45)",
                  fontWeight: 300,
                  marginBottom: "32px",
                }}
              >
                <p>
                  Cross-border medicinal cannabis transactions involve significant capital, complex
                  documentation, and strict regulatory requirements. Traditional payment terms
                  expose both parties to risk — buyers risk non-delivery or substandard product,
                  while sellers risk non-payment.
                </p>
                <p>
                  <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>
                    Global Green Exports acts as a trusted neutral intermediary.
                  </strong>{" "}
                  We hold buyer funds securely while independently verifying that all product,
                  documentation, and compliance conditions are met before authorising shipment and
                  releasing payment.
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
                  background: "#f5f5f5",
                  borderLeft: "3px solid #1a3d1e",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Lock size={14} strokeWidth={1.5} style={{ color: "#1a3d1e" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#0a0a0a" }}>
                    Fully Neutral &amp; Transparent
                  </span>
                </div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
                  GGE has no financial interest in either party beyond our service fee. Our role is
                  strictly to verify, hold, and release — ensuring fair outcomes for all
                  participants.
                </p>
              </div>
            </div>

            {/* Right: protection grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1px",
                background: "rgba(0,0,0,0.07)",
                alignContent: "start",
              }}
            >
              {protections.map((p, i) => (
                <div
                  key={p.title}
                  style={{
                    background: "#ffffff",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.7rem",
                      color: "rgba(0,0,0,0.15)",
                      marginBottom: "12px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      marginBottom: "8px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                      color: "rgba(0,0,0,0.42)",
                      fontWeight: 300,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 64px" }}>
            <p style={{ ...TAG, justifyContent: "center" }}>
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                marginBottom: "12px",
              }}
            >
              The escrow <em style={{ color: "#1a3d1e" }}>process</em>
            </h2>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
              A transparent, step-by-step process that protects every party from agreement to
              final delivery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
            }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  style={{
                    background: "#ffffff",
                    padding: "40px 32px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "#0a0a0a",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3.5rem",
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.05)",
                      lineHeight: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {step.num}
                  </p>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.2} color="#1a3d1e" />
                  </div>
                  <h3
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      marginBottom: "10px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.78,
                      color: "rgba(0,0,0,0.45)",
                      fontWeight: 300,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              background: "#0a0a0a",
              padding: "64px 56px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "#1a3d1e",
              }}
            />
            <span
              aria-hidden
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "9rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.025)",
                position: "absolute",
                bottom: "-20px",
                right: "20px",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              ESCROW
            </span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  marginBottom: "14px",
                }}
              >
                Ready to trade with confidence?
              </h2>
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 300,
                  maxWidth: "520px",
                }}
              >
                Contact our team to discuss your transaction, receive our escrow fee structure,
                and begin the verification process. We support one-off transactions and ongoing
                supply agreements.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#ffffff",
                  color: "#0a0a0a",
                  padding: "15px 28px",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Enquire About Escrow
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/wholesale"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 28px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
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