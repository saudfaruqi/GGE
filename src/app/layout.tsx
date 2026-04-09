import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Global Green Exports | Thailand's Premier Medicinal Cannabis Exporter",
    template: "%s | Global Green Exports",
  },
  description:
    "Global Green Exports – Thailand-based licensed exporter of GACP-certified medicinal cannabis and hemp products. Wholesale, escrow, and global shipping services.",
  keywords: [
    "medicinal cannabis export",
    "Thailand cannabis",
    "GACP certified",
    "hemp export",
    "cannabis wholesale",
    "Global Green Exports",
  ],
  openGraph: {
    title: "Global Green Exports",
    description: "Thailand's Premier Medicinal Cannabis & Hemp Exporter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}