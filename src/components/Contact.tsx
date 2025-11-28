import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6 inline-block border-b-4 border-electric-teal pb-1">
          Get In Touch
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-body text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
          Whether you have an exciting project in mind, want to collaborate, or are looking to hire a full-stack engineer — I'm always open to new conversations. Let’s build something impactful together.
        </p>

        {/* Contact Card */}
        <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl p-8 shadow-xl hover:shadow-electric-teal/20 transition-all duration-300">
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-electric-teal mb-4" />

            <p className="text-gray-300 font-body text-lg mb-4">
              Send me an email anytime — I usually reply within a day.
            </p>

            <a
              href="mailto:dev.mazharul@gmail.com"
              className="text-electric-teal font-heading text-xl hover:text-teal-400 transition"
            >
              dev.mazharul@gmail.com
            </a>
          </div>
        </div>

        {/* Optional CTA button */}
        <div className="mt-10">
          <a
            href="mailto:dev.mazharul@gmail.com"
            className="inline-flex items-center px-8 py-3 text-lg font-heading font-bold text-black bg-electric-teal rounded-lg shadow-lg hover:bg-teal-500 hover:scale-105 transition duration-300 uppercase tracking-wide"
          >
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
