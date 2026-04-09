// app/products/page.tsx  —  Global Green Exports · Products

import type { Metadata } from "next";
import { ArrowRight, Leaf } from "lucide-react";
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
    emoji: "🌸",
    num: "01",
    title: "Premium Whole Flower",
    desc: "GACP-certified whole flower cannabis from Thailand's finest licensed indoor and greenhouse cultivators. Available in multiple strains with detailed cannabinoid and terpene profiles.",
    tags: ["Indoor", "Greenhouse", "Sun-Grown", "Multiple Strains"],
  },
  {
    emoji: "⚗️",
    num: "02",
    title: "Extracts & Distillates",
    desc: "High-quality full-spectrum, broad-spectrum, and isolated extracts. Our extraction processes preserve the complete cannabinoid and terpene profile at 80–99% purity levels.",
    tags: ["Full-Spectrum", "Broad-Spectrum", "Isolate", "80–99% Purity"],
  },
  {
    emoji: "🌿",
    num: "03",
    title: "Hemp-Derived Products",
    desc: "Compliant hemp-derived CBD, CBG, CBN, and blended wellness products for pharmaceutical, research, and consumer wellness applications.",
    tags: ["CBD", "CBG", "CBN", "Wellness"],
  },
];

const strainTypeColor: Record<string, { bg: string; color: string }> = {
  Sativa: { bg: "rgba(201,168,76,0.12)", color: "var(--gold)" },
  Indica: { bg: "rgba(26,58,31,0.12)", color: "var(--green-dark)" },
  Hybrid: { bg: "rgba(74,140,85,0.12)", color: "var(--green-mid)" },
};

export default function ProductsPage() {
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
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "20px" }}>
            Our Products
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
            Premium{" "}
            <span style={{ color: "var(--gold)" }}>GACP-Certified</span>
            <br />Cannabis & Hemp Products
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "560px", margin: "0 auto" }}>
            Every product ships with full Certificate of Analysis, GACP documentation,
            and export compliance paperwork. We work exclusively with certified growers.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── CATEGORY CARDS ── */}
      <section className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-xl mb-16">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Product Categories
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              Three Core{" "}<span style={{ color: "var(--gold)" }}>Product Lines</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,31,0.1)" }}>
            {categories.map((cat) => (
              <div
                key={cat.title}
                style={{ background: "#fff", padding: "40px 32px", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(26,58,31,0.04)", position: "absolute", bottom: "-8px", right: "20px", lineHeight: 1 }}>
                  {cat.num}
                </div>
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{cat.emoji}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "14px" }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#777", fontWeight: 300, marginBottom: "20px" }}>
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((t) => (
                    <span key={t} style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", background: "var(--cream)", color: "var(--green-mid)", border: "1px solid rgba(26,58,31,0.15)", fontWeight: 500 }}>
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
      <section className="py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-6">
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Cannabinoid Catalogue
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
                Pure Isolated{" "}<span style={{ color: "var(--gold)" }}>Cannabinoids</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777", fontWeight: 300 }}>
                Available as isolates, distillates, or full-spectrum extracts. Custom formulations available on request.
              </p>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(26,58,31,0.12)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--green-dark)" }}>
                  <th style={{ textAlign: "left", padding: "16px 24px", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>
                    Cannabinoid
                  </th>
                  <th style={{ textAlign: "left", padding: "16px 24px", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>
                    Primary Applications
                  </th>
                  <th style={{ textAlign: "left", padding: "16px 24px", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>
                    Max Purity
                  </th>
                </tr>
              </thead>
              <tbody>
                {cannabinoids.map((c, i) => (
                  <tr
                    key={c.name}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "var(--cream)",
                      borderBottom: "1px solid rgba(26,58,31,0.07)",
                    }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "0.88rem", fontWeight: 600, color: "var(--green-dark)" }}>
                      {c.name}
                    </td>
                    <td style={{ padding: "16px 24px", fontSize: "0.83rem", color: "#777", fontWeight: 300 }}>
                      {c.use}
                    </td>
                    <td style={{ padding: "16px 24px" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", background: "rgba(74,140,85,0.1)", color: "var(--green-mid)", letterSpacing: "0.08em" }}>
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
      <section className="py-28" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-xl mb-12">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Cannabis Strains
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              GACP-Certified{" "}<span style={{ color: "var(--gold)" }}>Strain Selection</span>
            </h2>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777", fontWeight: 300, marginTop: "12px" }}>
              Each strain grown under GACP conditions with full cannabinoid and terpene profiles available on request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strains.map((s) => {
              const col = strainTypeColor[s.type];
              return (
                <div
                  key={s.name}
                  className="group"
                  style={{ background: "#fff", border: "1px solid rgba(26,58,31,0.1)", padding: "24px", transition: "box-shadow 0.2s, transform 0.2s" }}
                >
                  <div className="flex items-start justify-between mb-10">
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--green-dark)" }}>
                      {s.name}
                    </h4>
                    <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", background: col.bg, color: col.color }}>
                      {s.type}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "#888", fontWeight: 300 }}>
                    {s.notes}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TERPENES ── */}
      <section className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-xl mb-12">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Terpenes & Flavonoids
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.1 }}>
              Steam-Distilled{" "}<span style={{ color: "var(--gold)" }}>Terpene Collection</span>
            </h2>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777", fontWeight: 300, marginTop: "12px" }}>
              Premium terpene isolates steam-distilled at 90–99% purity for research, formulation, and product development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {terpenes.map((t) => (
              <div
                key={t.name}
                style={{ background: "var(--cream)", borderLeft: "3px solid var(--gold)", padding: "20px 24px" }}
              >
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "6px" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#888", fontWeight: 300, marginBottom: "10px" }}>
                  {t.effect}
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.08em" }}>
                  Purity: {t.purity}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              background: "var(--green-dark)",
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
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(201,168,76,0.05)", position: "absolute", bottom: "-15px", right: "20px", lineHeight: 1 }}>
              CUSTOM
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--gold-light)", marginBottom: "12px" }}>
                Custom Formulations Available
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", fontWeight: 300, maxWidth: "520px" }}>
                We create custom cannabinoid, terpene, and flavonoid profiles to meet your exact research
                or medical requirements. Our experienced team develops products that match your specifications.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 shrink-0"
              style={{ background: "var(--gold)", color: "var(--green-dark)", padding: "15px 30px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Request Custom Quote
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}