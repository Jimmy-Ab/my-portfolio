"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { getExperienceYears } from "@/lib/utils";

const Experience = () => {
  const [expYears, setExpYears] = useState(7);

  useEffect(() => {
    setExpYears(getExperienceYears());
  }, []);

  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: `Over ${expYears}+ years of professional engineering experience designing, developing, and deploying production-grade enterprise platforms, industrial AI & RAG solutions, cloud microservices, and high-throughput web systems.`,
    items: [
      {
        company: "Elunic GmbH",
        position: "Senior Software Developer",
        duration: "Nov 2025 - Present",
        location: "Munich, Germany (Remote)",
      },
      {
        company: "Adey-Meselesh GmbH",
        position: "Senior Software Developer",
        duration: "Apr 2022 - Sep 2025",
        location: "Addis Ababa, Ethiopia",
      },
      {
        company: "Better Mobile Security Inc.",
        position: "Software Developer",
        duration: "Aug 2019 - Mar 2022",
        location: "Addis Ababa, Ethiopia",
      },
      {
        company: "Freelance & Independent Contracts",
        position: "Full-Stack Engineer",
        duration: "2019 - Present",
        location: "Global / Remote",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] min-h-[160px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1.5 hover:border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-accent text-xs font-mono font-medium">{item.duration}</span>
                  <span className="text-white/40 text-xs">{item.location}</span>
                </div>
                <h3 className="text-lg text-center lg:text-left font-semibold text-white">
                  {item.position}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/70 text-sm font-medium">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
