// components/Footer.tsx  —  Global Green Exports
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/escrow", label: "Escrow Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/products", label: "Premium Flower" },
    { href: "/products", label: "Full-Spectrum Extracts" },
    { href: "/products", label: "Isolated Cannabinoids" },
    { href: "/products", label: "Hemp Products" },
    { href: "/wholesale", label: "Bulk Wholesale" },
    { href: "/escrow", label: "Trade Escrow" },
  ],
};

const certBadges = [
  "GACP Certified",
  "Export Licensed",
  "CoA Guaranteed",
  "Escrow Protected",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080f09",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Top gold line */}
      <div style={{ height: "2px", background: "var(--gold)" }} />

      {/* Badge strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          padding: "14px 0",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8"
          style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}
        >
          {certBadges.map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.5)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 500,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--gold)", opacity: 0.6 }}
              />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-white.png"
                  alt="GGE"
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  Global Green Exports
                </div>
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.5)",
                    fontWeight: 500,
                  }}
                >
                  Thailand · Est. 2024
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.35)",
                fontWeight: 300,
                marginBottom: "20px",
              }}
            >
              Thailand's licensed exporter of GACP-certified medicinal cannabis
              and hemp products. Connecting compliant growers with global markets.
            </p>

            <div
              className="flex items-center gap-2"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.6)",
                fontWeight: 600,
              }}
            >
              <Globe size={11} />
              Licensed Thai Cannabis Exporter
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1"
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.38)",
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              Products & Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.38)",
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              Contact
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <li className="flex items-start gap-3">
                <MapPin size={13} style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.6 }}>
                  Bangkok, Thailand<br />Export Operations Hub
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <a href="tel:+66000000000" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>
                  +66 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <a href="mailto:info@globalgreen.export" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>
                  info@globalgreen.export
                </a>
              </li>
            </ul>

            {/* Licence status */}
            <div
              style={{
                marginTop: "24px",
                padding: "12px 16px",
                border: "1px solid rgba(201,168,76,0.15)",
                background: "rgba(201,168,76,0.04)",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "3px" }}>
                Export Licence Pending
              </p>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", fontWeight: 300 }}>
                Full licensure expected shortly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.08)",
          padding: "20px 0",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Global Green Exports. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Legal Notice"].map((t) => (
              <Link
                key={t}
                href="/contact"
                style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", transition: "color 0.2s" }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}