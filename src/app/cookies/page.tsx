// src/app/cookies/page.tsx
import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { SITE, SITE_URL } from "@/lib/site";

const TITLE = "Cookie Policy";
const UPDATED = "October 2026";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "How Global Green Export uses cookies and similar technologies on this website.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: TITLE, url: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title={TITLE}
      updated={UPDATED}
      intro="This policy explains how we use cookies and similar technologies, and how you can control them."
      sections={[
        {
          heading: "What cookies we use",
          body: (
            <p>
              We use essential cookies and local storage required for the site to function — for
              example, to remember your cookie preference. If analytics are enabled, they are used
              only with your consent and are intended to help us understand aggregate site usage.
            </p>
          ),
        },
        {
          heading: "Managing cookies",
          body: (
            <p>
              You can accept or decline non-essential cookies using the banner shown on your first
              visit, and you can clear cookies or block them entirely through your browser
              settings. Blocking essential cookies may affect how parts of the site work.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy? Email{" "}
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
