"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMaterialdesign,
  SiAntdesign,
  SiDotnet,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const skills = {
  title: "My Skills",
  description:
    "I possess a diverse set of skills in software development and technology. Here, you’ll find an overview of my key competencies and technical proficiencies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
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
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiDotnet />,
      name: ".NET Core",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMaterialdesign />,
      name: "Material Design",
    },
    {
      icon: <SiAntdesign />,
      name: "Ant Design",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 m-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index} className="">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
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
