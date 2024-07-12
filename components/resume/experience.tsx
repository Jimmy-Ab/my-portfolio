"use client";
import { ScrollArea } from "../ui/scroll-area";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "As a software developer, I have honed my skills in designing, developing, and implementing innovative software solutions. My journey encompasses diverse projects and roles that have enriched my expertise and fueled my passion for technology. Here, you’ll find an overview of my professional milestones and accomplishments.",
  items: [
    {
      company: "Adey Meselesh GmbH",
      position: "Senior Software Developer",
      duration: "Apr 2022 - Present",
    },
    {
      company: "Better Mobile Security Inc.",
      position: "Junior Software Developer",
      duration: "Aug 2019- Mar 2022",
    },
    {
      company: "Farka Ict Solutions",
      position: "Intern",
      duration: "Summer 2018",
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h=[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.company}</p>
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
