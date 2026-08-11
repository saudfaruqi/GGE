import type { Metadata } from "next";
import AboutPage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "About Us | Thailand's FDA-Licensed Cannabis & Hemp Export House",
  description:
    "Global Green Export is a Bangkok-based, Thai FDA-licensed export house covering five verticals — GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC — with escrow-protected trade to 30+ countries.",
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title: "About Global Green Export | One Partner, Five Verticals, Global Reach",
    description:
      "Bangkok-based, Thai FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment.",
    url: `${SITE_URL}/about/`,
  },
};

export default function Page() {
  return <AboutPage />;
}
