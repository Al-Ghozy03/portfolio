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
      className="flex lg:flex-row flex-col-reverse lg:px-20 px-10 lg:justify-between lg:items-center mt-16"
    >
      <div
        className="grid lg:grid-cols-5 grid-cols-3 gap-y-8 gap-x-14"
         data-aos="fade-right"
      >
        {skills.map((v, k) => (
          <Image
            src={v.icon}
            alt={v.label}
            key={k}
            className="lg:h-14 lg:w-14 h-10 w-10"
          />
        ))}
      </div>
      <div
        className="lg:mb-0 mb-5"
        data-aos="fade-left"
      >
        <h1 className="lg:text-4xl text-3xl font-bold lg:text-right">
          My <span className="text-[#FF644D]">Skills</span>
        </h1>
        <p className="lg:text-xl lg:text-right lg:mt-3 mt-2 leading-6">
          Explore the diverse skills I bring to the
          <br className="lg:inline hidden" />
          projects I undertake
        </p>
      </div>
    </section>
  );
}
