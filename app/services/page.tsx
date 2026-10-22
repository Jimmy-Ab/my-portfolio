"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Enterprise Web Development",
    description: "High-performance, scalable web applications built with Angular, React, Next.js, and TypeScript, engineered for enterprise reliability, responsive interfaces, and seamless user journeys.",
    href: "/work",
    active: true
  },
  {
    num: "02",
    title: "Industrial AI & RAG Engineering",
    description: "Production-ready conversational AI architectures, semantic vector search using Weaviate & Azure OpenAI, and automated document parameter extraction delivering sub-second retrieval.",
    href: "/work",
    active: true
  },
  {
    num: "03",
    title: "High-Throughput Microservices",
    description: "Distributed, event-driven backend ecosystems leveraging NestJS, .NET, PostgreSQL, Redis caching, Docker, and Kubernetes (AKS) with Keycloak SSO and robust CI/CD.",
    href: "/work",
    active: true
  },
  {
    num: "04",
    title: "IoT & Real-Time Telemetry",
    description: "High-frequency machine telemetry streaming, SSE/WebSocket real-time event streaming, and custom Grafana/Angular analytical interfaces for international manufacturing plants.",
    href: "/work",
    active: true
  },
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 xl:py-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Specialized <span className="text-accent">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Production-grade engineering solutions tailored to enterprise platforms, industrial AI, and high-scale cloud infrastructure
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden bg-gradient-to-br from-[#ffffff08] to-[#ffffff03] border-white/10 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 cursor-pointer"
              variants={item}
              whileHover={{ y: -6 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Number */}
              <div className="text-7xl font-bold text-outline text-transparent absolute top-4 right-4 opacity-20 group-hover:opacity-30 group-hover:text-accent/20 transition-all duration-500">
                {service.num}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <Link
                    href={service.href}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-accent group-hover:text-primary transition-all duration-500 text-white"
                  >
                    <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-500" />
                  </Link>
                </div>

                <p className="mb-6 leading-relaxed text-white/70">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent/50 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action banner */}
        <motion.div 
          className="text-center mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-sm sm:text-left">
            Have a project in mind or need technical leadership for an enterprise initiative?
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-all"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
