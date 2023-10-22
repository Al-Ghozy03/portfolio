"use client";
import Navbar from "./components/navbar";
import circle from "./assets/img/circle.png";
import About from "./components/about";
import MyServices from "./components/my_service";
import Skills from "./components/skills";
import WorkExperience from "./components/work_experience";
import PortFolio from "./components/portfolio";

export default function Home() {
  const openEmail = () => {
    const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
    window.location.href = mailTo;
  };
  return (
    <>
      <Navbar />
      <main className="pb-7 w-full">
        <About />
        <div className="px-28">
          <MyServices />
          <Skills />
          <WorkExperience />
          <PortFolio />
        </div>
      </main>
    </>
  );
}
