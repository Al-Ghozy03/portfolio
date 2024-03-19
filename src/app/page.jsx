"use client";
import dot from "./assets/img/dot.png";
import logo from "./assets/img/logo.png";
import Image from "next/image";
import Landing from "./components/landing";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import WorkExperiences from "./components/work_experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// export const openEmail = () => {
//   const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
//   window.location.href = mailTo;
// };

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className="w-full">
      <div className="lg:px-20 px-10 lg:py-20 py-10 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <Landing />
      <div className="lg:px-20 px-10 right-0 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <About />
      <div className="lg:px-20 px-10 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <Services />
      <div className="lg:px-20 px-10 right-0 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <Skills />
      <div className="lg:px-20 px-10 absolute mt-14">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <WorkExperiences />
      <div className="lg:px-20 px-10 right-0 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <Projects />
      <div className="lg:px-20 px-10 absolute">
        <Image src={dot} alt="dot" className="animate-float h-8 w-10" />
      </div>
      <Contact />
      <footer className="lg:flex lg:justify-between lg:px-20 px-10 bg-[#F7F8F9] mt-20 py-10">
        <div>
          <Image
            src={logo}
            alt="logo"
            height={30}
            priority
            className="lg:h-[1.875rem] lg:w-[8rem] h-[1.8rem] w-28"
          />
          <p className="lg:text-base text-sm mt-1">
            Illustration from{" "}
            <span className="font-bold">
              <a target="_blank" href="https://freepik.com">
                Freepik
              </a>
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold lg:mt-0 mt-3">My Contacts</h3>
          <a
            className="lg:text-base text-sm"
            target="_blank"
            href="mailto:muhammadfaizalghozi1@gmail.com"
          >
            muhammadfaizalghozi1@gmail.com
          </a>
          <a
            className="lg:text-base text-sm"
            target="_blank"
            href="https://wa.me/6287818197732"
          >
            +62 878 1819 7732
          </a>
        </div>
      </footer>
    </main>
  );
}
