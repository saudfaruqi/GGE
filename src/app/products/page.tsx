// app/products/page.tsx — Global Green Exports · Products

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Global Green Exports' full range of GACP-certified medicinal cannabis flower, extracts, isolates, terpenes, and hemp products.",
};

const cannabinoids = [
  { name: "CBD (Cannabidiol)", use: "Therapeutic, anti-inflammatory, anxiety", purity: "99%" },
  { name: "THC (Tetrahydrocannabinol)", use: "Pain management, appetite, sleep", purity: "95%+" },
  { name: "CBG (Cannabigerol)", use: "Neuroprotective, antibacterial", purity: "98%" },
  { name: "CBN (Cannabinol)", use: "Sleep disorders, sedation", purity: "97%" },
  { name: "CBC (Cannabichromene)", use: "Anti-inflammatory, antidepressant", purity: "96%" },
  { name: "CBDV (Cannabidivarin)", use: "Neurological conditions, epilepsy", purity: "95%" },
  { name: "THCV (Tetrahydrocannabivarin)", use: "Appetite suppression, diabetes", purity: "95%" },
  { name: "THCA (Tetrahydrocannabinolic Acid)", use: "Raw cannabis therapy, anti-nausea", purity: "94%" },
];

const strains = [
  { name: "Blue Dream", type: "Hybrid", notes: "Balanced cerebral stimulation & body relaxation" },
  { name: "Sour Diesel", type: "Sativa", notes: "Energizing, creativity-enhancing, fast-acting" },
  { name: "Jack Herer", type: "Sativa", notes: "Award-winning focus & clarity strain" },
  { name: "OG Kush", type: "Hybrid", notes: "Potent, classic effects with earthy profile" },
  { name: "Northern Lights", type: "Indica", notes: "Deep relaxation, sleep induction" },
  { name: "Haze", type: "Sativa", notes: "Pure sativa energy, uplifting daytime use" },
  { name: "White Widow", type: "Hybrid", notes: "Versatile balanced effects, aromatic" },
  { name: "Gorilla Glue #4", type: "Hybrid", notes: "Heavy-handed euphoria, high potency" },
];

const terpenes = [
  { name: "Myrcene", effect: "Relaxation, sleep", purity: "99%" },
  { name: "Limonene", effect: "Mood elevation, stress relief", purity: "99%" },
  { name: "Pinene", effect: "Alertness, memory retention", purity: "98%" },
  { name: "Linalool", effect: "Anti-anxiety, calming", purity: "98%" },
  { name: "Caryophyllene", effect: "Anti-inflammatory, analgesic", purity: "97%" },
  { name: "Terpinolene", effect: "Uplifting, antioxidant", purity: "97%" },
  { name: "Humulene", effect: "Appetite suppressant, anti-bacterial", purity: "96%" },
];

const categories = [
  {
    num: "01",
    title: "Premium Whole Flower",
    desc: "GACP-certified whole flower cannabis from Thailand's finest licensed indoor and greenhouse cultivators. Available in multiple strains with detailed cannabinoid and terpene profiles.",
    detail: "Available in 5g, 100g, 500g, and 1kg units. Vacuum-sealed, nitrogen-flushed packaging.",
    tags: ["Indoor", "Greenhouse", "Sun-Grown", "Multiple Strains"],
  },
  {
    num: "02",
    title: "Extracts & Distillates",
    desc: "High-quality full-spectrum, broad-spectrum, and isolated extracts. Our extraction processes preserve the complete cannabinoid and terpene profile at 80–99% purity levels.",
    detail: "Available as distillate, crude, or winterised oil. Custom formulation on request.",
    tags: ["Full-Spectrum", "Broad-Spectrum", "Isolate", "80–99% Purity"],
  },
  {
    num: "03",
    title: "Hemp-Derived Products",
    desc: "Compliant hemp-derived CBD, CBG, CBN, and blended wellness products for pharmaceutical, research, and consumer wellness applications.",
    detail: "Crystalline isolate, raw paste, and water-soluble formats available.",
    tags: ["CBD", "CBG", "CBN", "Wellness"],
  },
];

const strainTypeStyle: Record<string, React.CSSProperties> = {
  Sativa: { background: "rgba(0,0,0,0.04)", color: "#0a0a0a" },
  Indica: { background: "#0a0a0a", color: "#ffffff" },
  Hybrid: { background: "rgba(26,61,30,0.08)", color: "#1a3d1e" },
};

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

