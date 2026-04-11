import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calendar, Code2, ExternalLink, Github, Monitor, Smartphone, Tablet, Layout, Palette, Download, X, ChevronLeft, ChevronRight, Maximize2, Eye } from 'lucide-react';
import { projects } from '../../data/projects';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// =====================================================
// MODAL LIGHTBOX PARA VER SCREENSHOTS EN GRANDE
// =====================================================
const ScreenshotLightbox = ({ isOpen, onClose, screenshotsByDevice, projectTitle }) => {
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      if (screenshotsByDevice?.desktop?.length > 0) setActiveDevice('desktop');
      else if (screenshotsByDevice?.tablet?.length > 0) setActiveDevice('tablet');
      else if (screenshotsByDevice?.mobile?.length > 0) setActiveDevice('mobile');
      setCurrentIndex(0);

      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, screenshotsByDevice]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleKeyNav = useCallback((e) => {
    const screenshots = screenshotsByDevice?.[activeDevice] || [];
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  }, [activeDevice, screenshotsByDevice]);

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [isOpen, handleKeyNav]);

  if (!isOpen || !screenshotsByDevice) return null;

  const allDevices = [
    { key: 'desktop', label: 'Desktop', icon: <Monitor size={18} /> },
    { key: 'tablet', label: 'Tablet', icon: <Tablet size={18} /> },
    { key: 'mobile', label: 'Móvil', icon: <Smartphone size={18} /> }
  ];

  const devices = allDevices.filter(device =>
    screenshotsByDevice[device.key] && screenshotsByDevice[device.key].length > 0
  );

  const currentScreenshots = screenshotsByDevice[activeDevice] || [];
  const currentImage = currentScreenshots[currentIndex];

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % currentScreenshots.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + currentScreenshots.length) % currentScreenshots.length);

  const changeDevice = (deviceKey) => {
    setActiveDevice(deviceKey);
    setCurrentIndex(0);
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-2xl hover:scale-110"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          <motion.div
            className="relative z-10 w-full max-w-7xl mx-4 max-h-[95vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-t-2xl border-b border-white/10">
              <div className="flex items-center gap-3">
                <Eye size={20} className="text-primary" />
                <h3 className="text-white font-bold text-lg truncate max-w-[300px] md:max-w-none">
                  {projectTitle}
                </h3>
              </div>

              <div className="flex items-center gap-1 bg-zinc-800/50 rounded-lg p-1">
                {devices.map((device) => (
                  <button
                    key={device.key}
                    onClick={() => changeDevice(device.key)}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all
                      ${activeDevice === device.key
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {device.icon}
                    <span className="hidden sm:inline">{device.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative flex-1 bg-zinc-950/50 overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              {currentScreenshots.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-2 md:left-4 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-2 md:right-4 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                {currentImage && (
                  <motion.div
                    key={`${activeDevice}-${currentIndex}`}
                    className={`
                      relative overflow-auto max-h-[70vh] flex items-start justify-center
                      ${activeDevice === 'mobile' ? 'max-w-[320px]' : activeDevice === 'tablet' ? 'max-w-[600px]' : 'max-w-full'}
                    `}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`
                      relative rounded-lg overflow-hidden shadow-2xl isolate
                      ${activeDevice === 'mobile'
                        ? 'border-[8px] border-zinc-800 rounded-[2.5rem]'
                        : activeDevice === 'tablet'
                          ? 'border-[6px] border-zinc-700 rounded-2xl'
                          : 'border-4 border-zinc-800 rounded-xl'
                      }
                    `}>
                      <img
                        src={currentImage.image}
                        alt={currentImage.label || 'Screenshot'}
                        className="w-full h-auto object-contain rounded-[inherit]"
                        loading="eager"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-b-2xl border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm">Vista:</span>
                <span className="text-white font-medium">{currentImage?.label || 'Screenshot'}</span>
              </div>

              {currentScreenshots.length > 1 && (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {currentScreenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`
                          w-2 h-2 rounded-full transition-all
                          ${idx === currentIndex
                            ? 'bg-primary w-6'
                            : 'bg-white/30 hover:bg-white/50'
                          }
                        `}
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm font-mono">
                    {currentIndex + 1} / {currentScreenshots.length}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

const getIcon = (iconType) => {
  const icons = {
    monitor: <Monitor size={14} />,
    smartphone: <Smartphone size={14} />,
    tablet: <Tablet size={14} />,
    layout: <Layout size={14} />
  };
  return icons[iconType] || null;
};

// Componente de visualización REFORMADO para evitar desbordamiento
const DeviceScreenshotViewer = ({ screenshotsByDevice, onOpenLightbox, isRightSide = true }) => {
  const [activeDevice, setActiveDevice] = useState(() => {
    if (screenshotsByDevice.desktop && screenshotsByDevice.desktop.length > 0) return 'desktop';
    if (screenshotsByDevice.tablet && screenshotsByDevice.tablet.length > 0) return 'tablet';
    if (screenshotsByDevice.mobile && screenshotsByDevice.mobile.length > 0) return 'mobile';
    return 'desktop';
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [containerInnerHeight, setContainerInnerHeight] = useState(0);

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

  useEffect(() => {
    if (!currentScreenshots.length || activeDevice === 'desktop') return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentScreenshots.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeDevice, currentScreenshots.length]);

  useEffect(() => {
    setCurrentIndex(0);
    setImageHeight(0);
    setContainerInnerHeight(0);
  }, [activeDevice]);

  if (!screenshotsByDevice) return null;

  const shouldScroll = !currentImage?.disableScroll && (imageHeight > containerInnerHeight + 5);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <div ref={containerRef} className={`relative flex-1 flex flex-col justify-center transition-all duration-500 ${
      activeDevice === 'desktop'
        ? isRightSide 
          ? "w-full md:w-[125%] lg:w-[140%] xl:w-[160%]" 
          : "w-full md:w-[125%] lg:w-[140%] xl:w-[160%] md:-ml-[25%] lg:-ml-[40%] xl:-ml-[60%]"
        : "w-full"
    }`}>
      <div className="absolute top-0 md:-top-10 left-1/2 -translate-x-1/2 flex justify-center gap-1.5 z-30 w-full mb-0 pb-2 md:pb-0">
        {devices.map((device) => (
          <button
            key={device.key}
            onClick={() => setActiveDevice(device.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
              activeDevice === device.key ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground bg-muted/40 hover:bg-muted/70'
            }`}
          >
            {device.icon}
            <span className="hidden sm:inline">{device.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeDevice}
          className="mt-12 md:mt-0 flex-1 w-full flex flex-col min-h-[300px] md:min-h-0 items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          {activeDevice === 'desktop' && (
            <div className="w-full aspect-video md:aspect-[16/11] flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-700/50">
              <div className="bg-zinc-800 px-3 py-2 flex items-center gap-2 border-b border-zinc-700/50 shrink-0 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-zinc-700/40 rounded px-3 py-0.5 text-[9px] text-zinc-400 font-mono truncate text-center">
                  {currentImage?.label || 'Portfolio Viewer'}
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden group cursor-pointer" onClick={onOpenLightbox}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeDevice}-${currentIndex}`}
                    src={currentImage?.image}
                    alt="Screenshot"
                    className={`w-full ${shouldScroll && isInView ? 'absolute top-0 left-0 h-auto screenshot-scroll-stages' : 'h-full object-contain'}`}
                    style={shouldScroll ? { '--scroll-distance': `calc(100% - ${containerInnerHeight}px)` } : undefined}
                    onLoad={(e) => {
                      setContainerInnerHeight(e.target.parentElement.clientHeight);
                      setImageHeight(e.target.naturalHeight * (e.target.parentElement.clientWidth / e.target.naturalWidth));
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-primary rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDevice === 'mobile' && (
            <div className="max-w-[260px] w-full aspect-[9/18.5] relative rounded-[3rem] ring-[10px] ring-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-24 h-6 bg-zinc-800 rounded-b-2xl" />
              <div className="absolute inset-0 overflow-hidden cursor-pointer group" onClick={onOpenLightbox}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeDevice}-${currentIndex}`}
                    src={currentImage?.image}
                    alt="Mobile Screen"
                    className={`w-full ${shouldScroll && isInView ? 'absolute top-0 left-0 h-auto screenshot-scroll-stages' : 'h-full object-cover'}`}
                    style={shouldScroll ? { '--scroll-distance': `calc(100% - ${containerInnerHeight}px)` } : undefined}
                    onLoad={(e) => {
                      setContainerInnerHeight(e.target.parentElement.clientHeight);
                      setImageHeight(e.target.naturalHeight * (e.target.parentElement.clientWidth / e.target.naturalWidth));
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-700 rounded-full z-30" />
            </div>
          )}

          {activeDevice === 'tablet' && (
            <div className="max-w-[420px] w-full aspect-[3/4] relative rounded-2xl ring-[8px] ring-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
              <div className="absolute inset-0 overflow-hidden cursor-pointer" onClick={onOpenLightbox}>
                <img src={currentImage?.image} className="w-full h-full object-cover" alt="Tablet Screen" />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {currentScreenshots.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {currentScreenshots.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-4' : 'bg-zinc-600'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const Experience = ({ onNext }) => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    project: null
  });

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const handleScreenshotClick = (project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    } else if (project.screenshotsByDevice) {
      setLightboxState({
        isOpen: true,
        project: project
      });
    }
  };

  const closeLightbox = () => {
    setLightboxState({
      isOpen: false,
      project: null
    });
  };

  return (
    <>
      <ScreenshotLightbox
        key={lightboxState.project?.title || 'lightbox'}
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        screenshotsByDevice={lightboxState.project?.screenshotsByDevice}
        projectTitle={lightboxState.project?.title}
      />

      <section id="experience" className="relative min-h-screen w-full bg-background py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto max-w-[1700px] relative">
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

          <div className="relative space-y-24 md:space-y-40 before:hidden md:before:block before:absolute before:inset-0 md:before:left-1/2 md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-medium/50 before:to-transparent pt-8 pb-16">
            {sortedProjects.map((project, index) => (
              <div key={project.id} className="relative">
                <div className="hidden md:flex absolute md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-background bg-primary shadow z-10 transition-transform hover:scale-110">
                  <Code2 size={16} className="text-white" />
                </div>

                <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div
                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12'} ml-0`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm h-full">
                      <CardContent className="p-4 md:p-6 flex flex-col h-full">
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

                        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-4 flex-1">
                          {project.longDescription || project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-[9px] md:text-[10px] bg-background/50 border-border/60">
                              {tech}
                            </Badge>
                          ))}
                        </div>

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

                  {project.screenshotsByDevice && (
                    <motion.div
                      className={`md:w-1/2 flex flex-col self-stretch justify-center ${index % 2 === 0 ? 'md:pl-10 lg:pl-12' : 'md:pr-10 lg:pr-12'} ml-0`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <DeviceScreenshotViewer
                        screenshotsByDevice={project.screenshotsByDevice}
                        onOpenLightbox={() => handleScreenshotClick(project)}
                        isRightSide={index % 2 === 0}
                      />
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
    </>
  );
};

export default Experience;
