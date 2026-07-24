import React from 'react';
const innerCompassLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790821/inner_compass_yoga_iinuun.jpg';
const laCafeLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790823/la_cafe_x3ddld.png';
const rokeaLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784793510/rokea_acysbs.png';
const seedsTherapyLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790939/seedstherapy_pqhrpt.png';
const senthurLogo = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790815/senthur_logo_wpuq9p.png';

const TrustedBrands = () => {
  const brands = [
    { name: 'Inner Compass Yoga', icon: innerCompassLogo },
    { name: 'La Cafe', icon: laCafeLogo },
    { name: 'Rokea', icon: rokeaLogo },
    { name: 'Seeds Therapy', icon: seedsTherapyLogo },
    { name: 'Senthur', icon: senthurLogo },
  ];

  // We only need the original 5 brands now, no duplication needed.

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

      {/* Static Flex Container */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 max-w-5xl mx-auto">
        {brands.map((brand, i) => (
          <div key={`brand-${i}`} className="relative flex items-center justify-center w-24 md:w-32 lg:w-40 transition-all duration-300 ease-out hover:scale-105 group cursor-default">
            <img
              src={brand.icon}
              alt={`${brand.name} - SkillStar Trusted Brand Partner`}
              className={`h-10 md:h-12 lg:h-14 object-contain w-full transition-all duration-300 ease-out rounded-md grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
