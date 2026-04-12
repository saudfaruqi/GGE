"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, ShieldCheck, FlaskConical, Truck, FileText, Scale, Globe } from "lucide-react";
import Hero from "../components/Hero";

const pillars = [
  {
    id: "01",
    title: "GACP Cultivation",
    body: "Every gram originates from growers operating under Thailand's GACP framework. We audit suppliers directly — no intermediaries.",
  },
  {
    id: "02",
    title: "Export Licensing",
    body: "Operating under Thai government export authorisation with full phytosanitary and customs documentation prepared in-house.",
  },
  {
    id: "03",
    title: "Escrow Trade",
    body: "A dedicated escrow mechanism protects buyer and seller equally. Funds are only released upon verified delivery.",
  },
  {
    id: "04",
    title: "CoA Guarantee",
    body: "Independent third-party lab analysis accompanies every order. Cannabinoid profile, terpene analysis, and residual solvent testing.",
  },
];

const products = [
  {
    cat: "Whole Flower",
    desc: "Indoor and greenhouse-cultivated whole flower. Full terpene expression, consistent cannabinoid ratios, medical-grade presentation.",
    spec: ["THC variants", "CBD-dominant", "Balanced profiles"],
    detail: "Available in 5g, 100g, 500g, and 1kg units. Vacuum-sealed, nitrogen-flushed packaging.",
  },
  {
    cat: "Extracts",
    desc: "Full-spectrum, broad-spectrum, and isolated cannabinoid extracts at 80–99% purity. Suitable for pharmaceutical reformulation.",
    spec: ["Full-spectrum", "Broad-spectrum", "Single-molecule isolate"],
    detail: "Available as distillate, crude, or winterised oil. Custom formulation on request.",
  },
  {
    cat: "Hemp Derivatives",
    desc: "CBD, CBG, and CBN products for wellness, nutraceutical, and research applications. EU-compliant THC thresholds available.",
    spec: ["CBD", "CBG", "CBN"],
    detail: "Crystalline isolate, raw paste, and water-soluble formats available.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Enquiry",
    desc: "Submit your requirements — product type, volume, target market, and regulatory context. We respond within 48 hours.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Compliance Review",
    desc: "We assess your destination country's import regulations and confirm export feasibility under Thai law.",
    icon: Scale,
  },
  {
    step: "03",
    title: "Sample & CoA",
    desc: "Receive a representative sample alongside a full Certificate of Analysis from an accredited third-party laboratory.",
    icon: FlaskConical,
  },
  {
    step: "04",
    title: "Escrow & Order",
    desc: "A secure escrow arrangement is established. Funds are held by a neutral third party until delivery is verified.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Export & Logistics",
    desc: "Full export documentation prepared in-house. Phytosanitary certificates, customs declarations, and freight coordination handled end-to-end.",
    icon: Truck,
  },
  {
    step: "06",
    title: "Delivery & Release",
    desc: "Upon confirmed receipt and quality verification by the buyer, escrow funds are released. Documentation archive provided.",
    icon: Globe,
  },
];

const destinations = [
  "Germany", "Australia", "United Kingdom", "Switzerland",
  "Netherlands", "New Zealand", "Canada",
  "Czech Republic", "Denmark", "Portugal", "Poland",
];

const compliance = [
  {
    label: "GACP Certification",
    body: "All supply partners operate under Good Agricultural and Collection Practice standards — the baseline for medical cannabis quality globally.",
  },
  {
    label: "Thai FDA Export Licence",
    body: "We operate under authorisation from the Thai Food and Drug Administration. Every shipment is accompanied by official export permits.",
  },
  {
    label: "Phytosanitary Certificates",
    body: "Issued by the Thai Department of Agriculture. Required for legal import in most destination markets.",
  },
  {
    label: "Third-Party Lab Testing",
    body: "Independent CoA analysis for every batch. Cannabinoid and terpene profiles, heavy metals, pesticides, and residual solvents.",
  },
  {
    label: "Chain of Custody",
    body: "Documented provenance from cultivation site through to final delivery. Full audit trail available to buyers on request.",
  },
  {
    label: "Import Compliance Assistance",
    body: "Our team prepares destination-country documentation — DEA import permits, EMA filings, TGA applications — as part of the service.",
  },
];

