import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import NextSectionButton from '../ui/NextSectionButton';
import { certifications } from '../../data/experience';
import './Certifications.css';

const Certifications = ({ onNext }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <SectionTitle
          title="Certificaciones"
          subtitle="Certificaciones profesionales y cursos completados"
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="certification-card">
                <div className="certification-card-header">
                  <div className="certification-card-icon">
                    <Award size={24} />
                  </div>
                  {cert.score && (
                    <Badge variant="primary">Nota: {cert.score}</Badge>
                  )}
                </div>

                <h3 className="certification-card-title">{cert.name}</h3>
                <p className="certification-card-issuer">{cert.issuer}</p>

                <div className="certification-card-footer">
                  <div className="certification-card-date">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="certification-card-id">
                      <CheckCircle2 size={16} />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications-additional"
          {...fadeInUp}
        >
          <h4>Certificados de Trabajo</h4>
          <ul>
            <li>Capacitación en Procesos Electorales - ONPE (2024)</li>
            <li>Sistemas de Información Electoral - ONPE (2024)</li>
            <li>Tecnologías Aplicadas a Procesos Democráticos - ONPE (2023)</li>
          </ul>
        </motion.div>
      </div>
      <NextSectionButton onClick={onNext} />
    </section>
  );
};

export default Certifications;
