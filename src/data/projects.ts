// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Path to project screenshot
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Modern Full-Stack Restaurant Platform',
    description: 'A comprehensive, feature-rich restaurant platform designed for high performance. Includes full user lifecycle management, dynamic ordering, reservation system, and a dedicated admin dashboard for real-time operations.',
    image: '/restaurant-image.jpg', // Create this image path later
    technologies: ['React', 'TypeScript', 'shadcn/ui', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Nginx', 'VPS'],
    liveUrl: 'https://myindianrestaurant.shop/', // REPLACE ME
    githubUrl: 'https://github.com/emonmazharul/restaurant-website', // REPLACE ME
  },
  {
    id: 2,
    title: 'Backward Email Viewer',
    description: 'A utility application that visualizes a user\'s Gmail data, displaying messages from oldest to newest. Built with secure Google OAuth 2.0 flow and deployed using Docker for simplified CI/CD.',
    image: '/backward-email.jpg', // Create this image path later
    technologies: ['Node.js', 'Express', 'Google APIs (Gmail)', 'React', 'shadcn/ui', 'Docker', 'Nginx'],
    liveUrl: 'https://backwardemail.email/', // REPLACE ME
    githubUrl: 'https://github.com/emonmazharul/backward-email', // REPLACE ME
  },
];