// src/components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "gge-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // localStorage unavailable — still dismiss for this session
    }
    setVisible(false);
  }

  function decline() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      // localStorage unavailable — still dismiss for this session
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-[200] bg-[var(--bg-1)] text-[var(--text-70)] border-t border-[var(--line)]"
        >
          <div className="px-5 md:px-12 max-w-shell mx-auto py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[13px] leading-relaxed flex-1">
              We use cookies for essential site functionality and, with your
              consent, for analytics. See our{" "}
              <Link href="/cookies" className="text-signal underline">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 border border-[var(--line-strong)] text-[var(--text-55)] hover:text-[var(--text)] transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 bg-signal text-[#180800] hover:bg-[#ff7038] transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
