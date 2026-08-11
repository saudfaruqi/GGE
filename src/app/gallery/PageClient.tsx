// app/gallery/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ============================================================
// DATA
// ============================================================

const GALLERY_IMAGES = [
  // Cultivation
  { src: "/gallery/1.jpeg", alt: "Cannabis cultivation facility", category: "Cultivation" },
  { src: "/gallery/3.jpeg", alt: "Indoor cannabis grow room", category: "Cultivation" },
  { src: "/gallery/34.jpeg", alt: "Thai cannabis farm", category: "Cultivation" },
  { src: "/gallery/35.jpeg", alt: "Premium cannabis flower", category: "Cultivation" },
  { src: "/gallery/47.jpeg", alt: "Cannabis cultivation fields", category: "Cultivation" },

  // Construction
  { src: "/gallery/2.jpeg", alt: "Luxury eco villa project", category: "Construction" },
  { src: "/gallery/4.jpeg", alt: "Wooden resort development", category: "Construction" },
  { src: "/gallery/5.jpeg", alt: "Luxury bathroom interior", category: "Construction" },
  { src: "/gallery/6.jpeg", alt: "Commercial café construction", category: "Construction" },
  { src: "/gallery/7.jpeg", alt: "Modern modular building", category: "Construction" },
  { src: "/gallery/9.jpeg", alt: "Luxury residential interior", category: "Construction" },
  { src: "/gallery/10.jpeg", alt: "Premium wooden interior", category: "Construction" },
  { src: "/gallery/11.jpeg", alt: "Stone bathroom installation", category: "Construction" },
  { src: "/gallery/12.jpeg", alt: "Luxury bedroom project", category: "Construction" },
  { src: "/gallery/13.jpeg", alt: "Outdoor spa installation", category: "Construction" },
  { src: "/gallery/29.jpeg", alt: "Luxury residential project", category: "Construction" },
  { src: "/gallery/37.jpeg", alt: "Construction materials", category: "Construction" },
  { src: "/gallery/39.jpeg", alt: "Luxury villa development", category: "Construction" },
  { src: "/gallery/40.jpeg", alt: "Modern tropical villa", category: "Construction" },
  { src: "/gallery/42.jpeg", alt: "Luxury interior design", category: "Construction" },
  { src: "/gallery/43.jpeg", alt: "Eco resort architecture", category: "Construction" },
  { src: "/gallery/44.jpeg", alt: "Modern residential architecture", category: "Construction" },
  { src: "/gallery/45.jpeg", alt: "Beachfront villa", category: "Construction" },
  { src: "/gallery/46.jpeg", alt: "Luxury hospitality project", category: "Construction" },

  // Appliances
  { src: "/gallery/14.jpeg", alt: "Commercial appliances", category: "Appliances" },
  { src: "/gallery/15.jpeg", alt: "Kitchen appliances", category: "Appliances" },
  { src: "/gallery/16.jpeg", alt: "Built-in kitchen appliances", category: "Appliances" },
  { src: "/gallery/17.jpeg", alt: "Premium refrigerator collection", category: "Appliances" },

  // HVAC
  { src: "/gallery/18.jpeg", alt: "Split AC system", category: "HVAC" },
  { src: "/gallery/19.jpeg", alt: "Commercial HVAC system", category: "HVAC" },
  { src: "/gallery/20.jpeg", alt: "Outdoor air conditioning unit", category: "HVAC" },
  { src: "/gallery/21.jpeg", alt: "Industrial HVAC equipment", category: "HVAC" },
  { src: "/gallery/22.jpeg", alt: "Commercial air conditioning", category: "HVAC" },
  { src: "/gallery/23.jpeg", alt: "Wall mounted AC system", category: "HVAC" },
  { src: "/gallery/24.jpeg", alt: "Residential air conditioner", category: "HVAC" },
  { src: "/gallery/25.jpeg", alt: "Complete HVAC installation", category: "HVAC" },
  { src: "/gallery/26.jpeg", alt: "HVAC components", category: "HVAC" },

  // Packaging
  { src: "/gallery/28.jpeg", alt: "Cannabis extracts", category: "Packaging" },
  { src: "/gallery/30.jpeg", alt: "Packaged cannabis flower", category: "Packaging" },
  { src: "/gallery/31.jpeg", alt: "CBD product packaging", category: "Packaging" },
  { src: "/gallery/32.jpeg", alt: "Premium hemp packaging", category: "Packaging" },
  { src: "/gallery/36.jpeg", alt: "Bulk cannabis shipment", category: "Packaging" },

  // Logistics
  { src: "/gallery/8.jpeg", alt: "Commercial warehouse", category: "Logistics" },
  { src: "/gallery/38.jpeg", alt: "Warehouse inventory", category: "Logistics" },

  // Export
  { src: "/gallery/27.jpeg", alt: "International cannabis logistics", category: "Export" },

  // Brand
  { src: "/gallery/33.jpeg", alt: "Strains Not Names brand", category: "Brand" },
  { src: "/gallery/41.jpeg", alt: "Cannabis retail concept", category: "Brand" },
];

