// app/about/page.tsx — Global Green Exports · About

import type { Metadata } from "next";
import { Shield, Leaf, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Global Green Exports — Thailand-based exporters of GACP-certified medicinal cannabis and hemp products.",
};

const certifications = [
  {
    label: "GACP Compliant",
    desc: "All growers meet Good Agricultural and Collection Practices standards — the global baseline for medical cannabis quality.",
  },
  {
    label: "Thai Export Licensed",
    desc: "Operating under Thai FDA and relevant governmental export frameworks with full phytosanitary documentation.",
  },
  {
    label: "3rd Party Lab Tested",
    desc: "Every product batch independently tested with full CoA documentation covering cannabinoids, terpenes, and residuals.",
  },
  {
    label: "Global Compliance",
    desc: "Products are prepared to meet destination country import requirements from the TGA to the German BfArM.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate transparently with all stakeholders — growers, buyers, and regulators.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Supporting sustainable farming practices that protect Thailand's agricultural heritage.",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Breaking down barriers to legal medicinal cannabis access worldwide.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Uncompromising quality standards at every stage of the supply chain.",
  },
];

const commitments = [
  "Only GACP-certified growers in our network",
  "Full transparency — CoA with every shipment",
  "Escrow services to protect every transaction",
  "Dedicated compliance team for each destination",
  "No compromise on product quality or regulatory adherence",
];

const TAG = {
  fontSize: "0.65rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#3a8042",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "16px",
};

const LINE = {
  width: "28px",
  height: "1px",
  background: "#3a8042",
  display: "inline-block",
  flexShrink: 0,
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0a0a0a",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
          paddingTop: "160px",
          paddingBottom: "80px",
        }}
      >
        {/* Grid */}
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
        {/* Green glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,31,15,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Vertical accent */}
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
          <p style={{ ...TAG, justifyContent: "center", marginBottom: "20px" }}>
            About Us
          </p>
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
            Rooted in Thailand.{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>Reaching the World.</em>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.38)",
              fontWeight: 300,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Global Green Exports was founded to bridge the gap between Thailand's world-class
            GACP-certified cannabis growers and the growing global demand for compliant
            medicinal cannabis and hemp products.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── STORY ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{ display: "grid", gap: "80px", alignItems: "start" }}
            className="lg:grid-cols-2"
          >
            {/* Left: story */}
            <div>
              <p style={TAG}>
                <span style={LINE} />
                Our Story
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  marginBottom: "36px",
                }}
              >
                Built on compliance,{" "}
                <em style={{ color: "#1a3d1e" }}>driven by quality</em>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                  color: "rgba(0,0,0,0.48)",
                  fontWeight: 300,
                }}
              >
                <p>
                  Global Green Exports operates from Thailand — a country that has emerged as one
                  of Asia's most progressive and well-regulated medicinal cannabis markets. We work
                  exclusively with{" "}
                  <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>
                    GACP-certified growers
                  </strong>{" "}
                  whose products meet the stringent requirements of international medical cannabis
                  standards.
                </p>
                <p>
                  Our mission is simple: to be the most trusted export partner for buyers seeking
                  compliant, premium-quality Thai medicinal cannabis and hemp derivatives. We handle
                  every element of the export process — from source verification and quality testing
                  to documentation, logistics, and escrow-protected payment settlement.
                </p>
                <p>
                  As Thailand's export licensing framework continues to mature, GGE is positioned
                  at the forefront — actively pursuing full export licensure and maintaining
                  relationships with the Thai FDA and relevant government bodies to ensure seamless,
                  lawful cross-border trade.
                </p>
                <p>
                  We believe that{" "}
                  <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>
                    access to medicinal cannabis
                  </strong>{" "}
                  should not be limited by geography. Our network connects compliant products with
                  patients, researchers, and medical professionals across Europe, Australasia, and
                  beyond.
                </p>
              </div>
            </div>

            {/* Right: commitment + stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Commitment card */}
              <div
                style={{
                  background: "#0a0a0a",
                  padding: "40px",
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
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Our Commitment
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {commitments.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 300,
                        lineHeight: 1.6,
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance note */}
              <div
                style={{
                  background: "#f5f5f5",
                  borderLeft: "3px solid #1a3d1e",
                  padding: "24px 28px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.5)",
                    fontWeight: 300,
                  }}
                >
                  <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>Based in Thailand,</strong>{" "}
                  we operate with deep knowledge of Thai cannabis regulation and have built direct
                  relationships with licensed cultivators across the country — ensuring product
                  authenticity, traceability, and consistent supply.
                </p>
              </div>

              {/* Stat blocks */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "rgba(0,0,0,0.08)",
                }}
              >
                {[
                  { val: "30+", label: "Countries Reached" },
                  { val: "100%", label: "GACP Certified" },
                  { val: "2024", label: "Established" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      textAlign: "center",
                      background: "#ffffff",
                      padding: "28px 16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 400,
                        color: "#0a0a0a",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {s.val}
                    </p>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(0,0,0,0.35)",
                        fontWeight: 400,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{ display: "grid", gap: "40px", marginBottom: "56px" }}
            className="lg:grid-cols-2"
          >
            <div>
              <p style={TAG}>
                <span style={LINE} />
                Certifications &amp; Standards
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
                Our quality <em style={{ color: "#1a3d1e" }}>framework</em>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.8,
                  color: "rgba(0,0,0,0.45)",
                  fontWeight: 300,
                }}
              >
                Every product that leaves our supply chain is backed by documentation,
                certification, and third-party verification. We set a high bar — and hold every
                grower partner to it.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.08)",
            }}
          >
            {certifications.map((c, i) => (
              <div
                key={c.label}
                style={{ background: "#ffffff", padding: "40px 32px" }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    color: "rgba(0,0,0,0.4)",
                    marginBottom: "16px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    background: "#0a0a0a",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    marginBottom: "12px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {c.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.45)",
                    fontWeight: 300,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "64px" }}>
            <p style={TAG}>
              <span style={LINE} />
              Our Values
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
              The principles behind{" "}
              <em style={{ color: "#1a3d1e" }}>Global Green Exports</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.08)",
            }}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  style={{
                    background: "#ffffff",
                    padding: "40px 32px",
                    borderTop: "2px solid #f5f5f5",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.2} color="#1a3d1e" />
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
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.75,
                      color: "rgba(0,0,0,0.45)",
                      fontWeight: 300,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              );
            })}
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
            padding: "0 20px",
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
            Ready to work together?
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
            Reach out to our team to discuss your sourcing needs and how Global
            Green Exports can serve you.
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
            Contact Us
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}