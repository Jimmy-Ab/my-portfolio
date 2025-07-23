"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
    image: "/assets/work/adey-supply.png",
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
    image: "/assets/work/adey-generator.png",
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
    image: "/assets/work/cervis-wtms.png",
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
    image: "/assets/work/better-azure.png",
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
    image: "/assets/work/better-home.png",
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
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 xl:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of my professional work and contributions
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Project info */}
          <motion.div
            className="w-full xl:w-[45%] flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-8">
              <div className="text-8xl font-extrabold text-outline text-transparent">
                {project.num}
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-white/5 rounded-full px-4 py-2 text-accent border border-white/10"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6 flex gap-6">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <BsArrowUpRight className="text-xl" />
                    <span>Live Demo</span>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <BsGithub className="text-xl" />
                    <span>View Code</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project slider */}
          <motion.div
            className="w-full xl:w-[55%]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] rounded-2xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[400px] xl:h-[500px] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-white/80">{project.category}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
