import Image from "next/image";
import laptop from "../assets/img/laptop.png";
import circle from "../assets/img/circle.png";

export default function About() {
  return (
    <section
      id="about"
      className="lg:flex lg:justify-between lg:items-center lg:space-x-10 h-screen bg-right bg-no-repeat px-28"
      style={{ backgroundImage: `url(${circle.src})` }}
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
        <button className="bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] font-semibold px-6 py-3 rounded-full hover:scale-110 transition">
          Download My CV
        </button>
      </div>
      <div className="hidden lg:flex">
        <Image src={laptop} alt="laptop" height={520} />
      </div>
    </section>
  );
}
