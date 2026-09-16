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
    content: "SkillStar completely transformed our online apparel brand. Their team built an ultra-fast modern store, while their high-end video shoots and Instagram reels brought an immediate surge in direct orders across Tamil Nadu. Their aesthetic sense and responsiveness are second to none!",
    services: "E-Commerce Web • Brand Identity • Video Reels",
    verified: "Verified Client",
    rating: 5
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
    content: "As a healthcare clinic in Coimbatore, getting discovered by parents looking for therapy services was crucial. SkillStar completely restructured our Google Business Profile and built a compassionate, patient-friendly website. Our monthly consultation inquiries doubled within 45 days.",
    services: "Local SEO Dominance • Clinic Web Design • GBP Ranking",
    verified: "Verified Client",
    rating: 5
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
    content: "The footfall at our cafe shot up significantly after SkillStar took over our social media content. Their viral food reels and local geo-targeted campaigns brought in consistent weekend crowds. Every week customers tell us they discovered our cafe on Instagram!",
    services: "Viral Reels • Social Media Growth • Local Buzz",
    verified: "Verified Client",
    rating: 5
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
    content: "SkillStar's performance marketing and local search campaigns generate steady, high-intent car service bookings for our workshop every day. What impressed me most is their clear weekly reporting and transparent lead tracking. A genuinely dependable digital partner.",
    services: "Performance Ads • Local Lead Generation • WhatsApp Inquiries",
    verified: "Verified Client",
    rating: 5
  }
];

const GoogleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

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
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md shadow-sm">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Verified Google Reviews</span>
            <span className="flex items-center gap-1 pl-2 border-l border-white/15 text-xs font-extrabold text-[#FACC15]">
              5.0 ★
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            What Our Clients Say <br />
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              About SkillStar Digital Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real 5-star feedback from businesses that trust SkillStar Digital Solutions for their technology and marketing growth.
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
                {/* Header: Logo + Google Rating Stars */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Client Logo Frame */}
                  <div className="w-14 h-14 rounded-xl bg-[#060A1A] border border-white/15 p-2 flex items-center justify-center relative shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.name}, ${testimonial.company} - Client review`} 
                      loading="lazy"
                      width="48"
                      height="48"
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

                  {/* Google Symbol + 5 Rating Stars */}
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold text-gray-200">5.0</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>
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
                
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00E676]/30 transition-colors">
                  <GoogleIcon className="w-3 h-3" />
                  <span className="text-[10px] font-semibold text-gray-300 group-hover:text-[#00E676] transition-colors">Verified</span>
                  <CheckCircle2 className="w-3 h-3 text-[#00E676]" />
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
                      alt={`${testimonial.name}, ${testimonial.company} - Client review`} 
                      loading="lazy"
                      width="48"
                      height="48"
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

                  {/* Google Symbol + 5 Rating Stars */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                      <GoogleIcon className="w-3 h-3" />
                      <span className="text-[10px] font-bold text-gray-200">5.0</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-2.5 h-2.5 fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>
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
                
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                  <GoogleIcon className="w-2.5 h-2.5" />
                  <span className="text-[9px] font-semibold text-gray-300">Verified</span>
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#00E676]" />
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
