import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';

const Contact = () => {
  const socialIcons = [
    { name: 'Facebook', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: 'Twitter', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
    { name: 'Linkedin', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { name: 'Instagram', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> }
  ];

  return (
    <section id="contact" className="py-24 bg-[#02030A] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00C6FF]/5 to-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D946EF]/10 to-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/5 mb-6 shadow-sm backdrop-blur-md">
            <Send className="w-3 h-3 text-[#8B5CF6] mr-2 -mt-0.5" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Let's work <span className="bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] bg-clip-text text-transparent">together</span>
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Have a project in mind or want to know more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full items-stretch">
          
          {/* Left Panel - Our Office */}
          <div className="w-full lg:w-1/2 rounded-[2rem] bg-[#070B1F]/60 backdrop-blur-xl border border-white/5 relative overflow-hidden p-8 flex flex-col group hover:border-white/10 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            {/* Top Left Blue Glow */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#00C6FF] opacity-10 blur-[50px] pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
            {/* Outer corner border highlight */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00C6FF]/40 rounded-tl-[2rem] shadow-[inset_5px_5px_15px_rgba(0,198,255,0.1)]"></div>
            
            {/* Top Background Image (Simulated Skyline) */}
            <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-[url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-left opacity-20 mix-blend-lighten mask-image-b-transparent"></div>
            <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-b from-transparent to-[#070B1F]/60"></div>
            
            <div className="relative z-10">
              <h4 className="text-[10px] font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">Our Office</h4>
              <h3 className="text-3xl font-bold text-white mb-4">SkillStar</h3>
              <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed mb-10">
                We're a digital marketing agency focused on helping brands grow, scale and succeed in the digital world.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Details List */}
                <div className="flex-1 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B5CF6]/30 transition-colors">
                      <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">Address</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Saibaba Colony,<br />
                        Coimbatore, Tamil Nadu
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B5CF6]/30 transition-colors">
                      <Phone className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">Phone</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B5CF6]/30 transition-colors">
                      <Mail className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">Email</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        hello@skillstar.com
                      </p>
                    </div>
                  </div>
                  
                  {/* Working Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#8B5CF6]/30 transition-colors">
                      <Clock className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">Working Hours</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Box displaying public/image copy 2.png */}
                <div className="flex-1 relative rounded-xl overflow-hidden border border-white/10 bg-[#03050F] min-h-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <img 
                    src="/image copy 2.png" 
                    alt="SkillStar Location Map" 
                    className="w-full h-full object-cover min-h-[250px]"
                  />
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <h5 className="text-[11px] font-bold text-white mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  {socialIcons.map((social, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-colors text-gray-400 hover:text-white">
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="w-full lg:w-1/2 rounded-[2rem] bg-[#070B1F]/60 backdrop-blur-xl border border-white/5 relative overflow-hidden p-8 md:p-10 flex flex-col group hover:border-white/10 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            {/* Top Right Purple Glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D946EF] opacity-10 blur-[50px] pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
            {/* Outer corner border highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#D946EF]/40 rounded-tr-[2rem] shadow-[inset_-5px_5px_15px_rgba(217,70,239,0.1)]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Send us a message</h3>
              <p className="text-gray-400 text-sm mb-10 max-w-sm">
                Fill out the form and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Name */}
                  <div className="flex-1">
                    <label className="block text-[11px] font-medium text-gray-300 mb-2 pl-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-[#03050F]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-[#03050F] transition-colors"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="flex-1">
                    <label className="block text-[11px] font-medium text-gray-300 mb-2 pl-1">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-[#03050F]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-[#03050F] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-2 pl-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full bg-[#03050F]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-[#03050F] transition-colors"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-2 pl-1">Service Interested In</label>
                  <div className="relative">
                    <select className="w-full bg-[#03050F]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-[#03050F] transition-colors appearance-none cursor-pointer">
                      <option className="bg-[#03050F] text-gray-400">Select a service</option>
                      <option className="bg-[#03050F] text-white">Digital Marketing</option>
                      <option className="bg-[#03050F] text-white">Web Development</option>
                      <option className="bg-[#03050F] text-white">Branding & Design</option>
                      <option className="bg-[#03050F] text-white">App Development</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-2 pl-1">Your Message</label>
                  <textarea 
                    placeholder="Write your message here..." 
                    rows={4}
                    className="w-full bg-[#03050F]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8B5CF6]/50 focus:bg-[#03050F] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] text-white font-bold text-sm shadow-[0_10px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                  <Navigation className="w-4 h-4 ml-1 rotate-90" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;
