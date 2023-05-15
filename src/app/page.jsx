"use client";
import Image from "next/image";
import avatar from "./assets/profile.png";
import Title from "../components/Title";
import IconSkills from "@/components/icon_skills";
import CardPortfolio from "@/components/card_portfolio";
import data from "../json/portfolio.js";
import Experience from "@/components/experience";
import { Sms } from "iconsax-react";

export default function Home() {
  return (
    <main className="px-10 py-7 w-full">
      <section className="flex space-x-3 justify-end">
        <svg
          className="lg:h-9 lg:w-9 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fill="#0a66c2"
            fillRule="evenodd"
            d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm1.05 5h1.9v6h-1.9V6Zm2.025-1.995a1.075 1.075 0 1 1-2.15 0a1.075 1.075 0 0 1 2.15 0ZM12 8.357c0-1.805-1.167-2.507-2.326-2.507a2.206 2.206 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001c.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:h-9 lg:w-9 h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          />
        </svg>
      </section>
      <section id="about" className="my-10 text-center">
        <Image
          className="mx-auto"
          src={avatar}
          alt="Muhammad Faiz Al Ghozi"
          width={165}
          height={165}
        />
        <h1 className="font-semibold text-3xl lg:w-1/3 mx-auto my-4">
          Hi, I'm Muhammad Faiz Al Ghozi
        </h1>
        <p className="lg:w-3/4 mx-auto lg:text-base text-sm lg:text-center text-justify">
          I am a recent graduate who has an interest in working in the field of
          programming. Accustomed to using various programming languages such as
          HTML, CSS, Javascript and using Frameworks such as React JS, Next JS,
          Node JS, Flutter. Honest, disciplined and able to work well in a team.
          Has an internship experience of 6 months and has participated in
          making web government websites.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/u/0/uc?id=1fsO_pM0ej77v29TWCBP38a2b8DkEGXmT&export=download"
            )
          }
          className="bg-[#3F50EA] focus:ring outline-none mt-5 font-semibold px-5 py-2.5 rounded-full transition hover:scale-110"
        >
          Download My CV
        </button>
      </section>
      <section id="skills" className="lg:px-64 md:px-32 px-0">
        <Title className="w-20">Skills</Title>
        <IconSkills />
      </section>
      <section id="portfolio" className="my-10">
        <Title className="w-32">Portfolio</Title>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-7 gap-6">
          {data?.map((data, i) => (
            <CardPortfolio
              tools={data.tools}
              url={data.url}
              key={i}
              title={data.title}
              description={data.description}
              thumbnail={data.thumbnail}
            />
          ))}
        </div>
      </section>
      <section id="experience">
        <Title className="w-44 mb-6">Experience</Title>
        <Experience
          title={"Intern IT Developer"}
          company={"PT. Graha Digital Pratama (Digital Buana)"}
          date={"July 2022 - January 2023"}
          description={[
            "Developed 3 websites in 6 months internship. Working with React JS, Next JS, Node JS, and Flutter.",
            "Working with DevOps team.",
            "Participate in developing government websites projects.",
          ]}
        />
      </section>
      <section id="contact" className="lg:my-20 my-12">
        <h1 className="lg:text-5xl text-3xl font-bold text-center lg:w-1/3 mx-auto lg:my-4">
          Contact me for your project
        </h1>
        <button className="bg-[#212121] hover:bg-[#2B2B2B] lg:mt-10 mt-5 flex mx-auto text-xl items-center px-5 py-3 space-x-3 rounded-lg transition hover:scale-110">
          <Sms className="lg:h-7 lg:w-7 h-5 w-5" />
          <p className="lg:text-base text-sm">Get in touch</p>
        </button>
      </section>
      <footer>
        <hr className="border-[#7B7B7B]" />
        <div className="mt-3 lg:flex lg:justify-between text-[#C3C3C3]">
          <p className="text-sm">Muhammad Faiz Al Ghozi</p>
          <div>
            <p className="text-sm">
              <span className="font-medium">Email:</span>{" "}
              muhammadfaizalghozi1@gmail.com
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone:</span> +62 878 1819 7732
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
