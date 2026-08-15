"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -200]);

  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0]);

  // Lazy load video when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video loading and autoplay
  useEffect(() => {
    if (!isInView || !videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      console.log("Video can play");
      setIsLoaded(true);
      setVideoReady(true);
      
      // Try to play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          console.log("Video playing");
        }).catch((error) => {
          console.log("Autoplay prevented:", error);
          // Don't set error, just wait for user interaction
        });
      }
    };

    const handleLoadedData = () => {
      console.log("Video data loaded");
      setIsLoaded(true);
      setVideoReady(true);
    };

    const handleError = (e: Event) => {
      console.error("Video loading failed:", e);
      setHasError(true);
      setIsLoaded(true);
    };

    // Set up video
    video.preload = "metadata";
    video.muted = true;
    
    // Add event listeners
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    
    // Load the video
    try {
      video.load();
    } catch (error) {
      console.error("Error loading video:", error);
      setHasError(true);
      setIsLoaded(true);
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.pause();
      video.src = "";
      video.load();
    };
  }, [isInView]);

  // Handle user interaction for audio (click on container)
  const handleUserInteraction = useCallback(() => {
    console.log("User interaction - attempting to unmute");
    if (!videoRef.current || hasError) {
      console.log("Video not ready or has error");
      return;
    }
    
    const video = videoRef.current;
    setUserInteracted(true);

    if (isMuted) {
      // Try to unmute
      video.muted = false;
      setIsMuted(false);
      console.log("Unmuted video");
      
      // If video is paused, play it
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
          console.log("Video playing after unmute");
        }).catch((err) => {
          console.error("Failed to play after unmute:", err);
          // Fallback: keep muted
          video.muted = true;
          setIsMuted(true);
        });
      }
    } else {
      // Mute the video
      video.muted = true;
      setIsMuted(true);
      console.log("Muted video");
    }
  }, [isMuted, hasError]);

  // Toggle mute specifically for the button
  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Toggle mute button clicked");
    
    if (!videoRef.current || hasError) {
      console.log("Video not ready for toggle mute");
      return;
    }
    
    const video = videoRef.current;
    setUserInteracted(true);
    
    if (isMuted) {
      // Unmute
      video.muted = false;
      setIsMuted(false);
      console.log("Video unmuted via button");
      
      // Ensure video is playing
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
          console.log("Video playing after unmute");
        }).catch((error) => {
          console.error("Failed to play after unmute:", error);
          // If fails, keep muted
          video.muted = true;
          setIsMuted(true);
        });
      }
    } else {
      // Mute
      video.muted = true;
      setIsMuted(true);
      console.log("Video muted via button");
    }
  }, [isMuted, hasError]);

  // Toggle play/pause
  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Toggle play button clicked");
    
    if (!videoRef.current || hasError) {
      console.log("Video not ready for toggle play");
      return;
    }
    
    const video = videoRef.current;
    setUserInteracted(true);
    
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        console.log("Video playing");
      }).catch((error) => {
        console.error("Failed to play:", error);
        // Try with muted
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    } else {
      video.pause();
      setIsPlaying(false);
      console.log("Video paused");
    }
  }, [hasError]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black"
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900 to-emerald-950">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-900/30 blur-3xl"
            animate={{
              x: ["0%", "10%", "0%"],
              y: ["0%", "-10%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-900/30 blur-3xl"
            animate={{
              x: ["0%", "-10%", "0%"],
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Poster Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/video/showreel-poster.jpg"
          alt="Global Green Export"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onError={() => {
            // Silently fail
          }}
        />
      </div>

      {/* Video Container */}
      {isInView && (
        <motion.div
          className="absolute inset-0"
          style={{
            scale: smoothScale,
            y: smoothY,
          }}
        >
          <video
            ref={videoRef}
            src="/video/globalgreenexport.mp4"
            poster="/video/showreel-poster.jpg"
            autoPlay={false}
            muted={true}
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isLoaded && !hasError ? 0.7 : 0,
              transition: "opacity 0.8s ease",
            }}
          />
        </motion.div>
      )}

      {/* Gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"
        style={{ opacity: overlayOpacity }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
      >
        <div className="flex flex-col items-center gap-3 text-white/40">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"
            animate={{
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Loading state */}
      {!isLoaded && isInView && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-white/10 border-t-emerald-400/60 rounded-full animate-spin" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">
              Loading experience
            </span>
          </div>
        </div>
      )}

      {/* Controls */}
      {isLoaded && (
        <div className="absolute bottom-24 right-6 z-20 flex gap-2">
          {/* Unmute/Mute Button */}
          <button
            onClick={toggleMute}
            disabled={hasError}
            className={`p-3 backdrop-blur-sm border rounded-full transition-all group ${
              hasError 
                ? 'bg-white/5 border-white/5 cursor-not-allowed opacity-50' 
                : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
            }`}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            disabled={hasError}
            className={`p-3 backdrop-blur-sm border rounded-full transition-all group ${
              hasError 
                ? 'bg-white/5 border-white/5 cursor-not-allowed opacity-50' 
                : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
<div className="absolute inset-0 flex items-center justify-center z-10">
  <div className="text-center px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="font-display text-[clamp(20px,3vw,36px)] tracking-tight text-white/90 mb-1">
        Global Supply.
      </div>
      <div className="font-display italic text-[clamp(16px,2.5vw,30px)] tracking-tight text-emerald-400/60 mb-3">
        Without Compromise.
      </div>
      <p className="font-mono text-[6px] tracking-[0.2em] uppercase text-white/30">
        Premium cannabis genetics
      </p>
    </motion.div>
  </div>
</div>
      )}
    </div>
  );
}