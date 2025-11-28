import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-gray-900 mb-12 border-b-4 border-electric-teal inline-block mx-auto pb-1">
          Featured Projects
        </h2>

        {/* Project List */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              // Alternate layout based on index (0 is not flipped, 1 is flipped, 2 is not, etc.)
              isFlipped={index % 2 !== 0} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;