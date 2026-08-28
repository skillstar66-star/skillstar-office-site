import { MapPin, Phone, Mail, Clock, Rocket, ArrowRight, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: 'Instagram', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: 'Linkedin', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { name: 'Twitter', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
    { name: 'Youtube', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050F] pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00C6FF]/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#D946EF]/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Logo & Info (Spans 3 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col xl:pr-10">
            {/* Simple Text Logo matching Navbar */}
            <div className="mb-6">
              <span className="text-3xl font-display font-extrabold text-white tracking-tight">Skill<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6]">Star</span></span>
              <p className="text-sm text-gray-400 mt-2">Digital Marketing Agency</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We help businesses grow with result-driven digital marketing strategies, creative solutions, and data-backed insights.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mb-10">
              {socialIcons.map((social, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl border border-white/10 bg-[#0A0F24]/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/20 transition-all duration-300 shadow-sm">
                  {social.svg}
                </a>
              ))}
            </div>

            {/* Mini CTA Box */}
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#0A0F24] to-[#070B1F] p-6 mt-auto hover:border-white/10 transition-colors shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 text-[#D946EF]">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  Let's build <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">something amazing.</span>
                </h4>
              </div>
              <a href="#contact" className="text-sm font-bold text-[#00C6FF] flex items-center gap-2 hover:text-white transition-colors group">
                Book a Free Consultation 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Work', 'Services', 'Case Studies', 'Pricing', 'Careers', 'Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#00C6FF] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Email Marketing', 'Website Design', 'Analytics'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#8B5CF6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact (Spans 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  123, Growth Street,<br />Saibaba Colony, Coimbatore - 641011
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">hello@skillstar.com</p>
              </div>
            </div>

            <div className="mt-auto bg-[#0A0F24]/50 border border-white/5 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-xs mb-4">
                Get the latest insights, strategies, and tips.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:flex-1 bg-[#03050F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#D946EF] text-white font-bold text-sm rounded-xl hover:shadow-[0_5px_15px_rgba(217,70,239,0.4)] transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Brands & Copyright) */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-8">
          
          {/* Brands */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase whitespace-nowrap">
              Trusted by 200+ Brands
            </h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 opacity-40 grayscale">
              <div className="text-xl font-bold font-serif">Google</div>
              <div className="text-xl font-bold font-sans flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span> HubSpot</div>
              <div className="text-xl font-bold font-sans">airbnb</div>
              <div className="text-xl font-bold font-sans">amazon</div>
              <div className="text-xl font-bold font-serif tracking-widest">IBM</div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/5"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SkillStar. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 text-[#D946EF] fill-[#D946EF]" /> for your growth
            </div>
            
            <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors group">
              Back to Top 
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00C6FF]/20 group-hover:text-[#00C6FF] transition-all">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
