"use client";

import { useEffect, useState } from "react";
import { getExperienceYears } from "@/lib/utils";

const AboutMe = () => {
  const [expYears, setExpYears] = useState(7);

  useEffect(() => {
    setExpYears(getExperienceYears());
  }, []);

  const about = {
    title: "About me",
    description:
      "I am a Senior Software Developer with deep expertise in enterprise cloud architecture, industrial AI systems, and modern full-stack engineering. I build high-throughput, secure, and production-tested systems for European enterprises and international clients.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Dalasa Aboma",
      },
      {
        fieldName: "Phone",
        fieldValue: "+251-94-1771-978",
      },
      {
        fieldName: "Experience",
        fieldValue: `${expYears}+ years`,
      },
      {
        fieldName: "LinkedIn",
        fieldValue: "linkedin.com/in/dalasa-aboma-415344111",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Ethiopian",
      },
      {
        fieldName: "Email",
        fieldValue: "dalasaaboma@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Amharic, Afan Oromo",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60 min-w-[90px]">{item.fieldName}</span>
              <span className="text-accent font-semibold">:</span>
              <span
                className={`${
                  item.fieldValue === "Available" ? "text-accent font-semibold" : ""
                } text-lg truncate`}
              >
                {item.fieldValue}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutMe;
