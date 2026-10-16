// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { VERTICALS, MARKETS } from "@/lib/site";

const MENUS: { label: string; items: { href: string; label: string }[] }[] = [
  { label: "Exports", items: VERTICALS.map((v) => ({ href: v.href, label: v.label })) },
  { label: "Markets", items: MARKETS.map((m) => ({ href: m.href, label: m.label })) },
];

const FLAT = [
  { href: "/wholesale", label: "Wholesale" },
  { href: "/escrow", label: "Escrow" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const path = pathname.replace(/\/+$/, "") || "/";
  const isActive = (href: string) => path === href.replace(/\/+$/, "");
  const navLink = (active: boolean) =>
    `relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
      active ? "text-[var(--text)]" : "text-[var(--text-55)] hover:text-[var(--text)]"
    }`;

  return (
    <header
      className={`fixed py-2 inset-x-0 top-0 z-[100] border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[rgba(18,17,16,0.82)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Global Green Export — home">
          <Image src="/logo1.png" alt="Global Green Export" width={52} height={52} className="h-10 lg:h-16 w-auto invert" priority />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/products"
            aria-current={isActive("/products") ? "page" : undefined}
            className={navLink(isActive("/products"))}
          >
            Products
            {isActive("/products") && <span className="absolute inset-x-3 -bottom-px h-px bg-signal" aria-hidden="true" />}
          </Link>

          {MENUS.map((menu) => {
            const active =
              menu.label === "Exports"
                ? VERTICALS.some((v) => isActive(v.href))
                : MARKETS.some((m) => isActive(m.href));
            return (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={`${navLink(active)} flex items-center gap-2`}
                  aria-expanded={openMenu === menu.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                >
                  {menu.label}
                  {active && <span className="absolute inset-x-3 -bottom-px h-px bg-signal" aria-hidden="true" />}
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true" className="opacity-50">
                    <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full min-w-[220px] border border-[var(--line)] bg-[var(--bg-1)] p-2 shadow-2xl transition-all duration-200 ${
                    openMenu === menu.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-white/[0.04] hover:text-signal ${
                        isActive(item.href) ? "text-signal" : "text-[var(--text-55)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {FLAT.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={navLink(isActive(l.href))}
            >
              {l.label}
              {isActive(l.href) && <span className="absolute inset-x-3 -bottom-px h-px bg-signal" aria-hidden="true" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center bg-signal px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#180800] transition-colors hover:bg-[#ff7038] sm:inline-flex"
          >
            Enquire
          </Link>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-[var(--line-strong)] lg:hidden"
          >
            <span className={`h-px w-5 bg-[var(--text)] transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-[var(--text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-[var(--text)] transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 top-16 z-[99] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-[calc(100dvh-4rem)] w-[86vw] max-w-[360px] overflow-y-auto border-l border-[var(--line)] bg-[var(--bg-1)] px-6 py-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {[
            { label: "Products", href: "/products" },
            ...VERTICALS.map((v) => ({ label: v.label, href: v.href })),
            ...MARKETS.map((m) => ({ label: `Export to ${m.label}`, href: m.href })),
            ...FLAT,
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`flex items-center justify-between border-b border-[var(--line)] py-3.5 text-[15px] transition-colors ${
                isActive(l.href) ? "text-signal" : "text-[var(--text-70)] hover:text-[var(--text)]"
              }`}
            >
              {l.label}
              <span className="font-mono text-[11px] text-[var(--text-25)]">→</span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-signal px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#180800]"
          >
            Start an Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
