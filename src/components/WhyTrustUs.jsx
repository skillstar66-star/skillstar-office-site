import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Layers, 
  Cpu, 
  LineChart, 
  Sparkles, 
  ShieldCheck, 
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'RESULTS-DRIVEN APPROACH',
    desc: 'We focus on measurable growth through SEO Optimization, Local SEO Services, and Performance Marketing, helping businesses improve visibility, attract qualified customers, and increase conversions.',
    icon: TrendingUp,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientStops: { start: '#00C6FF', end: '#3B82F6' }
  },
  {
    num: '02',
    title: 'COMPLETE DIGITAL EXPERTISE',
    desc: 'Our expertise brings Web Development, UI/UX Design Services, Branding and Marketing, Social Media Marketing, and AI Marketing together to create a stronger digital presence.',
    icon: Layers,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientStops: { start: '#3B82F6', end: '#8B5CF6' }
  },
  {
    num: '03',
    title: 'SMART & FUTURE-READY',
    desc: 'We combine data, creativity, AEO AND GEO Services with AI-powered strategies to help businesses adapt to changing search behavior and digital trends.',
    icon: Cpu,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientStops: { start: '#8B5CF6', end: '#D946EF' }
  },
  {
    num: '04',
    title: 'BUILT FOR LONG-TERM GROWTH',
    desc: "We don't stop at launching a campaign or website. We continuously analyze, improve, and optimize your digital performance to create sustainable business growth.",
    icon: LineChart,
    color: 'from-[#D946EF] to-[#F43F5E]',
    gradientStops: { start: '#D946EF', end: '#F43F5E' }
  }
];

const WhyChooseUs = () => {
  const scrollContainerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(Math.max(index, 0), features.length - 1));
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveCard(index);
    }
  };

  return (
    <section id="trust" className="py-24 lg:py-32 bg-[#02030A] relative overflow-hidden flex flex-col items-center">
      
      {/* Abstract Backgrounds & Glowing Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/5 via-[#8B5CF6]/10 to-[#D946EF]/5 blur-[160px] pointer-events-none rounded-full"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-12 w-12 h-12 border border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] rotate-12 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent backdrop-blur-md rounded-xl pointer-events-none hidden md:block"
      ></motion.div>
      
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-16 right-16 w-16 h-16 rounded-full bg-gradient-to-tr from-[#00C6FF]/60 to-[#0A0F24] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),_0_0_30px_rgba(0,198,255,0.3)] pointer-events-none hidden md:block"
      ></motion.div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00C6FF] mr-2" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-5 leading-tight tracking-tight">
            WHY BUSINESSES <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">CHOOSE US</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            We partner with businesses to build sustainable digital advantage through data, innovation, and dedicated execution.
          </p>
        </motion.div>

        {/* Mobile Swipe Guidance & Controls */}
        <div className="md:hidden flex items-center justify-between mb-4 px-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#00C6FF] font-semibold bg-[#0A0F24]/80 px-3 py-1 rounded-full border border-[#00C6FF]/30">
            <span>👈 Swipe to view all 4 points 👉</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Container: Horizontal Swipe Track on Mobile, 2-Col Grid on Desktop */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 pt-2 px-2 md:px-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="w-[84vw] sm:w-[340px] md:w-auto flex-shrink-0 md:flex-shrink snap-center group relative p-6 sm:p-8 rounded-2xl bg-[#070B1F]/70 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Glow Overlays */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${feature.color} opacity-[0.08] group-hover:opacity-20 blur-[25px] transition-opacity duration-500 rounded-tr-2xl pointer-events-none`}></div>
                <div className={`absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr ${feature.color} opacity-[0.08] group-hover:opacity-20 blur-[25px] transition-opacity duration-500 rounded-bl-2xl pointer-events-none`}></div>
                
                {/* Bottom Line Glow */}
                <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${feature.color} opacity-40 group-hover:opacity-100 shadow-[0_0_15px_currentColor] transition-all duration-500`}></div>

                {/* Watermark Number */}
                <div className="absolute top-6 right-8 text-5xl font-extrabold text-white/[0.04] group-hover:text-white/[0.1] transition-colors duration-500 font-display select-none">
                  {feature.num}
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 bg-[#0A0F24] border border-white/10 group-hover:border-white/20 shadow-md flex-shrink-0">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-bold text-white mb-2.5 sm:mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.num} — {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-normal">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-8">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx 
                  ? 'w-7 bg-gradient-to-r from-[#00C6FF] to-[#D946EF]' 
                  : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>

        {/* Dedicated Transparency Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0A0F24]/90 via-[#0E1538]/80 to-[#120B24]/90 border border-white/15 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00C6FF]/15 to-[#8B5CF6]/15 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#D946EF]/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/15 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Core Principle</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white mb-3 tracking-tight">
                100% Transparency & Monthly Review
              </h3>

              <p className="text-gray-300 text-xs sm:text-base leading-relaxed max-w-3xl font-normal">
                We maintain complete transparency with our clients by reviewing the work completed at the end of every month. We discuss the results, understand your feedback, and work together to decide the next steps, priorities, and strategies for the upcoming month.
              </p>
            </div>

            {/* Right Highlights */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <CalendarCheck className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">End-of-Month Review</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">Collaborative Planning</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
