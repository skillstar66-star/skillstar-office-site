import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const AIBrainHover = ({ isHovered, mousePos }) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const linesRef = useRef([]);
  const nodesRef = useRef([]);
  const pulsesRef = useRef([]);
  const particlesRef = useRef([]);
  
  // Settings - reduced density for a more formal, elegant look
  const numLines = 45;
  const numParticles = 30;
  
  // Elegant, premium color palettes
  const leftColors = ['#FF7A00', '#FFA011', '#FF4D00'];
  const rightColors = ['#00E5FF', '#009DFF', '#4D7DFF'];

  // Generate smooth, elegant bezier paths
  const [linesData] = useState(() => {
    const data = [];
    for (let i = 0; i < numLines; i++) {
      // Distribute angles in an elegant outward burst
      const angle = (Math.PI * 2 * i) / numLines + (Math.random() * 0.1);
      const length = 150 + Math.random() * 100;
      
      const endX = Math.cos(angle) * length;
      const endY = Math.sin(angle) * length;
      
      // Control points for smooth, sweeping bezier curves
      const cp1X = Math.cos(angle - 0.2) * (length * 0.3);
      const cp1Y = Math.sin(angle - 0.2) * (length * 0.3);
      const cp2X = Math.cos(angle + 0.2) * (length * 0.7);
      const cp2Y = Math.sin(angle + 0.2) * (length * 0.7);
      
      const path = `M 0 0 C ${cp1X.toFixed(2)} ${cp1Y.toFixed(2)}, ${cp2X.toFixed(2)} ${cp2Y.toFixed(2)}, ${endX.toFixed(2)} ${endY.toFixed(2)}`;
      
      const isLeft = endX < 0;
      const color = isLeft 
        ? leftColors[Math.floor(Math.random() * leftColors.length)] 
        : rightColors[Math.floor(Math.random() * rightColors.length)];
      
      data.push({
        id: i,
        path,
        endX,
        endY,
        color,
        duration: 1 + Math.random() * 1.5
      });
    }
    return data;
  });

  const [particlesData] = useState(() => {
    return Array.from({ length: numParticles }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const isLeft = Math.cos(angle) < 0;
      const color = isLeft 
        ? leftColors[Math.floor(Math.random() * leftColors.length)] 
        : rightColors[Math.floor(Math.random() * rightColors.length)];
      return {
        id: i,
        color,
        size: 1.5 + Math.random() * 2,
        angle,
        distance: 100 + Math.random() * 150
      };
    });
  });

  // Smooth Parallax / Magnetic Effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.to(svgRef.current, {
      x: mousePos.x * 0.03,
      y: mousePos.y * 0.03,
      duration: 1.5,
      ease: "power2.out"
    });

    linesRef.current.forEach((line, i) => {
      if (line) {
        gsap.to(line, {
          x: mousePos.x * 0.01 * (i % 2 === 0 ? -1 : 1),
          y: mousePos.y * 0.01 * (i % 3 === 0 ? -1 : 1),
          duration: 2,
          ease: "power2.out"
        });
      }
    });
  }, [mousePos]);

  // Elegant Hover Animation Timeline
  useEffect(() => {
    const tl = gsap.timeline();

    if (isHovered) {
      // Smoothly draw the elegant curves
      tl.to(linesRef.current, {
        strokeDashoffset: 0,
        duration: (i) => linesData[i].duration,
        ease: "power3.out",
        stagger: { each: 0.015, from: "center" }
      }, 0);

      // Gently fade in the end nodes
      tl.to(nodesRef.current, {
        opacity: 0.8,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)",
        stagger: { each: 0.015, from: "center" }
      }, 0.3);

      // Soft light pulses
      tl.to(pulsesRef.current, {
        opacity: 0.4,
        duration: 0.5
      }, 0.6);

      pulsesRef.current.forEach((pulse) => {
        if (!pulse) return;
        gsap.fromTo(pulse, 
          { strokeDashoffset: 200 },
          { 
            strokeDashoffset: -200, 
            duration: 2 + Math.random() * 2,
            repeat: -1,
            ease: "sine.inOut",
            delay: Math.random() * 2
          }
        );
      });
      
      // Floating ambient particles
      particlesRef.current.forEach((p, i) => {
        if (!p) return;
        const data = particlesData[i];
        gsap.fromTo(p,
          { x: 0, y: 0, opacity: 0, scale: 0 },
          {
            x: Math.cos(data.angle) * data.distance,
            y: Math.sin(data.angle) * data.distance,
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            duration: 2.5 + Math.random() * 2,
            repeat: -1,
            ease: "sine.inOut",
            delay: Math.random() * 2
          }
        );
      });

    } else {
      // Graceful retraction
      gsap.killTweensOf(pulsesRef.current);
      gsap.killTweensOf(particlesRef.current);
      
      tl.to(pulsesRef.current, { opacity: 0, duration: 0.3 }, 0);
      tl.to(particlesRef.current, { opacity: 0, scale: 0, duration: 0.5 }, 0);
      
      tl.to(nodesRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: { each: 0.01, from: "edges" }
      }, 0);

      tl.to(linesRef.current, {
        strokeDashoffset: (i) => {
           const path = linesRef.current[i];
           return path ? path.getTotalLength() : 400;
        },
        duration: 0.8,
        ease: "power3.inOut",
        stagger: { each: 0.01, from: "edges" }
      }, 0.2);
    }
    
    return () => tl.kill();
  }, [isHovered, linesData, particlesData]);

  useEffect(() => {
    linesRef.current.forEach(path => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });
    
    pulsesRef.current.forEach(path => {
       if (path) {
         path.style.strokeDasharray = "30 150";
       }
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible"
      style={{ mixBlendMode: 'screen' }}
    >
      <svg 
        ref={svgRef}
        className="w-[160%] h-[160%] overflow-visible"
        viewBox="-250 -250 500 500"
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="elegantGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#softGlow)">
          {linesData.map((data, i) => (
            <g key={`line-group-${data.id}`}>
              {/* Elegant base line */}
              <path
                ref={el => linesRef.current[i] = el}
                d={data.path}
                fill="none"
                stroke={data.color}
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              
              {/* Subtle pulse */}
              <path
                ref={el => pulsesRef.current[i] = el}
                d={data.path}
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0"
                strokeLinecap="round"
                filter="url(#elegantGlow)"
              />

              {/* Singular elegant end node */}
              <circle
                ref={el => nodesRef.current[i] = el}
                cx={data.endX}
                cy={data.endY}
                r="3"
                fill={data.color}
                opacity="0"
                filter="url(#elegantGlow)"
              />
              <circle
                cx={data.endX}
                cy={data.endY}
                r="1.5"
                fill="#ffffff"
                opacity="0"
                ref={el => {
                    if (el && nodesRef.current[i]) {
                        el.style.opacity = nodesRef.current[i].style.opacity;
                        el.style.transform = nodesRef.current[i].style.transform;
                    }
                }}
              />
            </g>
          ))}
        </g>
        
        {/* Ambient floating particles */}
        <g filter="url(#elegantGlow)">
           {particlesData.map((data, i) => (
             <circle
               key={`particle-${data.id}`}
               ref={el => particlesRef.current[i] = el}
               cx="0"
               cy="0"
               r={data.size}
               fill={data.color}
               opacity="0"
             />
           ))}
        </g>
      </svg>
    </div>
  );
};

export default AIBrainHover;
