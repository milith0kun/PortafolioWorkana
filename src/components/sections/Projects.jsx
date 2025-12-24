import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectCategories } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ProjectCard';import NextSectionButton from '../ui/NextSectionButton';import './Projects.css';

const Projects = ({ onNext }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle 
          title="Proyectos" 
          subtitle="Una selección de mis trabajos más destacados"
        />

        <div className="projects-filters">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`projects-filter-btn ${activeCategory === category.id ? 'projects-filter-btn-active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No hay proyectos en esta categoría.</p>
          </div>
        )}
      </div>
      <NextSectionButton onClick={onNext} />
    </section>
  );
};

export default Projects;
