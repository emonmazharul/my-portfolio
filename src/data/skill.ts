import { Type, Code, Feather, Server, GitBranch, Terminal, Globe, LayoutDashboard } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // Import the type for better clarity
 // Import the type for better clarity


export interface Skill {
  name: string;
  Icon: LucideIcon; // Changed 'icon' to 'Icon' and defined its type
  color: string;
}

export const skillsData: Skill[] = [
  // Core Languages
  { name: 'TypeScript', Icon: Type, color: 'text-blue-600' }, // Represents type safety
  { name: 'JavaScript', Icon: Code, color: 'text-yellow-500' }, // General coding icon
  // Front-End Frameworks & Styling
  { name: 'React', Icon: Feather, color: 'text-cyan-400' }, // Feather is often used for React
  { name: 'Tailwind CSS', Icon: LayoutDashboard, color: 'text-sky-500' }, // Represents layout/utility
  { name: 'HTML5', Icon: Globe, color: 'text-orange-600' }, // Represents the web
  { name: 'CSS3', Icon: Terminal, color: 'text-blue-500' }, // Represents styling/commands
  // Back-End/Utility
  { name: 'Node.js', Icon: Server, color: 'text-green-600' }, // Represents server side
  { name: 'Express.js', Icon: Server, color: 'text-gray-800' }, // Another server icon
  { name: 'Git & GitHub', Icon: GitBranch, color: 'text-red-600' }, // Represents version control
];