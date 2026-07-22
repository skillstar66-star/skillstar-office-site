import React from 'react';
import innerCompassLogo from '../assets/inner compass yoga.jpeg';
import laCafeLogo from '../assets/la cafe.png';
import rokeaLogo from '../assets/rokea.png';
import seedsTherapyLogo from '../assets/seedstherapy.png';
import senthurLogo from '../assets/senthur logo.png';

const TrustedBrands = () => {
  const brands = [
    { name: 'Inner Compass Yoga', icon: innerCompassLogo },
    { name: 'La Cafe', icon: laCafeLogo },
    { name: 'Rokea', icon: rokeaLogo },
    { name: 'Seeds Therapy', icon: seedsTherapyLogo },
    { name: 'Senthur', icon: senthurLogo },
  ];

  // We duplicate the brands enough times so that a single set is wider than any screen.
  // 5 brands * 4 times = 20 items per container.
  const extendedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-12 border-y border-white/5 bg-[#050816] overflow-hidden relative">
      {/* Gradient masks for smooth fade on left/right edges */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
          Trusted By Growing Brands
        </p>
      </div>

      {/* Marquee Wrapper. We use w-max so the width strictly matches the content. */}
      {/* The CSS animation translates -50%, perfectly seamlessly looping the two identical blocks below */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-8">

        {/* Block 1 */}
        <div className="flex w-max">
          {extendedBrands.map((brand, i) => (
            <div key={`block1-${i}`} className="relative flex items-center justify-center w-32 md:w-48 mx-6 transition-all duration-500 ease-out hover:scale-125 hover:-translate-y-4 hover:rotate-3 hover:z-20 group cursor-default">
              {/* Glowing Glassy Floor / Shadow Underneath Logo */}
              <div className="absolute -bottom-6 w-24 h-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-md rounded-[100%] opacity-50 group-hover:opacity-100 group-hover:via-primary/60 transition-all duration-500 scale-x-75 group-hover:scale-x-125"></div>
              <div className="absolute -bottom-6 w-16 h-2 bg-white/10 blur-sm rounded-[100%] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-50 group-hover:scale-x-100"></div>

              <img
                src={brand.icon}
                alt={brand.name}
                className={`h-12 md:h-14 object-contain max-w-[120px] drop-shadow-[0_10px_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_25px_35px_rgba(37,99,235,0.8)] transition-all duration-500 ease-out rounded-md grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>

        {/* Block 2 (Exact duplicate for seamless looping) */}
        <div className="flex w-max">
          {extendedBrands.map((brand, i) => (
            <div key={`block2-${i}`} className="relative flex items-center justify-center w-32 md:w-48 mx-6 transition-all duration-500 ease-out hover:scale-125 hover:-translate-y-4 hover:rotate-3 hover:z-20 group cursor-default">
              {/* Glowing Glassy Floor / Shadow Underneath Logo */}
              <div className="absolute -bottom-6 w-24 h-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-md rounded-[100%] opacity-50 group-hover:opacity-100 group-hover:via-primary/60 transition-all duration-500 scale-x-75 group-hover:scale-x-125"></div>
              <div className="absolute -bottom-6 w-16 h-2 bg-white/10 blur-sm rounded-[100%] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-50 group-hover:scale-x-100"></div>

              <img
                src={brand.icon}
                alt={brand.name}
                className={`h-12 md:h-14 object-contain max-w-[120px] drop-shadow-[0_10px_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_25px_35px_rgba(37,99,235,0.8)] transition-all duration-500 ease-out rounded-md grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;