export default function ProductsPage() {
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
            padding: "0 40px",
            width: "100%",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <p style={{ ...TAG, justifyContent: "center", marginBottom: "20px" }}>
            Our Products
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
            Premium{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>GACP-Certified</em>
            <br />
            Cannabis &amp; Hemp Products
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
            Every product ships with full Certificate of Analysis, GACP documentation, and export
            compliance paperwork. We work exclusively with certified growers.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── CATEGORY CARDS ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "64px" }}>
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
              Three core <em style={{ color: "#1a3d1e" }}>product lines</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.08)",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  background: "#ffffff",
                  padding: "44px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Large number watermark */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    right: "20px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "6rem",
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {cat.num}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                      color: "#0a0a0a",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.48)",
                    fontWeight: 300,
                    marginBottom: "16px",
                  }}
                >
                  {cat.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.32)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  {cat.detail}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "rgba(0,0,0,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CANNABINOIDS TABLE ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div
            style={{ display: "grid", gap: "40px", marginBottom: "48px" }}
            className="lg:grid-cols-2"
          >
            <div>
              <p style={TAG}>
                <span style={LINE} />
                Cannabinoid Catalogue
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
                Pure isolated <em style={{ color: "#1a3d1e" }}>cannabinoids</em>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
                Available as isolates, distillates, or full-spectrum extracts. Custom formulations
                available on request for sufficient order volumes.
              </p>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0a0a0a" }}>
                  {["Cannabinoid", "Primary Applications", "Max Purity"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "16px 24px",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cannabinoids.map((c, i) => (
                  <tr
                    key={c.name}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 24px",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "#0a0a0a",
                      }}
                    >
                      {c.name}
                    </td>
                    <td
                      style={{
                        padding: "16px 24px",
                        fontSize: "0.83rem",
                        color: "rgba(0,0,0,0.45)",
                        fontWeight: 300,
                      }}
                    >
                      {c.use}
                    </td>
                    <td style={{ padding: "16px 24px" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "4px 12px",
                          background: "rgba(26,61,30,0.07)",
                          color: "#1a3d1e",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {c.purity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── STRAINS ── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <p style={TAG}>
              <span style={LINE} />
              Cannabis Strains
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
              GACP-certified <em style={{ color: "#1a3d1e" }}>strain selection</em>
            </h2>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
              Each strain grown under GACP conditions with full cannabinoid and terpene profiles
              available on request.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
            }}
          >
            {strains.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "#ffffff",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                    gap: "12px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {s.name}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      flexShrink: 0,
                      ...strainTypeStyle[s.type],
                    }}
                  >
                    {s.type}
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(0,0,0,0.4)", fontWeight: 300 }}>
                  {s.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TERPENES ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <p style={TAG}>
              <span style={LINE} />
              Terpenes &amp; Flavonoids
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
              Steam-distilled <em style={{ color: "#1a3d1e" }}>terpene collection</em>
            </h2>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>
              Premium terpene isolates at 90–99% purity for research, formulation, and product
              development.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
              marginBottom: "80px",
            }}
          >
            {terpenes.map((t, i) => (
              <div
                key={t.name}
                style={{
                  background: "#ffffff",
                  padding: "28px 24px",
                  borderLeft: i === 0 || i === 4 ? "none" : "1px solid #1a3d1e",
                  gridColumn: i < 4 ? "span 3" : "span 4",
                }}
              >
                <p
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    marginBottom: "6px",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(0,0,0,0.4)",
                    fontWeight: 300,
                    marginBottom: "10px",
                  }}
                >
                  {t.effect}
                </p>
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: "#3a8042",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Purity: {t.purity}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              background: "#0a0a0a",
              padding: "52px 48px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
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
                fontSize: "6rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.03)",
                position: "absolute",
                bottom: "-12px",
                right: "20px",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              CUSTOM
            </span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Custom Formulations Available
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.38)",
                  fontWeight: 300,
                  maxWidth: "520px",
                }}
              >
                We create custom cannabinoid, terpene, and flavonoid profiles to meet your exact
                research or medical requirements.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#ffffff",
                color: "#0a0a0a",
                padding: "15px 30px",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
              }}
            >
              Request Custom Quote
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}