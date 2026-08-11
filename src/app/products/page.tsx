import type { Metadata } from "next";
import ProductsPage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "Products | GACP-Certified Cannabis, Hemp, Construction & HVAC",
  description:
    "Explore Global Green Export's five product verticals: GACP-certified whole flower and extracts, CBD/CBG/CBN hemp derivatives, construction materials, CE-certified appliances, and tropical-rated HVAC equipment.",
  alternates: {
    canonical: `${SITE_URL}/products/`,
  },
  openGraph: {
    title: "GACP-Certified Cannabis & Hemp Products | Global Green Export",
    description:
      "Premium whole flower, full-spectrum extracts, and pharmaceutical-grade isolates, verified with Certificate of Analysis and GACP documentation.",
    url: `${SITE_URL}/products/`,
  },
};

export default function Page() {
  return <ProductsPage />;
}
