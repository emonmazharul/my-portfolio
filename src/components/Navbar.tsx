import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assuming you have lucide-react or similar icons

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed container for the navbar, using the 'off-white' background
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-off-white/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Name (Uses the 'heading' font) */}
          <a 
            href="#hero" 
            className="text-2xl font-heading font-bold text-gray-900 hover:text-electric-teal transition duration-300"
          >
            {'Mazharul Islam'}
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-lg font-body text-gray-800 hover:text-electric-teal transition duration-300 relative group"
              >
                {link.title}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electric-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel (Sliding down) */}
      <div 
        className={`md:hidden transition-all duration-330 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4 border-t border-gray-200' : 'max-h-0 opacity-0'
        } bg-off-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block px-3 py-2 text-xl font-heading font-medium text-gray-800 hover:text-electric-teal transition duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;