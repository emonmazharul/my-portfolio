import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4 border-b-4 border-electric-teal inline-block mx-auto pb-1">
          Get In Touch
        </h2>

        {/* Call to Action */}
        <p className="text-xl font-body text-gray-700 mb-10">
          I'm currently seeking new opportunities! Feel free to reach out to discuss potential roles or exciting projects.
        </p>

        {/* Contact Links Grid */}
        <div className="flex justify-center space-x-6 sm:space-x-10">
          
          {/* Email Link */}
          <a
            href="mailto:YOUR_EMAIL@example.com" // REPLACE ME
            className="flex flex-col items-center group text-gray-700 hover:text-electric-teal transition duration-300"
          >
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110" />
            <span className="text-sm font-body font-semibold">Email</span>
          </a>
          
          {/* LinkedIn Link */}
          <a
            href="YOUR_LINKEDIN_URL" // REPLACE ME
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group text-gray-700 hover:text-electric-teal transition duration-300"
          >
            <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110" />
            <span className="text-sm font-body font-semibold">LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href="YOUR_GITHUB_URL" // REPLACE ME
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group text-gray-700 hover:text-electric-teal transition duration-300"
          >
            <Github className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110" />
            <span className="text-sm font-body font-semibold">GitHub</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;