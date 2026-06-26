"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, X, ChevronLeft, Grid3x3, LayoutGrid } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// 1. TYPES
// ============================================================

type GalleryItem = {
  id: number;
  category: "Products" | "Facilities" | "Operations";
  caption: string;
  src: string;
  span?: "wide" | "tall" | "large";
};

type ViewMode = "grid" | "masonry";

// ============================================================
// 2. DATA WITH IMAGES
// ============================================================

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "Facilities",
    caption: "Indoor Grow Corridor",
    src: "/gallery/1.jpeg",
    span: "wide",
  },
  {
    id: 2,
    category: "Facilities",
    caption: "Partner Cultivation Site",
    src: "/gallery/2.jpeg",
  },
  {
    id: 3,
    category: "Facilities",
    caption: "Controlled Environment Cultivation",
    src: "/gallery/3.jpeg",
    span: "tall",
  },
  {
    id: 4,
    category: "Facilities",
    caption: "Satellite Growing Facility",
    src: "/gallery/4.jpeg",
  },
  {
    id: 5,
    category: "Facilities",
    caption: "Processing Centre Interior",
    src: "/gallery/5.jpeg",
  },
  {
    id: 6,
    category: "Facilities",
    caption: "Facility Exterior",
    src: "/gallery/6.jpeg",
  },
  {
    id: 7,
    category: "Facilities",
    caption: "Container Grow Unit",
    src: "/gallery/7.jpeg",
  },
  {
    id: 8,
    category: "Operations",
    caption: "Secure Warehouse Storage",
    src: "/gallery/8.jpeg",
    span: "wide",
  },
  {
    id: 9,
    category: "Facilities",
    caption: "Controlled Light Environment",
    src: "/gallery/9.jpeg",
  },
  {
    id: 10,
    category: "Facilities",
    caption: "Indoor Grow Room",
    src: "/gallery/10.jpeg",
  },
  {
    id: 11,
    category: "Facilities",
    caption: "Wash-Down Processing Area",
    src: "/gallery/11.jpeg",
  },
  {
    id: 12,
    category: "Facilities",
    caption: "Staff Accommodation",
    src: "/gallery/12.jpeg",
  },
  {
    id: 13,
    category: "Facilities",
    caption: "Site Amenities",
    src: "/gallery/13.jpeg",
  },
  {
    id: 14,
    category: "Facilities",
    caption: "Climate Control Equipment",
    src: "/gallery/14.jpeg",
  },
  {
    id: 15,
    category: "Facilities",
    caption: "HVAC & Storage Systems",
    src: "/gallery/15.jpeg",
    span: "wide",
  },
  {
    id: 16,
    category: "Facilities",
    caption: "Refrigeration Units",
    src: "/gallery/16.jpeg",
  },
  {
    id: 17,
    category: "Facilities",
    caption: "Cold Storage Equipment",
    src: "/gallery/17.jpeg",
  },
  {
    id: 18,
    category: "Facilities",
    caption: "Split-System Climate Control",
    src: "/gallery/18.jpeg",
  },
  {
    id: 19,
    category: "Facilities",
    caption: "Vertical HVAC Unit",
    src: "/gallery/19.jpeg",
  },
  {
    id: 20,
    category: "Facilities",
    caption: "Wall-Mount Climate System",
    src: "/gallery/20.jpeg",
    span: "tall",
  },
  {
    id: 21,
    category: "Facilities",
    caption: "Outdoor Condenser Unit",
    src: "/gallery/21.jpeg",
  },
  {
    id: 22,
    category: "Facilities",
    caption: "HVAC Supply Partners",
    src: "/gallery/22.jpeg",
  },
  {
    id: 23,
    category: "Operations",
    caption: "HVAC Installation — Full Kit",
    src: "/gallery/23.jpeg",
  },
  {
    id: 24,
    category: "Operations",
    caption: "Split-Unit Installation",
    src: "/gallery/24.jpeg",
  },
  {
    id: 25,
    category: "Operations",
    caption: "Installation Accessories",
    src: "/gallery/25.jpeg",
  },
  {
    id: 26,
    category: "Operations",
    caption: "Multi-Zone HVAC Schematic",
    src: "/gallery/26.jpeg",
    span: "wide",
  },
  {
    id: 27,
    category: "Operations",
    caption: "Global Distribution Network",
    src: "/gallery/27.jpeg",
  },
  {
    id: 28,
    category: "Products",
    caption: "Terpene & Extract Collection",
    src: "/gallery/28.jpeg",
    span: "wide",
  },
  {
    id: 29,
    category: "Products",
    caption: "Premium Flower — Jar Display",
    src: "/gallery/29.jpeg",
  },
  {
    id: 30,
    category: "Facilities",
    caption: "Flagship Partner Site",
    src: "/gallery/30.jpeg",
  },
  {
    id: 31,
    category: "Products",
    caption: "Product Key Features",
    src: "/gallery/31.jpeg",
  },
  {
    id: 32,
    category: "Products",
    caption: "GACP-Certified Product Card",
    src: "/gallery/32.jpeg",
  },
  {
    id: 33,
    category: "Products",
    caption: "Strains Not Names — Brand Partner",
    src: "/gallery/33.jpeg",
  },
  {
    id: 34,
    category: "Operations",
    caption: "Top Kush Only — Export Partner",
    src: "/gallery/34.jpeg",
  },
  {
    id: 35,
    category: "Products",
    caption: "Premium GACP-Certified Flower",
    src: "/gallery/35.jpeg",
    span: "large",
  },
  {
    id: 36,
    category: "Products",
    caption: "Bulk Packaged Flower",
    src: "/gallery/36.jpeg",
  },
  {
    id: 37,
    category: "Operations",
    caption: "Wholesale Stock — Export Ready",
    src: "/gallery/37.jpeg",
  },
  {
    id: 38,
    category: "Facilities",
    caption: "Container Home — Partner Accommodation",
    src: "/gallery/38.jpeg",
  },
  {
    id: 39,
    category: "Facilities",
    caption: "Site Accommodation — Coastal",
    src: "/gallery/39.jpeg",
  },
  {
    id: 40,
    category: "Operations",
    caption: "Equipment Installation",
    src: "/gallery/40.jpeg",
  },
  {
    id: 41,
    category: "Operations",
    caption: "Technical Operations Overview",
    src: "/gallery/41.jpeg",
  },
  {
    id: 42,
    category: "Facilities",
    caption: "Client Lounge",
    src: "/gallery/42.jpeg",
  },
  {
    id: 43,
    category: "Facilities",
    caption: "Jungle Site — Partner Facility",
    src: "/gallery/43.jpeg",
  },
  {
    id: 44,
    category: "Facilities",
    caption: "Facility Exterior — Evening",
    src: "/gallery/44.jpeg",
  },
  {
    id: 45,
    category: "Facilities",
    caption: "Coastal Partner Site",
    src: "/gallery/45.jpeg",
  },
  {
    id: 46,
    category: "Facilities",
    caption: "On-Site Accommodation",
    src: "/gallery/46.jpeg",
  },
  {
    id: 47,
    category: "Facilities",
    caption: "Aerial Cultivation Rows",
    src: "/gallery/47.jpeg",
    span: "wide",
  },
] as const;


