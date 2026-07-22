import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Target, Globe, Layout, Palette, Bot, Code2, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "SEO, GEO & AEO Optimization",
    shortDesc: "Search & AI Visibility",
    desc: "Optimize your business for Google Search, AI search engines, voice assistants, and local discovery platforms.",
    icon: Search,
    features: ["Technical SEO", "Local SEO", "Answer Engine Optimization", "AI Search Optimization", "Google Business Optimization", "Schema Implementation"]
  },
  {
    num: "02",
    title: "Performance Marketing & Lead Gen",
    shortDesc: "AI-Powered Ads & Leads",
    desc: "Generate high-quality leads and increase revenue with AI-powered advertising strategies.",
    icon: Target,
    features: ["Google Ads", "Meta Ads", "LinkedIn Advertising", "YouTube Campaigns", "Conversion Funnel Optimization", "Retargeting Campaigns"]
  },
  {
    num: "03",
    title: "Enterprise Website Development",
    shortDesc: "Scalable Web Platforms",
    desc: "Build modern websites and scalable digital platforms engineered for conversions and performance.",
    icon: Globe,
    features: ["Business Websites", "E-Commerce Websites", "Landing Pages", "SaaS Platforms", "Web Applications", "Progressive Web Apps"]
  },
  {
    num: "04",
    title: "UI / UX Experience Design",
    shortDesc: "Intuitive Digital Journeys",
    desc: "Create intuitive digital experiences that improve engagement and customer satisfaction.",
    icon: Layout,
    features: ["Dashboard Design", "Mobile App UI", "Website Interfaces", "SaaS Product Design", "UX Research"]
  },
  {
    num: "05",
    title: "Branding & Creative Solutions",
    shortDesc: "Memorable Brand Identities",
    desc: "Build memorable visual identities that strengthen trust and market authority.",
    icon: Palette,
    features: ["Logo Design", "Brand Identity", "Motion Graphics", "Social Media Creatives", "Packaging Design", "Corporate Presentations"]
  },
  {
    num: "06",
    title: "AI & Intelligent Automation",
    shortDesc: "Smart Business Automation",
    desc: "Improve operational efficiency and customer engagement using intelligent AI systems.",
    icon: Bot,
    features: ["AI Chatbots", "Virtual Assistants", "Workflow Automation", "CRM Integrations", "Predictive Analytics", "Custom AI Tools"]
  },
  {
    num: "07",
    title: "Custom Software Development",
    shortDesc: "Tailored Software Ecosystems",
    desc: "Build scalable software ecosystems tailored to your business operations.",
    icon: Code2,
    features: ["ERP Systems", "CRM Platforms", "SaaS Products", "Mobile Applications", "API Integrations", "Workflow Systems"]
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="services" className="container mx-auto px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span> Our Services
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
          End-to-End Digital <span className="gradient-text">Solutions</span>
        </h2>
      </motion.div>

      {/* Small Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {services.map((service, i) => {
          const [isActive, setIsActive] = useState(false);

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              onHoverStart={() => setIsActive(true)}
              onHoverEnd={() => setIsActive(false)}
              onClick={() => setSelectedService(service)}
              animate={isActive ? { y: -5, scale: 1.02 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-[#0A0D1A]/80 backdrop-blur-sm border rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 cursor-pointer overflow-hidden z-10 ${isActive ? 'border-primary/50 shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'border-white/5 hover:border-white/20'}`}
            >
              {/* Animated Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent transition-opacity duration-500 pointer-events-none -z-10 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-colors duration-500 relative overflow-hidden ${isActive ? 'bg-primary/20 border-primary/50' : 'bg-white/5 border-white/10'}`}>
                  <span className={`absolute inset-0 rounded-full bg-primary/20 ${isActive ? 'animate-ping opacity-100' : 'opacity-0'}`}></span>
                  <service.icon className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 relative z-10 ${isActive ? 'text-white scale-110' : 'text-white/80'}`} />
                </div>
                <div>
                  <h3 className={`text-sm md:text-[15px] font-bold mb-1 transition-colors leading-tight ${isActive ? 'text-white' : 'text-white/90'}`}>{service.title}</h3>
                  <p className={`text-[10px] md:text-xs transition-colors ${isActive ? 'text-white/80' : 'text-white/50'}`}>{service.shortDesc}</p>
                </div>
                
                <div className={`mt-2 text-[10px] uppercase tracking-wider font-semibold transition-colors duration-300 flex items-center gap-1 ${isActive ? 'text-primary' : 'text-transparent'}`}>
                  View Details <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

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
              className="absolute inset-0 bg-[#050816]/80 backdrop-blur-md cursor-pointer"
            ></motion.div>

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0A0D1A] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-transparent border-b border-white/10 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <selectedService.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-primary font-bold tracking-widest text-xs mb-1 block">SERVICE {selectedService.num}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{selectedService.title}</h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors shrink-0"
                >
                  <X size={20} className="text-white/70" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedService.desc}
                </p>

                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-black/20 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
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
