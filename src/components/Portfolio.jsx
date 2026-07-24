import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

const rokeaImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784793510/rokea_acysbs.png';
const seedsImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790939/seedstherapy_pqhrpt.png';
const laCafeImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790823/la_cafe_x3ddld.png';
const senthurImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790815/senthur_logo_wpuq9p.png';
const innerCompassImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790821/inner_compass_yoga_iinuun.jpg';

const categories = ['All', 'Website', 'Videos', 'Poster'];

const portfolioItems = [
  // Website
  { id: 1, category: 'Website', img: rokeaImg, title: 'Rokeabyrk' },
  { id: 2, category: 'Website', img: seedsImg, title: 'Seeds Therapy Center' },
  { id: 3, category: 'Website', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', title: 'MedCare Plus' },

  // Videos
  { id: 6, category: 'Videos', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', title: 'Skyline Realty Tour' },
  { id: 7, category: 'Videos', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', title: 'EduTech Promo' },

  // Poster
  { id: 8, category: 'Poster', img: innerCompassImg, title: 'Inner Compass Yoga' },
  { id: 9, category: 'Poster', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', title: 'Vogue Trends' },
];

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filteredItems = activeCat === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCat);

  return (
    <section id="portfolio" className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "300px" }}>
          <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span> Our Portfolio
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Work That <span className="gradient-text">Speaks</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "300px" }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${activeCat === cat
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:scale-105 border border-white/5'
                }`}
            >
              {activeCat === cat && (
                <motion.span layoutId="activeCat" className="absolute inset-0 bg-primary -z-10 rounded-full" />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              transition={{ duration: 0.4, type: "spring" }}
              key={item.id}
              onClick={() => window.open('https://portfolio-pi-blush-99.vercel.app/', '_blank')}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] border border-white/5 hover:border-primary/50 transition-colors z-10 hover:z-20"
            >
              <img src={item.img} alt={`${item.title} - SkillStar Portfolio Work`} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-125" />

              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-2 md:p-6">

                {/* Floating View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-10 h-10 md:w-16 md:h-16 bg-primary/90 text-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Eye className="w-5 h-5 md:w-8 md:h-8 group-hover:animate-pulse" />
                  </motion.div>
                </div>

                <div className="translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-1.5 py-0.5 md:px-3 md:py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-primary text-[8px] md:text-xs font-semibold mb-1 md:mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-[10px] md:text-2xl font-bold text-white mb-0.5 md:mb-1 leading-tight">{item.title}</h3>
                  <p className="text-[8px] md:text-sm text-white/60 leading-tight">Digital Marketing & SEO</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "300px" }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <motion.a
          href="https://portfolio-pi-blush-99.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:border-primary/50"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></span>
          <span className="relative z-10">View Full Portfolio</span>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors relative z-10">
            <Eye size={14} className="group-hover:scale-110 transition-transform" />
          </div>
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          <span className="relative z-10">Start Your Project</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Portfolio;
