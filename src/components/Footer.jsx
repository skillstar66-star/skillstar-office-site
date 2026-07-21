import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import logoImg from '../assets/logo (2).png';
const Footer = () => {
  return (
    <footer className="bg-[#050816] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0F172A] border border-white/5 rounded-3xl p-8 mb-16 gap-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Stay Updated with Digital Marketing Insights</h3>
            <p className="text-sm text-white/50">Join 10,000+ marketers and get exclusive tips & strategies.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/2 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors w-full"
            />
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors w-full sm:w-auto shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img src={logoImg} alt="Skillstar Logo" className="h-16 md:h-24 object-contain" />
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              We help businesses grow with data-driven digital marketing solutions that deliver real results.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-white/40">📞</span> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/40">✉️</span> hello@skillstardigital.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/40">📍</span> Chennai, India
              </li>
            </ul>
            <button className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-[#25D366]/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" /> WhatsApp Us
            </button>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2025 Skillstar Digital Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Partner" className="w-8 h-8" />
              <div>
                <p className="text-sm font-semibold text-white">We're Google Partner</p>
                <p className="text-[10px] text-white/50">Proud to be a Google Partner<br/>Driving growth for businesses</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
