import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ServerCog, Smartphone, DatabaseZap, GitBranch, Workflow, Sparkles } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import NextSectionButton from '../ui/NextSectionButton';
import './Skills.css';

const iconMap = {
  Layout: Layout,
  ServerCog: ServerCog,
  Smartphone: Smartphone,
  DatabaseZap: DatabaseZap,
  GitBranch: GitBranch,
  Workflow: Workflow,
  Sparkles: Sparkles
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle 
          title="Habilidades Técnicas" 
          subtitle="Tecnologías y herramientas con las que trabajo"
        />

        <motion.div 
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon];
            
            return (
              <motion.div key={category.id} variants={item}>
                <Card className="skills-card">
                  <div className="skills-card-header">
                    <div className="skills-card-icon">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="skills-card-title">{category.name}</h3>
                  </div>
                  
                  <div className="skills-card-content">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skills-item"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="skills-item-info">
                          {skill.icon && (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="skills-item-icon"
                            />
                          )}
                          <span className="skills-item-name">{skill.name}</span>
                        </div>
                        <span className="skills-item-level">{skill.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <NextSectionButton onClick={onNext} />
    </section>
  );
};

export default Skills;
