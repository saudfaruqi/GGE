// src/app/terms/page.tsx
import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { SITE, SITE_URL } from "@/lib/site";

const TITLE = "Terms of Use";
const UPDATED = "October 2026";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "The terms governing use of the Global Green Export website and information published on it.",
  alternates: { canonical: "/terms" },
  openGraph: { title: TITLE, url: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={TITLE}
      updated={UPDATED}
      intro={`These terms govern your use of this website, operated by ${SITE.name}. By using the site you accept them.`}
      sections={[
        {
          heading: "Website information",
          body: (
            <p>
              Content on this site — including product descriptions, specifications, market
              information and compliance notes — is provided for general information. It is not
              legal, import-compliance or professional advice, and it does not form part of any
              contract.
            </p>
          ),
        },
        {
          heading: "Regulated products",
          body: (
            <p>
              Cannabis and hemp products are regulated in most jurisdictions. We supply such
              products only to buyers who hold, or are actively securing, the import authorization
              required in their own destination market. Securing that authorization is the
              buyer&apos;s responsibility.
            </p>
          ),
        },
        {
          heading: "Quotations and orders",
          body: (
            <p>
              Any pricing or feasibility indication is preliminary and subject to confirmation in
              writing. Where applicable, transactions are settled through third-party escrow on the
              terms agreed between the parties.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The content and design of this site are owned by {SITE.name} or its licensors and may
              not be reproduced without permission.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, we are not liable for any loss arising from reliance
              on information published on this site.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms? Email{" "}
              <a href={`mailto:${SITE.email.general}`} className="text-signal hover:underline">
                {SITE.email.general}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
