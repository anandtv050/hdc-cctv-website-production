"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Award, Zap, HeadphonesIcon } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const reasons = [
  { icon: ShieldCheck, title: "Certified Experts", desc: "Trained technicians with years of field experience" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance, always a call away" },
  { icon: Users, title: "200+ Clients", desc: "Trusted by homes, offices and enterprises" },
  { icon: Award, title: "Premium Brands", desc: "Top-quality cameras with full warranty" },
  { icon: Zap, title: "Fast Turnaround", desc: "Quick installation from survey to setup" },
  { icon: HeadphonesIcon, title: "AMC Plans", desc: "Flexible contracts to keep systems running" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-28">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/15 bg-[#EF4444]/5 px-3.5 py-1 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.4)" }} />
              <span className="text-[11px] font-medium text-[#EF4444] tracking-widest uppercase">Why HDC CCTV</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#E8ECF4] mb-6 leading-[1.15]">
              We don&apos;t just install.<br />
              <span className="gradient-text">We protect.</span>
            </h2>
            <p className="text-[#6B7194] text-[15px] leading-relaxed mb-8 max-w-lg">
              Security isn&apos;t just our business — it&apos;s our commitment.
              With hundreds of installations and a growing client base,
              we bring professional-grade surveillance to every project.
            </p>
            <div className="space-y-3">
              {[
                "Custom site survey & security planning",
                "Premium HD, IP & 4K camera systems",
                "Clean installation with cable management",
                "Mobile app setup for live remote viewing",
                "Dedicated post-installation support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                  <span className="text-sm text-[#6B7194]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 hover-dim-group">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <TiltCard className="group rounded-xl border border-[#1A1A2E] bg-[#0F0F16] p-5 h-full cursor-default overflow-hidden relative hover:border-[#EF4444]/20 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-[#EF4444] mb-3 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all duration-300" strokeWidth={1.5} />
                  <h3 className="text-[13px] font-medium text-[#E8ECF4] mb-1">{item.title}</h3>
                  <p className="text-[11px] text-[#6B7194] leading-relaxed">{item.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
