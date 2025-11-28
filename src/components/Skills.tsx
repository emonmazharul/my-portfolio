// src/components/Skills.tsx

import React from 'react';
import { skillsData } from '../data/skill';
import type { Skill } from '../data/skill';
// Import the data
// For demonstration, we'll use a placeholder icon from lucide-react
import { Zap } from 'lucide-react'; 

// Helper component for an individual skill card
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-electric-teal"
    >
      {/* Icon Placeholder (replace Zap with actual icon later) */}
      <skill.Icon className={`w-10 h-10 mb-3 ${skill.color} transition-transform duration-300 hover:scale-110`} />
      
      {/* Skill Name */}
      <p className="text-lg font-body font-semibold text-gray-800">{skill.name}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-gray-900 mb-12 border-b-4 border-electric-teal inline-block mx-auto pb-1">
          Tech Stack & Skills
        </h2>

        {/* Responsive Grid for Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;