import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';
import WhyTrustUs from './components/WhyTrustUs';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark-300 min-h-screen font-sans text-text-primary selection:bg-blue-primary selection:text-white overflow-x-hidden">
      
      {/* Preloader Animation */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-electric via-purple-primary to-magenta transform origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Brands />
          <Services />
          <About />
          <Process />
          <CaseStudies />
          <OurStory />
          <Testimonials />
          <WhyTrustUs />
          <FAQ />
          <Blog />
          <Contact />
          <Consultation />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
