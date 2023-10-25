import Image from "next/image";
import laptop from "../assets/img/laptop.png";
import circle from "../assets/img/circle.png";

export default function About() {
  return (
    <section
      id="about"
      className="lg:flex lg:justify-between lg:items-center lg:space-x-10 lg:h-screen h-[75vh] bg-right bg-no-repeat lg:px-28 px-10 pt-20 lg:pt-0"
      style={{ backgroundImage: `url(${circle.src})` }}
    >
      <div className="lg:w-2/4">
        <h1 className=" lg:text-6xl text-3xl lg:text-left text-center">
          I'm{" "}
          <span className="font-bold bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent">
            Muhammad Faiz
            <br className="lg:flex hidden" /> Al Ghozi
          </span>
        </h1>
        <p className="my-3 lg:text-base text-xs lg:text-left text-justify">
          I am a Software Engineer with over 1 year of experience. I am also a
          student at Universitas Muhammadiyah Prof. Dr. HAMKA (UHAMKA) with a
          strong passion for programming. I possess in-depth knowledge and
          skills in technologies such as React JS, Next JS, Node JS, and
          Flutter. My experience encompasses a variety of projects, including
          active participation in developing web projects for government
          institutions. I enjoy combining my academic insights with the
          practical understanding I've gained from working in the industry. I am
          always eager to continue learning and innovating towards achieving
          optimal and high-quality software solutions.
        </p>
        <button className="bg-gradient-to-r lg:text-base text-xs from-[#8A2387] via-[#E94057] to-[#F27121] font-semibold lg:px-6 lg:py-3 px-4 py-2.5 rounded-full hover:scale-110 transition">
          Download My CV
        </button>
      </div>
      <div className="hidden lg:flex">
        <Image src={laptop} alt="laptop" height={520} />
      </div>
    </section>
  );
}
