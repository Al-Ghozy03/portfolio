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
          Fullstack Developer with 2+ years of experience in building web
          applications using Node.js, Express.js, React.js, Next.js, and
          Nest.js. Skilled in developing and integrating RESTful APIs, managing
          databases such as PostgreSQL and MySQL, and creating responsive user
          interfaces with Tailwind CSS. Contributed to 5+ projects across
          industries including government and healthcare. Proficient with tools
          like Git, Postman, and experienced in working within Agile cross
          functional teams. Committed to delivering clean, scalable, and
          maintainable code on both frontend and backend.
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
