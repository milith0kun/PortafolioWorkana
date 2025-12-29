import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Mail, MapPin, GraduationCap, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import NextSectionButton from '../ui/NextSectionButton';
import './About.css';

const About = ({ onNext }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      url: 'https://github.com/edmilsaire', 
      label: 'GitHub',
      variant: 'github'
    },
    { 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/edmilSaire', 
      label: 'LinkedIn',
      variant: 'linkedin'
    },
    { 
      icon: <Mail size={20} />, 
      url: 'mailto:174449@unsaac.edu.pe', 
      label: 'Email',
      variant: 'email'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="about-title">Sobre Mí</h2>
          <p className="about-subtitle">Conoce mi trayectoria y experiencia</p>
        </motion.div>

        <div className="about-content">
          {/* Profile Card - Left Side */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-profile-image">
              <User size={120} strokeWidth={1.5} />
            </div>
            <h3 className="about-profile-title">Edmil Jampier Saire Bustamante</h3>
            <p className="about-profile-role">Ingeniero de Sistemas e Informática</p>
          </motion.div>

          {/* Main Content - Right Side */}
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            <div className="about-description">
              <p>
                Ingeniero de Sistemas con sólidos conocimientos en <strong>desarrollo Full Stack</strong> y fundamentos de inteligencia artificial.
                Experiencia práctica en desarrollo web con tecnologías modernas como React.js, Node.js, PHP, Laravel y Flutter.
              </p>

              <p>
                Especializado en la creación de soluciones web completas, desde frontend hasta backend, con enfoque en la
                optimización de procesos y la implementación de sistemas escalables. Competencia en desarrollo de APIs RESTful,
                gestión de bases de datos y trabajo colaborativo con metodologías ágiles.
              </p>
            </div>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <GraduationCap size={24} strokeWidth={1.5} />
                <div>
                  <h4>Educación</h4>
                  <p>Universidad Nacional de San Antonio Abad del Cusco</p>
                </div>
              </div>
              <div className="about-highlight-item">
                <MapPin size={24} strokeWidth={1.5} />
                <div>
                  <h4>Ubicación</h4>
                  <p>Cusco, Perú</p>
                </div>
              </div>
              <div className="about-highlight-item">
                <Rocket size={24} strokeWidth={1.5} />
                <div>
                  <h4>Enfoque Actual</h4>
                  <p>Director en Ecos del SEO</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h4 className="about-card-title">Conéctate Conmigo</h4>
              <div className="about-social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-social-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="about-card">
              <h4 className="about-card-title">Proyectos Destacados</h4>
              <ul className="about-achievements">
                <li>Sistemas de gestión empresarial completos</li>
                <li>Apps móviles educativas con Flutter</li>
                <li>Plataformas de geolocalización en tiempo real</li>
                <li>Sistemas HACCP desplegados en AWS</li>
              </ul>
            </div>

            <div className="about-cta-card">
              <a href="/resume.pdf" download className="about-download-btn">
                <span>Descargar CV Completo</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 13L5 8H15L10 13Z" fill="currentColor"/>
                  <path d="M4 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <NextSectionButton onClick={onNext} />
    </section>
  );
};

export default About;
