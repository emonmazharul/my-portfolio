import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 bg-neutral-900 text-neutral-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">

        {/* Main Title - smaller + tighter */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-5">
          Building Reliable, Modern
          <br />
          <span className="text-teal-400">Full-Stack Web Applications</span>
        </h1>

        {/* Improved Summary */}
        <p className="text-base sm:text-lg font-body text-neutral-300 leading-relaxed mb-10">
          I'm a full-stack software engineer focused on building clean, efficient, 
          and scalable digital products. I work with{" "}
          <span className="text-teal-400 font-medium">
            React, TypeScript, and Tailwind CSS
          </span>{" "}
          to craft smooth, accessible front-end experiences, and use{" "}
          <span className="text-teal-400 font-medium">
            Node.js, Express, PostgreSQL, and MongoDB
          </span>{" "}
          to build solid, dependable back-end systems.  
          I enjoy turning ideas into practical, polished solutions that users love.
        </p>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
          bg-teal-500 hover:bg-teal-400 text-neutral-900
          text-base sm:text-lg font-heading font-semibold uppercase tracking-wide shadow-lg
          hover:shadow-teal-500/30 transition-transform duration-300 hover:scale-105"
        >
          <span>View My Projects</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
