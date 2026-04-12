"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   3-D Vial — compatible with Three.js r128+
───────────────────────────────────────────── */
function VialScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const didInit  = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    const wrap = mountRef.current;
    if (!wrap) return;

    const W   = wrap.clientWidth  || 480;
    const H   = wrap.clientHeight || 500;
    const DPR = Math.min(devicePixelRatio, 2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(DPR);
    renderer.setSize(W, H);
    renderer.shadowMap.enabled  = true;
    renderer.shadowMap.type     = THREE.PCFSoftShadowMap;
    renderer.toneMapping        = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    wrap.appendChild(renderer.domElement);
    renderer.domElement.style.width  = "100%";
    renderer.domElement.style.height = "100%";

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, W / H, 0.01, 100);
    camera.position.set(0, 0.4, 5.8);

    /* ── Lighting ── */
    scene.add(new THREE.AmbientLight(0x0d2010, 10));

    const key = new THREE.SpotLight(0xfff5e0, 15);
    key.position.set(4, 7, 5);
    key.angle = 0.28; key.penumbra = 0.55;
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    scene.add(key);

    const rim = new THREE.SpotLight(0x44ff88, 5);
    rim.position.set(-5, 2, 2);
    rim.angle = 0.45; rim.penumbra = 0.7;
    scene.add(rim);

    const fill = new THREE.PointLight(0x88ccff, 1.8, 20);
    fill.position.set(2, -5, 3);
    scene.add(fill);

    const back = new THREE.PointLight(0x1a5530, 3.5, 18);
    back.position.set(-3, 0, -5);
    scene.add(back);

    /* ── Environment sphere ── */
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 32),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        vertexShader:   `varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
        fragmentShader: `varying vec3 vP;void main(){float t=clamp(vP.y/30.,0.,1.);gl_FragColor=vec4(mix(vec3(0.01,0.02,0.01),vec3(0.02,0.08,0.04),t),1.);}`,
      })
    ));

    /* ── Materials — MeshStandardMaterial only (r128 safe) ── */
    const glassMat = new THREE.MeshStandardMaterial({
      color:     0x1a4025,
      metalness: 0.0,
      roughness: 0.06,
      transparent: true,
      opacity:   0.55,
      side:      THREE.DoubleSide,
    });

    const glassCapMat = new THREE.MeshStandardMaterial({
      color:     0x2a5535,
      metalness: 0.0,
      roughness: 0.06,
      transparent: true,
      opacity:   0.6,
      side:      THREE.DoubleSide,
    });

    const liquidMat = new THREE.MeshStandardMaterial({
      color:     0x1c5e2a,
      metalness: 0.0,
      roughness: 0.12,
      transparent: true,
      opacity:   0.82,
    });

    const capMat = new THREE.MeshStandardMaterial({
      color:     0x181818,
      metalness: 0.92,
      roughness: 0.2,
    });

    const ringMat = new THREE.MeshStandardMaterial({
      color:     0x2a2a2a,
      metalness: 0.95,
      roughness: 0.1,
    });

    const highlightMat = new THREE.MeshStandardMaterial({
      color:     0xffffff,
      metalness: 0.0,
      roughness: 0.0,
      transparent: true,
      opacity:   0.08,
    });

    /* ── Geometry ── */
    const SEGS   = 80;
    const BODY_R = 0.50;
    const BODY_H = 3.2;

    const vial = new THREE.Group();
    scene.add(vial);

    // Outer glass body
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R, BODY_R * 0.97, BODY_H, SEGS, 1, false),
      glassMat
    );
    body.castShadow = true;
    vial.add(body);

    // Specular highlight stripe — thin bright column on left
    const hiStripe = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R + 0.001, BODY_R + 0.001, BODY_H * 0.85, SEGS, 1, true,
        -0.18, 0.28),
      highlightMat
    );
    vial.add(hiStripe);

    // Second softer highlight
    const hiStripe2 = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R + 0.001, BODY_R + 0.001, BODY_H * 0.6, SEGS, 1, true,
        0.6, 0.18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.04, roughness: 0 })
    );
    vial.add(hiStripe2);

    // Bottom dome
    const botDome = new THREE.Mesh(
      new THREE.SphereGeometry(BODY_R * 0.97, SEGS, 32, 0, Math.PI * 2, 0, Math.PI / 2),
      glassMat
    );
    botDome.rotation.x = Math.PI;
    botDome.position.y = -BODY_H / 2;
    botDome.castShadow = true;
    vial.add(botDome);

    // Liquid fill
    const FILL_H    = BODY_H * 0.66;
    const liquidMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R - 0.065, BODY_R * 0.905, FILL_H, SEGS),
      liquidMat
    );
    liquidMesh.position.y = -BODY_H / 2 + FILL_H / 2 + 0.04;
    vial.add(liquidMesh);

    // Liquid surface disc
    const surface = new THREE.Mesh(
      new THREE.CircleGeometry(BODY_R - 0.065, SEGS),
      new THREE.MeshStandardMaterial({ color: 0x2a7a35, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.75 })
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.y  = -BODY_H / 2 + FILL_H + 0.04;
    vial.add(surface);

    // Neck taper
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R * 0.56, BODY_R * 0.7, 0.62, SEGS),
      glassCapMat
    );
    neck.position.y = BODY_H / 2 + 0.28;
    vial.add(neck);

    // Cap
    const CAP_Y   = BODY_H / 2 + 0.62 + 0.26;
    const capMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R * 0.52, BODY_R * 0.52, 0.52, SEGS),
      capMat
    );
    capMesh.position.y = CAP_Y;
    capMesh.castShadow = true;
    vial.add(capMesh);

    // Cap top disc
    const capTop = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R * 0.52, BODY_R * 0.52, 0.06, SEGS),
      ringMat
    );
    capTop.position.y = CAP_Y + 0.29;
    vial.add(capTop);

    // Cap highlight
    const capHi = new THREE.Mesh(
      new THREE.CylinderGeometry(BODY_R * 0.52 + 0.001, BODY_R * 0.52 + 0.001, 0.52, SEGS, 1, true, -0.15, 0.22),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, roughness: 0 })
    );
    capHi.position.y = CAP_Y;
    vial.add(capHi);

    // Seal ring
    const seal = new THREE.Mesh(
      new THREE.TorusGeometry(BODY_R * 0.52, 0.03, 16, SEGS),
      ringMat
    );
    seal.rotation.x = Math.PI / 2;
    seal.position.y = CAP_Y - 0.22;
    vial.add(seal);

    /* ── Label texture ── */
    const lc = document.createElement("canvas");
    lc.width  = 512;
    lc.height = 512;
    const lx  = lc.getContext("2d")!;

    // BG
    lx.fillStyle = "#07120a";
    lx.fillRect(0, 0, 512, 512);

    // Outer border
    lx.strokeStyle = "rgba(58,128,66,0.55)";
    lx.lineWidth   = 2;
    lx.strokeRect(14, 14, 484, 484);

    // Inner border
    lx.strokeStyle = "rgba(58,128,66,0.18)";
    lx.lineWidth   = 1;
    lx.strokeRect(22, 22, 468, 468);

    // Header band
    lx.fillStyle = "rgba(58,128,66,0.14)";
    lx.fillRect(14, 14, 484, 70);

    // Brand
    lx.textAlign   = "center";
    lx.font        = "600 22px Georgia, serif";
    lx.fillStyle   = "rgba(255,255,255,1)";
    lx.fillText("GLOBAL GREEN EXPORTS", 256, 52);

    // Rule
    lx.strokeStyle = "rgba(58,128,66,0.3)";
    lx.lineWidth   = 0.8;
    lx.beginPath(); lx.moveTo(60, 90); lx.lineTo(452, 90); lx.stroke();

    // Product name
    lx.font      = "300 58px Georgia, serif";
    lx.fillStyle = "rgba(255,255,255,0.85)";
    lx.fillText("Cannabis", 256, 170);
    lx.fillText("Extract",  256, 234);

    // Rule
    lx.strokeStyle = "rgba(58,128,66,0.52)";
    lx.beginPath(); lx.moveTo(80, 258); lx.lineTo(432, 258); lx.stroke();

    // Specs
    lx.font      = "400 17px system-ui, sans-serif";
    lx.fillStyle = "rgba(255,255,255,0.90)";
    lx.fillText("FULL SPECTRUM  ·  GACP CERTIFIED", 256, 294);
    lx.fillText("10ml  ·  CoA Verified",             256, 322);

    // Rule
    lx.strokeStyle = "rgba(58,128,66,0.75)";
    lx.beginPath(); lx.moveTo(80, 344); lx.lineTo(432, 344); lx.stroke();

    // Batch
    lx.font      = "400 14px system-ui, sans-serif";
    lx.fillStyle = "rgba(255,255,255,0.5)";
    lx.fillText("BATCH: GGE-2025-TH-001",           256, 376);
    lx.fillText("ORIGIN: THAILAND  ·  EXPORT GRADE", 256, 400);
    lx.fillText("THAI FDA LICENSED",                 256, 424);

    // Bottom rule + domain
    lx.strokeStyle = "rgba(58,128,66,0.12)";
    lx.beginPath(); lx.moveTo(80, 448); lx.lineTo(432, 448); lx.stroke();
    lx.font      = "300 13px Georgia, serif";
    lx.fillStyle = "rgba(58,128,66,0.42)";
    lx.fillText("globalgreen.exports", 256, 474);

    const labelAngle = Math.PI * 1.05;
    const labelObj   = new THREE.Mesh(
      new THREE.CylinderGeometry(
        BODY_R + 0.006, BODY_R + 0.006,
        BODY_H * 0.6, SEGS, 1, true,
        -labelAngle / 2, labelAngle
      ),
      new THREE.MeshStandardMaterial({
        map:         new THREE.CanvasTexture(lc),
        metalness:   0,
        roughness:   0.88,
        transparent: true,
        opacity:     0.97,
      })
    );
    labelObj.position.y = -0.08;
    vial.add(labelObj);

    /* ── Drag / inertia ── */
    let isDragging = false;
    let prevX = 0, prevY = 0;
    let velX  = 0, velY  = 0;
    let rotX  = 0.1, rotY = 0;
    let autoSpin = true;

    const el = renderer.domElement;
    el.style.cursor = "grab";

    el.addEventListener("mousedown",  (e) => {
      isDragging = true; autoSpin = false;
      prevX = e.clientX; prevY = e.clientY;
      velX = 0; velY = 0;
      el.style.cursor = "grabbing";
    });
    el.addEventListener("mousemove",  (e) => {
      if (!isDragging) return;
      velX = (e.clientX - prevX) * 0.013;
      velY = (e.clientY - prevY) * 0.009;
      rotY += velX;
      rotX = Math.max(-1.0, Math.min(1.0, rotX + velY));
      prevX = e.clientX; prevY = e.clientY;
    });
    el.addEventListener("mouseup",    () => { isDragging = false; el.style.cursor = "grab"; });
    el.addEventListener("mouseleave", () => { isDragging = false; el.style.cursor = "grab"; });

    el.addEventListener("touchstart", (e) => {
      autoSpin = false;
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
      velX = 0; velY = 0;
    }, { passive: true });
    el.addEventListener("touchmove", (e) => {
      velX = (e.touches[0].clientX - prevX) * 0.013;
      velY = (e.touches[0].clientY - prevY) * 0.009;
      rotY += velX;
      rotX = Math.max(-1.0, Math.min(1.0, rotX + velY));
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
        rotY += 0.005;
      } else if (!isDragging) {
        velX *= 0.88; velY *= 0.88;
        rotY += velX; rotX += velY;
        if (Math.abs(velX) < 0.0002 && Math.abs(velY) < 0.0002) autoSpin = true;
      }

      vial.rotation.y = rotY;
      vial.rotation.x = rotX;
      vial.position.y = -0.2 + Math.sin(t * 0.55) * 0.07;
      rim.intensity   = 4 + Math.sin(t * 0.75) * 1.2;

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

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
    />
  );
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
      }}
    >
      {/* dot grid bg */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(58,128,66,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* glow orb */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "22%", top: "50%",
          transform: "translate(50%,-50%)",
          width: "520px", height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(28,100,45,0.18) 0%,transparent 68%)",
          pointerEvents: "none",
        }}
      />

      
    {/* ── LEFT copy ── */}
    <div className="flex-[0_0_50%] flex flex-col justify-center px-5 py-0 md:px-[46px] md:pt-[80px] md:pb-[50px] relative z-[2] min-h-svh">

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3.4rem,5vw,5rem)",
            fontWeight: 300,
            color: "black",
            lineHeight: 1.05,
            letterSpacing: "-0.022em",
            margin: "0 0 16px",
          }}
        >
          Thai Cannabis,
          <br />
          <em style={{ color: "rgba(0,0,0,0.5)" }}>Precisely</em>
          <br />
          Delivered.
        </h1>

        <p
          style={{
            fontFamily: "system-ui,sans-serif",
            fontSize: "13.5px",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(0,0,0,0.35)",
            margin: "0 0 40px",
            maxWidth: "330px",
          }}
        >
          GACP-certified cultivation. Escrow-protected trade.
          Full pharmaceutical documentation from Bangkok to your market.
        </p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "52px" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#000", color: "#fffd",
              padding: "15px 28px",
              fontFamily: "system-ui,sans-serif", fontSize: "9px",
              fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            }}
          >
            Start an Enquiry <ArrowRight size={11} />
          </Link>
          <Link
            href="/products"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              border: "1px solid rgba(0,0,0,0.3)",
              color: "rgba(0,0,0,0.82)",
              padding: "15px 28px",
              fontFamily: "system-ui,sans-serif", fontSize: "9px",
              fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
            }}
          >
            View Products
          </Link>
        </div>

        <div style={{ display: "flex", paddingTop: "28px", borderTop: "1px solid rgba(0,0,0,0.05)", marginBottom: "28px" }}>
          {[
            { n: "30+",  l: "Markets"     },
            { n: "100%", l: "GACP"        },
            { n: "CoA",  l: "Every Batch" },
            { n: "48h",  l: "Response"    },
          ].map((s, i, a) => (
            <div
              key={s.l}
              style={{
                paddingRight: i < a.length - 1 ? "24px" : "0",
                paddingLeft:  i > 0 ? "24px" : "0",
                borderRight:  i < a.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "20px", fontWeight: 300, color: "#000", lineHeight: 1, marginBottom: "4px" }}>{s.n}</p>
              <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] -mx-5 px-5">
        <div className="flex gap-2 flex-nowrap mb-7">
            {[
            "GACP Certified",
            "Thai FDA Licensed",
            "Escrow Protected",
            "CoA Every Batch",
            ].map((label) => (
            <span
                key={label}
                className="shrink-0"
                style={{
                fontFamily: "system-ui,sans-serif",
                fontSize: "7.5px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(58,128,66,0.95)",
                border: "1px solid rgba(58,128,66,0.88)",
                padding: "5px 10px",
                whiteSpace: "nowrap",
                }}
            >
                {label}
            </span>
            ))}
        </div>
        </div>
      </div>

      {/* ── RIGHT vial ── */}
      <div
      className="min-h-[auto] min-lg:h-[100svh]"
        style={{
          flex: "0 0 50%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <VialScene />

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "system-ui,sans-serif",
            fontSize: "8px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.46)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 3,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.42)" strokeWidth="0.8"/>
            <path d="M6 3v6M3 6h6" stroke="rgba(255,255,255,0.42)" strokeWidth="0.8"/>
          </svg>
          Drag to rotate
        </div>
      </div>

        {/* ── Bottom strip ── */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.04] px-4 py-[10px] md:px-14 md:py-[13px] flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible overflow-y-hidden gap-x-[18px] md:gap-x-[30px] z-[4] bg-black backdrop-blur-md [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {[
            "GACP-only network",
            "Thai export licensed",
            "Compliant global delivery",
            "Escrow-protected trade",
            "CoA with every order",
        ].map((item) => (
            <span
            key={item}
            className="flex items-center gap-[7px] whitespace-nowrap shrink-0 uppercase text-white/[0.82] font-['system-ui,sans-serif'] text-[6.5px] tracking-[0.12em] md:text-[7.5px] md:tracking-[0.15em]"
            >
            <span
                className="w-[3px] h-[3px] rounded-full bg-[#3a8042] shrink-0"
            />
            {item}
            </span>
        ))}
        </div>
    </section>
  );
}