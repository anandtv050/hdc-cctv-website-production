"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveringRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 800, damping: 35 });
  const cursorY = useSpring(mouseY, { stiffness: 800, damping: 35 });
  const bubble1X = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const bubble1Y = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const bubble2X = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const bubble2Y = useSpring(mouseY, { stiffness: 60, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Use event delegation instead of attaching to every element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], .tilt-card, input, textarea, [data-cursor-hover]'
      );
      if (isInteractive && !isHoveringRef.current) {
        isHoveringRef.current = true;
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null;
      if (!target || !target.closest?.('a, button, [role="button"], .tilt-card, input, textarea, [data-cursor-hover]')) {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          setIsHovering(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  // Only hide on pure touch devices (phones/tablets), not touch-capable laptops
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s", willChange: "auto" }}
    >
      {/* Bubble 2 - largest trail */}
      <motion.div
        animate={{
          width: isHovering ? 90 : 40,
          height: isHovering ? 90 : 40,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: bubble2X,
          y: bubble2Y,
          background: isHovering
            ? "radial-gradient(circle, rgba(0, 212, 255, 0.35) 0%, rgba(239, 68, 68, 0.15) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 212, 255, 0.25) 0%, rgba(239, 68, 68, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Bubble 1 - medium trail */}
      <motion.div
        animate={{
          width: isHovering ? 60 : 28,
          height: isHovering ? 60 : 28,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: bubble1X,
          y: bubble1Y,
          background: isHovering
            ? "radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 212, 255, 0.35) 0%, rgba(239, 68, 68, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Main dot */}
      <motion.div
        animate={{
          width: isHovering ? 18 : 8,
          height: isHovering ? 18 : 8,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          background: "#00D4FF",
          boxShadow: isHovering
            ? "0 0 20px rgba(0, 212, 255, 0.7), 0 0 50px rgba(0, 212, 255, 0.3)"
            : "0 0 10px rgba(0, 212, 255, 0.5), 0 0 25px rgba(0, 212, 255, 0.2)",
        }}
      />
    </div>
  );
}
