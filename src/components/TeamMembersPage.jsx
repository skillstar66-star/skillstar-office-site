import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Rocket, Target, BarChart2, PenTool, Code, Linkedin, Twitter, Mail,
  Briefcase, FileText, Sparkles, Cpu, Heart, ArrowLeft
} from 'lucide-react';
import CountUpPkg from 'react-countup';
import { useNavigate } from 'react-router-dom';

const dhanushaImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790785/dhanusha_w3h9ih.png';
const dineshImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790791/dinesh_ppwdan.png';
const hariniImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790800/harini_gdioqp.png';
const ramkumarImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790832/ramkumar_m7dhny.png';
const saravananImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790849/saravanan_bag5wj.png';
const sheebaImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790947/sheeba_kbu1zy.png';
const skillstarLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790841/logo_2_tuk1al.png';

const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const TeamMembersPage = () => {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-[#050714] pt-24 font-sans flex flex-col">
      <main className="flex-grow flex flex-col pb-24 relative overflow-hidden">
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

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20 md:pt-12">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 md:top-12 left-4 md:left-6 lg:left-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 z-20"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Header */}
          <div className="mb-20 text-center flex flex-col items-center mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-transparent border border-white/10 rounded-full px-4 py-1.5 shadow-sm mb-6 cursor-default"
            >
              <Users size={14} className="text-white/60" />
              <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">Our Team</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Meet The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SkillStar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
            >
              A multidisciplinary team of strategists, designers, developers, AI specialists, and marketers engineering digital growth for ambitious brands.
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 w-full pb-12"
          >
            {/* First Row: Rahannath P R (full width on small screens, 2 cols on lg) + Ram (1 col) + Dinesh (1 col) */}
            <div className="flex flex-col lg:flex-row gap-6">

              {/*Rahannath P R - CEO & Founder */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="group w-full lg:flex-[2] bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-[1.5rem] lg:rounded-[24px] p-6 lg:p-8 flex flex-col transition-colors duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] relative overflow-hidden z-10 hover:z-20"
              >
                {/* Card Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-6 md:mb-8 flex-1 relative z-10">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-500"
                      >
                        <div className="absolute inset-0 bg-white group-hover:bg-[#0A0E1A] transition-colors duration-500 z-10 flex items-center justify-center p-6 rounded-full">
                          <img src={skillstarLogo} alt="Rahannath P R - Founder of SkillStar Digital Solutions" loading="lazy" className="w-full h-full object-contain bg-[#0A0E1A] p-3 transition-transform duration-700 group-hover:scale-110" />
                        </div>
                      </motion.div>
                    </motion.div>
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute bottom-0 right-0 w-10 h-10 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/50 group-hover:bg-blue-500 transition-colors">
                        <Rocket size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                          CEO & FOUNDER
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">Rahannath P R</h3>
                        <p className="text-blue-500 font-medium text-sm md:text-base mb-4">CEO & Founder</p>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                      Visionary leader driving digital strategy, innovation, and business growth across all major platforms.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {['Leadership', 'Growth Hacking', 'Strategy', 'Vision'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 hover:border-blue-500/30 text-white/70 hover:text-white hover:bg-blue-500/10 text-[10px] md:text-xs rounded-full transition-all cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 pt-6 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-3 group/stat justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors hidden sm:flex">
                      <Briefcase size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-white font-bold flex items-baseline justify-center md:justify-start">
                        <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[10px] md:text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Years Exp</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/stat justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors hidden sm:flex">
                      <FileText size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-white font-bold flex items-baseline justify-center md:justify-start">
                        <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[10px] md:text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Projects Done</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/stat justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover/stat:bg-blue-500/20 flex items-center justify-center text-blue-400 transition-colors hidden sm:flex">
                      <Users size={18} className="group-hover/stat:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-white font-bold flex items-baseline justify-center md:justify-start">
                        <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />+
                      </div>
                      <div className="text-white/50 text-[10px] md:text-[11px] uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Happy Clients</div>
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
                    className={`group w-full lg:flex-1 bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 ${colors.hoverBorder} rounded-[1.5rem] lg:rounded-[24px] p-6 lg:p-8 flex flex-col transition-colors duration-500 ${colors.shadow} relative overflow-hidden z-10 hover:z-20`}
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
                          className={`w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-${member.color}-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,0,0,0.2)]`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0E1A]">
                            <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </motion.div>
                        {/* Floating Icon */}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10"
                        >
                          <div className={`w-6 h-6 rounded-full ${colors.iconBg} flex items-center justify-center border border-white/10`}>
                            <member.icon size={12} className={`${colors.iconText} w-3 h-3`} />
                          </div>
                        </motion.div>
                      </motion.div>
                      {/* Badge */}
                      <span className={`inline-block px-3 py-1 ${colors.bg} border border-white/5 ${colors.text} text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-transform`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">{member.name}</h3>
                      <p className={`${colors.text} font-medium mb-4 text-sm`}>{member.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors">
                        {member.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 text-white/70 text-[10px] md:text-xs rounded-full transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(2).map((member) => {
                const colors = getColorClasses(member.color);
                return (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    key={member.name}
                    className={`group w-full bg-[#0A0E1A]/80 backdrop-blur-xl border border-white/5 ${colors.hoverBorder} rounded-[1.5rem] lg:rounded-[24px] p-6 lg:p-8 flex flex-col transition-colors duration-500 ${colors.shadow} relative overflow-hidden z-10 hover:z-20`}
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
                          className={`w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-${member.color}-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,0,0,0.2)]`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0E1A]">
                            <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </motion.div>
                        {/* Floating Icon */}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0A0E1A] rounded-full flex items-center justify-center border border-white/10"
                        >
                          <div className={`w-6 h-6 rounded-full ${colors.iconBg} flex items-center justify-center border border-white/10`}>
                            <member.icon size={12} className={`${colors.iconText} w-3 h-3`} />
                          </div>
                        </motion.div>
                      </motion.div>
                      {/* Badge */}
                      <span className={`inline-block px-3 py-1 ${colors.bg} border border-white/5 ${colors.text} text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg group-hover:scale-105 transition-transform`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">{member.name}</h3>
                      <p className={`${colors.text} font-medium mb-4 text-sm`}>{member.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors">
                        {member.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 text-white/70 text-[10px] md:text-xs rounded-full transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                          <a key={i} href="#" aria-label={`Contact on platform ${i}`} className={`w-8 h-8 rounded-full bg-white/5 hover:${colors.bg} border border-white/5 flex items-center justify-center text-white/40 hover:${colors.text} transition-all duration-300 hover:-translate-y-1`}>
                            <Icon size={14} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>

      </main>
      
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
    </div>
  );
};

export default TeamMembersPage;
