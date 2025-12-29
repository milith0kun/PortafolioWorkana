import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const slideRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);
  const canChangeSection = useRef(true);

  const sections = [
    { id: 'hero', component: <Hero onNext={() => setActiveSection(1)} /> },
    { id: 'about', component: <About onNext={() => setActiveSection(2)} /> },
    { id: 'skills', component: <Skills onNext={() => setActiveSection(3)} /> },
    { id: 'experience', component: <Experience onNext={() => setActiveSection(4)} /> },
    { id: 'projects', component: <Projects onNext={() => setActiveSection(5)} /> },
    { id: 'certifications', component: <Certifications onNext={() => setActiveSection(6)} /> },
    { id: 'contact', component: <Contact /> }
  ];

  // Detect if mobile
  const isMobile = useCallback(() => {
    return window.innerWidth <= 768;
  }, []);

  // Handle scroll end detection for mobile
  const handleScroll = useCallback((e) => {
    if (!isMobile() || !canChangeSection.current) return;

    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    // Check if at the bottom (with 50px threshold)
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;

    if (isAtBottom && activeSection < sections.length - 1) {
      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set timeout to change section after 600ms of being at bottom
      scrollTimeoutRef.current = setTimeout(() => {
        if (canChangeSection.current) {
          canChangeSection.current = false;
          setShowTransition(true);

          // Change section after showing transition
          setTimeout(() => {
            setActiveSection(prev => Math.min(prev + 1, sections.length - 1));
            setShowTransition(false);

            // Allow next section change after delay
            setTimeout(() => {
              canChangeSection.current = true;
            }, 1000);
          }, 400);
        }
      }, 600);
    }
  }, [activeSection, sections.length, isMobile]);

  // Attach scroll listener to active slide
  useEffect(() => {
    const activeSlide = slideRefs.current[activeSection];
    if (activeSlide) {
      activeSlide.addEventListener('scroll', handleScroll);
      return () => {
        activeSlide.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeSection, handleScroll]);

  // Reset scroll to top when changing sections
  useEffect(() => {
    const activeSlide = slideRefs.current[activeSection];
    if (activeSlide) {
      activeSlide.scrollTop = 0;
    }

    // Cleanup timeout
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection]);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Transition indicator */}
      {showTransition && (
        <div className="section-transition-indicator">
          <div className="section-transition-spinner"></div>
          <span>Siguiente sección...</span>
        </div>
      )}

      <main className="app-main">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => slideRefs.current[index] = el}
            className={`section-slide ${index === activeSection ? 'section-slide-active' : ''}`}
          >
            {section.component}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
