import type { Metadata } from "next";
import ContactPage from "./PageClient";

const SITE_URL = "https://www.globalgreenexport.com";

export const metadata: Metadata = {
  title: "Contact & Enquiries | Start a Cannabis, Hemp or Export Enquiry",
  description:
    "Submit a product enquiry to Global Green Export. Get a feasibility assessment and preliminary pricing within 48 hours for cannabis, hemp, construction, appliance, or HVAC procurement from Thailand.",
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Global Green Export | Start Your Procurement Enquiry",
    description:
      "Ready to source from Thailand? Reach our team for compliance, pricing, and documentation questions — response within 48 business hours.",
    url: `${SITE_URL}/contact/`,
  },
};

export default function Page() {
  return <ContactPage />;
}
