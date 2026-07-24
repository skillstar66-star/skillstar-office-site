import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Lenis from 'lenis';
import SEO from './components/SEO';

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
import ProjectsSection from './components/ProjectsSection';
import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import BlogSection from './components/BlogSection';
import ClientCaseStudiesPage from './components/ClientCaseStudiesPage';
import TeamMembersPage from './components/TeamMembersPage';
function App() {
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    // Wait until intro is complete to calculate correct page height
    if (!introComplete) return;
    
    // Disable Lenis on mobile devices to prevent touch scrolling from getting stuck
    if (window.innerWidth <= 768) return;

    const lenis = new Lenis({
      lerp: 0.08, // Buttery smooth interpolation (lower is smoother)
      wheelMultiplier: 1,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    }
  }, [introComplete]);

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

      <div className={`relative min-h-screen bg-[var(--color-bg-base)] text-white overflow-x-clip ${!introComplete ? 'h-screen overflow-hidden' : ''}`}>

        {/* Background Decorative Effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-float-delayed"></div>

        {/* Main App Content Reveal - Always mounted to unblock FCP/LCP */}
        <AnimatePresence>
            <motion.div
              key="main-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Navbar />

              <Routes>
                <Route path="/" element={
                  <main className="flex flex-col pb-24">
                    <SEO
                      title="AI Digital Marketing Agency | SkillStar Digital Solutions"
                      description="SkillStar Digital Solutions is a premium AI-driven digital marketing and web development agency. We deliver high-performance websites and growth strategies."
                      keywords="AI digital marketing, web development, SEO agency, React development, Vercel experts"
                      schema={[
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "SkillStar Digital Solutions",
                          "url": "https://skillstardigitalsolutions.com",
                          "logo": "https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790841/logo_2_tuk1al.png",
                          "email": "contact@skillstardigitalsolutions.com",
                          "telephone": "+918925845871",
                          "sameAs": [
                            "https://www.linkedin.com/company/skillstar-digital-solutions",
                            "https://www.instagram.com/skillstardigitalsolutions",
                            "https://www.facebook.com/skillstardigitalsolutions"
                          ]
                        },
                        {
                          "@context": "https://schema.org",
                          "@type": "ProfessionalService",
                          "@id": "https://skillstardigitalsolutions.com/#localbusiness",
                          "name": "SkillStar Digital Solutions",
                          "image": "https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790806/hero-bg_tazlvy.png",
                          "url": "https://skillstardigitalsolutions.com",
                          "telephone": "+918925845871",
                          "priceRange": "$$",
                          "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Coimbatore",
                            "addressRegion": "Tamil Nadu",
                            "addressCountry": "IN"
                          },
                          "areaServed": {
                            "@type": "Country",
                            "name": "India"
                          },
                          "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            "opens": "09:00",
                            "closes": "18:00"
                          }
                        },
                        {
                          "@context": "https://schema.org",
                          "@type": "WebSite",
                          "name": "SkillStar Digital Solutions",
                          "url": "https://skillstardigitalsolutions.com",
                          "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://skillstardigitalsolutions.com/?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                          }
                        },
                        {
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "serviceType": "Digital Marketing & Web Development",
                          "provider": {
                            "@type": "Organization",
                            "name": "SkillStar Digital Solutions"
                          },
                          "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Digital Services",
                            "itemListElement": [
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Digital Marketing" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding" } },
                              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing" } }
                            ]
                          }
                        },
                        {
                          "@context": "https://schema.org",
                          "@type": "BreadcrumbList",
                          "itemListElement": [
                            {
                              "@type": "ListItem",
                              "position": 1,
                              "name": "Home",
                              "item": "https://skillstardigitalsolutions.com"
                            },
                            {
                              "@type": "ListItem",
                              "position": 2,
                              "name": "About",
                              "item": "https://skillstardigitalsolutions.com/about-details"
                            }
                          ]
                        },
                        {
                          "@context": "https://schema.org",
                          "@type": "FAQPage",
                          "mainEntity": [
                            {
                              "@type": "Question",
                              "name": "How long does SEO take to show results?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "SEO generally starts showing measurable improvements within 3–6 months depending on competition and industry."
                              }
                            },
                            {
                              "@type": "Question",
                              "name": "What is GEO optimization?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "GEO (Generative Engine Optimization) helps businesses appear in AI-powered search engines like ChatGPT, Gemini, and Perplexity."
                              }
                            },
                            {
                              "@type": "Question",
                              "name": "What is AEO optimization?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "AEO (Answer Engine Optimization) structures content to appear in direct answers, featured snippets, and voice searches."
                              }
                            },
                            {
                              "@type": "Question",
                              "name": "Do you build custom websites?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We develop fully customized websites, SaaS platforms, and scalable web applications."
                              }
                            },
                            {
                              "@type": "Question",
                              "name": "Do you provide AI-based solutions?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We build AI chatbots, workflow automation systems, intelligent CRM tools, and custom AI applications."
                              }
                            }
                          ]
                        }
                      ]}
                    />
                    <div className="flex flex-col">
                      <Hero />
                      <TrustedBrands />
                    </div>

                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"></div>}>
                      <div className="flex flex-col gap-8 md:gap-24 mt-8 md:mt-24">
                        <About />
                        <Services />
                        <Stats />
                        <ProcessTimeline />
                        <Clients />
                        <ProjectsSection />
                        <Portfolio />
                        <CaseStudy />
                        <Testimonials />
                        <Team />
                        <FAQ />
                        <AuditForm />
                        <BlogSection />
                      </div>
                    </Suspense>
                  </main>
                } />
                <Route path="/about-details" element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <SEO
                      title="About SkillStar Digital Solutions | Our Mission & Team"
                      description="Learn about SkillStar Digital Solutions. We are a team of expert developers and marketers dedicated to growing your business with AI and cutting-edge technology."
                      keywords="about SkillStar, digital marketing team, web development experts"
                    />
                    <AboutDetails />
                  </Suspense>
                } />
                <Route path="/case-studies" element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <SEO
                      title="Client Case Studies | SkillStar Digital Solutions"
                      description="Explore our success stories and see how we have empowered brands to achieve digital growth and transformation."
                      keywords="case studies, digital marketing success, web development portfolio"
                    />
                    <ClientCaseStudiesPage />
                  </Suspense>
                } />
                <Route path="/team-members" element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <SEO
                      title="Our Team | SkillStar Digital Solutions"
                      description="Meet the multidisciplinary team of strategists, designers, developers, AI specialists, and marketers engineering digital growth."
                      keywords="team, digital marketing experts, AI developers, UI UX designers"
                    />
                    <TeamMembersPage />
                  </Suspense>
                } />
              </Routes>

              <Footer />
            </motion.div>
        </AnimatePresence>
      </div>
      {/* Floating WhatsApp Button (Hidden on Mobile) */}
      <a
        href="https://wa.me/918925845871?text=Hello%20SkillStar%20Digital%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 items-center justify-center group"
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
