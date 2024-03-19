import projects from "../../variable/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="lg:px-20 px-10 lg:mt-24 mt-14">
      <div data-aos="fade-left">
        <h1 className="lg:text-4xl text-3xl font-bold lg:text-right">
          My <span className="text-[#FF644D]">Projects</span>
        </h1>
        <p className="lg:text-xl lg:text-right lg:mt-3 mt-1 leading-6">
          See my work experiences and the
          <br />
          achievements I have accomplished
        </p>
      </div>
      <div
        className="grid lg:grid-cols-4 lg:gap-x-10 lg:mt-10 mt-5"
        data-aos="fade-up"
      >
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
      <Image
        src={data.thumbnail}
        alt={data.title}
        className="w-full rounded-2xl"
      />
      <a href={data.url} target="_blank">
        <h2 className="lg:text-2xl text-xl font-semibold mt-5 mb-2 hover:underline">
          {data.title}
        </h2>
      </a>
      <p className="text-sm text-gray-600">{data.description}</p>
    </div>
  );
}
