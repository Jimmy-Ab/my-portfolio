"use client";

import { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/work/work-slide-btns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Adey Coffee Supply Chain",
    description:
      "A system that optimizes the procurement process in a cloud based environment for all stakeholders.",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Redux Toolkit" },
      { name: "MUI" },
      { name: "Ant Design" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Adey Generator",
    description:
      "Generates Privacy Policies, Imprints, and Terms & Conditions by answering a few questions, ensuring compliance and ease.",
    stack: [
      { name: ".Net core" },
      { name: "C#" },
      { name: "Blazor" },
      { name: "MUI" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "CERVIS WTMS and ERP",
    description:
      "A web-based warehouse management system developed for a company called Cervis in Germany.",
    stack: [
      { name: ".Net core" },
      { name: "C#" },
      { name: "Blazor" },
      { name: "MUI" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Better MTD Bitdefender Integration",
    description:
      "Windows service agent that collects incident data from a third party app(bitdefender) and reports to the MTD console.",
    stack: [{ name: ".Net Core" }, { name: "WPF" }, { name: "C#" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Better MTD Sentinel Integration",
    description:
      "Provides intelligent security analytics and threat intelligence, offering a solution for alert detection, visibility, and response.",
    stack: [
      { name: ".Net Core" },
      { name: "Azure KQL" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "Better MTD Console(Web)",
    description:
      "Provides intelligent security analytics and threat intelligence, offering a solution for alert detection, visibility, and response.",
    stack: [
      { name: ".Net Core" },
      { name: "Angular" },
      { name: "Javascript" },
      { name: "CSS" },
      { name: "MUI" },
      { name: "C#" },
    ],
    image: "/assets/work/better-mtd.png",
    live: "https://www.better.mobi/product#mtd",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px]  flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*Outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*Project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/*Project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*Stack*/}
              <ul className="flex gap-4">
                {project.stack.map((tech, index) => (
                  <li
                    key={index}
                    className="text-accent text-xs bg-slate-800 mt-6 xl:mt-0 rounded-xl py-2 px-3"
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
              {/*Border*/}
              <div className="border border-white/20"></div>
              {/*Buttons*/}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] rounded-xl">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group  flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full rounded-xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-fill  w-full h-full group-hover:opacity-75 rounded-xl"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
