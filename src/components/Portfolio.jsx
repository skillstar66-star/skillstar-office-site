import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "300px" }} className="text-center md:text-left z-10">
          <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-px bg-primary hidden md:block"></span> Our Portfolio
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Work That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Speaks</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto md:mx-0">
            Explore our diverse portfolio of digital marketing campaigns, high-performance websites, and creative branding that drive real business growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "300px" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 shrink-0 mt-4 md:mt-0"
        >
          <motion.a
            href="https://portfolio-pi-blush-99.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></span>
            <span className="relative z-10">See Portfolio</span>
            <Eye size={18} className="group-hover:scale-110 transition-transform relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
