"use client";
import Navbar from "./components/navbar";
import circle from "./assets/img/circle.png";
import About from "./components/about";
import MyServices from "./components/my_service";
import Skills from "./components/skills";
import WorkExperience from "./components/work_experience";
import PortFolio from "./components/portfolio";
import Footer from "./components/footer";

export const openEmail = () => {
  const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
  window.location.href = mailTo;
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-7 w-full">
        <About />
        <div className="lg:px-28 px-10">
          <MyServices />
          <Skills />
          <WorkExperience />
          <PortFolio />
        </div>
      </main>
      <Footer />
    </>
  );
}
