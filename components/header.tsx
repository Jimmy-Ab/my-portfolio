import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Dalasa<span className="text-accent">.</span>
          </h1>
          {/* <p className="text-xl font-medium text-gray-400">Software Developer</p> */}
        </Link>
        {/*desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 border-2 border-accent/30 hover:border-accent bg-[#ffffff08] backdrop-blur-s transition-all duration-300 group"
            >
              <span className="font-medium tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                Hire Me
              </span>
            </Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
