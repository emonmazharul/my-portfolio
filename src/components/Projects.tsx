import React from "react";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-900 text-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12">
          Featured Projects
        </h2>

        {/* Project List */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFlipped={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
