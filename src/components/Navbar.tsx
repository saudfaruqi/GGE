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

  // Determine if current page has a dark hero (all pages except potentially light ones)
  // Navbar starts transparent on dark hero, becomes white on scroll
  const isDarkPage = true; // all pages have dark heroes

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const bgColor = scrolled ? "#ffffff" : "transparent";
  const borderColor = scrolled ? "rgba(0,0,0,0.08)" : "transparent";
  const linkColor = scrolled ? "#0a0a0a" : "rgba(255,255,255,0.75)";
  const activeLinkColor = scrolled ? "#0a0a0a" : "#ffffff";
  const activeUnderlineColor = "#3a8042";
  const logoFilter = scrolled ? "none" : "invert(1)"; // assumes logo is light on dark

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "80px",
        background: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark / Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo1.png"
            alt="Global Green Exports"
            className="w-[70px] lg:w-[80px]"
            style={{
              filter: logoFilter,
              transition: "filter 0.4s ease",
            }}
          />
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "0px" }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: active ? 500 : 300,
                  color: active ? activeLinkColor : linkColor,
                  padding: "6px 18px",
                  position: "relative",
                  transition: "color 0.3s ease",
                  textDecoration: "none",
                }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: "18px",
                      right: "18px",
                      height: "1px",
                      background: activeUnderlineColor,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/contact"
            className="hidden lg:inline-flex"
            style={{
              alignItems: "center",
              fontSize: "0.65rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: scrolled ? "#0a0a0a" : "#ffffff",
              background: "transparent",
              border: scrolled ? "1px solid rgba(0,0,0,0.2)" : "1px solid rgba(255,255,255,0.25)",
              padding: "9px 20px",
              transition: "color 0.3s ease, border-color 0.3s ease",
              textDecoration: "none",
            }}
          >
            Enquire
          </Link>

{/* Mobile hamburger */}
<button
  className="flex lg:hidden"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  style={{
    background: "none",
    border: `2px solid transparent`,
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0px",
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    position: "relative",
    padding: "0",
    transition: "border-color 0.3s",
  }}
>
  {/* Circle trace */}
  <span
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      borderRadius: "100%",
      border: "2px solid transparent",
      color: scrolled ? "#0a0a0a" : "#ffffff",
      animation: mobileOpen
        ? "circle-creation 1s forwards"
        : "circle-destruction 0.6s forwards",
      pointerEvents: "none",
    }}
  />

  {/* Bar 1 */}
  <span
    style={{
      display: "block",
      width: "22px",
      height: "2px",
      borderRadius: "10px",
      background: scrolled ? "#0a0a0a" : "#ffffff",
      margin: "3px auto",
      position: "relative",
      animation: mobileOpen
        ? "mrotr 0.5s forwards"
        : "mrotr-reverse 0.5s forwards",
      transition: "background 0.3s ease",
    }}
  />

  {/* Bar 2 */}
  <span
    style={{
      display: "block",
      width: "22px",
      height: "2px",
      borderRadius: "10px",
      background: scrolled ? "#0a0a0a" : "#ffffff",
      margin: "3px auto",
      position: "relative",
      animation: mobileOpen
        ? "fade 0.3s forwards"
        : "fade-reverse 0.4s 0.2s forwards",
      transition: "background 0.3s ease",
    }}
  />

  {/* Bar 3 */}
  <span
    style={{
      display: "block",
      width: "22px",
      height: "2px",
      borderRadius: "10px",
      background: scrolled ? "#0a0a0a" : "#ffffff",
      margin: "3px auto",
      position: "relative",
      animation: mobileOpen
        ? "mrotl 0.5s forwards"
        : "mrotl-reverse 0.5s forwards",
      transition: "background 0.3s ease",
    }}
  />

  <style>{`
    /* === OPEN === */
    @keyframes mrotr {
      0%   { transform: translateY(0px) rotate(0); }
      50%  { transform: translateY(8px) rotate(0); }
      100% { transform: translateY(8px) rotate(45deg); }
    }
    @keyframes mrotl {
      0%   { transform: translateY(0px) rotate(0); }
      50%  { transform: translateY(-8px) rotate(0); }
      100% { transform: translateY(-8px) rotate(-45deg); }
    }
    @keyframes fade {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
    @keyframes circle-creation {
      0%   { border-color: transparent;                                      transform: rotate(0deg); }
      25%  { border-color: transparent currentColor transparent transparent; transform: rotate(-35deg); }
      50%  { border-color: transparent currentColor currentColor transparent; }
      75%  { border-color: transparent currentColor currentColor currentColor; }
      100% { border-color: currentColor;                                      transform: rotate(-300deg); }
    }

    /* === CLOSE === */
    @keyframes mrotr-reverse {
      0%   { transform: translateY(8px) rotate(45deg); }
      50%  { transform: translateY(8px) rotate(0); }
      100% { transform: translateY(0px) rotate(0); }
    }
    @keyframes mrotl-reverse {
      0%   { transform: translateY(-8px) rotate(-45deg); }
      50%  { transform: translateY(-8px) rotate(0); }
      100% { transform: translateY(0px) rotate(0); }
    }
    @keyframes fade-reverse {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes circle-destruction {
      0%   { border-color: currentColor;                                      transform: rotate(-300deg); }
      25%  { border-color: transparent currentColor currentColor currentColor; }
      50%  { border-color: transparent currentColor currentColor transparent; }
      75%  { border-color: transparent currentColor transparent transparent;  transform: rotate(-35deg); }
      100% { border-color: transparent;                                       transform: rotate(0deg); }
    }
  `}</style>
</button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          maxHeight: mobileOpen ? "480px" : "0",
          opacity: mobileOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        <div style={{ padding: "24px 32px 32px" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  fontSize: "0.82rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active ? "#ffffff" : "rgba(255,255,255,0.4)",
                  fontWeight: active ? 500 : 300,
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "2px",
                      height: "16px",
                      background: "#3a8042",
                    }}
                  />
                )}
                <span style={{ paddingLeft: active ? "12px" : "0" }}>{link.label}</span>
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "24px",
              padding: "14px",
              background: "#ffffff",
              color: "#0a0a0a",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
}