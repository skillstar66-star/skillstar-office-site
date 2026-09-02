import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Calendar, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const Consultation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Generate real upcoming dates
  const getUpcomingDates = () => {
    const dates = [];
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    for (let i = 1; i <= 7; i++) { // Next 7 days starting from tomorrow
      const d = new Date();
      d.setDate(d.getDate() + i);
      const formatted = d.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
      dates.push(formatted);
    }
    return dates;
  };
  
  const upcomingDates = getUpcomingDates();
  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => setStep(1), 500); // reset state after close animation
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#02030A]">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Banner Container */}
        <div className="relative w-full rounded-[2.5rem] bg-[#0A0F24]/80 backdrop-blur-xl border border-white/10 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group">
          
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00C6FF]/20 via-[#8B5CF6]/5 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md relative z-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">Available for new projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight relative z-10"
          >
            Ready to scale your business? <br />
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] bg-clip-text text-transparent">Schedule a Free Consultation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 relative z-10"
          >
            Book a 30-minute discovery call with our experts. We'll analyze your current strategy and show you a clear roadmap to exponential growth.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full relative z-10"
          >
            {/* Call Now Button */}
            <a 
              href="tel:+918925845871" 
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] text-white font-bold text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 animate-[pulse_2s_infinite]" />
              <span>Call +91 89258 45871</span>
            </a>

            {/* WhatsApp Chat Button */}
            <a 
              href="https://wa.me/918925845871?text=Hi%20SkillStar%20team%2C%20I%20would%20like%20to%20schedule%20a%20free%20growth%20consultation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00E676]/20 border border-[#00E676]/40 text-[#00E676] hover:bg-[#00E676]/30 font-bold text-sm shadow-[0_0_20px_rgba(0,230,118,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>

            {/* Schedule Meeting Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 backdrop-blur-md"
            >
              <Calendar className="w-4 h-4 text-[#D946EF]" />
              <span>Book Meeting</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Booking Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#02030A]/90 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#070B1F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h3 className="text-lg font-bold text-white">
                  {step === 1 ? 'Select Date & Time' : step === 2 ? 'Your Details' : 'Booking Confirmed'}
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              {step < 3 && (
                <div className="w-full h-1 bg-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00C6FF] to-[#D946EF] transition-all duration-500"
                    style={{ width: step === 1 ? '50%' : '100%' }}
                  ></div>
                </div>
              )}

              {/* Step 1: Calendar & Time Slots */}
              {step === 1 && (
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Choose a Date</h4>
                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                    {upcomingDates.map((date) => (
                      <button 
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 px-4 py-3 rounded-xl border transition-all ${
                          selectedDate === date 
                            ? 'border-[#8B5CF6] bg-[#8B5CF6]/10 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <div className="text-[10px] uppercase mb-1">{date.split(',')[0]}</div>
                        <div className="font-bold text-sm">{date.split(',')[1]}</div>
                      </button>
                    ))}
                  </div>

                  <h4 className="text-sm font-medium text-gray-300 mt-4 mb-3">Available Times</h4>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {timeSlots.map((time) => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded-lg border text-xs font-medium transition-all ${
                          selectedTime === time 
                            ? 'border-[#00C6FF] bg-[#00C6FF]/10 text-[#00C6FF] shadow-[0_0_10px_rgba(0,198,255,0.2)]' 
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                      selectedDate && selectedTime 
                        ? 'bg-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-[#7C3AED]' 
                        : 'bg-white/5 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Form */}
              {step === 2 && (
                <form onSubmit={handleBookingSubmit} className="p-6">
                  <div className="mb-6 p-3 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#8B5CF6]" />
                    <div className="text-sm text-white">
                      <span className="font-bold">{selectedDate}</span> at <span className="font-bold">{selectedTime}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-[11px] text-gray-400 mb-1.5 pl-1">Full Name</label>
                      <input required type="text" placeholder="Enter your name" className="w-full bg-[#03050F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B5CF6] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-400 mb-1.5 pl-1">Email Address</label>
                      <input required type="email" placeholder="Enter your email" className="w-full bg-[#03050F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B5CF6] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-400 mb-1.5 pl-1">Phone Number (Optional)</label>
                      <input type="tel" placeholder="Enter your phone" className="w-full bg-[#03050F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#8B5CF6] focus:outline-none" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 rounded-xl border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] text-white py-3.5 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:opacity-90 transition-opacity"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#00E676]/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00E676]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Meeting Scheduled!</h3>
                  <p className="text-gray-400 text-sm">
                    We've sent a calendar invitation to your email. We look forward to speaking with you!
                  </p>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Consultation;
