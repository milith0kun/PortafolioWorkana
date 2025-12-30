import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../data/projects';
import ProjectCard from '../ProjectCard';
import { Button } from '@/components/ui/Button';

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
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Proyectos Seleccionados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Una muestra de mi trayectoria desarrollando soluciones innovadoras y escalables.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full px-6 transition-all"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border rounded-2xl bg-muted/30"
          >
            <p className="text-muted-foreground font-medium">No se encontraron proyectos en esta categoría.</p>
          </motion.div>
        )}

        <div className="mt-20 flex justify-center">
          <Button
            variant="ghost"
            onClick={onNext}
            className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            Siguiente Sección
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              ↓
            </motion.span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
