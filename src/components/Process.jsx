import { motion } from 'framer-motion';
import { Search, PenTool, Wrench, Target } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your goals, audience and challenges.',
    icon: Search,
    color: 'from-[#00C6FF] to-[#3B82F6]' // Cyan to Blue
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'We create a data-driven strategy tailored for you.',
    icon: PenTool,
    color: 'from-[#8B5CF6] to-[#D946EF]' // Purple to Pink
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'Our team brings the strategy to life with precision.',
    icon: Wrench,
    color: 'from-[#00C6FF] to-[#8B5CF6]' // Cyan to Purple
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'We analyze, optimize and scale for maximum results.',
    icon: Target,
    color: 'from-[#D946EF] to-[#8B5CF6]' // Pink to Purple
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-[#050716] relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Bottom Glowing Platform Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] pointer-events-none flex justify-center items-end opacity-80">
        <div className="absolute bottom-0 w-3/4 h-[150px] bg-gradient-to-t from-[#8B5CF6]/40 via-[#00C6FF]/10 to-transparent blur-[60px] rounded-full"></div>
        {/* Concentric rings on the floor */}
        <div className="absolute bottom-[-100px] w-[1100px] h-[250px] rounded-[100%] border-[1px] border-[#8B5CF6]/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]"></div>
        <div className="absolute bottom-[-60px] w-[800px] h-[180px] rounded-[100%] border-[1px] border-[#00C6FF]/30 shadow-[0_0_30px_rgba(0,198,255,0.1)]"></div>
        <div className="absolute bottom-[-20px] w-[500px] h-[110px] rounded-[100%] border-[2px] border-[#D946EF]/50 shadow-[0_0_40px_rgba(217,70,239,0.3)] bg-[#D946EF]/5"></div>
        {/* Center bright floor spot */}
        <div className="absolute bottom-6 w-[200px] h-[40px] bg-white/40 blur-[20px] rounded-[100%]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-28 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/5 mb-6 shadow-sm">
            <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            How we work <br />
            for your <span className="bg-gradient-to-r from-[#00C6FF] to-[#A855F7] bg-clip-text text-transparent">success</span>
          </h2>
          
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            We follow a proven process to deliver results that drive growth and success.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          
          {/* Animated Connecting Dashed Line (Desktop only) */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] hidden lg:block z-0">
            {/* Background dashed line */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.15) 50%, transparent 50%)', backgroundSize: '15px 2px' }}></div>
            
            {/* Glowing Arrows positioned between cards */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#D946EF] drop-shadow-[0_0_8px_#D946EF]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#00C6FF] drop-shadow-[0_0_8px_#00C6FF]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
            <div className="absolute left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#8B5CF6] drop-shadow-[0_0_8px_#8B5CF6]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center relative group pt-[50px] cursor-pointer">
                  
                  {/* Floating Top Icon Complex */}
                  <div className="absolute top-0 flex items-center justify-center w-[100px] h-[100px] z-20 group-hover:-translate-y-3 transition-transform duration-500">
                    {/* Outer gradient ring with cutouts */}
                    <div className={`absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-tr ${step.color} [mask-image:linear-gradient(#fff_0_0)padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:rotate-180 transition-transform duration-700 ease-in-out group-hover:drop-shadow-[0_0_25px_currentColor]`}></div>
                    
                    {/* Inner glowing dark circle */}
                    <div className="absolute inset-[6px] rounded-full bg-[#050A1A] border border-white/5 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover:bg-[#0A0F24] transition-colors duration-500">
                      {/* Icon */}
                      <Icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-tr ${step.color} drop-shadow-[0_0_10px_currentColor] group-hover:scale-110 transition-transform duration-500`} style={{ stroke: 'url(#gradient-' + idx + ')', strokeWidth: 1.5 }} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className={`w-full max-w-[260px] h-[220px] bg-[#0A0F24]/80 backdrop-blur-xl rounded-[1.5rem] p-6 pt-16 flex flex-col items-start text-left relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:bg-[#0C132E]/90`}>
                    
                    {/* Card Borders */}
                    <div className="absolute inset-0 rounded-[1.5rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-colors duration-500"></div>
                    {/* Top corner glows */}
                    <div className={`absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br ${step.color} opacity-20 blur-[20px] group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl ${step.color} opacity-20 blur-[20px] group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Bottom bright glowing line */}
                    <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${step.color} shadow-[0_0_15px_currentColor] group-hover:h-[4px] group-hover:shadow-[0_0_25px_currentColor] transition-all duration-500`}></div>

                    <div className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1 drop-shadow-sm`}>
                      {step.num}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 text-[11px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* SVG Gradient Defs for Icons */}
      <svg width="0" height="0">
        {steps.map((step, idx) => (
          <linearGradient key={idx} id={`gradient-${idx}`} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={idx % 2 === 0 ? "#00C6FF" : "#D946EF"} offset="0%" />
            <stop stopColor={idx % 2 === 0 ? "#3B82F6" : "#8B5CF6"} offset="100%" />
          </linearGradient>
        ))}
      </svg>
    </section>
  );
};

export default Process;
