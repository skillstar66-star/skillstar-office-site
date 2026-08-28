import { motion } from 'framer-motion';
import { Search, TrendingUp, Monitor, Layers, Palette, Cpu, Code, Video, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'SEO, GEO & AEO Optimization',
    desc: 'Search & AI Visibility',
    icon: Search,
    theme: 'cyan'
  },
  {
    title: 'Performance Marketing & Lead Gen',
    desc: 'AI-Powered Ads & Leads',
    icon: TrendingUp,
    theme: 'purple'
  },
  {
    title: 'Enterprise Website Development',
    desc: 'Scalable Web Platforms',
    icon: Monitor,
    theme: 'magenta'
  },
  {
    title: 'UI / UX Experience Design',
    desc: 'Intuitive Digital Journeys',
    icon: Layers,
    theme: 'cyan'
  },
  {
    title: 'Branding & Creative Solutions',
    desc: 'Memorable Brand Identities',
    icon: Palette,
    theme: 'purple'
  },
  {
    title: 'AI & Intelligent Automation',
    desc: 'Smart Business Automation',
    icon: Cpu,
    theme: 'magenta'
  },
  {
    title: 'Custom Software Development',
    desc: 'Tailored Software Ecosystems',
    icon: Code,
    theme: 'cyan'
  },
  {
    title: 'Video Editing & Graphic Design',
    desc: 'Engaging Visual Content',
    icon: Video,
    theme: 'purple'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#020516] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
            Our Premium <span className="bg-gradient-to-r from-[#00C6FF] to-[#D946EF] bg-clip-text text-transparent">Digital Services</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            End-to-end digital solutions for modern businesses
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            
            // Define styling based on theme
            const isCyan = service.theme === 'cyan';
            const isPurple = service.theme === 'purple';
            const isMagenta = service.theme === 'magenta';
            
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

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl p-6 ${cardBg} border ${borderColor} ${hoverBorder} ${shadowHover} backdrop-blur-2xl transition-all duration-500 group overflow-hidden cursor-pointer hover:-translate-y-2`}
              >
                {/* Animated Glass Sheen (Shine effect on hover) */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_forwards] pointer-events-none"></div>

                {/* Glow behind icon (Glassy light source) */}
                <div className={`absolute -top-4 -left-4 w-28 h-28 rounded-full blur-[40px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${iconGlow}`}></div>
                
                {/* Inner Border Highlight for glass effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`mb-6 text-white bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base lg:text-lg mb-2 tracking-wide leading-tight group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Arrow Icon at bottom right (Simulating "Explore") */}
                  <div className={`mt-6 self-start flex items-center gap-2 ${textColor} group-hover:translate-x-2 transition-transform duration-500`}>
                    <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
