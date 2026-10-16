// src/app/blog/import-medical-cannabis-thailand-to-uk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("import-medical-cannabis-thailand-to-uk")!;

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
        The UK has permitted specialist medical cannabis prescribing since 2018, but it is a
        closed, licence-gated channel rather than an open commercial market. If you are a Thai
        supplier evaluating a UK opportunity, or a UK buyer looking at Thailand as a source, the
        single most important thing to understand is who is allowed to do what — because the
        answer determines whether a shipment can lawfully happen at all.
      </p>

      <h2 className={H2}>The UK side has to be licensed</h2>
      <p>
        Under the Misuse of Drugs Regulations 2001, cannabis and cannabis-based products for
        medicinal use in humans (CBPMs) are controlled. Cannabis itself sits in Schedule 1;
        CBPMs that meet the statutory definition were moved into Schedule 2 from November 2018.
        Importing, exporting, possessing, producing or supplying these materials requires a Home
        Office licence, with limited exemptions.
      </p>
      <p>
        A lawful import into the UK is done by a <strong>Specialist Importer</strong> holding a
        Home Office import licence and a domestic licence, together with the appropriate MHRA
        licence. Depending on where the product originates, that MHRA licence is either a
        Wholesale Dealer&apos;s Licence (WDA(H)) or a Manufacturer&apos;s (Specials) Licence. A
        Thai supplier cannot ship directly to a UK clinic or pharmacy; the regulated flow runs
        through a licensed importer.
      </p>

      <h2 className={H2}>How the UK import licences work in practice</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Import licences are applied for through the Home Office online licensing system and require an NDS (National Drugs Service) account.</li>
        <li>Import licences are single-use, per shipment, and valid for three months.</li>
        <li>A new licence is needed for each shipment — you cannot hold the unused part of a licence for a later date.</li>
        <li>Overseas trading partners and product preparations are registered in advance, which adds a step before the first shipment.</li>
        <li>Endorsement of the actual shipped quantity is a condition of the licence.</li>
      </ul>

      <h2 className={H2}>The MHRA notification</h2>
      <p>
        Before an unlicensed CBPM can be imported, the Specialist Importer must notify the MHRA
        of the intention to import, and the MHRA must not object. This is a real gate, not a
        formality — the MHRA may ask for the product&apos;s THC/CBD content, a Certificate of
        Analysis supporting the batch specification, and a valid GMP certificate for the site of
        manufacture. Notifications and Home Office licence applications can run in parallel, but
        the import happens only once both sides are satisfied.
      </p>

      <h2 className={H2}>What the UK importer will ask a Thai supplier for</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>A batch-specific Certificate of Analysis from an accredited laboratory, stating THC/CBD content.</li>
        <li>A valid GMP certificate for the manufacturing site.</li>
        <li>Confirmation of the product&apos;s composition and specification, to support the MHRA notification.</li>
        <li>Documentation connecting the shipment to the specific batch and manufacturing site.</li>
      </ul>
      <p>
        The GMP requirement is the one that most often catches out flower-focused suppliers.
        If the manufacturing site backing your product is not GMP-certified, the UK route stalls
        at the notification stage. It is worth confirming before any commercial terms are agreed.
      </p>

      <h2 className={H2}>Prescribing is a separate, restricted channel</h2>
      <p>
        Even with a lawful import, supply on the UK side is restricted. For unlicensed CBPMs,
        prescribing is limited to doctors on the GMC Specialist Register. Supply runs to
        pharmacy or dispensing doctor against that prescription. This is why the UK medical
        cannabis market is sized by specialist clinic capacity rather than by general demand —
        and why a supplier&apos;s realistic route in is through an established importer with
        clinic relationships.
      </p>

      <h2 className={H2}>Do not confuse this with CBD</h2>
      <p>
        Hemp-derived CBD follows a different track entirely. A product meeting the
        &quot;exempt product&quot; definition under the 2001 Regulations is not subject to the
        same prohibitions, and ingestible CBD sits under the UK&apos;s novel food framework
        rather than controlled-drug licensing. That pathway is more accessible, but it has its
        own THC and product-form rules. Our{" "}
        <Link href="/blog/hemp-derivative-import-compliance-eu-us">EU vs US compliance guide</Link>{" "}
        and the <Link href="/hemp-export">hemp derivatives vertical</Link> cover that side.
      </p>

      <h2 className={H2}>Practical guidance</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Confirm the UK counterparty holds a Home Office import and domestic licence plus the required MHRA licence before agreeing terms.</li>
        <li>Have the batch CoA and the site&apos;s GMP certificate ready to support the MHRA notification.</li>
        <li>Expect per-shipment licensing and plan lead times around licence processing and the MHRA window, not just freight.</li>
        <li>Use escrow on a first transaction so neither side carries counterparty risk.</li>
      </ul>

      <p>
        The UK is a legitimate market with genuine specialist demand, but it is one of the more
        tightly licensed routes in Europe. Suppliers who can produce GMP-backed, batch-specific
        documentation clear it comfortably; those who lead with cultivation certification alone
        tend to stall at the MHRA stage. Our <Link href="/export-to-uk">UK market page</Link> sets
        out how we sequence documentation for licensed importers.
      </p>
      <p className="text-[13px] text-[var(--text-40)]">
        This article is general information, not legal or import-compliance advice. UK licensing
        requirements change and are assessed case by case — confirm current obligations with your
        importer or legal counsel before committing to an order.
      </p>
    </ArticleLayout>
  );
}
