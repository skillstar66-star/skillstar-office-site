import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    client: 'Rokeaby RK',
    tag: 'FASHION & RETAIL',
    title: 'Brand Growth & Digital Presence',
    desc: 'Social media marketing, brand identity, and high-impact creative campaigns.',
    stat1: '+240%', stat1Label: 'Reach & Growth',
    stat2: '+190%', stat2Label: 'Customer Enquiries',
    logo: '/rokea.png',
    fallbackLetter: 'RK',
    color: 'from-[#8B5CF6] to-[#D946EF]',
    glowColor: 'rgba(217, 70, 239, 0.4)',
    link: 'https://portfolio-pi-blush-99.vercel.app/'
  },
  {
    client: 'Seeds Therapy',
    tag: 'WELLNESS & HEALTHCARE',
    title: 'Local SEO & Patient Acquisition',
    desc: 'Targeted local SEO, Google Business profile optimization, and trust-building.',
    stat1: '+310%', stat1Label: 'Organic Traffic',
    stat2: '+180%', stat2Label: 'Appointment Bookings',
    logo: '/seedstherapy.png',
    fallbackLetter: 'ST',
    color: 'from-[#00C6FF] to-[#00E676]',
    glowColor: 'rgba(0, 230, 118, 0.4)',
    link: 'https://portfolio-pi-blush-99.vercel.app/'
  },
  {
    client: 'Senthur Automobiles',
    tag: 'AUTOMOTIVE & SERVICES',
    title: 'Lead Gen & Service Bookings',
    desc: 'Performance ads, local search visibility, and customer conversion funnels.',
    stat1: '+280%', stat1Label: 'Qualified Leads',
    stat2: '+160%', stat2Label: 'Service Enquiries',
    logo: '/senthur logo.png',
    fallbackLetter: 'SA',
    color: 'from-[#00C6FF] to-[#3B82F6]',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    link: 'https://portfolio-pi-blush-99.vercel.app/'
  },
  {
    client: 'La Caffe',
    tag: 'CAFE & HOSPITALITY',
    title: 'Footfall & Social Media Marketing',
    desc: 'Viral Instagram Reels, food creatives, and local brand awareness campaigns.',
    stat1: '+350%', stat1Label: 'Social Engagement',
    stat2: '+210%', stat2Label: 'Store Footfall',
    logo: '/la cafe.png',
    fallbackLetter: 'LC',
    color: 'from-[#F59E0B] to-[#EF4444]',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    link: 'https://portfolio-pi-blush-99.vercel.app/'
  }
];

const CaseStudies = () => {
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
      setActiveCard(Math.min(Math.max(index, 0), cases.length - 1));
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
    <section id="work" className="py-24 bg-[#050716] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00C6FF]/10 to-[#8B5CF6]/15 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-[#D946EF]/10 to-transparent blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Featured Portfolio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
              Our Work & <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <p className="text-gray-300 text-sm max-w-sm mb-4 sm:mb-6 leading-relaxed">
              We partner with forward-thinking businesses and help them achieve measurable digital growth and real customer conversions.
            </p>
            <a 
              href="https://portfolio-pi-blush-99.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/20 text-white text-sm font-semibold hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#D946EF] hover:border-transparent transition-all duration-300 shadow-md group"
            >
              View Full Portfolio 
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Swipe Guidance & Controls */}
        <div className="lg:hidden flex items-center justify-between mb-4 px-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#00C6FF] font-semibold bg-[#0A0F24]/80 px-3 py-1 rounded-full border border-[#00C6FF]/30">
            <span>👈 Swipe to view all 4 clients 👉</span>
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

        {/* 4 Cards Container: Horizontal Touch Swipe on Mobile/Tablet, 4-col Grid on Desktop */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-6 pt-2 px-2 lg:px-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {cases.map((item, idx) => {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="w-[84vw] sm:w-[320px] lg:w-auto flex-shrink-0 lg:flex-shrink snap-center group bg-[#0A0F24]/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-500 hover:-translate-y-2 relative flex flex-col justify-between shadow-xl"
              >
                {/* Visual Area */}
                <div className="h-40 sm:h-44 w-full relative overflow-hidden bg-[#050716] flex items-center justify-center p-6">
                  {/* Radial Backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent z-0"></div>
                  
                  {/* Dynamic Glowing Orb */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 blur-[40px] rounded-full transition-transform duration-700 group-hover:scale-150 opacity-70"
                    style={{ backgroundColor: item.glowColor }}
                  ></div>
                  
                  {/* Logo Container */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-500">
                    <div className="w-24 h-20 rounded-2xl bg-[#0A0F24]/90 border border-white/15 flex items-center justify-center p-3 shadow-lg relative overflow-hidden">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <img 
                        src={item.logo} 
                        alt={`${item.client} - ${item.title}`} 
                        className="max-h-full max-w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        style={{ display: 'none' }}
                        className={`w-full h-full items-center justify-center font-display font-extrabold text-2xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent relative z-10`}
                      >
                        {item.fallbackLetter}
                      </div>
                    </div>
                  </div>

                  {/* Gradient Fade to Content */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0F24] to-transparent z-10"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-5 z-20">
                    <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-md shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 sm:p-6 pt-2 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Client Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00C6FF] transition-all duration-300">
                      {item.client}
                    </h3>
                    
                    {/* Project Title */}
                    <p className="text-xs font-semibold text-[#8B5CF6] mb-3">
                      {item.title}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-xs leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Stats & Link Arrow */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <div className="text-base font-extrabold text-[#00C6FF] leading-none mb-1">{item.stat1}</div>
                        <div className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{item.stat1Label}</div>
                      </div>
                      <div className="w-[1px] h-6 bg-white/10 mt-1"></div>
                      <div>
                        <div className="text-base font-extrabold text-[#00E676] leading-none mb-1">{item.stat2}</div>
                        <div className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{item.stat2Label}</div>
                      </div>
                    </div>
                    
                    {/* Circular Action Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#D946EF] group-hover:border-transparent transition-all duration-300 flex-shrink-0"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                    </a>
                  </div>
                </div>

                {/* Bottom Border Glow */}
                <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${item.color} opacity-40 group-hover:opacity-100 shadow-[0_0_15px_currentColor] transition-all duration-500`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Step Indicator Dots */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx 
                  ? 'w-7 bg-gradient-to-r from-[#00C6FF] to-[#D946EF]' 
                  : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to client ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
