import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Get window size to calculate top-left position approximately
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Phase 1: Show text for 1.5s
    const t1 = setTimeout(() => {
      setPhase(2);
    }, 1800);

    // Phase 2: Stars flying to top left for 1s
    const t2 = setTimeout(() => {
      setPhase(3);
    }, 3000);

    // Phase 3: Reveal site
    const t3 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Generate 30 stars for the explosion effect
  const stars = Array.from({ length: 30 });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 3 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99999] bg-[#02030A] flex items-center justify-center overflow-hidden"
    >

      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="text"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center relative"
          >
            {/* Glowing background aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] blur-[80px] opacity-20"></div>

            <div className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white tracking-tight relative z-10">
              Skill<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6]">Star</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mt-4 tracking-widest uppercase font-bold relative z-10">
              Digital Solution
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {stars.map((_, i) => {
            // Random explosion angles
            const angle = (i / stars.length) * Math.PI * 2 + (Math.random() * 0.5);
            const distance = 80 + Math.random() * 120;
            const explodeX = Math.cos(angle) * distance;
            const explodeY = Math.sin(angle) * distance;

            // Target coordinates (top left where Navbar logo is)
            const targetX = -(windowSize.width / 2) + 80; // Approximate logo X
            const targetY = -(windowSize.height / 2) + 40; // Approximate logo Y

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, explodeX, targetX],
                  y: [0, explodeY, targetY],
                  scale: [0, 1.2, 0.5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.4, 1],
                  ease: "easeInOut",
                  delay: Math.random() * 0.2
                }}
                className="absolute"
              >
                {i % 2 === 0 ? (
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                ) : (
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </motion.div>
            );
          })}
        </div>
      )}

    </motion.div>
  );
};

export default Preloader;
