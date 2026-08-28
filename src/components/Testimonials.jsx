import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The team is amazing! They understood our brand and delivered beyond our expectations. Our digital presence has never looked this good.",
    name: "Jason Smith",
    role: "CEO, Fashion Days",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    content: "Our ROI increased significantly after working with this incredible team. Highly recommended for any business looking to scale online.",
    name: "Sarah Johnson",
    role: "Marketing Head, TechWave",
    image: "https://i.pravatar.cc/150?img=44"
  },
  {
    id: 3,
    content: "Professional, creative and result-driven. They are now our long-term growth partners. Exceptional communication throughout.",
    name: "Michael Brown",
    role: "Founder, HealthPlus",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 4,
    content: "They transformed our outdated website into a modern, high-converting masterpiece. The user experience is simply unmatched.",
    name: "Emma Davis",
    role: "Director, EduTech",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2)); // Showing 3 at a time on desktop
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050716] relative overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00C6FF]/5 to-transparent blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#D946EF]/5 to-transparent blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4"
          >
            TESTIMONIALS
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
          >
            What our clients <br />
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#D946EF] bg-clip-text text-transparent">say about us</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-4 lg:-left-12 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#0B1021]/80 hover:bg-[#00C6FF]/10 hover:border-[#00C6FF]/30 backdrop-blur-md items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Cards Wrapper */}
          <div className="w-full overflow-hidden px-2 py-8">
            <motion.div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}%))` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={testimonial.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="h-full bg-[#090D1C] rounded-2xl p-8 border border-white/5 relative group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none"></div>
                    <div className="absolute inset-x-10 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C6FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_#00C6FF]"></div>
                    
                    {/* Quote Icon Background */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-180" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full border border-white/20"
                      />
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{testimonial.role}</p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-4 lg:-right-12 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#0B1021]/80 hover:bg-[#D946EF]/10 hover:border-[#D946EF]/30 backdrop-blur-md items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
