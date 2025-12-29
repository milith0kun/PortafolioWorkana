import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import NextSectionButton from '../ui/NextSectionButton';
import BrandMark from '../ui/BrandMark';
import './Hero.css';
import './HeroScroll.css';

const Hero = ({ onNext }) => {
  const heroRef = useRef(null);
  const gridRef = useRef([]);

  /* useEffect(() => {
    let rafId;
    let mouseX = 50;
    let mouseY = 50;
    let targetX = 50;
    let targetY = 50;
    
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
    };
    
    const animate = () => {
      // Suavizar movimiento del mouse
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;
      
      const time = Date.now() * 0.001;
      
      gridRef.current.forEach((wave, index) => {
        if (!wave) return;
        
        const speed = 0.5 + index * 0.2;
        const amplitude = 15 + index * 5;
        const frequency = 0.02 + index * 0.01;
        
        // Calcular distorsión basada en el mouse
        const distanceX = Math.abs(mouseX - 50);
        const distanceY = Math.abs(mouseY - 50);
        const influence = Math.max(0, 1 - (distanceX + distanceY) / 100) * 2;
        
        // Generar path de onda
        let path = `M 0 ${50 + Math.sin(time * speed) * amplitude}`;
        
        for (let i = 0; i <= 100; i += 2) {
          const x = i;
          const distToMouse = Math.abs(i - mouseX);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 30) * influence;
          
          const y = 50 + 
            Math.sin((i * frequency) + time * speed) * amplitude +
            Math.sin(time * speed * 2 + index) * 10 +
            mouseInfluence * 20 * Math.sin(time * 3);
          
          path += ` L ${x} ${y}`;
        }
        
        path += ` L 100 100 L 0 100 Z`;
        wave.setAttribute('d', path);
        
        // Cambiar opacidad y color basado en influencia del mouse
        const opacity = 0.15 + influence * 0.15;
        wave.style.opacity = opacity;
      });
      
      rafId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []); */

  /* const renderGrid = () => {
    const waves = [];
    const waveCount = 5;

    const colors = [
      ['#3b82f6', '#0ea5e9'],
      ['#0ea5e9', '#06b6d4'],
      ['#06b6d4', '#3b82f6'],
      ['#6366f1', '#3b82f6'],
      ['#8b5cf6', '#6366f1']
    ];

    return (
      <svg className="hero-liquid-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {colors.map((color, i) => (
            <linearGradient key={`grad-${i}`} id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color[0]} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color[1]} stopOpacity="0.2" />
            </linearGradient>
          ))}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>

        {Array.from({ length: waveCount }).map((_, i) => (
          <path
            key={i}
            ref={el => gridRef.current[i] = el}
            fill={`url(#gradient-${i})`}
            filter="url(#goo)"
            className="hero-liquid-wave"
          />
        ))}
      </svg>
    );
  }; */

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/edmilsaire', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/edmilSaire', label: 'LinkedIn' },
    { icon: <Mail size={24} />, url: 'mailto:174449@unsaac.edu.pe', label: '174449@unsaac.edu.pe' }
  ];

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-gradient"></div>
        {/* <div className="hero-3d-grid">
          {renderGrid()}
        </div> */}
      </div>

      {/* Large ornamental number */}
      <motion.div
        className="hero-brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <span className="hero-brand-text"><span>e</span><span>d</span></span>
      </motion.div>

      <div className="hero-container">
        <motion.div className="hero-content" {...fadeInUp}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={20} />
            <span>Disponible para proyectos</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Edmil Jampier Saire Bustamante
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ingeniero de Sistemas e Informática
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Desarrollador Full Stack con experiencia en React, Node.js, Flutter y Laravel.
            Especializado en arquitecturas escalables, desarrollo móvil multiplataforma y soluciones cloud con AWS.
          </motion.p>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="hero-main-button"
              onClick={onNext}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explorar mi trabajo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>

            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <BrandMark variant="corner" position="right" />

      <motion.div
        className="hero-scroll-indicator-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={onNext}
      >
        <div className="hero-mouse">
          <div className="hero-wheel"></div>
        </div>
        <span className="hero-scroll-text">Desliza para explorar</span>
      </motion.div>
    </section>
  );
};

export default Hero;
