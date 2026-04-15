"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, ShieldCheck, FlaskConical, Truck, FileText, Scale, Globe, Zap, Wind, HomeIcon } from "lucide-react";
import Hero from "../components/Hero";

/* ─── DATA ─── */

const pillars = [
  {
    id: "01",
    title: "Thailand-Origin Supply",
    body: "Direct relationships with vetted Thai manufacturers and GACP-certified cultivation facilities. No brokers, no markups, no intermediaries.",
  },
  {
    id: "02",
    title: "Export Licensing",
    body: "Operating under Thai government export authorisation with full phytosanitary, customs, and certificates of origin prepared in-house.",
  },
  {
    id: "03",
    title: "Escrow Trade",
    body: "A dedicated escrow mechanism protects buyer and seller equally. Funds are only released upon verified delivery — on every transaction.",
  },
  {
    id: "04",
    title: "Fee-Based Sourcing",
    body: "Can't find what you need? We source to your specification for a transparent, pre-agreed service fee. No surprises.",
  },
];

const verticals = [
  {
    id: "01",
    title: "Cannabis",
    sub: "Medical-grade Thai cannabis",
    icon: FlaskConical,
    desc: "GACP-certified whole flower, full-spectrum and isolated extracts at 80–99% purity. Every batch accompanied by independent third-party CoA — cannabinoid profile, terpene analysis, heavy metals, residual solvents.",
    specs: ["Whole Flower", "Full-Spectrum Extract", "Broad-Spectrum", "Single-Molecule Isolate", "CBD-Dominant", "THC Variants"],
    detail: "Buyers must hold valid import authorisation in their jurisdiction. We assist with DEA, TGA, and EMA documentation as part of the service.",
    href: "/products",
  },
  {
    id: "02",
    title: "Hemp Derivatives",
    sub: "Colorado & Thai-origin hemp",
    icon: Globe,
    desc: "CBD, CBG, and CBN products for wellness, nutraceutical, and research applications. Colorado-compliant processing available for US-bound product. EU-compliant THC thresholds confirmed by CoA.",
    specs: ["CBD Isolate", "CBG", "CBN", "Water-Soluble", "Raw Paste", "Crystalline"],
    detail: "Colorado hemp processing partnerships enable domestic US fulfilment alongside Thai-origin imports — giving international buyers supply chain optionality.",
    href: "/products",
  },
  {
    id: "03",
    title: "Housing Materials",
    sub: "Structural & finishing goods",
    icon: HomeIcon,
    desc: "Structural materials, prefabricated components, and finishing goods sourced from certified Thai manufacturers. Suitable for residential and commercial construction. Full certificates of origin and quality inspection documentation.",
    specs: ["Structural Steel", "Prefab Components", "Flooring", "Cladding", "Finishing Materials", "Hardware"],
    detail: "Sourcing is done to client specification. We assess manufacturer compliance, arrange quality inspection, and coordinate freight and import documentation.",
    href: "/products",
  },
  {
    id: "04",
    title: "Appliances",
    sub: "White goods & commercial equipment",
    icon: Zap,
    desc: "White goods, commercial kitchen equipment, laundry systems, and consumer appliances from vetted Thai manufacturers. We verify electrical standards, safety certification, and voltage compatibility for your destination market before shipment.",
    specs: ["White Goods", "Commercial Kitchen", "Laundry Systems", "Consumer Electronics", "Safety Certified"],
    detail: "Destination compliance checked per order — CE marking for Europe, UL/ETL for North America, SAA for Australia. Container-load pricing available.",
    href: "/products",
  },
  {
    id: "05",
    title: "HVAC Equipment",
    sub: "Systems, components & parts",
    icon: Wind,
    desc: "Heating, ventilation, and air conditioning systems, components, and parts from Thai manufacturers. Suitable for commercial, industrial, and residential applications. Climate-appropriate specifications for all destination markets.",
    specs: ["Split Systems", "Ducted Systems", "Commercial Units", "Components", "Controls & Parts"],
    detail: "Thai manufacturers produce HVAC systems designed for tropical climates — highly efficient in warm-weather markets. Cold-climate specifications and replacement parts sourced on request.",
    href: "/products",
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
    title: "Sample & Documentation",
    desc: "Where applicable, receive a representative sample alongside full documentation — CoA, certificate of origin, quality inspection.",
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
    desc: "Upon confirmed receipt and quality verification by the buyer, escrow funds are released. Full documentation archive provided.",
    icon: Globe,
  },
];

