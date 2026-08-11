// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../../styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

// ============================================================
// CONSTANTS
// ============================================================

const BRAND_NAME = "Global Green Export";
const SITE_URL = "https://www.globalgreenexport.com";
const SITE_NAME = "Global Green Export";
const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

// ============================================================
// FONTS
// globals.css maps .font-display/.font-body/.font-mono to
// --font-fraunces / --font-plex-sans / --font-plex-mono — these
// variable names must match exactly or the classes silently fall
// back to generic serif/sans-serif/monospace.
// ============================================================

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: `${BRAND_NAME} | Thailand's Premier Export Partner for Cannabis, Hemp, Construction & HVAC`,
    template: `%s | ${BRAND_NAME}`,
  },
  
  description:
    `${BRAND_NAME} is a Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment. Escrow-protected global supply chains with full documentation.`,
  
  applicationName: SITE_NAME,
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  generator: "Next.js",
  
  keywords: [
    "cannabis export Thailand",
    "GACP certified cannabis",
    "hemp derivatives wholesale",
    "construction materials export",
    "HVAC equipment supply",
    "Thai FDA licensed exporter",
    "escrow protected trade",
    "international supply chain",
    "Bangkok export house",
    "medical cannabis export",
    "CBD wholesale Thailand",
    "THC export",
    "pharmaceutical grade cannabis",
    "Thai FDA export license",
    "cross-border trade"
  ].join(", "),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_TH",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${BRAND_NAME} | Thailand's Premier Export Partner`,
    description:
      "Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment. Escrow-protected global supply chains.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} — Thailand's Premier Export Partner`,
        type: "image/jpeg",
      },
      {
        url: "/images/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: `${BRAND_NAME} Logo`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@globalgreenexp",
    creator: "@globalgreenexp",
    title: `${BRAND_NAME} | Thailand's Premier Export Partner`,
    description:
      "Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment.",
    images: [DEFAULT_OG_IMAGE],
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": `${SITE_URL}/en-us`,
      "en-GB": `${SITE_URL}/en-gb`,
      "th-TH": `${SITE_URL}/th-th`,
    },
  }, 

  category: "business",

  verification: {
    google: "LWrmT9AGqp4e4l7BNBIQC_E1XPBO-9Yu7UvGMrP1YLE",
  },
  
  other: {
    "geo.region": "TH",
    "geo.placename": "Bangkok",
    "geo.position": "13.756331;100.501765",
    ICBM: "13.756331,100.501765",
    "og:phone_number": "+6621234567",
    "og:email": "info@globalgreenexport.com",
  },
};

// ============================================================
// VIEWPORT
// ============================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede1" },
    { media: "(prefers-color-scheme: dark)", color: "#26231c" },
  ],
  colorScheme: "light dark",
};

// ============================================================
// ROOT LAYOUT
// ============================================================

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // ============================================================
  // STRUCTURED DATA
  // ============================================================

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo1.png`,
    description:
      "Bangkok-based export house licensed under Thailand's FDA framework, specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment.",
    email: "info@globalgreenexport.com",
    telephone: "+6621234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sukhumvit Road",
      addressLocality: "Bangkok",
      addressRegion: "Bangkok",
      postalCode: "10110",
      addressCountry: "Thailand",
    },
    areaServed: [
      "United States",
      "United Kingdom",
      "Germany",
      "Canada",
      "Australia",
      "Netherlands",
      "Switzerland",
      "Europe",
      "Asia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+6621234567",
      email: "sales@globalgreenexport.com",
      availableLanguage: ["English", "Thai"],
    },
    sameAs: [
      "https://linkedin.com/company/globalgreenexport",
      "https://twitter.com/globalgreenexp",
      "https://facebook.com/globalgreenexport",
    ],
    foundingDate: "2020",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "Thailand",
      },
    },
  };

  // 2. Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Bangkok-based export house licensed under Thailand's FDA framework, specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  // 4. Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ExportCompany",
    name: BRAND_NAME,
    description:
      "Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sukhumvit Road",
      addressLocality: "Bangkok",
      addressCountry: "Thailand",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.756331,
      longitude: 100.501765,
    },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$$",
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased font-body bg-black text-[var(--ink)]">
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <SkipLink />
        
        <div className="bg-black">
          <Navbar />
        </div>
        
        <main id="main-content" tabIndex={-1} className="flex-1 bg-[var(--paper)]">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}