// src/app/gallery/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs, Container, CtaBand, PageHero, Reveal, Section } from "@/components/ui/Primitives";
import { SITE_URL } from "@/lib/site";

const TITLE = "Product & Category Gallery | Thailand Export Supply";
const DESCRIPTION =
  "A look at the categories Global Green Export sources from Thailand — GACP-certified cannabis, hemp, construction materials, appliances and HVAC equipment.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/gallery` },
};

// Illustrative imagery of the categories we source and export.
const IMAGES = [
  { src: "/gallery/35.jpeg", alt: "GACP-certified cannabis flower", span: true },
  { src: "/gallery/47.jpeg", alt: "Industrial hemp cultivation", span: false },
  { src: "/gallery/30.jpeg", alt: "Cannabis product, batch-packed", span: false },
  { src: "/gallery/8.jpeg", alt: "Warehouse staging ahead of container loading", span: true },
  { src: "/gallery/2.jpeg", alt: "Modern residential construction", span: false },
  { src: "/gallery/44.jpeg", alt: "Completed development project", span: false },
  { src: "/gallery/14.jpeg", alt: "White goods and appliances", span: false },
  { src: "/gallery/25.jpeg", alt: "HVAC equipment and ducting", span: false },
  { src: "/gallery/43.jpeg", alt: "Modular building components", span: true },
  { src: "/gallery/39.jpeg", alt: "Finished residential build", span: false },
];

export default function GalleryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <PageHero
        eyebrow="Categories"
        title="The products we source and export."
        subtitle="Illustrative imagery across the five verticals — from certified cannabis cultivation to container-load appliance and HVAC supply."
      />

      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[248px] lg:grid-cols-4">
            {IMAGES.map((img, i) => (
              <Reveal
                key={img.src + i}
                className={`group relative overflow-hidden border border-[var(--line)] ${
                  img.span ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,17,16,0.75)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 translate-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text)] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </Reveal>
            ))}
          </div>
          <p className="micro mt-8 text-[var(--text-40)]">
            Imagery is illustrative of the product categories we source and export.
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Request a sample or documentation."
        subtitle="Tell us the category, volume and destination — we'll confirm feasibility within 48 hours."
        primaryLabel="Start procurement →"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
}
