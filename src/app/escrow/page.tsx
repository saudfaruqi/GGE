import type { Metadata } from "next";
import EscrowPage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "Escrow-Protected Trade | Secure Cross-Border Export Payments",
  description:
    "How Global Green Export removes counterparty risk from cannabis, hemp, and regulated-goods trade: neutral third-party escrow, documentation control, and dispute resolution for every shipment.",
  alternates: {
    canonical: `${SITE_URL}/escrow/`,
  },
  openGraph: {
    title: "Escrow-Protected Trade | Global Green Export",
    description:
      "Funds are held in a neutral, segregated escrow account and released only after delivery is verified — eliminating counterparty risk for buyers and sellers.",
    url: `${SITE_URL}/escrow/`,
  },
};

export default function Page() {
  return <EscrowPage />;
}
