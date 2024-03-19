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

export const openEmail = () => {
  const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
  window.location.href = mailTo;
};

export default function Home() {
  return (
    <main className="w-full">
      <div className="px-20 py-20 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <Landing />
      <div className="px-20 right-0 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <About />
      <div className="px-20 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <Services />
      <div className="px-20 right-0 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <Skills />
      <div className="px-20 absolute mt-14">
        <Image src={dot} alt="dot" />
      </div>
      <WorkExperiences />
      <div className="px-20 right-0 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <Projects />
      <div className="px-20 absolute">
        <Image src={dot} alt="dot" />
      </div>
      <Contact />
      <footer className="flex justify-between px-20 bg-[#F7F8F9] mt-20 py-20">
        <div>
          <Image src={logo} alt="Muhammad Faiz Al Ghozi" />
          <p className="mt-1">Illustration from <span className="font-bold"><a target="_blank" href="https://freepik.com">Freepik</a></span></p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">My Contacts</h3>
          <a target="_blank" href="mailto:muhammadfaizalghozi1@gmail.com">muhammadfaizalghozi1@gmail.com</a>
          <a target="_blank" href="wa.me/6287818197732">+62 878 1819 7732</a>
        </div>
      </footer>
    </main>
  );
}
