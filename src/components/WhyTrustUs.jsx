import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb, Users, Target, Sparkles, Quote } from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'ROI Driven',
    desc: 'Every campaign is crafted with a clear focus on measurable results that grow your business.',
    icon: TrendingUp,
    color: 'from-[#00C6FF] to-[#3B82F6]'
  },
  {
    num: '02',
    title: 'Data + Creativity',
    desc: 'We combine real data and insights with creative ideas that connect and convert.',
    icon: Lightbulb,
    color: 'from-[#8B5CF6] to-[#D946EF]'
  },
  {
    num: '03',
    title: 'Full-Service Team',
    desc: 'A passionate team of experts across marketing, design, content, web and advertising.',
    icon: Users,
    color: 'from-[#00C6FF] to-[#8B5CF6]'
  },
  {
    num: '04',
    title: 'Transparent Growth',
    desc: 'Clear reporting, real-time insights and continuous optimization to maximize growth.',
    icon: Target,
    color: 'from-[#D946EF] to-[#8B5CF6]'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="trust" className="py-24 bg-[#02030A] relative overflow-hidden flex flex-col items-center">
      
      {/* Abstract Backgrounds & Floating Elements */}
      <div className="absolute top-1/4 left-0 w-full h-[600px] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-screen"></div>
      
      {/* Floating 3D Cube (Simulated) */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-24 w-12 h-12 border border-[#8B5CF6]/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] rotate-12 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent backdrop-blur-md"
      ></motion.div>
      
      {/* Floating Sphere (Simulated) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-16 right-24 w-20 h-20 rounded-full bg-gradient-to-tr from-[#00C6FF]/80 to-[#0A0F24] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),_0_0_30px_rgba(0,198,255,0.4)]"
      ></motion.div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/5 mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#00C6FF] mr-2" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Why brands <span className="bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6] bg-clip-text text-transparent">choose us</span>
          </h2>
          
          <p className="text-gray-400 text-sm">
            Strategy, creativity and technology — built around measurable growth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-stretch">
          
          {/* Left Panel (Experience) */}
          <div className="w-full lg:w-[35%] relative flex flex-col justify-center">
            {/* Massive Arc Border Glow */}
            <div className="absolute -top-10 -left-10 w-[120%] h-[120%] rounded-tl-[200px] border-t border-l border-[#00C6FF]/30 shadow-[inset_10px_10px_40px_rgba(0,198,255,0.05)] pointer-events-none"></div>
            
            <div className="relative z-10 pl-4 py-8">
              <h1 className="text-8xl md:text-[8rem] font-bold leading-none tracking-tighter bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                10+
              </h1>
              <h3 className="text-2xl font-bold text-white mt-2 mb-6">Years of Experience</h3>
              
              {/* Glowing Divider */}
              <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#D946EF]/50 to-transparent mb-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D946EF] shadow-[0_0_10px_#D946EF]"></div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                Helping brands grow, scale and succeed in the digital world with innovative strategies and creative marketing solutions.
              </p>
              
              {/* Pill Container */}
              <div className="inline-flex items-center gap-4 px-4 py-3 rounded-full bg-[#0A0F24]/80 border border-[#3B82F6]/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-md">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="client" className="w-8 h-8 rounded-full border-2 border-[#0A0F24]" />
                  ))}
                </div>
                <span className="text-[11px] text-gray-300"><strong className="text-[#8B5CF6]">200+</strong> Brands Growing With Us</span>
              </div>
            </div>
          </div>

          {/* Right Panel (Grid) */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className={`group relative p-8 rounded-2xl bg-[#070B1F]/60 backdrop-blur-md border border-white/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
                >
                  {/* Glowing Borders & Backgrounds */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none"></div>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.color} opacity-[0.05] group-hover:opacity-15 blur-[20px] transition-opacity duration-500 rounded-tr-2xl pointer-events-none`}></div>
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${feature.color} opacity-[0.05] group-hover:opacity-15 blur-[20px] transition-opacity duration-500 rounded-bl-2xl pointer-events-none`}></div>
                  
                  {/* Bottom Line Glow */}
                  <div className={`absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-100 shadow-[0_0_10px_currentColor] transition-all duration-500`}></div>

                  {/* Watermark Number */}
                  <div className="absolute top-6 right-8 text-4xl font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 font-display">
                    {feature.num}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon with glowing ring */}
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-6">
                      <div className={`absolute inset-0 rounded-full border border-transparent bg-gradient-to-tr ${feature.color} [mask-image:linear-gradient(#fff_0_0)padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <Icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-tr ${feature.color} drop-shadow-[0_0_8px_currentColor] group-hover:scale-110 transition-transform duration-500`} style={{ stroke: 'url(#grad-trust-' + idx + ')', strokeWidth: 1.5 }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-[260px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Quote Section */}
        <div className="mt-24 w-full flex flex-col items-center relative">
          {/* Connecting glowing lines structure */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent pointer-events-none -z-10"></div>
          
          <div className="bg-[#02030A] px-8 text-center relative z-10 flex flex-col items-center">
            <Quote className="w-8 h-8 text-[#8B5CF6] mb-4 opacity-80" />
            <p className="text-gray-400 text-base">
              We don't just create campaigns. <br />
              <span className="text-white font-bold text-lg">We create <span className="bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">measurable growth.</span></span>
            </p>
          </div>
        </div>

      </div>
      
      {/* SVG Defs for Icons */}
      <svg width="0" height="0">
        <linearGradient id="grad-trust-0" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#00C6FF" offset="0%" />
          <stop stopColor="#3B82F6" offset="100%" />
        </linearGradient>
        <linearGradient id="grad-trust-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#8B5CF6" offset="0%" />
          <stop stopColor="#D946EF" offset="100%" />
        </linearGradient>
        <linearGradient id="grad-trust-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#00C6FF" offset="0%" />
          <stop stopColor="#8B5CF6" offset="100%" />
        </linearGradient>
        <linearGradient id="grad-trust-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#D946EF" offset="0%" />
          <stop stopColor="#8B5CF6" offset="100%" />
        </linearGradient>
      </svg>
    </section>
  );
};

export default WhyChooseUs;
