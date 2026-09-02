import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Headphones, Send, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const allFaqs = [
  {
    num: '01',
    question: 'What is the best digital marketing solution for businesses in Coimbatore and Tamil Nadu?',
    answer: "The best digital marketing solution depends on a business's goals, target audience, industry, and growth objectives. SkillStar Digital Solutions provides complete digital marketing solutions including SEO, AEO, GEO, performance marketing, website development, UI/UX design, branding, graphic design, video editing, AI automation, and custom software development. Our integrated approach helps businesses improve online visibility, attract relevant audiences, and generate measurable growth."
  },
  {
    num: '02',
    question: 'Which is the best digital marketing company in Coimbatore?',
    answer: 'A good digital marketing company should combine SEO, AEO, GEO, content strategy, performance marketing, website optimization, and conversion-focused digital solutions. SkillStar Digital Solutions provides end-to-end digital marketing and technology solutions for businesses looking to build a stronger online presence and increase visibility across search engines and AI-powered search platforms.'
  },
  {
    num: '03',
    question: 'What are the best SEO services for improving Google rankings?',
    answer: 'Effective SEO services include technical SEO, keyword research, on-page SEO, content optimization, internal linking, website performance optimization, structured data, local SEO, and authority-building strategies. SkillStar Digital Solutions develops customized SEO strategies designed to improve organic search visibility, website rankings, relevant traffic, and long-term search performance.'
  },
  {
    num: '04',
    question: 'What is AEO and how can Answer Engine Optimization help my business?',
    answer: 'AEO (Answer Engine Optimization) is the process of optimizing website content so that search engines, answer engines, and AI-powered platforms can understand and use the information to provide relevant answers. SkillStar Digital Solutions creates question-based content, structured information, FAQ content, entity-focused content, and clear answers to improve a business\'s visibility in answer-driven search experiences.'
  },
  {
    num: '05',
    question: 'What is GEO and how can Generative Engine Optimization improve AI search visibility?',
    answer: 'GEO (Generative Engine Optimization) focuses on improving how a business, brand, products, and services are understood and represented in AI-generated search results. SkillStar Digital Solutions uses clear factual content, topical authority, entity optimization, structured information, authoritative references, and helpful content to improve brand visibility across modern generative search experiences.'
  },
  {
    num: '06',
    question: 'How can a business improve its visibility on Google and AI search engines?',
    answer: 'Businesses can improve search visibility by combining SEO, AEO, GEO, high-quality content, structured data, technical website optimization, local SEO, and strong brand information. SkillStar Digital Solutions helps businesses optimize their digital presence for traditional search engines as well as AI-powered search and answer platforms.'
  },
  {
    num: '07',
    question: 'What is the best website development company for modern businesses?',
    answer: "The best website development company should provide responsive web design, modern UI/UX, fast performance, SEO-friendly architecture, mobile optimization, security, scalability, and conversion-focused development. SkillStar Digital Solutions develops modern, responsive, high-performance websites and web applications customized to each business's requirements."
  },
  {
    num: '08',
    question: 'Why is UI/UX design important for a business website?',
    answer: 'Professional UI/UX design improves website usability, navigation, accessibility, engagement, and conversion opportunities. A good UI/UX strategy combines visual design with clear information architecture and responsive experiences. SkillStar Digital Solutions creates modern UI/UX designs focused on user experience, brand consistency, performance, and business goals.'
  },
  {
    num: '09',
    question: 'What are professional graphic design services for businesses?',
    answer: "Graphic design services help businesses create consistent and professional visual communication across digital platforms. These services can include social media designs, advertisements, banners, marketing creatives, presentations, promotional graphics, and brand assets. SkillStar Digital Solutions creates visually engaging designs aligned with each business's brand identity and marketing objectives."
  },
  {
    num: '10',
    question: 'Why is professional video editing important for digital marketing?',
    answer: 'Professional video editing services help businesses create engaging content for social media marketing, YouTube, advertisements, websites, product promotions, and brand campaigns. SkillStar Digital Solutions provides creative video editing solutions designed to improve content quality, audience engagement, storytelling, and digital brand communication.'
  },
  {
    num: '11',
    question: 'What is custom software development and when does a business need it?',
    answer: "Custom software development involves building software applications specifically around a company's workflows, business processes, and operational requirements. Businesses may need custom software when existing solutions cannot efficiently handle their unique processes. SkillStar Digital Solutions develops customized software and web applications that can help businesses improve efficiency, automate workflows, and manage operations more effectively."
  },
  {
    num: '12',
    question: 'How can AI automation help businesses save time and improve productivity?',
    answer: 'AI automation can help businesses automate repetitive tasks, streamline workflows, process information faster, reduce manual effort, and improve operational efficiency. SkillStar Digital Solutions develops AI-powered automation solutions tailored to business processes, helping organizations integrate intelligent automation into their day-to-day operations.'
  },
  {
    num: '13',
    question: 'What is branding and why is branding important for business growth?',
    answer: 'Branding creates a consistent identity for a business through its logo, visual identity, messaging, positioning, design language, and customer experience. Strong branding helps businesses build recognition, credibility, differentiation, and consistency across digital channels. SkillStar Digital Solutions provides professional branding solutions designed to create a memorable and consistent business identity.'
  },
  {
    num: '14',
    question: 'What is performance marketing and how can it generate leads?',
    answer: 'Performance marketing is a measurable digital marketing strategy focused on actions such as leads, sales, website traffic, conversions, and customer acquisition. SkillStar Digital Solutions develops performance marketing campaigns using audience targeting, campaign optimization, conversion tracking, landing-page optimization, and performance analysis to support measurable business growth.'
  },
  {
    num: '15',
    question: 'What digital marketing services does SkillStar Digital Solutions provide?',
    answer: 'SkillStar Digital Solutions provides a complete range of digital marketing and technology services, including SEO, AEO, GEO, website development, UI/UX design, graphic design, video editing, custom software development, AI automation, branding, and performance marketing. Businesses can work with one digital solutions partner for their website, search visibility, branding, marketing, automation, and technology requirements.'
  },
  {
    num: '16',
    question: 'Does SkillStar Digital Solutions provide SEO, AEO and GEO services?',
    answer: 'Yes. SkillStar Digital Solutions provides SEO, AEO, and GEO optimization strategies designed to improve a business\'s visibility across traditional search engines, answer engines, and AI-powered search experiences. The strategy can include keyword optimization, search-intent content, entity optimization, structured information, technical SEO, FAQ content, and topical authority development.'
  },
  {
    num: '17',
    question: 'How can a business get more customers through digital marketing?',
    answer: 'Businesses can generate more potential customers by combining SEO, local SEO, AEO, GEO, performance marketing, conversion-focused websites, content marketing, branding, and social media content. SkillStar Digital Solutions creates integrated digital strategies that connect visibility, user experience, marketing campaigns, and conversion opportunities.'
  },
  {
    num: '18',
    question: 'Why choose SkillStar Digital Solutions for digital marketing and technology services?',
    answer: 'SkillStar Digital Solutions combines digital marketing, website development, SEO, AEO, GEO, UI/UX design, branding, graphic design, video editing, performance marketing, AI automation, and custom software development under one digital solutions partner. This integrated approach helps businesses build a consistent online presence, improve search visibility, strengthen their brand, and use technology to support business growth.'
  }
];

