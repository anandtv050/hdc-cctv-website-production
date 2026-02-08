"use client";

import { Shield, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <Shield className="w-6 h-6 text-[#EF4444] group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all duration-300" strokeWidth={2.5} />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">HDC</span>
                <span className="text-[#EF4444] ml-1.5 font-medium">CCTV</span>
              </span>
            </a>
            <p className="text-[13px] text-[#4A4F6A] leading-relaxed max-w-xs mb-4">
              Professional CCTV installation, maintenance & AMC services.
            </p>
            <div className="flex gap-2">
              <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7194] hover:text-[#00D4FF] transition-colors border border-[#1A1A2E] hover:border-[#00D4FF]/30 rounded-lg px-3 py-1.5">
                <Phone className="w-3 h-3" />Call
              </a>
            </div>
          </div>
          <div>
            <p className="text-[12px] text-[#4A4F6A] uppercase tracking-wider mb-4 font-medium">Navigation</p>
            <div className="space-y-2.5">
              {[{ n: "Home", h: "#home" }, { n: "Services", h: "#services" }, { n: "About", h: "#about" }, { n: "Work", h: "#gallery" }, { n: "Contact", h: "#contact" }].map((l) => (
                <a key={l.n} href={l.h} className="block text-[13px] text-[#6B7194] hover:text-[#00D4FF] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[12px] text-[#4A4F6A] uppercase tracking-wider mb-4 font-medium">Services</p>
            <div className="space-y-2.5">
              {["CCTV Installation", "Maintenance", "AMC Services", "Remote Monitoring", "Network Setup"].map((s) => (
                <a key={s} href="#services" className="block text-[13px] text-[#6B7194] hover:text-[#00D4FF] transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#1A1A2E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#4A4F6A]">&copy; {currentYear} HDC CCTV HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
