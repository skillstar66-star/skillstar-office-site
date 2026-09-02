import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Phone, MessageSquare, Globe, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'Services', id: 'services', icon: '⚡' },
    { name: 'Portfolio', url: 'https://portfolio-pi-blush-99.vercel.app/', icon: '💼' },
    { name: 'About', id: 'about', icon: '✨' },
    { name: 'Process', id: 'process', icon: '🚀' },
    { name: 'Contact', id: 'contact', icon: '📞' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy Logic
      let currentActive = 'Home';
      
      navLinks.forEach((link) => {
        if (link.id) {
          const section = document.getElementById(link.id);
          if (section) {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
              currentActive = link.name;
            }
          }
        }
      });
      
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2.5 sm:py-3 bg-[#020516]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-3 sm:py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <img 
              src="/logo (2).png" 
              alt="SkillStar Logo" 
              className="h-10 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-all duration-300" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 5).map((link) => (
              <a 
                key={link.name} 
                href={link.url || `#${link.id}`}
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!link.url) handleNavClick(e, link.id);
                }}
                className={`text-sm font-medium transition-colors relative group ${activeLink === link.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                {/* Active Indicator Line */}
                <span 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ${
                    activeLink === link.name 
                      ? 'w-6 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] shadow-[0_0_10px_#D946EF]' 
                      : 'w-0 bg-[#D946EF] group-hover:w-6'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] hover:scale-105 transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right App Controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] shadow-[0_0_12px_rgba(0,198,255,0.4)] active:scale-95 transition-transform flex items-center gap-1"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button 
              className="w-9 h-9 rounded-full bg-[#0A0F24] border border-white/15 flex items-center justify-center text-white active:scale-90 transition-transform shadow-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle App Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00C6FF]" /> : <Menu className="w-5 h-5 text-gray-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile App Drawer / Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-3 right-3 mt-2 bg-[#0A0F24]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C6FF]">Menu Navigation</span>
              <span className="text-[10px] text-gray-400">SkillStar Digital</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url || `#${link.id}`}
                  target={link.url ? "_blank" : undefined}
                  rel={link.url ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (!link.url) handleNavClick(e, link.id);
                  }}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition-all active:scale-95 ${
                    activeLink === link.name 
                      ? 'bg-gradient-to-r from-[#00C6FF]/15 to-[#8B5CF6]/15 border-[#00C6FF]/40 text-white font-bold' 
                      : 'bg-white/5 border-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xs">
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                </a>
              ))}
            </div>

            {/* Quick Consultation CTA */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] font-bold text-xs text-white text-center shadow-[0_0_20px_rgba(217,70,239,0.5)] flex justify-center items-center gap-2 active:scale-95 transition-transform"
            >
              <span>Book Free Growth Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
