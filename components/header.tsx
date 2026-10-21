"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  const pathname = usePathname();
  if (pathname === "/deck" || pathname?.startsWith("/deck")) {
    return null;
  }

  return (
    <header className="py-8 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Dalasa<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-7 py-5 border-2 border-accent/30 hover:border-accent bg-[#ffffff08] backdrop-blur-sm transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
            >
              <span className="font-medium tracking-wide group-hover:translate-x-0.5 transition-transform duration-300 text-sm">
                Hire Me
              </span>
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
