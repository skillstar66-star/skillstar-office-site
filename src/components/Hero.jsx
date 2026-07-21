import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Info, X } from 'lucide-react';
import CountUpPkg from 'react-countup';
import heroBg from '../assets/hero-bg.png';
const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const Hero = () => {
  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#050816]/50 z-0"></div>      
      {/* Dynamic Animated Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00A3FF]/30 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] pointer-events-none -z-10"
      />

      <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between relative z-10">
        
        {/* Left Content */}
          <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5 lg:w-[50%]"
        >
          {/* Top Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#121420] border border-white/10 hover:border-primary/50 transition-colors rounded-full px-4 py-2 w-max shadow-sm cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow"></span>
            <span className="text-sm font-medium text-white/90 tracking-wide">Digital Solutions That Drive Real Growth</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading mt-1 text-white/90">
            Grow Your Business <br /> 
            with <span className="gradient-text drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">Data-Driven</span> <br /> 
            Digital Marketing
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base text-white/70 max-w-lg leading-relaxed mt-2">
            We help brands increase traffic, generate quality leads, and boost revenue through <br className="hidden md:block"/>
            <strong className="text-white font-semibold">SEO, Social Media, Paid Ads & Web Development.</strong>
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              Get Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all duration-300"
            >
              View Our Work 
              <div className="w-5 h-5 rounded-full border border-white/40 group-hover:border-white/80 group-hover:bg-white/10 flex items-center justify-center transition-all">
                <Play size={10} fill="currentColor" className="ml-0.5 group-hover:text-primary transition-colors" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="relative w-full lg:w-[45%] h-auto grid grid-cols-2 gap-4"
        >
          {/* Total Revenue */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 bg-[#0A0D1A]/80 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-2xl flex flex-col justify-between animate-float-fast hover:border-primary/50 transition-colors shadow-2xl"
          >
            <div>
              <div className="flex justify-between items-center mb-2 sm:mb-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <h3 className="text-[10px] sm:text-xs font-semibold text-white/80">Total Revenue</h3>
                  <Info size={10} className="text-white/30 hover:text-white transition-colors cursor-pointer sm:w-3 sm:h-3" />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-3xl font-bold font-heading text-white mb-1 sm:mb-2">
                $<CountUp end={98765} duration={3} separator="," enableScrollSpy scrollSpyOnce />
              </h2>
              <span className="text-[#00C48C] text-[8px] sm:text-[10px] font-semibold flex items-center gap-1 bg-[#00C48C]/10 px-1 sm:px-2 py-0.5 rounded w-max">
                ↑ 32.5% <span className="text-white/50 font-medium hidden lg:inline">vs last month</span>
              </span>
            </div>
            
            <div className="w-full h-10 sm:h-16 mt-3 sm:mt-6 relative flex items-end overflow-hidden group">
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                 <defs>
                   <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <path d="M0,50 L0,35 Q10,40 20,30 T40,25 T60,20 T80,10 L100,20 L100,50 Z" fill="url(#curveGrad)" className="opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                 <motion.path 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   d="M0,35 Q10,40 20,30 T40,25 T60,20 T80,10 L100,20" 
                   fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" 
                   className="drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                 />
                 <circle cx="20" cy="30" r="2.5" fill="#2563EB" className="animate-pulse" />
                 <circle cx="40" cy="25" r="2.5" fill="#2563EB" className="animate-pulse" />
                 <circle cx="60" cy="20" r="2.5" fill="#2563EB" className="animate-pulse" />
                 <circle cx="80" cy="10" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                 <circle cx="100" cy="20" r="2.5" fill="#2563EB" />
               </svg>
            </div>
          </motion.div>

          {/* Traffic Growth */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 bg-[#0A0D1A]/80 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-2xl flex items-center justify-center relative overflow-hidden animate-float-fast hover:border-primary/50 transition-colors shadow-2xl"
            style={{ animationDelay: '1s' }}
          >
             <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#1A2035" strokeWidth="10" />
                  <motion.circle 
                    initial={{ strokeDashoffset: 264 }}
                    animate={{ strokeDashoffset: 66 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
                    cx="50" cy="50" r="42" fill="none" stroke="#2563EB" strokeWidth="10" strokeDasharray="264" strokeLinecap="round" 
                    className="drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                  />
                </svg>
                <span className="text-[8px] sm:text-[10px] text-white/50 font-medium z-10 relative text-center leading-tight mt-2">Traffic Growth</span>
                <span className="text-sm sm:text-xl font-bold z-10 relative mt-0.5 text-white">
                  +<CountUp end={450} duration={3} enableScrollSpy scrollSpyOnce />%
                </span>
             </div>
          </motion.div>

          {/* Leads Generated */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-1 bg-[#0A0D1A]/80 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-colors shadow-2xl group"
          >
             <div>
               <div className="flex justify-between items-center mb-2 sm:mb-4">
                 <div className="flex items-center gap-1 sm:gap-2">
                   <h3 className="text-[10px] sm:text-xs font-semibold text-white/80">Leads Generated</h3>
                   <Info size={10} className="text-white/30 sm:w-3 sm:h-3" />
                 </div>
               </div>
               
               <div className="text-xl sm:text-3xl font-bold font-heading text-white mb-1 sm:mb-2">
                  <CountUp end={2879} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
               </div>
               <span className="text-[#00C48C] text-[8px] sm:text-[10px] font-semibold flex items-center gap-1 bg-[#00C48C]/10 px-1 sm:px-2 py-0.5 rounded w-max">
                  ↑ 24.8% <span className="text-white/50 font-medium hidden lg:inline">vs last month</span>
                </span>
             </div>
             
             <div className="flex items-end gap-[2px] sm:gap-[6px] mt-3 sm:mt-6 h-8 sm:h-12">
                {[15, 25, 20, 35, 25, 30, 45, 60, 40].map((h, i) => (
                   <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                     key={i} 
                     className={`w-full rounded-t-sm transition-all duration-300 group-hover:opacity-100 ${i === 7 ? 'bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-primary/20 opacity-70 hover:bg-primary/50'}`} 
                   ></motion.div>
                ))}
             </div>
          </motion.div>

          {/* Top Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="col-span-1 bg-[#0A0D1A]/80 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-2xl hover:border-primary/50 transition-colors shadow-2xl"
          >
            <h3 className="text-[10px] sm:text-xs font-semibold text-white/80 mb-3 sm:mb-5">Top Channels</h3>
            <div className="flex flex-col gap-2 sm:gap-4">
              {[
                { label: 'Organic', color: 'from-emerald-400 to-emerald-500', width: '48%' },
                { label: 'Paid', color: 'bg-primary', width: '24%' },
                { label: 'Social', color: 'bg-primary', width: '18%' },
                { label: 'Direct', color: 'bg-white/40', width: '10%' }
              ].map((channel, idx) => (
                <div key={idx} className="flex items-center justify-between text-[8px] sm:text-[10px] font-medium text-white/80 group cursor-default">
                  <span className="w-10 sm:w-16 group-hover:text-white transition-colors truncate">{channel.label}</span>
                  <div className="flex-1 mx-1 sm:mx-2 h-1 sm:h-1.5 bg-[#161B33] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: channel.width }}
                      transition={{ duration: 1.5, delay: 1.2 + (idx * 0.1) }}
                      className={`h-full rounded-full ${channel.color.includes('bg-') ? channel.color : 'bg-gradient-to-r ' + channel.color}`}
                    ></motion.div>
                  </div>
                  <span className="w-5 sm:w-6 text-right text-white font-bold">{channel.width}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