const ITEMS_PER_SLIDE = 5;

const FAQ = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const totalSlides = Math.ceil(allFaqs.length / ITEMS_PER_SLIDE);

  const currentFaqs = allFaqs.slice(
    currentSlide * ITEMS_PER_SLIDE,
    (currentSlide + 1) * ITEMS_PER_SLIDE
  );

  const handleSlideChange = (slideIdx) => {
    setCurrentSlide(slideIdx);
    setOpenIndex(0); // Reset first item open on slide change
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      handleSlideChange(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      handleSlideChange(currentSlide - 1);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#02030A] relative overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D946EF]/10 to-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center">

        {/* Top FAQ Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#0A0F24]/80 shadow-[0_0_15px_rgba(139,92,246,0.2)] mb-12 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">Frequently Asked Questions</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 w-full items-start">

          {/* Left Column */}
          <div className="w-full lg:w-[38%] flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6 leading-[1.15]">
              Got Questions? <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                We've Got Answers
              </span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Explore answers about our digital marketing, SEO, AEO, GEO, web engineering, AI automation, and branding solutions.
            </p>

            {/* Slide Navigation Tabs */}
            <div className="bg-[#070B1F]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-8 shadow-xl">
              <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-3 flex items-center justify-between">
                <span>Browse FAQ Categories ({allFaqs.length} Questions)</span>
                <span className="text-[#00C6FF]">Slide {currentSlide + 1} of {totalSlides}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: '01 - 05: SEO & Growth', range: '1-5' },
                  { label: '06 - 10: Web, UI & Video', range: '6-10' },
                  { label: '11 - 15: Software & AI', range: '11-15' },
                  { label: '16 - 18: Agency & Services', range: '16-18' },
                ].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSlideChange(idx)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all text-left flex items-center justify-between ${
                      currentSlide === idx
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-md'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="w-full bg-[#070B1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-[#3B82F6]/50 bg-[#3B82F6]/10 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#00C6FF]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Still have questions?</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Talk with our Coimbatore consultants.</p>
                </div>
              </div>
              <a 
                href="/#contact"
                className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                Contact Us <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Accordion with 5 Items Per Slide */}
          <div className="w-full lg:w-[62%] flex flex-col">
            
            {/* Slide Header & Controls */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Showing Questions {currentSlide * ITEMS_PER_SLIDE + 1} – {Math.min((currentSlide + 1) * ITEMS_PER_SLIDE, allFaqs.length)}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                    currentSlide === 0 
                      ? 'opacity-30 cursor-not-allowed text-gray-600' 
                      : 'bg-white/5 text-white hover:bg-[#00C6FF]/20 hover:border-[#00C6FF]/50'
                  }`}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                    currentSlide === totalSlides - 1 
                      ? 'opacity-30 cursor-not-allowed text-gray-600' 
                      : 'bg-white/5 text-white hover:bg-[#D946EF]/20 hover:border-[#D946EF]/50'
                  }`}
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Accordion Slide Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3.5"
              >
                {currentFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={faq.num}
                      className={`relative rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        isOpen
                          ? 'bg-[#080D25] border-transparent shadow-[0_0_25px_rgba(139,92,246,0.18)]'
                          : 'bg-[#050814] border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      {/* Glowing Border for Active Item */}
                      {isOpen && (
                        <div className="absolute inset-0 rounded-2xl border border-transparent [background:linear-gradient(90deg,#00C6FF,#8B5CF6,#D946EF)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-80 pointer-events-none"></div>
                      )}

                      <div className="p-5 flex items-center gap-4">
                        {/* Number Circle */}
                        <div className={`w-10 h-10 flex-shrink-0 rounded-xl border flex items-center justify-center font-bold text-xs transition-colors ${
                          isOpen 
                            ? 'border-[#8B5CF6]/50 bg-[#8B5CF6]/20 text-[#00C6FF] shadow-sm' 
                            : 'border-white/10 text-gray-400 bg-white/5'
                        }`}>
                          {faq.num}
                        </div>

                        {/* Question */}
                        <h3 className={`flex-1 text-sm md:text-base font-semibold leading-snug transition-colors ${
                          isOpen ? 'text-white' : 'text-gray-200 hover:text-white'
                        }`}>
                          {faq.question}
                        </h3>

                        {/* Toggle Icon */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                            ? 'bg-[#D946EF]/20 text-[#D946EF] rotate-180' 
                            : 'bg-white/5 text-gray-400'
                        }`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pr-6 font-normal">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Pagination Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'w-8 bg-gradient-to-r from-[#00C6FF] to-[#D946EF]' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="w-full mt-20 bg-[#070B1F]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Send className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to scale your business with SkillStar?</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Let's discuss your custom SEO, web engineering, branding, or AI automation goals.</p>
            </div>
          </div>

          <a 
            href="/#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] text-white font-bold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-transform whitespace-nowrap"
          >
            Get Free Consultation →
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
