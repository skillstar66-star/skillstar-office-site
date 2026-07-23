import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronRight, Users, Trophy, TrendingUp, Hexagon, Command, Flame, Triangle, Code, Boxes } from 'lucide-react';
const innerCompassLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790821/inner_compass_yoga_iinuun.jpg';
const laCafeLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790823/la_cafe_x3ddld.png';
const rokeaLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784793510/rokea_acysbs.png';
const seedsTherapyLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790939/seedstherapy_pqhrpt.png';
const senthurLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790815/senthur_logo_wpuq9p.png';

const testimonials = [
  {
    id: 1,
    name: 'Keerthana',
    role: 'Founder, Rokea by RK',
    quote: '"SkillStar completely transformed our online presence. Our e-commerce website is remarkably faster. Thanks to their SEO, we\'ve seen a massive jump in Google visibility and organic traffic, leading to significantly more customer inquiries and online sales. Highly recommended!"',
    avatar: rokeaLogo,
  },
  {
    id: 2,
    name: 'Dr. Saran Kumar',
    role: 'Director, Seeds Therapy Center',
    quote: '"Partnering with SkillStar has been a game-changer. Their targeted Google Ads and SEO strategies improved our local search rankings, bringing a steady stream of quality patient inquiries. Their video editing team also created fantastic professional content that truly resonates."',
    avatar: seedsTherapyLogo,
  },
  {
    id: 3,
    name: 'Yuvaraj',
    role: 'Owner, LA Cafe',
    quote: '"Since SkillStar took over our social media, our online presence has exploded. Their creative video editing and strategic posts significantly boosted our Instagram engagement. We\'ve seen a noticeable increase in daily visits, food orders, and a much stronger local brand presence."',
    avatar: laCafeLogo,
  },
  {
    id: 4,
    name: 'A.K. Samy',
    role: 'Managing Partner, Senthur Automobiles',
    quote: '"The team at SkillStar truly understands how to build brand awareness. Their social media management has consistently driven higher engagement and generated quality leads for our dealership. They\'ve helped us build a stronger sense of trust with our customers. Exceptional service!"',
    avatar: senthurLogo,
  },
];

const avatars = [
  rokeaLogo,
  seedsTherapyLogo,
  laCafeLogo,
  senthurLogo,
];

const stats = [
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '4.9/5', label: 'Client Rating', icon: Star },
  { value: '98%', label: 'Satisfaction Rate', icon: Trophy },
  { value: '250%', label: 'Average Growth', icon: TrendingUp },
];

const trustedBrands = [
  { name: 'Rokeabyrk', logo: rokeaLogo },
  { name: 'Inner Compass Yoga', logo: innerCompassLogo },
  { name: 'Seeds Therapy', logo: seedsTherapyLogo },
  { name: 'Senthur', logo: senthurLogo },
  { name: 'La Cafe', logo: laCafeLogo },
];

