import Title from "@/components/title";
import data from "../../variable/portfolio";
import Image from "next/image";
import { ExportSquare } from "iconsax-react";

export default function PortFolio() {
  return (
    <section id="portfolio" className="mt-28">
      <Title>portfolio</Title>
      {data.map((v, i) => (
        <div
          key={i}
          className={`lg:flex lg:mt-16 mt-8 ${
            i % 2 !== 0 && "lg:flex-row-reverse"
          } mb-10 items-center lg:space-x-16`}
        >
          <Image
            src={v.thumbnail}
            alt={v.title}
            className="lg:h-[24rem] lg:w-[24rem] rounded-xl"
          />
          <div
            className={`${
              i % 2 === 0
                ? "lg:text-right text-justify"
                : "lg:text-left text-justify"
            } lg:mt-0 mt-5`}
          >
            <p className="text-purple-500 lg:text-base text-xs">
              Featured project
            </p>
            <div
              className={`flex items-center space-x-5 ${
                i % 2 === 0 && "justify-end"
              }`}
            >
              <a
                href={v.url}
                target="_blank"
                className="bg-dark-transparent hover:bg-gray-800 p-2 rounded-lg"
              >
                <ExportSquare size={20} />
              </a>
              <h1 className="lg:text-3xl font-semibold my-2 capitalize">
                {v.title}
              </h1>
            </div>
            <p className="lg:text-base text-xs">{v.description}</p>
            <div
              className={`flex space-x-5 mt-5 ${
                i % 2 === 0 && "lg:justify-end"
              }`}
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
      <p className="lg:text-base text-xs">{children}</p>
    </div>
  );
}
