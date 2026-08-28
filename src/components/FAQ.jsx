import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Headphones, Send, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    num: '01',
    question: 'What services do you offer?',
    answer: 'We offer end-to-end digital marketing services including branding, social media marketing, performance marketing, content creation, web development and creative production — all focused on delivering measurable growth.'
  },
  {
    num: '02',
    question: 'How do you measure the success of campaigns?',
    answer: 'We track key performance indicators (KPIs) such as ROI, conversion rates, customer acquisition cost (CAC), and overall engagement. You will receive detailed monthly reports.'
  },
  {
    num: '03',
    question: 'How long does it take to see results?',
    answer: 'While some quick wins can be seen in the first month through paid advertising, organic growth and SEO typically take 3-6 months to show significant results.'
  },
  {
    num: '04',
    question: 'Do you work with small businesses?',
    answer: 'Yes, we have scalable solutions tailored for startups and small businesses to help them compete and grow in their respective markets.'
  },
  {
    num: '05',
    question: 'How is your pricing structured?',
    answer: 'Our pricing is project-based or retainer-based depending on your needs. We provide custom quotes after understanding your specific goals and requirements.'
  },
  {
    num: '06',
    question: 'What platforms do you specialize in?',
    answer: 'We specialize in Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, TikTok, Shopify, WordPress, and custom React/Node.js web development.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#02030A] relative overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D946EF]/10 to-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">

        {/* Top FAQ Badge */}
        <div className="inline-flex items-center justify-center px-6 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#0A0F24]/80 shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-12 backdrop-blur-md">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">FAQ</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 w-full items-start">

          {/* Left Column */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
              Frequently <br />
              Asked <span className="bg-gradient-to-r from-[#00C6FF] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">Questions</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-xs">
              Everything you need to know about our services, process and how we help your brand grow.
            </p>

            {/* FAQ Visual Image */}
            <div className="relative w-full flex items-center justify-center my-8">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"></div>
                <img 
                  src="/image copy.png" 
                  alt="FAQ Visual" 
                  className="relative z-10 w-full max-w-[320px] h-auto object-contain rounded-2xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </div>

            {/* Support Card */}
            <div className="w-full bg-[#070B1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#3B82F6]/50 bg-[#3B82F6]/10 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Still have a question?</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">We're here to help. Talk to our experts.</p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-full border border-white/20 text-white text-[11px] font-medium hover:bg-white/10 transition-colors flex items-center gap-1">
                Contact Us <span className="text-[14px]">→</span>
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-[60%] flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${isOpen
                      ? 'bg-[#080D25] border-transparent shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                      : 'bg-[#050814] border-white/5 hover:border-white/10'
                    }`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  {/* Glowing Border for Active Item */}
                  {isOpen && (
                    <div className="absolute inset-0 rounded-xl border border-transparent [background:linear-gradient(90deg,#00C6FF,#D946EF)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-70 pointer-events-none"></div>
                  )}

                  <div className="p-5 flex items-center gap-4">
                    {/* Number Circle */}
                    <div className={`w-10 h-10 flex-shrink-0 rounded-full border flex items-center justify-center font-bold text-sm transition-colors ${isOpen ? 'border-[#8B5CF6]/50 bg-[#8B5CF6]/10 text-[#00C6FF]' : 'border-white/10 text-gray-500'
                      }`}>
                      {faq.num}
                    </div>

                    {/* Question */}
                    <h3 className={`flex-1 text-sm md:text-base font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300'
                      }`}>
                      {faq.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div className={`flex-shrink-0 text-[#D946EF] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Answer Body (Animated) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-6 pt-0 ml-14"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="w-full mt-24 mb-10 bg-[#070B1F]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Send className="w-6 h-6 text-[#8B5CF6] -ml-1 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to grow your brand?</h3>
              <p className="text-gray-400 text-sm">Let's create something amazing together.</p>
            </div>
          </div>

          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#D946EF] text-white font-bold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-transform whitespace-nowrap">
            Get Started →
          </button>
        </div>

      </div>

      {/* SVG Defs */}
      <svg width="0" height="0">
        <linearGradient id="grad-faq" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#00C6FF" offset="0%" />
          <stop stopColor="#D946EF" offset="100%" />
        </linearGradient>
      </svg>
    </section>
  );
};

export default FAQ;
