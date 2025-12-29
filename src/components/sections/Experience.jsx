import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import NextSectionButton from '../ui/NextSectionButton';
import BrandMark from '../ui/BrandMark';
import './Experience.css';

const Experience = ({ onNext }) => {
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section experience">
      <BrandMark variant="corner" position="left" />
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
                <div className="experience-card-content">
                  <div className="experience-card-header">
                    <div className="experience-card-badge">
                      <Building2 size={16} />
                      <span>{exp.type === 'work' ? 'Trabajo' : 'Académico'}</span>
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

                {exp.images && exp.images.length > 0 && (
                  <div className="experience-card-images">
                    <div className="experience-images-collage">
                      {exp.images.map((image, idx) => (
                        <div key={idx} className={`experience-image-wrapper experience-image-${idx + 1}`}>
                          <div className="experience-image-placeholder">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>Screenshot {idx + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
