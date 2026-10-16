// src/app/blog/thailand-cannabis-export-digital-filing-dtam-nsw/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("thailand-cannabis-export-digital-filing-dtam-nsw")!;

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
        For anyone who has actually filed a Thai cannabis export shipment,
        the paperwork was the bottleneck — not the growing, not the
        testing, the filing. Thailand's cumulative controlled-herbal-product
        export value has reportedly crossed 2.5 billion baht, with total
        recorded export volume around 201,658 kilograms, and that growth
        has been running into a manual documentation process that wasn't
        built for the volume. In 2026, Thailand started fixing that by
        connecting two government systems that used to operate separately.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">What changed</h2>
      <p>
        The core update links the Department of Thai Traditional and
        Alternative Medicine's digital system — known as DTAM Next — directly
        to the Customs Department's National Single Window (NSW). Previously,
        exporting a controlled herbal shipment required in-person filing and
        physical authorization at multiple points before customs would
        process the shipment. Under the connected pipeline, exporters submit
        the mandatory Por Thor 32 form — which records the operational and
        chemical data customs needs — directly through the DTAM Next
        interface, and the system automatically routes that documentation
        into the NSW database for customs clearance, rather than requiring
        a separate manual submission at the customs stage.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Why this matters for buyers, not just exporters</h2>
      <p>
        This is easy to read as a back-office process change, but it has a
        direct effect on buyer experience: fewer manual handoffs means
        fewer points where a shipment can get stuck waiting on a physical
        signature or a paperwork mismatch between what the exporter filed
        and what customs has on record. For buyers used to Thai cannabis
        export timelines running long on documentation delays rather than
        production delays, a digitized, single-source filing pipeline is
        the kind of infrastructure change that should show up as more
        predictable shipment timing over time — though it's still early,
        and predictability tends to improve gradually as exporters and
        customs staff adapt to a new system rather than immediately on
        rollout.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">The bigger regulatory context</h2>
      <p>
        This digital filing update lands alongside a broader shift in
        Thailand's cannabis regulatory posture. A draft Cannabis and Hemp
        Act, expected to reach Cabinet review, is set to keep flower more
        tightly controlled for medical and scientific use — reinforcing a
        trend already visible in export data, where value is shifting
        toward licensed, standards-compliant extraction rather than raw
        flower. Digitizing the export filing process fits that direction:
        it's infrastructure built for an industry regulators expect to
        formalize further, not loosen.
      </p>
      <p>
        For exporters, each granted extract-export license effectively
        pulls investment in equipment, technical talent, and active
        pharmaceutical ingredient (API) sourcing behind it — meaning the
        licensed, compliant side of the industry is where operational
        capability is concentrating, and where the digital filing
        infrastructure is being built to serve.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">What to ask your supplier now</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Whether they're filing through the DTAM Next → NSW pipeline for your shipment, or still on the legacy manual process.</li>
        <li>What their typical documentation-to-clearance timeline has looked like on recent shipments, now that the digital pipeline has had time to bed in.</li>
        <li>Whether the Por Thor 32 filing for your specific shipment has been submitted and where it sits in the pipeline before you finalize logistics on your end.</li>
      </ul>

      <p>
        Infrastructure changes like this rarely make headlines outside
        trade press, but for anyone actually moving product through
        Thailand's export system, this is one of the more consequential
        operational updates of the year — worth asking your supplier about
        directly rather than assuming it doesn't affect your timeline.
      </p>
    </ArticleLayout>
  );
}
