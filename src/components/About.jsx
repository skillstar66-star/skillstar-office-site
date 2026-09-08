import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  Zap
} from 'lucide-react';

const About = () => {
  const servicesList = [
    { name: 'SEO, GEO & AEO Optimization', path: '/seo' },
    { name: 'Performance Marketing', path: '/performance-marketing' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'UI/UX Design Services', path: '/ui-ux-design' },
    { name: 'Branding & Creative Solutions', path: '/branding' },
    { name: 'AI & Intelligent Automation', path: '/ai-automation' },
    { name: 'Custom Software Development', path: '/custom-software' },
    { name: 'Video Editing & Graphic Design', path: '/video-editing-graphic-design' },
    { name: 'Local SEO Guide', path: '/blog/how-local-seo-helps-businesses' },
    { name: 'Founder Vision', path: '/blog/vision-behind-rahan-pr-skillstar' }
  ];

  const highlights = [
    { title: 'Online Visibility', desc: 'Rank higher & reach target audiences.' },
    { title: 'Quality Leads', desc: 'High-converting client acquisitions.' },
    { title: 'Data-Driven Results', desc: 'Measurable growth and positive ROI.' }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#020516] relative overflow-hidden">
      
      {/* Background Lighting / Glow Accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/10 to-[#8B5CF6]/15 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#D946EF]/10 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00C6FF] animate-pulse"></span>
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Who We Are</span>
          </div>

          {/* Main Section Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white text-center leading-tight mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">SkillStar Digital Solutions</span> – Digital Solutions Company in Coimbatore
          </h2>

          {/* About Intro Content (150-250 words) */}
          <div className="w-full text-center max-w-3xl mb-8 sm:mb-10">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal mb-4">
              SkillStar Digital Solutions is recognized as the best digital solutions and digital marketing company in Coimbatore dedicated to accelerating business growth. We empower ambitious startups, enterprises, and local brands through full-spectrum digital engineering and marketing mastery. Our multidisciplinary expertise spans data-driven Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO), high-converting enterprise website development, UI/UX design, custom software development, creative branding, AI-driven business automation, and ROI-focused performance marketing.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              By delivering the best digital solution customized to each client's unique goals, SkillStar helps modern businesses establish authority, capture top search engine positions, automate complex workflows, and transform online engagement into sustainable revenue and market leadership.
            </p>
          </div>

          {/* Local SEO Coimbatore Feature Box */}
          <div className="w-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#071535]/90 to-[#120B24]/90 border border-[#00C6FF]/30 mb-6 sm:mb-8 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C6FF]/15 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00C6FF] to-[#3B82F6] flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_20px_rgba(0,198,255,0.4)]">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  Digital Marketing Company in Coimbatore
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  SkillStar Digital Solutions is a Coimbatore-based digital growth company helping startups, local businesses and growing brands build stronger digital experiences and generate measurable online growth. Headquartered in Saibaba Colony, Coimbatore, Tamil Nadu, India, we provide localized search dominance, Google Business Profile optimization, and targeted digital marketing campaigns that connect local and global audiences with your brand.
                </p>
              </div>
            </div>
          </div>

          {/* Founder & CEO Highlight Box */}
          <div className="w-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0A0F24]/90 to-[#120B24]/80 border border-white/10 mb-6 sm:mb-8 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/15 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex flex-row items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00C6FF] to-[#8B5CF6] flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_20px_rgba(0,198,255,0.4)]">
                <UserCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-xl font-bold text-white mb-1 flex flex-wrap items-center gap-2">
                  <span>Rahannath P R</span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#00C6FF] border border-[#8B5CF6]/30">CEO & Founder</span>
                </h3>
                <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal">
                  Leads the company with a vision to help businesses achieve sustainable digital growth through innovative technology and marketing solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Services Showcase Box */}
          <div className="w-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0A0F24]/50 border border-white/10 mb-6 sm:mb-8 backdrop-blur-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00C6FF]" />
              Our Core Services & Solutions
            </h4>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              We provide <strong className="text-white font-medium">SEO Optimization, Local SEO Services, Answer Engine Optimization Services, Performance Marketing, Social Media Marketing, UI/UX Design Services, Branding and Marketing, AI Marketing, Web Development, and Custom Software Development Services.</strong>
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-medium text-gray-200 bg-[#070B1F] border border-white/10 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/15 hover:text-white transition-all duration-200 no-underline inline-block"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location & Mission Statement */}
          <div className="w-full p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 mb-6 sm:mb-8 flex flex-row items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00C6FF]/15 flex items-center justify-center text-[#00C6FF] flex-shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              Based in <strong className="text-white">Coimbatore</strong>, we focus on improving online visibility, generating quality leads, and delivering measurable results through data-driven digital strategies, helping businesses build a stronger and more successful online presence.
            </p>
          </div>

          {/* Vision & Mission Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full mb-6 sm:mb-10">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-[#071330]/90 via-[#0A0F24]/80 to-[#050918]/90 border border-[#00C6FF]/20 hover:border-[#00C6FF]/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00C6FF]/15 blur-3xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
              
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00C6FF]/15 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF] shadow-[0_0_15px_rgba(0,198,255,0.3)] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#00C6FF]">Our North Star</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Vision</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal">
                  To redefine how businesses approach the digital world by turning every business challenge into an opportunity to create, connect, and convert. <strong className="text-white font-medium">SkillStar Digital Solutions</strong> envisions a future where the right blend of strategy, technology, AI, marketing, and creativity doesn't just build a digital presence—it creates digital experiences that attract the right audience, turn engagement into meaningful actions, and drive measurable conversions.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#00C6FF]">
                <span>Create • Connect • Convert</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-[#1C0933]/90 via-[#0A0F24]/80 to-[#050918]/90 border border-[#D946EF]/20 hover:border-[#D946EF]/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D946EF]/15 blur-3xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D946EF]/15 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF] shadow-[0_0_15px_rgba(217,70,239,0.3)] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#D946EF]">Our Purpose</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Mission</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal">
                  To understand what makes each business unique and build digital solutions around it. From SEO and AI to marketing, software, websites, design, and creative content, we bring the right expertise together to solve real challenges, connect businesses with their audiences, and turn digital efforts into measurable customer actions.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#D946EF]">
                <span>Strategy • Technology • Real Results</span>
              </div>
            </motion.div>
          </div>

          {/* Key Value Points (Horizontal 3-Column Grid on Mobile as well) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mb-8 sm:mb-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C6FF] flex-shrink-0" />
                  <span className="text-[11px] sm:text-sm font-bold text-white truncate">{item.title}</span>
                </div>
                <p className="text-[9px] sm:text-xs text-gray-400 leading-snug line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] font-semibold text-sm text-white shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-105 transition-all flex items-center gap-2"
          >
            Get In Touch With Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
