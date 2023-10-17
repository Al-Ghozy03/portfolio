import Image from "next/image";
import laptop from "../assets/img/laptop.png";

export default function About() {
  return (
    <section
      id="about"
      className="lg:flex lg:justify-between lg:items-center lg:space-x-10"
    >
      <div className="lg:w-2/4">
        <h1 className=" text-6xl">
          I'm{" "}
          <span className="font-bold bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent">
            Muhammad Faiz
            <br className="lg:flex" /> Al Ghozi
          </span>
        </h1>
        <p className="my-3">
          I am a recent graduate who has an interest in working in the field of
          programming. Accustomed to using various programming languages such as
          HTML, CSS, Javascript and using Frameworks such as React JS, Next JS,
          Node JS, Flutter. Honest, disciplined and able to work well in a team.
          Has an internship experience of 6 months and has participated in
          making web government websites.
        </p>
        <button className="bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] font-semibold px-6 py-3 rounded-full">
          Download my cv
        </button>
      </div>
      <div className="hidden lg:flex">
        <Image src={laptop} height={520} />
      </div>
    </section>
  );
}
