"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Top professional CCTV & Security brands
const brands = [
  { name: "HIKVISION", logo: "/brands/hikvision.svg" },
  { name: "DAHUA", logo: "/brands/dahua.svg" },
  { name: "CP PLUS", logo: "/brands/cpplus.svg" },
  { name: "BOSCH", logo: "/brands/bosch.svg" },
  { name: "HONEYWELL", logo: "/brands/honeywell.svg" },
  { name: "PANASONIC", logo: "/brands/panasonic.svg" },
  { name: "UNV", logo: "/brands/unv.svg" },
  { name: "TP-LINK", logo: "/brands/tplink.svg" },
];

export default function Brands() {
  return (
    <section className="relative py-20 overflow-hidden border-t border-[#1A1A2E]">
      {/* Background elements */}
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

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-28 rounded-xl border border-[#1A1A2E] bg-[#0F0F16]/60 backdrop-blur-sm p-6 flex items-center justify-center transition-all duration-300 hover:border-[#EF4444]/30 hover:bg-[#EF4444]/5 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]">

                {/* Brand Logo Display */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={140}
                    height={70}
                    className="object-contain filter brightness-90 opacity-75 group-hover:brightness-110 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#EF4444]/5 to-[#00D4FF]/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
