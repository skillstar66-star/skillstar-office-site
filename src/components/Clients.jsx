import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Star, Users, Zap } from 'lucide-react';

const Clients = () => {

  return (
    <section id="clients" className="relative py-24 bg-[#05050A] overflow-clip min-h-screen flex flex-col items-center font-sans">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#05050A] to-[#05050A] pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        {/* Header Section */}
        <div className="mb-16 text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-white/90 text-sm font-semibold tracking-[0.2em] uppercase">CLIENT CASE STUDY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Powering Brands. Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Impact.</span>
          </motion.h2>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex items-center justify-center gap-4 text-white/50 mb-4"
          >
            <div className="w-8 h-[1px] bg-white/20"></div>
            <div className="w-2 h-2 rotate-45 border border-white/40"></div>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg font-light"
          >
            Four distinct brands. One commitment to excellence.
          </motion.p>
        </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              View Case Study <ArrowRight size={18} />
            </Link>
          </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 w-full max-w-5xl mx-auto"
        >
          <div className="bg-[#0A0B14]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:flex md:flex-row items-start md:items-center justify-between gap-y-8 gap-x-4 md:gap-4 shadow-2xl">
            
            {/* Stat 1 */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-1/4 justify-center md:justify-start pl-0 md:pl-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Globe className="text-purple-400 w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-white font-bold text-lg leading-tight">4+</div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-wide">Brands Delivered</div>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>

            {/* Stat 2 */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-1/4 justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Users className="text-blue-400 w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-white font-bold text-lg leading-tight">100+</div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-wide">Happy Clients</div>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>

            {/* Stat 3 */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-1/4 justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Zap className="text-emerald-400 w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-white font-bold text-lg leading-tight">50+</div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>

            {/* Stat 4 */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-1/4 justify-center md:justify-end pr-0 md:pr-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <Star className="text-amber-400 w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-white font-bold text-lg leading-tight">5<span className="text-amber-400 text-sm ml-0.5">★</span></div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>


    </section>
  );
};

export default Clients;
