// src/app/blog/container-load-sourcing-thailand-guide/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("container-load-sourcing-thailand-guide")!;

export const metadata: Metadata = {
  title: `${post.title}`,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url: `https://www.globalgreenexport.com/blog/${post.slug}`, type: "article" },
};

export default function Page() {
  return (
    <ArticleLayout post={post}>
      <p>
        A buyer sourcing hemp isolates, a run of commercial refrigeration
        units, and a batch of HVAC replacement parts from three separate
        suppliers is paying for three separate sets of freight, customs
        clearance, and documentation overhead — even though all three could
        physically fit in the same container. Consolidation is one of the
        more underused levers in B2B sourcing, mostly because most
        suppliers only operate in one category and can't offer it.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">How consolidated pricing actually works</h2>
      <p>
        A standard 20-foot or 40-foot container has fixed freight costs
        regardless of what's inside it, up to its volume and weight limits.
        When one shipment fills a container with a single product category,
        that fixed freight cost gets absorbed entirely by that one order.
        When multiple smaller orders across different categories share a
        container, the same fixed freight cost gets split across all of
        them — which is why consolidation tends to produce genuine savings
        rather than just administrative convenience, particularly for
        orders that individually wouldn't justify a full container on their
        own.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Where consolidation makes sense — and where it doesn't</h2>
      <p>
        Consolidation works best when your order volumes per category sit
        below full-container-load thresholds individually, but would
        collectively fill a container. It works less well when you're
        already ordering at full-container volume in a single category —
        at that point, splitting a container to add smaller quantities of
        something else usually adds complexity without meaningful savings.
      </p>
      <p>
        There's also a documentation consideration: mixing controlled or
        regulated categories (like hemp derivatives) with non-regulated
        categories (like appliances) in a single container is generally
        fine, but the container-level customs paperwork needs to correctly
        reflect the mixed contents, with each category's specific
        documentation (CoAs, certificates of origin, product-specific
        compliance paperwork) intact and traceable to its portion of the
        shipment. This is more a question of supplier competence than a
        structural barrier — a supplier used to single-category shipments
        may not have the documentation process built for mixed-category
        consolidation.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Practical steps to plan a consolidated order</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Get individual volume and weight figures for each category you're sourcing, and check them against standard container capacity (roughly 28 cubic meters and 28 tonnes for a 20-foot container, closer to 58 cubic meters and 26 tonnes for a 40-foot).</li>
        <li>Confirm your supplier can produce category-specific documentation within a single consolidated shipment, not just a single blanket invoice.</li>
        <li>Ask whether lead times differ across categories — a consolidated shipment moves on the slowest category's timeline, so a fast-turnaround appliance order paired with a longer-lead-time construction material order will wait for the slower one.</li>
        <li>Confirm destination-side handling — some customs brokers handle mixed-category clearance more smoothly than others, worth checking before committing to consolidation on a first order.</li>
      </ul>

      <p>
        For buyers who need multiple product categories from the same
        origin country regularly, setting up a working consolidation
        process with a single supplier who can genuinely handle
        multi-category sourcing is usually worth the setup effort — the
        savings compound with every subsequent order, not just the first
        one.
      </p>
    </ArticleLayout>
  );
}
