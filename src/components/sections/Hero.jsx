import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, ArrowRight, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const Hero = ({ onNext }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const socialLinks = [
    { icon: <Github className="size-5" />, url: 'https://github.com/edmilsaire', label: 'GitHub' },
    { icon: <Linkedin className="size-5" />, url: 'https://linkedin.com/in/edmilSaire', label: 'LinkedIn' },
    { icon: <Mail className="size-5" />, url: 'mailto:174449@unsaac.edu.pe', label: 'Email' }
  ];

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent-tertiary/5 blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-8 px-4 py-1.5 gap-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
            <Sparkles className="size-4" />
            <span>Freelance Disponible</span>
          </Badge>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Edmil Jampier <br />
          <span className="text-primary">Saire Bustamante</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-medium text-muted-foreground mb-8"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Ingeniero de Sistemas e Informática
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          Desarrollador Full Stack especializado en arquitecturas escalables,
          desarrollo móvil multiplataforma y soluciones cloud.
          Transformando ideas complejas en experiencias digitales excepcionales.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-95"
            onClick={onNext}
          >
            Ver Proyectos
            <ArrowRight className="ml-2 size-5" />
          </Button>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all active:scale-90"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={onNext}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
