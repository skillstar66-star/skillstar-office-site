import React from 'react';
import { Search, ThumbsUp, MousePointerClick, Target, Code, ShoppingCart, PenTool, Image, Video, FileText, Mail, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: Search, title: 'SEO Optimization', desc: 'Rank higher & get discovered' },
  { icon: ThumbsUp, title: 'Social Media Marketing', desc: 'Engage, grow & convert' },
  { icon: MousePointerClick, title: 'Google Ads', desc: 'Drive traffic & increase sales' },
  { icon: Target, title: 'Meta Ads', desc: 'Target. Engage. Convert.' },
  { icon: Code, title: 'Website Development', desc: 'Fast, modern & SEO-friendly' },
  { icon: ShoppingCart, title: 'Ecommerce Development', desc: 'Build stores that sell' },
  { icon: PenTool, title: 'Branding & Logo Design', desc: 'Build a powerful identity' },
  { icon: Image, title: 'Content Creation', desc: 'Content that connects' },
  { icon: Video, title: 'Video Editing', desc: 'Visuals that tell your story' },
  { icon: FileText, title: 'Copywriting', desc: 'Words that sell' },
  { icon: Mail, title: 'Email Marketing', desc: 'Nurture & convert leads' },
  { icon: Bot, title: 'AI Automation', desc: 'Automate. Scale. Succeed.' },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="services" className="container mx-auto px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span> Our Services
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
          End-to-End Digital <span className="gradient-text">Solutions</span>
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
      >
        {services.map((service, i) => {
          const [isActive, setIsActive] = React.useState(false);

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              onHoverStart={() => setIsActive(true)}
              onHoverEnd={() => setIsActive(false)}
              onClick={() => setIsActive(!isActive)}
              animate={isActive ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-[#0A0D1A]/80 backdrop-blur-sm border rounded-xl md:rounded-2xl p-3 md:p-6 transition-all duration-500 cursor-pointer overflow-hidden z-10 ${isActive ? 'border-primary/50 shadow-[0_10px_40px_rgba(37,99,235,0.2)]' : 'border-white/5'}`}
            >
              {/* Animated Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent transition-opacity duration-700 pointer-events-none -z-10 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center gap-2 md:gap-4">
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-colors duration-500 relative overflow-hidden ${isActive ? 'bg-primary/20 border-primary/50' : 'bg-white/5 border-white/10'}`}>
                  {/* Ping animation on hover */}
                  <span className={`absolute inset-0 rounded-full bg-primary/20 ${isActive ? 'animate-ping opacity-100' : 'opacity-0'}`}></span>
                  <service.icon className={`w-5 h-5 md:w-7 md:h-7 transition-all duration-500 relative z-10 ${isActive ? 'text-white scale-110' : 'text-white/80'}`} />
                </div>
                <div>
                  <h3 className={`text-[11px] md:text-lg font-bold mb-0.5 md:mb-1 transition-colors leading-tight ${isActive ? 'text-white' : 'text-white/90'}`}>{service.title}</h3>
                  <p className={`text-[9px] md:text-sm transition-colors leading-tight ${isActive ? 'text-white/70' : 'text-white/50'}`}>{service.desc}</p>
                </div>
              </div>
              
              {/* Bottom Glow Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform transition-all duration-700 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
