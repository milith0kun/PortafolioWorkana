import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (index) => {
    setActiveSection(index);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { index: 0, label: 'Inicio' },
    { index: 1, label: 'Sobre mí' },
    { index: 2, label: 'Habilidades' },
    { index: 3, label: 'Experiencia' },
    { index: 4, label: 'Proyectos' },
    { index: 5, label: 'Certificaciones' },
    { index: 6, label: 'Contacto' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => goToSection(0)}>
          <Code2 size={28} strokeWidth={1.5} className="navbar-logo-icon" />
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                className={`navbar-link ${activeSection === item.index ? 'navbar-link-active' : ''}`}
                onClick={() => goToSection(item.index)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <a
          href="/CV-Edmil-Saire.pdf"
          download
          className="navbar-cta"
        >
          <FileDown size={18} />
          <span>Descargar CV</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'navbar-mobile-menu-open' : ''}`}>
        <ul className="navbar-mobile-list">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                className={`navbar-mobile-link ${activeSection === item.index ? 'navbar-mobile-link-active' : ''}`}
                onClick={() => goToSection(item.index)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/CV-Edmil-Saire.pdf"
              download
              className="navbar-mobile-cta"
            >
              <FileDown size={18} />
              <span>Descargar CV</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
