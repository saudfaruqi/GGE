// src/app/blog/gacp-certification-explained/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("gacp-certification-explained")!;

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
        "GACP-certified" shows up on nearly every Thai cannabis and hemp
        supplier's homepage, usually sitting next to a certificate logo and
        not much else. For a buyer evaluating suppliers, that's not enough
        to act on. GACP is a real, meaningful standard — but it certifies a
        narrower slice of the supply chain than most listings imply, and
        knowing exactly what it does and doesn't cover is the difference
        between a smooth import and a shipment that gets held at customs
        because the paperwork doesn't match the claim.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">What GACP actually stands for</h2>
      <p>
        GACP stands for Good Agricultural and Collection Practices. It's a
        World Health Organization framework, originally built for medicinal
        plants generally, that sets standards for how a crop is grown,
        harvested, and handled before processing — site selection, seed and
        propagation material quality, cultivation conditions, harvest
        timing, and post-harvest handling like drying and storage. For
        cannabis specifically, it's become the baseline standard regulators
        and buyers point to when they want assurance that a farm's
        agricultural practices meet a pharmaceutical-grade floor, even
        before the plant material is processed into anything.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">What it doesn't cover — and why that matters</h2>
      <p>
        This is the part that trips buyers up. GACP governs the field, not
        the factory. It doesn't certify extraction processes, isolate
        purity, or finished-product manufacturing — that's a separate
        standard, GMP (Good Manufacturing Practice), which applies once raw
        material moves into processing. A supplier can be fully GACP
        compliant on cultivation and still have no GMP certification for
        the extraction facility turning that flower into distillate or
        isolate. If your order is extracts, isolates, or any processed
        product rather than raw flower, GACP on its own tells you the input
        material met an agricultural standard — it says nothing about
        whether the processing that turned it into your actual product did.
      </p>
      <p>
        Ask directly which standard applies to which stage of your specific
        order, and ask for the GACP certificate to be issued in the name of
        the actual cultivation site supplying your batch — not a parent
        company or an affiliated but different farm. Certification is
        typically site-specific, not brand-wide.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Documentation to request before you commit</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The GACP certificate itself, with the certifying body named and a verifiable certificate number.</li>
        <li>A Certificate of Analysis (CoA) for the specific batch you're buying — not a generic reference CoA from a previous harvest.</li>
        <li>If your order includes extracts or isolates, separate confirmation of the processing facility's GMP status (or equivalent), since GACP doesn't extend to that stage.</li>
        <li>Certificate of origin and, where the destination requires it, phytosanitary certification for the raw botanical material.</li>
      </ul>
      <p>
        A supplier that can produce all four without hesitation is
        operating the way the "GACP certified" claim implies. One that can
        only produce the GACP certificate and gets vague about the rest is
        worth a closer look before you commit volume.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Why this matters more for Thailand specifically</h2>
      <p>
        Thailand's cannabis export framework is still young relative to
        established medical-cannabis exporters, and the number of farms
        with genuine, verifiable GACP registration is smaller than the
        volume of suppliers claiming it. Industry reporting on the sector
        has noted that few Thai operations have actually secured EU-GACP
        registration specifically — the stricter variant relevant to buyers
        targeting European markets — despite it being widely referenced in
        marketing. If your destination market is the EU, confirm which
        GACP variant applies (national Thai standard vs. EU-GACP) rather
        than assuming they're interchangeable.
      </p>

      <p>
        The short version: GACP is a real, useful signal, but it's a
        floor for cultivation, not a ceiling for the whole supply chain.
        Treat it as one line item in a documentation checklist, not the
        whole checklist.
      </p>
    </ArticleLayout>
  );
}
