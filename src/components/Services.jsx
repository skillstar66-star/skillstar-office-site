import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Target, Globe, Layout, Palette, Bot, Code2, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "SEO, GEO & AEO Optimization",
    shortDesc: "Search & AI Visibility",
    desc: "Optimize your business for Google Search, AI search engines, voice assistants, and local discovery platforms.",
    icon: Search,
    features: ["Technical SEO", "Local SEO", "Answer Engine Optimization", "AI Search Optimization", "Google Business Optimization", "Schema Implementation"],
    color: "emerald",
    hex: "#10b981",
    theme: {
      shadow: "rgba(16, 185, 129, 0.5)",
      beam: "from-emerald-500/0 via-emerald-500/30 to-emerald-500/80",
      pedestal: "border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.8)]",
      core: "bg-emerald-500",
      border: "border-emerald-500/50"
    }
  },
  {
    num: "02",
    title: "Performance Marketing & Lead Gen",
    shortDesc: "AI-Powered Ads & Leads",
    desc: "Generate high-quality leads and increase revenue with AI-powered advertising strategies.",
    icon: Target,
    features: ["Google Ads", "Meta Ads", "LinkedIn Advertising", "YouTube Campaigns", "Conversion Funnel Optimization", "Retargeting Campaigns"],
    color: "rose",
    hex: "#f43f5e",
    theme: {
      shadow: "rgba(244, 63, 94, 0.5)",
      beam: "from-rose-500/0 via-rose-500/30 to-rose-500/80",
      pedestal: "border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.8)]",
      core: "bg-rose-500",
      border: "border-rose-500/50"
    }
  },
  {
    num: "03",
    title: "Enterprise Website Development",
    shortDesc: "Scalable Web Platforms",
    desc: "Build modern websites and scalable digital platforms engineered for conversions and performance.",
    icon: Globe,
    features: ["Business Websites", "E-Commerce Websites", "Landing Pages", "SaaS Platforms", "Web Applications", "Progressive Web Apps"],
    color: "blue",
    hex: "#3b82f6",
    theme: {
      shadow: "rgba(59, 130, 246, 0.5)",
      beam: "from-blue-500/0 via-blue-500/30 to-blue-500/80",
      pedestal: "border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8)]",
      core: "bg-blue-500",
      border: "border-blue-500/50"
    }
  },
  {
    num: "04",
    title: "UI / UX Experience Design",
    shortDesc: "Intuitive Digital Journeys",
    desc: "Create intuitive digital experiences that improve engagement and customer satisfaction.",
    icon: Layout,
    features: ["Dashboard Design", "Mobile App UI", "Website Interfaces", "SaaS Product Design", "UX Research"],
    color: "purple",
    hex: "#a855f7",
    theme: {
      shadow: "rgba(168, 85, 247, 0.5)",
      beam: "from-purple-500/0 via-purple-500/30 to-purple-500/80",
      pedestal: "border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.8)]",
      core: "bg-purple-500",
      border: "border-purple-500/50"
    }
  },
  {
    num: "05",
    title: "Branding & Creative Solutions",
    shortDesc: "Memorable Brand Identities",
    desc: "Build memorable visual identities that strengthen trust and market authority.",
    icon: Palette,
    features: ["Logo Design", "Brand Identity", "Motion Graphics", "Social Media Creatives", "Packaging Design", "Corporate Presentations"],
    color: "amber",
    hex: "#f59e0b",
    theme: {
      shadow: "rgba(245, 158, 11, 0.5)",
      beam: "from-amber-500/0 via-amber-500/30 to-amber-500/80",
      pedestal: "border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.8)]",
      core: "bg-amber-500",
      border: "border-amber-500/50"
    }
  },
  {
    num: "06",
    title: "AI & Intelligent Automation",
    shortDesc: "Smart Business Automation",
    desc: "Improve operational efficiency and customer engagement using intelligent AI systems.",
    icon: Bot,
    features: ["AI Chatbots", "Virtual Assistants", "Workflow Automation", "CRM Integrations", "Predictive Analytics", "Custom AI Tools"],
    color: "orange",
    hex: "#f97316",
    theme: {
      shadow: "rgba(249, 115, 22, 0.5)",
      beam: "from-orange-500/0 via-orange-500/30 to-orange-500/80",
      pedestal: "border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.8)]",
      core: "bg-orange-500",
      border: "border-orange-500/50"
    }
  },
  {
    num: "07",
    title: "Custom Software Development",
    shortDesc: "Tailored Software Ecosystems",
    desc: "Build scalable software ecosystems tailored to your business operations.",
    icon: Code2,
    features: ["ERP Systems", "CRM Platforms", "SaaS Products", "Mobile Applications", "API Integrations", "Workflow Systems"],
    color: "indigo",
    hex: "#6366f1",
    theme: {
      shadow: "rgba(99, 102, 241, 0.5)",
      beam: "from-indigo-500/0 via-indigo-500/30 to-indigo-500/80",
      pedestal: "border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.8)]",
      core: "bg-indigo-500",
      border: "border-indigo-500/50"
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id="services" className="relative py-24 bg-[#03050F] overflow-hidden">
      {/* Deep Space / Nebula Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[200px]"></div>

        {/* Subtle star field dots overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-500/50"></div>
            <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">OUR CORE EXPERTISE</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            End-to-End Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Solutions</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            We forge digital gems that power growth, blending stunning design, cutting-edge code, and AI mastery into unified ecosystems.
          </p>
        </motion.div>

        {/* 3D Crystal Services Layout */}
        <div className="flex flex-wrap justify-center gap-y-12 sm:gap-y-16 md:gap-y-24 gap-x-2 sm:gap-x-6 md:gap-x-10 max-w-[1400px] mx-auto pb-12">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "300px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              key={service.num}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col items-center w-[22%] sm:w-[280px] md:w-[300px] lg:w-[22%] shrink-0 cursor-pointer"
            >

              {/* === THE CRYSTAL (Realistic Faceted Gem) === */}
              <motion.div
                animate={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: [0, -15, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: (i % 3) * 0.5 }}
                className="relative z-10 flex items-center justify-center mb-12 sm:mb-24 w-12 h-20 sm:w-28 sm:h-40 md:w-32 md:h-48 group"
              >
                {/* Crystal Outer Shell & Base Color */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    clipPath: 'polygon(50% 0%, 95% 25%, 100% 60%, 50% 100%, 0% 60%, 5% 25%)',
                    background: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, ${service.hex}60 40%, rgba(0,0,0,0.9) 100%)`,
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  {/* Ambient Core Glow */}
                  <div className="absolute inset-0 opacity-80 mix-blend-screen" style={{ background: `radial-gradient(circle at 50% 60%, ${service.hex}, transparent 70%)` }}></div>

                  {/* --- FACETS (Simulating 3D cuts) --- */}

                  {/* Top Left Facet */}
                  <div className="absolute inset-0 opacity-70" style={{ clipPath: 'polygon(50% 0%, 5% 25%, 35% 40%)', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.1))' }}></div>
                  {/* Top Right Facet */}
                  <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(50% 0%, 95% 25%, 65% 40%)', background: 'linear-gradient(-135deg, rgba(255,255,255,0.9), transparent)' }}></div>
                  {/* Center Top Facet */}
                  <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(50% 0%, 35% 40%, 65% 40%)', background: `linear-gradient(to bottom, ${service.hex}, transparent)` }}></div>

                  {/* Middle Left Facet */}
                  <div className="absolute inset-0 opacity-20" style={{ clipPath: 'polygon(5% 25%, 0% 60%, 35% 40%)', background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)' }}></div>
                  {/* Middle Right Facet */}
                  <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(95% 25%, 100% 60%, 65% 40%)', background: 'linear-gradient(to left, rgba(255,255,255,0.8), transparent)' }}></div>

                  {/* Center Diamond Facet */}
                  <div className="absolute inset-0 opacity-50" style={{ clipPath: 'polygon(35% 40%, 65% 40%, 80% 65%, 50% 85%, 20% 65%)', background: `radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, ${service.hex}40 100%)` }}></div>

                  {/* Bottom Left Facet */}
                  <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(0% 60%, 50% 100%, 20% 65%)', background: `linear-gradient(to top right, ${service.hex}, transparent)` }}></div>
                  {/* Bottom Right Facet */}
                  <div className="absolute inset-0 opacity-60" style={{ clipPath: 'polygon(100% 60%, 50% 100%, 80% 65%)', background: `linear-gradient(to top left, rgba(255,255,255,0.8), transparent)` }}></div>
                  {/* Bottom Center Facet */}
                  <div className="absolute inset-0 opacity-80 mix-blend-screen" style={{ clipPath: 'polygon(20% 65%, 80% 65%, 50% 100%)', background: `linear-gradient(to top, ${service.hex}, transparent)` }}></div>

                  {/* Light Reflection Streaks */}
                  <div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.9) 40%, transparent 45%)' }}></div>
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: 'linear-gradient(-105deg, transparent 65%, rgba(255,255,255,0.8) 70%, transparent 75%)' }}></div>
                </div>

                {/* Central Icon */}
                <div className="relative z-20 text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-5 h-5 sm:w-11 sm:h-11" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* === THE PEDESTAL (Realistic Stone) === */}
              <div className="absolute bottom-20 sm:bottom-40 md:bottom-44 flex flex-col items-center perspective-[1000px] pointer-events-none z-0">
                {/* Light Beam shooting up */}
                <div
                  className="absolute bottom-0 w-8 sm:w-20 h-24 sm:h-48 blur-xl sm:blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{ background: `linear-gradient(to top, ${service.hex}, transparent)` }}
                ></div>

                {/* 3D Base Structure */}
                <div className="relative -mt-4 sm:-mt-8 group-hover:-mt-3 sm:group-hover:-mt-6 transition-all duration-500">

                  {/* Layer 1: Bottom Shadow Base */}
                  <div className="absolute top-2 sm:top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-44 sm:h-44 rotate-x-[75deg] bg-black rounded-full blur-[10px] sm:blur-[20px] opacity-90"></div>

                  {/* Layer 2: Main Heavy Stone Block */}
                  <div
                    className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-36 sm:h-36 rotate-x-[75deg] rounded-full border border-white/5"
                    style={{
                      backgroundColor: '#0a0a0a',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231f1f1f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                      boxShadow: `inset 0 -20px 40px rgba(0,0,0,1), 0 20px 30px rgba(0,0,0,0.9)`
                    }}
                  ></div>

                  {/* Layer 3: Top Carved Stone Plinth */}
                  <div
                    className="relative w-10 h-10 sm:w-28 sm:h-28 rotate-x-[75deg] rounded-full border-t border-white/20"
                    style={{
                      backgroundColor: '#111',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232a2a2a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                      boxShadow: `inset 0 10px 20px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,1)`
                    }}
                  ></div>

                  {/* Glowing Energy Core Center */}
                  <div
                    className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-24 sm:h-24 rotate-x-[75deg] blur-[8px] sm:blur-[15px] opacity-90 group-hover:blur-[12px] sm:group-hover:blur-[25px] transition-all duration-500 z-20"
                    style={{ backgroundColor: service.hex }}
                  ></div>

                  {/* Orbital Runes/Rings (Animated) */}
                  <div
                    className="absolute top-[-10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-32 sm:h-32 rotate-x-[75deg] rounded-full border sm:border-2 border-dashed animate-[spin_10s_linear_infinite] opacity-80 group-hover:animate-[spin_5s_linear_infinite] z-30"
                    style={{ borderColor: service.hex, boxShadow: `0 0 15px ${service.hex}` }}
                  ></div>
                  <div
                    className="absolute top-[-10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-40 sm:h-40 rotate-x-[75deg] rounded-full border-t-2 border-b-2 sm:border-t-[3px] sm:border-b-[3px] border-transparent animate-[spin_15s_linear_infinite_reverse] opacity-50 z-30"
                    style={{ borderTopColor: service.hex, borderBottomColor: service.hex, boxShadow: `0 0 20px ${service.theme.shadow}` }}
                  ></div>
                </div>
              </div>

              {/* === SERVICE INFO CARD === */}
              <div
                className="relative z-20 w-[120%] sm:w-full bg-[#050714]/80 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-5 md:p-6 text-center transition-all duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:bg-[#0A0F1E]/90 shadow-2xl"
                style={{ borderColor: `var(--hover-border, rgba(255,255,255,0.1))` }}
                onMouseEnter={(e) => e.currentTarget.style.setProperty('--hover-border', `${service.hex}80`)}
                onMouseLeave={(e) => e.currentTarget.style.setProperty('--hover-border', 'rgba(255,255,255,0.1)')}
              >
                {/* Top highlight bar */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: service.hex, color: service.hex }}
                ></div>

                <h3 className="text-white font-bold text-[8px] sm:text-[15px] md:text-[17px] leading-tight mb-0 sm:mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                <p
                  className="hidden sm:block text-[11px] md:text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: service.hex }}
                >
                  {service.shortDesc}
                </p>

                <div className="hidden sm:flex items-center justify-center gap-1 text-[10px] uppercase tracking-widest text-white/40 font-semibold group-hover:text-white transition-colors">
                  Explore <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>


      </div>

      {/* Modal / Expanded Card Overlay */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-[#02030A]/90 backdrop-blur-lg cursor-pointer"
              ></motion.div>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl bg-[#0A0D1A] border rounded-3xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
                style={{
                  borderColor: `${selectedService.hex}40`,
                  boxShadow: `0 0 80px ${selectedService.hex}30`
                }}
              >
                {/* Modal Header */}
                <div
                  className="p-6 sm:p-8 border-b flex items-start justify-between gap-4 relative overflow-hidden shrink-0"
                  style={{
                    borderColor: `${selectedService.hex}20`,
                    background: `linear-gradient(to bottom right, ${selectedService.hex}15, transparent)`
                  }}
                >
                  {/* Large decorative background icon */}
                  <selectedService.icon
                    className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.03]"
                    style={{ color: selectedService.hex }}
                  />

                  <div className="flex items-center gap-5 relative z-10">
                    {/* Live Animated Crystal for Modal */}
                    <div className="relative w-16 h-24 shrink-0 flex items-center justify-center transform scale-[0.85] md:scale-100 mr-2 md:mr-0">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {/* Crystal Shell */}
                        <div
                          className="absolute inset-0"
                          style={{
                            clipPath: 'polygon(50% 0%, 95% 25%, 100% 60%, 50% 100%, 0% 60%, 5% 25%)',
                            background: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, ${selectedService.hex}60 40%, rgba(0,0,0,0.9) 100%)`,
                            boxShadow: `0 0 30px ${selectedService.hex}`
                          }}
                        >
                          {/* Glow & Facets */}
                          <div className="absolute inset-0 opacity-80 mix-blend-screen" style={{ background: `radial-gradient(circle at 50% 60%, ${selectedService.hex}, transparent 70%)` }}></div>
                          <div className="absolute inset-0 opacity-70" style={{ clipPath: 'polygon(50% 0%, 5% 25%, 35% 40%)', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.1))' }}></div>
                          <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(50% 0%, 95% 25%, 65% 40%)', background: 'linear-gradient(-135deg, rgba(255,255,255,0.9), transparent)' }}></div>
                          <div className="absolute inset-0 opacity-40" style={{ clipPath: 'polygon(50% 0%, 35% 40%, 65% 40%)', background: `linear-gradient(to bottom, ${selectedService.hex}, transparent)` }}></div>
                          <div className="absolute inset-0 opacity-50" style={{ clipPath: 'polygon(35% 40%, 65% 40%, 80% 65%, 50% 85%, 20% 65%)', background: `radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, ${selectedService.hex}40 100%)` }}></div>
                          <div className="absolute inset-0 opacity-80 mix-blend-screen" style={{ clipPath: 'polygon(20% 65%, 80% 65%, 50% 100%)', background: `linear-gradient(to top, ${selectedService.hex}, transparent)` }}></div>
                          <div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.9) 40%, transparent 45%)' }}></div>
                        </div>

                        {/* Floating Pedestal Shadow under the crystal inside modal */}
                        <div
                          className="absolute -bottom-6 w-12 h-3 rounded-full blur-[4px] opacity-60"
                          style={{ backgroundColor: selectedService.hex }}
                        ></div>

                        <selectedService.icon size={20} className="relative z-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" strokeWidth={2} />
                      </motion.div>
                    </div>

                    <div>
                      <span
                        className="font-bold tracking-widest text-[10px] uppercase mb-1 block"
                        style={{ color: selectedService.hex }}
                      >
                        SERVICE {selectedService.num}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{selectedService.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors shrink-0 relative z-10"
                  >
                    <X size={20} className="text-white/70" />
                  </button>
                </div>

                {/* Modal Body */}
                <div
                  className="p-6 sm:p-8 overflow-y-auto flex-1 min-h-[300px] overscroll-contain custom-scrollbar"
                  data-lenis-prevent="true"
                >
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                    {selectedService.desc}
                  </p>

                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: selectedService.hex, color: selectedService.hex }}></span>
                    What's Included
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 transition-colors hover:bg-white/10"
                        style={{ ':hover': { borderColor: `${selectedService.hex}40` } }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${selectedService.hex}20` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedService.hex }}></div>
                        </div>
                        <span className="text-sm text-white/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-white/10 bg-[#050714] flex justify-end shrink-0">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white px-8 py-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      backgroundColor: selectedService.hex,
                      boxShadow: `0 0 20px ${selectedService.hex}40`
                    }}
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Services;
