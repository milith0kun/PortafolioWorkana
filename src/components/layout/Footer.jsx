import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/edmilsaire',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/edmilSaire',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:174449@unsaac.edu.pe',
      label: 'Email'
    }
  ];

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo y descripción */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Heart size={32} />
              <span className="footer-logo-text">Edmil Saire</span>
            </div>
            <p className="footer-description">
              Ingeniero de Sistemas Full Stack Developer especializado en crear soluciones tecnológicas modernas y escalables.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links de navegación */}
          <div className="footer-links">
            <h4 className="footer-links-title">Navegación</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:174449@unsaac.edu.pe" className="footer-contact-item">
                  174449@unsaac.edu.pe
                </a>
              </li>
              <li>
                <a href="tel:+51901246936" className="footer-contact-item">
                  +51 901 246 936
                </a>
              </li>
              <li className="footer-contact-item">
                Cusco, Perú
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Edmil Saire. Todos los derechos reservados.
          </p>
          <p className="footer-tech">
            Desarrollado con React + CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
