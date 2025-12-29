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
  const [transitionMessage, setTransitionMessage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollTopRef = useRef(0);
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

  // Handle scroll end detection for mobile and navbar for desktop
  const handleScroll = useCallback((e) => {
    // Navbar logic always runs (desktop & mobile)
    // Mobile auto-scroll logic runs only on mobile

    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    // NAVBAR LOGIC
    setIsScrolled(scrollTop > 10);

    // Hide/Show Navbar Logic (Immediate response)
    if (scrollTop > lastScrollTopRef.current && scrollTop > 60) {
      setIsNavbarVisible(false); // Scrolling down & past header
    } else {
      setIsNavbarVisible(true); // Scrolling up
    }
    lastScrollTopRef.current = scrollTop;

    // MOBILE AUTO-SCROLL DETECTION
    if (isMobile() && canChangeSection.current) {
      // Check if at the bottom (with 50px threshold)
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      // Check if at the top
      const isAtTop = scrollTop === 0;

      // NEXT SECTION LOGIC (Scroll Bottom)
      if (isAtBottom && activeSection < sections.length - 1) {
        if (!scrollTimeoutRef.current) {
          scrollTimeoutRef.current = setTimeout(() => {
            if (canChangeSection.current) {
              triggerSectionChange(activeSection + 1, 'Siguiente sección...');
            }
          }, 500);
        }
      }

      // PREVIOUS SECTION LOGIC (Scroll Top)
      else if (isAtTop && activeSection > 0) {
        if (!scrollTimeoutRef.current) {
          scrollTimeoutRef.current = setTimeout(() => {
            if (canChangeSection.current) {
              triggerSectionChange(activeSection - 1, 'Sección anterior...');
            }
          }, 500);
        }
      } else {
        // Clear timeout if scrolling in middle
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
      }
    }
  }, [activeSection, sections.length, isMobile]);

  const triggerSectionChange = (newIndex, message) => {
    canChangeSection.current = false;
    setTransitionMessage(message);
    setShowTransition(true);

    // Change section after animation
    setTimeout(() => {
      setActiveSection(newIndex);
      setShowTransition(false);

      // Cooldown before next change
      setTimeout(() => {
        canChangeSection.current = true;
      }, 1000);
    }, 400);
  };

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
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrolled={isScrolled}
        isVisible={isNavbarVisible}
      />

      {/* Transition indicator */}
      {showTransition && (
        <div className="section-transition-indicator">
          <div className="section-transition-spinner"></div>
          <span>{transitionMessage}</span>
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
