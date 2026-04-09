// components/Navbar.tsx  —  Global Green Exports
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400`}
        style={{
          background: scrolled ? "rgba(10,26,13,0.98)" : "rgba(10,26,13,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "1px solid rgba(201,168,76,0.1)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 flex items-center justify-between"
          style={{ height: "76px" }}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-4 shrink-0 group">
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
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.03em",
                  lineHeight: 1.1,
                }}
              >
                Global Green Exports
              </div>
              <div
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.6)",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginTop: "2px",
                }}
              >
                Thailand · Est. 2024
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: active ? 600 : 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active ? "var(--gold)" : "rgba(255,255,255,0.65)",
                    padding: "8px 14px",
                    transition: "color 0.2s",
                    borderBottom: active ? "1px solid var(--gold)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center"
              style={{
                background: "var(--gold)",
                color: "var(--green-dark)",
                padding: "10px 22px",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                transition: "background 0.2s",
              }}
            >
              Get Quote
            </Link>

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: "white", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          style={{
            maxHeight: mobileOpen ? "500px" : "0",
            opacity: mobileOpen ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s ease, opacity 0.25s ease",
            background: "rgba(10,26,13,0.99)",
            borderTop: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div style={{ padding: "16px 24px 24px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  color: pathname === link.href ? "var(--gold)" : "rgba(255,255,255,0.65)",
                  padding: "12px 0",
                  fontSize: "0.85rem",
                  fontWeight: pathname === link.href ? 600 : 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s",
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
                marginTop: "16px",
                background: "var(--gold)",
                color: "var(--green-dark)",
                padding: "13px",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}