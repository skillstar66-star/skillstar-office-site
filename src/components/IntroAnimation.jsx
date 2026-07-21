import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo (2).png';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: init, 1: type SKILLSTAR, 2: type Digital Solutions, 3: glow, 4: morph
  const canvasRef = useRef(null);

  // Text strings
  const line1 = "SKILLSTAR";
  const line2 = "Digital Solutions";

  useEffect(() => {
    // Sequence timing compressed to < 2s
    const timers = [];

    // 0.2s: Start typing SKILLSTAR
    timers.push(setTimeout(() => setPhase(1), 200));

    // Start Digital Solutions at 0.6s
    timers.push(setTimeout(() => setPhase(2), 600));

    // Hold briefly, add glow at 1.0s
    timers.push(setTimeout(() => setPhase(3), 1000));

    // Start morphing at 1.3s
    timers.push(setTimeout(() => setPhase(4), 1300));

    return () => timers.forEach(clearTimeout);
  }, []);

  // Canvas Morphing Logic
  useEffect(() => {
    if (phase === 4 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      // Set to high DPI for crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';

      let particles = [];
      let animationFrameId;

      const initParticles = async () => {
        // Offscreen canvas to get text pixels
        const offCanvas = document.createElement('canvas');
        offCanvas.width = canvas.width;
        offCanvas.height = canvas.height;
        const offCtx = offCanvas.getContext('2d');

        // Draw text to match DOM
        offCtx.fillStyle = 'white';
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';

        const isMobile = window.innerWidth < 768;
        offCtx.font = `bold ${isMobile ? 48 * dpr : 72 * dpr}px system-ui, -apple-system, sans-serif`;
        offCtx.letterSpacing = '0.1em';
        offCtx.fillText(line1, (window.innerWidth / 2) * dpr, (window.innerHeight / 2 - 30) * dpr);

        offCtx.font = `300 ${isMobile ? 24 * dpr : 36 * dpr}px system-ui, -apple-system, sans-serif`;
        offCtx.fillStyle = '#00A3FF';
        offCtx.fillText(line2, (window.innerWidth / 2) * dpr, (window.innerHeight / 2 + 30) * dpr);

        const textImgData = offCtx.getImageData(0, 0, canvas.width, canvas.height).data;

        // Collect text particle positions
        const textParticles = [];
        const step = isMobile ? 3 * dpr : 4 * dpr; // Particle density
        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            const idx = (y * canvas.width + x) * 4;
            if (textImgData[idx + 3] > 128) {
              const r = textImgData[idx];
              const g = textImgData[idx + 1];
              const b = textImgData[idx + 2];
              textParticles.push({
                x: x / dpr,
                y: y / dpr,
                color: `rgba(${r}, ${g}, ${b}, 1)`,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
              });
            }
          }
        }

        // Load logo
        const logo = new Image();
        logo.src = logoImg;
        await new Promise(resolve => { logo.onload = resolve; });

        offCtx.clearRect(0, 0, canvas.width, canvas.height);

        // Target positioning logic (match navbar)
        let paddingX = 24;
        if (window.innerWidth >= 768) paddingX = 48;
        if (window.innerWidth >= 1024) paddingX = 96; // 24 = px-6, 48 = px-12, 96 = px-24 

        const logoH = isMobile ? 64 : 80;
        const logoW = (logo.width / logo.height) * logoH;

        // py-6 means 24px top padding
        const logoY = 24;

        // Container mx-auto centering approximation
        const maxContainer = 1536; // rough 2xl container max
        const containerPaddingX = Math.max(paddingX, (window.innerWidth - maxContainer) / 2 + paddingX);
        const logoX = containerPaddingX;

        // Draw logo offscreen
        offCtx.drawImage(logo, logoX * dpr, logoY * dpr, logoW * dpr, logoH * dpr);
        const logoImgData = offCtx.getImageData(0, 0, canvas.width, canvas.height).data;

        const logoParticleTargets = [];
        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            const idx = (y * canvas.width + x) * 4;
            if (logoImgData[idx + 3] > 64) { // Get visible pixels of logo
              logoParticleTargets.push({ x: x / dpr, y: y / dpr });
            }
          }
        }

        // Shuffle arrays for random mapping
        const shuffle = (array) => {
          let currentIndex = array.length, randomIndex;
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
          }
          return array;
        }

        shuffle(textParticles);
        shuffle(logoParticleTargets);

        // Assign targets to particles
        particles = textParticles.map((p, i) => {
          const target = logoParticleTargets[i % logoParticleTargets.length];
          return {
            ...p,
            tx: target.x,
            ty: target.y,
            life: 0,
            delay: Math.random() * 60, // larger stagger for slower build up
            speed: 0.008 + Math.random() * 0.008, // very slow speed for a majestic float
            cx: p.x + (Math.random() - 0.5) * 600,
            cy: p.y - Math.random() * 400,
          };
        });

        // Add some extra particles if logo has more pixels
        if (logoParticleTargets.length > textParticles.length) {
          for (let i = textParticles.length; i < logoParticleTargets.length; i += 2) {
            const target = logoParticleTargets[i];
            particles.push({
              x: (window.innerWidth / 2) + (Math.random() - 0.5) * 100,
              y: (window.innerHeight / 2) + (Math.random() - 0.5) * 100,
              tx: target.x,
              ty: target.y,
              color: 'rgba(0, 163, 255, 1)',
              life: 0,
              delay: Math.random() * 60,
              speed: 0.008 + Math.random() * 0.008,
              cx: (window.innerWidth / 2) + (Math.random() - 0.5) * 600,
              cy: (window.innerHeight / 2) - Math.random() * 400,
            })
          }
        }

        let frameCount = 0;

        const render = () => {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          ctx.globalCompositeOperation = 'screen';

          let allArrived = true;
          let arrivedCount = 0;

          particles.forEach(p => {
            p.life++;
            if (p.life > p.delay) {
              const progress = Math.min((p.life - p.delay) * p.speed, 1);

              if (progress < 1) {
                allArrived = false;

                // Bezier curve interpolation for smooth cinematic arc
                const t = progress;
                const invT = 1 - t;
                const pX = invT * invT * p.x + 2 * invT * t * p.cx + t * t * p.tx;
                const pY = invT * invT * p.y + 2 * invT * t * p.cy + t * t * p.ty;

                ctx.fillStyle = `rgba(0, 163, 255, ${Math.max(0.3, 1 - progress * 0.2)})`;
                ctx.beginPath();
                ctx.arc(pX, pY, isMobile ? 1 : 1.5, 0, Math.PI * 2);
                ctx.fill();
              } else {
                arrivedCount++;
                // Draw at target position, fading out as the real logo fades in
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, 1 - (progress - 1) * 5)})`;
                ctx.beginPath();
                ctx.arc(p.tx, p.ty, 1, 0, Math.PI * 2);
                ctx.fill();
              }
            } else {
              allArrived = false;
              // Swirl at start position
              const swX = p.x + Math.sin(frameCount * 0.1 + p.y) * 2;
              const swY = p.y + Math.cos(frameCount * 0.1 + p.x) * 2;
              ctx.fillStyle = p.color;
              ctx.beginPath();
              ctx.arc(swX, swY, isMobile ? 1 : 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          });

          if (!allArrived && frameCount < 400) { // allow plenty of time for very slow animation
            frameCount++;
            animationFrameId = requestAnimationFrame(render);
          } else {
            // Trigger complete when animation settles
            onComplete();
          }
        };

        render();
      };

      initParticles();

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [phase, onComplete]);

  // Framer Motion variants
  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.1 } }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050816] flex items-center justify-center overflow-hidden pointer-events-none">

      {/* Background tiny blue particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase < 5 ? 1 : 0 }} // fade out entirely at end
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() * 0.5 + 0.1 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute rounded-full bg-[#00A3FF]/40 blur-[1px]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </motion.div>

      {/* DOM Text Phase */}
      <AnimatePresence>
        {phase > 0 && phase < 4 && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.2 } }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Glow Effect behind text */}
            <AnimatePresence>
              {phase === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} // faster glow transition
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[#00A3FF]/20 blur-[60px] -z-10 rounded-full"
                />
              )}
            </AnimatePresence>

            <div className="flex overflow-hidden">
              {phase >= 1 && line1.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.03 }} // faster typing
                  className="text-4xl md:text-7xl font-bold tracking-[0.1em] text-white font-heading"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="flex mt-3 h-12 overflow-hidden">
              {phase >= 2 && line2.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.015 }} // faster typing
                  className="text-xl md:text-4xl font-light text-[#00A3FF] tracking-widest font-heading"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Canvas for Morphing Phase */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${phase >= 4 ? 'opacity-100' : 'opacity-0'}`}
      />

    </div>
  );
};

export default IntroAnimation;
