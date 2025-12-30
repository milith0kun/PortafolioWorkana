import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { certifications } from '../../data/experience';

const Certifications = ({ onNext }) => {
  return (
    <section id="certifications" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Validaciones
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Certificaciones</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm group hover:border-primary/30 transition-all flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  {cert.score && (
                    <Badge variant="outline" className="text-[10px] font-mono border-primary/20 text-primary">
                      {cert.score}
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="flex-grow space-y-2">
                  <CardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                    {cert.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/10 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-[10px] text-primary/70 font-mono">
                      <CheckCircle2 className="size-3" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="p-8 rounded-2xl border border-border/30 bg-accent/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
            <span className="size-1.5 bg-primary rounded-full" />
            Reconocimientos Adicionales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Capacitación en Procesos Electorales - ONPE",
              "Sistemas de Información Electoral - ONPE",
              "Tecnologías Aplicadas a Procesos Democráticos - ONPE",
              "Colaboración en proyectos gubernamentales de alta escala"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-foreground/70 bg-background/40 p-3 rounded-lg border border-border/10">
                <CheckCircle2 className="size-4 text-accent-tertiary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onNext}
            className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Siguiente: Contacto
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

export default Certifications;
