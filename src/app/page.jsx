"use client";
import Navbar from "./components/navbar";
import circle from "./assets/img/circle.png";
import About from "./components/about";
import MyServices from "./components/my_service";
import Skills from "./components/skills";
import WorkExperience from "./components/work_experience";

export default function Home() {
  const openEmail = () => {
    const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
    window.location.href = mailTo;
  };
  return (
    <>
      <Navbar />
      <main
        className="px-10 pb-7 w-full bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${circle.src})` }}
      >
        <About />
        <MyServices />
        <Skills />
        <WorkExperience />
      </main>
    </>
  );
}
