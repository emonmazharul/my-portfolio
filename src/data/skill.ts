import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFirebase
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", Icon: SiReact, color: "text-cyan-400" },
  { name: "Firebase", Icon: SiFirebase, color: "text-white" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "HTML5", Icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: SiCss3, color: "text-blue-400" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-600" },
  { name: "Git", Icon: SiGit, color: "text-red-500" },
];
