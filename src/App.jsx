import React, { useState, useEffect, useRef } from 'react';
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
  const slideRefs = useRef([]);

  const sections = [
    { id: 'hero', component: <Hero onNext={() => setActiveSection(1)} /> },
    { id: 'about', component: <About onNext={() => setActiveSection(2)} /> },
    { id: 'skills', component: <Skills onNext={() => setActiveSection(3)} /> },
    { id: 'experience', component: <Experience onNext={() => setActiveSection(4)} /> },
    { id: 'projects', component: <Projects onNext={() => setActiveSection(5)} /> },
    { id: 'certifications', component: <Certifications onNext={() => setActiveSection(6)} /> },
    { id: 'contact', component: <Contact /> }
  ];

  // Reset scroll to top when changing sections
  useEffect(() => {
    const activeSlide = slideRefs.current[activeSection];
    if (activeSlide) {
      activeSlide.scrollTop = 0;
    }
  }, [activeSection]);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
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
