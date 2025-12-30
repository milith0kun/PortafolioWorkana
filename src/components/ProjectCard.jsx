import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    setImageError(true);
  };

  const getProjectIcon = () => {
    if (project.category === 'mobile') return <Smartphone className="size-12 opacity-20" />;
    return <Globe className="size-12 opacity-20" />;
  };

  return (
    <Card className="group overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={handleImageError}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-tertiary">
            {getProjectIcon()}
            <span className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-widest leading-none text-center px-4">
              {project.title}
            </span>
          </div>
        )}

        {project.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none px-3 font-bold">
              Destacado
            </Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
          {/* Overlay content optional */}
        </div>
      </div>

      <CardHeader className="p-5 pb-0">
        <CardTitle className="text-xl font-display font-bold group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 pt-3 flex-grow">
        <p className="text-sm text-foreground/70 line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/5 text-primary border-primary/10 text-[10px] py-0">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="bg-bg-tertiary text-text-tertiary border-transparent text-[10px] py-0">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-3">
        {project.demoUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1 rounded-full text-xs font-bold"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 size-3" />
              Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 rounded-full text-xs font-bold border-border/60 hover:border-primary/40"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-3" />
              Código
            </a>
          </Button>
        )}
        {!project.demoUrl && !project.githubUrl && (
          <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground italic w-full text-center py-2 bg-muted/50 rounded-lg">
            Proyecto Privado
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
