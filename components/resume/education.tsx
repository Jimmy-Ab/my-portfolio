"use client";

import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Rigorous computer science education combined with continuous professional engineering credentials in server-side development, cloud systems, and distributed architectures.",
  items: [
    {
      institution: "Addis Ababa Science and Technology University",
      degree: "B.Sc. in Computer Science & IT",
      duration: "2015 - 2019",
    },
    {
      institution: "Coursera / The Hong Kong University of Science and Technology",
      degree: "Server-side Development with NodeJS, Express and MongoDB",
      duration: "Sep 2021",
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
        {education.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {education.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] min-h-[160px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1.5 hover:border hover:border-accent/30 transition-all duration-300"
              >
                <span className="text-accent text-xs font-mono font-medium">{item.duration}</span>
                <h3 className="text-lg text-center lg:text-left font-semibold text-white">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60 text-sm">{item.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
