import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, LineChart, Rocket, TrendingUp, Bot, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'We understand your business, audience, competitors, and goals to attract the right customers, generate quality leads, and increase conversions.',
    icon: Search,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientStops: { start: '#00C6FF', end: '#3B82F6' }
  },
  {
    num: '02',
    title: 'STRATEGIZE',
    desc: 'We create a customized strategy using SEO Optimization, Local SEO Services, AI Marketing, Performance Marketing, and Branding and Marketing to achieve your business goals.',
    icon: LineChart,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientStops: { start: '#3B82F6', end: '#8B5CF6' }
  },
  {
    num: '03',
    title: 'EXECUTE',
    desc: 'Our team brings the strategy to life through Web Development, UI/UX Design Services, Social Media Marketing, AEO, GEO Services, and Custom Software Development Services.',
    icon: Rocket,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientStops: { start: '#8B5CF6', end: '#D946EF' }
  },
  {
    num: '04',
    title: 'OPTIMIZE',
    desc: 'We continuously monitor performance, analyze results, and optimize your digital campaigns to improve lead quality, customer engagement, and conversion rates.',
    icon: TrendingUp,
    color: 'from-[#D946EF] to-[#F43F5E]',
    gradientStops: { start: '#D946EF', end: '#F43F5E' }
  },
  {
    num: '05',
    title: 'CUSTOMIZED AI SOLUTIONS',
    desc: 'We provide customized AI solutions for businesses of all types, designed to match their unique requirements, simplify everyday tasks, and make their business processes smarter and more efficient.',
    icon: Bot,
    color: 'from-[#00C6FF] via-[#8B5CF6] to-[#D946EF]',
    gradientStops: { start: '#00C6FF', end: '#D946EF' }
  }
];

const Process = () => {
  const scrollContainerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

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
      setActiveStep(Math.min(Math.max(index, 0), steps.length - 1));
    }
  };

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#050716] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Bottom Glowing Platform Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[300px] pointer-events-none flex justify-center items-end opacity-80">
        <div className="absolute bottom-0 w-3/4 h-[150px] bg-gradient-to-t from-[#8B5CF6]/30 via-[#00C6FF]/10 to-transparent blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[-100px] w-[1200px] h-[250px] rounded-[100%] border-[1px] border-[#8B5CF6]/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]"></div>
        <div className="absolute bottom-[-60px] w-[900px] h-[180px] rounded-[100%] border-[1px] border-[#00C6FF]/30 shadow-[0_0_30px_rgba(0,198,255,0.1)]"></div>
        <div className="absolute bottom-[-20px] w-[600px] h-[110px] rounded-[100%] border-[2px] border-[#D946EF]/40 shadow-[0_0_40px_rgba(217,70,239,0.2)] bg-[#D946EF]/5"></div>
        <div className="absolute bottom-6 w-[250px] h-[40px] bg-white/30 blur-[25px] rounded-[100%]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00C6FF] animate-pulse"></span>
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Our Strategic Workflow</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-5 leading-tight tracking-tight max-w-3xl">
            HOW WE WORK FOR YOUR <br />
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">BUSINESS GROWTH</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed mb-4">
            We follow a strategic, data-driven process to create digital solutions that improve visibility, generate leads, and deliver measurable business growth.
          </p>

          {/* Mobile Swipe Guidance Badge */}
          <div className="xl:hidden inline-flex items-center gap-2 text-xs text-[#00C6FF] font-semibold bg-[#0A0F24]/80 px-3.5 py-1.5 rounded-full border border-[#00C6FF]/30 mt-2">
            <span>👈 Swipe horizontally to view all 5 steps 👉</span>
          </div>
        </motion.div>
        
        {/* Process Steps: Horizontal Swipe on Mobile/Tablet, 5-col Grid on Desktop */}
        <div className="relative">
          
          {/* Connecting Line (XL Screens) */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-[2px] hidden xl:block z-0">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.15) 50%, transparent 50%)', backgroundSize: '15px 2px' }}></div>
          </div>

          {/* Scroll Navigation Arrows on Tablet/Mobile */}
          <div className="flex xl:hidden justify-end gap-2 mb-4 px-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#00C6FF]/50 transition-all shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#D946EF]/50 transition-all shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Steps Container: Horizontal Swipe Track on Mobile, Grid on XL */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex xl:grid xl:grid-cols-5 gap-5 sm:gap-6 xl:gap-5 overflow-x-auto xl:overflow-visible snap-x snap-mandatory pb-6 pt-2 px-2 xl:px-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] relative z-10"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center relative group pt-[45px] cursor-pointer w-[82vw] sm:w-[320px] xl:w-auto flex-shrink-0 snap-center"
                >
                  
                  {/* Floating Top Icon Complex */}
                  <div className="absolute top-0 flex items-center justify-center w-[90px] h-[90px] z-20 group-hover:-translate-y-2.5 transition-transform duration-500">
                    {/* Outer gradient ring */}
                    <div className={`absolute inset-0 rounded-full border-[2.5px] border-transparent bg-gradient-to-tr ${step.color} [mask-image:linear-gradient(#fff_0_0)padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:rotate-180 transition-transform duration-700 ease-in-out group-hover:drop-shadow-[0_0_25px_currentColor]`}></div>
                    
                    {/* Inner glowing dark circle */}
                    <div className="absolute inset-[5px] rounded-full bg-[#050A1A] border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover:bg-[#0A0F24] transition-colors duration-500">
                      <Icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-tr ${step.color} drop-shadow-[0_0_10px_currentColor] group-hover:scale-110 transition-transform duration-500`} style={{ stroke: 'url(#gradient-' + idx + ')', strokeWidth: 1.8 }} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="w-full min-h-[300px] sm:min-h-[320px] bg-[#0A0F24]/85 backdrop-blur-xl rounded-[1.5rem] p-5 sm:p-6 pt-16 flex flex-col items-start text-left relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:bg-[#0C132E]/95 border border-white/10 group-hover:border-white/20">
                    
                    {/* Top corner glows */}
                    <div className={`absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br ${step.color} opacity-20 blur-[20px] group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl ${step.color} opacity-20 blur-[20px] group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Bottom glowing line */}
                    <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${step.color} shadow-[0_0_15px_currentColor] group-hover:h-[3px] group-hover:shadow-[0_0_25px_currentColor] transition-all duration-500`}></div>

                    {/* Step Number */}
                    <div className={`text-base font-extrabold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1 drop-shadow-sm`}>
                      {step.num}
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Mobile Step Indicator Dots */}
          <div className="flex xl:hidden justify-center items-center gap-2 mt-4">
            {steps.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === idx 
                    ? 'w-7 bg-gradient-to-r from-[#00C6FF] to-[#D946EF]' 
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
      
      {/* SVG Gradient Defs for Icons */}
      <svg width="0" height="0" className="absolute">
        {steps.map((step, idx) => (
          <linearGradient key={idx} id={`gradient-${idx}`} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={step.gradientStops.start} offset="0%" />
            <stop stopColor={step.gradientStops.end} offset="100%" />
          </linearGradient>
        ))}
      </svg>
    </section>
  );
};

export default Process;
