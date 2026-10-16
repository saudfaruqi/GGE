// src/app/blog/certificate-of-analysis-what-to-check/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("certificate-of-analysis-what-to-check")!;

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
        A Certificate of Analysis is the single most-referenced document in
        cannabis and hemp sourcing, and also one of the most commonly
        skimmed rather than actually read. It's easy to check for the
        presence of a CoA and move on. It's more useful to know what on
        that document actually tells you something, and what's just
        formatting.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Start with who issued it</h2>
      <p>
        The single highest-value check on any CoA is whether it came from
        an independent, accredited third-party lab — not an in-house lab
        run by the supplier or grower themselves. An in-house CoA isn't
        automatically fraudulent, but it removes the independence that
        makes third-party testing meaningful in the first place. Look for
        the lab's name, accreditation body, and ideally a way to verify the
        lab is real and currently accredited — not just a logo on a PDF.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Batch-specific, not reference</h2>
      <p>
        This is the check that catches the most problems in practice. A
        CoA should correspond to the specific batch or lot number you're
        actually receiving — not a "representative" or reference CoA from
        an earlier harvest or production run that the supplier reuses
        across multiple orders. Ask directly: does the batch number on this
        CoA match the batch number on my shipment? If a supplier can't
        answer that clearly, the CoA isn't telling you anything about what
        you're actually buying.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Know which THC metric you're looking at</h2>
      <p>
        For hemp and cannabis products specifically, check whether the CoA
        reports Delta-9 THC specifically or total THC (which factors in
        THCA using a conversion calculation). These aren't interchangeable,
        and a product that reads as compliant under one measurement can
        read differently under the other. If your destination market uses
        a total-THC standard and your CoA only reports Delta-9, you don't
        actually have documentation of compliance for that market — you
        have documentation of a different, easier-to-pass standard.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Contaminant screening, not just potency</h2>
      <p>
        Cannabinoid potency numbers get the most attention because they're
        the headline figures, but a thorough CoA should also cover
        contaminant screening — pesticide residue, heavy metals, microbial
        contamination (mold, bacteria), and residual solvents for extracted
        products. A CoA that only reports cannabinoid content and skips
        contaminant screening entirely is incomplete for most commercial
        purposes, particularly for anything destined for ingestible or
        pharmaceutical-adjacent use.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">A practical checklist</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Independent, accredited lab — not in-house.</li>
        <li>Batch number matches your actual shipment, not a reference sample.</li>
        <li>Delta-9 THC or total THC clearly specified, matched to your destination market's standard.</li>
        <li>Contaminant screening included — pesticides, heavy metals, microbials, residual solvents where relevant.</li>
        <li>Testing date recent enough to be meaningful — cannabinoid content can degrade over time, so a CoA from a year-old test on a fresh batch is worth questioning.</li>
      </ul>

      <p>
        None of this is about distrust by default — most established
        suppliers produce genuine, batch-specific documentation as standard
        practice. It's about knowing what to actually verify rather than
        treating the presence of any CoA as equivalent proof, since the gap
        between a real batch-specific CoA and a recycled reference document
        is exactly where quality and compliance problems slip through.
      </p>
    </ArticleLayout>
  );
}
