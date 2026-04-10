"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/escrow", label: "Escrow" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "90px",
        background: scrolled ? "white" : "white",
        borderBottom: scrolled ? "1px solid rgba(184,146,58,0.15)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.5s, border-color 0.5s, backdrop-filter 0.5s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {/* Wordmark */}
        <Link href="/" style={{ width: "70px", margin: "auto 10px" }}>
        <img src="/logo1.png" alt="" />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "2px" }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: active ? 500 : 300,
                  color: active ? "var(--gold-light, #d4a84e)" : "black",
                  padding: "6px 16px",
                  position: "relative",
                }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "16px",
                      right: "16px",
                      height: "1px",
                      background: "var(--gold, #b8923a)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/contact"
            className="hidden lg:inline-block"
            style={{
              fontSize: "0.67rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--forest, #0d1f12)",
              background: "var(--gold, #b8923a)",
              padding: "9px 20px",
            }}
          >
            Enquire
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "22px",
            }}
            aria-label="Menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "#fff",
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1px",
                background: "#fff",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "#fff",
                transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          background: "rgba(13,31,18,0.99)",
          borderTop: "1px solid rgba(184,146,58,0.1)",
          maxHeight: mobileOpen ? "420px" : "0",
          opacity: mobileOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.2s ease",
        }}
      >
        <div style={{ padding: "20px 32px 28px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "13px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--gold-light, #d4a84e)" : "rgba(255,255,255,0.55)",
                fontWeight: pathname === link.href ? 500 : 300,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "20px",
              padding: "13px",
              background: "var(--gold, #b8923a)",
              color: "var(--forest, #0d1f12)",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Enquire
          </Link>
        </div>
      </div>
    </nav>
  );
}