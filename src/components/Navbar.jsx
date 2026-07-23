import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Layers, LayoutGrid, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const AuditForm = React.lazy(() => import('./AuditForm'));

const logoImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790841/logo_2_tuk1al.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.name);
    setMobileMenuOpen(false);

    const element = document.querySelector(link.href);
    if (element) {
      const offset = 100; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
          }`}
      >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, navLinks[0])} className="flex items-center">
          <img src={logoImg} alt="Skillstar Logo" className="h-16 md:h-20 object-contain" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${activeLink === link.name ? 'text-primary' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
              {link.hasDropdown && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Top CTA Button (hidden on mobile) */}
        <div className="hidden lg:block">
          <button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300">
            Get Free Audit
          </button>
        </div>
      </div>
    </nav>

      {/* Slide-up Full Menu (Mobile App feel) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed inset-x-0 bottom-0 bg-[#0A0D1A]/95 backdrop-blur-3xl border-t border-white/10 p-6 pb-[90px] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.5)] z-40 flex flex-col gap-2 max-h-[85vh] overflow-y-auto"
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>
            <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2 px-2">Menu</h3>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeLink === link.name ? 'bg-primary/10 text-primary' : 'text-white/90 hover:bg-white/5'}`}
              >
                {link.name}
              </a>
            ))}
            <button onClick={() => { setIsModalOpen(true); setMobileMenuOpen(false); }} className="bg-primary w-full text-white px-6 py-4 rounded-xl text-sm font-bold mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Get Free Audit
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar (App-like feel) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050816]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-3 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center">
          <a href="#home" aria-label="Home" onClick={(e) => handleNavClick(e, navLinks[0])} className={`flex flex-col items-center gap-1.5 transition-colors ${activeLink === 'Home' ? 'text-primary scale-110' : 'text-white/50 hover:text-white/80'}`}>
            <Home size={22} className={activeLink === 'Home' ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-semibold tracking-wide">Home</span>
          </a>
          
          <a href="#services" aria-label="Services" onClick={(e) => handleNavClick(e, navLinks[2])} className={`flex flex-col items-center gap-1.5 transition-colors ${activeLink === 'Services' ? 'text-primary scale-110' : 'text-white/50 hover:text-white/80'}`}>
            <Layers size={22} className={activeLink === 'Services' ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-semibold tracking-wide">Services</span>
          </a>
          
          <a href="#portfolio" aria-label="Portfolio" onClick={(e) => handleNavClick(e, navLinks[4])} className={`flex flex-col items-center gap-1.5 transition-colors ${activeLink === 'Portfolio' ? 'text-primary scale-110' : 'text-white/50 hover:text-white/80'}`}>
            <LayoutGrid size={22} className={activeLink === 'Portfolio' ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-semibold tracking-wide">Portfolio</span>
          </a>
          
          <a 
            href="https://wa.me/918925845871?text=Hello%20SkillStar%20Digital%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="flex flex-col items-center gap-1.5 transition-colors text-white/50 hover:text-[#25D366]"
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="transition-colors">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="text-[10px] font-semibold tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Audit Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]/80 backdrop-blur-md p-4 md:p-6 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-8 right-10 md:top-0 md:-right-4 z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="max-h-[90vh] overflow-y-auto rounded-3xl scrollbar-hide">
                 <React.Suspense fallback={<div className="p-8 text-center text-white">Loading...</div>}>
                   <AuditForm />
                 </React.Suspense>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
