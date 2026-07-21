import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo (2).png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="about" className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -z-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Visuals / Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-[#0A0D1A]/40 backdrop-blur-md border border-white/10 aspect-[4/5] lg:aspect-square group flex items-center justify-center">
            {/* Glowing Orb behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/40 rounded-full blur-[60px] group-hover:bg-primary/60 group-hover:scale-150 transition-all duration-700"></div>
            
            <img 
              src={logoImg} 
              alt="Skillstar Logo" 
              className="w-3/5 h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80"></div>
            
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span> About Us
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            We Build Digital <br/>
            <span className="gradient-text">Experiences</span> That Matter
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-white/70 text-base leading-relaxed mb-8">
            Skillstar is a premium digital agency focused on driving real, measurable growth for our clients. We combine data-driven strategies with stunning design to elevate your brand in the digital landscape.
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Target, title: 'Precision Strategy', desc: 'Data-backed marketing plans.' },
              { icon: Zap, title: 'Rapid Execution', desc: 'Fast, agile, and effective.' },
              { icon: Users, title: 'Client-Centric', desc: 'Your success is our priority.' },
              { icon: CheckCircle2, title: 'Proven Results', desc: 'Consistent ROI delivery.' }
            ].map((item, i) => (
              <motion.div variants={itemVariants} key={i} className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            variants={itemVariants}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            Learn More About Us
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
