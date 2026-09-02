import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';
import MobileAppDock from './components/MobileAppDock';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SeoService from './pages/SeoService';
import PerformanceMarketing from './pages/PerformanceMarketing';
import EnterpriseWebDevelopment from './pages/EnterpriseWebDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import BrandingCreativeSolutions from './pages/BrandingCreativeSolutions';
import AiIntelligentAutomation from './pages/AiIntelligentAutomation';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
import VideoEditingGraphicDesign from './pages/VideoEditingGraphicDesign';
import LocalSeoBlog from './pages/LocalSeoBlog';
import FounderVisionBlog from './pages/FounderVisionBlog';
import { motion, useScroll, useSpring } from 'framer-motion';

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
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
      <MobileAppDock />
      <FloatingWhatsApp />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-dark-300 min-h-screen font-sans text-text-primary selection:bg-blue-primary selection:text-white overflow-x-hidden">
        
        {/* Preloader Animation */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-electric via-purple-primary to-magenta transform origin-left z-[100]"
          style={{ scaleX }}
        />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/seo" element={<SeoService />} />
            <Route path="/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/web-development" element={<EnterpriseWebDevelopment />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/branding" element={<BrandingCreativeSolutions />} />
            <Route path="/ai-automation" element={<AiIntelligentAutomation />} />
            <Route path="/custom-software" element={<CustomSoftwareDevelopment />} />
            <Route path="/video-editing-graphic-design" element={<VideoEditingGraphicDesign />} />
            <Route path="/blog/how-local-seo-helps-businesses" element={<LocalSeoBlog />} />
            <Route path="/blog/vision-behind-rahan-pr-skillstar" element={<FounderVisionBlog />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
