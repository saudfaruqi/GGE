// src/components/home/Faq.tsx
"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--line)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-[var(--line)]">
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-[var(--text-40)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium text-[var(--text)]">
                    {item.q}
                  </span>
                </span>
                <span
                  className={`shrink-0 font-mono text-[18px] leading-none transition-colors ${
                    isOpen ? "text-signal" : "text-[var(--text-40)]"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-3xl pb-6 pl-[38px] text-[14px] leading-relaxed text-[var(--text-55)]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
