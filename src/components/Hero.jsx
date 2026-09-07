import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center bg-[#020516] overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text readability on the left side if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020516]/90 via-[#020516]/50 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[50%] text-left mt-24"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <Zap className="w-4 h-4 text-[#00C6FF] drop-shadow-[0_0_5px_rgba(0,198,255,0.8)]" />
              <span className="text-sm text-gray-200 font-medium tracking-wide">Best Digital Solutions • Innovative • Results Driven</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-lg">
              Digital Marketing & <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#A855F7] to-[#D946EF] bg-clip-text text-transparent">
                Digital Solutions Company in Coimbatore
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl leading-relaxed drop-shadow-md">
              SkillStar Digital Solutions delivers the best digital solutions to help businesses grow online through SEO, AEO, GEO, web development, branding, AI automation and performance marketing.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-105 transition-all cursor-pointer"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#story"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#050B20]/80 backdrop-blur-md border border-[#7C3AED]/50 text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Our Story
              </a>
            </div>
          </motion.div>

          {/* Right Visual is now part of the background image */}
          <div className="w-full lg:w-[50%] hidden lg:block">
            {/* Empty space to let the background image (laptop) show through on the right */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
