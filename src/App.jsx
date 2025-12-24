import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', component: <Hero onNext={() => setActiveSection(1)} /> },
    { id: 'about', component: <About onNext={() => setActiveSection(2)} /> },
    { id: 'skills', component: <Skills onNext={() => setActiveSection(3)} /> },
    { id: 'experience', component: <Experience onNext={() => setActiveSection(4)} /> },
    { id: 'projects', component: <Projects onNext={() => setActiveSection(5)} /> },
    { id: 'contact', component: <Contact /> }
  ];

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="app-main">
        {sections.map((section, index) => (
          <div 
            key={section.id}
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
