// app/about/page.tsx  —  Global Green Exports · About

import type { Metadata } from "next";
import { Shield, Leaf, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Global Green Exports — Thailand-based exporters of GACP-certified medicinal cannabis and hemp products.",
};

const certifications = [
  { icon: "🌿", label: "GACP Compliant", desc: "All growers meet Good Agricultural and Collection Practices standards" },
  { icon: "📋", label: "Thai Export Licensed", desc: "Operating under Thai FDA and relevant governmental export frameworks" },
  { icon: "🔬", label: "3rd Party Lab Tested", desc: "Every product batch independently tested with full CoA documentation" },
  { icon: "🌍", label: "Global Compliance", desc: "Products meet destination country import requirements" },
];

const values = [
  { icon: <Shield size={20} />, title: "Integrity", desc: "We operate transparently with all stakeholders — growers, buyers, and regulators." },
  { icon: <Leaf size={20} />, title: "Sustainability", desc: "Supporting sustainable farming practices that protect Thailand's agricultural heritage." },
  { icon: <Globe size={20} />, title: "Global Access", desc: "Breaking down barriers to legal medicinal cannabis access worldwide." },
  { icon: <Award size={20} />, title: "Excellence", desc: "Uncompromising quality standards at every stage of the supply chain." },
];

const commitments = [
  "Only GACP-certified growers in our network",
  "Full transparency — CoA with every shipment",
  "Escrow services to protect every transaction",
  "Dedicated compliance team for each destination",
  "No compromise on product quality or regulatory adherence",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a1a0d 0%, #122318 50%, #0f1e13 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical accent line */}
        <div
          className="absolute left-1/2 top-0 pointer-events-none"
          style={{
            width: "1px",
            height: "120px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)",
          }}
        />

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            About Us
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
            Rooted in Thailand.{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Reaching the World.
            </em>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
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

      {/* Gold divider */}
      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── STORY ── */}
      <section className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* Left col: story */}
            <div className="lg:col-span-6">
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Our Story
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                  fontWeight: 600,
                  color: "var(--green-dark)",
                  lineHeight: 1.1,
                  marginBottom: "32px",
                }}
              >
                Built on Compliance,{" "}
                <span style={{ color: "var(--gold)" }}>Driven by Quality</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "#666",
                  fontWeight: 300,
                }}
              >
                <p>
                  Global Green Exports (GGE) operates from Thailand — a country that has emerged
                  as one of Asia's most progressive and well-regulated medicinal cannabis markets.
                  We work exclusively with{" "}
                  <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>
                    GACP-certified growers
                  </strong>{" "}
                  whose products meet the stringent requirements of international medical cannabis standards.
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
                  <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>
                    access to medicinal cannabis
                  </strong>{" "}
                  should not be limited by geography. Our network connects compliant products with
                  patients, researchers, and medical professionals across Europe, Australasia, and beyond.
                </p>
              </div>
            </div>

            {/* Right col: commitment + note */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Commitment card */}
              <div
                style={{
                  background: "var(--green-dark)",
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
                    background: "var(--gold)",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "var(--gold-light)",
                    marginBottom: "24px",
                  }}
                >
                  Our Commitment
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {commitments.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle
                        size={14}
                        style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance note */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,58,31,0.12)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "24px 28px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: "#666",
                    fontWeight: 300,
                  }}
                >
                  <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>
                    Based in Thailand,
                  </strong>{" "}
                  we operate with deep knowledge of Thai cannabis regulation and have built
                  direct relationships with licensed cultivators across the country — ensuring
                  product authenticity, traceability, and consistent supply.
                </p>
              </div>

              {/* Country stat blocks */}
              <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(26,58,31,0.12)" }}>
                {[
                  { val: "30+", label: "Countries Reached" },
                  { val: "100%", label: "GACP Certified" },
                  { val: "2024", label: "Established" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center"
                    style={{ background: "var(--cream)", padding: "24px 16px" }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--green-dark)",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#888",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Certifications & Standards
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                  fontWeight: 600,
                  color: "var(--green-dark)",
                  lineHeight: 1.1,
                }}
              >
                Our Quality{" "}
                <span style={{ color: "var(--gold)" }}>Framework</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "#777",
                  fontWeight: 300,
                }}
              >
                Every product that leaves our supply chain is backed by documentation,
                certification, and third-party verification. We set a high bar — and hold
                every grower partner to it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(26,58,31,0.1)" }}>
            {certifications.map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--cream)",
                  padding: "36px 28px",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{c.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--green-dark)",
                    marginBottom: "10px",
                  }}
                >
                  {c.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                    color: "#777",
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
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-xl mb-16">
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Our Values
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 600,
                color: "var(--green-dark)",
                lineHeight: 1.1,
              }}
            >
              The Principles Behind{" "}
              <span style={{ color: "var(--gold)" }}>Global Green Exports</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,58,31,0.1)",
                  borderTop: "2px solid var(--gold)",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--green-mid)",
                    marginBottom: "16px",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--green-dark)",
                    marginBottom: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                    color: "#777",
                    fontWeight: 300,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--green-dark)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to Work Together?
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              fontWeight: 300,
              marginBottom: "36px",
            }}
          >
            Reach out to our team to discuss your sourcing needs and how
            Global Green Exports can serve you.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3"
            style={{
              background: "var(--gold)",
              color: "var(--green-dark)",
              padding: "16px 36px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Contact Us
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}