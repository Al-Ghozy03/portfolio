import Image from "next/image";

export default function Skills() {
  const skills = [
    require("../assets/svg/typescript.svg"),
    require("../assets/svg/javascript.svg"),
    require("../assets/svg/react.svg"),
    require("../assets/svg/next.svg"),
    require("../assets/svg/flutter.svg"),
    require("../assets/svg/nodejs.svg"),
    require("../assets/svg/express.svg"),
    require("../assets/svg/nestjs.svg"),
    require("../assets/svg/graphql.svg"),
    require("../assets/svg/mysql.svg"),
    require("../assets/svg/mongodb.svg"),
    require("../assets/svg/tailwind.svg"),
  ];
  return (
    <section
      id="skills"
      className="flex px-20 justify-between items-center mt-16"
    >
      <div className="grid grid-cols-5 gap-y-8 gap-x-14">
        {skills.map((v, k) => (
          <Image src={v} key={k} className="h-14 w-14" />
        ))}
      </div>
      <div>
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
