"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#08080C]/70 backdrop-blur-2xl border-b border-[#1A1A2E]/60 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <Shield className="w-7 h-7 text-[#EF4444] group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all duration-300" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">HDC</span>
            <span className="text-[#EF4444] ml-1.5 font-medium">CCTV</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[13px] text-[#6B7194] hover:text-[#00D4FF] transition-colors duration-200 rounded-lg hover:bg-[#00D4FF]/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] text-[13px] rounded-lg px-4 h-9 gap-2 transition-all duration-200 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:shadow-[0_0_25px_rgba(0,212,255,0.2)]"
          >
            <a href="tel:+916235153938">
              <Phone className="w-3.5 h-3.5" />
              Connect
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-[#6B7194] hover:text-[#00D4FF] transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0F0F16]/95 backdrop-blur-2xl border-t border-[#1A1A2E] mt-2"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-3 py-2.5 text-[#6B7194] hover:text-[#00D4FF] transition-colors rounded-lg text-sm hover:bg-[#00D4FF]/5"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/20 rounded-lg h-10"
              >
                <a href="tel:+916235153938" onClick={() => setIsMobileOpen(false)}>
                  <Phone className="mr-2 w-4 h-4" />
                  Connect
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