const CATEGORIES = ["All", "Cultivation", "Construction", "Appliances", "HVAC", "Packaging", "Logistics", "Export", "Brand"];

// ============================================================
// COMPONENTS
// ============================================================

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— {label}</span>
      <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
        {title}
      </h2>
      {subtitle && <p className="text-[15px] text-[var(--ink-55)] max-w-xl mt-4">{subtitle}</p>}
    </motion.div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  const filteredImages = selectedCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  // Get count per category for display
  const getCategoryCount = (category: string) => {
    if (category === "All") return GALLERY_IMAGES.length;
    return GALLERY_IMAGES.filter(img => img.category === category).length;
  };

  return (
    <>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-screen bg-[var(--ink)] overflow-hidden" aria-label="Gallery">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 origin-top"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--jade-deep)]" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay" />
          </motion.div>

          <div className="relative z-10 flex items-center min-h-screen px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto w-full">

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-[clamp(48px,10vw,120px)] leading-[0.85] tracking-tight text-white mt-8"
              >
                Inside the
                <br />
                <span className="text-[var(--jade)]">supply chain.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-body text-[15px] leading-relaxed text-white/50 max-w-lg mt-8"
              >
                A visual journey through our cultivation facilities, construction projects,
                appliances, HVAC systems, packaging operations, and logistics network — 
                from Thailand to the world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="flex flex-wrap gap-3 mt-12"
              >
                {CATEGORIES.slice(0, 5).map((cat) => (
                  <span key={cat} className="px-4 py-2 border border-white/10 text-white/40 font-mono text-[9px] tracking-[0.15em] uppercase">
                    {cat} ({getCategoryCount(cat)})
                  </span>
                ))}
                <span className="px-4 py-2 border border-white/10 text-white/40 font-mono text-[9px] tracking-[0.15em] uppercase">
                  +{CATEGORIES.length - 5} more
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="border-t border-[var(--line)] bg-[var(--paper)]" aria-label="Gallery images">
          <div className="px-6 md:px-12 py-24 md:py-32">
            <SectionHeader 
              label="Facility & Operations" 
              title="A visual journey."
              subtitle={`${GALLERY_IMAGES.length} images across ${CATEGORIES.length - 1} categories`}
            />

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-[var(--line)]"
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[var(--ink)] text-[var(--paper)]"
                      : "bg-transparent text-[var(--ink-40)] hover:text-[var(--ink)] hover:bg-[var(--paper-2)]"
                  }`}
                >
                  {category}
                  <span className="ml-2 text-[8px] opacity-50">({getCategoryCount(category)})</span>
                </button>
              ))}
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={`${img.src}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (i % 12) * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[4/5] bg-[var(--paper-2)] overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={i < 6}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-[var(--jade)] block mb-1">
                        {img.category}
                      </span>
                      <span className="font-body text-[13px] text-white/90">{img.alt}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="font-body text-[14px] text-[var(--ink-40)]">No images found in this category.</p>
              </div>
            )}

            {/* Image count */}
            <div className="mt-12 pt-12 border-t border-[var(--line)] text-center">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--ink-30)]">
                Showing {filteredImages.length} of {GALLERY_IMAGES.length} images
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--ink)] px-6 md:px-12 py-32" aria-label="Call to action">
          <div className="max-w-[1800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[0.9] tracking-tight text-white/90 mb-10">
                Want a facility walkthrough or site visit?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 bg-[var(--jade)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)] transition-all duration-500"
              >
                Start an Enquiry
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}