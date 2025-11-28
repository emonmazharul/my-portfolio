
// import React from 'react';
// // Assuming you have a placeholder image for your profile picture in public/profile.png
// // You should replace this with your actual image path

// const Hero: React.FC = () => {
//   return (
//     // Padding-top (pt-24) moves content below the fixed Navbar
//     <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 bg-off-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Profile Image (Circular and Centered) */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="/profile.png" 
//             alt="Your Professional Profile"
//             className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-electric-teal shadow-xl transition-all duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Catchy Headline - Using the 'heading' font and Electric Teal accent */}
//         <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-gray-900 mb-4 leading-tight">
//           Hi, I'm <span className="text-electric-teal">Your Name</span>.
//         </h1>

//         {/* Subtitle / Role Description - Using the 'body' font */}
//         <p className="text-xl sm:text-2xl lg:text-3xl font-body text-gray-700 mb-8 max-w-3xl mx-auto">
//           I build modern, performance-driven web applications with **React**, **TypeScript**, and **Tailwind CSS**.
//         </p>

//         {/* Call-to-Action Button */}
//         <a 
//           href="#projects"
//           className="inline-block px-8 py-3 text-lg font-heading font-bold text-white bg-electric-teal rounded-lg shadow-lg hover:bg-teal-500 transform hover:scale-105 transition duration-300 ease-in-out uppercase tracking-wider"
//         >
//           View My Work
//         </a>
        
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero.tsx

// src/components/Hero.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react'; 

const Hero: React.FC = () => {
  return (
    // Min-height ensures the content takes up most of the viewport
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        
        {/* === 1. Main Heading (Your Identity) === */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-gray-900 mb-6 leading-snug">
          Hi, I’m a <span className="text-electric-teal">Full-Stack Software Engineer</span>.
        </h1>

        {/* === 2. Core Summary (The Value Proposition) === */}
        <p className="text-xl sm:text-2xl font-body text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
          I am a Full-Stack Software Engineerspecializing in modern, high-performance web applications. My expertise spans the entire development lifecycle, from elegant front-end design using **React, TypeScript, and Tailwind CSS** to building robust, data-driven backends with **Node.js, Express, PostgreSQL, and MongoDB**. My commitment is simple: delivering clean, scalable code with a keen eye for robust, user-centric design.
        </p>

        {/* === 3. Call-to-Action === */}
        <a 
          href="#projects"
          className="inline-flex items-center space-x-2 px-8 py-3 text-lg font-heading font-bold text-white bg-electric-teal rounded-lg shadow-lg hover:bg-teal-500 transform hover:scale-105 transition duration-300 ease-in-out uppercase tracking-wider"
        >
          <span>See My Featured Work</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        
      </div>
    </section>
  );
};

export default Hero;