import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Info, X } from 'lucide-react';
import CountUpPkg from 'react-countup';
const heroBg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/f_auto,q_auto/v1784790806/hero-bg_tazlvy.png';
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#121420] border border-white/10 hover:border-primary/50 transition-colors rounded-full px-4 py-2 max-w-full shadow-sm cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow shrink-0"></span>
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide truncate">AI-Powered Digital Growth Company</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading mt-1 text-white/90">
            Transforming Businesses <br className="hidden sm:block" />
            Into <span className="gradient-text drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">Market Leaders</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed mt-2 space-y-4">
            <p>
              SkillStar Digital Solutions helps startups, brands, and enterprises scale through AI-powered marketing, premium website development, automation, branding, and search visibility systems engineered for measurable business growth.
            </p>
            <p>
              We don’t just market businesses. We engineer digital ecosystems that increase authority, improve visibility, generate qualified leads, and accelerate long-term growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              Get Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all duration-300"
            >
              View Our Work
              <div className="w-5 h-5 rounded-full border border-white/40 group-hover:border-white/80 group-hover:bg-white/10 flex items-center justify-center transition-all">
                <Play size={10} fill="currentColor" className="ml-0.5 group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative w-full lg:w-[45%] flex items-center justify-center lg:h-full mt-10 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="w-full max-w-[400px] lg:max-w-[500px] relative flex items-center justify-center group"
          >
            {/* Glowing Orb Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/40 rounded-full blur-[80px] group-hover:bg-primary/60 group-hover:scale-125 transition-all duration-700"></div>
            
            {/* Main Image */}
            <img 
              src="https://res.cloudinary.com/dgpkzmkxf/image/upload/f_auto,q_auto/v1784795182/ChatGPT_Image_Jul_23__2026__01_53_50_PM-removebg-preview_eshcoc.png" 
              alt="AI Brain Concept"
              fetchPriority="high"
              loading="eager"
              width="500"
              height="500"
              className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_40px_rgba(37,99,235,0.5)] group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-out animate-float"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
