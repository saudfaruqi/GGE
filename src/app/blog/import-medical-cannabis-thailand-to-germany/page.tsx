// src/app/blog/import-medical-cannabis-thailand-to-germany/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("import-medical-cannabis-thailand-to-germany")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://www.globalgreenexport.com/blog/${post.slug}`,
    type: "article",
  },
};

const H2 = "font-display text-[28px] text-[var(--ink)] mt-12 mb-2";

export default function Page() {
  return (
    <ArticleLayout post={post}>
      <p>
        Germany is the largest legal medical cannabis market in Europe, and since the 2024
        reform it has been governed by its own Medicinal Cannabis Act (Medizinal-Cannabisgesetz,
        MedCanG) rather than sitting inside the general narcotics framework. That change made
        the market easier to discuss publicly — but it did not make importing any less
        controlled. Importing medical cannabis into Germany remains a licensed activity with
        pharmaceutical-grade obligations on both sides of the transaction.
      </p>
      <p>
        This guide is written for buyers evaluating a Thai supplier, and for suppliers
        preparing documentation for a German import. It is a practical overview, not legal
        advice — see the caveat at the end.
      </p>

      <h2 className={H2}>Who is allowed to import</h2>
      <p>
        The operator importing into Germany needs authorisation from the Federal Institute for
        Drugs and Medical Devices (BfArM). Under MedCanG, working with medical cannabis requires
        a permit under §4, and each individual import or export additionally requires a BfArM
        authorisation under §§12 and 14. The procedural rules sit in the
        Betäubungsmittel-Außenhandelsverordnung (BtMAHV).
      </p>
      <p>
        In practice, that means the German buyer is a licensed participant in the medical
        cannabis supply chain — a manufacturer, wholesaler or pharmacy grouping with the relevant
        BfArM permits. If a prospective buyer cannot point to that authorisation, the
        transaction is not one that can lawfully complete, regardless of what the Thai side can
        supply.
      </p>

      <h2 className={H2}>The part most Thai suppliers miss: flowers are a pharmaceutical</h2>
      <p>
        Flowers destined for the German market are treated as a finished medicinal product. That
        has a specific consequence that catches out a lot of otherwise well-run Thai operations:
        post-harvest processing — including drying — is a critical manufacturing step, and
        German supervisory authorities have been explicit that it is expected to happen under
        GMP, not just GACP, conditions.
      </p>
      <p>
        GACP governs agricultural practice at the farm. It does not cover the controlled drying,
        trimming and processing that produces a specification-compliant medicinal product. A
        shipment can be backed by a perfectly valid GACP certificate at the cultivation site and
        still fail German quality review because the processing steps were treated as an
        agricultural afterthought. For flower specifically, plan the dried-and-trimmed step as
        GMP manufacturing, with the parameters documented as critical process parameters.
      </p>

      <h2 className={H2}>Documentation a German importer will expect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The cultivation site&apos;s GACP certification, issued in the name of the actual supplying site.</li>
        <li>Evidence of GMP-compliant processing for the post-harvest and manufacturing steps — not GACP alone.</li>
        <li>A batch-specific Certificate of Analysis from an accredited laboratory, covering cannabinoid content, microbial contamination, heavy metals and mycotoxins.</li>
        <li>Mycotoxin testing on the input material as well as the finished product — aflatoxins can concentrate during extraction depending on the solvent used.</li>
        <li>Pharmaceutical import documentation where the buyer is bringing material in under §72 AMG, with a §72a certificate tied to each foreign supplier site.</li>
        <li>Certificate of origin and, for the botanical material, phytosanitary certification.</li>
      </ul>
      <p>
        A supplier that treats the German requirements as &quot;GACP plus a lab report&quot;
        will be unpleasantly surprised at the first quality review. The documentation set is
        broader than the certification badge suggests.
      </p>

      <h2 className={H2}>Product forms and where the difficulty sits</h2>
      <p>
        Extracts, distillates and isolates avoid some of the flower-specific drying problem,
        because the processing is unambiguously manufacturing and is expected to be GMP-certified
        already. But they carry their own burden: solvent-residue limits, consistency across
        batches, and stability data. Isolates are the most standardised, which is why they are
        often the entry point for a first German trial order.
      </p>
      <p>
        See our <Link href="/cannabis-export">cannabis export vertical</Link> for the product
        forms we source and the documentation that ships with each.
      </p>

      <h2 className={H2}>A practical checklist before you commit</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Confirm the German buyer holds the relevant BfArM authorisation before commercial terms are agreed.</li>
        <li>Confirm whether the product is flower or extract, and whether the processing site is GMP-certified.</li>
        <li>Request the batch CoA and check the laboratory is accredited (ISO/IEC 17025 or equivalent).</li>
        <li>Confirm mycotoxin and heavy-metal testing is on the finished product, not just the raw material.</li>
        <li>Agree who produces the §72a documentation and who engages the BfArM consultant.</li>
        <li>Settle on escrow terms so neither side carries counterparty risk on a first shipment.</li>
      </ul>

      <h2 className={H2}>Timelines and expectations</h2>
      <p>
        Licensed import routes into Germany are documented and predictable, but they are not
        fast. Authorisation, documentation review and lab verification run in sequence, so a
        first shipment from a new source typically takes longer than a repeat order. Budget the
        paperwork time as seriously as the shipping time. Our{" "}
        <Link href="/export-to-germany">Germany market page</Link> covers how we sequence this
        for buyers.
      </p>

      <p>
        The short version: Germany is a genuine, well-regulated market with real demand, but the
        barrier is documentation depth, not price. Suppliers who understand that flowers are a
        pharmaceutical — and who can produce a GMP processing record to match — are the ones
        who clear the review.
      </p>
      <p className="text-[13px] text-[var(--text-40)]">
        This article is general information, not legal or import-compliance advice. Requirements
        change and are interpreted case by case — confirm current obligations with your own
        importer, a BfArM-experienced consultant or legal counsel before committing to an order.
      </p>
    </ArticleLayout>
  );
}
