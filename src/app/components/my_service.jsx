import Title from "@/components/title";
import Image from "next/image";
import fe from "../assets/img/coding.png";
import be from "../assets/img/backend.png";
import mb from "../assets/img/development.png";

export default function MyServices() {
  return (
    <section id="my_services" className="lg:mt-0 mt-10">
      <Title>my services</Title>
      <div className="lg:flex justify-center lg:space-x-10 mt-6">
        <Card img={fe} title={"Web Development"} />
        <Card img={mb} title={"Mobile Development"} />
        <Card img={be} title={"Backend Development"} />
      </div>
    </section>
  );
}

function Card({ title, img }) {
  return (
    <div className="bg-gradient-to-r from-[#834D9B] to-[#D04ED6] p-px flex justify-center items-center rounded-xl lg:mb-0 mb-7">
      <div className="w-full bg-[#161616] p-8 rounded-xl flex flex-col justify-center items-center">
        <Image src={img} className="lg:h-24 lg:w-24 h-20 w-20 " alt={title} />
        <h3 className="text-xl lg:text-left text-center font-semibold mt-5">{title}</h3>
      </div>
    </div>
  );
}
