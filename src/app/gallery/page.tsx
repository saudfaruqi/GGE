import type { Metadata } from "next";
import GalleryPage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "Gallery | Inside Our Thailand Export Supply Chain",
  description:
    "A look inside Global Green Export's Bangkok operations — cultivation, lab verification, documentation, and logistics behind every GACP-certified cannabis and hemp shipment.",
  alternates: {
    canonical: `${SITE_URL}/gallery/`,
  },
  openGraph: {
    title: "Gallery | Global Green Export",
    description:
      "Inside the supply chain: cultivation, verification, and logistics behind every shipment from Thailand.",
    url: `${SITE_URL}/gallery/`,
  },
};

export default function Page() {
  return <GalleryPage />;
}
