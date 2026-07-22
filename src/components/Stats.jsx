import React from 'react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 300, suffix: '%', label: 'Average ROI Generated' },
    { value: 24, suffix: '/7', label: 'Support Available' },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 bg-[#0A0D1A]/80 backdrop-blur-lg border border-white/10 rounded-3xl py-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
      >
        {/* Glow Effects inside Stats card */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#00C48C]/10 rounded-full blur-[60px] pointer-events-none"></div>

        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center px-4 group cursor-default relative z-10"
          >
            <div className="text-4xl md:text-5xl font-bold font-heading mb-2 flex items-center group-hover:scale-110 transition-transform duration-500 origin-bottom text-white">
              <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
              <span className="text-primary ml-1 group-hover:text-[#00C48C] transition-colors">{stat.suffix}</span>
            </div>
            <p className="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
