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

  // Resetear al abrir y bloquear scroll
  useEffect(() => {
    if (isOpen) {
      // Determinar el dispositivo inicial
      if (screenshotsByDevice?.desktop?.length > 0) setActiveDevice('desktop');
      else if (screenshotsByDevice?.tablet?.length > 0) setActiveDevice('tablet');
      else if (screenshotsByDevice?.mobile?.length > 0) setActiveDevice('mobile');
      setCurrentIndex(0);

      // Prevenir scroll del body y html - más robusto
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restaurar scroll
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
      // Cleanup
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, screenshotsByDevice]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Navegación con flechas
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

  // Cambiar dispositivo y resetear índice
  const changeDevice = (deviceKey) => {
    setActiveDevice(deviceKey);
    setCurrentIndex(0);
  };

  // Usar Portal para renderizar fuera del árbol de componentes
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
          {/* Backdrop oscuro */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Botón de cerrar flotante - MÁS VISIBLE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-2xl hover:scale-110"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          {/* Contenido del Modal */}
          <motion.div
            className="relative z-10 w-full max-w-7xl mx-4 max-h-[95vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-t-2xl border-b border-white/10">
              <div className="flex items-center gap-3">
                <Eye size={20} className="text-primary" />
                <h3 className="text-white font-bold text-lg truncate max-w-[300px] md:max-w-none">
                  {projectTitle}
                </h3>
              </div>

              {/* Tabs de dispositivos */}
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

              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Área de la imagen */}
            <div className="relative flex-1 bg-zinc-950/50 overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              {/* Flechas de navegación */}
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

              {/* Imagen principal con animación */}
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
                    {/* Marco del dispositivo */}
                    <div className={`
                      relative rounded-lg overflow-hidden shadow-2xl
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
                        className="w-full h-auto object-contain"
                        loading="eager"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer del Modal */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-b-2xl border-t border-white/10">
              {/* Label de la imagen */}
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm">Vista:</span>
                <span className="text-white font-medium">{currentImage?.label || 'Screenshot'}</span>
              </div>

              {/* Indicadores de página */}
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

              {/* Instrucciones */}
              <div className="hidden md:flex items-center gap-2 text-white/40 text-xs">
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">→</kbd>
                <span>navegar</span>
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] ml-2">ESC</kbd>
                <span>cerrar</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Renderizar usando Portal para que aparezca fuera del contenedor scrollable
  return createPortal(modalContent, document.body);
};

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
const DeviceScreenshotViewer = ({ screenshotsByDevice, onOpenLightbox }) => {
  const [activeDevice, setActiveDevice] = useState(() => {
    if (screenshotsByDevice.desktop && screenshotsByDevice.desktop.length > 0) return 'desktop';
    if (screenshotsByDevice.tablet && screenshotsByDevice.tablet.length > 0) return 'tablet';
    if (screenshotsByDevice.mobile && screenshotsByDevice.mobile.length > 0) return 'mobile';
    return 'desktop';
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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

  // Carrusel automático cada 10 segundos (sincronizado con scroll de 10s)
  useEffect(() => {
    if (currentScreenshots.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentScreenshots.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeDevice, currentScreenshots.length]);

  // Reset index al cambiar dispositivo
  useEffect(() => {
    setCurrentIndex(0);
    setImageHeight(0);
    setIsImageLoaded(false);
  }, [activeDevice]);

  // Reset carga al cambiar de imagen
  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentIndex]);

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
    // Desktop: Umbral alto (1000px). Evita que casi todas las capturas de pantalla de laptop se muevan.
    return 1000;
  };

  const shouldScroll = !currentImage?.disableScroll && (imageHeight > getScrollThreshold());

  const getContainerClass = () => {
    if (activeDevice === 'mobile') {
      return 'max-w-[280px] w-full mx-auto rounded-[2rem] border-4 border-zinc-800 shadow-xl';
    }
    if (activeDevice === 'tablet') {
      return 'max-w-[500px] w-full mx-auto rounded-xl border-2 border-zinc-700 shadow-lg';
    }
    // Desktop: Marco estilo monitor (Rectangular con borde grueso y sombra)
    return 'w-full rounded-xl border-4 border-zinc-800 shadow-2xl bg-zinc-950';
  };

  // Ref para detectar visibilidad y reiniciar animación
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <div ref={containerRef} className={`mt-6 ${getContainerClass()} overflow-hidden`}>
      <AnimatePresence mode="wait">
        {/* Renderizado condicional para Grid de Escritorio vs Scroll/Carrusel Único */}
        {/* Para simplificar y mantener consistencia visual, usaremos el carrusel único para todo por ahora,
            pero adaptado al dispositivo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Si es Desktop y tiene MÚLTIPLES imágenes que se benefician de grid... No, el usuario prefiere carrusel.
              Mantendremos el carrusel pero con scroll inteligente. */}

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
              <div
                className="group relative rounded overflow-hidden bg-zinc-900/50 border border-border/20 cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                onClick={onOpenLightbox}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.()}
              >
                <div
                  className="relative overflow-hidden bg-zinc-900/50 transition-all duration-300 flex flex-col items-center justify-center"
                  style={{
                    height: (activeDevice === 'desktop' && currentImage?.disableScroll)
                      ? 'auto'
                      : `${viewportHeight}px`
                  }}
                >
                  <AnimatePresence mode="wait">
                    {currentImage && (
                      <motion.img
                        key={`${activeDevice}-${currentIndex}`}
                        src={currentImage.image}
                        alt={currentImage.label || 'Screenshot'}
                        className={`${shouldScroll && isInView
                          ? 'w-full h-auto object-cover object-top screenshot-scroll-stages absolute top-0 left-0'
                          : (activeDevice === 'desktop' && currentImage?.disableScroll)
                            ? 'w-full h-auto object-contain'
                            : 'w-full h-full object-contain'
                          }`}
                        style={shouldScroll ? {
                          '--scroll-distance': `calc(100% - ${viewportHeight}px)`
                        } : undefined}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        decoding="async"
                        onLoad={(e) => setImageHeight(e.target.naturalHeight)}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Overlay con info y botón de expandir */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[10px] font-medium text-white">{currentImage?.label}</span>
                  </div>

                  {/* Botón de expandir/maximizar */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <div className="p-3 bg-primary/90 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={24} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Ver en grande
                    </span>
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
                  <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                    {currentScreenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        className={`
                          w-2.5 h-2.5 rounded-full transition-all cursor-pointer
                          ${idx === currentIndex ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/70'}
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


const Experience = ({ onNext }) => {
  // Estado para el modal de lightbox
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    project: null
  });

  // Ordenar proyectos por fecha (más reciente primero)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  // Función para manejar clic en screenshot
  const handleScreenshotClick = (project) => {
    // Si tiene demoUrl, redirigir directamente
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    } else if (project.screenshotsByDevice) {
      // Si no tiene demoUrl pero tiene screenshots, abrir lightbox
      setLightboxState({
        isOpen: true,
        project: project
      });
    }
  };

  // Cerrar lightbox
  const closeLightbox = () => {
    setLightboxState({
      isOpen: false,
      project: null
    });
  };

  return (
    <>
      {/* Modal Lightbox */}
      <ScreenshotLightbox
        key={lightboxState.project?.title || 'lightbox'}
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        screenshotsByDevice={lightboxState.project?.screenshotsByDevice}
        projectTitle={lightboxState.project?.title}
      />

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

          {/* Línea vertical: Oculta en móvil, visible en md+ */}
          <div className="relative space-y-12 md:space-y-16 before:hidden md:before:block before:absolute before:inset-0 md:before:left-[40%] md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-medium/50 before:to-transparent">
            {sortedProjects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Marker: Oculto en móvil */}
                <div className="hidden md:flex absolute md:left-[40%] md:-translate-x-1/2 top-4 md:top-6 items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-background bg-primary shadow z-10 transition-transform hover:scale-110">
                  <Code2 size={16} className="text-white" />
                </div>

                {/* Contenedor: Card + Screenshots */}
                <div className={`flex flex-col md:flex-row gap-6 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Card del Proyecto */}
                  <motion.div
                    className={`md:w-[40%] ${index % 2 === 0 ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'} ml-0`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
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
                      className={`md:w-[60%] ${index % 2 === 0 ? 'md:pl-6 lg:pl-8' : 'md:pr-6 lg:pr-8'} ml-0`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <DeviceScreenshotViewer
                        screenshotsByDevice={project.screenshotsByDevice}
                        onOpenLightbox={() => handleScreenshotClick(project)}
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
