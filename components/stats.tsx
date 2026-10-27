"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { getExperienceYears } from "@/lib/utils";

const Stats = () => {
  const [expYears, setExpYears] = useState(7);

  useEffect(() => {
    setExpYears(getExperienceYears());
  }, []);

  const stats = [
    {
      num: expYears,
      suffix: "+",
      text: "Years of experience",
    },
    {
      num: 11,
      suffix: "+",
      text: "Enterprise projects",
    },
    {
      num: 14,
      suffix: "+",
      text: "Technologies mastered",
    },
    {
      num: 500,
      suffix: "+",
      text: "Production commits",
    },
  ];

  return (
    <section className="pt-1 pb-3 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start min-w-[200px]"
              >
                <div className="flex items-center text-4xl xl:text-6xl font-extrabold text-white">
                  <CountUp end={stat.num} duration={3} delay={0.5} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/60 text-sm`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
