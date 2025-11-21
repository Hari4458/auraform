import React, { useEffect, useState, useRef } from 'react';

const SoloLevelingCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef([]);
  const animationRef = useRef();
  const [energySparks, setEnergySparks] = useState([]);
  const [magicalBurst, setMagicalBurst] = useState(false);

  useEffect(() => {
    // Keep default cursor visible
    document.body.style.cursor = 'auto';

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add to trail with enhanced properties
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
        intensity: Math.random() * 0.5 + 0.5
      });
      
      // Keep only recent trail points
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.time < 800);
      
      // Create energy sparks randomly during movement
      if (Math.random() < 0.3) {
        const newSpark = {
          id: Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          color: Math.random() > 0.5 ? '#8A2BE2' : '#00BFFF',
          size: Math.random() * 4 + 2
        };
        setEnergySparks(prev => [...prev.slice(-15), newSpark]);
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      setMagicalBurst(true);
      
      // Create explosive energy sparks on click
      const burstSparks = [];
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        burstSparks.push({
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * (Math.random() * 6 + 4),
          vy: Math.sin(angle) * (Math.random() * 6 + 4),
          life: 1,
          color: '#FFD700',
          size: Math.random() * 6 + 4
        });
      }
      setEnergySparks(prev => [...prev, ...burstSparks]);
      
      // Reset burst effect
      setTimeout(() => setMagicalBurst(false), 300);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.type === 'submit' || target.classList.contains('clickable')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.type === 'submit' || target.classList.contains('clickable')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Animate trail and energy sparks
  useEffect(() => {
    const animate = () => {
      // Update energy sparks
      setEnergySparks(prev => 
        prev.map(spark => ({
          ...spark,
          x: spark.x + spark.vx,
          y: spark.y + spark.vy,
          vx: spark.vx * 0.98,
          vy: spark.vy * 0.98 + 0.1, // slight gravity
          life: spark.life - 0.03,
          size: spark.size * 0.99
        })).filter(spark => spark.life > 0 && spark.size > 0.5)
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Magical effects around normal cursor - no visible cursor replacement */}
      <div
        className="cursor-effects-container"
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          zIndex: 10000,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Invisible core - just for positioning effects */}
        <div
          className="cursor-effects-anchor"
          style={{
            width: '1px',
            height: '1px',
            position: 'relative'
          }}
        >
          {/* Inner energy core - subtle glow around cursor */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isClicking ? '20px' : isHovering ? '15px' : '8px',
            height: isClicking ? '20px' : isHovering ? '15px' : '8px',
            background: isClicking 
              ? 'radial-gradient(circle, rgba(255,215,0,0.3), transparent)'
              : isHovering
                ? 'radial-gradient(circle, rgba(138,43,226,0.2), transparent)'
                : 'radial-gradient(circle, rgba(0,191,255,0.1), transparent)',
            borderRadius: '50%',
            animation: 'energyCore 1s ease-in-out infinite alternate',
            opacity: 0.8
          }} />
        </div>
        
        {/* Multiple magical rings around cursor */}
        <div
          className="cursor-ring-outer"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isHovering ? '60px' : isClicking ? '80px' : '40px',
            height: isHovering ? '60px' : isClicking ? '80px' : '40px',
            border: `2px solid ${isClicking ? '#FFD700' : isHovering ? '#8A2BE2' : '#00BFFF'}`,
            borderRadius: '50%',
            opacity: isClicking ? 0.8 : isHovering ? 0.5 : 0.3,
            animation: 'cursorRingOuter 3s linear infinite reverse',
            borderStyle: 'dashed'
          }}
        />
        
        <div
          className="cursor-ring-middle"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isHovering ? '40px' : isClicking ? '60px' : '25px',
            height: isHovering ? '40px' : isClicking ? '60px' : '25px',
            border: `1px solid ${isClicking ? '#FF8C00' : isHovering ? '#6A0DAD' : '#1E90FF'}`,
            borderRadius: '50%',
            opacity: isClicking ? 0.9 : isHovering ? 0.6 : 0.4,
            animation: 'cursorRingMiddle 2s linear infinite',
            borderTop: 'transparent',
            borderLeft: 'transparent'
          }}
        />
        
        <div
          className="cursor-ring-inner"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isHovering ? '25px' : isClicking ? '40px' : '15px',
            height: isHovering ? '25px' : isClicking ? '40px' : '15px',
            border: `1px solid ${isClicking ? '#FFFF00' : isHovering ? '#9370DB' : '#87CEEB'}`,
            borderRadius: '50%',
            opacity: isClicking ? 1 : isHovering ? 0.7 : 0.5,
            animation: 'cursorRingInner 1.5s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Enhanced magic trail */}
      {trailRef.current.map((point, index) => {
        const age = Date.now() - point.time;
        const opacity = Math.max(0, 1 - age / 800);
        const size = Math.max(1, 12 * opacity * point.intensity);
        const delay = index * 2;
        
        return (
          <div
            key={index}
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, 
                #00BFFF${Math.floor(opacity * 180).toString(16).padStart(2, '0')} 0%, 
                #1E90FF${Math.floor(opacity * 120).toString(16).padStart(2, '0')} 50%, 
                transparent 100%)`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999 - index,
              pointerEvents: 'none',
              boxShadow: `0 0 ${size * 2}px #00BFFF${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`,
              animation: `trailFade ${800 - delay}ms linear forwards`
            }}
          />
        );
      })}

      {/* Energy sparks */}
      {energySparks.map(spark => (
        <div
          key={spark.id}
          style={{
            position: 'fixed',
            left: spark.x,
            top: spark.y,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            background: `radial-gradient(circle, 
              ${spark.color}${Math.floor(spark.life * 255).toString(16).padStart(2, '0')} 0%, 
              transparent 70%)`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9998,
            pointerEvents: 'none',
            boxShadow: `0 0 ${spark.size * 3}px ${spark.color}${Math.floor(spark.life * 150).toString(16).padStart(2, '0')}`,
            animation: `sparkTwinkle 0.${Math.floor(Math.random() * 5) + 3}s ease-in-out infinite`
          }}
        />
      ))}

      {/* Magical burst effect */}
      {magicalBurst && (
        <div
          style={{
            position: 'fixed',
            left: mousePos.x,
            top: mousePos.y,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,140,0,0.3) 40%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9997,
            pointerEvents: 'none',
            animation: 'magicalBurst 0.3s ease-out forwards'
          }}
        />
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes cursorEnergyPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            filter: brightness(1) saturate(1);
          }
          25% { 
            transform: translate(-50%, -50%) scale(1.05);
            filter: brightness(1.2) saturate(1.3);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            filter: brightness(1.4) saturate(1.5);
          }
          75% { 
            transform: translate(-50%, -50%) scale(1.05);
            filter: brightness(1.2) saturate(1.3);
          }
        }
        
        @keyframes cursorPowerUp {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1.2);
            box-shadow: 0 0 15px #8A2BE2, 0 0 30px #8A2BE2, 0 0 45px #6A0DAD;
          }
          33% { 
            transform: translate(-50%, -50%) scale(1.15) rotate(120deg);
            filter: hue-rotate(60deg) brightness(1.5);
            box-shadow: 0 0 20px #9370DB, 0 0 40px #9370DB, 0 0 60px #8A2BE2;
          }
          66% { 
            transform: translate(-50%, -50%) scale(1.25) rotate(240deg);
            filter: hue-rotate(-60deg) brightness(1.8);
            box-shadow: 0 0 25px #6A0DAD, 0 0 50px #6A0DAD, 0 0 75px #4B0082;
          }
        }
        
        @keyframes cursorExplosion {
          0% { 
            transform: translate(-50%, -50%) scale(1);
            filter: brightness(1) blur(0px);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.8);
            filter: brightness(3) blur(1px);
          }
          100% { 
            transform: translate(-50%, -50%) scale(1.2);
            filter: brightness(1.5) blur(0px);
          }
        }
        
        @keyframes cursorRingOuter {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          50% {
            opacity: 0.2;
          }
          100% { 
            transform: translate(-50%, -50%) rotate(-360deg) scale(1.3);
            opacity: 0.4;
          }
        }
        
        @keyframes cursorRingMiddle {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            border-color: currentColor transparent transparent currentColor;
          }
          25% {
            border-color: transparent currentColor transparent currentColor;
          }
          50% {
            border-color: transparent transparent currentColor currentColor;
          }
          75% {
            border-color: currentColor transparent currentColor transparent;
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) scale(1.1);
            border-color: currentColor transparent transparent currentColor;
          }
        }
        
        @keyframes cursorRingInner {
          0% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            filter: blur(0.5px);
          }
          100% { 
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.4;
            filter: blur(1px);
          }
        }
        
        @keyframes energyCore {
          0% { 
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
          100% { 
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.9;
          }
        }
        
        @keyframes trailFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
        }
        
        @keyframes sparkTwinkle {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.7;
          }
        }
        
        @keyframes magicalBurst {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SoloLevelingCursor;
