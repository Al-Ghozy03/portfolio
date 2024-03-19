import projects from "../../variable/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-20 mt-24">
      <h1 className="text-4xl font-bold text-right">
        My <span className="text-[#FF644D]">Projects</span>
      </h1>
      <p className="text-xl text-right mt-3 leading-6">
        See my work experiences and the
        <br />
        achievements I have accomplished
      </p>
      <div className="grid grid-cols-4 gap-x-10 mt-10">
        {projects.map((val, k) => (
          <Card key={k} data={val} />
        ))}
      </div>
    </section>
  );
}

function Card({ data }) {
  return (
    <div className="border-2 rounded-3xl flex flex-col px-5 py-5 mb-10 bg-white shadow-xl shadow-gray-200">
      <Image src={data.thumbnail} alt={data.title} className="w-full rounded-2xl" />
      <a href={data.url} target="_blank">
        <h2 className="text-2xl font-semibold mt-5 mb-2 hover:underline">
          {data.title}
        </h2>
      </a>
      <p className="text-sm text-gray-600">{data.description}</p>
    </div>
  );
}
