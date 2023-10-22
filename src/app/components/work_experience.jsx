import Title from "@/components/title";
import { useState } from "react";

const workExperiences = [
  {
    company: "PT. Pertamina Training and Consulting",
    role: "Software Engineer",
    from: "July 2023",
    to: "Present",
    activities: [
      "Working with React JS, Next JS, and React Native",
      "Participate in developing Allcare System",
      "Socializing the use of Allcare System to the provider",
    ],
  },
  {
    company: "Digital Buana",
    role: "Intern IT Developer",
    from: "July 2022",
    to: "January 2023",
    activities: [
      "Developed 3 websites in 6 months internship",
      "Working with React JS, Next JS, Node JS, and Flutter",
      "Working with DevOps team",
      "Participate in developing government websites projects",
    ],
  },
];

export default function WorkExperience() {
  const [index, setIndex] = useState(0);

  return (
    <section id="word_experience" className="mt-28">
      <Title>work experiences</Title>
      <div className="flex space-x-10 mt-5">
        <div className="flex flex-col">
          {workExperiences.map((v, i) => (
            <button
              onClick={() => setIndex(i)}
              className={`text-left ${
                index === i && "bg-dark-transparent"
              } mb-5 flex h-10 justify-start items-center pr-7`}
              key={i}
            >
              {index === i && (
                <div className="h-full w-1 bg-gradient-to-b from-[#8A2387] via-[#E94057] to-[#F27121]"></div>
              )}
              <p className={`ml-2 ${index !== i && "text-[#949494]"}`}>
                {v.company}
              </p>
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            {workExperiences[index].role}
          </h3>
          <p className="text-sm">
            {workExperiences[index].from} - {workExperiences[index].to}
          </p>
          <ul className="list-disc text-sm mt-2 ml-4">
            {workExperiences[index].activities.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
