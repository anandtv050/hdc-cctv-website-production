"use client";

import { motion } from "framer-motion";
import { Building2, Home, Store, Factory, Warehouse, Hospital } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const projects = [
  { icon: Home, title: "Residential", cameras: "4 Cameras", description: "HD system with night vision for apartment security", tag: "Home" },
  { icon: Store, title: "Retail Store", cameras: "8 Cameras", description: "IP camera system with POS integration for retail monitoring", tag: "Business" },
  { icon: Building2, title: "Office Complex", cameras: "16 Cameras", description: "4K system with access control for multi-floor office", tag: "Corporate" },
  { icon: Warehouse, title: "Warehouse", cameras: "12 Cameras", description: "PTZ cameras with motion detection for large facilities", tag: "Industrial" },
  { icon: Factory, title: "Factory Floor", cameras: "20 Cameras", description: "Surveillance with analytics and real-time alerts", tag: "Industrial" },
  { icon: Hospital, title: "Hospital", cameras: "24 Cameras", description: "Comprehensive coverage for patient safety and assets", tag: "Healthcare" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-28">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/15 bg-[#EF4444]/5 px-3.5 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.4)" }} />
            <span className="text-[11px] font-medium text-[#EF4444] tracking-widest uppercase">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#E8ECF4] mb-4 leading-[1.15]">
            Projects across<br />
            <span className="gradient-text">every sector.</span>
          </h2>
          <p className="text-[#6B7194] text-[15px] leading-relaxed">From homes to enterprises — reliable surveillance installations.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hover-dim-group">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <TiltCard className="group rounded-xl border border-[#1A1A2E] bg-[#0F0F16] overflow-hidden h-full cursor-default hover:border-[#00D4FF]/20 transition-colors duration-300">
                <div className="relative h-32 sm:h-36 bg-gradient-to-br from-[#0C0C18] to-[#0F0F16] flex items-center justify-center border-b border-[#1A1A2E] overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/[0.02] to-[#EF4444]/[0.02]" />
                  <project.icon className="w-10 h-10 text-[#1A1A2E] group-hover:text-[#00D4FF]/20 group-hover:scale-125 transition-all duration-700" strokeWidth={1} />
                  <span className="absolute top-3 right-3 text-[10px] text-[#6B7194] font-medium tracking-wider uppercase border border-[#1A1A2E] rounded-full px-2.5 py-0.5 bg-[#0F0F16]/80">{project.tag}</span>
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-[#6B7194]">{project.cameras}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-[14px] font-medium text-[#E8ECF4] mb-1.5">{project.title}</h3>
                  <p className="text-[12px] text-[#6B7194] leading-relaxed">{project.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
