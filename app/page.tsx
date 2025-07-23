"use client";

import { FiDownload } from "react-icons/fi";
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
      <div className="container mx-auto px-6 py-16 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-24">
          {/* Text Content */}
          <motion.div 
            className="text-center xl:text-left order-2 xl:order-none max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="text-lg font-light text-accent/80 tracking-widest"
              variants={itemVariants}
            >
              SOFTWARE DEVELOPER
            </motion.span>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-tight"
              variants={itemVariants}
            >
              Hey I&rsquo;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#4f46e5]">
                Dalasa Aboma
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-white/70 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              I craft seamless digital experiences with expertise across modern web technologies, 
              blending aesthetics with functionality for impactful solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col xl:flex-row items-center gap-6"
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
                  className="rounded-full px-8 py-6 border-2 border-accent/30 hover:border-accent bg-[#ffffff08] backdrop-blur-s transition-all duration-300 group"
                >
                  <span className="font-medium tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    Download Resume
                  </span>
                  <FiDownload className="text-xl ml-2 group-hover:translate-y-0.5 transition-transform duration-300" />
                </Button>
              </a>

              <motion.div 
                className="mb-8 xl:mb-0"
                variants={itemVariants}
              >
                <Socials />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            className="order-1 xl:order-none mb-12 xl:mb-0 relative"
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