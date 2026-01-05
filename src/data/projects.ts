export interface Project {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Football Career Quiz",
    description:
      "An interactive football quiz where users guess the player based on the clubs they played for throughout their career.",
    bullets: [
      "Career-based quiz logic showing clubs in chronological order",
      "Backend API built with Node.js, Express, TypeScript, and Drizzle ORM",
      "PostgreSQL database storing players, clubs, and career history",
      "Responsive, fast UI built with React and Tailwind CSS",
      "Reverse-proxy setup using Nginx for production performance"
    ],
    image: "/who-the-baller-open-graph-image2.png",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "React",
      "Tailwind CSS",
    ],
    liveUrl: "https://whotheballer.com",
    githubUrl: "https://github.com/emonmazharul/whotheballer",
  },
  {
    id: 2,
    title: "Modern Full-Stack Restaurant Platform",
    description:
      "A production-grade restaurant platform built with a scalable full-stack architecture, designed for real customers and deployed on a VPS environment.",
    bullets: [
      "User authentication, ordering system, and table reservation flow",
      "Fully-featured admin dashboard with revenue, inventory & order management",
      "End-to-end backend with Postgres, Drizzle ORM, and server-side validation",
      "Optimized for Lighthouse performance, SEO, and accessibility",
    ],
    image: "/restaurant-logo.png",
    technologies: [
      "React",
      "TypeScript",
      "shadcn/ui",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Nginx",
      "VPS",
    ],
    liveUrl: "https://myindianrestaurant.shop/",
    githubUrl: "https://github.com/emonmazharul/restaurant-website",
  },
  {
    id: 3,
    title: "Backward Email Viewer",
    description:
      "A secure, utility-based web application that visualizes a user's Gmail inbox from oldest to newest using Google's official APIs.",
    bullets: [
      "OAuth 2.0 authentication with Google Identity Platform",
      "Fast, paginated email retrieval and clean UI built with React + shadcn/ui",
      "Containerized with Docker for consistent deployments",
      "Reverse-proxy setup using Nginx for production performance",
    ],
    image: "/backward-email-log.png",
    technologies: [
      "Node.js",
      "Express",
      "Google Gmail API",
      "React",
      "shadcn/ui",
      "Docker",
      "Nginx",
    ],
    liveUrl: "https://backwardemail.email/",
    githubUrl: "https://github.com/emonmazharul/backward-email",
  },
];
