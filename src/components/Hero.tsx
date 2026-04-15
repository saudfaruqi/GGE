"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Animated Globe with trade-route arcs
───────────────────────────────────────────── */
function GlobeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    const wrap = mountRef.current;
    if (!wrap) return;

    const W = wrap.clientWidth || 520;
    const H = wrap.clientHeight || 560;
    const DPR = Math.min(devicePixelRatio, 2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(DPR);
    renderer.setSize(W, H);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    wrap.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.01, 100);
    camera.position.set(0, 0, 3.8);

    /* ── Lighting ── */
    scene.add(new THREE.AmbientLight(0x0a1a0d, 12));

    const key = new THREE.DirectionalLight(0xfff8f0, 2.2);
    key.position.set(4, 3, 5);
    scene.add(key);

    const rim = new THREE.PointLight(0x44ff88, 2.5, 20);
    rim.position.set(-4, 2, 2);
    scene.add(rim);

    const fill = new THREE.PointLight(0x1a5530, 3, 15);
    fill.position.set(3, -4, -3);
    scene.add(fill);

    /* ── Globe ── */
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Atmosphere glow shell
    const atmMat = new THREE.MeshStandardMaterial({
      color: 0x0d3318,
      transparent: true,
      opacity: 0.22,
      side: THREE.FrontSide,
      roughness: 1,
      metalness: 0,
    });
    const atm = new THREE.Mesh(new THREE.SphereGeometry(1.12, 64, 64), atmMat);
    globeGroup.add(atm);

    // Outer glow shell 2
    const atm2Mat = new THREE.MeshStandardMaterial({
      color: 0x1a5530,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
      roughness: 1,
      metalness: 0,
    });
    const atm2 = new THREE.Mesh(new THREE.SphereGeometry(1.18, 64, 64), atm2Mat);
    globeGroup.add(atm2);

    // Globe surface — dark ocean
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x040e06,
      roughness: 0.7,
      metalness: 0.15,
    });
    const globe = new THREE.Mesh(new THREE.SphereGeometry(1.0, 80, 80), globeMat);
    globeGroup.add(globe);

    /* ── Latitude/longitude grid ── */
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x1a4025,
      transparent: true,
      opacity: 0.35,
    });

    // Latitudes
    for (let lat = -80; lat <= 80; lat += 20) {
      const r = Math.cos((lat * Math.PI) / 180);
      const y = Math.sin((lat * Math.PI) / 180);
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        pts.push(new THREE.Vector3(r * Math.cos(a) * 1.002, y * 1.002, r * Math.sin(a) * 1.002));
      }
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }

    // Longitudes
    for (let lon = 0; lon < 360; lon += 20) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 64; i++) {
        const lat = -90 + (i / 64) * 180;
        const r = Math.cos((lat * Math.PI) / 180);
        const y = Math.sin((lat * Math.PI) / 180);
        const a = (lon * Math.PI) / 180;
        pts.push(new THREE.Vector3(r * Math.cos(a) * 1.002, y * 1.002, r * Math.sin(a) * 1.002));
      }
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }

    /* ── City dots ── */
    // [lat, lon, label]
    const cities: [number, number, string][] = [
      [13.75, 100.5, "Bangkok"],     // Thailand — origin
      [51.5, -0.12, "London"],
      [52.5, 13.4, "Berlin"],
      [-33.87, 151.2, "Sydney"],
      [46.95, 7.45, "Bern"],
      [45.42, -75.7, "Ottawa"],
      [39.74, -104.98, "Denver"],    // HQ
      [55.68, 12.57, "Copenhagen"],
      [38.72, -9.14, "Lisbon"],
      [-36.85, 174.77, "Auckland"],
      [50.08, 14.43, "Prague"],
    ];

    const dotGeo = new THREE.SphereGeometry(0.018, 8, 8);
    const dotMatOrigin = new THREE.MeshStandardMaterial({ color: 0x3a8042, roughness: 0.3, metalness: 0.4 });
    const dotMatHQ = new THREE.MeshStandardMaterial({ color: 0x88cc44, roughness: 0.3, metalness: 0.4 });
    const dotMatDest = new THREE.MeshStandardMaterial({ color: 0x1a6030, roughness: 0.4, metalness: 0.3 });

    function latLonToVec3(lat: number, lon: number, r = 1.01): THREE.Vector3 {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lon + 180) * Math.PI) / 180;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }

    cities.forEach(([lat, lon, label]) => {
      const mat = label === "Bangkok" ? dotMatOrigin : label === "Denver" ? dotMatHQ : dotMatDest;
      const dot = new THREE.Mesh(dotGeo, mat);
      const v = latLonToVec3(lat, lon);
      dot.position.copy(v);
      globeGroup.add(dot);

      // Pulse ring for Bangkok and Denver
      if (label === "Bangkok" || label === "Denver") {
        const ringGeo = new THREE.RingGeometry(0.025, 0.038, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: label === "Bangkok" ? 0x3a8042 : 0x88cc44,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(v);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        ring.userData = { isPulse: true, baseOpacity: 0.6, phase: label === "Bangkok" ? 0 : Math.PI };
        globeGroup.add(ring);
      }
    });

    /* ── Trade-route arcs: Bangkok → each destination ── */
    const bangkokLatLon: [number, number] = [13.75, 100.5];
    const denverLatLon: [number, number] = [39.74, -104.98];

    const arcTargets: [number, number][] = [
      [51.5, -0.12],
      [52.5, 13.4],
      [-33.87, 151.2],
      [46.95, 7.45],
      [45.42, -75.7],
      [55.68, 12.57],
      [38.72, -9.14],
      [-36.85, 174.77],
      [50.08, 14.43],
    ];

    function makeArc(from: [number, number], to: [number, number], color: number, arcHeight = 0.38): THREE.Line {
      const start = latLonToVec3(from[0], from[1]);
      const end = latLonToVec3(to[0], to[1]);
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(1 + arcHeight);
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        const p = new THREE.Vector3()
          .addScaledVector(start, (1 - t) * (1 - t))
          .addScaledVector(mid, 2 * t * (1 - t))
          .addScaledVector(end, t * t);
        pts.push(p);
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.0 });
      const line = new THREE.Line(geo, mat);
      line.userData = { totalPts: 61, progress: 0, revealed: 0, delay: Math.random() * 6 };
      return line;
    }

    const arcs: THREE.Line[] = [];
    arcTargets.forEach(([lat, lon]) => {
      const arc = makeArc(bangkokLatLon, [lat, lon], 0x2a7040);
      globeGroup.add(arc);
      arcs.push(arc);
    });

    // Denver arc (HQ link)
    const denverArc = makeArc(bangkokLatLon, denverLatLon, 0x4a9055, 0.5);
    globeGroup.add(denverArc);
    arcs.push(denverArc);

    /* ── Drag interaction ── */
    let isDragging = false;
    let prevX = 0, prevY = 0;
    let velX = 0, velY = 0;
    let rotY = -0.6, rotX = 0.15;
    let autoSpin = true;

    const el = renderer.domElement;
    el.style.cursor = "grab";

    el.addEventListener("mousedown", (e) => {
      isDragging = true; autoSpin = false;
      prevX = e.clientX; prevY = e.clientY;
      velX = 0; velY = 0;
      el.style.cursor = "grabbing";
    });
    el.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      velX = (e.clientX - prevX) * 0.011;
      velY = (e.clientY - prevY) * 0.008;
      rotY += velX; rotX = Math.max(-0.9, Math.min(0.9, rotX + velY));
      prevX = e.clientX; prevY = e.clientY;
    });
    el.addEventListener("mouseup", () => { isDragging = false; el.style.cursor = "grab"; });
    el.addEventListener("mouseleave", () => { isDragging = false; el.style.cursor = "grab"; });
    el.addEventListener("touchstart", (e) => {
      autoSpin = false; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY; velX = 0; velY = 0;
    }, { passive: true });
    el.addEventListener("touchmove", (e) => {
      velX = (e.touches[0].clientX - prevX) * 0.011;
      velY = (e.touches[0].clientY - prevY) * 0.008;
      rotY += velX; rotX = Math.max(-0.9, Math.min(0.9, rotX + velY));
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
    }, { passive: true });

    /* ── Resize ── */
    const ro = new ResizeObserver(() => {
      const w = wrap!.clientWidth, h = wrap!.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(wrap);

    /* ── Render loop ── */
    let rafId = 0, t = 0;

    function tick() {
      rafId = requestAnimationFrame(tick);
      t += 0.016;

      if (autoSpin) {
        rotY += 0.003;
      } else if (!isDragging) {
        velX *= 0.9; velY *= 0.9;
        rotY += velX; rotX += velY;
        if (Math.abs(velX) < 0.0002 && Math.abs(velY) < 0.0002) autoSpin = true;
      }

      globeGroup.rotation.y = rotY;
      globeGroup.rotation.x = rotX;

      // Pulse rings
      globeGroup.children.forEach((child) => {
        if (child.userData.isPulse) {
          const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          m.opacity = 0.3 + 0.4 * Math.abs(Math.sin(t * 1.8 + child.userData.phase));
          const s = 1 + 0.3 * Math.abs(Math.sin(t * 1.4 + child.userData.phase));
          child.scale.setScalar(s);
        }
      });

      // Arc reveal
      arcs.forEach((arc, i) => {
        const ud = arc.userData;
        if (t < ud.delay) return;
        const mat = arc.material as THREE.LineBasicMaterial;

        // Fade in opacity
        mat.opacity = Math.min(0.55, mat.opacity + 0.008);

        // Animate progress along arc (moving dot effect via draw range)
        ud.progress = (ud.progress + 0.008) % 1;
      });

      rim.intensity = 2 + Math.sin(t * 0.6) * 0.8;
      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      if (wrap.contains(renderer.domElement)) wrap.removeChild(renderer.domElement);
      didInit.current = false;
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", touchAction: "none" }} />;
}

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="flex-col lg:flex-row"
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        background: "#ffffff",
      }}
    >
      {/* dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(58,128,66,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* ── LEFT copy ── */}
      <div className="flex-[0_0_50%] flex flex-col justify-center px-5 py-16 md:px-[52px] md:pt-[100px] md:pb-[60px] relative z-[2]">

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
          <span style={{ width: "24px", height: "1px", background: "#3a8042" }} />
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3a8042", fontWeight: 500 }}>
            Global Green Exports · Denver, CO & Thailand
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
            fontWeight: 300,
            color: "#0a0a0a",
            lineHeight: 1.06,
            letterSpacing: "-0.022em",
            margin: "0 0 20px",
          }}
        >
          Thailand to
          <br />
          the World.
          <br />
          <em style={{ color: "rgba(0,0,0,0.28)" }}>Fully Documented.</em>
        </h1>

        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(0,0,0,0.4)",
            margin: "0 0 36px",
            maxWidth: "360px",
          }}
        >
          Specialists in five sourcing verticals — cannabis, hemp derivatives, 
          housing materials, appliances, and HVAC equipment. Every transaction 
          escrow-protected. Every shipment fully documented.
        </p>

        {/* Vertical pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "36px" }}>
          {["Cannabis", "Hemp Derivatives", "Housing Materials", "Appliances", "HVAC Equipment"].map((v) => (
            <span
              key={v}
              style={{
                fontSize: "7.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(58,128,66,0.9)",
                border: "1px solid rgba(58,128,66,0.3)",
                padding: "5px 12px",
                fontWeight: 400,
              }}
            >
              {v}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#0a0a0a", color: "rgba(255,255,255,0.88)",
              padding: "15px 28px",
              fontFamily: "system-ui, sans-serif", fontSize: "9px",
              fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            }}
          >
            Start an Enquiry <ArrowRight size={11} />
          </Link>
          <Link
            href="/products"
            style={{
              display: "inline-flex", alignItems: "center",
              border: "1px solid rgba(0,0,0,0.25)",
              color: "rgba(0,0,0,0.65)",
              padding: "15px 28px",
              fontFamily: "system-ui, sans-serif", fontSize: "9px",
              fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
            }}
          >
            View Products
          </Link>
        </div>

        {/* Stats strip */}
        <div style={{ display: "flex", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          {[
            { n: "5", l: "Verticals" },
            { n: "30+", l: "Markets" },
            { n: "Escrow", l: "Every trade" },
            { n: "48h", l: "Response" },
          ].map((s, i, a) => (
            <div
              key={s.l}
              style={{
                paddingRight: i < a.length - 1 ? "20px" : "0",
                paddingLeft: i > 0 ? "20px" : "0",
                borderRight: i < a.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "19px", fontWeight: 300, color: "#0a0a0a", lineHeight: 1, marginBottom: "4px" }}>{s.n}</p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "7.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT globe ── */}
      <div
        className="min-h-[380px] lg:min-h-[100svh]"
        style={{ flex: "0 0 50%", position: "relative", zIndex: 2 }}
      >
        <GlobeScene />

        {/* Drag hint */}
        <div
          style={{
            position: "absolute", bottom: "72px", left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "system-ui, sans-serif", fontSize: "8px",
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", gap: "8px",
            pointerEvents: "none", whiteSpace: "nowrap",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />
            <path d="M6 3v6M3 6h6" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />
          </svg>
          Drag to rotate
        </div>

        {/* Legend */}
        <div
          style={{
            position: "absolute", bottom: "32px", right: "24px",
            display: "flex", flexDirection: "column", gap: "6px",
          }}
        >
          {[
            { color: "#3a8042", label: "Origin — Thailand" },
            { color: "#88cc44", label: "HQ — Denver, CO" },
            { color: "#1a6030", label: "Export markets" },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: l.color, flexShrink: 0 }} />
              <span style={{ fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", fontFamily: "system-ui, sans-serif" }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.05] px-4 py-[10px] md:px-14 md:py-[13px] flex flex-nowrap overflow-x-auto gap-x-[20px] md:gap-x-[36px] z-[4] bg-white/80 backdrop-blur-sm [scrollbar-width:none]">
        {[
          "Direct supplier relationships",
          "Escrow-protected trade",
          "In-house documentation",
          "Thailand-origin supply chain",
          "Fee-based sourcing available",
          "48hr enquiry response",
        ].map((item) => (
          <span
            key={item}
            style={{
              display: "flex", alignItems: "center", gap: "7px",
              whiteSpace: "nowrap", flexShrink: 0,
              fontFamily: "system-ui, sans-serif",
              fontSize: "7px", letterSpacing: "0.13em",
              textTransform: "uppercase", color: "rgba(0,0,0,0.5)",
            }}
          >
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3a8042", flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}