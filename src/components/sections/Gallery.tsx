"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
    title: "Banking",
    description: (
      <>
        High-security CCTV surveillance systems installed for leading banks including{" "}
        <span className="text-[#EF4444] font-medium">
          Federal Bank, Urban Bank, Purameri Co-operative Bank
        </span>
        , ensuring secure monitoring and protection for financial environments.
      </>
    ),
    tag: "Bank"
  },
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    title: "Education Institutions",
    description: (
      <>
        Trusted campus security systems installed for schools including{" "}
        <span className="text-[#EF4444] font-medium">
          NHSS Vattoli, SHS Vattoli
        </span>
        , ensuring student safety and campus monitoring.
      </>
    ),
    tag: "Education"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    title: "Residential",
    description:
      "Smart CCTV security systems installed for homes and apartments providing night vision monitoring, remote mobile access and reliable home protection.",
    tag: "Home"
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    title: "Healthcare",
    description: (
      <>
        Professional surveillance systems implemented for healthcare facilities such as{" "}
        <span className="text-[#EF4444] font-medium">
           Micro Labs
        </span>
        , ensuring safe and monitored environments for patients and staff.
      </>
    ),
    tag: "Healthcare"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    title: "Retail & Business",
    description:
      "Advanced CCTV monitoring solutions for retail stores and business establishments to improve security, monitor operations and prevent theft.",
    tag: "Business"
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    title: "Warehouse",
    description:
      "Large-area CCTV surveillance systems designed to protect warehouses, monitor logistics activity and secure inventory storage facilities.",
    tag: "Industrial"
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 md:py-24 lg:py-28">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mb-10 md:mb-14"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 hover-dim-group">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <TiltCard className="group rounded-xl border border-[#1A1A2E] bg-[#0F0F16] overflow-hidden h-full cursor-default hover:border-[#00D4FF]/20 transition-colors duration-300">
                <div className="relative h-44 sm:h-48 md:h-52 border-b border-[#1A1A2E] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C18]/60 to-[#0F0F16]/80" />
                  <span className="absolute top-3 right-3 text-[10px] text-[#E8ECF4] font-medium tracking-wider uppercase border border-[#E8ECF4]/20 rounded-full px-2.5 py-0.5 bg-[#0F0F16]/80 backdrop-blur-sm z-10">{project.tag}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-[15px] font-semibold text-[#E8ECF4] mb-2">{project.title}</h3>
                  <p className="text-[13px] sm:text-[13px] text-[#6B7194] leading-relaxed">{project.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
