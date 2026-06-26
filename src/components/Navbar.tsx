'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/escrow', label: 'Escrow' },
  { href: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-[var(--ink)] py-4">
        <nav className="flex items-center justify-between px-5 md:px-12 max-w-[1800px] mx-auto">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo1.png"
              alt="Global Green Exports"
              width={56}
              height={56}
              className="h-12 md:h-14 w-auto transition-all duration-500 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-[9px] tracking-[0.25em] uppercase py-1 transition-all duration-300 group text-white/50 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px transition-all duration-400 bg-white/60 w-0 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:flex items-center gap-2.5 font-mono text-[9px] tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-400 bg-white/10 text-white border-white/20 hover:bg-white hover:text-[var(--ink)]"
            >
              Enquire
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] border transition-colors duration-300 border-white/20"
            >
              <span className={`w-5 h-px transition-all duration-300 origin-center bg-white ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-5 h-px transition-all duration-300 bg-white ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-px transition-all duration-300 origin-center bg-white ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[98] bg-black/40 md:hidden transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-[99] w-[85vw] max-w-[340px] bg-[var(--ink)] md:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <Image src="/logo1.png" alt="" width={40} height={40} className="h-10 w-auto invert" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-4 border-b border-white/[0.06] group transition-all duration-300 text-white/70 hover:text-white"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-serif text-[28px] leading-none">{link.label}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between w-full bg-[var(--forest)] text-[var(--paper)] font-mono text-[10px] tracking-[0.25em] uppercase px-6 py-4 hover:bg-[var(--forest-mid)] transition-colors"
          >
            Start an Enquiry
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">
            Bangkok · Thailand · Est. 2024
          </p>
        </div>
      </div>
    </>
  )
}