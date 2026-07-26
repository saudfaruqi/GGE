// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Global Green Export",
    short_name: "GGE",
    description: "Thailand's Premier Export Partner for Cannabis, Hemp, Construction & HVAC",
    start_url: "/",
    display: "standalone",
    background_color: "#f2ede1",
    theme_color: "#3f6b52",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

// Add this for static export
export const dynamic = 'force-static';