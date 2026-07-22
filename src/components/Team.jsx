import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Rocket, Target, BarChart2, PenTool, Code, Linkedin, Twitter, Mail,
  Briefcase, FileText, Sparkles, Cpu, Heart
} from 'lucide-react';
import CountUpPkg from 'react-countup';

import dhanushaImg from '../assets/dhanusha.png';
import dineshImg from '../assets/dinesh.png';
import hariniImg from '../assets/harini.png';
import ramkumarImg from '../assets/ramkumar.png';
import saravananImg from '../assets/saravanan.png';
import sheebaImg from '../assets/sheeba.png';
import skillstarLogo from '../assets/logo (2).png';

const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const Team = () => {
  const teamMembers = [
    {
      name: 'Anto Sheeba',
      role: 'Administration Head',
      badge: 'ADMIN',
      color: 'purple',
      desc: 'Leading administrative operations and ensuring seamless team management with 5 years of leadership experience.',
      tags: ['Administration', 'Management', '5 Years Exp'],
      img: sheebaImg,
      icon: Users
    },
    {
      name: 'Dhanusha',
      role: 'UI/UX Designer',
      badge: 'DESIGN',
      color: 'orange',
      desc: 'Creative UI/UX designer crafting intuitive and visually appealing digital experiences with 1 year of experience.',
      tags: ['UI/UX', 'Design', '1 Year Exp'],
      img: dhanushaImg,
      icon: PenTool
    },
    {
      name: 'Harini',
      role: 'SEO & App Developer',
      badge: 'SEO & APP',
      color: 'pink',
      desc: 'Focused on optimizing digital presence and developing engaging applications with 1 year of experience.',
      tags: ['SEO', 'App Dev', '1 Year Exp'],
      img: hariniImg,
      icon: Target
    },
    {
      name: 'Saravanan',
      role: 'Senior Video Editor',
      badge: 'VIDEO',
      color: 'blue',
      desc: 'Expert video editor creating captivating visual stories and dynamic content with 4 years of professional experience.',
      tags: ['Video Editing', 'Motion Graphics', '4 Years Exp'],
      img: saravananImg,
      icon: Rocket
    },
    {
      name: 'Ram kumar',
      role: 'Full Stack Developer',
      badge: 'DEVELOPMENT',
      color: 'green',
      desc: 'Full-stack developer building fast, scalable and high-performance web applications with 2 years of experience.',
      tags: ['React', 'Node.js', '2 Years Exp'],
      img: ramkumarImg,
      icon: Code
    },
    {
      name: 'Dinesh',
      role: 'Full Stack Developer & AI',
      badge: 'AI & DEV',
      color: 'blue',
      desc: 'Specialist in full-stack development and artificial intelligence integration with 2 years of hands-on experience.',
      tags: ['AI', 'Full Stack', '2 Years Exp'],
      img: dineshImg,
      icon: Cpu
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple': return { text: 'text-purple-400', border: 'border-purple-500/30', hoverBorder: 'group-hover:border-purple-500/60', bg: 'bg-purple-500/10', iconBg: 'bg-purple-900/50', iconText: 'text-purple-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]' };
      case 'pink': return { text: 'text-pink-400', border: 'border-pink-500/30', hoverBorder: 'group-hover:border-pink-500/60', bg: 'bg-pink-500/10', iconBg: 'bg-pink-900/50', iconText: 'text-pink-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)]' };
      case 'orange': return { text: 'text-orange-400', border: 'border-orange-500/30', hoverBorder: 'group-hover:border-orange-500/60', bg: 'bg-orange-500/10', iconBg: 'bg-orange-900/50', iconText: 'text-orange-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]' };
      case 'green': return { text: 'text-emerald-400', border: 'border-emerald-500/30', hoverBorder: 'group-hover:border-emerald-500/60', bg: 'bg-emerald-500/10', iconBg: 'bg-emerald-900/50', iconText: 'text-emerald-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(16,185,129,0.15)]' };
      case 'blue': return { text: 'text-blue-400', border: 'border-blue-500/30', hoverBorder: 'group-hover:border-blue-500/60', bg: 'bg-blue-500/10', iconBg: 'bg-blue-900/50', iconText: 'text-blue-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]' };
      default: return { text: 'text-blue-400', border: 'border-blue-500/30', hoverBorder: 'group-hover:border-blue-500/60', bg: 'bg-blue-500/10', iconBg: 'bg-blue-900/50', iconText: 'text-blue-300', shadow: 'group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]' };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 12 }
    }
  };

  return (
    <section className="py-24 bg-[#050714] relative overflow-hidden font-sans">
      {/* Animated Background accents */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3"
      ></motion.div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "300px" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-transparent border border-white/10 rounded-full px-4 py-1.5 shadow-sm mb-6 cursor-default"
          >
            <Users size={14} className="text-white/60" />
            <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "300px" }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Meet The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SkillStar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "300px" }} transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            A multidisciplinary team of strategists, designers, developers, AI specialists, and marketers engineering digital growth for ambitious brands.
          </motion.p>
        </div>

        {/* Mobile Swipe Indication */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="lg:hidden flex justify-center items-center gap-2 mb-4 text-white/40 text-xs tracking-wider animate-pulse"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          <span>SWIPE TO EXPLORE</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-12 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex lg:flex-col gap-6 w-max lg:w-full">
            {/* First Row: Rehan (2 cols) + Ram (1 col) + Dinesh (1 col) */}
            <div className="flex flex-row lg:flex-row gap-6 lg:mb-6">

              {/* Rehan - CEO & Founder */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="group w-[75vw] sm:w-[300px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none lg:flex-[2] bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-[1.5rem] lg:rounded-[24px] p-4 lg:p-8 flex flex-col transition-colors duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] relative overflow-hidden z-10 hover:z-20"
              >
                {/* Card Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start mb-4 md:mb-8 flex-1 relative z-10">
                  {/* Avatar */}
                  <div className="relative shrink-0 mx-auto md:mx-0">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="w-24 h-24 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-500"
                      >
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0A0E1A]">
                          <img src={skillstarLogo} alt="Rehan" className="w-full h-full object-contain bg-[#0A0E1A] p-3 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                      </motion.div>
                    </motion.div>
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/50 group-hover:bg-blue-500 transition-colors">
                        <Rocket size={12} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 md:mb-3 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                          CEO & FOUNDER
                        </span>
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">Rehan</h3>
                        <p className="text-blue-500 font-medium text-[11px] md:text-base mb-2 md:mb-4">CEO & Founder</p>
                      </div>
                    </div>

                    <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-3 md:mb-6 group-hover:text-white/80 transition-colors line-clamp-3 md:line-clamp-none">
                      Visionary leader driving digital strategy, innovation, and business growth across all major platforms.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
                      {['Leadership', 'Growth Hacking', 'Strategy', 'Vision'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 border border-white/5 hover:border-blue-500/30 text-white/70 hover:text-white hover:bg-blue-500/10 text-[9px] md:text-xs rounded-full transition-all cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-3 group/stat">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                      <Briefcase size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-baseline">
                        <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Years Exp</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/stat">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                      <FileText size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-baseline">
                        <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Projects Done</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/stat">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                      <Users size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-baseline">
                        <CountUp end={30} duration={2.5} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ram & Dinesh */}
              {teamMembers.slice(0, 2).map((member) => {
                const colors = getColorClasses(member.color);
                return (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    key={member.name}
                    className={`group w-[70vw] sm:w-[260px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none lg:flex-1 bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 ${colors.hoverBorder} rounded-[1.5rem] lg:rounded-[24px] p-4 lg:p-8 flex flex-col transition-colors duration-500 ${colors.shadow} relative overflow-hidden z-10 hover:z-20`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      {/* Avatar */}
                      <motion.div
                        className="relative"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className={`w-14 h-14 md:w-20 md:h-20 rounded-full p-[2px] bg-gradient-to-br from-${member.color}-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,0,0,0.2)]`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0E1A]">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </motion.div>
                        {/* Floating Icon */}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10"
                        >
                          <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${colors.iconBg} flex items-center justify-center border border-white/10`}>
                            <member.icon size={12} className={`${colors.iconText} w-2 h-2 md:w-3 md:h-3`} />
                          </div>
                        </motion.div>
                      </motion.div>
                      {/* Badge */}
                      <span className={`inline-block px-2 py-0.5 md:px-3 md:py-1 ${colors.bg} border border-white/5 ${colors.text} text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-transform`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1 group-hover:text-white/90 transition-colors">{member.name}</h3>
                      <p className={`${colors.text} font-medium mb-2 md:mb-4 text-[10px] md:text-sm`}>{member.role}</p>
                      <p className="text-white/60 text-[10px] md:text-sm leading-relaxed mb-3 md:mb-6 flex-1 group-hover:text-white/80 transition-colors line-clamp-3 md:line-clamp-none">
                        {member.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8">
                        {member.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 md:px-3 py-1 bg-white/5 border border-white/5 text-white/70 text-[9px] md:text-xs rounded-full transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 md:gap-3 justify-center pt-4 md:pt-6 border-t border-white/5">
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                          <a key={i} href="#" className={`w-8 h-8 rounded-full bg-white/5 hover:${colors.bg} border border-white/5 flex items-center justify-center text-white/40 hover:${colors.text} transition-all duration-300 hover:-translate-y-1`}>
                            <Icon size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Second Row: Rest of the team (4 cols) */}
            <div className="flex flex-row lg:grid lg:grid-cols-4 gap-6 lg:mb-12">
              {teamMembers.slice(2).map((member) => {
                const colors = getColorClasses(member.color);
                return (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    key={member.name}
                    className={`group w-[70vw] sm:w-[260px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 ${colors.hoverBorder} rounded-[1.5rem] lg:rounded-[24px] p-4 lg:p-8 flex flex-col transition-colors duration-500 ${colors.shadow} relative overflow-hidden z-10 hover:z-20`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      {/* Avatar */}
                      <motion.div
                        className="relative"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className={`w-14 h-14 md:w-20 md:h-20 rounded-full p-[2px] bg-gradient-to-br from-${member.color}-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,0,0,0.2)]`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0E1A]">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </motion.div>
                        {/* Floating Icon */}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10"
                        >
                          <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${colors.iconBg} flex items-center justify-center border border-white/10`}>
                            <member.icon size={12} className={`${colors.iconText} w-2 h-2 md:w-3 md:h-3`} />
                          </div>
                        </motion.div>
                      </motion.div>
                      {/* Badge */}
                      <span className={`inline-block px-2 py-0.5 md:px-3 md:py-1 ${colors.bg} border border-white/5 ${colors.text} text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-transform`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1 group-hover:text-white/90 transition-colors">{member.name}</h3>
                      <p className={`${colors.text} font-medium mb-2 md:mb-4 text-[10px] md:text-sm`}>{member.role}</p>
                      <p className="text-white/60 text-[10px] md:text-sm leading-relaxed mb-3 md:mb-6 flex-1 group-hover:text-white/80 transition-colors line-clamp-3 md:line-clamp-none">
                        {member.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8">
                        {member.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 md:px-3 py-1 bg-white/5 border border-white/5 text-white/70 text-[9px] md:text-xs rounded-full transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 md:gap-3 justify-center pt-4 md:pt-6 border-t border-white/5">
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                          <a key={i} href="#" className={`w-8 h-8 rounded-full bg-white/5 hover:${colors.bg} border border-white/5 flex items-center justify-center text-white/40 hover:${colors.text} transition-all duration-300 hover:-translate-y-1`}>
                            <Icon size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "300px" }} transition={{ delay: 0.6, type: "spring", stiffness: 40 }}
          className="group relative bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 rounded-[24px] p-6 lg:p-8 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative z-10">
            <motion.div
              whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Sparkles size={32} className="text-blue-400" />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">United</span> by Passion. <span className="text-white/70">Driven by Results.</span>
              </h4>
              <p className="text-sm text-white/50 max-w-md group-hover:text-white/70 transition-colors">
                We combine strategy, creativity, technology and AI to build digital ecosystems that accelerate growth and create lasting impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full xl:w-auto divide-x divide-white/5 relative z-10">
            {[
              { icon: Target, label: 'Strategy First' },
              { icon: Rocket, label: 'Performance Driven' },
              { icon: Cpu, label: 'AI Powered' },
              { icon: Heart, label: 'Client Focused' }
            ].map((feature, i) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={i}
                className="flex flex-col items-center text-center px-4 cursor-default"
              >
                <div className="p-2.5 rounded-xl bg-white/5 mb-3 group-hover:bg-blue-500/10 transition-colors">
                  <feature.icon size={20} className="text-white/50 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-xs font-semibold text-white/60 group-hover:text-white/80 transition-colors">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}} />
    </section>
  );
};

export default Team;
