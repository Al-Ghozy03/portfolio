"use client";
import Navbar from "./components/navbar";
import circle from "./assets/img/circle.png";

export default function Home() {
  const openEmail = () => {
    const mailTo = `mailto:muhammadfaizalghozi1@gmail.com?`;
    window.location.href = mailTo;
  };
  return (
    <main className="px-10 py-7 w-full bg-cover">
      <Navbar />
    </main>
  );
}
