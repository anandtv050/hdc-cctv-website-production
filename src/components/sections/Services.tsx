"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Wrench,
  FileCheck,
  Home,
  Wifi,
  Cctv,
  MonitorSmartphone,
  HardDrive,
} from "lucide-react";
import TiltCard from "@/components/TiltCard";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional installation of HD, IP & 4K cameras for homes, offices, Schools and Bank Sectors.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Scheduled maintenance and quick repairs to keep your surveillance running 24/7.",
  },
  {
    icon: FileCheck,
    title: "AMC Services",
    description: "Annual Maintenance Contracts with regular visits, priority support and guaranteed uptime.",
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Advanced CCTV-based home automation with motion alerts, remote monitoring, smart sensors and automated security systems for safer homes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile & Biometric Punching mechine",
    description: "Biometric and mobile attendance systems for secure employee time tracking, access control and real-time monitoring.",
  },
  {
    icon: Cctv,
    title: "CCTV Rental",
    description: "Flexible CCTV camera rental services for short-term surveillance and security monitoring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-28">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px]"
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
            <span className="text-[11px] font-medium text-[#EF4444] tracking-widest uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#E8ECF4] mb-4 leading-[1.15]">
            Everything you need for<br />
            <span className="gradient-text">complete security.</span>
          </h2>
          <p className="text-[#6B7194] text-[15px] leading-relaxed">
            End-to-end surveillance solutions — from planning to ongoing maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hover-dim-group">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <TiltCard className="relative group rounded-xl border border-[#1A1A2E] bg-[#0F0F16] p-7 h-full overflow-hidden cursor-default hover:border-[#00D4FF]/20 transition-colors duration-300">
                <service.icon
                  className="w-5 h-5 text-[#00D4FF] mb-5 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transition-all duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-[15px] font-semibold text-[#E8ECF4] mb-2.5">{service.title}</h3>
                <p className="text-[13px] text-[#6B7194] leading-relaxed">{service.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
