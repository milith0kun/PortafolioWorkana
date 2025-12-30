import React, { useState } from 'react';
import { FileDown, Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, setActiveSection, isScrolled, isVisible = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goToSection = (index) => {
    setActiveSection(index);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { index: 0, label: 'Inicio' },
    { index: 1, label: 'Sobre mí' },
    { index: 2, label: 'Habilidades' },
    { index: 3, label: 'Experiencia' },
    { index: 4, label: 'Proyectos' },
    { index: 5, label: 'Certificaciones' },
    { index: 6, label: 'Contacto' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/40" : "py-6 bg-transparent",
        (!isVisible && !isMobileMenuOpen) && "-translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => goToSection(0)}
        >
          <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Code2 size={24} className="text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Edmil.dev</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.index}>
                <button
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    activeSection === item.index ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => goToSection(item.index)}
                >
                  {item.label}
                  {activeSection === item.index && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            asChild
            className="hidden sm:flex rounded-full gap-2 px-6"
          >
            <a href="/CV-Edmil-Saire.pdf" download>
              <FileDown size={16} />
              <span>CV</span>
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[73px] right-0 bottom-0 w-3/4 max-w-sm bg-card border-l border-border/40 z-50 md:hidden p-8"
            >
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.index}>
                    <button
                      className={cn(
                        "text-2xl font-display font-medium transition-colors w-full text-left",
                        activeSection === item.index ? "text-primary" : "text-muted-foreground"
                      )}
                      onClick={() => goToSection(item.index)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="pt-8">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="w-full rounded-xl gap-2"
                  >
                    <a href="/CV-Edmil-Saire.pdf" download>
                      <FileDown size={20} />
                      <span>Descargar CV</span>
                    </a>
                  </Button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
