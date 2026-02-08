"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CctvCamera() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);

  const sRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });
  const sRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const sLensX = useSpring(lensX, { stiffness: 250, damping: 18 });
  const sLensY = useSpring(lensY, { stiffness: 250, damping: 18 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (window.innerWidth * 0.5);
      const dy = (e.clientY - cy) / (window.innerHeight * 0.5);
      rotateY.set(dx * 18);
      rotateX.set(dy * -10);
      lensX.set(dx * 6);
      lensY.set(dy * 5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [rotateY, rotateX, lensX, lensY]);

  return (
    <div ref={containerRef} className="relative w-[400px] h-[400px] flex items-center justify-center select-none">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-64 h-64 rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.14) 0%, rgba(239,68,68,0.06) 60%, transparent 80%)",
        }}
      />

      {/* Rotating scan lines */}
      {[0, 120, 240].map((a) => (
        <motion.div
          key={a}
          animate={{ rotate: [a, a + 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 h-px origin-left"
            style={{ width: 160, background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, transparent 100%)" }}
          />
        </motion.div>
      ))}

      {/* 3D tracked camera assembly */}
      <motion.div
        style={{ rotateY: sRotateY, rotateX: sRotateX, transformPerspective: 900 }}
        className="relative z-10"
      >
        {/* ── Wall Mount ── */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center z-0">
          {/* Wall plate */}
          <div className="w-8 h-20 rounded-r-md bg-gradient-to-l from-[#1a1a2a] to-[#111120] border border-l-0 border-[#2a2a40] shadow-[inset_-2px_0_8px_rgba(0,0,0,0.5)]">
            {/* Screw holes */}
            <div className="absolute top-3 right-2 w-1.5 h-1.5 rounded-full bg-[#0a0a15] border border-[#2a2a3e]" />
            <div className="absolute bottom-3 right-2 w-1.5 h-1.5 rounded-full bg-[#0a0a15] border border-[#2a2a3e]" />
          </div>
          {/* Arm */}
          <div className="w-10 h-5 bg-gradient-to-b from-[#222238] to-[#16162a] border-y border-[#2a2a44] -ml-px" />
          {/* Joint ball */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2a2a42] to-[#111125] border border-[#333355] shadow-[0_0_10px_rgba(0,0,0,0.4)] -ml-1 z-10" />
        </div>

        {/* ── Camera Body ── */}
        <div className="relative">
          {/* Sun visor / hood */}
          <div className="absolute -top-2.5 -left-1 right-12 h-14 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #1e1e32 0%, #14142a 40%, #0e0e20 100%)",
              borderRadius: "14px 14px 0 0",
              clipPath: "polygon(0% 40%, 5% 20%, 90% 0%, 100% 30%, 100% 100%, 0% 100%)",
              boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
              borderTop: "1px solid #2a2a44",
              borderLeft: "1px solid #2a2a44",
              borderRight: "1px solid #2a2a44",
            }}
          >
            {/* Visor edge highlight */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00D4FF]/10 to-transparent" />
          </div>

          {/* Main bullet body */}
          <div className="relative w-60 h-36 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(170deg, #1c1c32 0%, #151528 30%, #0f0f22 60%, #0b0b1a 100%)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 1px rgba(0,212,255,0.1), inset 0 1px 0 rgba(255,255,255,0.03)",
              border: "1px solid #252540",
            }}
          >
            {/* Top edge highlight */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            {/* Metallic body lines */}
            <div className="absolute top-5 left-6 right-16 h-px bg-[#252540]/50" />
            <div className="absolute bottom-5 left-6 right-16 h-px bg-[#252540]/50" />

            {/* Side ridge (right side depth) */}
            <div className="absolute top-3 bottom-3 right-12 w-px bg-[#252540]/30" />

            {/* ── Front face / lens area ── */}
            <div className="absolute top-4 bottom-4 left-4 right-16 rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0a0a18 0%, #060612 50%, #04040c 100%)",
                boxShadow: "inset 0 2px 12px rgba(0,0,0,0.7), inset 0 -1px 6px rgba(0,0,0,0.3)",
              }}
            >
              {/* Glass sheen */}
              <div className="absolute top-2 left-[20%] w-1/3 h-6 bg-white/[0.015] rounded-full -rotate-12 blur-sm" />

              {/* IR LEDs - realistic ring of 12 */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const radius = 42;
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.15, 0.5, 0.15] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12 }}
                    className="absolute w-[5px] h-[5px] rounded-full"
                    style={{
                      top: `calc(50% + ${Math.sin(angle) * radius}% - 2.5px)`,
                      left: `calc(50% + ${Math.cos(angle) * radius}% - 2.5px)`,
                      background: "radial-gradient(circle, rgba(220,40,40,0.9) 20%, rgba(180,30,30,0.3) 60%, transparent 100%)",
                      boxShadow: "0 0 3px rgba(220,40,40,0.5)",
                    }}
                  />
                );
              })}

              {/* Outer lens bezel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full"
                style={{
                  background: "linear-gradient(145deg, #1a1a30 0%, #0d0d1e 100%)",
                  boxShadow: "0 0 0 1px #2a2a44, 0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {/* Inner lens ring */}
                <div className="absolute inset-[3px] rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #12122a 0%, #080818 100%)",
                    boxShadow: "inset 0 1px 4px rgba(0,0,0,0.6), 0 0 0 1px #1e1e38",
                  }}
                >
                  {/* Glass lens - tracks mouse */}
                  <motion.div
                    style={{ x: sLensX, y: sLensY }}
                    className="absolute inset-[4px] rounded-full overflow-hidden"
                  >
                    <div className="w-full h-full rounded-full"
                      style={{
                        background: "radial-gradient(circle at 40% 35%, #1a1a35 0%, #0a0a1a 40%, #030310 70%, #010108 100%)",
                        boxShadow: "inset 0 2px 8px rgba(0,0,0,0.9), inset 0 -1px 3px rgba(0,212,255,0.03)",
                      }}
                    >
                      {/* Lens glass reflections */}
                      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-white/[0.08] blur-[0.5px]" />
                      <div className="absolute top-[25%] right-[30%] w-1.5 h-1.5 rounded-full bg-white/[0.12]" />
                      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-[#00D4FF]/[0.06]" />

                      {/* Center aperture */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                        style={{
                          background: "radial-gradient(circle, #020210 40%, #0a0a20 100%)",
                          boxShadow: "0 0 6px rgba(0,0,0,0.8)",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Subtle cyan ring around lens */}
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full pointer-events-none"
                style={{ boxShadow: "0 0 15px rgba(0,212,255,0.08), inset 0 0 15px rgba(0,212,255,0.04)" }}
              />
            </div>

            {/* Status LED (small, realistic) */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-3 right-6 w-[5px] h-[5px] rounded-full"
              style={{
                background: "radial-gradient(circle, #22c55e 30%, rgba(34,197,94,0.3) 100%)",
                boxShadow: "0 0 4px rgba(34,197,94,0.6)",
              }}
            />

            {/* Model label */}
            <span className="absolute bottom-2 right-5 text-[5px] font-mono tracking-[0.2em] text-[#2a2a44] uppercase">
              HDC-4K PRO
            </span>
          </div>

          {/* Bottom edge shadow for depth */}
          <div className="absolute -bottom-1 left-4 right-4 h-2 rounded-b-2xl bg-gradient-to-b from-[#0a0a18] to-transparent opacity-60" />
        </div>
      </motion.div>

      {/* Status indicator - centered below camera body */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(circle, #EF4444 40%, rgba(239,68,68,0.4) 100%)",
            boxShadow: "0 0 8px rgba(239,68,68,0.6), 0 0 16px rgba(239,68,68,0.2)",
          }}
        />
        <span className="text-[10px] font-mono text-[#EF4444]/70 tracking-[0.25em] uppercase">Rec</span>
      </div>

      {/* Tech circles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" viewBox="0 0 400 400">
        <motion.circle cx="200" cy="200" r="165" fill="none" stroke="url(#cGrad)" strokeWidth="0.5"
          strokeDasharray="3 9" animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.circle cx="200" cy="200" r="185" fill="none" stroke="url(#cGrad)" strokeWidth="0.3"
          strokeDasharray="2 14" animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <defs>
          <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#EF4444" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
