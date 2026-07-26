// app/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/escrow", label: "Escrow" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[var(--paper)] backdrop-blur-md border-b border-[var(--line)] py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-12 max-w-[1700px] mx-auto">
          <Link 
            href="/" 
            className="shrink-0 flex items-center gap-2 group"
            aria-label="Global Green Export Home"
          >
            <Image
              src="/logo1.png"
              alt="Global Green Export"
              width={70}
              height={70}
              className={`h-16 md:h-20 w-auto transition-all duration-500 ${
                scrolled ? "opacity-90 no-invert" : "opacity-100 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-mono text-[11px] tracking-[0.15em] uppercase py-1 transition-colors duration-300 ${
                    active 
                      ? scrolled ? "text-[var(--ink)]" : "text-white" 
                      : scrolled ? "text-[var(--ink-55)] hover:text-[var(--ink)]" : "text-white/60 hover:text-white"
                  }`}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  <motion.span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] transition-colors duration-300 ${
                      active 
                        ? "bg-[var(--stamp)]" 
                        : scrolled ? "bg-[var(--ink)]" : "bg-white"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: hoveredLink === link.href || active ? "100%" : "0%" 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden md:flex items-center gap-2.5 font-mono text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-500 ${
                scrolled
                  ? "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                  : "border border-white/60 text-white hover:bg-white hover:text-[var(--ink)]"
              }`}
            >
              Enquire
              <motion.svg 
                width="10" 
                height="10" 
                viewBox="0 0 10 10" 
                fill="none"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] transition-all duration-500 ${
                scrolled
                  ? "border border-[var(--ink)]"
                  : "border border-white/60"
              }`}
            >
              <motion.span 
                className={`w-5 h-px transition-colors duration-500 ${
                  scrolled ? "bg-[var(--ink)]" : "bg-white"
                }`}
                animate={{ rotate: menuOpen ? 45 : 0, translateY: menuOpen ? 6.5 : 0 }}
              />
              <motion.span 
                className={`w-5 h-px transition-colors duration-500 ${
                  scrolled ? "bg-[var(--ink)]" : "bg-white"
                }`}
                animate={{ opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span 
                className={`w-5 h-px transition-colors duration-500 ${
                  scrolled ? "bg-[var(--ink)]" : "bg-white"
                }`}
                animate={{ rotate: menuOpen ? -45 : 0, translateY: menuOpen ? -6.5 : 0 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-[98] bg-[var(--ink)]/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-[85vw] max-w-[340px] bg-[var(--paper)] md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--line)]">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image src="/logo1.png" alt="Global Green Export" width={32} height={32} className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center border border-[var(--line-strong)] text-[var(--ink-55)] hover:text-[var(--ink)] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-[var(--line)] text-[var(--ink-70)] hover:text-[var(--ink)] transition-colors group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-display text-[26px] leading-none">{link.label}</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      fill="none"
                      className="transform transition-transform group-hover:translate-x-1"
                    >
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </nav>

              <div className="px-6 pb-8 pt-4 border-t border-[var(--line)]">
                <Link
                  href="/contact"
                  className="flex items-center justify-between w-full bg-[var(--ink)] text-[var(--paper)] font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-[var(--jade-deep)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Start an Enquiry
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <p className="mt-4 text-center font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--ink-35)]">
                  Bangkok · Thailand
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}