// src/components/ScrollVideoHero.tsx
// Background media layer for the homepage hero. Renders a muted, looping
// video over a poster image, with the poster as the fallback if the video
// can't load. No player chrome, no animation runtime.
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VIDEO_SRC = "/video/globalgreenexport.mp4";
const POSTER_SRC = "/video/showreel-poster.jpg";

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setVideoReady(true);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
    };
  }, [inView]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[var(--bg)]">
      <Image
        src={POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />

      {inView && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: videoReady ? 0.55 : 0 }}
        />
      )}

      {/* Legibility: vignette + solid bottom fade (no multi-stop gradients) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/45 to-[var(--bg)]/70" />
      <div className="absolute inset-0 vignette" aria-hidden="true" />
    </div>
  );
}
