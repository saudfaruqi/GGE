// components/BreadcrumbSchema.tsx
// Server-renderable JSON-LD BreadcrumbList. Import into each route's
// page.tsx (a Server Component) and pass the real trail for that page.
// Replaces the single hardcoded breadcrumb that used to live in the root
// layout and misreported every page as "Home > Products > Contact".

const SITE_URL = "https://www.globalgreenexport.com";

export type Crumb = {
  name: string;
  path: string; // e.g. "/", "/products", "/products/hemp-derivatives"
};

export default function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}