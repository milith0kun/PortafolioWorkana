import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/edmilsaire', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/edmilSaire', label: 'LinkedIn' },
    { icon: <Mail size={18} />, url: 'mailto:174449@unsaac.edu.pe', label: 'Email' }
  ];

  return (
    <footer className="w-full bg-card border-t border-border/40 py-12 px-6">
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
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
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
    </footer>
  );
};

export default Footer;
