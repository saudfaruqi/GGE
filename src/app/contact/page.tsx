// app/contact/page.tsx — Global Green Exports · Contact

"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";

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
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.12)",
    padding: "13px 16px",
    fontSize: "0.875rem",
    color: "#0a0a0a",
    outline: "none",
    fontFamily: "'Jost', sans-serif",
    borderRadius: 0,
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.6rem",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#0a0a0a",
    marginBottom: "7px",
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0a0a0a",
          minHeight: "52vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
          paddingTop: "160px",
          paddingBottom: "72px",
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
            Get in Touch
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
            Contact{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>Global Green Exports</em>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.38)",
              fontWeight: 300,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Whether you're enquiring about wholesale pricing, escrow services, export
            documentation, or simply want to learn more — our team is ready to assist.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── CONTACT SECTION ── */}
      <section style={{ background: "#f5f5f5", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gap: "64px" }} className="lg:grid-cols-[340px_1fr]">

            {/* Left: details */}
            <div>
              <p style={TAG}>
                <span style={LINE} />
                Our Details
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "36px" }}>
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Bangkok, Thailand",
                    sub: "Export Operations Hub",
                    href: undefined,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@globalgreen.export",
                    sub: undefined,
                    href: "mailto:info@globalgreen.export",
                  },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+66 (0) 00 000 0000",
                    sub: undefined,
                    href: "tel:+66000000000",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          background: "#ffffff",
                        }}
                      >
                        <Icon size={14} strokeWidth={1.5} color="#1a3d1e" />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#3a8042",
                            fontWeight: 600,
                            marginBottom: "4px",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{
                              fontSize: "0.85rem",
                              color: "#0a0a0a",
                              fontWeight: 400,
                              textDecoration: "none",
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div>
                            <p style={{ fontSize: "0.85rem", color: "#0a0a0a" }}>{item.value}</p>
                            {item.sub && (
                              <p
                                style={{
                                  fontSize: "0.78rem",
                                  color: "rgba(0,0,0,0.38)",
                                  fontWeight: 300,
                                }}
                              >
                                {item.sub}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Response time */}
              <div
                style={{
                  background: "#0a0a0a",
                  padding: "28px",
                  marginBottom: "16px",
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
                    background: "#1a3d1e",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  Response Time
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.38)",
                    fontWeight: 300,
                  }}
                >
                  We aim to respond within{" "}
                  <strong style={{ color: "#ffffff", fontWeight: 500 }}>
                    24–48 business hours
                  </strong>
                  . For urgent enquiries, please indicate this in your message or reach us via
                  WhatsApp.
                </p>
              </div>

              {/* Licence note */}
              <div
                style={{
                  background: "#ffffff",
                  borderLeft: "3px solid #1a3d1e",
                  padding: "18px 22px",
                }}
              >
                <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(0,0,0,0.48)", fontWeight: 300 }}>
                  <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>Export Licence:</strong>{" "}
                  GGE is actively pursuing Thai export licensure. All product and trade enquiries are
                  welcome — we will advise on timelines accordingly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    minHeight: "480px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#ffffff",
                    padding: "60px",
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
                      background: "#1a3d1e",
                    }}
                  />
                  <CheckCircle
                    size={44}
                    strokeWidth={1}
                    style={{ color: "#1a3d1e", marginBottom: "24px" }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: "#0a0a0a",
                      marginBottom: "12px",
                    }}
                  >
                    Message Received
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                      color: "rgba(0,0,0,0.45)",
                      fontWeight: 300,
                      maxWidth: "380px",
                    }}
                  >
                    Thank you for reaching out. A member of the Global Green Exports team will be
                    in contact within 24–48 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#ffffff",
                    padding: "48px",
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
                      background: "#1a3d1e",
                    }}
                  />

                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      color: "#0a0a0a",
                      marginBottom: "32px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Send us a message
                  </h2>

                  <div
                    style={{ display: "grid", gap: "20px", marginBottom: "20px" }}
                    className="md:grid-cols-2"
                  >
                    {[
                      { key: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
                      { key: "company", label: "Company", type: "text", required: false, placeholder: "Company or organisation" },
                      { key: "email", label: "Email Address", type: "email", required: true, placeholder: "your@email.com" },
                      { key: "phone", label: "Phone / WhatsApp", type: "tel", required: false, placeholder: "+1 000 000 0000" },
                      { key: "country", label: "Country", type: "text", required: true, placeholder: "Your country" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label style={labelStyle}>
                          {field.label}
                          {field.required && " *"}
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
                      background: "#f5f5f5",
                      borderLeft: "3px solid rgba(0,0,0,0.15)",
                      padding: "16px 20px",
                      marginBottom: "24px",
                      fontSize: "0.75rem",
                      lineHeight: 1.7,
                      color: "rgba(0,0,0,0.4)",
                      fontWeight: 300,
                    }}
                  >
                    <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>Legal Notice:</strong>{" "}
                    Global Green Exports only conducts business with licensed entities in
                    jurisdictions where medicinal cannabis importation is legal. By submitting this
                    form, you confirm you are enquiring from a compliant legal context.
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      background: "#0a0a0a",
                      color: "#ffffff",
                      padding: "16px",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Send size={12} />
                    Send Enquiry
                    <ArrowRight size={12} />
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