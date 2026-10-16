// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "../../styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE, SITE_URL, BRAND } from "@/lib/site";

// ============================================================
// FONTS
// ============================================================

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

// ============================================================
// METADATA
// ============================================================

const SITE_TITLE =
  "Global Green Export — Thailand's Export House for Regulated Supply";
const SITE_DESCRIPTION =
  "Thai FDA-licensed export house in Bangkok. GACP-certified cannabis and hemp derivatives, plus construction materials, appliances, and HVAC equipment. Escrow-settled, documented at every stage.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${BRAND}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,

  keywords: [
    "Thailand cannabis export",
    "GACP certified cannabis",
    "Thai FDA licensed exporter",
    "hemp derivatives wholesale",
    "CBD CBG CBN supplier",
    "medical cannabis export Thailand",
    "escrow protected B2B trade",
    "construction materials export Thailand",
    "appliances export Thailand",
    "HVAC equipment export Thailand",
    "Bangkok export house",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND} — Thailand's Export House for Regulated Supply`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },

  category: "business",
};

// ============================================================
// VIEWPORT
// ============================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

// ============================================================
// STRUCTURED DATA
// ============================================================

function StructuredData() {
  const sameAs = Object.values(SITE.social);

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/logo1.png`,
    description: SITE_DESCRIPTION,
    email: SITE.email.general,
    ...(sameAs.length ? { sameAs } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.hub.region,
      addressCountry: "TH",
    },
    areaServed: [
      "United States",
      "United Kingdom",
      "Germany",
      "Canada",
      "Australia",
      "Netherlands",
      "Switzerland",
      "Brazil",
      "Mexico",
      "European Union",
    ],
    knowsAbout: [
      "Medical cannabis export",
      "GACP certification",
      "Hemp derivatives",
      "Thai FDA export licensing",
      "Escrow-protected trade",
      "Construction materials sourcing",
      "HVAC and appliance export",
    ],
    foundingDate: SITE.founded,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

// ============================================================
// ROOT LAYOUT
// ============================================================

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-body antialiased grain">
        <StructuredData />
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
