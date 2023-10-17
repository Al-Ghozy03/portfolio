"use client";
import Navbar from "./components/navbar";
import circle from "./assets/img/circle.png";
import About from "./components/about";

export default function Home() {
  const openEmail = () => {
    const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
    window.location.href = mailTo;
  };
  return (
    <>
      <Navbar />
      <main className="px-10 pb-7 w-full bg-cover">
        <About />
      </main>
    </>
  );
}
