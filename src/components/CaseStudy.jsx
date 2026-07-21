import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;
import { motion } from 'framer-motion';

const CaseStudy = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/50 uppercase mb-2">Case Study</h4>
            <h2 className="text-3xl font-bold mb-2">ABC Fashion</h2>
            <p className="text-white/60 mb-8">How we increased organic traffic & sales</p>
            
            <div className="grid grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">+<CountUp end={450} duration={2.5} />%</div>
                <p className="text-sm text-white/60 font-medium">Organic Traffic</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">+<CountUp end={280} duration={2.5} />%</div>
                <p className="text-sm text-white/60 font-medium">Leads Generated</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">+<CountUp end={170} duration={2.5} />%</div>
                <p className="text-sm text-white/60 font-medium">Sales Growth</p>
              </div>
            </div>

            <button className="text-white hover:text-primary font-medium flex items-center gap-2 transition-colors">
              View Case Study <ArrowRight size={16} />
            </button>
          </div>

          {/* Chart Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[250px] md:h-[300px] relative flex items-end justify-between gap-1 pt-12"
          >
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               <path d="M0,100 L0,80 Q25,70 50,40 T100,10 L100,100 Z" fill="url(#grad)" opacity="0.2" />
               <path d="M0,80 Q25,70 50,40 T100,10" fill="none" stroke="#2563EB" strokeWidth="2" />
               <defs>
                 <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#2563EB" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
             </svg>
             {/* Data Points */}
             {[10, 30, 20, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
               <div key={i} className="w-full bg-transparent flex flex-col justify-end items-center h-full group">
                  <div className="w-1.5 md:w-2 bg-blue-500/20 group-hover:bg-blue-500 rounded-t-full transition-all duration-300" style={{ height: `${h}%` }}></div>
               </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
