import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Building, Briefcase, CheckCircle2, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const innerCompassLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790821/inner_compass_yoga_iinuun.jpg';
const rokeaLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784793510/rokea_acysbs.png';
const seedsTherapyLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790939/seedstherapy_pqhrpt.png';
const senthurLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790815/senthur_logo_wpuq9p.png';

const clients = [
  {
    id: 1,
    name: "ROKEABYRK",
    industry: "CONSULTING",
    logoText: "Timeless Elegance\nModern Luxury",
    logo: rokeaLogo,
    image: "https://image.pollinations.ai/prompt/indian%20saree%20with%20traditional%20jewellery?width=800&height=600&nologo=true",
    theme: {
      color: "text-purple-400",
      border: "border-purple-500/40",
      hoverBorder: "hover:border-purple-500",
      shadow: "rgba(168,85,247,0.15)",
      bg: "bg-purple-500/10",
      badge: "bg-purple-900/40 text-purple-300 border-purple-500/20"
    },
    about: "A premier consulting and strategic advisory firm empowering businesses to navigate complex market dynamics and achieve sustainable growth.",
    solutions: [
      "Developed a comprehensive digital brand identity",
      "Implemented intelligent workflow automation systems",
      "Designed an immersive corporate web platform"
    ],
    isFeatured: false
  },
  {
    id: 2,
    name: "INNER COMPASS YOGA",
    industry: "YOGA & WELLNESS",
    logoText: "Find Your Balance\nEmbrace Wellness",
    logo: innerCompassLogo,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    theme: {
      color: "text-blue-400",
      border: "border-blue-500/40",
      hoverBorder: "hover:border-blue-500",
      shadow: "rgba(59,130,246,0.15)",
      bg: "bg-blue-500/10",
      badge: "bg-blue-900/40 text-blue-300 border-blue-500/20"
    },
    about: "A serene yoga and mindfulness center dedicated to helping individuals find inner peace, flexibility, and physical wellness.",
    solutions: [
      "Built a seamless class scheduling and booking system",
      "Created highly targeted community engagement campaigns",
      "Optimized online presence for local search visibility"
    ],
    isFeatured: false
  },
  {
    id: 3,
    name: "SEEDS",
    industry: "HEALTHCARE",
    logoText: "Compassionate Care\nfor a Healthier Tomorrow",
    logo: seedsTherapyLogo,
    image: "https://image.pollinations.ai/prompt/child%20therapy%20session%20with%20toys%20and%20caring%20therapist?width=800&height=600&nologo=true",
    theme: {
      color: "text-emerald-400",
      border: "border-emerald-500/40",
      hoverBorder: "hover:border-emerald-500",
      shadow: "rgba(16,185,129,0.15)",
      bg: "bg-emerald-500/10",
      badge: "bg-emerald-900/40 text-emerald-300 border-emerald-500/20"
    },
    about: "A holistic healthcare facility specializing in pediatric and adult therapeutic services with a focus on comprehensive well-being.",
    solutions: [
      "Developed a secure patient portal for digital consultations",
      "Executed an Answer Engine Optimization (AEO) campaign",
      "Designed patient-centric mobile application interfaces"
    ],
    isFeatured: true
  },
  {
    id: 4,
    name: "SENTHUR",
    industry: "AUTOMOTIVE",
    logoText: "DRIVE\nTHE FUTURE",
    logo: senthurLogo,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    theme: {
      color: "text-amber-400",
      border: "border-amber-500/40",
      hoverBorder: "hover:border-amber-500",
      shadow: "rgba(245,158,11,0.15)",
      bg: "bg-amber-500/10",
      badge: "bg-amber-900/40 text-amber-300 border-amber-500/20"
    },
    about: "A trusted and established automotive dealership and service center providing top-tier vehicle maintenance and sales.",
    solutions: [
      "Launched a high-conversion vehicle inventory showcase",
      "Implemented automated CRM for service reminders",
      "Ran targeted lead generation ads increasing walk-ins by 45%"
    ],
    isFeatured: false
  }
];

const ClientCaseStudiesPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedClient) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedClient]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#05050A] pt-24 font-sans flex flex-col">
      <main className="flex-grow flex flex-col pb-24 relative overflow-clip">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#05050A] to-[#05050A] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pt-20 md:pt-12">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 md:top-12 left-4 md:left-6 lg:left-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 z-20"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          {/* Header Section */}
          <div className="mb-16 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="text-white/90 text-sm font-semibold tracking-[0.2em] uppercase">CLIENT CASE STUDIES</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Our Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Stories.</span>
            </motion.h1>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div 
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col bg-[#0A0B14] border ${client.theme.border} rounded-3xl overflow-hidden transition-colors duration-300 ${client.theme.hoverBorder} group cursor-pointer`}
                style={{ boxShadow: `0 10px 40px -10px ${client.theme.shadow}` }}
                onClick={() => setSelectedClient(client)}
              >
                {/* Featured Tag */}
                {client.isFeatured && (
                  <div className="absolute top-4 right-4 z-20 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor" /> FEATURED
                  </div>
                )}

                {/* Top Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B14] via-[#0A0B14]/40 to-transparent z-10"></div>
                  <img src={client.image} alt={`${client.name} - Case Study`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Text overlay on image */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-center">
                    <h3 className="text-white font-serif text-xl leading-tight whitespace-pre-line opacity-90">{client.logoText}</h3>
                  </div>
                </div>

                {/* Overlapping Logo */}
                <div className="relative z-20 flex justify-center -mt-12 mb-4">
                  <div className={`w-24 h-24 rounded-full bg-white border-4 border-[#0A0B14] flex items-center justify-center p-3 shadow-xl overflow-hidden`}>
                    <img src={client.logo} alt={`${client.name} Brand Logo`} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-6 pb-6 text-center">
                  <div className="flex justify-center mb-3">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${client.theme.badge}`}>
                      {client.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{client.name}</h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {client.about}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/5 mt-auto">
                    <span className="flex items-center justify-center w-full py-2 gap-1 text-white/50 group-hover:text-white text-sm font-medium transition-colors">
                      View Case Study <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
                  className="absolute inset-0 bg-[#05050A]/90 backdrop-blur-md cursor-pointer"
                ></motion.div>

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className={`relative w-full max-w-3xl bg-[#0A0B14] border ${selectedClient.theme.border} rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] z-10 flex flex-col max-h-[90vh]`}
                  style={{ boxShadow: `0 10px 40px -10px ${selectedClient.theme.shadow}` }}
                >
                  {/* Modal Header */}
                  <div className="p-6 md:p-8 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center shrink-0 overflow-hidden`}>
                        <img src={selectedClient.logo} alt={`${selectedClient.name} Brand Logo`} className="w-full h-full object-contain p-1.5" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-tight mb-1">{selectedClient.name}</h3>
                        <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${selectedClient.theme.color}`}>
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
                        <Briefcase size={16} className={selectedClient.theme.color.replace('text-', '')} style={{ color: selectedClient.theme.color.replace('text-', '') }} /> About The Client
                      </h4>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                        {selectedClient.about}
                      </p>
                    </div>

                    {/* Solutions Provided */}
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <CheckCircle2 size={16} className={selectedClient.theme.color.replace('text-', '')} style={{ color: selectedClient.theme.color.replace('text-', '') }} /> SkillStar Solutions Provided
                      </h4>
                      <div className="space-y-3">
                        {selectedClient.solutions.map((solution, idx) => (
                          <div key={idx} className={`flex items-start gap-3 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-2 ${selectedClient.theme.border.replace('/40', '')}`}>
                            <div className={`w-5 h-5 rounded-full ${selectedClient.theme.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                              <div className={`w-2 h-2 rounded-full ${selectedClient.theme.badge.split(' ')[0]}`}></div>
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
      </main>
    </div>
  );
};

export default ClientCaseStudiesPage;
