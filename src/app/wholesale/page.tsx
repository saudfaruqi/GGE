import type { Metadata } from "next";
import WholesalePage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "Wholesale | Bulk Cannabis & Hemp Supply from Thailand",
  description:
    "Wholesale cannabis, hemp extracts, and research-grade material from GACP-certified Thai producers. Container-load and bulk pricing with full import-licence and documentation requirements outlined.",
  alternates: {
    canonical: `${SITE_URL}/wholesale/`,
  },
  openGraph: {
    title: "Wholesale Cannabis & Hemp Supply | Global Green Export",
    description:
      "Bulk whole flower, extracts & oils, research-grade material, and hemp products sourced from GACP-certified Thai cultivators.",
    url: `${SITE_URL}/wholesale/`,
  },
};

export default function Page() {
  return <WholesalePage />;
}
