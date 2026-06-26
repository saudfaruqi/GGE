import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
});

const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalgreenexports.com"),
  title: {
    default: "Global Green Exports | Licensed Medicinal Cannabis Exporter, Thailand",
    template: "%s | Global Green Exports",
  },
  description:
    "Thailand's premier licensed exporter of GACP-certified medicinal cannabis and hemp. Secure wholesale supply, escrow-protected trade, and compliant global logistics.",
  applicationName: "Global Green Exports",
  authors: [{ name: "Global Green Exports" }],
  generator: "Next.js",
  keywords: [
    "medicinal cannabis export",
    "Thailand cannabis exporter",
    "GACP certified cannabis",
    "hemp wholesale",
    "cannabis supply chain",
    "Global Green Exports",
    "Thai cannabis export",
    "medical marijuana Thailand",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Global Green Exports | Thailand's Medicinal Cannabis Export Leader",
    description:
      "Licensed Thai exporter of GACP-certified medicinal cannabis and hemp. Trusted wholesale supplier with escrow protection and global logistics.",
    type: "website",
    locale: "en_TH",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://globalgreenexports.com",
    siteName: "Global Green Exports",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Green Exports - Thailand's Medicinal Cannabis Exporter",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Global Green Exports Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Green Exports | Thailand's Medicinal Cannabis Export Leader",
    description:
      "Licensed Thai exporter of GACP-certified medicinal cannabis and hemp. Trusted wholesale supplier with escrow protection.",
    images: ["/og-image.jpg"],
    creator: "@globalgreenex",
    site: "@globalgreenex",
  },
  alternates: {
    canonical: "https://globalgreenexports.com",
    languages: {
      en: "https://globalgreenexports.com/en",
      th: "https://globalgreenexports.com/th",
    },
  },
  category: "business",
  classification: "Medicinal Cannabis Export",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  other: {
    "geo.region": "TH",
    "geo.placename": "Bangkok",
    "geo.position": "13.756331;100.501765",
    "ICBM": "13.756331, 100.501765",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}