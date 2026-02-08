"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SurveillanceBanner from "@/components/sections/SurveillanceBanner";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  // Subtle CCTV-style page tracking — moves content 3-4px max
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const trackX = useSpring(rawX, { stiffness: 40, damping: 40 });
  const trackY = useSpring(rawY, { stiffness: 40, damping: 40 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      rawX.set(nx * -3);
      rawY.set(ny * -2);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [rawX, rawY]);

  return (
    <div className="min-h-screen bg-[#08080C] overflow-x-hidden relative noise-overlay">
      <CustomCursor />
      <Navbar />
      <motion.div style={{ x: trackX, y: trackY, willChange: "transform" }}>
        <Hero />
        <SurveillanceBanner />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}
