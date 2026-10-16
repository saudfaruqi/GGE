// src/app/not-found.tsx
import Link from "next/link";
import { Button, Container } from "@/components/ui/Primitives";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-[var(--line)]">
      <div className="pointer-events-none absolute inset-0 vignette opacity-30" aria-hidden="true" />
      <Container className="relative py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Error 404</div>
        <h1 className="mt-6 text-[clamp(40px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--text)]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--text-55)]">
          The link may be broken or the page may have moved. Head back to the homepage, or browse
          what we export.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/" variant="signal" size="lg">
            Back to homepage
          </Button>
          <Button href="/products" variant="outline" size="lg">
            View exports
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-40)]">
          <Link href="/cannabis-export" className="transition-colors hover:text-signal">Cannabis</Link>
          <Link href="/hemp-export" className="transition-colors hover:text-signal">Hemp</Link>
          <Link href="/wholesale" className="transition-colors hover:text-signal">Wholesale</Link>
          <Link href="/contact" className="transition-colors hover:text-signal">Contact</Link>
        </div>
      </Container>
    </section>
  );
}
