import React, { useState } from 'react';
import { Github, Linkedin, Mail, Heart, Code2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isGithubExpanded, setIsGithubExpanded] = useState(false);

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/milith0kun', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/edmilSaire', label: 'LinkedIn' },
    { icon: <Mail size={18} />, url: '#contact', label: 'Email' }
  ];

  return (
    <footer className="relative w-full bg-card border-t border-border/40 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <Code2 size={24} className="text-primary" />
              <span className="font-display font-bold text-xl tracking-tight">Edmil Saire</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Ingeniero de Sistemas apasionado por el desarrollo de software de alta calidad, combinando diseño intuitivo con arquitecturas robustas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
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
          </div>

          {/* Contacto Directo */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contacto</h4>
            <div className="space-y-2">
              <a href="mailto:174449@unsaac.edu.pe" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                174449@unsaac.edu.pe
              </a>
              <a href="tel:+51901246936" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                +51 901 246 936
              </a>
              <p className="text-sm text-muted-foreground">Cusco, Perú</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="md:col-span-3 space-y-4 text-right md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Inspiración</h4>
            <p className="text-[10px] text-muted-foreground font-mono leading-relaxed italic">
              "El código es poesía escrita para ser entendida por máquinas, pero apreciada por humanos."
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            © {currentYear} Edmil Saire. Reservados todos los derechos.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            Hecho con <Heart size={10} className="text-primary animate-pulse fill-primary" /> usando React & Tailwind
          </div>
        </div>
      </div>

      {/* GitHub Profile Widget - Minimizado flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isGithubExpanded ? (
            <motion.button
              onClick={() => setIsGithubExpanded(true)}
              className="group relative size-12 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all overflow-hidden border-2 border-background"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/github-profile.png"
                alt="GitHub"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.button>
          ) : (
            <motion.div
              className="bg-card/95 backdrop-blur-lg border border-border/40 rounded-2xl shadow-2xl p-6 w-80"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src="/github-profile.png"
                      alt="Edmil Saire - GitHub"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Edmil Saire</h4>
                    <p className="text-xs text-muted-foreground">@milith0kun</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsGithubExpanded(false)}
                  className="size-8 rounded-full hover:bg-muted/50 transition-colors flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-sm text-foreground/80 mb-4">
                Ingeniero de Sistemas e Informática
              </p>

              <Button
                asChild
                className="w-full rounded-full gap-2"
              >
                <a href="https://github.com/milith0kun" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  Ver Perfil en GitHub
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
