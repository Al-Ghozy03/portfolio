import { useParams } from "react-router-dom";
import project from "../../../project";

export default function Info() {
  const {slug} = useParams()
  const data = project.filter(i=>i.slug === slug)[0]

  return (
    <section id="info" className="lg:pt-32 pt-28 lg:px-16 px-10 bg-blue-theme w-full h-full lg:flex pb-10">
      <img src={data.mockup} alt={data.mockup} className="lg:h-[28rem] h-96 lg:mx-0 mx-auto" />
      <h1 className="text-3xl text-white font-bold mt-5">{data.name}</h1>
      <p className="text-white text-sm my-2">{data.description}</p>
      <p className="text-white text-sm my-2 font-semibold">Tools: {data.tools.toString()}</p>
    </section>
  );
}
