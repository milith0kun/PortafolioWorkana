import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Code2, ExternalLink, Github, Monitor, Smartphone, Tablet, Layout, Palette, Download } from 'lucide-react';
import { projects } from '../../data/projects';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Helper para convertir iconType a componente
const getIcon = (iconType) => {
  const icons = {
    monitor: <Monitor size={14} />,
    smartphone: <Smartphone size={14} />,
    tablet: <Tablet size={14} />,
    layout: <Layout size={14} />
  };
  return icons[iconType] || null;
};

// Componente de visualización con tabs y carrusel MEJORADO
const DeviceScreenshotViewer = ({ screenshotsByDevice }) => {
  const [activeDevice, setActiveDevice] = useState(() => {
    if (screenshotsByDevice.desktop && screenshotsByDevice.desktop.length > 0) return 'desktop';
    if (screenshotsByDevice.tablet && screenshotsByDevice.tablet.length > 0) return 'tablet';
    if (screenshotsByDevice.mobile && screenshotsByDevice.mobile.length > 0) return 'mobile';
    return 'desktop';
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  // Filtrar solo dispositivos que tienen screenshots
  const allDevices = [
    { key: 'desktop', label: 'Desktop', icon: <Monitor size={14} /> },
    { key: 'tablet', label: 'Tablet', icon: <Tablet size={14} /> },
    { key: 'mobile', label: 'App', icon: <Smartphone size={14} /> }
  ];

  const devices = allDevices.filter(device =>
    screenshotsByDevice[device.key] && screenshotsByDevice[device.key].length > 0
  );

  const currentScreenshots = screenshotsByDevice[activeDevice] || [];
  const currentImage = currentScreenshots[currentIndex];

  // Carrusel automático cada 2 segundos (Ultra rápido)
  useEffect(() => {
    if (currentScreenshots.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentScreenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeDevice, currentScreenshots.length]);

  // Reset index al cambiar dispositivo
  useEffect(() => {
    setCurrentIndex(0);
    setImageHeight(0);
  }, [activeDevice]);

  if (!screenshotsByDevice) return null;

  // Altura del viewport unificada para evitar desproporciones visuales
  const getViewportHeight = () => {
    return 400; // Altura estándar para todos los dispositivos
  };

  const viewportHeight = getViewportHeight();

  // Umbral inteligente según dispositivo para no romper experiencias previas
  const getScrollThreshold = () => {
    // Mobile/Tablet: Umbral bajo (800px) para que las Apps hagan scroll y se vean bien
    if (activeDevice === 'mobile' || activeDevice === 'tablet') return 800;
    // Desktop: Umbral alto (1400px) para que Dashboards/Sistemas se vean estáticos
    return 1400;
  };

  const shouldScroll = imageHeight > getScrollThreshold();

  const getContainerClass = () => {
    if (activeDevice === 'mobile') {
      return 'max-w-[280px] mx-auto'; // Móvil real (muy angosto)
    }
    if (activeDevice === 'tablet') {
      return 'max-w-sm mx-auto'; // Tablet más angosto
    }
    return 'max-w-xl mx-auto'; // Desktop normal
  };

  return (
    <div className="w-full">
      {/* Card con tabs integrados arriba */}
      <div className={getContainerClass()}>
        <div className="rounded-lg overflow-hidden bg-card/50 border border-border/40 shadow-sm">
          {/* Tabs dentro de la card */}
          <div className="flex justify-center gap-1 p-2 bg-muted/30 border-b border-border/20">
            {devices.map((device) => (
              <button
                key={device.key}
                onClick={() => setActiveDevice(device.key)}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-medium transition-all
                  ${activeDevice === device.key
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted/50'
                  }
                `}
              >
                {device.icon}
                <span className="hidden sm:inline text-[10px]">{device.label}</span>
              </button>
            ))}
          </div>

          {/* Visualizador: 1 imagen */}
          {false ? (
            /* Layout móvil: 2 verticales lado a lado */
            <div className="grid grid-cols-2 gap-1 p-3">
              {currentScreenshots.slice(0, 2).map((screenshot, idx) => (
                <div
                  key={idx}
                  className="group relative rounded overflow-hidden bg-muted/50 border border-border/20"
                >
                  <div className="relative h-[350px] overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.label || `Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[9px] font-medium text-white">{screenshot.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Layout normal: 1 imagen con scroll condicional */
            <div className="p-3">
              <div className="group relative rounded overflow-hidden bg-muted/50 border border-border/20">
                <div
                  className="relative overflow-hidden bg-muted/20 transition-all duration-300 flex flex-col items-center justify-center"
                  style={{ height: `${viewportHeight}px` }}
                >
                  <AnimatePresence mode="wait">
                    {currentImage && (
                      <motion.img
                        key={`${activeDevice}-${currentIndex}`}
                        src={currentImage.image}
                        alt={currentImage.label || 'Screenshot'}
                        className={`${shouldScroll
                          ? 'w-full h-auto object-cover object-top screenshot-scroll-stages absolute top-0 left-0'
                          : 'w-full h-full object-contain'
                          }`}
                        style={shouldScroll ? {
                          '--scroll-distance': `calc(100% - ${viewportHeight}px)`
                        } : {}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onLoad={(e) => setImageHeight(e.target.naturalHeight)}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Overlay con info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[10px] font-medium text-white">{currentImage?.label}</span>
                  </div>

                  {/* Indicador de scroll solo si es scrolleable */}
                  {shouldScroll && (
                    <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] text-white/80 flex items-center gap-0.5">
                      <svg className="w-2.5 h-2.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Scroll
                    </div>
                  )}
                </div>

                {/* Indicadores de carrusel */}
                {currentScreenshots.length > 1 && (
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    {currentScreenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`
                          w-1.5 h-1.5 rounded-full transition-all
                          ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/40 hover:bg-white/60'}
                        `}
                        aria-label={`Ver imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Contador solo si hay múltiples imágenes */}
              {currentScreenshots.length > 1 && (
                <div className="text-center mt-1.5 text-[9px] text-muted-foreground">
                  {currentIndex + 1} / {currentScreenshots.length}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const Experience = ({ onNext }) => {
  // Ordenar proyectos por fecha (más reciente primero)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <section id="experience" className="relative min-h-screen w-full bg-background py-16 md:py-24 px-4 md:px-6 overflow-y-auto">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Portafolio
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Proyectos Realizados</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-12 md:space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:left-1/2 md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-medium/50 before:to-transparent">
          {sortedProjects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Marker */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow z-10">
                <Code2 size={16} className="text-white" />
              </div>

              {/* Contenedor: Card + Screenshots */}
              <div className={`flex flex-col md:flex-row gap-6 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Card del Proyecto */}
                <motion.div
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'} ml-20 md:ml-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm h-full">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <time className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Calendar className="size-3" /> {project.date}
                        </time>
                        <Badge variant="secondary" className="bg-muted/50 text-[9px] md:text-[10px]">
                          {project.category === 'full-stack' ? 'Full Stack' :
                            project.category === 'mobile' ? 'Mobile' :
                              project.category === 'data-science' ? 'IA & Data' :
                                project.category === 'iot' ? 'IoT' :
                                  project.category === 'infrastructure' ? 'Infraestructura' :
                                    project.category === 'electronics' ? 'Electrónica' : 'Desarrollo'}
                        </Badge>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-display">{project.title}</h3>

                      <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-4">
                        {project.longDescription || project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-[9px] md:text-[10px] bg-background/50 border-border/60">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Enlaces */}
                      {(project.demoUrl || project.githubUrl || project.playStoreUrl) && (
                        <div className="flex flex-wrap gap-2 pt-3 md:pt-4 border-t border-border/20">
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" className="gap-2 text-xs flex-1 sm:flex-none" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github size={14} />
                                <span className="hidden sm:inline">GitHub</span>
                                <span className="sm:hidden">Repo</span>
                              </a>
                            </Button>
                          )}
                          {project.playStoreUrl && (
                            <Button size="sm" className="gap-2 text-xs flex-1 sm:flex-none" asChild>
                              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                                <Download size={14} />
                                <span className="hidden sm:inline">Descargar App</span>
                                <span className="sm:hidden">App</span>
                              </a>
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button size="sm" className="gap-2 text-xs flex-1 sm:flex-none" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                {project.demoUrl.includes('miro.com') ? <Palette size={14} /> : <ExternalLink size={14} />}
                                <span className="hidden sm:inline">
                                  {project.demoUrl.includes('miro.com') ? 'Diseño UI/UX' : 'Visitar Sitio'}
                                </span>
                                <span className="sm:hidden">
                                  {project.demoUrl.includes('miro.com') ? 'Diseño' : 'Visitar'}
                                </span>
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Screenshots del Proyecto */}
                {project.screenshotsByDevice && (
                  <motion.div
                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-6 lg:pl-8' : 'md:pr-6 lg:pr-8'} ml-20 md:ml-0`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <DeviceScreenshotViewer screenshotsByDevice={project.screenshotsByDevice} />
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