const FILTER_CATEGORIES = ["All", "Products", "Facilities", "Operations"] as const;

const CATEGORY_COLORS: Record<string, string> = {
  Products: "#2D5A3C",
  Facilities: "#4A6B8A",
  Operations: "#5A4A7A",
};

const CATEGORY_BG: Record<string, string> = {
  Products: "#0d1f0f",
  Facilities: "#0f1a24",
  Operations: "#1a1424",
};

// ============================================================
// 3. COMPONENTS
// ============================================================

// ---- 3.1 SKIP LINK ----
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-emerald-700 focus:text-white focus:font-medium focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}

// ---- 3.2 FILTER BUTTONS ----
function FilterButtons({
  active,
  onFilterChange,
}: {
  active: string;
  onFilterChange: (category: string) => void;
}) {
  return (
    <div className="w-full overflow-x-auto md:w-fit scrollbar-none">
      <div className="flex gap-1 bg-white rounded-full p-1 shadow-sm w-max mx-auto md:mx-0">
        {FILTER_CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              className={`text-[0.65rem] font-medium tracking-[0.18em] uppercase rounded-full px-5 md:px-8 py-2.5 md:py-3.5 transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-[#0a0a0a] text-white shadow-lg"
                  : "bg-transparent text-[rgba(0,0,0,0.45)] hover:text-[#0a0a0a] hover:bg-black/5"
              }`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---- 3.3 VIEW TOGGLE ----
function ViewToggle({
  viewMode,
  onViewChange,
}: {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}) {
  return (
    <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm">
      <button
        onClick={() => onViewChange("grid")}
        className={`p-2 rounded-md transition-all duration-200 ${
          viewMode === "grid"
            ? "bg-[#0a0a0a] text-white"
            : "text-[rgba(0,0,0,0.3)] hover:text-[#0a0a0a]"
        }`}
        aria-label="Grid view"
        aria-pressed={viewMode === "grid"}
      >
        <Grid3x3 size={18} />
      </button>
      <button
        onClick={() => onViewChange("masonry")}
        className={`p-2 rounded-md transition-all duration-200 ${
          viewMode === "masonry"
            ? "bg-[#0a0a0a] text-white"
            : "text-[rgba(0,0,0,0.3)] hover:text-[#0a0a0a]"
        }`}
        aria-label="Masonry view"
        aria-pressed={viewMode === "masonry"}
      >
        <LayoutGrid size={18} />
      </button>
    </div>
  );
}

// ---- 3.4 GALLERY ITEM ----
function GalleryItem({
  item,
  viewMode,
}: {
  item: GalleryItem;
  viewMode: ViewMode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSpanClasses = () => {
    if (viewMode === "masonry") return "";
    switch (item.span) {
      case "wide":
        return "md:col-span-2";
      case "tall":
        return "md:row-span-2";
      case "large":
        return "md:col-span-2 md:row-span-2";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`group relative overflow-hidden bg-[#0a0a0a] rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col ${getSpanClasses()}`}
        style={{ background: CATEGORY_BG[item.category] }}
      >
        {/* Image Container */}
        <div
          className={`relative w-full flex-1 ${
            viewMode === "masonry"
              ? "aspect-[4/3]"
              : item.span === "tall" || item.span === "large"
              ? "min-h-0"
              : "aspect-square"
          }`}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-10">
              <div className="w-8 h-8 border-2 border-[#2D5A3C] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={item.src}
            alt={item.caption}
            fill
            className={`object-cover transition-all duration-700 ${
              isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
            }`}
            onLoad={() => setIsLoading(false)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span
              className="text-[0.45rem] md:text-[0.5rem] tracking-[0.18em] uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white/80 border border-white/10"
              style={{ borderColor: `${CATEGORY_COLORS[item.category]}40` }}
            >
              {item.category}
            </span>
          </div>

          {/* Hover Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <p className="text-white font-serif text-base md:text-xl leading-tight mb-1 md:mb-2">
              {item.caption}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[0.5rem] md:text-[0.6rem] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors w-fit border-b border-white/20 hover:border-white/60 pb-0.5"
            >
              View Details →
            </button>
          </div>
        </div>

        {/* Caption Bar (visible on mobile) */}
        <div className="md:hidden bg-white/5 backdrop-blur-sm px-4 py-3 border-t border-white/5">
          <p className="text-[0.45rem] tracking-[0.18em] uppercase text-white/40">
            {item.category}
          </p>
          <p className="text-sm text-white/90 font-medium truncate">{item.caption}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.caption} - Gallery view`}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Image */}
            <div className="aspect-[4/3] md:aspect-[16/9] relative bg-[#0a0a0a]">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
                priority
              />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 bg-[#0a0a0a] border-t border-white/5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p
                    className="text-[0.55rem] tracking-[0.18em] uppercase mb-2"
                    style={{ color: CATEGORY_COLORS[item.category] }}
                  >
                    {item.category}
                  </p>
                  <h3 className="text-white font-serif text-2xl md:text-3xl leading-tight">
                    {item.caption}
                  </h3>
                </div>
                <Link
                  href="/#contact"
                  className="shrink-0 px-6 py-3 bg-[#2D5A3C] text-white text-[0.6rem] tracking-[0.18em] uppercase rounded-lg hover:bg-[#3a8042] transition-colors text-center"
                >
                  Enquire Now
                </Link>
              </div>
              <p className="text-white/30 text-sm mt-4 max-w-lg">
                Contact our team for high-resolution imagery, product specifications,
                and wholesale availability.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ---- 3.5 COUNTER ----
function Counter({ total, active }: { total: number; active: number }) {
  return (
    <div className="text-[0.65rem] text-[rgba(0,0,0,0.3)] tracking-[0.1em] uppercase whitespace-nowrap">
      <span className="font-medium text-[#0a0a0a]">{active}</span> / {total}
    </div>
  );
}

// ---- 3.6 SCROLL TO TOP ----
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.pageYOffset > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#2D5A3C] text-white rounded-full shadow-lg hover:bg-[#3a8042] transition-all duration-300 flex items-center justify-center border border-white/10 focus-visible:ring-2 focus-visible:ring-[#2D5A3C] focus-visible:ring-offset-2"
    >
      <ChevronLeft className="rotate-90" size={20} />
    </button>
  );
}

// ---- 3.7 COOKIE CONSENT ----
function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") setAccepted(true);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
  }, []);

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0a0a0a] border-t border-white/10 p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-white/70 leading-relaxed max-w-2xl">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#2D5A3C] text-white text-[10px] tracking-widest uppercase hover:bg-[#3a8042] transition-colors rounded-lg"
          >
            Accept
          </button>
          <Link
            href="/privacy"
            className="px-6 py-2 border border-white/20 text-white/60 text-[10px] tracking-widest uppercase hover:bg-white/5 transition-colors rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 4. MAIN PAGE
// ============================================================

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filteredItems = useMemo(() => {
    return activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Global Green Exports Gallery",
    description:
      "Visual overview of GACP-certified cannabis products, facilities, and export operations.",
    provider: {
      "@type": "Organization",
      name: "Global Green Exports",
    },
    image: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      contentUrl: item.src,
      caption: item.caption,
    })),
  };

  return (
    <>
      
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ── HERO ── */}
        <section className="relative min-h-[35vh] md:min-h-[40vh] bg-[#0a0a0a] flex flex-col justify-end overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16">
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Accent Line */}
          <div
            className="absolute top-0 left-1/2 w-px h-24 md:h-32 bg-gradient-to-b from-[#2D5A3C]/40 to-transparent"
            aria-hidden="true"
          />

          {/* Subtle Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-[#2D5A3C]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center w-full">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div className="w-6 md:w-8 h-px bg-[#2D5A3C]/40" aria-hidden="true" />
              <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.22em] uppercase text-[#2D5A3C] font-medium">
                Gallery
              </span>
              <div className="w-6 md:w-8 h-px bg-[#2D5A3C]/40" aria-hidden="true" />
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-white mb-4">
              Products &{" "}
              <span className="text-white/30 italic">operations</span>
            </h1>

            <p className="text-[0.85rem] md:text-[0.95rem] leading-relaxed text-white/35 max-w-xl mx-auto font-light px-4">
              A visual overview of Global Green Exports — GACP-certified products,
              partner cultivation facilities, and export operations based in Thailand.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/5" aria-hidden="true" />

        {/* ── GALLERY ── */}
        <section className="bg-[#f5f5f5] py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-8 md:mb-10">
              <FilterButtons active={activeFilter} onFilterChange={setActiveFilter} />

              <div className="flex items-center gap-4 self-center md:self-auto">
                <Counter total={GALLERY_ITEMS.length} active={filteredItems.length} />
                <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
              </div>
            </div>

            {/* Grid */}
            <div
              className={`grid gap-2 md:gap-3 lg:gap-4 ${
                viewMode === "grid"
                  ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto"
                  : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]"
              }`}
            >
              {filteredItems.map((item) => (
                <GalleryItem key={item.id} item={item} viewMode={viewMode} />
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16 md:py-20">
                <Leaf size={40} strokeWidth={1} className="text-black/10 mx-auto mb-4" />
                <p className="text-black/30 text-sm">No images in this category</p>
              </div>
            )}

            {/* Note */}
            <div className="mt-8 md:mt-12 bg-white rounded-xl border border-black/5 p-4 md:p-6 lg:p-8 shadow-sm">
              <p className="text-[0.75rem] md:text-[0.82rem] leading-relaxed text-black/40 font-light">
                <span className="text-black/60 font-medium">Note:</span>{" "}
                All photos represent GACP-certified, compliant cannabis cultivation and
                production. Global Green Exports does not display or promote any unlicensed
                growing operations. Product imagery available upon request for verified
                wholesale buyers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <CookieConsent />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out forwards;
        }
          
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }


      `}</style>
    </>
  );
}