// src/components/ui/Primitives.tsx
// Shared building blocks. Deliberately restrained: hairline rules instead of
// card walls, mono labels without decorative dashes, dotted-leader data rows
// instead of grids of identical cards, and one sparing signal colour.
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ============================================================
// Reveal — CSS + IntersectionObserver
// ============================================================

export function Reveal({
  children,
  delay = 0,
  className = "",
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: string;
  duration?: number;
  viewportOnce?: boolean;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

// ============================================================
// Layout
// ============================================================

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

// Legacy alias
export const SectionWrapper = Section;

// ============================================================
// Labels & headers
// ============================================================

export function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`micro text-[var(--text-40)] ${className}`}>{children}</span>;
}

// Legacy alias (no longer renders a decorative dash)
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`micro text-[var(--text-40)] ${className}`}>{children}</span>;
}

export function StatusPill({
  children,
  tone = "signal",
}: {
  children: React.ReactNode;
  tone?: "signal" | "neutral";
}) {
  const tones = {
    signal: "text-signal border-signal/40",
    neutral: "text-[var(--text-55)] border-[var(--line-strong)]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  direction?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal className={`${centered ? "text-center" : ""} ${className}`}>
      <Label>{label}</Label>
      <h2 className="h-display mt-4 max-w-3xl text-[clamp(28px,3.8vw,52px)] text-[var(--text)]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--text-55)] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

// ============================================================
// Button
// ============================================================

type ButtonVariant = "signal" | "bone" | "outline" | "ghost";

export function Button({
  children,
  href,
  className = "",
  variant = "signal",
  size = "default",
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: "sm" | "default" | "lg";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const sizes = {
    sm: "px-4 py-2.5 text-[11px]",
    default: "px-6 py-3.5 text-[12px]",
    lg: "px-7 py-4 text-[12px]",
  };

  const variants: Record<ButtonVariant, string> = {
    signal: "bg-signal text-[#180800] hover:bg-[#ff7038]",
    bone: "bg-bone text-[var(--bg)] hover:bg-white",
    outline: "border border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--text-40)]",
    ghost: "text-[var(--text-70)] hover:text-[var(--text)]",
  };

  const base = `inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-mono uppercase tracking-[0.16em] transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={base} disabled={disabled}>
      {children}
    </button>
  );
}

export function MagneticButton(props: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: "sm" | "default" | "lg";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return <Button {...props} />;
}

// ============================================================
// TradeRoute — signature divider (hand-made, on-theme)
// ============================================================

export function TradeRoute({
  codes,
  className = "",
}: {
  codes: string[];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      {codes.map((code, i) => (
        <div key={code + i} className="flex flex-1 items-center gap-3 last:flex-none">
          <span className="micro whitespace-nowrap text-[var(--text-25)]">{code}</span>
          {i < codes.length - 1 && (
            <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,var(--line-strong)_0_4px,transparent_4px_9px)]" />
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// DefList — asymmetric title/body definition rows (replaces card grids)
// ============================================================

export function DefList({
  items,
  className = "",
}: {
  items: { title: string; body: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {items.map((item) => (
        <div
          key={item.title}
          className="grid gap-2 border-t border-[var(--line)] py-7 md:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] md:gap-12"
        >
          <dt className="text-[15px] font-medium text-[var(--text)]">{item.title}</dt>
          <dd className="text-[14px] leading-relaxed text-[var(--text-55)]">{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}

// ============================================================
// LeaderRows — label ···· value documentation rows
// ============================================================

export function LeaderRows({
  rows,
  className = "",
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[auto_1fr_auto] items-baseline gap-3 border-b border-[var(--line)] py-3.5 last:border-0"
        >
          <dt className="micro text-[var(--text-40)]">{row.label}</dt>
          <span
            className="h-0 translate-y-[-3px] border-b border-dotted border-[var(--line-strong)]"
            aria-hidden="true"
          />
          <dd className="text-[13px] text-[var(--text-70)]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// ============================================================
// PageHero
// ============================================================

export function PageHero({
  eyebrow,
  title,
  subtitle,
  stats,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--bg-1)]">
      <div className="pointer-events-none absolute inset-0 vignette" aria-hidden="true" />
      <Container className="relative pb-14 pt-12 md:pb-16 md:pt-16">
        <Reveal>
          <Label>{eyebrow}</Label>
          <h1 className="h-display mt-5 max-w-4xl text-[clamp(34px,5.2vw,68px)] text-[var(--text)]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--text-55)]">
            {subtitle}
          </p>

          {stats && stats.length > 0 && (
            <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="h-display text-[clamp(26px,3vw,36px)] text-[var(--text)]">
                    {s.value}
                  </dt>
                  <dd className="micro mt-2 text-[var(--text-40)]">{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

// ============================================================
// CtaBand
// ============================================================

export function CtaBand({
  title,
  subtitle,
  primaryLabel = "Start procurement",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: React.ReactNode;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-1)]">
      <div className="pointer-events-none absolute inset-0 vignette" aria-hidden="true" />
      <Container className="relative py-24 md:py-36">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h2 className="h-display max-w-2xl text-[clamp(30px,4.4vw,58px)] text-[var(--text)]">
                {title}
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--text-55)]">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button href={primaryHref} variant="signal" size="lg">
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="outline" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ============================================================
// Breadcrumbs
// ============================================================

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-[var(--line)] bg-[var(--bg)]">
      <Container className="pt-24 pb-5">
        <ol className="flex flex-wrap items-center gap-2.5 micro text-[var(--text-40)]">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2.5">
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-signal">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--text-55)]">{item.label}</span>
              )}
              {i < items.length - 1 && (
                <span className="text-[var(--text-25)]" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
