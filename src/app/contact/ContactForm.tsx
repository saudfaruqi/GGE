// src/app/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const VERTICALS = [
  "Cannabis",
  "Hemp Derivatives",
  "Construction Materials",
  "Appliances",
  "HVAC Equipment",
  "Multiple / not sure yet",
];

// Hostinger PHP endpoint (see /public/contact-handler.php). Overridable at
// build time via NEXT_PUBLIC_CONTACT_ENDPOINT if the form moves to a service
// like Formspree.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/contact-handler.php";

type Status = "idle" | "sending" | "done" | "error";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-40)]"
    >
      {children}
    </label>
  );
}

const inputClass =
  "mt-2 w-full border border-[var(--line-strong)] bg-[var(--bg)] px-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--text-25)] focus:border-signal focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot — if filled, silently succeed without sending.
    if (data.website) {
      setStatus("done");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        `We couldn't submit the form automatically. Please email ${SITE.email.sales} directly.`
      );
    }
  }

  if (status === "done") {
    return (
      <div className="border border-[var(--line)] bg-[var(--bg-1)] p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center border border-signal/40 bg-signal/10 text-signal">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-[24px] font-semibold text-[var(--text)]">Enquiry received.</h3>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-[var(--text-55)]">
          We respond to every enquiry within 48 business hours with a feasibility assessment and
          preliminary pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Full name *</Label>
        <input id="name" name="name" required type="text" autoComplete="name" className={inputClass} />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <Label htmlFor="email">Work email *</Label>
        <input id="email" name="email" required type="email" autoComplete="email" className={inputClass} />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </div>
      <div>
        <Label htmlFor="country">Destination country</Label>
        <input id="country" name="country" type="text" className={inputClass} />
      </div>
      <div>
        <Label htmlFor="vertical">Product vertical</Label>
        <select id="vertical" name="vertical" className={inputClass} defaultValue={VERTICALS[0]}>
          {VERTICALS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Volume &amp; requirements *</Label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-[13px] text-danger">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-signal px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[#180800] transition-colors hover:bg-[#ff7038] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Submit enquiry →"}
        </button>
        <p className="mt-4 text-[11px] leading-relaxed text-[var(--text-40)]">
          By submitting you agree to be contacted about your enquiry. We don&apos;t share your
          details with third parties.
        </p>
      </div>
    </form>
  );
}
