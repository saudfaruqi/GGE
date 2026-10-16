// src/components/blog/ArticleLayout.tsx
import Link from "next/link";
import { Breadcrumbs, Container, CtaBand, Label, Reveal, Section } from "@/components/ui/Primitives";
import type { BlogPost } from "@/lib/blog-posts";
import { getSortedPosts } from "@/lib/blog-posts";
import { SITE_URL, BRAND } from "@/lib/site";

export default function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const related = getSortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/blog" },
          { label: post.category },
        ]}
      />

      <Section className="py-14 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Label className="text-signal">{post.category}</Label>
              <h1 className="h-display mt-5 text-[clamp(30px,4.6vw,54px)] text-[var(--text)]">
                {post.title}
              </h1>
              <div className="micro mt-7 flex flex-wrap items-center gap-4 text-[var(--text-40)]">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{BRAND}</span>
              </div>
            </Reveal>

            <Reveal className="prose-article mt-12 text-[16px] leading-relaxed">{children}</Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--line)] bg-[var(--bg-1)] py-16 md:py-20">
        <Container>
          <Label>Keep reading</Label>
          <div className="mt-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-baseline justify-between gap-6 border-t border-[var(--line)] py-5 last:border-b">
                <div>
                  <span className="micro text-signal">{p.category}</span>
                  <h3 className="mt-2 text-[16px] font-medium leading-snug text-[var(--text)] transition-colors group-hover:text-signal">
                    {p.title}
                  </h3>
                </div>
                <span className="micro shrink-0 text-[var(--text-40)]">{p.readTime}</span>
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
        secondaryLabel="All insights"
        secondaryHref="/blog"
      />
    </>
  );
}
