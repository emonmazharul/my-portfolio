import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-heading font-bold text-white hover:text-teal-400 transition"
          >
            Mazharul Islam
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="relative text-lg font-body text-neutral-300 hover:text-teal-400 transition group"
              >
                {link.title}

                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-300 hover:bg-neutral-800 transition"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden border-t border-neutral-800 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-neutral-900`}
      >
        <div className="flex flex-col items-center px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-heading text-neutral-200 hover:text-teal-400 transition"
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
