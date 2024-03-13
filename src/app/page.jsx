"use client";
import dot from "@/app/assets/img/dot.png";
import Image from "next/image";
import Landing from "./components/landing";

export const openEmail = () => {
  const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
  window.location.href = mailTo;
};
import About from "./components/about";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="pb-7 w-full">
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
    </main>
  );
}
