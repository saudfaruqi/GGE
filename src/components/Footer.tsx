// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Primitives";
import { SITE, VERTICALS, MARKETS } from "@/lib/site";

const FRAMEWORK_LINKS = [
  { label: "How We Operate", href: "/about#how-we-operate" },
  { label: "Certifications", href: "/about#certifications" },
  { label: "Escrow Protection", href: "/escrow" },
  { label: "Wholesale & MOQs", href: "/wholesale" },
  { label: "Start an Enquiry", href: "/contact" },
];

const RESOURCE_LINKS = [
  { label: "Insights & Guides", href: "/blog" },
  { label: "GACP Certification Explained", href: "/blog/gacp-certification-explained" },
  { label: "Thai FDA Export Licensing", href: "/blog/thailand-cannabis-export-license-guide" },
  { label: "Escrow-Protected Trade", href: "/blog/escrow-protected-b2b-trade-explained" },
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="micro text-[var(--text-40)]">{title}</div>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[13px] text-[var(--text-55)] transition-colors hover:text-signal">
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-1)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo1.png" alt="Global Green Export" width={44} height={44} className="h-16 w-auto invert" />
            </Link>
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-[var(--text-55)]">
              Bangkok-based export house handling regulated Thai supply chains under a Thai
              FDA-licensed framework. Escrow-settled. Documented at every stage.
            </p>

            <div className="mt-8 space-y-5 text-[13px]">
              <div>
                <div className="micro text-[var(--text-40)]">{SITE.address.hub.label}</div>
                <div className="mt-2 text-[var(--text-55)]">
                  {SITE.address.hub.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
              {SITE.address.us && (
                <div>
                  <div className="micro text-[var(--text-40)]">{SITE.address.us.label}</div>
                  <div className="mt-2 text-[var(--text-55)]">
                    {SITE.address.us.lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-1">
                <a href={`mailto:${SITE.email.general}`} className="block text-[var(--text-55)] transition-colors hover:text-signal">
                  {SITE.email.general}
                </a>
                {SITE.phone && SITE.phoneHref && (
                  <a href={`tel:${SITE.phoneHref}`} className="block text-[var(--text-55)] transition-colors hover:text-signal">
                    {SITE.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <Col title="Exports">
              {VERTICALS.map((v) => (
                <FootLink key={v.href} href={v.href}>{v.label}</FootLink>
              ))}
            </Col>
            <Col title="Markets">
              {MARKETS.map((m) => (
                <FootLink key={m.href} href={m.href}>{m.label}</FootLink>
              ))}
            </Col>
            <Col title="Framework">
              {FRAMEWORK_LINKS.map((l) => (
                <FootLink key={l.href} href={l.href}>{l.label}</FootLink>
              ))}
            </Col>
            <Col title="Resources">
              {RESOURCE_LINKS.map((l) => (
                <FootLink key={l.href} href={l.href}>{l.label}</FootLink>
              ))}
            </Col>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 micro text-[var(--text-40)]">
              <Link href="/privacy" className="transition-colors hover:text-signal">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-signal">Terms</Link>
              <Link href="/cookies" className="transition-colors hover:text-signal">Cookies</Link>
            </div>
            <div className="micro text-[var(--text-40)]">© {new Date().getFullYear()} Global Green Export</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
