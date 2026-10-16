// src/app/contact/page.tsx
// NOTE: phone number, street address and postal code below are PLACEHOLDERS
// sourced from src/lib/site.ts — replace with verified details before launch.
import type { Metadata } from "next";
import { Breadcrumbs, Container, PageHero, SectionWrapper } from "@/components/ui/Primitives";
import ContactForm from "./ContactForm";
import { SITE, SITE_URL } from "@/lib/site";

const TITLE = "Contact & Request Procurement | Thailand Export Enquiry";
const DESCRIPTION =
  "Start a procurement enquiry with Global Green Export — Bangkok-based, Thai FDA-licensed exporter of cannabis, hemp derivatives, construction materials, appliances and HVAC equipment. 48-hour response.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email.general,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.hub.region,
        addressCountry: "TH",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <PageHero
        eyebrow="Get In Touch"
        title="Request procurement."
        subtitle="Submit your product requirements, volume and destination. We respond within 48 business hours with a feasibility assessment and preliminary pricing."
      />

      <SectionWrapper className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.6fr]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-40)]">
                {SITE.address.hub.label}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-70)]">
                {SITE.address.hub.lines.join(", ")}
              </p>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-40)]">
                Sales
              </div>
              <a
                href={`mailto:${SITE.email.sales}`}
                className="mt-3 block text-[14px] text-signal hover:underline"
              >
                {SITE.email.sales}
              </a>
              {SITE.phone && SITE.phoneHref && (
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 block text-[14px] text-[var(--text-70)] transition-colors hover:text-[var(--text)]"
                >
                  {SITE.phone}
                </a>
              )}

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-40)]">
                Hours
              </div>
              <p className="mt-3 text-[14px] text-[var(--text-70)]">{SITE.hours}</p>

              <div className="mt-8 border-t border-[var(--line)] pt-6">
                <p className="text-[12px] leading-relaxed text-[var(--text-40)]">
                  Cannabis and hemp enquiries are accepted only from buyers who hold, or are
                  actively securing, import authorization in their destination jurisdiction.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
