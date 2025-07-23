"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Experience from "@/components/resume/experience";
import Education from "@/components/resume/education";
import Skills from "@/components/resume/skills";
import AboutMe from "@/components/resume/about";

const Resume = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 xl:py-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Professional journey and capabilities
          </p>
        </motion.div>

        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-12"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TabsList className="flex flex-row xl:flex-col w-full xl:w-[300px] gap-4 p-2 bg-[#ffffff08] rounded-xl border border-white/10 backdrop-blur-sm">
              {[
                { value: "experience", label: "Experience" },
                { value: "education", label: "Education" },
                { value: "skills", label: "Skills" },
                { value: "about", label: "About Me" }
              ].map((tab, index) => (
                <motion.div key={tab.value} variants={item}>
                  <TabsTrigger
                    value={tab.value}
                    className="w-full data-[state=active]:bg-accent/10 data-[state=active]:border-accent/30 data-[state=active]:text-accent hover:bg-[#ffffff05] transition-all px-6 py-4 rounded-lg border border-transparent text-left"
                  >
                    {tab.label}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          <div className="flex-1 min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#ffffff08] rounded-xl border border-white/10 p-6 xl:p-8 backdrop-blur-sm"
            >
              <TabsContent value="experience" className="w-full">
                <Experience />
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <Education />
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <Skills />
              </TabsContent>
              <TabsContent value="about" className="w-full">
                <AboutMe />
              </TabsContent>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
