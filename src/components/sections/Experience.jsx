import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

const Experience = ({ onNext }) => {
  return (
    <section id="experience" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Historial
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Experiencia Profesional</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-medium/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {exp.type === 'work' ? <Building2 size={16} className="text-white" /> : <CheckCircle2 size={16} className="text-white" />}
              </div>

              {/* Content */}
              <motion.div
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <time className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Calendar className="size-3" /> {exp.date}
                      </time>
                      <Badge variant="secondary" className="bg-muted/50 text-[10px]">
                        {exp.type === 'work' ? 'Profesional' : 'Académico'}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1 font-display">{exp.title}</h3>
                    <p className="text-sm font-medium text-primary/80 mb-3">{exp.role}</p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <MapPin className="size-3" />
                      <span>{exp.institution}</span>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="size-4 text-accent-tertiary shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-[10px] bg-background/50 border-border/60">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onNext}
            className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Siguiente: Mis Proyectos
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
