'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ParticleSystem({ 
  particleCount = 50, 
  colors = ['#C09A44', '#491D0B', '#FAF5E9'],
  size = { min: 2, max: 8 },
  speed = { min: 1, max: 3 },
  className = ''
}) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (size.max - size.min) + size.min,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * (speed.max - speed.min) + speed.min,
          delay: Math.random() * 2,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleCount, colors, size, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className=\"absolute rounded-full opacity-30\"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, particle.direction * 50, 0],
            x: [0, particle.direction * 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.6, 0.1],
            rotate: [0, 360]
          }}
          transition={{
            duration: particle.duration * 10,
            delay: particle.delay,
            repeat: Infinity,
            ease: \"easeInOut\"
          }}
        />
      ))}
    </div>
  );
}

// Mango-themed particle system
export function MangoParticles({ density = 'medium', className = '' }) {
  const densitySettings = {
    low: { count: 20, size: { min: 15, max: 25 } },
    medium: { count: 40, size: { min: 20, max: 35 } },
    high: { count: 60, size: { min: 25, max: 40 } }
  };

  const settings = densitySettings[density];
  const [mangoes, setMangoes] = useState([]);

  useEffect(() => {
    const generateMangoes = () => {
      const newMangoes = [];
      
      for (let i = 0; i < settings.count; i++) {
        newMangoes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (settings.size.max - settings.size.min) + settings.size.min,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          rotationSpeed: Math.random() * 2 + 1
        });
      }
      
      setMangoes(newMangoes);
    };

    generateMangoes();
  }, [density, settings.count, settings.size]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {mangoes.map((mango) => (
        <motion.div
          key={mango.id}
          className=\"absolute opacity-10\"
          style={{
            left: `${mango.x}%`,
            top: `${mango.y}%`,
            fontSize: `${mango.size}px`
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360 * mango.rotationSpeed],
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: mango.duration,
            delay: mango.delay,
            repeat: Infinity,
            ease: \"easeInOut\"
          }}
        >
          \ud83e\udd6d
        </motion.div>
      ))}
    </div>
  );
}

// Interactive particle system that responds to mouse
export function InteractiveParticles({ 
  particleCount = 30,
  interactionRadius = 100,
  className = ''
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          baseX: Math.random() * 100,
          baseY: Math.random() * 100,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const container = document.getElementById('interactive-particles');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [particleCount]);

  return (
    <div 
      id=\"interactive-particles\"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.baseX, 2) + 
          Math.pow(mousePosition.y - particle.baseY, 2)
        );
        
        const isNearMouse = distance < interactionRadius / 10;
        
        return (
          <motion.div
            key={particle.id}
            className=\"absolute rounded-full\"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: '#C09A44'
            }}
            animate={{
              left: `${isNearMouse ? particle.baseX + (mousePosition.x - particle.baseX) * 0.3 : particle.baseX}%`,
              top: `${isNearMouse ? particle.baseY + (mousePosition.y - particle.baseY) * 0.3 : particle.baseY}%`,
              scale: isNearMouse ? 1.5 : 1,
              opacity: isNearMouse ? 0.8 : 0.3
            }}
            transition={{
              type: \"spring\",
              stiffness: 300,
              damping: 30
            }}
          />
        );
      })}
    </div>
  );
}