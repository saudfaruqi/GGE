// app/gallery/page.tsx  —  Global Green Exports · Gallery
"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Leaf } from "lucide-react";

const galleryItems = [
  { id: 1, category: "Products", caption: "Premium GACP-Certified Flower", src: null },
  { id: 2, category: "Products", caption: "Full-Spectrum Extract", src: null },
  { id: 3, category: "Products", caption: "CBD Isolate Powder", src: null },
  { id: 4, category: "Facilities", caption: "GACP-Certified Growing Facility", src: null },
  { id: 5, category: "Facilities", caption: "Quality Control Laboratory", src: null },
  { id: 6, category: "Facilities", caption: "Secure Storage & Packaging", src: null },
  { id: 7, category: "Operations", caption: "Export Preparation", src: null },
  { id: 8, category: "Operations", caption: "Logistics & Compliance", src: null },
  { id: 9, category: "Products", caption: "Hemp-Derived CBD Products", src: null },
  { id: 10, category: "Facilities", caption: "Partner Cultivation Site", src: null },
  { id: 11, category: "Operations", caption: "Documentation & CoA", src: null },
  { id: 12, category: "Products", caption: "Terpene Collection", src: null },
];

const categories = ["All", "Products", "Facilities", "Operations"];

const categoryAccent: Record<string, string> = {
  Products: "rgba(201,168,76,0.12)",
  Facilities: "rgba(74,140,85,0.12)",
  Operations: "rgba(26,58,31,0.12)",
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1a0d 0%, #122318 50%, #0f1e13 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "20px" }}>
            Gallery
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Our{" "}
            <span style={{ color: "var(--gold)" }}>Products & Operations</span>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "560px", margin: "0 auto" }}>
            A visual overview of Global Green Exports — our GACP-certified products, partner cultivation
            facilities, and export operations based in Thailand.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--gold)", height: "2px" }} />

      {/* ── GALLERY ── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "10px 22px",
                    background: isActive ? "var(--green-dark)" : "#fff",
                    color: isActive ? "#fff" : "var(--green-dark)",
                    border: isActive ? "1px solid var(--green-dark)" : "1px solid rgba(26,58,31,0.2)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="group"
                style={{
                  border: "1px solid rgba(26,58,31,0.1)",
                  overflow: "hidden",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  cursor: "default",
                }}
              >
                {/* Image area */}
                <div
                  className="relative"
                  style={{
                    aspectRatio: "1",
                    background: `linear-gradient(${130 + i * 18}deg, var(--green-dark), #1e4425)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {item.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <Leaf size={28} style={{ color: "rgba(201,168,76,0.2)", margin: "0 auto 8px" }} />
                      <div style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                        Photo Coming Soon
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                      transition: "opacity 0.25s",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "2px" }}>
                        {item.category}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 400 }}>
                        {item.caption}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption bar */}
                <div
                  style={{
                    background: "#fff",
                    padding: "12px 14px",
                    borderTop: "2px solid " + (categoryAccent[item.category] || "transparent"),
                  }}
                >
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "2px", fontWeight: 600 }}>
                    {item.category}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--green-dark)", fontWeight: 400 }}>
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: "48px",
              background: "#fff",
              border: "1px solid rgba(26,58,31,0.1)",
              borderLeft: "3px solid var(--gold)",
              padding: "20px 28px",
            }}
          >
            <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "#777", fontWeight: 300 }}>
              <strong style={{ color: "var(--green-dark)", fontWeight: 600 }}>Note:</strong>{" "}
              All photos represent GACP-certified, compliant cannabis cultivation and production. Global
              Green Exports does not display or promote any unlicensed growing operations. Product imagery
              available upon request for verified wholesale buyers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}