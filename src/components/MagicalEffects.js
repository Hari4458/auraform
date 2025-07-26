import React, { useEffect, useRef } from 'react';

const MagicalEffects = () => {
  const effectsRef = useRef(null);

  useEffect(() => {
    const container = effectsRef.current;
    if (!container) return;

    // Create floating magical symbols
    const createMagicalSymbols = () => {
      const symbols = ['✦', '✧', '⟐', '◈', '◉', '⬢', '⬡', '◆', '◇', '▲', '△'];
      const colors = ['#8A2BE2', '#00BFFF', '#FFD700', '#E6E6FA', '#9370DB'];

      for (let i = 0; i < 15; i++) {
        const symbol = document.createElement('div');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.className = 'magical-symbol';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 10;
        
        symbol.style.cssText = `
          position: fixed;
          font-size: ${size}px;
          color: ${color};
          text-shadow: 0 0 10px ${color};
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          animation: floatSymbol ${duration}s linear infinite ${delay}s;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
          user-select: none;
        `;
        
        container.appendChild(symbol);
      }
    };

    // Create energy wisps
    const createEnergyWisps = () => {
      for (let i = 0; i < 8; i++) {
        const wisp = document.createElement('div');
        wisp.className = 'energy-wisp';
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        wisp.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #00BFFF, transparent);
          border-radius: 50%;
          left: ${startX}px;
          top: ${startY}px;
          animation: wispMovement ${duration}s ease-in-out infinite ${delay}s;
          pointer-events: none;
          z-index: 1;
          box-shadow: 0 0 15px #00BFFF;
        `;
        
        container.appendChild(wisp);
      }
    };

    // Create magical aura bursts on click
    const createAuraBurst = (x, y) => {
      const burst = document.createElement('div');
      burst.className = 'aura-burst';
      
      burst.style.cssText = `
        position: fixed;
        width: 100px;
        height: 100px;
        left: ${x - 50}px;
        top: ${y - 50}px;
        border: 2px solid #FFD700;
        border-radius: 50%;
        animation: auraBurst 0.8s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
      `;
      
      container.appendChild(burst);
      
      // Remove after animation
      setTimeout(() => {
        if (burst.parentNode) {
          burst.parentNode.removeChild(burst);
        }
      }, 800);
    };

    // Handle clicks for aura bursts
    const handleClick = (e) => {
      createAuraBurst(e.clientX, e.clientY);
    };

    // Create screen edge lightning effects
    const createLightningEffect = () => {
      const edges = ['top', 'right', 'bottom', 'left'];
      const edge = edges[Math.floor(Math.random() * edges.length)];
      
      const lightning = document.createElement('div');
      lightning.className = 'lightning-effect';
      
      let styles = `
        position: fixed;
        background: linear-gradient(90deg, transparent, #8A2BE2, #00BFFF, transparent);
        animation: lightning 2s ease-in-out;
        pointer-events: none;
        z-index: 0;
        opacity: 0.6;
      `;
      
      switch (edge) {
        case 'top':
          styles += `
            top: 0;
            left: 0;
            width: 100vw;
            height: 3px;
          `;
          break;
        case 'right':
          styles += `
            top: 0;
            right: 0;
            width: 3px;
            height: 100vh;
            background: linear-gradient(180deg, transparent, #8A2BE2, #00BFFF, transparent);
          `;
          break;
        case 'bottom':
          styles += `
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 3px;
          `;
          break;
        case 'left':
          styles += `
            top: 0;
            left: 0;
            width: 3px;
            height: 100vh;
            background: linear-gradient(180deg, transparent, #8A2BE2, #00BFFF, transparent);
          `;
          break;
        default:
          styles += `
            top: 0;
            left: 0;
            width: 100vw;
            height: 3px;
          `;
          break;
      }
      
      lightning.style.cssText = styles;
      container.appendChild(lightning);
      
      setTimeout(() => {
        if (lightning.parentNode) {
          lightning.parentNode.removeChild(lightning);
        }
      }, 2000);
    };

    // Initialize effects
    createMagicalSymbols();
    createEnergyWisps();

    // Set up periodic lightning effects
    const lightningInterval = setInterval(createLightningEffect, 5000);

    // Add click handler
    document.addEventListener('click', handleClick);

    // Create CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatSymbol {
        0% {
          transform: translateY(0px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.7;
        }
        90% {
          opacity: 0.7;
        }
        100% {
          transform: translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
      
      @keyframes wispMovement {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        50% {
          transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1.5);
          opacity: 0.8;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0.5);
          opacity: 0;
        }
      }
      
      @keyframes auraBurst {
        0% {
          transform: scale(0);
          opacity: 1;
          box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.8);
        }
        50% {
          transform: scale(1);
          opacity: 0.6;
          box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.4);
        }
        100% {
          transform: scale(2);
          opacity: 0;
          box-shadow: 0 0 50px 20px rgba(255, 215, 0, 0);
        }
      }
      
      @keyframes lightning {
        0% {
          opacity: 0;
          box-shadow: none;
        }
        10% {
          opacity: 0.8;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
        }
        20% {
          opacity: 0.4;
        }
        30% {
          opacity: 1;
          box-shadow: 0 0 30px rgba(0, 191, 255, 1);
        }
        40% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.9;
          box-shadow: 0 0 25px rgba(138, 43, 226, 0.9);
        }
        100% {
          opacity: 0;
          box-shadow: none;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(lightningInterval);
      document.removeEventListener('click', handleClick);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      // Clean up created elements
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={effectsRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    />
  );
};

export default MagicalEffects;
