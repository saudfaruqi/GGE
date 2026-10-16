// src/app/blog/thailand-construction-materials-export-guide/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("thailand-construction-materials-export-guide")!;

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
        Sourcing structural steel or prefabricated components from a new
        country is a different kind of decision than sourcing a consumer
        product. A defective batch of appliances is a returns problem. A
        structural steel shipment that doesn't match its mill certificate
        is a problem that shows up in a building inspection, months after
        the container has already been unloaded and the material is
        framed into a structure. The stakes for getting the sourcing
        process right are higher, and the process itself looks different.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Start with the spec, not the catalog</h2>
      <p>
        Unlike appliances or HVAC units, construction materials sourcing
        rarely starts from a supplier's existing product catalog — it
        starts from your project's engineering spec. Structural steel grade,
        dimensional tolerances, and load ratings are set by your project's
        engineers, not by what a supplier happens to stock. A sourcing
        partner who asks for your spec sheet before quoting is doing this
        correctly; one who tries to sell you from a generic catalog without
        asking what your project actually requires is a warning sign.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Mill certificates are non-negotiable for structural steel</h2>
      <p>
        A mill certificate documents the chemical composition and mechanical
        properties of a specific steel batch, traced back to the mill that
        produced it. For structural applications, this isn't optional
        paperwork — it's typically required for building code compliance
        and inspection sign-off in most jurisdictions. Confirm before
        ordering that mill certificates will be provided per batch, matched
        to the actual material in your shipment, not a generic
        specification sheet for the product line.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Inspection timing matters more than inspection existence</h2>
      <p>
        Almost every supplier will tell you materials are "quality
        inspected." The more useful question is when — before container
        loading, or only on arrival at destination. Pre-loading inspection
        catches problems while they're still cheap to fix: a defective
        batch gets swapped before it's shipped, rather than discovered
        after freight costs, customs clearance, and delivery time have
        already been sunk into a shipment that now needs to be returned or
        reworked at the destination.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Lead time realism</h2>
      <p>
        Construction materials sourced to a specific project spec don't
        move on the same timeline as off-the-shelf consumer goods.
        Structural steel and prefab components typically involve a
        production run against your spec, not a pick from existing
        inventory, which means lead times are longer and more
        variable — factor this into project scheduling early rather than
        treating international materials sourcing as a drop-in replacement
        for local supply with a shorter lead time.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">A practical sourcing checklist</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Share your full engineering spec upfront, not just a general product category.</li>
        <li>Confirm mill certificates (for structural steel) will be issued per batch, matched to your actual shipment.</li>
        <li>Confirm inspection happens before container loading, not only on arrival.</li>
        <li>Get a realistic lead-time estimate that accounts for production against spec, not off-the-shelf availability.</li>
        <li>Confirm certificate of origin will be provided for customs clearance at your destination.</li>
      </ul>

      <p>
        None of this is complicated, but it's easy to skip when the
        pressure is on price and delivery date. The suppliers worth working
        with are the ones who bring these questions up before you have to
        ask them.
      </p>
    </ArticleLayout>
  );
}
