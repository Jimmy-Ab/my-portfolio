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
    category: "Industrial AI",
    title: "Shopfloor.io / ShopfloorGPT",
    description:
      "Enterprise industrial AI platform integrating factory machine telemetry with conversational RAG search over massive machinery documentation catalogs.",
    stack: [
      { name: "Angular 18" },
      { name: "NestJS" },
      { name: "Weaviate RAG" },
      { name: "PostgreSQL" },
      { name: "Azure OpenAI" },
      { name: "Keycloak" },
      { name: "AKS" },
    ],
    image: "/assets/work/shopfloor-ui.jpg",
    live: "https://shopfloor.io",
    github: "",
  },
  {
    num: "02",
    category: "AI Extraction",
    title: "MunschGPT Specification Extraction",
    description:
      "AI-assisted engineering platform that parses complex technical documents to extract structured engineering parameters (flow rates, pressures, ATEX certifications) in real time via SSE streaming.",
    stack: [
      { name: "Angular 18" },
      { name: "NestJS" },
      { name: "Weaviate" },
      { name: "PostgreSQL" },
      { name: "SSE" },
      { name: "Nx Monorepo" },
    ],
    image: "/assets/work/munsch-ui.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Industrial IoT",
    title: "NORD DRIVESYSTEMS Telemetry",
    description:
      "Enterprise condition monitoring platform aggregating high-frequency industrial drive telemetry (vibration, heat, torque, motor speed) with embedded Grafana dashboards for preventive maintenance.",
    stack: [
      { name: "Angular 20" },
      { name: "NestJS 11" },
      { name: "RxJS" },
      { name: "Grafana" },
      { name: "Keycloak" },
      { name: "Nx" },
    ],
    image: "/assets/work/nord-ui.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Industrial Portal",
    title: "ROVEMA / myROVEMA Customer Portal",
    description:
      "Machinery customer portal serving 1,000+ packaging machine operators across international manufacturing facilities with multi-tenant asset management and ticketing.",
    stack: [
      { name: "Angular 18" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Keycloak" },
      { name: "Docker" },
    ],
    image: "/assets/work/rovema-ui.jpg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Productivity & Tools",
    title: "Slack Management System",
    description:
      "Full-stack team productivity platform enabling workspaces to link Slack channels, automate daily standup progress reporting, and enforce 4-tier RBAC authentication.",
    stack: [
      { name: "NestJS" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/work/slack-ui.jpg",
    live: "",
    github: "https://github.com/Jimmy-Ab/slack-management",
  },
  {
    num: "06",
    category: "Supply Chain",
    title: "Adey Coffee Supply Chain",
    description:
      "A cloud-based agricultural commodity platform tracking supply chain movements, lot origins, quality inspection workflows, and exporter logistics.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/adey-supply.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Document Automation",
    title: "Adey Generator",
    description:
      "Automated document and template generation system for enterprise workflows, contract dispatching, and dynamic report compilation.",
    stack: [
      { name: ".NET" },
      { name: "C#" },
      { name: "Blazor" },
      { name: "REST APIs" },
    ],
    image: "/assets/work/adey-generator.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "Warehouse Logistics",
    title: "CERVIS WTMS and ERP",
    description:
      "Web-based warehouse management and ERP system developed for Cervis GmbH in Germany, managing real-time stock inventories and dispatching.",
    stack: [
      { name: ".NET" },
      { name: "C#" },
      { name: "Blazor" },
      { name: "REST APIs" },
    ],
    image: "/assets/work/cervis-wtms.png",
    live: "",
    github: "",
  },
  {
    num: "09",
    category: "Cybersecurity Agent",
    title: "Better MTD Bitdefender Integration",
    description:
      "High-reliability C#/.NET Windows service agent running on endpoints to capture Bitdefender threat telemetry and relay alerts to central backend consoles.",
    stack: [
      { name: "C#" },
      { name: ".NET" },
      { name: "Windows Services" },
      { name: "Bitdefender SDK" },
    ],
    image: "/assets/work/better-azure.png",
    live: "",
    github: "",
  },
  {
    num: "10",
    category: "Security Analytics",
    title: "Better MTD Sentinel Integration",
    description:
      "Direct enterprise bridge channeling mobile security telemetry into Microsoft Sentinel and SIEM/SOC platforms with zero event loss.",
    stack: [
      { name: ".NET" },
      { name: "Azure Sentinel" },
      { name: "REST APIs" },
      { name: "CEF/JSON" },
    ],
    image: "/assets/work/better-home.png",
    live: "",
    github: "",
  },
  {
    num: "11",
    category: "Security Management",
    title: "Better MTD Console (Web)",
    description:
      "Centralized mobile threat visibility console offering incident response workflows, automated quarantine triggers, and fleet security monitoring.",
    stack: [
      { name: ".NET" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "MySQL" },
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
      className="relative py-6 xl:py-10 overflow-hidden flex-1"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-6 xl:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of production-grade systems across Enterprise AI, Industrial IoT, and Full-Stack Engineering
          </p>
          <div className="mt-4">
            <Link
              href="/deck"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-mono"
            >
              <span>Explore all 21 slides in the interactive Executive Deck ↗</span>
            </Link>
          </div>
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
              className="xl:h-[420px] rounded-2xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[320px] xl:h-[400px] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      priority={index === 0}
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