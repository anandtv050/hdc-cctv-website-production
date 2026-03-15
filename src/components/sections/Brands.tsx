"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// 16 brands paired into 8 flip cards
const brandPairs = [
  [
    { name: "HIKVISION", logo: "/brands/hikvision.svg" },
    { name: "MILESIGHT", logo: "/brands/milesight.svg" },
  ],
  [
    { name: "DAHUA", logo: "/brands/dahua.svg" },
    { name: "PRAMA", logo: "/brands/prama.svg" },
  ],
  [
    { name: "CP PLUS", logo: "/brands/cpplus.svg" },
    { name: "HI-FOCUS", logo: "/brands/hifocus.svg" },
  ],
  [
    { name: "BOSCH", logo: "/brands/bosch.svg" },
    { name: "SPARSH", logo: "/brands/sparsh.svg" },
  ],
  [
    { name: "HONEYWELL", logo: "/brands/honeywell.svg" },
    { name: "ZION", logo: "/brands/zion.svg" },
  ],
  [
    { name: "PANASONIC", logo: "/brands/panasonic.svg" },
    { name: "NETGEAR", logo: "/brands/netgear.svg" },
  ],
  [
    { name: "UNV", logo: "/brands/unv.svg" },
    { name: "TENDA", logo: "/brands/tenda.svg" },
  ],
  [
    { name: "TP-LINK", logo: "/brands/tplink.svg" },
    { name: "D-LINK", logo: "/brands/dlink.svg" },
  ],
];

function FlipCard({ pair, index }: { pair: typeof brandPairs[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative h-28 cursor-pointer"
      style={{ perspective: "800px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTap={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-[#1A1A2E] bg-[#0F0F16]/60 backdrop-blur-sm p-6 flex items-center justify-center transition-colors duration-300 hover:border-[#EF4444]/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={pair[0].logo}
            alt={`${pair[0].name} logo`}
            width={140}
            height={70}
            className="object-contain filter brightness-90 opacity-80"
          />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-[#EF4444]/20 bg-[#0F0F16]/80 backdrop-blur-sm p-6 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.1)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image
            src={pair[1].logo}
            alt={`${pair[1].name} logo`}
            width={140}
            height={70}
            className="object-contain filter brightness-100 opacity-90"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Brands() {
  return (
    <section className="relative py-20 overflow-hidden border-t border-[#1A1A2E]">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1A1A2E] bg-[#0F0F16]/80 px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" style={{ boxShadow: "0 0 6px rgba(0, 212, 255, 0.5)" }} />
            <span className="text-xs text-[#6B7194] uppercase tracking-wider">Trusted Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#E8ECF4] mb-4"
          >
            Authorized Dealer for
            <span className="gradient-text ml-2">Premium Brands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-[#6B7194] max-w-2xl mx-auto"
          >
            We partner with industry-leading brands to provide you with the most reliable and advanced security solutions
          </motion.p>
        </div>

        {/* 8 Flip Cards — hover to reveal second brand */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {brandPairs.map((pair, index) => (
            <FlipCard key={pair[0].name} pair={pair} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
