const Brands = () => {
  const brandsList = [
    { name: 'Rokeaby RK', logo: '/rokea.png' },
    { name: 'Seeds Therapy', logo: '/seedstherapy.png' },
    { name: 'Senthur Automobiles', logo: '/senthur logo.png' },
    { name: 'La Caffe', logo: '/la cafe.png' },
  ];

  // Repeat items to ensure seamless infinite scrolling on all screen sizes
  const duplicatedBrands = [...brandsList, ...brandsList, ...brandsList, ...brandsList];

  return (
    <section className="relative z-20 pt-4 sm:pt-8 pb-12 sm:pb-16 bg-[#020516]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#0A102D]/90 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] border border-[#2563EB]/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center overflow-hidden">
          
          {/* Header Badge: Top on Mobile, Left-Fixed on Desktop */}
          <div className="w-full md:w-auto flex-shrink-0 px-5 sm:px-8 lg:px-12 py-3 md:py-0 md:h-24 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-[#2563EB]/20 bg-[#0A102D] z-10 shadow-[0_4px_15px_rgba(0,0,0,0.3)] md:shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
            <div className="text-xs sm:text-sm font-semibold text-gray-200 text-center md:text-left leading-snug flex items-center gap-2 md:block">
              <span className="w-2 h-2 rounded-full bg-[#00C6FF] animate-pulse md:hidden"></span>
              <span>Trusted by businesses <br className="hidden md:block" />building the future</span>
            </div>
          </div>
          
          {/* Scrolling Marquee Container (Full width on Mobile & Desktop) */}
          <div className="w-full flex-1 overflow-hidden relative h-16 sm:h-20 md:h-24 flex items-center">
            {/* Edge Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#0A102D] via-[#0A102D]/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-[#0A102D] via-[#0A102D]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Continuous Marquee Track */}
            <div className="flex items-center gap-6 sm:gap-12 md:gap-16 pl-4 sm:pl-8 animate-marquee whitespace-nowrap min-w-max">
              {duplicatedBrands.map((brand, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00C6FF]/40 hover:bg-white/10 transition-all duration-300 cursor-pointer group shadow-sm"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} client partner`} 
                      loading="lazy"
                      width="32"
                      height="32"
                      className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <span className="text-xs sm:text-base font-bold tracking-tight font-display text-gray-200 group-hover:text-white whitespace-nowrap">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;
