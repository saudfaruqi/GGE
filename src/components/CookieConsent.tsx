"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true); // default true avoids flash-of-banner on SSR

  useEffect(() => {
    setAccepted(localStorage.getItem("cookie-consent") === "accepted");
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
  }, []);

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[var(--ink)] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 md:px-8">
        <p className="font-body text-xs leading-relaxed text-white/70 max-w-2xl">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 bg-[var(--jade)] text-white font-mono text-[10px] tracking-widest uppercase hover:bg-[var(--jade-deep)] transition-colors"
          >
            Accept
          </button>
          <Link
            href="/privacy"
            className="px-5 py-2 border border-white/20 text-white/60 font-mono text-[10px] tracking-widest uppercase hover:bg-white/5 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}