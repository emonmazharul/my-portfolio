import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Name / Branding */}
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          Mazharul Islam
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 font-body text-sm sm:text-base mb-8 max-w-md mx-auto">
          Full-Stack Engineer building reliable, scalable, and high-performance web applications.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-8">

          {/* GitHub */}
          <a
            href="https://github.com/emonmazharul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-electric-teal transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}

          {/* Email */}
          <a
            href="mailto:dev.mazharul@gmail.com"
            className="text-gray-400 hover:text-electric-teal transition duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1f1f1f] pt-6">

          {/* Copyright */}
          <p className="text-gray-500 font-body text-sm">
            © {new Date().getFullYear()} Mazharul Islam. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
