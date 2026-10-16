// src/lib/site.ts
// Single source of truth for company data, navigation, and SEO constants.
//
// Anything not yet confirmed is set to null and is therefore NOT rendered
// anywhere on the site. Fill these in when you have them and they appear
// automatically — no fake phone numbers, addresses or social profiles.

export const SITE_URL = "https://www.globalgreenexport.com";
export const BRAND = "Global Green Export";
export const BRAND_SHORT = "GGE";

export type SiteAddress = {
  label: string;
  lines: string[];
  region: string;
  country: string;
};

export const SITE = {
  url: SITE_URL,
  name: BRAND,
  tagline: "Thailand's export house for regulated supply.",
  founded: "2020", // VERIFY: confirm the founding year
  email: {
    general: "info@globalgreenexport.com",
    sales: "sales@globalgreenexport.com",
  },

  // Set both to publish a phone number (footer + contact page). While null,
  // no phone is shown anywhere.
  phone: null as string | null,
  phoneHref: null as string | null,

  address: {
    hub: {
      label: "Operations Hub",
      lines: ["Bangkok, Thailand"],
      region: "Bangkok",
      country: "Thailand",
    } as SiteAddress,
    // Set to a SiteAddress ({ label, lines, region, country }) to show a
    // second office in the footer. While null, it is hidden.
    us: null as SiteAddress | null,
  },

  hours: "Monday–Friday, 08:00–18:00 (ICT)",
  responseTime: "48 hours",

  // Add profiles you actually own, e.g. { LinkedIn: "https://..." }.
  // Anything listed here is emitted in the Organization schema and footer.
  social: {} as Record<string, string>,

  // Add real licence references before publishing them publicly.
  licenses: {
    fda: null as string | null,
    gacp: null as string | null,
  },
};

export const VERTICALS = [
  { id: "cannabis-export", label: "Cannabis", href: "/cannabis-export", led: true },
  { id: "hemp-export", label: "Hemp Derivatives", href: "/hemp-export", led: true },
  { id: "construction-materials-export", label: "Construction Materials", href: "/construction-materials-export", led: false },
  { id: "appliances-export", label: "Appliances", href: "/appliances-export", led: false },
  { id: "hvac-export", label: "HVAC Equipment", href: "/hvac-export", led: false },
] as const;

export const MARKETS = [
  { label: "United Kingdom", href: "/export-to-uk" },
  { label: "Germany", href: "/export-to-germany" },
  { label: "United States", href: "/export-to-usa" },
  { label: "Canada", href: "/export-to-canada" },
  { label: "Australia", href: "/export-to-australia" },
] as const;
