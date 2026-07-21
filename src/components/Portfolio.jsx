import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

const categories = ['All', 'Healthcare', 'Education', 'Real Estate', 'Fashion', 'More'];

const portfolioItems = [
  { id: 1, category: 'Healthcare', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', title: 'MedCare Plus' },
  { id: 2, category: 'Education', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', title: 'EduTech Pro' },
  { id: 3, category: 'Real Estate', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', title: 'Skyline Realty' },
  { id: 4, category: 'Fashion', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', title: 'Vogue Trends' },
  { id: 5, category: 'Food', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', title: 'Gourmet Bites' },
  { id: 6, category: 'Travel', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800', title: 'Wanderlust' },
];

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filteredItems = activeCat === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCat);

  return (
    <section id="portfolio" className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span> Our Portfolio
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Work That <span className="gradient-text">Speaks</span>
          </h2>
        </motion.div>
        
        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                activeCat === cat 
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
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, type: "spring" }}
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-[0_15px_40px_rgba(37,99,235,0.2)]"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
              
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-2 md:p-6">
                
                {/* Floating View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 bg-primary/90 text-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-spring backdrop-blur-md">
                   <Eye className="w-4 h-4 md:w-6 md:h-6" />
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
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:border-primary/50"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></span>
          <span className="relative z-10">View Portfolio</span>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors relative z-10">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Portfolio;
