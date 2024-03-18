import Image from "next/image";
import bg from "../assets/img/about.jpg";
import Button from "../fragments/button";

export default function About() {
  return (
    <section id="about" className="flex justify-between px-20 py-10">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold">
          About <span className="text-[#FF644D]">me</span>
        </h1>
        <p className="text-lg mt-3 mb-5">
          I'm a Software Engineer with 1+ year of experience and a student at
          Universitas Muhammadiyah Prof. Dr. HAMKA (UHAMKA). I'm passionate
          about programming, specializing in React JS, Next JS, Node JS, and
          Flutter. I've worked on diverse projects, including government web
          projects, blending academic knowledge with industry experience.
          Continuously learning and innovating for top-notch software solutions
          drives me.
        </p>
        <Button className={"w-48"}>Let's talk</Button>
      </div>
      <Image src={bg} alt="about-me" className="h-[33rem] w-[33rem]" />
    </section>
  );
}
