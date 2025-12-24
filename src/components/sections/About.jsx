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
      <div className="container">
        <SectionTitle 
          title="Sobre Mí" 
          subtitle="Conoce un poco más sobre mi trayectoria y experiencia"
        />

        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <User size={64} />
              </div>
              <div className="about-image-decoration"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-info"
            {...fadeInUp}
          >
            <h3 className="about-info-title">Ingeniero de Sistemas e Informática</h3>
            
            <div className="about-info-meta">
              <div className="about-info-meta-item">
                <GraduationCap size={20} />
                <span>Universidad Nacional de San Antonio Abad del Cusco</span>
              </div>
              <div className="about-info-meta-item">
                <MapPin size={20} />
                <span>Cusco, Perú</span>
              </div>
            </div>

            <div className="about-info-text">
              <p>
                Ingeniero de Sistemas e Informática de la Universidad Nacional de San Antonio Abad del Cusco, 
                con experiencia en desarrollo Full Stack y soluciones tecnológicas para empresas.
              </p>
              
              <p>
                He liderado proyectos desde sistemas de gestión empresarial hasta aplicaciones móviles educativas, 
                trabajando con tecnologías modernas como React, Node.js, Flutter y Laravel. Mi enfoque se centra 
                en crear productos escalables, optimizados y centrados en el usuario.
              </p>
              
              <p>
                Actualmente dirijo "Ecos del SEO", una agencia digital integral donde desarrollo soluciones web, 
                automatización y estrategias SEO para clientes en Perú.
              </p>
            </div>

            <div className="about-actions">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`about-social-btn about-social-btn-${link.variant}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="about-cta">
              <a href="/resume.pdf" download>
                <Button variant="primary" size="lg">
                  Descargar CV Completo
                </Button>
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
