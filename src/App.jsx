import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Services from './components/Services';
import Stats from './components/Stats';
import ProcessTimeline from './components/ProcessTimeline';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Team from './components/Team';

import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    }
  }, []);

  // Scroll to top on load to prevent weird scroll jumps during intro
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <div className={`relative min-h-screen bg-[var(--color-bg-base)] text-white overflow-hidden ${!introComplete ? 'h-screen overflow-hidden' : ''}`}>

        {/* Background Decorative Effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-float-delayed"></div>

        {/* Main App Content Reveal */}
        <AnimatePresence>
          {introComplete && (
            <motion.div
              key="main-app"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.96 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }} // smooth cinematic easing
            >
              <Navbar />

              <Routes>
                <Route path="/" element={
                  <main className="flex flex-col pb-24">
                    <div className="flex flex-col">
                      <Hero />
                      <TrustedBrands />
                    </div>

                    <div className="flex flex-col gap-24 mt-24">
                      <About />
                      <Services />
                      <Stats />
                      <ProcessTimeline />
                      <Clients />
                      <Portfolio />
                      <CaseStudy />
                      <Testimonials />
                      <Team />

                      <FAQ />
                      <AuditForm />
                      <BlogSection />
                    </div>
                  </main>
                } />
                <Route path="/about-details" element={<AboutDetails />} />
              </Routes>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918925845871?text=Hello%20SkillStar%20Digital%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#0F172A] text-white text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
          Chat with us!
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#0F172A] border-t border-r border-white/10 rotate-45"></div>
        </span>
      </a>

    </Router>
  );
}

export default App;

