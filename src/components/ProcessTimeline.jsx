import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, Lightbulb, Target, Code, Rocket } from 'lucide-react';
const logoImg = 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790835/image_dvon6r.png';

const steps = [
  {
    id: '01',
    title: 'Discovery',
    desc: 'We dive deep into understanding your business, goals, competitors and market position.',
    icon: Search
  },
  {
    id: '02',
    title: 'Research & Analysis',
    desc: 'In-depth market & audience research to uncover hidden opportunities and define the target demographic.',
    icon: Lightbulb
  },
  {
    id: '03',
    title: 'Strategy & Planning',
    desc: 'Crafting a data-driven, strategic roadmap tailored for maximum growth and ROI.',
    icon: Target
  },
  {
    id: '04',
    title: 'Development & Execution',
    desc: 'Implementing the strategy with high precision, building assets, and setting up campaigns.',
    icon: Code
  },
  {
    id: '05',
    title: 'Launch & Growth',
    desc: 'Scaling successful campaigns to achieve exponential business growth and continuous optimization.',
    icon: Rocket
  }
];

const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#02040a]"></div>

      {/* Central intense glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"></div>

      {/* Simulated neural paths using SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Draw multiple bezier curves radiating from center */}
        {/* We use hardcoded paths for the visual effect */}
        {[...Array(30)].map((_, i) => {
          const angle = (i * 360) / 30;
          const rad = (angle * Math.PI) / 180;
          const cx = 50; // Center % X
          const cy = 50; // Center % Y

          // Random control points
          const cp1x = cx + Math.cos(rad + Math.random() * 0.5) * (15 + Math.random() * 10);
          const cp1y = cy + Math.sin(rad + Math.random() * 0.5) * (15 + Math.random() * 10);

          const cp2x = cx + Math.cos(rad - Math.random() * 0.5) * (30 + Math.random() * 15);
          const cp2y = cy + Math.sin(rad - Math.random() * 0.5) * (30 + Math.random() * 15);

          const ex = cx + Math.cos(rad) * (50 + Math.random() * 20);
          const ey = cy + Math.sin(rad) * (50 + Math.random() * 20);

          return (
            <path
              key={i}
              d={`M ${cx}% ${cy}% C ${cp1x}% ${cp1y}%, ${cp2x}% ${cp2y}%, ${ex}% ${ey}%`}
              fill="none"
              stroke={i % 3 === 0 ? "rgba(167, 139, 250, 0.4)" : "rgba(59, 130, 246, 0.3)"}
              strokeWidth={Math.random() * 2 + 0.5}
              className="animate-pulse drop-shadow-md"
              style={{ animationDuration: `${Math.random() * 4 + 2}s`, animationDelay: `${Math.random() * 2}s` }}
            />
          );
        })}

        {/* Intense horizontal connection beam */}
        <path d="M 0% 50% Q 25% 48%, 50% 50% T 100% 50%" fill="none" stroke="url(#beam)" strokeWidth="3" className="drop-shadow-lg" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress for the nerve line
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const nerveClipPath = useTransform(smoothProgress, [0, 1], ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[activeStep];

  return (
    <section id="process" className="relative min-h-screen bg-[#02040a] py-20 flex flex-col items-center justify-center overflow-clip">
      <NeuralNetworkBackground />

      {/* Main Content Grid Wrapper */}
      <div className="w-full">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* ================= DESKTOP LAYOUT (lg and up) ================= */}
          <div className="hidden lg:grid grid-cols-[1.5fr_2fr_1.5fr] gap-8 items-center min-h-[600px] mt-10">

            {/* Left: Steps List */}
            <div className="flex flex-col justify-between h-full py-10 relative">
              {/* Vertical Track connecting circles */}
              <div className="absolute left-[19px] top-[100px] bottom-[100px] w-px bg-white/10 -z-10 block"></div>

              <div className="flex flex-col gap-12">
                {steps.map((step, index) => {
                  const isActive = index === activeStep;
                  return (
                    <div
                      key={step.id}
                      className="flex gap-8 cursor-pointer group relative items-start"
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Number & Circle Column */}
                      <div className="flex flex-col items-center w-10 shrink-0">
                        <div className={`text-xl lg:text-2xl font-bold font-heading mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                          {step.id}
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 ${isActive ? 'border-blue-500 bg-[#02040a] shadow-[0_0_15px_rgba(59,130,246,1)] scale-110' : 'border-white/30 bg-[#02040a] group-hover:border-white/50'}`}>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#60a5fa]"></div>}
                        </div>
                      </div>

                      {/* Text Column */}
                      <div className={`text-sm lg:text-base font-medium transition-all duration-500 mt-[42px] relative w-full ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                        {step.title}

                        {/* Active Organic Nerve Line */}
                        {isActive && (
                          <motion.div
                            layoutId="leftActiveLine"
                            className="absolute -bottom-4 left-[20px] w-[280px] h-[40px] pointer-events-none"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ originX: 0 }}
                          >
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                              <defs>
                                <linearGradient id="leftNerveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                                  <stop offset="20%" stopColor="#3b82f6" />
                                  <stop offset="60%" stopColor="#8b5cf6" />
                                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                                </linearGradient>
                                <filter id="leftNerveGlow" x="-30%" y="-30%" width="160%" height="160%">
                                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <style>
                                  {`
                                    @keyframes pulseFlow {
                                      from { stroke-dashoffset: 50; }
                                      to { stroke-dashoffset: 0; }
                                    }
                                    .left-energy { animation: pulseFlow 1s linear infinite; }
                                  `}
                                </style>
                              </defs>

                              {/* Energy pulse line */}
                              <path d="M 0 10 C 20 5, 30 15, 50 10 C 70 5, 80 15, 100 10" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="8 25" className="left-energy" filter="url(#leftNerveGlow)" opacity="0.6" />

                              {/* Main thick nerve */}
                              <path d="M 0 10 C 20 5, 30 15, 50 10 C 70 5, 80 15, 100 10" fill="none" stroke="url(#leftNerveGrad)" strokeWidth="1.5" filter="url(#leftNerveGlow)" className="animate-[pulse_2s_ease-in-out_infinite]" />

                              {/* Branching nerves */}
                              <path d="M 30 11 C 40 18, 50 15, 60 18" fill="none" stroke="url(#leftNerveGrad)" strokeWidth="1" filter="url(#leftNerveGlow)" opacity="0.8" className="animate-[pulse_1.5s_ease-in-out_infinite_reverse]" />
                              <path d="M 60 9 C 75 2, 85 8, 90 4" fill="none" stroke="url(#leftNerveGrad)" strokeWidth="0.8" filter="url(#leftNerveGlow)" opacity="0.7" />
                              <path d="M 10 10 C 20 18, 25 2, 40 12" fill="none" stroke="url(#leftNerveGrad)" strokeWidth="0.6" filter="url(#leftNerveGlow)" opacity="0.6" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center: Glowing Logo */}
            <div className="flex items-center justify-center relative h-full">
              {/* Intense center backdrop glow */}
              <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-[80px] mix-blend-screen scale-75"></div>

              <div className="relative w-[450px] h-[450px] flex items-center justify-center">
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-2 border-indigo-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-8 rounded-full border-[3px] border-blue-500/80 shadow-[0_0_40px_rgba(59,130,246,0.8),inset_0_0_20px_rgba(59,130,246,0.5)]"></div>

                {/* Center Hub Logo Container */}
                <div className="w-full h-full rounded-full flex flex-col items-center justify-center z-10 relative">
                  <img src={logoImg} alt="SkillStar Digital Solutions - AI Marketing & Web Development Agency" className="w-96 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]" />
                </div>

                {/* Lightning AI nerve connection to right card */}
                <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-[500px] h-[120px] -z-10 block opacity-100 pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
                    <defs>
                      <linearGradient id="rightNerveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                        <stop offset="20%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="80%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                      <filter id="rightNerveGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <style>
                        {`
                          @keyframes energyFlow {
                            from { stroke-dashoffset: 100; }
                            to { stroke-dashoffset: 0; }
                          }
                          .energy-beam { animation: energyFlow 1.5s linear infinite; }
                        `}
                      </style>
                    </defs>

                    {/* Flowing energy particles */}
                    <path d="M 0 15 C 15 5, 25 25, 40 15 C 60 5, 70 25, 100 15" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="5 20" className="energy-beam" filter="url(#rightNerveGlow)" opacity="0.9" />

                    {/* Core thick nerve */}
                    <path d="M 0 15 C 15 5, 25 25, 40 15 C 60 5, 70 25, 100 15" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="2.5" filter="url(#rightNerveGlow)" className="animate-[pulse_2s_ease-in-out_infinite]" />

                    {/* Intricate surrounding nerve branches */}
                    <path d="M 0 15 C 20 25, 30 5, 50 20 C 70 28, 80 5, 100 15" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="1.2" filter="url(#rightNerveGlow)" opacity="0.8" className="animate-[pulse_1.5s_ease-in-out_infinite_reverse]" />
                    <path d="M 5 15 C 25 2, 45 28, 65 8 C 80 -2, 90 20, 100 15" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="1" filter="url(#rightNerveGlow)" opacity="0.6" className="animate-[pulse_2.5s_ease-in-out_infinite]" />

                    {/* Micro branches */}
                    <path d="M 15 10 C 25 0, 35 20, 45 10" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="0.6" filter="url(#rightNerveGlow)" opacity="0.5" />
                    <path d="M 40 18 C 55 28, 65 5, 75 22" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="0.6" filter="url(#rightNerveGlow)" opacity="0.5" />
                    <path d="M 60 10 C 75 0, 85 25, 95 12" fill="none" stroke="url(#rightNerveGrad)" strokeWidth="0.6" filter="url(#rightNerveGlow)" opacity="0.6" />

                    {/* Glowing Nodes */}
                    <circle cx="20" cy="11.5" r="1.5" fill="#fff" filter="url(#rightNerveGlow)" opacity="0.8" className="animate-pulse" />
                    <circle cx="65" cy="17.5" r="1.5" fill="#fff" filter="url(#rightNerveGlow)" opacity="0.8" className="animate-[pulse_1s_ease-in-out_infinite]" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Active Step Card */}
            <div className="flex items-center justify-end relative h-[550px] w-full py-6">
              <div className="relative w-full max-w-md h-full">
                <AnimatePresence>
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#0b0e1a]/70 backdrop-blur-3xl border border-blue-500/30 rounded-3xl p-10 w-full shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col"
                  >
                    {/* Top border intense glow */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-400 to-transparent opacity-100"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-6 shrink-0">
                        <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">Step</span>
                        <span className="text-blue-400 text-sm font-bold tracking-widest">{currentStep.id}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-8 font-heading leading-tight shrink-0">
                        {currentStep.title}
                      </h3>

                      {/* Glowing Icon Box */}
                      <div className="w-20 h-20 rounded-2xl bg-transparent border-2 border-blue-500/50 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3),inset_0_0_20px_rgba(59,130,246,0.2)] relative group shrink-0">
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                        <currentStep.icon className="w-8 h-8 text-blue-400 relative z-10 filter drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                      </div>

                      <p className="text-white/70 text-lg leading-relaxed flex-1">
                        {currentStep.desc}
                      </p>

                      {/* Slide indicators (dashes) */}
                      <div className="flex gap-2 shrink-0 mt-4">
                        {steps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === activeStep ? 'w-8 bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                            onClick={() => setActiveStep(idx)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ================= MOBILE LAYOUT (Below lg) ================= */}
          <div className="flex flex-col lg:hidden w-full items-center mt-4 gap-12 pb-16">

            {/* Mobile Globe Header */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-[60px] mix-blend-screen scale-75"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-indigo-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border-[3px] border-blue-500/80 shadow-[0_0_40px_rgba(59,130,246,0.8),inset_0_0_20px_rgba(59,130,246,0.5)]"></div>
              <div className="w-full h-full rounded-full flex flex-col items-center justify-center z-10 relative">
                <img src={logoImg} alt="SkillStar Digital Solutions - AI Marketing & Web Development Agency" className="w-48 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]" />
              </div>
            </div>

            {/* Vertical Stack of All Content Boxes */}
            <div ref={containerRef} className="w-full flex flex-col gap-8 sm:gap-10 relative px-1 sm:px-2">
              {/* Vertical connecting AI nerve (Organic Roots) */}
              <div className="absolute left-[-2px] sm:left-[0px] top-[40px] bottom-[40px] w-[50px] sm:w-[60px] -z-10">
                <motion.div style={{ clipPath: nerveClipPath }} className="absolute inset-0 w-full h-full">
                  <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" preserveAspectRatio="none" viewBox="0 0 60 100">
                    <defs>
                      <linearGradient id="mobileRootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                        <stop offset="10%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="90%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                      <filter id="mobileRootGlow" x="-50%" y="-10%" width="200%" height="120%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <style>
                        {`
                          @keyframes rootEnergyFlow {
                            from { stroke-dashoffset: 100; }
                            to { stroke-dashoffset: 0; }
                          }
                          .root-energy { animation: rootEnergyFlow 2s linear infinite; }
                          .root-energy-fast { animation: rootEnergyFlow 1.2s linear infinite reverse; }
                        `}
                      </style>
                    </defs>

                    {/* Energy pulse lines flowing through roots */}
                    <path d="M 30 0 C 15 15, 45 35, 30 50 C 15 70, 45 85, 30 100" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="5 30" className="root-energy" filter="url(#mobileRootGlow)" opacity="0.8" />
                    <path d="M 30 0 C 10 20, 20 50, 5 75 C -5 90, 15 100, 10 100" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="3 20" className="root-energy-fast" filter="url(#mobileRootGlow)" opacity="0.6" />
                    <path d="M 30 0 C 50 25, 40 55, 55 80 C 65 95, 45 100, 50 100" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="4 25" className="root-energy" filter="url(#mobileRootGlow)" opacity="0.6" />

                    {/* Main thick central root */}
                    <path d="M 30 0 C 15 15, 45 35, 30 50 C 15 70, 45 85, 30 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="2.5" filter="url(#mobileRootGlow)" className="animate-[pulse_3s_ease-in-out_infinite]" />

                    {/* Outer spreading thick roots */}
                    <path d="M 30 0 C 10 20, 20 50, 5 75 C -5 90, 15 100, 10 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="1.5" filter="url(#mobileRootGlow)" opacity="0.85" className="animate-[pulse_2s_ease-in-out_infinite_reverse]" />
                    <path d="M 30 0 C 50 25, 40 55, 55 80 C 65 95, 45 100, 50 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="1.5" filter="url(#mobileRootGlow)" opacity="0.85" className="animate-[pulse_2.5s_ease-in-out_infinite]" />

                    {/* Inner twisting micro-roots */}
                    <path d="M 30 10 Q 15 30, 25 50 T 20 90" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="0.8" filter="url(#mobileRootGlow)" opacity="0.6" />
                    <path d="M 28 30 Q 50 50, 35 70 T 40 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="0.8" filter="url(#mobileRootGlow)" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
                    <path d="M 32 50 Q 10 70, 28 90 T 25 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="0.6" filter="url(#mobileRootGlow)" opacity="0.5" />
                    <path d="M 25 70 Q 45 85, 32 100" fill="none" stroke="url(#mobileRootGrad)" strokeWidth="0.5" filter="url(#mobileRootGlow)" opacity="0.4" />

                    {/* Sporadic glowing nodes along the roots */}
                    <circle cx="21" cy="23" r="1.5" fill="#fff" filter="url(#mobileRootGlow)" opacity="0.9" className="animate-pulse" />
                    <circle cx="43" cy="42" r="1.2" fill="#fff" filter="url(#mobileRootGlow)" opacity="0.7" className="animate-[pulse_1s_ease-in-out_infinite]" />
                    <circle cx="16" cy="65" r="1.5" fill="#fff" filter="url(#mobileRootGlow)" opacity="0.8" />
                    <circle cx="51" cy="88" r="1.2" fill="#fff" filter="url(#mobileRootGlow)" opacity="0.9" className="animate-pulse" />
                  </svg>
                </motion.div>
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex gap-4 sm:gap-6 w-full relative"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >

                  {/* Number Indicator */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#02040a] border-[2px] border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 mt-6 relative z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    <span className="text-white font-bold font-heading text-lg">{step.id}</span>
                  </motion.div>

                  {/* Full Content Box */}
                  <div className="bg-[#0b0e1a]/80 backdrop-blur-3xl border border-blue-500/30 rounded-3xl p-6 sm:p-8 w-full shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden group">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)] shrink-0">
                        <step.icon className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-heading">{step.title}</h3>
                    </div>

                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
