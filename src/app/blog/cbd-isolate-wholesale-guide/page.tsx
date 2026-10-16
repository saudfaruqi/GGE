// src/app/blog/cbd-isolate-wholesale-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("cbd-isolate-wholesale-guide")!;

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
        CBD isolate is the most standardised hemp derivative you can buy in bulk, which is
        exactly why it is a good entry point for a brand building its own product line — and
        exactly why it is also the format most vulnerable to quietly substandard supply. This
        guide covers what the current wholesale market looks like, what you should pay, and the
        handful of checks that separate compliant material from the rest.
      </p>

      <h2 className={H2}>What you are actually buying</h2>
      <p>
        CBD isolate is crystalline cannabidiol at high purity — commonly quoted at 98–99.5% CBD —
        with other cannabinoids, and THC in particular, either absent or below the reporting
        limit. It has no taste and no aroma, which makes it the format of choice when you need
        precise dosing and you do not want the product&apos;s carrier to influence your
        formulation. Oils, cosmetics, edibles and vape liquids are all typical downstream uses.
      </p>

      <h2 className={H2}>What wholesale pricing looks like</h2>
      <p>
        Isolate is priced per kilogram on a sliding scale, and the quoted price depends heavily
        on volume, purity and origin. As a rough 2026 picture across European wholesale lists:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Entry volumes (around 1 kg): roughly €300–€450 per kg for standard 99% isolate.</li>
        <li>Mid volumes (10 kg): trending toward €200–€300 per kg.</li>
        <li>Larger volumes (50 kg+): commonly in the €180–€280 per kg range.</li>
      </ul>
      <p>
        Two caveats matter more than the headline number. First, EU-origin isolate is often
        quoted at a substantial premium to US- or other-origin material — sometimes several
        times higher — because of the certification and traceability attached to it. Second,
        prices below the prevailing range are a signal, not a bargain: they usually point to
        lower purity, contamination, or documentation shortcuts. Confirm current pricing for
        your volume and origin before budgeting.
      </p>

      <h2 className={H2}>Minimum order quantities</h2>
      <p>
        Most wholesale suppliers start at 1 kg, with clear volume tiers at 5 kg, 10 kg, 25 kg
        and 50 kg. If a supplier will not sell below a full container load, or will not sell
        small quantities at all, it may not be structured for brand-stage buyers. Our{" "}
        <Link href="/hemp-export">hemp derivatives vertical</Link> starts at 500 g per isolate
        precisely so you can verify a batch before scaling.
      </p>

      <h2 className={H2}>The checks that actually protect you</h2>
      <p>
        A Certificate of Analysis is table stakes — the question is what is on it and who issued
        it. For isolate specifically, look for:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Cannabinoid assay confirming purity, stated to a decimal place, with the test method named.</li>
        <li>THC reported as non-detect (ND) or below a clearly stated limit of quantification.</li>
        <li>Residual solvents, held to pharmaceutical limits.</li>
        <li>Heavy metals, pesticides and microbial contamination.</li>
        <li>A testing laboratory accredited to ISO/IEC 17025 for the methods used.</li>
        <li>A batch number that will match the material actually shipped.</li>
      </ul>

      <h2 className={H2}>Novel Food: the compliance question for anything ingestible</h2>
      <p>
        If the isolate will end up in a product intended to be eaten or swallowed, the regulatory
        framing changes. In the EU, CBD is treated as a novel food, and products intended for
        consumption require novel-food authorisation in most markets. EFSA has set a provisional
        safe intake level for adults of 0.0275 mg of CBD per kilogram of body weight per day —
        roughly 2 mg/day for a 70 kg adult — and that provisional level applies only to
        formulations with a purity of at least 98%, without nanoparticles, and with the
        production process assessed as safe.
      </p>
      <p>
        That is a low ceiling, and it is the reason a supplier&apos;s compliance story matters as
        much as the powder&apos;s purity. For topical and cosmetic use the framework is
        different again (EU Cosmetic Regulation rather than Novel Food), and for the US the THC
        threshold and state-by-state rules add another layer. Our{" "}
        <Link href="/blog/hemp-derivative-import-compliance-eu-us">EU vs US compliance guide</Link>{" "}
        covers those differences.
      </p>

      <h2 className={H2}>Origin and the EU-purity trade-off</h2>
      <p>
        Much of the global isolate supply is US- or Colorado-origin, which tends to be the most
        competitively priced. EU-origin material — including Thai-origin and EU-certified-hemp
        derived stock — can command a premium, but comes with different traceability and
        regulatory positioning. Which is right for you depends entirely on your destination
        market and your finished-product claims. Buy the origin your label can defend.
      </p>

      <h2 className={H2}>A short pre-purchase checklist</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Decide your origin based on the destination market, not just price.</li>
        <li>Request a batch-specific CoA from an accredited lab and read the THC line.</li>
        <li>Confirm the purity meets the threshold your market requires.</li>
        <li>Establish whether your finished product is a novel-food product and what that requires.</li>
        <li>Order a small verification quantity before committing to volume.</li>
        <li>Use escrow on the first transaction.</li>
      </ul>

      <p>
        Isolate is a commodity with a wide quality spread. The buyers who avoid trouble are the
        ones who treat the CoA, the lab accreditation and the destination rules as part of the
        product — because they are.
      </p>
      <p className="text-[13px] text-[var(--text-40)]">
        This article is general information, not legal or regulatory advice. Pricing moves
        constantly and novel-food rules are actively changing — verify current figures and
        requirements before committing to an order.
      </p>
    </ArticleLayout>
  );
}
