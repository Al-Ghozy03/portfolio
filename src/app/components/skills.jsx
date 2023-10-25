import Title from "@/components/title";

let skills = [
  "react js",
  "next js",
  "node js",
  "react native",
  "tailwind css",
  "flutter",
  "typescript",
  "MySql",
  "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="lg:mt-28 mt-16">
      <Title>skills</Title>
      <div className="flex flex-wrap lg:space-x-7 justify-center mt-5 lg:w-1/2 mx-auto">
        {skills.map((v, i) => (
          <Card key={i}>{v}</Card>
        ))}
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="bg-gradient-to-r from-[#834D9B] to-[#D04ED6] p-px flex justify-center items-center rounded-lg mb-4 lg:mr-0 mr-2">
      <button className="w-full bg-[#161616] px-5 py-2.5 rounded-lg capitalize lg:text-base text-xs ">
        {children}
      </button>
    </div>
  );
}
