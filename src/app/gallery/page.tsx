// app/gallery/page.tsx — Global Green Exports · Gallery
"use client";

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

const filterCategories = ["All", "Products", "Facilities", "Operations"];

// Each category gets a different dark bg shade for placeholder variety
const placeholderBg: Record<string, string> = {
  Products: "#111",
  Facilities: "#0d1f0f",
  Operations: "#141414",
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0a0a0a",
          minHeight: "52vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
          paddingTop: "160px",
          paddingBottom: "72px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "1px",
            height: "120px",
            background: "linear-gradient(to bottom, rgba(58,128,66,0.4), transparent)",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            width: "100%",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3a8042",
              fontWeight: 500,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            Gallery
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "24px",
            }}
          >
            Our products &amp;{" "}
            <em style={{ color: "rgba(255,255,255,0.35)" }}>operations</em>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.38)",
              fontWeight: 300,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            A visual overview of Global Green Exports — our GACP-certified products, partner
            cultivation facilities, and export operations based in Thailand.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* ── GALLERY ── */}
      <section style={{ background: "#f5f5f5", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

          {/* Filter tabs */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "1px", marginBottom: "56px", background: "#fff", width: "fit-content", borderRadius: "9999px", padding: "4px" }}
          >
            {filterCategories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    borderRadius: "9999px",
                    padding: "12px 28px",
                    background: isActive ? "#0a0a0a" : "#ffffff",
                    color: isActive ? "#ffffff" : "rgba(0,0,0,0.45)",
                    border: "none",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
            }}
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  cursor: "default",
                }}
                className="group"
              >
                {/* Image / placeholder */}
                <div
                  style={{
                    aspectRatio: "1",
                    background: placeholderBg[item.category] ?? "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {item.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={item.caption}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <Leaf
                        size={24}
                        strokeWidth={1}
                        style={{
                          color: "rgba(255,255,255,0.08)",
                          margin: "0 auto 8px",
                          display: "block",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "0.55rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.12)",
                        }}
                      >
                        Photo Coming Soon
                      </p>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "16px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                    }}
                    className="group-hover-overlay"
                  >
                    <p
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#3a8042",
                        marginBottom: "2px",
                      }}
                    >
                      {item.category}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#fff", fontWeight: 400 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Caption bar */}
                <div
                  style={{
                    background: "#ffffff",
                    padding: "14px 16px",
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#3a8042",
                      marginBottom: "2px",
                      fontWeight: 600,
                    }}
                  >
                    {item.category}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#0a0a0a", fontWeight: 400 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: "48px",
              background: "#ffffff",
              borderLeft: "3px solid rgba(0,0,0,0.15)",
              padding: "20px 28px",
            }}
          >
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.42)",
                fontWeight: 300,
              }}
            >
              <strong style={{ color: "#0a0a0a", fontWeight: 500 }}>Note:</strong>{" "}
              All photos represent GACP-certified, compliant cannabis cultivation and production.
              Global Green Exports does not display or promote any unlicensed growing operations.
              Product imagery available upon request for verified wholesale buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Hover overlay CSS injection */}
      <style>{`
        .group:hover .group-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}