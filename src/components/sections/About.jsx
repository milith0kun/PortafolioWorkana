import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Mail, MapPin, GraduationCap, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

const About = ({ onNext }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { icon: <Github className="size-5" />, url: 'https://github.com/milith0kun', label: 'GitHub' },
    { icon: <Linkedin className="size-5" />, url: 'https://linkedin.com/in/edmilSaire', label: 'LinkedIn' },
    { icon: <Mail className="size-5" />, url: '#contact', label: 'Email' }
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Mi Trayectoria
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm sticky top-24">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent-tertiary blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                  <div className="relative size-32 md:size-40 rounded-full overflow-hidden border-4 border-background shadow-xl">
                    <img
                      src="/profile-photo.png"
                      alt="Edmil Jampier Saire Bustamante"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">Edmil Saire</h3>
                <p className="text-sm text-primary font-medium mb-6">Ingeniero de Sistemas e Informática</p>

                <div className="flex gap-3 mb-8">
                  {socialLinks.map((link, index) => (
                    <Button key={index} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all active:scale-90" asChild>
                      <a
                        href={link.url}
                        {...(link.url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>

                <Button className="w-full rounded-xl gap-2 shadow-lg shadow-primary/20" asChild>
                  <a href="/CV-Edmil-Saire.pdf" download>
                    <Download className="size-4" />
                    Descargar CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Ingeniero de Sistemas e Informática con sólidos conocimientos en <strong className="text-primary font-semibold">desarrollo Full Stack</strong> y fundamentos de inteligencia artificial.
                Experiencia práctica en desarrollo web con tecnologías modernas como JavaScript, React.js, Node.js, PHP, WordPress, gestión de bases de datos SQL Server, MySQL y PostgreSQL.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Especializado en crear soluciones web desde el frontend hasta el backend, con enfoque en la optimización de procesos y la implementación de sistemas escalables. Competencia en desarrollo de APIs RESTful, manejo de frameworks modernos y experiencia en herramientas de control de versiones como Git. Apasionado por la tecnología emergente, el aprendizaje continuo y la aplicación de IA en soluciones empresariales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <GraduationCap className="text-primary" />, title: "Educación", desc: "UNSAAC - Cusco" },
                { icon: <MapPin className="text-primary" />, title: "Ubicación", desc: "Cusco, Perú" },
                { icon: <Rocket className="text-primary" />, title: "Actual", desc: "Freelance / Director @ Ecos SEO" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border border-border/40 bg-accent/5">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h4 className="font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span className="size-2 bg-primary rounded-full" />
                Áreas de Especialización
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Desarrollo Full Stack (MERN/PERN)",
                  "Desarrollo Móvil Multiplataforma",
                  "Sistemas RAG con IA (GPT-4)",
                  "Infraestructura Cloud (AWS)",
                  "IoT & Sistemas Embebidos",
                  "Optimización SEO"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/20">
                    <div className="size-1.5 bg-primary/40 rounded-full" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="ghost"
                onClick={onNext}
                className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary p-0"
              >
                Siguiente: Experiencia
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
