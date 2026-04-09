// app/page.tsx  —  Global Green Exports · Home

"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Globe, Award, Truck, ArrowRight, Leaf, CheckCircle, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const highlights = [
  {
    icon: <Shield size={20} />,
    title: "Fully Licensed",
    desc: "Thai government export licences with full regulatory compliance at every stage of the supply chain.",
  },
  {
    icon: <Leaf size={20} />,
    title: "GACP Standards",
    desc: "We work exclusively with GACP-certified growers producing fully compliant medicinal cannabis products.",
  },
  {
    icon: <Globe size={20} />,
    title: "Global Reach",
    desc: "Secure, compliant delivery to any country where cannabis is legal for medical or research use.",
  },
  {
    icon: <Award size={20} />,
    title: "Quality Assured",
    desc: "Rigorous third-party testing and CoA documentation accompanies every shipment we dispatch.",
  },
  {
    icon: <Truck size={20} />,
    title: "End-to-End Logistics",
    desc: "From farm to destination — we handle documentation, phytosanitary, and customs coordination.",
  },
  {
    icon: <Shield size={20} />,
    title: "Escrow Protection",
    desc: "Trade with confidence via our dedicated escrow service, protecting both buyers and sellers globally.",
  },
];

const products = [
  {
    title: "Premium Flower",
    desc: "GACP-certified whole flower cannabis from Thailand's finest licensed growers. Full cannabinoid and terpene profiles available.",
    tags: ["Indoor", "Greenhouse", "Sun-Grown"],
    num: "01",
  },
  {
    title: "Extracts & Distillates",
    desc: "Full-spectrum, broad-spectrum, and isolated extracts preserving the complete cannabinoid profile at 80–99% purity.",
    tags: ["Full-Spectrum", "Broad-Spectrum", "Isolate"],
    num: "02",
  },
  {
    title: "Hemp Products",
    desc: "Compliant hemp-derived CBD, CBG, CBN products for wellness, research, and pharmaceutical applications.",
    tags: ["CBD", "CBG", "CBN"],
    num: "03",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0a1a0d 0%, #122318 50%, #0f1e13 100%)",
        }}
      >
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Large decorative numeral */}
        <div
          className="absolute right-0 top-0 pointer-events-none select-none leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(280px, 40vw, 480px)",
            color: "rgba(201,168,76,0.04)",
            lineHeight: 1,
            right: "-4vw",
            top: "5vh",
            fontWeight: 700,
          }}
        >
          GGX
        </div>

        {/* Gold diagonal line accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: "38%",
            width: "1px",
            height: "40vh",
            background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.35), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-8 pb-20 pt-44 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            {/* Left: main copy */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-3 mb-10"
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.5)",
                  borderBottom: "1px solid rgba(201,168,76,0.5)",
                  padding: "9px 0",
                }}
              >
                <span
                  className="w-6 h-px"
                  style={{ background: "var(--gold)" }}
                />
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Thailand's Premier Medicinal Cannabis Exporter
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3.2rem, 6.5vw, 5.5rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                Exporting{" "}
                <span
                  style={{
                    color: "var(--gold)",
                    fontStyle: "italic",
                  }}
                >
                  Premium
                </span>
                <br />
                Thai Cannabis
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)", fontStyle: "italic", fontWeight: 400 }}>
                  to the World
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "480px",
                  marginBottom: "2.5rem",
                  letterSpacing: "0.01em",
                }}
              >
                Global Green Exports connects GACP-certified Thai growers with
                international medical and research markets — with full
                compliance, quality assurance, and escrow-protected trade.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3"
                  style={{
                    background: "var(--gold)",
                    color: "var(--green-dark)",
                    padding: "14px 28px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Us Today
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "14px 28px",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  View Products
                </Link>
              </div>
            </div>

            {/* Right: badge card */}
            <div className="lg:col-span-5 hidden lg:flex justify-end">
              <div
                style={{
                  width: "320px",
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(8px)",
                  padding: "36px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                    marginBottom: "20px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  Compliance Summary
                </div>
                {[
                  { label: "GACP Certification", value: "Active" },
                  { label: "Thai Export Licence", value: "In Process" },
                  { label: "Third-Party Lab Testing", value: "Mandatory" },
                  { label: "Escrow Services", value: "Available" },
                  { label: "Global Shipping", value: "30+ Countries" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--gold)" }}
                      />
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--gold-light)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap gap-x-10 gap-y-2">
            {[
              "GACP Certified Growers Only",
              "Thai Export Licensed",
              "Worldwide Compliant Shipping",
              "Escrow-Protected Trade",
              "Full CoA & Lab Testing",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--gold)", opacity: 0.7 }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── WHY GGE ── */}
      <section className="py-32" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
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
                Why Global Green Exports
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                Your Trusted Partner in{" "}
                <em style={{ color: "var(--gold)", fontStyle: "normal" }}>
                  Compliant Cannabis Trade
                </em>
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 300,
                }}
              >
                We operate at the intersection of Thai regulatory excellence and global
                market access — giving buyers confidence and growers a premium export channel.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.12)" }}>
                {highlights.map((h, i) => (
                  <div
                    key={h.title}
                    className="group"
                    style={{
                      background: "var(--green-dark)",
                      padding: "32px",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1e4425")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--green-dark)")}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(201,168,76,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold)",
                        marginBottom: "20px",
                      }}
                    >
                      {h.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        marginBottom: "10px",
                      }}
                    >
                      {h.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.42)",
                        fontWeight: 300,
                      }}
                    >
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
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
                Our Product Range
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)",
                  fontWeight: 600,
                  color: "var(--green-dark)",
                  lineHeight: 1.1,
                }}
              >
                Premium Cannabis &{" "}
                <span style={{ color: "var(--gold)" }}>Hemp Products</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 group"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--green-dark)",
                fontWeight: 600,
                borderBottom: "1px solid var(--green-dark)",
                paddingBottom: "2px",
              }}
            >
              View All Products
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.title}
                className="group relative"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,58,31,0.1)",
                }}
              >
                {/* Top decoration */}
                <div
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, var(--gold), var(--green-mid))",
                  }}
                />
                <div
                  style={{
                    height: "200px",
                    background: "linear-gradient(145deg, var(--green-dark), #1e4425)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Large number */}
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "7rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.04)",
                      position: "absolute",
                      bottom: "-10px",
                      right: "20px",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </span>
                  <Leaf
                    size={40}
                    style={{ color: "rgba(201,168,76,0.3)", position: "relative", zIndex: 1 }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "16px",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 600,
                      padding: "5px 10px",
                      border: "1px solid rgba(201,168,76,0.3)",
                      background: "rgba(201,168,76,0.1)",
                    }}
                  >
                    GACP Certified
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "var(--green-dark)",
                      marginBottom: "12px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      lineHeight: 1.7,
                      color: "#6a6a6a",
                      fontWeight: 300,
                      marginBottom: "20px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          background: "var(--cream)",
                          color: "var(--green-mid)",
                          border: "1px solid rgba(26,58,31,0.15)",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2"
              style={{
                background: "var(--green-dark)",
                color: "white",
                padding: "14px 32px",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              View All Products
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: "var(--green-dark)", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "100%", label: "GACP-only network" },
              { val: "CoA", label: "With every shipment" },
              { val: "End-to-End", label: "Logistics managed" },
              { val: "Escrow", label: "Payment protection" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {item.val}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: "#0a1a0d" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-8 text-center relative">
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
            Ready to Source?
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Start Your Export Journey with{" "}
            <span style={{ color: "var(--gold)" }}>Global Green Exports</span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            Contact our team to discuss your medicinal cannabis requirements,
            explore wholesale pricing, or set up secure escrow-protected trade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              Get Started Today
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/wholesale"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.65)",
                padding: "16px 36px",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Wholesale Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}