const GlowingGlobe = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

      {/* Background ambient light */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-700/20 rounded-full blur-[100px] md:blur-[120px] -z-10"></div>

      {/* Globe structure */}
      <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">

        {/* Core sphere with deep shadow and border */}
        <div className="absolute inset-0 rounded-full bg-[#020412] border border-blue-500/30 shadow-[inset_0_0_80px_rgba(59,130,246,0.8),0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">

          {/* Rotating SVG Wireframe (Particles) */}
          <div className="absolute inset-0 animate-[spin_60s_linear_infinite] w-[200%] h-[200%] -left-[50%] -top-[50%]">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Longitude lines */}
              {[...Array(24)].map((_, i) => (
                <ellipse
                  key={`long-${i}`}
                  cx="50" cy="50" rx={50 * Math.cos((i * 7.5 * Math.PI) / 180)} ry="50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.2"
                  strokeDasharray="0.5 1.5"
                  opacity="0.6"
                />
              ))}
              {/* Latitude lines */}
              {[...Array(24)].map((_, i) => {
                const angle = ((i - 11.5) * 7.5 * Math.PI) / 180;
                const radius = 50 * Math.cos(angle);
                const yOffset = 50 * Math.sin(angle);
                return (
                  <ellipse
                    key={`lat-${i}`}
                    cx="50" cy={50 + yOffset} rx={radius} ry={radius * 0.2}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="0.2"
                    strokeDasharray="0.5 1.5"
                    opacity="0.5"
                  />
                );
              })}
            </svg>
          </div>

          {/* Inner highlight for spherical 3D effect */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.4)_0%,transparent_60%)] mix-blend-screen"></div>
          <div className="absolute inset-0 rounded-full shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.9)]"></div>
        </div>

        {/* Equatorial Ring (Tilted and extremely bright) */}
        <div className="absolute w-[160%] h-[25%] md:h-[100px] rounded-[50%] border-t-[2px] border-b-[2px] border-blue-400 shadow-[0_0_30px_#60a5fa,inset_0_0_20px_#60a5fa] -rotate-12 animate-[pulse_4s_ease-in-out_infinite]">
          {/* Bright points on the ring */}
          <div className="absolute top-1/2 -left-1 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff,0_0_40px_#60a5fa] -translate-y-1/2"></div>
          <div className="absolute top-1/2 -right-1 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff,0_0_40px_#60a5fa] -translate-y-1/2"></div>
          {/* Front glow arc */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent blur-[2px] opacity-80"></div>
        </div>
      </div>

    </div>
  );
};


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTest = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative min-h-screen bg-[#02040f] py-24 overflow-hidden flex flex-col justify-center">

      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.2, animationDelay: `${Math.random() * 3}s` }}>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex-1 flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-16">

          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#0a0d1a] border border-blue-500/20 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase">Testimonials</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-[1.1]">
              Don't Just Take <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Our Word For It</span>
            </h2>

            <p className="text-base md:text-lg text-white/60 mb-10 leading-relaxed">
              Real stories. Real impact. See what founders, executives and marketers say about working with SkillStar.
            </p>

            {/* Reviews summary */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt="Client" className="w-12 h-12 rounded-full border-2 border-[#02040f] object-contain bg-white p-1 relative" style={{ zIndex: 4 - i }} />
                ))}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-2 border-[#02040f] relative z-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <span className="text-white font-bold text-sm flex items-center">4.9<Star className="w-3 h-3 ml-0.5 fill-white" /></span>
                </div>
              </div>
              <div>
                <div className="text-white font-semibold text-base md:text-lg">Excellent Reviews</div>
                <div className="text-white/50 text-sm">Based on 100+ clients</div>
              </div>
            </div>

            {/* Stats Grid Card */}
            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md w-full">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#050711] p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500 stroke-[1.5px] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0" />
                  <div>
                    <div className="text-white font-bold text-xl md:text-2xl font-heading">{stat.value}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Glowing Globe & Card */}
          <div className="relative h-[450px] md:h-[550px] w-full flex flex-col items-center justify-center mt-10 lg:mt-0 lg:pl-10">
            <GlowingGlobe />

            <div className="relative z-10 flex items-center justify-center w-full max-w-[340px] md:max-w-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] w-full"
                >
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-4 md:mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 md:mb-8 min-h-[100px]">
                    {currentTest.quote}
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6"></div>

                  <div className="flex items-center gap-4">
                    <img src={currentTest.avatar} alt={currentTest.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 object-contain bg-white p-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base font-heading">{currentTest.name}</h4>
                      <p className="text-blue-500 text-[10px] md:text-xs mt-0.5 tracking-wide">{currentTest.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Button */}
              <button
                onClick={nextTestimonial}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0a0d1a] border border-blue-500/50 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)] transition-all duration-300 group z-20 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Slide Indicators underneath globe */}
            <div className="absolute -bottom-4 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'w-8 bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Trusted Brands Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 mt-12 lg:mt-auto">
        <div className="bg-[#050711] border border-white/5 rounded-2xl py-6 md:py-8 px-6 md:px-12 flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-[10px] font-bold tracking-[0.2em] text-blue-500/60 uppercase text-center flex items-center gap-4 w-full">
            <span className="h-px bg-white/5 flex-1 hidden md:block"></span>
            TRUSTED BY GROWING BRANDS WORLDWIDE
            <span className="h-px bg-white/5 flex-1 hidden md:block"></span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 w-full opacity-60">
            {trustedBrands.map((brand, i) => (
              <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                {brand.logo ? (
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shrink-0">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <brand.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                )}
                <span className="text-white font-bold font-heading text-base md:text-xl tracking-tight whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
