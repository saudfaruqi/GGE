// src/app/blog/choosing-gacp-cannabis-supplier-thailand-checklist/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("choosing-gacp-cannabis-supplier-thailand-checklist")!;

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
        Thailand has more suppliers claiming GACP certification than it has farms that can
        actually evidence it at the site level. For a buyer sourcing regulated cannabis from
        Thailand for the first time, the difference between a smooth import and a held shipment
        usually comes down to how carefully that claim was vetted before money moved. This is a
        practical due-diligence checklist you can run in a single call.
      </p>
      <p>
        If you want the background on what the standard actually covers, read our{" "}
        <Link href="/blog/gacp-certification-explained">GACP certification explainer</Link>{" "}
        first. This post assumes you know that GACP governs the farm, not the factory.
      </p>

      <h2 className={H2}>1. The certificate is in the right name</h2>
      <p>
        GACP certification is typically site-specific. Ask for the certificate issued in the
        name of the actual cultivation site supplying your batch — not a parent company, not an
        affiliate, not a &quot;group&quot; certificate. A supplier that demurs on this is
        usually working through a different farm than the one on the paperwork.
      </p>

      <h2 className={H2}>2. The certifying body is named and the number is verifiable</h2>
      <p>
        A certificate without a named certification body and a traceable number is decoration.
        Genuine certificates can be verified with the issuing body, and a competent supplier will
        expect you to check.
      </p>

      <h2 className={H2}>3. The scope is cultivation, and you know who does the processing</h2>
      <p>
        GACP covers growing, harvesting and initial handling. If your order is extract, distillate
        or isolate, the certification that matters for the finished product is the processing
        facility&apos;s GMP (or equivalent) status. Ask separately, and get a straight answer.
      </p>

      <h2 className={H2}>4. The CoA is batch-specific, not a sample</h2>
      <p>
        The single most common shortcut is a reference CoA from a prior harvest. Insist on a
        Certificate of Analysis for your specific batch, and check the batch number on the CoA
        matches the batch that ships. See our{" "}
        <Link href="/blog/certificate-of-analysis-what-to-check">guide to reading a CoA</Link>{" "}
        for what to look at.
      </p>

      <h2 className={H2}>5. The lab is accredited</h2>
      <p>
        The CoA is only as good as the lab behind it. Confirm the testing laboratory holds an
        accreditation such as ISO/IEC 17025 for the methods used. An unaccredited lab report is
        not a substitute for an accredited one, however tidy it looks.
      </p>

      <h2 className={H2}>6. The panel covers contaminants, not just cannabinoids</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Cannabinoid profile, including THC where relevant to the destination market.</li>
        <li>Pesticides — ideally a panel appropriate to the destination&apos;s rules.</li>
        <li>Heavy metals.</li>
        <li>Microbial contamination (total aerobic count, yeast and mould, and specified pathogens).</li>
        <li>Mycotoxins — aflatoxins in particular, especially for extract production.</li>
        <li>Residual solvents, for extracts and isolates.</li>
      </ul>
      <p>
        A CoA that shows cannabinoids but nothing else is a marketing document, not a quality
        document.
      </p>

      <h2 className={H2}>7. Traceability is real</h2>
      <p>
        Ask for the harvest date, the batch identifier and the chain from cultivation through to
        packaging. If the supplier cannot connect a specific shipment back to a specific
        cultivation batch, the documentation will not survive a destination-side review.
      </p>

      <h2 className={H2}>8. Storage and transport are addressed</h2>
      <p>
        For flower, how the product is dried, stored and transported before export materially
        affects whether it still meets specification on arrival. Ask what the storage conditions
        are, and how the product is kept within them. For Germany specifically, the drying step
        itself is treated as a manufacturing step — covered in our{" "}
        <Link href="/blog/import-medical-cannabis-thailand-to-germany">Germany import guide</Link>.
      </p>

      <h2 className={H2}>9. Phytosanitary and origin paperwork are routine, not special requests</h2>
      <p>
        A serious supplier produces certificates of origin and, where relevant, phytosanitary
        certification as a matter of course. If these feel like a favour, that tells you how the
        rest of the documentation will go.
      </p>

      <h2 className={H2}>10. Samples come with documentation</h2>
      <p>
        A sample that arrives without its CoA is of limited use. The point of a sample order is
        to verify quality <em>and</em> paperwork before committing to volume — both should arrive
        together.
      </p>

      <h2 className={H2}>11. Escrow is offered, not avoided</h2>
      <p>
        A first cross-border trade is where counterparty risk is highest. A supplier willing to
        settle through neutral escrow is signalling confidence in the goods and the paperwork.
        Reluctance to use escrow on a first order is worth weighing carefully — see how{" "}
        <Link href="/escrow">escrow-protected settlement</Link> works.
      </p>

      <h2 className={H2}>12. The import responsibility is stated honestly</h2>
      <p>
        A trustworthy supplier will be clear that securing import authorisation in your
        jurisdiction is your responsibility, and will supply the documentation to support that
        process — rather than implying their Thai export licence is sufficient for legal import
        anywhere else.
      </p>

      <h2 className={H2}>Red flags, in one glance</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>A GACP certificate that cannot be traced to a named site.</li>
        <li>A generic or reused CoA.</li>
        <li>Vagueness about who owns the processing step.</li>
        <li>Prices far below market for a claimed-pure product.</li>
        <li>Resistance to escrow on a first transaction.</li>
        <li>Claims that the supplier&apos;s export licence removes your import obligations.</li>
      </ul>

      <p>
        The underlying point is simple: regulated sourcing rewards verification. A supplier who
        welcomes this checklist is the one you want; a supplier who finds it inconvenient is
        telling you something. Our <Link href="/cannabis-export">cannabis vertical</Link> sets
        out how we answer each of these points on a live enquiry.
      </p>
      <p className="text-[13px] text-[var(--text-40)]">
        This article is general information, not legal or import-compliance advice. Confirm
        current requirements with your own customs broker or legal counsel before committing to
        an order.
      </p>
    </ArticleLayout>
  );
}
