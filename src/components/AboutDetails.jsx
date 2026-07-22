import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "Digital Marketing Intelligence",
    "AI Integration Solutions",
    "Premium Website Development",
    "SEO & Search Visibility Systems",
    "Branding & Creative Design",
    "Business Automation"
  ];

  const reasons = [
    {
      title: "AI Driven Strategies",
      desc: "Leverage automation, AI tools, and predictive analytics to scale efficiently."
    },
    {
      title: "Complete Digital Ecosystem",
      desc: "From branding to development and marketing, everything works together seamlessly."
    },
    {
      title: "Performance Focused Growth",
      desc: "Every strategy is backed by analytics, measurable KPIs, and user behavior insights."
    },
    {
      title: "Premium Brand Positioning",
      desc: "Build authority, trust, and a strong digital presence in your industry."
    },
    {
      title: "Scalable Solutions",
      desc: "Technology and marketing systems designed for long-term business growth."
    },
    {
      title: "Dedicated Expertise",
      desc: "Industry-focused strategies tailored to your exact business goals."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 inline-block"
        >
          <Link to="/">
            <motion.div 
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#0A0D1A]/80 hover:bg-white/5 border border-white/10 hover:border-primary/50 px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary/20 border border-white/5 group-hover:border-primary/30 flex items-center justify-center transition-colors duration-300 relative z-10">
                <ArrowLeft size={16} className="text-white/70 group-hover:text-primary group-hover:-translate-x-1 transition-all duration-300" />
              </div>
              <span className="font-semibold text-sm text-white/70 group-hover:text-white transition-colors duration-300 relative z-10 tracking-wide">Back to Home</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-8"
          >
            Engineering Digital Success <br />
            <span className="gradient-text">Beyond Traditional Marketing</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto"
          >
            <p>
              Modern businesses need more than advertisements and social media presence. They need <strong className="text-white">intelligent systems that create scalable growth.</strong>
            </p>
            <p>
              SkillStar Digital Solutions helps businesses build stronger digital identities through advanced technology, creative innovation, AI-powered systems, and performance-driven digital strategies.
            </p>
          </motion.div>
        </div>

        {/* Services / Core Pillars */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-3 md:gap-6 mb-32"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#0A0D1A]/60 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-primary/10 rounded-bl-[50px] md:rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <div>
                <div className="text-primary/50 font-heading text-xl md:text-4xl font-bold mb-2 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  0{index + 1}
                </div>
                <div className="w-6 md:w-12 h-px bg-white/20 mb-3 md:mb-6 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500"></div>
              </div>
              <h3 className="text-[10px] leading-tight md:leading-normal md:text-xl font-semibold text-white/90 group-hover:text-white mt-auto">{service}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-16"
          >
            Why Businesses Grow Faster <br/>
            <span className="gradient-text">With SkillStar</span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-3 md:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full group hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                  <span className="text-[10px] md:text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full whitespace-nowrap">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/10 hidden md:block"></div>
                </div>
                <h3 className="text-[10px] leading-tight md:leading-normal md:text-lg font-bold text-white mb-2 md:mb-3">{reason.title}</h3>
                <p className="text-white/60 text-[8px] md:text-sm leading-tight md:leading-relaxed line-clamp-3 md:line-clamp-none">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutDetails;
