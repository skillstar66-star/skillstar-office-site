import React from 'react';
import { useForm } from 'react-hook-form';

const AuditForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert('Audit Request Submitted Successfully! (Mock)');
  };

  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <div className="flex flex-col justify-center">
            <h4 className="text-sm font-semibold tracking-wider text-white/50 uppercase mb-2">Free Website Audit</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Website Audit</h2>
            <p className="text-white/60 mb-8 max-w-md">
              Discover hidden SEO opportunities and technical issues that are holding back your search rankings.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1.5 ml-1">Your Name</label>
                <input 
                  {...register('name', { required: true })}
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1.5 ml-1">Phone Number</label>
                <input 
                  {...register('phone', { required: true })}
                  type="tel" 
                  placeholder="Enter your phone" 
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1.5 ml-1">Email Address</label>
                <input 
                  {...register('email', { required: true })}
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1.5 ml-1">Website URL</label>
                <input 
                  {...register('website', { required: true })}
                  type="url" 
                  placeholder="https://yourwebsite.com" 
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5 ml-1">Business Type</label>
              <div className="relative">
                <select 
                  {...register('businessType')}
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                >
                  <option value="ecommerce">Ecommerce</option>
                  <option value="b2b">B2B Services</option>
                  <option value="local">Local Business</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 mt-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Submit Audit Request
            </button>
            <p className="text-center text-xs text-white/40 mt-2">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
