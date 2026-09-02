import { useState, useEffect } from 'react';
import { Home, Zap, Briefcase, MessageSquareQuote, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileAppDock = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'services', label: 'Services', icon: Zap, href: '#services' },
    { id: 'work', label: 'Work', icon: Briefcase, href: '#work' },
    { id: 'testimonials', label: 'Reviews', icon: MessageSquareQuote, href: '#testimonials' },
    { id: 'contact', label: 'Contact', icon: PhoneCall, href: '#contact', isAction: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // ScrollSpy for bottom dock active state
      tabs.forEach((tab) => {
        const el = document.getElementById(tab.id);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 220) {
            setActiveTab(tab.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab.id);
    const element = document.getElementById(tab.id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 z-50 pointer-events-none">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-auto bg-[#070B1F]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex items-center justify-around relative"
      >
        {/* Subtle Ambient Top Border Glow */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#00C6FF]/40 to-transparent"></div>

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          if (tab.isAction) {
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleTabClick(e, tab)}
                className="flex flex-col items-center justify-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] text-white shadow-[0_0_15px_rgba(217,70,239,0.5)] active:scale-90 transition-transform"
                aria-label={tab.label}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-bold mt-0.5 tracking-tight">{tab.label}</span>
              </a>
            );
          }

          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={(e) => handleTabClick(e, tab)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl relative transition-all active:scale-90 ${
                isActive ? 'text-[#00C6FF]' : 'text-gray-400 hover:text-gray-200'
              }`}
              aria-label={tab.label}
            >
              {/* Active Tab Glowing Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-xl bg-white/10 border border-white/10 shadow-[inset_0_0_10px_rgba(0,198,255,0.2)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <Icon className={`w-4 h-4 relative z-10 transition-transform duration-200 ${isActive ? 'scale-110 text-[#00C6FF]' : ''}`} />
              <span className={`text-[9px] mt-0.5 relative z-10 font-medium tracking-tight ${isActive ? 'font-bold text-white' : ''}`}>
                {tab.label}
              </span>
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default MobileAppDock;
