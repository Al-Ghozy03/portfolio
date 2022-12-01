import Title from "./Title";

export default function Experience() {
  return (
    <section id="experience" className="my-20 px-8 ">
      <Title>Experience</Title>
      <article className="flex space-x-5">
        <Flag />
        <div>
            <h2 className="text-2xl font-semibold">Intern IT Developer (2022)</h2>
            <p className="">PT. Graha Digital Pratama</p>
            <ul className="list-disc text-sm pl-5">
                <li>Responsible for developing application using Flutter</li>
                <li>Responsible for developing website using React JS and Next JS</li>
                <li>Responsible for developing backend using Node JS and Laravel</li>
            </ul>
        </div>
      </article>
    </section>
  );
}

function Flag() {
  return (
    <div className="items-center flex flex-col">
      <div className="bg-blue-theme p-3.5 rounded-full" />
      <div className="bg-blue-theme h-full w-0.5 mt-2" />
    </div>
  );
}
