import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My education has provided a solid foundation in software development and technology. Here, you’ll find an overview of my academic achievements and the institutions that shaped my journey.",
  items: [
    {
      institution: "Addis Ababa Science and Technology University",
      degree: "Computer Science and IT",
      duration: "2015 - 2019",
    },
    {
      institution: "Coursera",
      degree: "Server-side Development with NodeJS, Express and MongoDB",
      duration: "Sep 2021",
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h=[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.institution}</p>
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
