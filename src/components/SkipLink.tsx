"use client";

import { useEffect, useState } from "react";

export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") setIsVisible(true);
    };
    const handleMouseDown = () => setIsVisible(false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className={`fixed top-4 left-4 z-[9999] px-6 py-3 bg-[var(--jade-deep)] text-white font-medium text-sm tracking-wide rounded shadow-lg ring-2 ring-[var(--jade)] ring-offset-2 ring-offset-[var(--paper)] transition-all duration-200 focus:outline-none hover:bg-[var(--jade)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <span className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        Skip to main content
      </span>
    </a>
  );
}