const faqs = [
  {
    q: "Who can purchase from Global Green Exports?",
    a: "We supply licensed importers, pharmaceutical companies, research institutions, and government health agencies. All buyers must demonstrate valid import authorisation in their jurisdiction.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum orders vary by product. Whole flower starts at 1kg; extracts at 500g; hemp derivatives at 1kg. Contact us for custom volume arrangements.",
  },
  {
    q: "How long does a typical order take to deliver?",
    a: "From signed agreement to delivery, typical lead time is 4–8 weeks depending on export documentation and destination country import processing times.",
  },
  {
    q: "Is the escrow mechanism mandatory?",
    a: "For first-time buyers, yes. For established clients, we offer direct invoice terms after successful completion of two escrow-protected orders.",
  },
  {
    q: "Can you provide custom cannabinoid profiles?",
    a: "Yes, for extract and hemp derivative orders of sufficient volume. We work with growers to source or blend profiles to specification.",
  },
  {
    q: "What documentation is provided with each order?",
    a: "Every order includes a Certificate of Analysis, phytosanitary certificate, export permit, commercial invoice, packing list, and bill of lading.",
  },
];

const whyUs = [
  { label: "Direct grower relationships", sub: "No broker markups. We work with farms directly." },
  { label: "In-house documentation", sub: "Every export doc prepared by our compliance team." },
  { label: "Escrow on every new trade", sub: "Buyer and seller protected from day one." },
  { label: "Dedicated account manager", sub: "One point of contact from enquiry to delivery." },
  { label: "Batch traceability", sub: "Full chain of custody from field to freight." },
  { label: "Custom formulation support", sub: "Extract specifications tailored to your market." },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Hero/>


      {/* ─── INTRO STATEMENT ─── */}
      <section style={{ background: "#ffffff", padding: "80px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: "64px", alignItems: "center" }} className="lg:grid-cols-[1fr_1fr]">
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                }}
              >
                "Thailand is one of the first Asian nations to legalise medical
                cannabis export — and we are positioned at the centre of that
                supply chain."
              </p>
              <div style={{ width: "40px", height: "2px", background: "#0a0a0a", marginTop: "32px" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(0,0,0,0.5)", fontWeight: 300, marginBottom: "20px" }}>
                Since Thailand's landmark cannabis legislation, Global Green Exports has been building the infrastructure to move Thai cannabis into international medical markets — legally, safely, and reliably.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(0,0,0,0.5)", fontWeight: 300 }}>
                We are not a broker. We hold direct relationships with GACP-certified cultivation facilities, prepare all export documentation in-house, and operate an escrow-protected trading model that gives both buyers and sellers full protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLARS ─── */}
      <section style={{ background: "#0a0a0a", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
              How We Operate
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
              The infrastructure of{" "}
              <em style={{ color: "rgba(255,255,255,0.35)" }}>trustworthy trade</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {pillars.map((p, i) => (
              <div
                key={p.id}
                style={{
                  padding: "40px 32px",
                  borderRight: i < pillars.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.15)", fontStyle: "italic", marginBottom: "20px" }}>{p.id}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 400, color: "#ffffff", marginBottom: "14px", fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.8, color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div className="px-[20px] lg:px-[40px]" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
                Product Range
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                Cannabis & <em style={{ color: "#1a3d1e" }}>hemp products</em>
              </h2>
            </div>
            <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "#0a0a0a", borderBottom: "1px solid rgba(0,0,0,0.3)", paddingBottom: "2px" }}>
              All products <ArrowUpRight size={12} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.08)" }}>
            {products.map((p, i) => (
              <div key={p.cat} style={{ background: "#ffffff", padding: "44px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "#0a0a0a" }}>{p.cat}</h3>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(0,0,0,0.12)" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(0,0,0,0.5)", fontWeight: 300, marginBottom: "16px" }}>{p.desc}</p>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(0,0,0,0.32)", fontWeight: 300, marginBottom: "24px", fontStyle: "italic" }}>{p.detail}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.spec.map((s) => (
                    <span key={s} style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "4px 10px", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.4)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "72px" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
              How It Works
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                From first contact to <em style={{ color: "#1a3d1e" }}>final delivery</em>
              </h2>
              <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.4)", fontWeight: 300, maxWidth: "320px", lineHeight: 1.7 }}>
                A transparent, step-by-step process designed around your regulatory requirements.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} style={{ background: "#ffffff", padding: "40px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "2rem", fontWeight: 400, color: "rgba(0,0,0,0.06)", lineHeight: 1 }}>{p.step}</span>
                    <Icon size={18} strokeWidth={1.2} color="rgba(0,0,0,0.22)" />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "#0a0a0a", marginBottom: "12px", letterSpacing: "0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section style={{ background: "#0d1f0f", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "48px", alignItems: "start" }} className="lg:grid-cols-[1fr_1fr] lg:gap-[80px_40px]">
        <div>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
            Why Global Green Exports
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.015em", marginBottom: "24px" }}>
            Built for the demands of{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>regulated markets</em>
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(255,255,255,0.35)", fontWeight: 300, marginBottom: "32px" }}>
            Medical and pharmaceutical cannabis buyers operate under strict regulatory scrutiny. Every supplier they work with must meet the same standard. We are built from the ground up for that environment.
          </p>
          <Link
            href="/about"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "14px 28px", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase" }}
          >
            About Us <ArrowRight size={12} />
          </Link>
        </div>
        <div>
          {whyUs.map((w, i) => (
            <div
          key={w.label}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            padding: "20px 0",
            borderBottom: i < whyUs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
            >
          <div style={{ width: "20px", height: "20px", minWidth: "20px", border: "1px solid rgba(58,128,66,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
            <Check size={10} strokeWidth={2} color="#3a8042" />
          </div>
          <div>
            <p style={{ fontSize: "0.88rem", fontWeight: 400, color: "#ffffff", marginBottom: "4px" }}>{w.label}</p>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 300, lineHeight: 1.6 }}>{w.sub}</p>
          </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE ─── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
              Compliance Framework
            </p>
            <div style={{ display: "grid", gap: "24px" }} className="lg:grid-cols-[1fr_1fr]">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                Regulatory rigour at <em style={{ color: "#1a3d1e" }}>every stage</em>
              </h2>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(0,0,0,0.45)", fontWeight: 300, alignSelf: "end" }}>
                Our documentation and certification framework is designed to satisfy regulators in the most demanding markets globally — from the TGA in Australia to the German BfArM.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)" }}>
            {compliance.map((c) => (
              <div key={c.label} style={{ background: "#ffffff", padding: "36px 40px" }}>
                <div style={{ width: "32px", height: "1px", background: "#0a0a0a", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "0.88rem", fontWeight: 500, color: "#0a0a0a", marginBottom: "12px", letterSpacing: "0.01em" }}>{c.label}</h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESTINATIONS ─── */}
      <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
                Export Markets
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                30+ countries. Growing.
              </h2>
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", fontWeight: 300, maxWidth: "320px", lineHeight: 1.7 }}>
              We hold or are pursuing export authorisation for the following markets. Contact us to confirm eligibility for your jurisdiction.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
            {destinations.map((d) => (
              <div key={d} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                <MapPin size={10} strokeWidth={1.5} color="#3a8042" />
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontWeight: 300, letterSpacing: "0.04em" }}>{d}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", border: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", fontWeight: 300, fontStyle: "italic" }}>+ more on request</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STAT BAR ─── */}
      <section style={{ background: "#f5f5f5", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "56px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px" }} className="grid-cols-2 lg:grid-cols-5">
          {[
            { n: "100%", l: "GACP-only supply" },
            { n: "CoA", l: "Every batch, mandatory" },
            { n: "End-to-end", l: "Logistics & compliance" },
            { n: "Escrow", l: "Protected transactions" },
            { n: "48hr", l: "Enquiry response" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 400, color: "#0a0a0a", marginBottom: "6px", letterSpacing: "-0.01em" }}>{s.n}</p>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", fontWeight: 400 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
              Common Questions
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                Frequently asked
              </h2>
              <Link href="/faq" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "#0a0a0a", borderBottom: "1px solid rgba(0,0,0,0.3)", paddingBottom: "2px" }}>
                All FAQs <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
          <div style={{ display: "grid", gap: "1px", background: "rgba(0,0,0,0.07)" }} className="lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} style={{ background: "#ffffff", padding: "36px 40px" }}>
                <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "#0a0a0a", marginBottom: "14px", lineHeight: 1.5 }}>{f.q}</p>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.85, color: "rgba(0,0,0,0.45)", fontWeight: 300 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: "#0a0a0a", padding: "112px 0", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,31,15,0.7) 0%, transparent 70%)", pointerEvents: "none" }}
        />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "28px" }}>
            Ready to Source
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "24px" }}>
            Begin a conversation with{" "}
            <em style={{ color: "rgba(255,255,255,0.3)" }}>Global Green Exports</em>
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.3)", fontWeight: 300, marginBottom: "48px" }}>
            We work with medical distributors, pharmaceutical formulators, and licensed research institutions. Contact us to discuss pricing, compliance documentation, or escrow arrangements.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#ffffff", color: "#0a0a0a", padding: "17px 36px", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Get in Touch <ArrowRight size={12} />
            </Link>
            <Link
              href="/wholesale"
              style={{ display: "inline-flex", alignItems: "center", padding: "17px 36px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Wholesale Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}