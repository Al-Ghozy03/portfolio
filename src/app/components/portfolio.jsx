import Title from "@/components/title";
import data from "../../variable/portfolio";
import Image from "next/image";

export default function PortFolio() {
  return (
    <section id="portfolio" className="mt-28">
      <Title>portfolio</Title>
      {data.map((v, i) => (
        <div
          key={i}
          className={`flex ${
            i % 2 !== 0 && "flex-row-reverse"
          } mb-10 items-center space-x-16`}
        >
          <Image
            src={v.thumbnail}
            alt={v.title}
            className="h-[24rem] w-[24rem] rounded-xl"
          />
          <div className={`${i % 2 === 0 && "text-right"}`}>
            <p className="text-purple-500">Featured project</p>
            <h1 className="text-3xl font-semibold my-2 capitalize">
              {v.title}
            </h1>
            <p>{v.description}</p>
            <div
              className={`flex space-x-5 mt-5 ${i % 2 === 0 && "justify-end"}`}
            >
              {v.tools.map((j, key) => (
                <Skill key={key}>{j}</Skill>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Skill({ children }) {
  return (
    <div className="bg-dark-transparent px-5 py-2 rounded-full">
      <p>{children}</p>
    </div>
  );
}
