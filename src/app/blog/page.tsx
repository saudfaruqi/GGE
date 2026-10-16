// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Container, CtaBand, Label, PageHero, Reveal, Section } from "@/components/ui/Primitives";
import { getSortedPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

const TITLE = "Insights & Guides | Cannabis, Hemp & Trade Compliance";
const DESCRIPTION =
  "Guides on GACP certification, Thai FDA export licensing, escrow-protected trade and hemp derivative compliance — written for B2B buyers sourcing regulated goods from Thailand.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
    ],
  };

  const [lead, ...rest] = getSortedPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />

      <PageHero
        eyebrow="Insights & Guides"
        title="Compliance, trade and sourcing — explained."
        subtitle="Written for buyers evaluating GACP certification, Thai export licensing, escrow settlement and hemp derivative compliance before they commit to a shipment."
      />

      <Section className="py-16 md:py-24">
        <Container>
          {/* Lead */}
          <Reveal>
            <Link href={`/blog/${lead.slug}`} className="group grid gap-6 border-y border-[var(--line)] py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-7">
                <Label className="text-signal">{lead.category} · Latest</Label>
                <h2 className="h-display mt-4 text-[clamp(24px,3.2vw,40px)] text-[var(--text)] transition-colors group-hover:text-signal">
                  {lead.title}
                </h2>
              </div>
              <div className="md:col-span-5 md:pt-9">
                <p className="text-[15px] leading-relaxed text-[var(--text-55)]">{lead.excerpt}</p>
                <div className="micro mt-5 flex items-center gap-3 text-[var(--text-40)]">
                  <time dateTime={lead.date}>
                    {new Date(lead.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{lead.readTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* List */}
          <div className="mt-2">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-3 border-b border-[var(--line)] py-6 md:grid-cols-12 md:gap-8">
                <div className="micro text-signal md:col-span-2">{post.category}</div>
                <h2 className="text-[17px] font-medium leading-snug text-[var(--text)] transition-colors group-hover:text-signal md:col-span-7">
                  {post.title}
                </h2>
                <div className="micro flex items-center gap-3 text-[var(--text-40)] md:col-span-3 md:justify-end">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have a sourcing question?"
        subtitle="Talk to our compliance team before you commit to a shipment."
        primaryLabel="Start an enquiry →"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
}
