import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, LayoutDashboard, Activity } from 'lucide-react';

const cases = [
  {
    tag: 'E-COMMERCE',
    title: 'Sales Growth for Fashion Brand',
    stat1: '+210%', stat1Label: 'Revenue Increase',
    stat2: '+185%', stat2Label: 'ROAS',
    icon: ShoppingBag,
    color: 'from-blue-600 to-purple-600',
    glowColor: 'rgba(147, 51, 234, 0.4)'
  },
  {
    tag: 'SAAS',
    title: 'Lead Generation for SaaS Platform',
    stat1: '+340%', stat1Label: 'Qualified Leads',
    stat2: '+75%', stat2Label: 'Conversion Rate',
    icon: LayoutDashboard,
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    tag: 'HEALTHCARE',
    title: 'Brand Awareness Campaign',
    stat1: '+160%', stat1Label: 'Reach Increase',
    stat2: '+120%', stat2Label: 'Engagement',
    icon: Activity,
    color: 'from-pink-600 to-purple-600',
    glowColor: 'rgba(236, 72, 153, 0.4)'
  }
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 bg-[#050716] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="md:w-1/2">
            <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">Our Work</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Case studies that <br />
              <span className="bg-gradient-to-r from-[#00C6FF] to-[#D946EF] bg-clip-text text-transparent">speak for us</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-end text-left md:text-right">
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              We partner with forward-thinking brands and help them achieve exceptional results.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors group">
              View All Case Studies 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group bg-[#0B1021] rounded-2xl border border-white/10 overflow-hidden cursor-pointer relative"
              >
                {/* Image / Graphic Area */}
                <div className="h-48 w-full relative overflow-hidden bg-[#050716]">
                  {/* Background graphic simulation */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent z-0"></div>
                  
                  {/* Dynamic Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 blur-[40px] rounded-full transition-transform duration-700 group-hover:scale-150" style={{ backgroundColor: item.glowColor }}></div>
                  
                  {/* Floating Elements (Simulating the 3D particles in image) */}
                  <div className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-[float-slow_4s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-10 right-1/4 w-3 h-3 rounded-sm bg-white/20 rotate-45 animate-[float-medium_5s_ease-in-out_infinite]"></div>
                  <div className="absolute top-1/2 right-10 w-1 h-1 rounded-full bg-white/50 animate-pulse"></div>

                  {/* Main Central Icon (Replacing the image) */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-700">
                      <div className={`absolute inset-0 blur-md opacity-50 bg-gradient-to-br ${item.color}`}></div>
                      <div className="relative bg-[#0B1021]/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <Icon className={`w-12 h-12 text-transparent bg-clip-text bg-gradient-to-br ${item.color} drop-shadow-[0_0_10px_currentColor]`} />
                        <svg width="0" height="0">
                          <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor={item.color.includes('cyan') ? '#00C6FF' : (item.color.includes('pink') ? '#EC4899' : '#2563EB')} offset="0%" />
                            <stop stopColor={item.color.includes('purple') ? '#9333EA' : '#2563EB'} offset="100%" />
                          </linearGradient>
                        </svg>
                        <Icon className="w-12 h-12 absolute top-4 left-4" style={{ stroke: `url(#grad-${idx})` }} />
                      </div>
                    </div>
                  </div>

                  {/* Gradient overlay to fade into the card body */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B1021] to-transparent z-10"></div>
                  
                  {/* Tag inside the image area (like the reference) */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 pt-4">
                  <h3 className="text-lg font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    {/* Stats */}
                    <div className="flex gap-6">
                      <div>
                        <div className="text-xl font-bold text-[#00C6FF] mb-1 group-hover:text-white transition-colors">{item.stat1}</div>
                        <div className="text-[10px] text-gray-500">{item.stat1Label}</div>
                      </div>
                      {/* Divider */}
                      <div className="w-[1px] h-8 bg-white/10 mt-1"></div>
                      <div>
                        <div className="text-xl font-bold text-[#00E676] mb-1 group-hover:text-white transition-colors">{item.stat2}</div>
                        <div className="text-[10px] text-gray-500">{item.stat2Label}</div>
                      </div>
                    </div>
                    
                    {/* Circular Arrow Button */}
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#D946EF] group-hover:border-transparent transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
