import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, BarChart2, PenTool, Code, Linkedin, Twitter, Mail, Users, Star, Rocket, Smile, Trophy } from 'lucide-react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

const Team = () => {
  const teamMembers = [
    {
      name: 'Ravi Sharma',
      role: 'Founder & CEO',
      desc: '10+ years in digital marketing & business growth strategy.',
      icon: User,
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Priya Mehta',
      role: 'Head of Strategy',
      desc: 'Expert in branding, campaigns & market positioning.',
      icon: Target,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Aman Verma',
      role: 'Performance Marketing Lead',
      desc: 'Performance marketing expert driving data-backed results.',
      icon: BarChart2,
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Neha Iyer',
      role: 'Creative Director',
      desc: 'Creative strategist crafting impactful brand experiences.',
      icon: PenTool,
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Karthik R',
      role: 'Web Development Lead',
      desc: 'Full-stack developer building fast, scalable & modern websites.',
      icon: Code,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const stats = [
    { value: 20, suffix: '+', label: 'Team Members', icon: Users },
    { value: 50, suffix: '+', label: 'Projects Delivered', icon: Star },
    { value: 5, suffix: '+', label: 'Years of Excellence', icon: Rocket },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Smile },
    { value: 10, suffix: '+', label: 'Industry Experts', icon: Trophy },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="mb-16 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#121420] border border-primary/20 rounded-full px-5 py-2 shadow-sm mb-6"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Team</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6"
        >
          Meet the Minds Behind <span className="text-primary">Skillstar</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate team of strategists, marketers, and creators committed to driving real growth for your business.
        </motion.p>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="flex md:hidden justify-center items-center gap-2 mb-6 text-white/40 text-xs">
        <span>Swipe to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>

      {/* Team Grid */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto snap-center group bg-[#0A0D1A]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 p-6 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] relative overflow-hidden"
          >
            {/* Top Glow & Badge */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-32 h-32 mb-6">
              {/* Backlight circular glow */}
              <div className="absolute inset-0 bg-primary rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 relative z-10">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Icon Badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg z-20 group-hover:-translate-y-1 transition-transform duration-300">
                <member.icon size={16} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>
            <p className="text-[13px] text-white/50 leading-relaxed mb-8 flex-1">{member.desc}</p>

            <div className="flex items-center gap-3 mt-auto">
              {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-white/50 hover:text-white transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
        className="relative bg-[#0A0D1A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-32 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold font-heading text-white flex items-center mb-1">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm font-medium text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
