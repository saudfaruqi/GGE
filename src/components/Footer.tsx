import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

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
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top accent line — dark green */}
      <div style={{ height: "2px", background: "#1a3d1e" }} />

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
          {/* Brand column */}
          <div>
            {/* Logo */}
            <img
              src="/logo1.png"
              alt="Global Green Exports"
              style={{ width: "120px", marginBottom: "20px", opacity: 0.85, filter: "invert(1)" }}
            />

            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                maxWidth: "260px",
              }}
            >
              Licensed Thai exporter of GACP-certified medicinal cannabis and
              hemp products. Connecting compliant growers with global markets.
            </p>
          </div>

          {/* Company links */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
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
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 300,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services links */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
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
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 300,
                      textDecoration: "none",
                      transition: "color 0.2s",
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
                color: "rgba(255,255,255,0.5)",
                fontWeight: 500,
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Contact
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin
                  size={12}
                  style={{ color: "#3a8042", marginTop: "3px", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Bangkok, Thailand
                  <br />
                  Export Operations
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={12} style={{ color: "#3a8042", flexShrink: 0 }} />
                <a
                  href="tel:+66000000000"
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  +66 (0) 00 000 0000
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={12} style={{ color: "#3a8042", flexShrink: 0 }} />
                <a
                  href="mailto:info@globalgreen.export"
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  info@globalgreen.export
                </a>
              </li>
            </ul>

            {/* Enquire CTA */}
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "28px",
                padding: "10px 18px",
                background: "#ffffff",
                color: "#0a0a0a",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Start an Enquiry
              <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.5)", padding: "20px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.45)",
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
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 300,
                  textDecoration: "none",
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