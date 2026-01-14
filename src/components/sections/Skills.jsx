import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ServerCog, Smartphone, DatabaseZap, GitBranch, Workflow, Sparkles, Cpu, Brain } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const iconMap = {
  Layout: Layout,
  ServerCog: ServerCog,
  Smartphone: Smartphone,
  DatabaseZap: DatabaseZap,
  GitBranch: GitBranch,
  Workflow: Workflow,
  Sparkles: Sparkles,
  Cpu: Cpu,
  Brain: Brain
};

const Skills = ({ onNext }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative min-h-screen w-full bg-background py-24 px-6 overflow-y-auto">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Expertise
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Layout;

            return (
              <motion.div key={category.id} variants={item}>
                <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <IconComponent size={24} />
                    </div>
                    <CardTitle className="text-lg font-bold">{category.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10"
                      >
                        <div className="flex items-center gap-3">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="size-5 object-contain"
                            />
                          ) : (
                            <div className="size-1.5 bg-primary/40 rounded-full group-hover:scale-125 transition-transform" />
                          )}
                          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-[10px] py-0 bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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

export default Skills;