const destinations = [
  "Germany", "Australia", "United Kingdom", "Switzerland",
  "Netherlands", "New Zealand", "Canada",
  "Czech Republic", "Denmark", "Portugal", "Poland",
  "United States",
];

const compliance = [
  {
    label: "GACP Certification",
    body: "All cannabis supply partners operate under Good Agricultural and Collection Practice standards — the global baseline for medical-grade product.",
  },
  {
    label: "Thai FDA Export Licence",
    body: "We operate under authorisation from the Thai Food and Drug Administration. Every cannabis shipment is accompanied by official export permits.",
  },
  {
    label: "Phytosanitary Certificates",
    body: "Issued by the Thai Department of Agriculture. Required for legal import in most destination markets for botanical goods.",
  },
  {
    label: "Certificate of Origin",
    body: "Thai CoO issued for all non-cannabis product categories. Required for customs clearance and preferential tariff treatment in many markets.",
  },
  {
    label: "Third-Party Lab Testing",
    body: "Independent CoA analysis for every cannabis and hemp batch. Cannabinoid profiles, terpenes, heavy metals, pesticides, and residual solvents.",
  },
  {
    label: "Import Compliance Assistance",
    body: "Our team prepares destination-country documentation — DEA permits, EMA filings, TGA applications, CE declarations — as part of the service.",
  },
];

const faqs = [
  {
    q: "Who can purchase from Global Green Exports?",
    a: "We supply licensed importers, pharmaceutical companies, research institutions, government health agencies, commercial developers, and hospitality operators. Cannabis buyers must demonstrate valid import authorisation in their jurisdiction.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimums vary by vertical. Cannabis whole flower starts at 1kg; extracts at 500g; hemp derivatives at 1kg. Housing, appliance, and HVAC orders are assessed per project. Contact us for your specific requirements.",
  },
  {
    q: "How does the escrow mechanism work?",
    a: "For every order, funds are deposited with a neutral third-party escrow provider. Funds are released only upon confirmed delivery and buyer quality verification. For first-time buyers this is mandatory; established clients may access direct invoice terms after two completed escrow orders.",
  },
  {
    q: "Can you source products not listed on your site?",
    a: "Yes. Our fee-based sourcing service is designed for exactly this. Submit your specification and we will assess feasibility, identify Thai manufacturers, and provide a sourcing proposal with transparent fee structure.",
  },
  {
    q: "How long does a typical order take?",
    a: "Cannabis: 4–8 weeks from signed agreement to delivery. Construction materials and appliances: 6–12 weeks depending on volume and destination customs processing. HVAC systems: assessed per project scope.",
  },
  {
    q: "What documentation is provided with each order?",
    a: "All orders include commercial invoice, packing list, and bill of lading. Cannabis orders additionally include CoA, phytosanitary certificate, and export permit. Non-cannabis orders include certificate of origin and relevant quality certification.",
  },
];

const whyUs = [
  { label: "Direct supplier relationships", sub: "No broker markups. We work with manufacturers and farms directly." },
  { label: "In-house documentation", sub: "Every export document prepared by our compliance team." },
  { label: "Escrow on every new trade", sub: "Buyer and seller protected from day one, every vertical." },
  { label: "Dedicated account manager", sub: "One point of contact from enquiry to delivery." },
  { label: "Fee-based sourcing", sub: "We find what you need if it isn't already in our catalogue." },
  { label: "Five specialist verticals", sub: "Cannabis, hemp, housing, appliances, and HVAC under one roof." },
];

