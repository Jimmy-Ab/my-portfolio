"use client";

import Link from "next/link";
import { FiDownload, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Socials from "@/components/socials";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12 xl:py-16 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">
          {/* Text Content */}
          <motion.div 
            className="text-center xl:text-left order-2 xl:order-none max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="text-sm md:text-base font-mono tracking-widest text-accent uppercase font-medium"
              variants={itemVariants}
            >
              Senior Software Developer
            </motion.span>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight"
              variants={itemVariants}
            >
              Hey I&rsquo;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#60a5fa] to-[#4f46e5]">
                Dalasa Aboma
              </span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Full-Stack &amp; Enterprise Cloud Specialist engineering high-throughput web applications, 
              industrial AI &amp; RAG architectures, and distributed microservices with Angular, NestJS, React, .NET, and Kubernetes.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-8"
              variants={itemVariants}
            >
              <a
                target="_blank"
                href="/resume.pdf"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 py-6 border-2 border-accent/40 hover:border-accent bg-[#ffffff08] hover:bg-accent/10 backdrop-blur-sm transition-all duration-300 group shadow-lg shadow-accent/5"
                >
                  <span className="font-medium tracking-wide group-hover:translate-x-0.5 transition-transform duration-300 text-white">
                    Download Resume
                  </span>
                  <FiDownload className="text-xl ml-2 text-accent group-hover:translate-y-0.5 transition-transform duration-300" />
                </Button>
              </a>

              <Link href="/deck">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 py-6 border-2 border-[#6366f1]/60 hover:border-[#6366f1] bg-[#6366f1]/15 hover:bg-[#6366f1]/25 backdrop-blur-sm transition-all duration-300 group shadow-lg shadow-[#6366f1]/10"
                >
                  <span className="font-medium tracking-wide group-hover:translate-x-0.5 transition-transform duration-300 text-white">
                    Executive Deck &amp; PDF
                  </span>
                  <FiFileText className="text-xl ml-2 text-[#818cf8]" />
                </Button>
              </Link>
            </motion.div>

            {/* Socials Row */}
            <motion.div 
              className="flex items-center justify-center xl:justify-start"
              variants={itemVariants}
            >
              <Socials />
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            className="order-1 xl:order-none mb-8 xl:mb-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Photo />
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 pointer-events-none animate-pulse-slow"></div>
              <div className="absolute -inset-4 rounded-full bg-accent/10 blur-xl -z-10 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats with floating animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Stats />
      </motion.div>

      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>
    </motion.section>
  );
};

export default Home;
