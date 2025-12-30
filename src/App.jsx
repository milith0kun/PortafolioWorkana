import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  const isMobile = useCallback(() => window.innerWidth <= 768, []);

  const handleScroll = useCallback((e) => {
    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    setIsScrolled(scrollTop > 10);

    const currentScrollTop = scrollTop;
    const scrollDelta = currentScrollTop - lastScrollTopRef.current;
    const threshold = 10;

    if (Math.abs(scrollDelta) > threshold) {
      if (scrollDelta > 0 && currentScrollTop > 80) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollTopRef.current = currentScrollTop;
    }

    if (currentScrollTop <= 10) setIsNavbarVisible(true);

    if (isMobile() && canChangeSection.current) {
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      const isAtTop = scrollTop === 0;

      if (isAtBottom && activeSection < sections.length - 1) {
        if (!scrollTimeoutRef.current) {
          scrollTimeoutRef.current = setTimeout(() => {
            if (canChangeSection.current) triggerSectionChange(activeSection + 1, 'Siguiente...');
          }, 500);
        }
      } else if (isAtTop && activeSection > 0) {
        if (!scrollTimeoutRef.current) {
          scrollTimeoutRef.current = setTimeout(() => {
            if (canChangeSection.current) triggerSectionChange(activeSection - 1, 'Anterior...');
          }, 500);
        }
      } else {
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

    setTimeout(() => {
      setActiveSection(newIndex);
      setShowTransition(false);
      setTimeout(() => {
        canChangeSection.current = true;
      }, 1000);
    }, 400);
  };

  useEffect(() => {
    const activeSlide = slideRefs.current[activeSection];
    if (activeSlide) {
      activeSlide.addEventListener('scroll', handleScroll);
      return () => activeSlide.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection, handleScroll]);

  useEffect(() => {
    const activeSlide = slideRefs.current[activeSection];
    if (activeSlide) activeSlide.scrollTop = 0;
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeSection]);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-hidden font-sans">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrolled={isScrolled}
        isVisible={isNavbarVisible}
      />

      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">{transitionMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative h-screen w-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => slideRefs.current[index] = el}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${index === activeSection
                ? 'opacity-100 pointer-events-auto z-10 translate-y-0'
                : index < activeSection
                  ? 'opacity-0 pointer-events-none z-0 -translate-y-full'
                  : 'opacity-0 pointer-events-none z-0 translate-y-full'
              } overflow-y-auto`}
          >
            {section.component}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
