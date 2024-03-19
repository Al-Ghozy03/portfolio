import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      label: "typescript",
      icon: require("../assets/svg/typescript.svg"),
    },
    {
      label: "javascript",
      icon: require("../assets/svg/javascript.svg"),
    },
    {
      label: "react js",
      icon: require("../assets/svg/react.svg"),
    },
    {
      label: "next js",
      icon: require("../assets/svg/next.svg"),
    },
    {
      label: "flutter",
      icon: require("../assets/svg/flutter.svg"),
    },
    {
      label: "node js",
      icon: require("../assets/svg/nodejs.svg"),
    },
    {
      label: "express js",
      icon: require("../assets/svg/express.svg"),
    },
    {
      label: "tailwind css",
      icon: require("../assets/svg/tailwind.svg"),
    },
    {
      label: "nest js",
      icon: require("../assets/svg/nestjs.svg"),
    },
    {
      label: "graphql",
      icon: require("../assets/svg/graphql.svg"),
    },
    {
      label: "mysql",
      icon: require("../assets/svg/mysql.svg"),
    },
    {
      label: "mongodb",
      icon: require("../assets/svg/mongodb.svg"),
    },
  ];
  return (
    <section
      id="skills"
      className="flex px-20 justify-between items-center mt-16"
    >
      <div className="grid grid-cols-5 gap-y-8 gap-x-14" data-aos="fade-right">
        {skills.map((v, k) => (
          <Image src={v.icon} alt={v.label} key={k} className="h-14 w-14" />
        ))}
      </div>
      <div data-aos="fade-left">
        <h1 className="text-4xl font-bold text-right">
          My <span className="text-[#FF644D]">Skills</span>
        </h1>
        <p className="text-xl text-right mt-3 leading-6">
          Explore the diverse skills I bring to the
          <br />
          projects I undertake
        </p>
      </div>
    </section>
  );
}
