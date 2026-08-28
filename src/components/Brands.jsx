import { 
  Globe, 
  Layers, 
  Cpu, 
  Hexagon, 
  Boxes, 
  FileText 
} from 'lucide-react';

const Brands = () => {
  const brandsList = [
    { name: 'Google', icon: Globe },
    { name: 'Microsoft', icon: Cpu },
    { name: 'Meta', icon: Hexagon },
    { name: 'Amazon', icon: Layers },
    { name: 'Slack', icon: Boxes },
    { name: 'Notion', icon: FileText },
  ];

  // Duplicate the list so it scrolls seamlessly without breaking
  const duplicatedBrands = [...brandsList, ...brandsList];

  return (
    <section className="relative z-20 pt-8 pb-16 bg-[#020516]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-[#0A102D]/80 backdrop-blur-xl rounded-[2rem] border border-[#2563EB]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center overflow-hidden h-24">
          
          {/* Left Fixed Text */}
          <div className="flex-shrink-0 px-8 lg:px-12 h-full flex items-center border-r border-[#2563EB]/20 bg-[#0A102D] z-10 shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
            <div className="text-sm font-semibold text-gray-300 leading-snug">
              Trusted by businesses<br />building the future
            </div>
          </div>
          
          {/* Right Scrolling Marquee Container */}
          <div className="flex-1 overflow-hidden relative h-full flex items-center mask-image-linear">
            {/* Adding gradient masks to fade the edges of the scrolling area */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0A102D] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A102D] to-transparent z-10 pointer-events-none"></div>

            <div className="flex items-center gap-16 md:gap-24 pl-8 md:pl-16 animate-marquee whitespace-nowrap min-w-max">
              {duplicatedBrands.map((brand, idx) => {
                const Icon = brand.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="w-6 h-6 group-hover:text-[#00C6FF] transition-colors" />
                    <span className="text-xl font-bold tracking-tight font-display text-gray-300 group-hover:text-white">
                      {brand.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;
