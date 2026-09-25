import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Globe, 
  TrendingUp, 
  Briefcase, 
  ChevronRight, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function PageNavbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', isExternal: false, icon: '🏠' },
    { name: 'Services', path: '/#services', isExternal: false, icon: '⚡' },
    { 
      name: 'Web Development', 
      path: '/web-development-company-coimbatore', 
      isExternal: false, 
      icon: '🌐',
      isActive: location.pathname === '/web-development-company-coimbatore'
    },
    { 
      name: 'Digital Marketing', 
      path: '/digital-marketing-company-coimbatore', 
      isExternal: false, 
      icon: '📈',
      isActive: location.pathname === '/digital-marketing-company-coimbatore'
    },
    { 
      name: 'Portfolio', 
      path: 'https://portfolio-pi-blush-99.vercel.app/', 
      isExternal: true, 
      icon: '💼' 
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2.5 sm:py-3 bg-[#020516]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'py-4 sm:py-5 bg-[#020516]/75 backdrop-blur-lg border-b border-white/5'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <img 
              src="/logo (2).png" 
              alt="SkillStar Digital Solutions logo" 
              width="220"
              height="70"
              className="h-9 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,198,255,0.6)] group-hover:scale-105 transition-all duration-300" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const active = item.isActive;
              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    active 
                      ? 'text-white bg-gradient-to-r from-[#00C6FF]/20 via-[#3B82F6]/20 to-[#8B5CF6]/20 border border-[#00C6FF]/40 shadow-[0_0_12px_rgba(0,198,255,0.25)]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] animate-pulse" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA Area */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+917845741369" 
              className="hidden xl:inline-flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span>+91 78457 41369</span>
            </a>

            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:shadow-[0_0_25px_rgba(0,198,255,0.6)] hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Get Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] shadow-[0_0_12px_rgba(0,198,255,0.4)] active:scale-95 transition-transform"
            >
              <span>Get Proposal</span>
            </button>

            <button 
              className="w-9 h-9 rounded-full bg-[#0A0F24] border border-white/15 flex items-center justify-center text-white active:scale-90 transition-transform shadow-md cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00C6FF]" /> : <Menu className="w-5 h-5 text-gray-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden absolute top-full left-3 right-3 mt-2 bg-[#0A0F24]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C6FF]">SkillStar Navigation</span>
              <span className="text-[10px] text-gray-400">Digital Solutions</span>
            </div>

            <div className="grid grid-cols-1 gap-2 mb-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-semibold">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                      item.isActive
                        ? 'bg-gradient-to-r from-[#00C6FF]/15 to-[#8B5CF6]/15 border-[#00C6FF]/40 text-white font-bold'
                        : 'bg-white/5 border-white/5 text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-xs font-semibold">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                )
              ))}
            </div>

            {/* Quick Consultation CTA */}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] font-bold text-xs text-black text-center shadow-[0_0_20px_rgba(0,198,255,0.4)] flex justify-center items-center gap-2 active:scale-95 transition-transform cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Get Free Growth Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
