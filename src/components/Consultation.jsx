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
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
          >
            {/* Call Now Button */}
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] text-white font-bold text-sm shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 animate-[pulse_2s_infinite]" />
              Call Now
            </a>

            {/* Schedule Meeting Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
            >
              <Calendar className="w-5 h-5 text-[#D946EF]" />
              Book Meeting
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
