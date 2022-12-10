import Title from "./Title";
import react from "../../Assets/react.png";
import next from "../../Assets/next js.png";
import tailwind from "../../Assets/tailwind.png";
import nodejs from "../../Assets/nodejs.png";
import javascript from "../../Assets/javascript.png";
import figma from "../../Assets/figma.png";
import flutter from "../../Assets/flutter.png";
import mongodb from "../../Assets/mongodb.png";
import mysql from "../../Assets/mysql.png";
import laravel from "../../Assets/laravel.png";
import { useState } from "react";

export default function Skills() {
  const [skills] = useState([
    {
      logo: react,
      text: "React JS",
    },
    {
      logo: next,
      text: "Next JS",
    },
    {
      logo: tailwind,
      text: "Tailwind Css",
    },
    {
      logo: nodejs,
      text: "Node JS",
    },
    {
      logo: javascript,
      text: "Javascript",
    },
    {
      logo: laravel,
      text: "Laravel",
    },
    {
      logo: figma,
      text: "Figma",
    },
    {
      logo: flutter,
      text: "Flutter",
    },
    {
      logo: mongodb,
      text: "MongoDb",
    },
    {
      logo: mysql,
      text: "MySql",
    },
  ]);
  return (
    <section id="skills" className="my-20 px-8">
      <Title>Skills</Title>
      <article className="grid lg:grid-cols-3 lg:gap-y-6 gap-y-4 lg:gap-x-10 my-5">
        {skills.map((data, i) => (
          <Card key={i} logo={data.logo} text={data.text} i={i} />
        ))}
      </article>
    </section>
  );
}

function Card({ logo, text, i }) {
  return (
    <div className={`bg-white drop-shadow-md px-7 py-4 rounded-lg flex items-center space-x-3 ${i === 9 && "lg:col-start-2"}`}>
      <img src={logo} alt={logo} className="h-7" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}
