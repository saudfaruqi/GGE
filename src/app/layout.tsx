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
const SITE_TITLE = "Global Green Export | Thailand's Premier Export Partner";
const SITE_DESCRIPTION = 
  "Bangkok-based FDA-licensed export house specializing in GACP-certified cannabis, hemp derivatives, construction materials, appliances, and HVAC equipment. Escrow-protected global supply chains with full documentation.";
const DEFAULT_OG_IMAGE = "/images/og-image.jpg";
const TWITTER_HANDLE = "@globalgreenexp";

// ============================================================
// FONTS
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
// KEYWORDS
// ============================================================

const KEYWORDS = [
  "Thailand export partner",
  "cannabis export Thailand",
  "hemp derivatives wholesale",
  "construction materials export",
  "HVAC equipment supply",
  "FDA licensed exporter",
  "GACP certified cannabis",
  "CBD isolate supplier Thailand",
  "CBG CBN wholesale export",
  "EU compliant hemp extract",
  "structural steel supplier Thailand",
  "prefab building materials wholesale",
  "tropical climate HVAC export",
  "commercial split system supplier",
  "CE certified appliance export",
  "container load white goods supplier",
  "Thai FDA licensed exporter Bangkok",
  "escrow protected trade Thailand",
  "international supply chain Thailand",
  "cross-border B2B trade Thailand",
  "cannabis export to USA",
  "hemp export to Europe",
  "cannabis export to Brazil",
  "hemp export to Mexico",
  "construction materials to Australia",
  "HVAC equipment to Middle East",
].join(", ");

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: SITE_TITLE,
    template: `%s | ${BRAND_NAME}`,
  },
  
  description: SITE_DESCRIPTION,
  
  applicationName: SITE_NAME,
  authors: [{ 
    name: BRAND_NAME,
    url: SITE_URL 
  }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  generator: "Next.js",
  
  keywords: KEYWORDS,
  
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
    shortcut: ["/favicon.ico"],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_TH",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  // STRUCTURED DATA (JSON-LD)
  // ============================================================

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo1.png`,
    description: SITE_DESCRIPTION,
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
      "Brazil",
      "Mexico",
      "Europe",
      "Asia",
      "South America",
      "Central America",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+6621234567",
        email: "sales@globalgreenexport.com",
        availableLanguage: ["English", "Thai"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+6621234567",
        email: "support@globalgreenexport.com",
        availableLanguage: ["English", "Thai"],
      },
    ],
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ExportCompany",
    name: BRAND_NAME,
    description: SITE_DESCRIPTION,
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$$",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "TH",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
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
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(organizationSchema) 
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(websiteSchema) 
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(localBusinessSchema) 
          }}
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