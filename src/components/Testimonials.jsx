import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Keerthana",
    role: "Founder, Rokeaby RK",
    company: "Rokeaby RK",
    logo: "/rokea.png",
    fallbackLetter: "RK",
    color: "from-[#8B5CF6] to-[#D946EF]",
    glowColor: "rgba(217, 70, 239, 0.4)",
    content: "SkillStar Digital Solutions designed a beautiful, modern website for us, along with complete SEO, AEO, and GEO optimization. Their video editing is super attractive, creative, and engaging. Thank you team!",
    services: "Website Dev • SEO/AEO/GEO • Video Editing"
  },
  {
    id: 2,
    name: "Dr. Saran Kumar",
    role: "Founder, Seeds Therapy",
    company: "Seeds Therapy",
    logo: "/seedstherapy.png",
    fallbackLetter: "ST",
    color: "from-[#00C6FF] to-[#00E676]",
    glowColor: "rgba(0, 230, 118, 0.4)",
    content: "SkillStar designed a wonderful website for Seeds Therapy with strategic SEO, AEO, and GEO services that significantly increased our patient appointments. Their attractive video editing is exceptional. Thank you!",
    services: "Website Dev • SEO/AEO/GEO • Video Editing"
  },
  {
    id: 3,
    name: "Yuvaraj",
    role: "Founder, La Caffe",
    company: "La Caffe",
    logo: "/la cafe.png",
    fallbackLetter: "LC",
    color: "from-[#F59E0B] to-[#EF4444]",
    glowColor: "rgba(245, 158, 11, 0.4)",
    content: "SkillStar creates attractive trending video editing and viral reels for us, while handling our social media management exceptionally well. We have seen great footfall and brand reach. Thank you!",
    services: "Trending Video Editing • Social Media Management"
  },
  {
    id: 4,
    name: "A.K. Samy",
    role: "Managing Director, Senthur Automobiles",
    company: "Senthur Automobiles",
    logo: "/senthur logo.png",
    fallbackLetter: "SA",
    color: "from-[#00C6FF] to-[#3B82F6]",
    glowColor: "rgba(59, 130, 246, 0.4)",
    content: "SkillStar delivers attractive trending video editing and handles our social media marketing and lead generation with outstanding consistency. We get steady service enquiries every day. Thank you!",
    services: "Trending Video Editing • Social Media Handling"
  }
];

const Testimonials = () => {
  // Duplicated list for seamless infinite horizontal marquee on mobile
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#050716] relative overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#00C6FF]/10 via-[#8B5CF6]/10 to-transparent blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#D946EF]/10 to-transparent blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Client Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            What Our Clients <br />
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Say About Working With Us
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real feedback from growing businesses that trust SkillStar Digital Solutions for their technology and marketing growth.
          </p>
        </div>

        {/* ================= DESKTOP VIEW: 4 CARDS GRID (lg+) ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-[#0A0F24]/80 backdrop-blur-xl rounded-2xl p-7 border border-white/10 hover:border-white/25 relative group flex flex-col justify-between shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Card Ambient Glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none rounded-full"
                style={{ backgroundColor: testimonial.glowColor }}
              ></div>
              
              {/* Quote Background Watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-180 pointer-events-none" />

              <div>
                {/* Header: Logo + Stars */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Client Logo Frame */}
                  <div className="w-14 h-14 rounded-xl bg-[#060A1A] border border-white/15 p-2 flex items-center justify-center relative shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} Logo`} 
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      style={{ display: 'none' }}
                      className={`w-full h-full items-center justify-center font-display font-extrabold text-sm bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                    >
                      {testimonial.fallbackLetter}
                    </div>
                  </div>

                  {/* 5 Rating Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>

                {/* Services Badge */}
                <div className="mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/5 rounded-md inline-block">
                    {testimonial.services}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-6 relative z-10 font-normal group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Reviewer / Client Info */}
              <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-[#00C6FF] transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium">
                    {testimonial.role}
                  </p>
                </div>
                
                <div className="w-6 h-6 rounded-full bg-[#00E676]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676]" />
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${testimonial.color} opacity-40 group-hover:opacity-100 shadow-[0_0_15px_currentColor] transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ================= MOBILE & TABLET VIEW: INFINITE HORIZONTAL MARQUEE (< lg) ================= */}
      <div className="lg:hidden relative w-full overflow-hidden py-4">
        {/* Left & Right Edge Gradient Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050716] via-[#050716]/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050716] via-[#050716]/80 to-transparent z-20 pointer-events-none"></div>

        {/* Continuous Marquee Track */}
        <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap min-w-max hover:[animation-play-state:paused] px-4">
          {marqueeTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="w-[300px] sm:w-[340px] flex-shrink-0 whitespace-normal bg-[#0A0F24]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Top Ambient Glow */}
              <div 
                className="absolute top-0 right-0 w-28 h-28 blur-3xl opacity-20 pointer-events-none rounded-full"
                style={{ backgroundColor: testimonial.glowColor }}
              ></div>
              
              {/* Quote Background Watermark */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-white/5 rotate-180 pointer-events-none" />

              <div>
                {/* Header: Logo + Stars */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Client Logo Frame */}
                  <div className="w-12 h-12 rounded-xl bg-[#060A1A] border border-white/15 p-1.5 flex items-center justify-center relative shadow-md flex-shrink-0">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} Logo`} 
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      style={{ display: 'none' }}
                      className={`w-full h-full items-center justify-center font-display font-extrabold text-xs bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                    >
                      {testimonial.fallbackLetter}
                    </div>
                  </div>

                  {/* 5 Rating Stars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>

                {/* Services Badge */}
                <div className="mb-3">
                  <span className="px-2 py-0.5 text-[9px] font-semibold text-gray-300 bg-white/5 border border-white/5 rounded-md inline-block">
                    {testimonial.services}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-gray-300 text-xs leading-relaxed mb-5 relative z-10 font-normal">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Reviewer / Client Info */}
              <div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-xs">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] mt-0.5 font-medium">
                    {testimonial.role}
                  </p>
                </div>
                
                <div className="w-5 h-5 rounded-full bg-[#00E676]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-[#00E676]" />
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${testimonial.color} opacity-70 shadow-[0_0_15px_currentColor]`}></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
