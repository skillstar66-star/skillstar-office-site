import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Digital marketing is a long-term game, but with our data-driven approach, clients typically start seeing initial traction within 30-60 days. For SEO specifically, significant compounding growth usually happens between months 3 to 6."
    },
    {
      question: "Do I have to commit to a long-term contract?",
      answer: "No, we believe in earning your business every month. While we recommend a 3-6 month runway to let the strategies fully develop, we offer flexible month-to-month retainers for most of our services."
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We set up clear KPIs during the discovery phase. You will have access to a live custom dashboard tracking traffic, leads, conversion rates, and exact cost-per-acquisition so you always know your exact ROI."
    },
    {
      question: "Will I have a dedicated account manager?",
      answer: "Yes! Every client is paired with a dedicated Account Manager and a Lead Strategist who will be your direct points of contact for weekly updates and monthly strategy reviews."
    },
    {
      question: "What makes Skillstar different from other agencies?",
      answer: "We don't just run ads; we build growth engines. Our team combines premium creative, highly technical media buying, and conversion rate optimization (CRO) to ensure every click has the highest chance of converting."
    }
  ];

  return (
    <section id="faq" className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Header */}
        <div className="lg:w-1/3 sticky top-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#121420] border border-primary/20 rounded-full px-5 py-2 shadow-sm mb-6"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">FAQ</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight"
          >
            Got Questions? <br />
            <span className="text-primary">We've Got Answers.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/60 mb-8"
          >
            Everything you need to know about working with us and how we deliver exceptional growth.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold transition-all"
          >
            Ask a specific question
          </motion.button>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary/50 bg-[#0A0D1A]' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white/10 text-white/50'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
