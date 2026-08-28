import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

const OurStory = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const [isMuted, setIsMuted] = useState(true);

  const videoSrc = "/Creating_digital_design_brand_video_202608271210 (online-video-cutter.com).mp4";

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section ref={sectionRef} id="story" className="py-24 md:py-32 bg-[#020516] relative overflow-hidden">
      
      {/* Abstract Glowing Background Orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00C6FF]/10 to-[#8B5CF6]/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#D946EF]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#00C6FF] mr-2 animate-pulse"></div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-gray-300">Our Brand Story</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Creating Digital <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                  Design & Brand Video
                </span>
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#8B5CF6] opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 0" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-md leading-relaxed"
            >
              Take a look inside our creative process. We blend high-impact video, digital design, and branding strategies to help businesses grow.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-11 h-11 rounded-full border-2 border-[#020516] bg-gray-800 bg-cover bg-center shadow-md" 
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 15}')` }}
                  ></div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">Loved by 500+ global brands</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Video Content (Autoplay Video Container) */}
          <div className="w-full lg:w-[55%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[16/9] rounded-[2rem] p-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group overflow-hidden"
            >
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-[#0A0F24]">
                
                {/* HTML5 Video Element */}
                <video
                  ref={videoRef}
                  src={videoSrc}
                  muted={isMuted}
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover rounded-[1.6rem]"
                />

                {/* Mute/Unmute Audio Button Overlay */}
                <button 
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-30 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all shadow-lg flex items-center justify-center"
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-cyan-400" />}
                </button>
              </div>
            </motion.div>

            {/* Floating Glass Stat Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#10193A]/90 to-[#0A0F24]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00C6FF]/20 flex items-center justify-center border border-[#00C6FF]/30 text-[#00C6FF]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-none">100+</div>
                <div className="text-[11px] text-gray-400 mt-1">Creative Projects</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-[#10193A]/90 to-[#0A0F24]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D946EF]/20 flex items-center justify-center border border-[#D946EF]/30 text-[#D946EF]">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-none">4.9/5</div>
                <div className="text-[11px] text-gray-400 mt-1">Client Rating</div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;

