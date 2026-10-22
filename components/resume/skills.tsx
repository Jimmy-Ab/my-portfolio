"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAngular,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiOpenai,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = {
  title: "My Skills",
  description:
    "Production-tested technical proficiencies across modern frontend frameworks, high-throughput microservices, vector search & industrial AI, cloud orchestration, and enterprise relational databases.",
  skillList: [
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiAngular />,
      name: "Angular 18/20",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiDotnet />,
      name: ".NET / C#",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiRedis />,
      name: "Redis Cache",
    },
    {
      icon: <SiOpenai />,
      name: "AI & RAG / OpenAI",
    },
    {
      icon: <FaDocker />,
      name: "Docker Containers",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes (AKS)",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 m-auto xl:mx-0 leading-relaxed">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[24px]">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-2 group hover:border hover:border-accent/40 transition-all duration-300">
                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
