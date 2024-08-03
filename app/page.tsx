"use client";

import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import Socials from "@/components/socials";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const Home = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hey I&apos;m <br />
              <span className="text-accent">Dalasa Aboma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m an expert at designing seamless website experiences and
              have a deep understanding of many different web development
              languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                target="_blank"
                href="/resume.pdf"
                rel="noopener noreferrer"
                className=""
              >
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
