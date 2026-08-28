import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy Logic
      let currentActive = 'Home';
      
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          // If scroll position is past the top of the section (with offset for navbar)
          if (window.scrollY >= sectionTop - 150) {
            currentActive = link.name;
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
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-[#020516]/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo (2).png" 
              alt="SkillStar Logo" 
              className="h-14 sm:h-16 lg:h-20 w-auto max-h-24 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-all duration-300" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
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

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] hover:scale-105 transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#020516] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-lg font-medium transition-colors ${activeLink === link.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] font-medium text-white text-center shadow-[0_0_15px_rgba(217,70,239,0.4)] flex justify-center items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
