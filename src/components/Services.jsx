import { motion } from 'framer-motion';
import { Search, TrendingUp, Monitor, Layers, Palette, Cpu, Code, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'SEO Services',
    desc: 'Comprehensive search engine optimization, technical audits, and organic keyword ranking strategies designed to boost Google search visibility in Coimbatore and competitive national markets.',
    icon: Search,
    theme: 'cyan',
    link: '/seo'
  },
  {
    title: 'AEO & GEO Optimization',
    desc: 'Next-generation Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) ensuring your business appears as a recommended authority in AI search engines and smart assistants.',
    icon: TrendingUp,
    theme: 'purple',
    link: '/seo'
  },
  {
    title: 'Performance Marketing',
    desc: 'Targeted paid advertising across Google Ads, Meta, and LinkedIn. We build high-converting funnel campaigns that generate qualified business leads and maximize your return on ad spend.',
    icon: TrendingUp,
    theme: 'purple',
    link: '/performance-marketing'
  },
  {
    title: 'Web Development',
    desc: 'Custom, fast-loading, and mobile-responsive websites built with modern web technologies. We engineer high-performance platforms optimized for search engines, user experience, and conversions.',
    icon: Monitor,
    theme: 'magenta',
    link: '/web-development'
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centric interface and digital experience design tailored to your audience. We craft intuitive journeys, wireframes, and design systems that turn casual visitors into loyal customers.',
    icon: Layers,
    theme: 'cyan',
    link: '/ui-ux-design'
  },
  {
    title: 'Branding & Creative Solutions',
    desc: 'Memorable brand identity design, logo creation, typography, and cohesive visual storytelling that elevate your business presence and distinguish your company across all digital touchpoints.',
    icon: Palette,
    theme: 'purple',
    link: '/branding'
  },
  {
    title: 'AI & Intelligent Automation',
    desc: 'Smart business process automation and AI workflow integrations. We streamline repetitive daily operations, customer communications, and marketing tasks to scale team productivity.',
    icon: Cpu,
    theme: 'magenta',
    link: '/ai-automation'
  },
  {
    title: 'Custom Software Development',
    desc: 'Tailored enterprise software, custom dashboards, database architectures, and secure APIs engineered around your specific business processes and scalable growth requirements.',
    icon: Code,
    theme: 'cyan',
    link: '/custom-software'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#020516] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
            Digital Marketing & <span className="bg-gradient-to-r from-[#00C6FF] to-[#D946EF] bg-clip-text text-transparent">Digital Solutions Services</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Providing the best digital solutions and marketing services in Coimbatore engineered to help businesses rank higher, generate high-quality leads, and achieve sustainable ROI.
          </p>
        </div>
        
        {/* Cards Grid: 2 columns on mobile (4 on top, 4 below), 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            
            // Define styling based on theme
            const isCyan = service.theme === 'cyan';
            const isPurple = service.theme === 'purple';
            
            let cardBg = '';
            let borderColor = '';
            let shadowHover = '';
            let iconGlow = '';
            let textColor = '';
            let hoverBorder = '';

            if (isCyan) {
              cardBg = 'bg-gradient-to-br from-[#051842]/80 to-[#020516]/90';
              borderColor = 'border-[#00C6FF]/30';
              shadowHover = 'hover:shadow-[0_0_40px_rgba(0,198,255,0.25)]';
              iconGlow = 'bg-[#00C6FF]';
              textColor = 'text-[#00C6FF]';
              hoverBorder = 'group-hover:border-[#00C6FF]/60';
            } else if (isPurple) {
              cardBg = 'bg-gradient-to-br from-[#240B4D]/80 to-[#020516]/90';
              borderColor = 'border-[#8B5CF6]/30';
              shadowHover = 'hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]';
              iconGlow = 'bg-[#8B5CF6]';
              textColor = 'text-[#8B5CF6]';
              hoverBorder = 'group-hover:border-[#8B5CF6]/60';
            } else { // Magenta
              cardBg = 'bg-gradient-to-br from-[#3D0C4A]/80 to-[#020516]/90';
              borderColor = 'border-[#D946EF]/30';
              shadowHover = 'hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]';
              iconGlow = 'bg-[#D946EF]';
              textColor = 'text-[#D946EF]';
              hoverBorder = 'group-hover:border-[#D946EF]/60';
            }

            const CardWrapper = service.link ? Link : 'div';
            const wrapperProps = service.link ? { to: service.link } : {};

            return (
              <CardWrapper
                key={idx}
                {...wrapperProps}
                className="block no-underline"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
                  className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 ${cardBg} border ${borderColor} ${hoverBorder} ${shadowHover} backdrop-blur-2xl transition-all duration-500 group overflow-hidden cursor-pointer hover:-translate-y-2 h-full flex flex-col justify-between`}
                >
                  {/* Animated Glass Sheen */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_forwards] pointer-events-none"></div>

                  {/* Glow behind icon */}
                  <div className={`absolute -top-4 -left-4 w-20 sm:w-28 h-20 sm:h-28 rounded-full blur-[30px] sm:blur-[40px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${iconGlow}`}></div>
                  
                  {/* Inner Border Highlight */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/5 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-3 sm:mb-6 text-white bg-white/5 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl border border-white/10 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xs sm:text-base lg:text-lg mb-1 sm:mb-2 tracking-tight sm:tracking-wide leading-snug group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Arrow Icon at bottom right */}
                    <div className={`mt-3 sm:mt-6 self-start flex items-center gap-1 sm:gap-2 ${textColor} group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500`}>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        {service.link ? 'View' : 'Explore'}
                      </span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
