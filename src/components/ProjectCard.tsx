import React from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  isFlipped: boolean;
}

const ProjectCard: React.FC<Props> = ({ project, isFlipped }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-10 ${
        isFlipped ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg border border-neutral-700 hover:shadow-teal-500/20 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold">
          {project.title}
        </h3>

        <p className="text-neutral-300 font-body">{project.description}</p>

        <ul className="list-disc list-inside text-neutral-400 font-body space-y-1">
          {project.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm font-body text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-neutral-900 font-heading font-semibold hover:bg-teal-400 transition"
          >
            Live Demo <ExternalLink size={18} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-600 hover:border-teal-400 font-heading"
          >
            GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
