import Image from "next/image";
import bg from "../assets/img/about.jpg";
import Button from "../fragments/button";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between lg:px-20 px-10 lg:mt-20 mt-10 lg:mb-0 mb-10"
    >
      <div className="lg:w-1/2" data-aos="fade-right">
        <h1 className="lg:text-4xl text-3xl font-bold">
          About <span className="text-[#FF644D]">me</span>
        </h1>
        <p className="lg:text-lg mt-3 mb-5 text-base  text-justify">
          Software Engineer with 3 years of experience delivering
          production-ready web applications across healthcare, government, and
          event management sectors. Strong in backend development using Golang
          and NestJS, complemented by frontend expertise with Next.js and
          Tailwind CSS. Experienced in designing and integrating RESTful APIs,
          managing PostgreSQL and MySQL databases, and handling large-scale data
          processing with Python. Successfully contributed to 10+ projects,
          building scalable, maintainable, and high-performance systems while
          collaborating in Agile cross-functional teams.
        </p>
        <a href="#contact">
          <Button className={"lg:w-48 w-full"}>Let's talk</Button>
        </a>
      </div>
      <a
        data-aos="fade-left"
        target="_blank"
        href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21532468.htm"
      >
        <Image
          src={bg}
          alt="about-me"
          className="lg:h-[33rem] lg:w-[33rem] lg:inline hidden"
        />
      </a>
    </section>
  );
}
