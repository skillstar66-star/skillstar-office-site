import { MapPin, Phone, Mail, Rocket, ArrowRight, ArrowUp, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    { name: 'Instagram', href: 'https://instagram.com', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: 'Linkedin', href: 'https://linkedin.com', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { name: 'Youtube', href: 'https://youtube.com', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> },
    { name: 'Facebook', href: 'https://facebook.com', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> }
  ];

  const serviceLinks = [
    { name: 'SEO, GEO & AEO Optimization', path: '/seo' },
    { name: 'Performance Marketing & Lead Gen', path: '/performance-marketing' },
    { name: 'Enterprise Website Development', path: '/web-development' },
    { name: 'UI / UX Experience Design', path: '/ui-ux-design' },
    { name: 'Branding & Creative Solutions', path: '/branding' },
    { name: 'AI & Intelligent Automation', path: '/ai-automation' },
    { name: 'Custom Software Development', path: '/custom-software' },
    { name: 'Video Editing & Graphic Design', path: '/video-editing-graphic-design' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/#about', isInternal: true },
    { name: 'Our Process', href: '/#process', isInternal: true },
    { name: 'Our Work (Case Studies)', href: '/#work', isInternal: true },
    { name: 'Live Portfolio', href: 'https://portfolio-pi-blush-99.vercel.app/', isExternal: true },
    { name: 'Why Choose Us', href: '/#why-us', isInternal: true },
    { name: 'Client Reviews', href: '/#testimonials', isInternal: true },
    { name: 'FAQ', href: '/#faq', isInternal: true },
    { name: 'Articles & Journal', href: '/#blog', isInternal: true },
    { name: 'Contact Us', href: '/#contact', isInternal: true }
  ];

  const articleLinks = [
    { name: 'How Local SEO Helps Businesses Get More Customers', path: '/blog/how-local-seo-helps-businesses' },
    { name: 'The Vision Behind Rahan P R and SkillStar Digital Solutions', path: '/blog/vision-behind-rahan-pr-skillstar' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020410] pt-20 pb-8 relative overflow-hidden border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00C6FF]/5 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#D946EF]/5 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-3 lg:grid-cols-12 gap-y-10 gap-x-2 sm:gap-x-4 md:gap-8 mb-12 sm:mb-16">
          
          {/* Brand & Bio (Full width 3-cols on Mobile, Spans 4 cols on Desktop) */}
          <div className="col-span-3 lg:col-span-4 flex flex-col xl:pr-8">
            <Link to="/" className="inline-block mb-4 sm:mb-6 group">
              <img 
                src="/logo (2).png" 
                alt="SkillStar Digital Solutions Logo" 
                className="h-10 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-normal">
              Where Businesses Find Trusted Digital Solutions. We provide innovative SEO, AEO, GEO, web engineering, AI automation, branding, and performance marketing to help businesses achieve sustainable growth.
            </p>

            <div className="text-[11px] sm:text-xs text-gray-400 mb-5 flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C6FF] flex-shrink-0 mt-0.5" />
              <span>11/4, Bharathi Park 4th Cross Rd, Jawahar Nagar, Saibaba Colony, <strong className="text-white">Coimbatore - 641011</strong></span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-[#0A0F24]/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/20 transition-all duration-300 shadow-sm"
                >
                  {social.svg}
                </a>
              ))}
            </div>

            {/* Mini CTA Box */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A0F24] to-[#070B1F] p-4 sm:p-5 hover:border-white/20 transition-colors shadow-lg">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#D946EF]">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Let's grow your business.
                </h4>
              </div>
              <a 
                href="/#contact" 
                className="text-[11px] sm:text-xs font-bold text-[#00C6FF] flex items-center gap-1.5 hover:text-white transition-colors group"
              >
                Book Free Growth Consultation 
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 1 of 3: Core Services */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[11px] sm:text-xs font-bold text-white mb-3 sm:mb-6 uppercase tracking-wider text-[#00C6FF]">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 text-[10px] sm:text-xs md:text-sm hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200 leading-snug"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 of 3: Quick Links & Portfolio */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-bold text-white mb-3 sm:mb-6 uppercase tracking-wider text-[#8B5CF6]">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.isExternal ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 text-[10px] sm:text-xs md:text-sm hover:text-[#D946EF] inline-flex items-center gap-1 transition-colors leading-snug"
                    >
                      {link.name} <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500 flex-shrink-0" />
                    </a>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 text-[10px] sm:text-xs md:text-sm hover:text-[#00C6FF] transition-colors leading-snug block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 of 3: Featured Articles */}
          <div className="col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="text-[11px] sm:text-xs font-bold text-white mb-3 sm:mb-6 uppercase tracking-wider text-[#D946EF]">Articles</h4>
            <ul className="space-y-3 sm:space-y-4">
              {articleLinks.map((art, idx) => (
                <li key={idx} className="border-b border-white/5 pb-2.5 sm:pb-3">
                  <Link 
                    to={art.path}
                    className="text-[10px] sm:text-xs text-gray-300 hover:text-[#00C6FF] font-medium leading-snug block transition-colors"
                  >
                    {art.name}
                  </Link>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 mt-1 block">By Rahannath P R</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info Card (Spans full width across 3 columns on Mobile, or cleanly integrated) */}
          <div className="col-span-3 lg:col-span-12 mt-2 lg:mt-4">
            <div className="bg-[#0A0F24]/90 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#8B5CF6]/20 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Get In Touch Directly</div>
                  <a href="mailto:contact@skillstardigitalsolutions.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#00C6FF] transition-colors">
                    contact@skillstardigitalsolutions.com
                  </a>
                </div>
              </div>

              <div className="w-full sm:w-[1px] h-[1px] sm:h-8 bg-white/10"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#D946EF]/20 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Phone & WhatsApp</div>
                  <div className="flex items-center gap-2">
                    <a href="tel:+918925845871" className="text-xs sm:text-sm font-bold text-white hover:text-[#D946EF] transition-colors">
                      +91 89258 45871
                    </a>
                    <a 
                      href="https://wa.me/918925845871?text=Hi%20SkillStar%20team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full border border-[#00E676]/30 font-bold hover:bg-[#00E676]/20 transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-[1px] h-[1px] sm:h-8 bg-white/10"></div>

              <a 
                href="https://wa.me/918925845871?text=Hi%20SkillStar%20team%2C%20I%20am%20interested%20in%20your%20digital%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section (Copyright & Back to top) */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-[11px] sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-white font-semibold">SkillStar Digital Solutions</strong>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-[11px] sm:text-sm">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#D946EF] fill-[#D946EF]" /> for sustainable business growth
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm hover:text-white transition-colors group"
          >
            Back to Top 
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00C6FF]/20 group-hover:text-[#00C6FF] transition-all">
              <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
