import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import NextSectionButton from '../ui/NextSectionButton';
import './Experience.css';

const Experience = ({ onNext }) => {
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle 
          title="Experiencia" 
          subtitle="Proyectos y trabajos destacados"
        />

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${index % 2 === 0 ? 'experience-item-left' : 'experience-item-right'}`}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="experience-marker">
                <div className="experience-marker-dot"></div>
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="experience-card-badge">
                    <Building2 size={16} />
                    <span>{exp.type === 'project' ? 'Proyecto' : 'Académico'}</span>
                  </div>
                  <div className="experience-card-date">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <h3 className="experience-card-title">{exp.title}</h3>
                <p className="experience-card-role">{exp.role}</p>
                
                <div className="experience-card-institution">
                  <MapPin size={16} />
                  <span>{exp.institution}</span>
                </div>

                <p className="experience-card-description">
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="experience-card-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="experience-card-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="neutral">{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <NextSectionButton onClick={onNext} />
    </section>
  );
};

export default Experience;
