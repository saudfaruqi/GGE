import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Global Green Exports — Medicinal Cannabis, Thailand",
    template: "%s — Global Green Exports",
  },
  description:
    "Licensed Thai exporter of GACP-certified medicinal cannabis and hemp. Wholesale supply, escrow-protected trade, and compliant global logistics.",
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
    description: "Thailand's licensed medicinal cannabis exporter",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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