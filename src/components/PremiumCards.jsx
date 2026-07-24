import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BookOpen, Search, Calculator } from 'lucide-react';

const PremiumCards = () => {
  const cards = [
    {
      icon: LineChart,
      title: 'Before / After Results',
      desc: 'See real transformations',
      highlight: '+300% Traffic',
      highlightColor: 'text-emerald-400',
    },
    {
      icon: BookOpen,
      title: 'Latest Blogs',
      desc: 'Tips, trends & insights',
      button: 'Read Latest',
    },
    {
      icon: Search,
      title: 'Free SEO Tools',
      desc: '100% Free SEO Tools',
      button: 'Explore Tools',
    },
    {
      icon: Calculator,
      title: 'Marketing Calculator',
      desc: 'Calculate your ROI',
      button: 'Calculate Now',
    },
    {
      icon: LineChart,
      title: 'ROI Calculator',
      desc: 'See your potential ROI',
      button: 'Calculate ROI',
    }
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24">
      {/* Mobile Swipe Indicator */}
      <div className="flex md:hidden justify-center items-center gap-2 mb-4 text-white/40 text-xs">
        <span>Swipe to view more</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="shrink-0 w-[75vw] max-w-[280px] md:max-w-none md:w-auto snap-center group relative bg-[#0F172A] border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-40"
          >
            {/* Background pattern mock */}
            <div className="absolute right-[-20%] bottom-[-20%] opacity-10 group-hover:opacity-20 transition-opacity">
              <card.icon size={100} />
            </div>

            <div className="relative z-10">
              <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
              <p className="text-xs text-white/50">{card.desc}</p>
            </div>

            <div className="relative z-10 mt-auto">
              {card.highlight ? (
                <div className={`text-sm font-bold ${card.highlightColor}`}>
                  {card.highlight}
                </div>
              ) : (
                <button className="text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-lg text-white transition-colors">
                  {card.button}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PremiumCards;
