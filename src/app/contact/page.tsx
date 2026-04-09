// app/contact/page.tsx  —  Global Green Exports · Contact

"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "white",
    border: "1px solid rgba(26,58,31,0.18)",
    padding: "13px 16px",
    fontSize: "0.875rem",
    color: "var(--green-dark)",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    borderRadius: 0,
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.62rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "var(--green-dark)",
    marginBottom: "7px",
  };

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

        {/* Vertical accent */}
        <div
          className="absolute left-1/2 top-0 pointer-events-none"
          style={{ width: "1px", height: "100px", background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }}
        />

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "20px" }}>
            Get in Touch
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
            Contact{" "}
            <span style={{ color: "var(--gold)" }}>Global Green Exports</span>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "540px", margin: "0 auto" }}>
            Whether you're enquiring about wholesale pricing, escrow services, export documentation,
            or simply want to learn more — our team is ready to assist.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── CONTACT SECTION ── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: contact details */}
            <div className="lg:col-span-4">
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Our Details
              </div>

              {/* Contact items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
                {[
                  {
                    icon: <MapPin size={16} style={{ color: "var(--green-mid)" }} />,
                    label: "Location",
                    value: "Bangkok, Thailand",
                    sub: "Export Operations Hub",
                  },
                  {
                    icon: <Mail size={16} style={{ color: "var(--green-mid)" }} />,
                    label: "Email",
                    value: "info@globalgreen.export",
                    href: "mailto:info@globalgreen.export",
                  },
                  {
                    icon: <Phone size={16} style={{ color: "var(--green-mid)" }} />,
                    label: "Phone / WhatsApp",
                    value: "+66 (0) 00 000 0000",
                    href: "tel:+66000000000",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        border: "1px solid rgba(201,168,76,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "4px" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.85rem", color: "var(--green-dark)", fontWeight: 400 }}>
                          {item.value}
                        </a>
                      ) : (
                        <div>
                          <p style={{ fontSize: "0.85rem", color: "var(--green-dark)" }}>{item.value}</p>
                          {item.sub && <p style={{ fontSize: "0.78rem", color: "#888", fontWeight: 300 }}>{item.sub}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time */}
              <div style={{ background: "var(--green-dark)", padding: "28px", marginBottom: "16px", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--gold-light)", marginBottom: "10px" }}>
                  Response Time
                </h3>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                  We aim to respond to all enquiries within{" "}
                  <strong style={{ color: "var(--gold-light)" }}>24–48 business hours</strong>.
                  For urgent enquiries, please indicate this in your message or reach us via WhatsApp.
                </p>
              </div>

              {/* Licence note */}
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,31,0.1)", borderLeft: "3px solid var(--gold)", padding: "18px 22px" }}>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "#777", fontWeight: 300 }}>
                  <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>Export Licence:</strong>{" "}
                  GGE is actively pursuing Thai export licensure. In the interim, all product and trade
                  enquiries are welcome — we will advise on timelines accordingly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div
                  style={{
                    minHeight: "480px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#fff",
                    border: "1px solid rgba(26,58,31,0.1)",
                    padding: "60px",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />
                  <CheckCircle size={44} style={{ color: "var(--green-mid)", marginBottom: "24px" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "12px" }}>
                    Message Received
                  </h3>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "#777", fontWeight: 300, maxWidth: "380px" }}>
                    Thank you for reaching out. A member of the Global Green Exports team will be in
                    contact within 24–48 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ background: "#fff", border: "1px solid rgba(26,58,31,0.1)", padding: "48px", position: "relative" }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gold)" }} />

                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--green-dark)", marginBottom: "32px" }}>
                    Send Us a Message
                  </h2>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    {[
                      { key: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
                      { key: "company", label: "Company", type: "text", required: false, placeholder: "Company or organisation" },
                      { key: "email", label: "Email Address", type: "email", required: true, placeholder: "your@email.com" },
                      { key: "phone", label: "Phone / WhatsApp", type: "tel", required: false, placeholder: "+1 000 000 0000" },
                      { key: "country", label: "Country", type: "text", required: true, placeholder: "Your country" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label style={labelStyle}>
                          {field.label}{field.required && " *"}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          style={inputStyle}
                          value={(form as any)[field.key]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={labelStyle}>Enquiry Type *</label>
                      <select
                        required
                        style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.enquiryType}
                        onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                      >
                        <option value="">Select enquiry type</option>
                        <option value="wholesale">Wholesale / Bulk Purchase</option>
                        <option value="escrow">Escrow Services</option>
                        <option value="products">Product Information</option>
                        <option value="export">Export Documentation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your requirements, quantities, destination country, and any other relevant details..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {/* Legal notice */}
                  <div
                    style={{
                      background: "var(--cream)",
                      border: "1px solid rgba(26,58,31,0.1)",
                      borderLeft: "3px solid rgba(201,168,76,0.5)",
                      padding: "16px 20px",
                      marginBottom: "24px",
                      fontSize: "0.75rem",
                      lineHeight: 1.7,
                      color: "#888",
                      fontWeight: 300,
                    }}
                  >
                    <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>Legal Notice:</strong>{" "}
                    Global Green Exports only conducts business with licensed entities in jurisdictions
                    where medicinal cannabis importation is legal. By submitting this form, you confirm
                    you are enquiring from a compliant legal context.
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3"
                    style={{
                      background: "var(--green-dark)",
                      color: "white",
                      padding: "16px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    <Send size={13} />
                    Send Enquiry
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}