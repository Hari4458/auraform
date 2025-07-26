import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking for cursor effects
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Solo Leveling inspired particle system
    const particles = [];
    const energyOrbs = [];
    const magicRunes = [];
    const particleCount = 80;
    const orbCount = 12;
    const runeCount = 6;

    // Magic colors inspired by Solo Leveling
    const colors = {
      primary: '#8A2BE2',      // Purple magic
      secondary: '#00BFFF',    // Blue energy
      accent: '#FFD700',       // Gold power
      shadow: '#1A0033',       // Dark purple
      light: '#E6E6FA'         // Light lavender
    };

    class MagicParticle {
      constructor() {
        this.reset();
        this.opacity = Math.random() * 0.8 + 0.2;
        this.baseSize = Math.random() * 3 + 1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.color = Math.random() > 0.7 ? colors.accent : 
                    Math.random() > 0.4 ? colors.primary : colors.secondary;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.life = 1.0;
        this.maxLife = Math.random() * 200 + 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1 / this.maxLife;

        // Magical floating effect
        this.vy += Math.sin(time * 0.01 + this.x * 0.01) * 0.002;
        
        // Respawn when died or out of bounds
        if (this.life <= 0 || this.x < -50 || this.x > canvas.width + 50 || 
            this.y < -50 || this.y > canvas.height + 50) {
          this.reset();
        }

        // Pulse effect
        this.size = this.baseSize + Math.sin(time * this.pulseSpeed) * 0.5;
      }

      draw() {
        const alpha = this.life * this.opacity;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 30).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}00`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
    }

    class EnergyOrb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 10;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.pulse = 0;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.pulse += 0.03;

        // Bounce off edges
        if (this.x <= this.radius || this.x >= canvas.width - this.radius) this.vx *= -1;
        if (this.y <= this.radius || this.y >= canvas.height - this.radius) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const size = this.radius + Math.sin(this.pulse) * 3;
        
        // Energy ring
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.strokeStyle = `${this.color}80`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner core
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.3);
        gradient.addColorStop(0, `${this.color}FF`);
        gradient.addColorStop(1, `${this.color}00`);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
      }
    }

    class MagicRune {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.sides = Math.floor(Math.random() * 3) + 5;
        this.color = colors.accent;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;

        // Draw magical rune pattern
        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
          const angle = (i / this.sides) * Math.PI * 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();

        // Inner pattern
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new MagicParticle());
    }
    for (let i = 0; i < orbCount; i++) {
      energyOrbs.push(new EnergyOrb());
    }
    for (let i = 0; i < runeCount; i++) {
      magicRunes.push(new MagicRune());
    }

    // Animation loop
    const animate = () => {
      // Create magical atmosphere
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a0a2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time++;

      // Update and draw magic runes (background)
      magicRunes.forEach(rune => {
        rune.update();
        rune.draw();
      });

      // Update and draw energy orbs
      energyOrbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Mouse interaction effect
      if (mousePos.x && mousePos.y) {
        const mouseGradient = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, 100
        );
        mouseGradient.addColorStop(0, `${colors.primary}40`);
        mouseGradient.addColorStop(1, `${colors.primary}00`);
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
