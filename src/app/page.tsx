// src/app/page.tsx
import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { SITE_URL } from "@/lib/site";

const TITLE =
  "Global Green Export — GACP Cannabis, Hemp & Industrial Export from Thailand";
const DESCRIPTION =
  "Thai FDA-licensed export house in Bangkok. GACP-certified cannabis and hemp derivatives, plus construction materials, appliances and HVAC — escrow-settled and documented at every stage.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <HomeContent />;
}
