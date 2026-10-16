// src/app/blog/thailand-cannabis-export-license-guide/page.tsx
import type { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("thailand-cannabis-export-license-guide")!;

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
        Thailand's path to legal cannabis export is real, but it's also
        narrower than the volume of "Thai cannabis exporter" listings
        online would suggest. Understanding how licensing actually works —
        and how few companies currently hold the license that matters most
        — is the single most useful thing a buyer can do before signing a
        purchase agreement.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Two different regulatory tracks</h2>
      <p>
        Thailand treats cannabis and hemp on separate regulatory tracks
        depending on THC content. Low-THC hemp products (broadly, under the
        0.2% national threshold used for hemp classification) sit in a much
        more open commercial framework — Thailand was the first Asian
        country to allow cultivation, extraction, and commercial use of
        hemp-derived CBD, and that market has scaled quickly with domestic
        and export sales. High-THC cannabis and cannabis extracts,
        classified as a controlled Category 5 narcotic once THC exceeds
        that threshold, sit under a far tighter licensing regime run by the
        Thai FDA's Narcotics Control Division.
      </p>
      <p>
        This distinction matters enormously for buyers: a supplier's hemp
        licensing status tells you nothing about whether they're also
        licensed to export high-THC extract, and vice versa. Ask which
        specific license applies to the specific product and THC
        concentration you're buying.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">How concentrated the extract-export license landscape is</h2>
      <p>
        As of early 2026, industry reporting put the total number of
        licenses granted specifically for high-THC cannabis extract export
        from Thailand at four — three private companies and one
        university-affiliated holder. That's a small enough number that a
        genuine license holder should be easy to verify, and a supplier
        claiming extract-export capability who can't produce a license
        number that traces back to one of the handful of actual holders is
        a red flag worth investigating before you wire anything.
      </p>
      <p>
        This concentration is partly explained by how the market developed:
        most operators who entered early built for flower cultivation and
        the domestic dispensary market, where the licensing path was
        comparatively well-trodden. Extract-specific export licensing came
        later and requires a different, more demanding compliance build —
        which is why supply of licensed extract exporters lags well behind
        the number of companies selling extract-adjacent products
        domestically.
      </p>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">What to actually verify</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The specific export license number, issued by the Thai FDA, covering the exact product category (flower vs. extract vs. isolate) you're purchasing.</li>
        <li>Whether the license covers your destination country specifically — Thai export authorization is necessary but not sufficient; your jurisdiction's import authorization is a separate requirement the buyer typically has to secure independently.</li>
        <li>Confirmation the license is current — Thailand's regulatory framework here has moved quickly (a draft Cannabis and Hemp Act has been progressing through Cabinet review), and licensing terms have shifted as the framework has tightened around medical and scientific use.</li>
      </ul>

      <h2 className="font-display text-[28px] text-[var(--ink)] mt-12 mb-2">Where the regulation is heading</h2>
      <p>
        The regulatory direction in Thailand has been toward tighter control
        of flower specifically for medical and scientific use, which is
        pushing value in the industry toward licensed, standards-compliant
        extraction rather than raw flower export. For buyers, that trend
        favors working with suppliers who already hold — or are actively
        pursuing — extract-specific licensing rather than suppliers whose
        compliance story is built entirely around flower-stage
        certifications like GACP.
      </p>
      <p>
        The practical takeaway: don't treat "Thai FDA licensed" as a single
        checkbox. Ask which license, for which product category, verified
        against which specific entity name — and confirm it covers exactly
        what you're buying before you move past the sample stage.
      </p>
    </ArticleLayout>
  );
}
