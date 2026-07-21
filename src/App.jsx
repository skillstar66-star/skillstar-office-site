import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import ProcessTimeline from './components/ProcessTimeline';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Team from './components/Team';

import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import PremiumCards from './components/PremiumCards';
import Footer from './components/Footer';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

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
                  <Portfolio />
                  <CaseStudy />
                  <Testimonials />
                  <Team />

                  <FAQ />
                  <AuditForm />
                  <PremiumCards />
                </div>
              </main>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
