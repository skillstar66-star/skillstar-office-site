import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Compass, Leaf, Car, Coffee, X, CheckCircle2, Building, Briefcase, ArrowRight, Handshake, Rocket, Trophy } from 'lucide-react';
import innerCompassLogo from '../assets/inner compass yoga.jpeg';
import laCafeLogo from '../assets/la cafe.png';
import rokeaLogo from '../assets/rokea.png';
import seedsTherapyLogo from '../assets/seedstherapy.png';
import senthurLogo from '../assets/senthur logo.png';

const clients = [
  {
    id: 1,
    name: "Rokeabyrk",
    industry: "CONSULTING",
    logoText: "ROKEABYRK",
    icon: Star,
    logo: rokeaLogo,
    theme: {
      color: "text-purple-400",
      border: "border-purple-500/40",
      shadow: "rgba(168,85,247,0.4)",
      beam: "from-purple-500/0 via-purple-500/20 to-purple-500/40",
      pedestal: "border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]",
      core: "bg-purple-500",
      iconBg: "bg-purple-500/10",
      hoverBorder: "hover:border-purple-400"
    },
    about: "A premier consulting and strategic advisory firm empowering businesses to navigate complex market dynamics and achieve sustainable growth.",
    solutions: [
      "Developed a comprehensive digital brand identity",
      "Implemented intelligent workflow automation systems",
      "Designed an immersive corporate web platform"
    ]
  },
  {
    id: 2,
    name: "Inner Compass Yoga Center",
    industry: "YOGA & WELLNESS",
    logoText: "COMPASS",
    icon: Compass,
    logo: innerCompassLogo,
    theme: {
      color: "text-blue-400",
      border: "border-blue-500/40",
      shadow: "rgba(59,130,246,0.4)",
      beam: "from-blue-500/0 via-blue-500/20 to-blue-500/40",
      pedestal: "border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]",
      core: "bg-blue-500",
      iconBg: "bg-blue-500/10",
      hoverBorder: "hover:border-blue-400"
    },
    about: "A serene yoga and mindfulness center dedicated to helping individuals find inner peace, flexibility, and physical wellness.",
    solutions: [
      "Built a seamless class scheduling and booking system",
      "Created highly targeted community engagement campaigns",
      "Optimized online presence for local search visibility"
    ]
  },
  {
    id: 3,
    name: "Seeds Therapy Center",
    industry: "HEALTHCARE",
    logoText: "SEEDS",
    icon: Leaf,
    isFeatured: true,
    logo: seedsTherapyLogo,
    theme: {
      color: "text-emerald-400",
      border: "border-emerald-500/40",
      shadow: "rgba(16,185,129,0.4)",
      beam: "from-emerald-500/0 via-emerald-500/20 to-emerald-500/40",
      pedestal: "border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.6)]",
      core: "bg-emerald-500",
      iconBg: "bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-400"
    },
    about: "A holistic healthcare facility specializing in pediatric and adult therapeutic services with a focus on comprehensive well-being.",
    solutions: [
      "Developed a secure patient portal for digital consultations",
      "Executed an Answer Engine Optimization (AEO) campaign",
      "Designed patient-centric mobile application interfaces"
    ]
  },
  {
    id: 4,
    name: "Senthur Automobiles",
    industry: "AUTOMOTIVE",
    logoText: "SENTHUR",
    icon: Car,
    logo: senthurLogo,
    theme: {
      color: "text-amber-400",
      border: "border-amber-500/40",
      shadow: "rgba(245,158,11,0.4)",
      beam: "from-amber-500/0 via-amber-500/20 to-amber-500/40",
      pedestal: "border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.6)]",
      core: "bg-amber-500",
      iconBg: "bg-amber-500/10",
      hoverBorder: "hover:border-amber-400"
    },
    about: "A trusted and established automotive dealership and service center providing top-tier vehicle maintenance and sales.",
    solutions: [
      "Launched a high-conversion vehicle inventory showcase",
      "Implemented automated CRM for service reminders",
      "Ran targeted lead generation ads increasing walk-ins by 45%"
    ]
  },
  {
    id: 5,
    name: "La Cafe",
    industry: "HOSPITALITY",
    logoText: "LA CAFE",
    icon: Coffee,
    logo: laCafeLogo,
    theme: {
      color: "text-pink-400",
      border: "border-pink-500/40",
      shadow: "rgba(236,72,153,0.4)",
      beam: "from-pink-500/0 via-pink-500/20 to-pink-500/40",
      pedestal: "border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.6)]",
      core: "bg-pink-500",
      iconBg: "bg-pink-500/10",
      hoverBorder: "hover:border-pink-400"
    },
    about: "A modern, aesthetic artisan cafe bringing premium coffee experiences and artisanal baked goods to the local community.",
    solutions: [
      "Designed a visually stunning digital menu experience",
      "Built an online ordering and loyalty rewards platform",
      "Revamped social media aesthetics to drive brand awareness"
    ]
  }
];

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedClient) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedClient]);

  return (
    <section id="clients" className="relative py-24 bg-[#030614] overflow-hidden min-h-screen flex flex-col items-center">
      {/* Deep Space Background Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030614] to-[#030614] pointer-events-none"></div>

      {/* Orbital Perspective Rings */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] pointer-events-none flex items-center justify-center perspective-[1200px]">
        {/* Outer Ring */}
        <div className="absolute w-[1800px] h-[1800px] rounded-full border border-white/5 rotate-x-[75deg]"></div>
        {/* Middle Ring */}
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-blue-500/10 rotate-x-[75deg] border-dashed"></div>
        {/* Inner Ring */}
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-purple-500/15 rotate-x-[75deg]"></div>
        {/* Center Glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 rotate-x-[75deg] blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-500/50"></div>
            <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">OUR CLIENTS</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Industry Leaders</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            We partner with ambitious brands to engineer growth and build powerful digital ecosystems.
          </p>
        </motion.div>

        {/* Mobile Swipe Indication */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="md:hidden flex justify-center items-center gap-2 mb-4 text-white/40 text-xs tracking-wider animate-pulse"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          <span>SWIPE TO EXPLORE</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </motion.div>

        {/* Floating Cards Grid */}
        <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:flex-wrap md:justify-center gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-12 pt-6 pb-32 md:pb-24 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {clients.map((client, index) => (
            <div key={client.id} className="relative flex flex-col items-center shrink-0 snap-center md:snap-align-none w-[75vw] sm:w-[280px] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2.5rem)] xl:w-[calc(20%-2.5rem)] min-w-[260px]">

              {/* Pedestal Structure (Ground) */}
              <div className="absolute -bottom-24 flex flex-col items-center perspective-[800px]">
                {/* Light Beam */}
                <div className={`w-12 h-32 bg-gradient-to-t ${client.theme.beam} blur-md`}></div>

                {/* 3D Base */}
                <div className="relative -mt-10">
                  {/* Base Platform */}
                  <div className={`w-32 h-32 rotate-x-[70deg] rotate-z-45 bg-[#0A0F1E] border ${client.theme.pedestal}`}></div>
                  {/* Inner glowing core */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-x-[70deg] rotate-z-45 ${client.theme.core} blur-[20px] opacity-60`}></div>
                </div>
              </div>

              {/* Glassmorphism Card */}
              <motion.div
                animate={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: [0, -15, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                onClick={() => setSelectedClient(client)}
                className={`relative z-10 w-full h-full min-h-[280px] md:min-h-[380px] bg-[#0A0D1A]/30 backdrop-blur-2xl border-t border-l border-r border-b border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500 group hover:-translate-y-2`}
                style={{
                  boxShadow: `0 0 40px -10px ${client.theme.shadow}, inset 0 0 20px -10px ${client.theme.shadow}`,
                  borderColor: client.theme.border.replace('border-', '').replace('/40', '/20')
                }}
              >
                {/* Glowing border overlay that appears on hover */}
                <div className={`absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:${client.theme.border} transition-colors duration-500 pointer-events-none`}></div>

                {/* Intense light reflection at the bottom where beam hits */}
                <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-20 ${client.theme.core} blur-[40px] opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>

                {/* Ambient glow inside the card */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b ${client.theme.beam.replace('from-', 'from-transparent via-').replace('to-', 'to-')} opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-[2rem]`}></div>

                {/* Featured Tag */}
                {client.isFeatured && (
                  <div className="absolute -top-3 right-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md z-20">
                    Featured
                  </div>
                )}

                {/* Icon Circle */}
                <div className="relative mb-4 md:mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 ${client.logo ? 'bg-white' : client.theme.iconBg} flex items-center justify-center relative z-10 overflow-hidden`}>
                    {client.logo ? (
                      <img src={client.logo} alt={client.name} className="w-full h-full object-contain p-2" />
                    ) : (
                      <client.icon className={`w-6 h-6 md:w-8 md:h-8 ${client.theme.color}`} strokeWidth={1.5} />
                    )}
                  </div>
                  {/* Icon outer glowing ring */}
                  <div className={`absolute inset-[-4px] rounded-full border border-white/5 ${client.theme.color} opacity-20 pointer-events-none animate-pulse`}></div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1">{client.logoText}</h3>
                <h4 className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 ${client.theme.color}`}>{client.industry}</h4>

                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {client.about}
                </p>

                {/* Bottom Arrow Button */}
                <div className="mt-auto w-12 h-8 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white/5 transition-colors">
                  <ArrowRight size={14} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px" }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-[#0A1024]/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-6 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 shadow-2xl">

            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Handshake className="text-blue-400 w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">50+</div>
                <div className="text-white/50 text-sm">Happy Clients</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Rocket className="text-indigo-400 w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">120+</div>
                <div className="text-white/50 text-sm">Projects Delivered</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <Trophy className="text-pink-400 w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">95%</div>
                <div className="text-white/50 text-sm">Client Satisfaction</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Client Case Study Modal via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedClient && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedClient(null)}
                className="absolute inset-0 bg-[#050816]/80 backdrop-blur-md cursor-pointer"
              ></motion.div>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl bg-[#0A0D1A] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] z-10 flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-6 md:p-8 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                  {/* Decorative background icon */}
                  <selectedClient.icon className={`absolute -right-10 -top-10 w-48 h-48 opacity-5 ${selectedClient.theme.color}`} />

                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${selectedClient.logo ? 'bg-white' : 'bg-white/5'} border border-white/10 flex items-center justify-center shrink-0 overflow-hidden`}>
                      {selectedClient.logo ? (
                        <img src={selectedClient.logo} alt={selectedClient.name} className="w-full h-full object-contain p-1.5" />
                      ) : (
                        <selectedClient.icon className={`w-8 h-8 ${selectedClient.theme.color}`} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-tight mb-1">{selectedClient.name}</h3>
                      <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm font-medium">
                        <Building size={14} />
                        <span>{selectedClient.industry} Industry</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedClient(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors shrink-0 z-10"
                  >
                    <X size={20} className="text-white/70" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-8">
                  {/* About the Company */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <Briefcase size={16} className="text-primary" /> About The Client
                    </h4>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {selectedClient.about}
                    </p>
                  </div>

                  {/* Solutions Provided */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <CheckCircle2 size={16} className="text-primary" /> SkillStar Solutions Provided
                    </h4>
                    <div className="space-y-3">
                      {selectedClient.solutions.map((solution, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl border-l-2 border-primary">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-sm sm:text-base text-white/90 leading-snug">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

export default Clients;
