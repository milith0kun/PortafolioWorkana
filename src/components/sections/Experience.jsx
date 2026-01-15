import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code2, ExternalLink, Github, Monitor, Smartphone, Tablet, Layout } from 'lucide-react';
import { projects } from '../../data/projects';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Experience = ({ onNext }) => {
  // Ordenar proyectos por fecha (más reciente primero)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <section id="experience" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Portafolio
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Proyectos Realizados</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:left-1/2 md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-medium/50 before:to-transparent">
          {sortedProjects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Marker en el centro */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-6 flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow z-10">
                <Code2 size={16} className="text-white" />
              </div>

              {/* Contenedor: Card + Screenshots con flex */}
              <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Card del Proyecto */}
                <motion.div
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-20 md:ml-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <time className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Calendar className="size-3" /> {project.date}
                        </time>
                        <Badge variant="secondary" className="bg-muted/50 text-[10px]">
                          {project.category === 'full-stack' ? 'Full Stack' :
                            project.category === 'mobile' ? 'Mobile' :
                              project.category === 'data-science' ? 'IA & Data' :
                                project.category === 'iot' ? 'IoT' :
                                  project.category === 'infrastructure' ? 'Infraestructura' :
                                    project.category === 'electronics' ? 'Electrónica' : 'Desarrollo'}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 font-display">{project.title}</h3>

                      <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                        {project.longDescription || project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-[10px] bg-background/50 border-border/60">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Enlaces */}
                      {(project.demoUrl || project.githubUrl) && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" className="gap-2 text-xs" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github size={14} />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button size="sm" className="gap-2 text-xs" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={14} />
                                Ver Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Screenshots del Proyecto (lado opuesto) */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <motion.div
                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ml-20 md:ml-0`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Vista del Proyecto</p>
                    </div>

                    {/* Layout especial para 3 imágenes */}
                    {project.screenshots.length === 3 ? (
                      <div className="space-y-3">
                        {/* 2 cuadrados verticales arriba */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.screenshots.slice(0, 2).map((screenshot, idx) => (
                            <div
                              key={idx}
                              className="group relative rounded-lg overflow-hidden bg-muted/50 border border-border/40 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/30 hover:scale-[1.02] aspect-square"
                            >
                              <img
                                src={screenshot.image}
                                alt={screenshot.label || `Screenshot ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                  {screenshot.icon && (
                                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded">
                                      {screenshot.icon}
                                    </div>
                                  )}
                                  <span className="text-xs font-medium text-white">{screenshot.label}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* 1 horizontal abajo */}
                        <div className="group relative rounded-lg overflow-hidden bg-muted/50 border border-border/40 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/30 hover:scale-[1.02] aspect-video">
                          <img
                            src={project.screenshots[2].image}
                            alt={project.screenshots[2].label || 'Screenshot 3'}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                              {project.screenshots[2].icon && (
                                <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded">
                                  {project.screenshots[2].icon}
                                </div>
                              )}
                              <span className="text-xs font-medium text-white">{project.screenshots[2].label}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Layout normal para otras cantidades */
                      <div
                        className={`
                          grid gap-3
                          ${project.screenshots.length === 1 ? 'grid-cols-1' : ''}
                          ${project.screenshots.length === 2 ? 'grid-cols-2' : ''}
                          ${project.screenshots.length >= 4 ? 'grid-cols-2' : ''}
                        `}
                      >
                        {project.screenshots.map((screenshot, idx) => (
                          <div
                            key={idx}
                            className="group relative rounded-lg overflow-hidden bg-muted/50 border border-border/40 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/30 hover:scale-[1.02] aspect-video"
                          >
                            <img
                              src={screenshot.image}
                              alt={screenshot.label || `Screenshot ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                {screenshot.icon && (
                                  <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded">
                                    {screenshot.icon}
                                  </div>
                                )}
                                <span className="text-xs font-medium text-white">{screenshot.label}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onNext}
            className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Siguiente: Habilidades
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2 inline-block"
            >
              ↓
            </motion.span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
