import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const col1 = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/escrow", label: "Escrow" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const col2 = [
  { href: "/products", label: "Whole Flower" },
  { href: "/products", label: "Full-Spectrum Extracts" },
  { href: "/products", label: "Cannabinoid Isolates" },
  { href: "/products", label: "Hemp Products" },
  { href: "/wholesale", label: "Bulk Wholesale" },
  { href: "/escrow", label: "Trade Escrow" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#07120a",
        borderTop: "1px solid rgba(184,146,58,0.12)",
      }}
    >
      <div style={{ height: "1px", background: "var(--gold, #b8923a)", opacity: 0.5 }} />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "72px 40px 56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "4px",
                letterSpacing: "0.01em",
              }}
            >
              Global Green Exports
            </p>
            <p
              style={{
                fontSize: "0.57rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(184,146,58,0.45)",
                marginBottom: "20px",
              }}
            >
              Bangkok · Est. 2024
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.3)",
                fontWeight: 300,
                maxWidth: "260px",
              }}
            >
              Licensed Thai exporter of GACP-certified medicinal cannabis and
              hemp products. Connecting compliant growers with global markets.
            </p>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold, #b8923a)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(184,146,58,0.12)",
              }}
            >
              Company
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {col1.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.83rem",
                      color: "rgba(255,255,255,0.32)",
                      fontWeight: 300,
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold, #b8923a)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(184,146,58,0.12)",
              }}
            >
              Products &amp; Services
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {col2.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.83rem",
                      color: "rgba(255,255,255,0.32)",
                      fontWeight: 300,
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold, #b8923a)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(184,146,58,0.12)",
              }}
            >
              Contact
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <MapPin
                  size={12}
                  style={{ color: "var(--gold, #b8923a)", marginTop: "3px", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.32)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Bangkok, Thailand
                  <br />
                  Export Operations
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={12} style={{ color: "var(--gold, #b8923a)", flexShrink: 0 }} />
                <a
                  href="tel:+66000000000"
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.32)",
                    fontWeight: 300,
                  }}
                >
                  +66 (0) 00 000 0000
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={12} style={{ color: "var(--gold, #b8923a)", flexShrink: 0 }} />
                <a
                  href="mailto:info@globalgreen.export"
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.32)",
                    fontWeight: 300,
                  }}
                >
                  info@globalgreen.export
                </a>
              </li>
            </ul>

            <div
              style={{
                marginTop: "24px",
                padding: "12px 14px",
                border: "1px solid rgba(184,146,58,0.14)",
              }}
            >
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(184,146,58,0.6)",
                  fontWeight: 500,
                  marginBottom: "3px",
                }}
              >
                Export Licence Pending
              </p>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.2)",
                  fontWeight: 300,
                }}
              >
                Full licensure expected shortly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "18px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.16)",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} Global Green Exports. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms", "Legal Notice"].map((t) => (
              <Link
                key={t}
                href="/contact"
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.16)",
                  fontWeight: 300,
                }}
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