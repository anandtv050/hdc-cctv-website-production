"use client";

import { motion } from "framer-motion";

const items = [
  "CCTV Installation and Service",
  "Home Automation",
  "Gate Automation",
  "Intrusion Alarm System Wireless ",
  "AMC Services",
  "Mobile Punching Machine",
  "Biometric Punching Machine",
  "All Security Systems",
  "CCTV Rental",
];

export default function SurveillanceBanner() {
  return (
    <section className="relative py-5 overflow-hidden border-y border-[#1A1A2E]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#0C0C14] to-[#08080C]" />

      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-12 items-center"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="w-1 h-1 rounded-full bg-[#EF4444]/40" />
              <span className="text-xs text-[#6B7194] tracking-widest whitespace-nowrap uppercase font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-12 items-center ml-12"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="w-1 h-1 rounded-full bg-[#EF4444]/40" />
              <span className="text-xs text-[#6B7194] tracking-widest whitespace-nowrap uppercase font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
