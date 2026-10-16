// src/components/ScrollToTop.tsx
"use client";

import { useEffect, useState, useCallback } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] bg-[var(--bg-1)] text-[var(--text-70)] transition-colors duration-300 hover:border-signal/60 hover:text-signal"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}