/* ─── PAGE ─── */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Hero />

      {/* ─── INTRO STATEMENT ─── */}
      <section style={{ background: "#ffffff", padding: "80px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: "64px", alignItems: "center" }} className="lg:grid-cols-[1fr_1fr]">
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                }}
              >
                "We are a specialist sourcing and export house — built on the infrastructure of Thai supply chains, secured by escrow, and documented to the standards of the world's most demanding markets."
              </p>
              <div style={{ width: "40px", height: "2px", background: "#0a0a0a", marginTop: "32px" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(0,0,0,0.5)", fontWeight: 300, marginBottom: "20px" }}>
                Global Green Exports operates across five verticals — cannabis, hemp derivatives, housing materials, appliances, and HVAC equipment — all sourced directly from Thailand, with corporate headquarters in Denver, Colorado.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(0,0,0,0.5)", fontWeight: 300 }}>
                We are not a broker. We hold direct supplier relationships, prepare all export and import documentation in-house, and operate an escrow-protected trading model that gives both buyers and sellers full protection — across every product category we serve.
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

      {/* ─── VERTICALS ─── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500, marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "28px", height: "1px", background: "#3a8042", display: "inline-block" }} />
                What We Source
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                Five verticals. <em style={{ color: "#1a3d1e" }}>One model.</em>
              </h2>
            </div>
            <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "#0a0a0a", borderBottom: "1px solid rgba(0,0,0,0.3)", paddingBottom: "2px" }}>
              All products <ArrowUpRight size={12} />
            </Link>
          </div>

          {/* Top row — Cannabis & Hemp side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "1px" }}>
            {verticals.slice(0, 2).map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.id} style={{ background: "#ffffff", padding: "44px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#0a0a0a", marginBottom: "3px" }}>{v.title}</h3>
                      <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#3a8042", fontWeight: 400 }}>{v.sub}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Icon size={16} strokeWidth={1.2} color="rgba(0,0,0,0.2)" />
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(0,0,0,0.1)" }}>{v.id}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(0,0,0,0.5)", fontWeight: 300, marginBottom: "16px" }}>{v.desc}</p>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(0,0,0,0.3)", fontWeight: 300, marginBottom: "24px", fontStyle: "italic" }}>{v.detail}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {v.specs.map((s) => (
                      <span key={s} style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "4px 10px", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.4)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom row — Housing, Appliances, HVAC */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.08)" }}>
            {verticals.slice(2).map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.id} style={{ background: "#ffffff", padding: "44px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#0a0a0a", marginBottom: "3px" }}>{v.title}</h3>
                      <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#3a8042", fontWeight: 400 }}>{v.sub}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Icon size={16} strokeWidth={1.2} color="rgba(0,0,0,0.2)" />
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(0,0,0,0.1)" }}>{v.id}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(0,0,0,0.5)", fontWeight: 300, marginBottom: "16px" }}>{v.desc}</p>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(0,0,0,0.3)", fontWeight: 300, marginBottom: "24px", fontStyle: "italic" }}>{v.detail}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {v.specs.map((s) => (
                      <span key={s} style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "4px 10px", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.4)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OFFICES ─── */}
      <section style={{ background: "#000000", padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            <div style={{ background: "#0a0a0a", padding: "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <MapPin size={13} strokeWidth={1.5} color="#3a8042" />
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, color: "#3a8042" }}>Operations</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#ffffff", marginBottom: "8px" }}>Thailand</p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
                GACP cultivation partnerships<br />
                Thai FDA export licensing<br />
                In-country logistics & compliance<br />
                All five verticals sourced here
              </p>
            </div>
            <div style={{ background: "#0a0a0a", padding: "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <MapPin size={13} strokeWidth={1.5} color="#3a8042" />
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, color: "#3a8042" }}>Corporate HQ</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#ffffff", marginBottom: "8px" }}>Denver, Colorado</p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
                7550 East 53rd Place, STE 17125<br />
                Denver, CO 80217<br />
                United States<br />
                Colorado hemp processing partnerships
              </p>
            </div>
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
                The same six-step process applies across all five verticals — built around your regulatory and logistical requirements.
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
                Whether you are a pharmaceutical formulator, a licensed cannabis importer, a property developer, or a hospitality group — you need a supplier who meets the same compliance standard you do. We are built from the ground up for exactly that environment.
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
                    display: "flex", alignItems: "flex-start", gap: "16px",
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
                Our documentation and certification framework is designed to satisfy regulators in the most demanding markets globally — from the TGA in Australia to the German BfArM, and customs authorities in every destination we serve.
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "32px" }}>
          {[
            { n: "5", l: "Sourcing verticals" },
            { n: "30+", l: "Export markets" },
            { n: "Escrow", l: "Every transaction" },
            { n: "End-to-end", l: "Docs & logistics" },
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
            position: "absolute", inset: 0,
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
            We work with medical distributors, pharmaceutical formulators, licensed importers, property developers, and hospitality operators. Contact us to discuss any of our five sourcing verticals — or to submit a bespoke sourcing request.
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