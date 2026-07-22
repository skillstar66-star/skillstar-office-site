import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, Users, Search, X, CheckCircle2, TrendingUp, Zap, Target } from 'lucide-react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const CaseStudy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="py-24 bg-[#0B1020] relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[30px] p-[1px] bg-gradient-to-br from-blue-500/30 via-white/5 to-transparent overflow-hidden"
            style={{ boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.1)' }}
          >
            {/* Glassmorphism Inner Card */}
            <div className="relative bg-[#0B1020]/90 backdrop-blur-2xl rounded-[29px] p-8 md:p-12 lg:p-16 z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column - Content */}
                <div className="flex flex-col text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="inline-block text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 py-1.5 px-4 bg-blue-500/10 rounded-full border border-blue-500/20">
                      CASE STUDY
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                      Rokea by RK
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                      Designed and developed a premium e-commerce website that delivers a fast, responsive, and elegant shopping experience while strengthening the brand's digital presence.
                    </p>
                  </motion.div>

                  {/* Stats */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-y border-white/10 py-10"
                  >
                    <div className="flex flex-col items-center lg:items-start group cursor-default">
                      <div className="text-4xl font-bold text-white mb-2 flex items-baseline">
                        <CountUp end={98} duration={2.5} />
                        <span className="text-blue-500 text-3xl ml-1">+</span>
                      </div>
                      <p className="text-sm text-white/60 font-medium group-hover:text-blue-400 transition-colors">PageSpeed Performance</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start group cursor-default">
                      <div className="text-4xl font-bold text-white mb-2 flex items-baseline">
                        <CountUp end={100} duration={2.5} />
                        <span className="text-blue-500 text-3xl ml-1">%</span>
                      </div>
                      <p className="text-sm text-white/60 font-medium group-hover:text-blue-400 transition-colors">Mobile Responsive</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start group cursor-default">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-baseline whitespace-nowrap">
                        SEO Ready
                      </div>
                      <p className="text-sm text-white/60 font-medium group-hover:text-blue-400 transition-colors">Technical Optimization</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center lg:justify-start"
                  >
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-medium rounded-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-500/50 hover:border-blue-400"
                    >
                      <span className="relative z-10">View Full Case Study</span>
                      <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                  </motion.div>
                </div>

                {/* Right Column - Animated Chart */}
                <div className="relative mt-8 lg:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-[24px] blur-2xl"></div>
                  <div className="relative bg-[#0F1528] border border-white/5 rounded-[24px] p-6 md:p-8 shadow-2xl">
                    
                    {/* Chart Header Icons */}
                    <div className="flex justify-between items-center mb-10 pb-5 border-b border-white/5">
                      <div className="flex gap-3">
                        <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.15)]"><Activity size={20} /></div>
                        <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-white/40 hover:text-white/80 transition-colors"><Users size={20} /></div>
                        <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-white/40 hover:text-white/80 transition-colors"><Search size={20} /></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <div className="text-xs font-semibold text-white/50 tracking-wider">LIVE DATA</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-[220px] md:h-[260px] relative flex items-end justify-between gap-1.5 md:gap-2">
                      {/* SVG Line Graph */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <motion.path 
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                          d="M0,80 Q10,75 20,55 T40,45 T60,25 T80,15 T100,5" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          style={{ filter: 'drop-shadow(0px 4px 8px rgba(59,130,246,0.6))' }}
                        />
                        <motion.path 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.15 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1 }}
                          d="M0,100 L0,80 Q10,75 20,55 T40,45 T60,25 T80,15 T100,5 L100,100 Z" 
                          fill="url(#chartGrad)"
                        />
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Animated Bars */}
                      {[15, 25, 40, 50, 42, 65, 78, 68, 85, 100].map((h, i) => (
                        <div key={i} className="w-full relative flex flex-col justify-end items-center h-full group z-0">
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                            className="w-full bg-gradient-to-t from-blue-500/5 to-blue-500/20 group-hover:from-blue-500/10 group-hover:to-blue-500/40 rounded-t-sm transition-all duration-300 border-t border-blue-500/30 group-hover:border-blue-400 relative"
                          >
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Footer */}
                    <div className="mt-8 pt-5 border-t border-white/5 text-center flex flex-col items-center">
                      <h4 className="text-white font-medium mb-2 text-lg">Growth Performance</h4>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-white/50">
                        <span>Fast</span>
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                        <span>Responsive</span>
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                        <span>SEO Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Case Study Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-[#0B1020]/90 backdrop-blur-xl"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-5xl bg-[#0F1528] border border-white/10 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl my-auto"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 z-50 p-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
  
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                  {/* Modal Header */}
                  <div className="relative pt-16 pb-12 px-8 md:px-16 text-center md:text-left border-b border-white/5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                    
                    <span className="inline-block text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 py-1 px-3 bg-blue-500/10 rounded-full border border-blue-500/20">
                      FULL PROJECT BREAKDOWN
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      Rokea by RK <span className="text-white/30 font-light">E-Commerce Transformation</span>
                    </h3>
                    <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
                      A comprehensive overhaul of an established brand's digital storefront, focusing on bleeding-edge performance, seamless mobile experiences, and advanced technical SEO.
                    </p>
                  </div>
  
                  {/* Modal Body */}
                  <div className="p-8 md:p-16 grid md:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left Col - The Story */}
                    <div className="space-y-10">
                      <div>
                        <div className="flex items-center gap-3 mb-4 text-white">
                          <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg"><Target size={20} /></div>
                          <h4 className="text-xl font-bold">The Challenge</h4>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                          Rokea faced challenges with high bounce rates on mobile and sluggish load times that were impacting both their conversion rates and search engine rankings. They needed a platform that felt as premium as their products without sacrificing speed.
                        </p>
                      </div>
  
                      <div>
                        <div className="flex items-center gap-3 mb-4 text-white">
                          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Zap size={20} /></div>
                          <h4 className="text-xl font-bold">The Solution</h4>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-6">
                          We engineered a headless e-commerce architecture utilizing Next.js and specialized content delivery networks. This allowed for instantaneous page transitions and a completely custom, brand-aligned user interface.
                        </p>
                        
                        <ul className="space-y-3">
                          {[
                            'Headless architecture for sub-second load times',
                            'Custom micro-interactions & GSAP animations',
                            'Advanced caching & edge rendering',
                            'Structured data & automated SEO optimization'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/70">
                              <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
  
                    {/* Right Col - The Results */}
                    <div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 mb-8">
                        <div className="flex items-center gap-3 mb-8 text-white">
                          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><TrendingUp size={20} /></div>
                          <h4 className="text-xl font-bold">The Results</h4>
                        </div>
                        
                        <div className="grid gap-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 pb-6 border-b border-white/5">
                          <div className="text-4xl font-bold text-emerald-400 min-w-[120px] shrink-0">+450%</div>
                          <div>
                            <div className="text-white font-medium mb-1">Organic Traffic</div>
                            <div className="text-sm text-white/50">Achieved within 6 months post-launch</div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 pb-6 border-b border-white/5">
                          <div className="text-4xl font-bold text-white min-w-[120px] shrink-0">-65%</div>
                          <div>
                            <div className="text-white font-medium mb-1">Bounce Rate</div>
                            <div className="text-sm text-white/50">Massive improvement in user retention</div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                          <div className="text-4xl font-bold text-white min-w-[120px] shrink-0">1.2s</div>
                          <div>
                            <div className="text-white font-medium mb-1">Avg. Load Time</div>
                            <div className="text-sm text-white/50">Down from 4.8s on the old platform</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h5 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Shopify Plus', 'Vercel'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70 font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </>
  );
};

export default CaseStudy;
