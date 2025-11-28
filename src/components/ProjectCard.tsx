import React from 'react';
import type { Project } from '../data/projects';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  // Optional prop to alternate the image/text layout for visual interest
  isFlipped?: boolean; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFlipped = false }) => {
  
  // Define the Tailwind class order for the grid based on the 'isFlipped' prop
  const contentOrder = isFlipped ? 'order-2 md:order-1' : 'order-2 md:order-2';
  const imageOrder = isFlipped ? 'order-1 md:order-2' : 'order-1 md:order-1';

  return (
    <article className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="md:grid md:grid-cols-2">
        
        {/* 1. Project Image */}
        <div className={`p-4 ${imageOrder}`}>
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-auto rounded-lg shadow-lg object-cover border border-gray-200 transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* 2. Project Details */}
        <div className={`p-6 md:p-8 flex flex-col justify-center ${contentOrder}`}>
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
            {project.title}
          </h3>
          
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-electric-teal/10 text-electric-teal border border-electric-teal/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links (Live URL and GitHub) */}
          <div className="flex space-x-4 mt-2">
            
            {/* Live Demo Link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-electric-teal px-4 py-2 rounded-lg font-heading font-semibold hover:bg-teal-500 transition duration-300 transform hover:scale-105 shadow-md"
            >
              <Globe className="w-4 h-4" />
              <span>Live Demo</span>
            </a>

            {/* GitHub Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-heading font-semibold hover:border-electric-teal hover:text-electric-teal transition duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;