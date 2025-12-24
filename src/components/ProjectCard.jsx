import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import Badge from './ui/Badge';
import Card from './ui/Card';
import Button from './ui/Button';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    setImageError(true);
  };

  // Determinar el tipo de proyecto para el icono
  const getProjectIcon = () => {
    if (project.category === 'mobile') return <Smartphone size={64} />;
    return <Globe size={64} />;
  };

  return (
    <Card className="project-card">
      <div className="project-card-image">
        {!imageError && project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="project-card-image-placeholder">
            {getProjectIcon()}
            <span className="project-card-placeholder-text">{project.title}</span>
          </div>
        )}
        {project.featured && (
          <div className="project-card-featured">
            <span>Destacado</span>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-tech">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="neutral">{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="neutral">+{project.technologies.length - 4}</Badge>
          )}
        </div>

        <div className="project-card-actions">
          {project.demoUrl && (
            <Button 
              variant="primary" 
              size="sm"
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink size={16} />}
            >
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Github size={16} />}
            >
              Código
            </Button>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <span className="project-card-private">Proyecto Privado</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
