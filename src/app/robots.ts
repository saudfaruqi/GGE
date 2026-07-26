// src/app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.globalgreenexport.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/", "/_next/", "/static/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

// Add this for static export
export const dynamic = 'force-static';