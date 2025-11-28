import React from "react";
import { skillsData } from "../data/skill";
import type { Skill } from "../data/skill";

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div
      className="flex flex-col items-center p-6 bg-neutral-800 rounded-xl 
      shadow-lg border border-neutral-700 hover:border-teal-400 
      hover:shadow-teal-500/20 transition-all duration-300"
    >
      <skill.Icon
        className={`w-12 h-12 mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
      />

      <p className="text-lg font-body font-medium text-neutral-200">
        {skill.name}
      </p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-900 text-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12">
          Tech Stack & Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
