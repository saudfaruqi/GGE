// app/wholesale/page.tsx — Global Green Exports · Wholesale

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
    title: "Whole Flower — Bulk",
    items: ["Indoor A-Grade", "Greenhouse Premium", "Outdoor/Sun-Grown", "Trimmed & Manicured", "Machine-Trimmed"],
  },
  {
    title: "Extracts & Oils",
    items: ["Full-Spectrum Oil", "Broad-Spectrum Distillate", "CBD Isolate Powder", "CBG Isolate", "Raw THCA Crystalline"],
  },
  {
    title: "Research-Grade",
    items: ["High-Purity Cannabinoid Isolates", "Certified Reference Standards", "Terpene Isolates (GC-grade)", "Custom Analytical Batches"],
  },
  {
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

export default function WholesalePage() {
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
            bottom: "-20%",
            left: "-10%",
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
            padding: "0 40px",
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
            <Package size={11} style={{ color: "#3a8042" }} />
            <span
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#3a8042",
                fontWeight: 500,
              }}
            >
              Wholesale Trading
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
            Wholesale{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>Cannabis &amp; Hemp</em>
            <br />
            Supply Solutions
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.38)",
              fontWeight: 300,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Serving licensed dispensaries, pharmaceutical importers, research institutions, and
            wellness brands with bulk GACP-certified medicinal cannabis and hemp products from
            Thailand.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── WHO WE SERVE ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div
            style={{ display: "grid", gap: "64px", alignItems: "center", marginBottom: "72px" }}
            className="lg:grid-cols-2"
          >
            <div>
              <p style={TAG}>
                <span style={LINE} />
                Who We Serve
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                Wholesale partners <em style={{ color: "#1a3d1e" }}>worldwide</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
                Our wholesale programme is designed for licensed, compliant buyers operating in
                jurisdictions where medicinal cannabis importation is legal. We verify all buyer
                credentials before any transaction is authorised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <p style={TAG}>
              <span style={LINE} />
              Product Categories
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              Available for <em style={{ color: "#1a3d1e" }}>wholesale purchase</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  background: "#ffffff",
                  padding: "36px 32px",
                  borderTop: "2px solid #0a0a0a",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.7rem",
                    color: "rgba(0,0,0,0.15)",
                    marginBottom: "8px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#0a0a0a",
                    marginBottom: "20px",
                  }}
                >
                  {cat.title}
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.82rem",
                        color: "rgba(0,0,0,0.45)",
                        fontWeight: 300,
                      }}
                    >
                      <span
                        style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          background: "#3a8042",
                          flexShrink: 0,
                        }}
                      />
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
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 64px" }}>
            <p
              style={{
                ...TAG,
                justifyContent: "center",
              }}
            >
              Wholesale Tiers
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                marginBottom: "14px",
              }}
            >
              Pricing &amp; <em style={{ color: "#1a3d1e" }}>order tiers</em>
            </h2>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
              Competitive pricing structured around order volume. Contact us for exact pricing on
              your required products.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.08)",
            }}
          >
            {tiers.map((t) => (
              <div
                key={t.tier}
                style={{
                  background: t.highlight ? "#0a0a0a" : "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    height: t.highlight ? "0" : "2px",
                    background: "rgba(0,0,0,0.06)",
                  }}
                />
                {t.highlight && (
                  <div
                    style={{
                      background: "#ffffff",
                      textAlign: "center",
                      padding: "8px",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                    }}
                  >
                    {t.label}
                  </div>
                )}

                <div style={{ padding: "40px", flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: t.highlight ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
                      marginBottom: "8px",
                    }}
                  >
                    {t.tier}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.6rem",
                      fontWeight: 400,
                      color: t.highlight ? "#ffffff" : "#0a0a0a",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    From {t.minOrder}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: t.highlight ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)",
                      fontWeight: 300,
                      marginBottom: "32px",
                    }}
                  >
                    minimum order quantity
                  </p>

                  <ul
                    style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}
                  >
                    {t.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          fontSize: "0.83rem",
                          color: t.highlight ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                          fontWeight: 300,
                        }}
                      >
                        <CheckCircle
                          size={12}
                          style={{ color: t.highlight ? "#3a8042" : "#1a3d1e", marginTop: "3px", flexShrink: 0 }}
                        />
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
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      background: t.highlight ? "#ffffff" : "transparent",
                      color: t.highlight ? "#0a0a0a" : "#0a0a0a",
                      border: t.highlight ? "none" : "1px solid rgba(0,0,0,0.2)",
                      textDecoration: "none",
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

      {/* ── REQUIREMENTS + LOGISTICS ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gap: "1px", background: "rgba(0,0,0,0.07)" }} className="md:grid-cols-2">

            {/* Requirements */}
            <div style={{ background: "#ffffff", padding: "48px" }}>
              <p style={TAG}>
                <span style={LINE} />
                Buyer Requirements
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                Who can purchase wholesale?
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  color: "rgba(0,0,0,0.45)",
                  fontWeight: 300,
                  marginBottom: "28px",
                }}
              >
                To maintain regulatory compliance and the integrity of our supply chain, all
                wholesale buyers must meet these minimum requirements:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {requirements.map((r) => (
                  <li
                    key={r}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      fontSize: "0.85rem",
                      color: "rgba(0,0,0,0.5)",
                      fontWeight: 300,
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        border: "1px solid rgba(58,128,66,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <CheckCircle size={10} style={{ color: "#3a8042" }} />
                    </div>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics */}
            <div
              style={{
                background: "#0a0a0a",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
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
              <Truck
                size={24}
                strokeWidth={1}
                style={{ color: "rgba(255,255,255,0.2)", marginBottom: "24px" }}
              />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                Logistics &amp; Delivery
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.38)",
                  fontWeight: 300,
                  marginBottom: "28px",
                }}
              >
                We coordinate end-to-end logistics including packaging, cold-chain where required,
                phytosanitary certificates, customs documentation, and last-mile delivery
                arrangements.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {logistics.map((l) => (
                  <li
                    key={l}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.38)",
                      fontWeight: 300,
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#3a8042",
                        flexShrink: 0,
                      }}
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "96px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "0 40px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Start your wholesale enquiry
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.32)",
              fontWeight: 300,
              marginBottom: "40px",
            }}
          >
            Send us your product requirements and we'll respond with availability, pricing, and
            next steps.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              color: "#0a0a0a",
              padding: "16px 36px",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Contact Our Wholesale Team
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}