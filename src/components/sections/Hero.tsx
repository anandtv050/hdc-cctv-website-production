"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import CctvCamera from "./CctvCamera";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Hero() {
  const mouse = useMousePosition();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Cursor brightness glow — soft white spotlight that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.03), transparent 60%)`,
          opacity: mouse.x === 0 && mouse.y === 0 ? 0 : 1,
        }}
      />

      {/* Ambient gradient blobs */}
      <motion.div
        animate={{ x: mouse.normalizedX * -20, y: mouse.normalizedY * -20 }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(239, 68, 68, 0.04) 50%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: mouse.normalizedX * 15, y: mouse.normalizedY * 15 }}
        transition={{ type: "spring", stiffness: 25, damping: 30 }}
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, rgba(0, 212, 255, 0.03) 50%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {[
        { top: "15%", left: "8%", speed: 12, size: 3 },
        { top: "25%", left: "75%", speed: 18, size: 2 },
        { top: "60%", left: "12%", speed: 15, size: 2 },
        { top: "70%", left: "85%", speed: 10, size: 3 },
        { top: "45%", left: "92%", speed: 20, size: 2 },
        { top: "80%", left: "50%", speed: 14, size: 2 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ x: mouse.normalizedX * dot.speed, y: mouse.normalizedY * dot.speed }}
          transition={{ type: "spring", stiffness: 20, damping: 25 }}
          className="absolute hidden lg:block"
          style={{ top: dot.top, left: dot.left }}
        >
          <motion.div
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            className="rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              background: i % 2 === 0 ? "#00D4FF" : "#EF4444",
            }}
          />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E] bg-[#0F0F16]/80 px-4 py-1.5 mb-8 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] pulse-soft" style={{ boxShadow: "0 0 6px rgba(239, 68, 68, 0.5)" }} />
              <span className="text-xs text-[#6B7194]">Professional Security Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#E8ECF4] mb-6"
            >
              Surveillance that
              <br />
              <span className="gradient-text">never sleeps.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[15px] text-[#6B7194] leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
            >
              Expert CCTV installation, maintenance & AMC services.
              Protecting your property with reliable surveillance, around the clock.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button
                asChild
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium h-11 px-6 rounded-lg text-sm gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                <a href="tel:+916235153938">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 px-6 rounded-lg text-sm gap-2 border-[#1A1A2E] text-[#6B7194] hover:text-[#E8ECF4] hover:border-[#EF4444]/25 hover:bg-[#EF4444]/5 transition-all duration-200 bg-transparent"
              >
                <a href="#contact">Contact Details</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-10 mt-14 pt-8 border-t border-[#1A1A2E] justify-center lg:justify-start"
            >
              {[
                { value: "500+", label: "Installations" },
                { value: "200+", label: "Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[11px] text-[#6B7194] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <CctvCamera />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080C] to-transparent pointer-events-none" />
    </section>
  );
}
