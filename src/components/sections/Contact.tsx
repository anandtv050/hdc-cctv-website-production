"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "+916235153938", sub: "Mon-Sat, 9:30AM-5PM", href: "tel:+916235153938", color: "#00D4FF" },
  { icon: MapPin, title: "Visit Us", value: "Mokeri,kozhikkode, kerala", sub: "Walk-in welcome", href: "https://maps.app.goo.gl/eUfT38Sx45RvHXCb6?g_st=iw", color: "#EF4444" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-28">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EF4444]/15 bg-[#EF4444]/5 px-3.5 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.4)" }} />
            <span className="text-[11px] font-medium text-[#EF4444] tracking-widest uppercase">Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#E8ECF4] mb-4 leading-[1.15]">
            Let&apos;s secure<br />
            <span className="gradient-text">your space.</span>
          </h2>
          <p className="text-[#6B7194] text-sm leading-relaxed">Give us a call or visit us directly. We&apos;re always ready to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto mb-10 hover-dim-group">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <a href={method.href} target={method.title === "Visit Us" ? "_blank" : undefined} rel={method.title === "Visit Us" ? "noopener noreferrer" : undefined}>
                <TiltCard className="group rounded-xl border border-[#1A1A2E] bg-[#0F0F16] p-5 sm:p-6 h-full cursor-pointer hover:border-[#00D4FF]/20 transition-colors duration-300 overflow-hidden text-left">
                  <method.icon className="w-5 h-5 mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" style={{ color: method.color }} strokeWidth={1.5} />
                  <h3 className="text-[13px] sm:text-[14px] font-medium text-[#E8ECF4] mb-1">{method.title}</h3>
                  <p className="text-[12px] sm:text-[13px] text-[#6B7194] mb-0.5">{method.value}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#4A4F6A]">{method.sub}</p>
                </TiltCard>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-[#1A1A2E] bg-[#0F0F16] p-6 text-center">
            <Clock className="w-4 h-4 text-[#00D4FF] mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#E8ECF4] mb-1">Working Hours</p>
            <p className="text-[12px] text-[#6B7194]">Mon - Sat: 9:30 AM - 5:00 PM</p>
            <p className="text-[11px] text-[#4A4F6A] mt-1">Sunday: By appointment</p>
          </div>
          <div className="rounded-xl border border-[#EF4444]/15 bg-[#EF4444]/[0.03] p-6 text-center">
            <Phone className="w-4 h-4 text-[#EF4444] mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#E8ECF4] mb-1">Emergency Support</p>
            <p className="text-[12px] text-[#6B7194] mb-3">System down? Available 24/7</p>
            <Button asChild size="sm" className="bg-[#EF4444]/10 hover:bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/20 hover:border-[#EF4444]/40 rounded-lg text-xs h-8 transition-all duration-200">
              <a href="tel:+916235153938"><Phone className="mr-1.5 w-3 h-3" />Emergency Call</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
