import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Rocket, Target, BarChart2, PenTool, Code, Linkedin, Twitter, Mail,
  Briefcase, FileText, Sparkles, Cpu, Heart, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUpPkg from 'react-countup';

const dhanushaImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790785/dhanusha_w3h9ih.png';
const dineshImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790791/dinesh_ppwdan.png';
const hariniImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790800/harini_gdioqp.png';
const ramkumarImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790832/ramkumar_m7dhny.png';
const saravananImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790849/saravanan_bag5wj.png';
const sheebaImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790947/sheeba_kbu1zy.png';
const skillstarLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790841/logo_2_tuk1al.png';

const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const Team = () => {

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

        {/* Button to navigate to team members page */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <Link to="/team-members" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            View Team Members <ArrowRight size={18} />
          </Link>
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

export default React.memo(Team);
