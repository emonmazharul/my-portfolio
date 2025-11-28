import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Name / Logo */}
        <p className="text-xl font-heading font-bold mb-2">
          {'</YourName>'}
        </p>

        {/* Copyright */}
        <p className="text-sm font-body text-gray-400 mb-4">
          &copy; {currentYear} Your Name. Built with React, TypeScript, & Tailwind CSS.
        </p>

        {/* Back to Top Link */}
        <a 
          href="#hero" 
          className="text-sm font-body text-electric-teal hover:text-teal-400 transition duration-300"
        >
          Back to Top
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;