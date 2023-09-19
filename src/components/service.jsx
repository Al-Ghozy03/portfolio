import mobile from "../app/assets/img/development.png";
import be from "../app/assets/img/backend.png";
import fe from "../app/assets/img/coding.png";
import Image from "next/image";

export default function Service() {
  return (
    <div className="grid lg:grid-cols-3 gap-x-20 mt-10">
      <Card
        img={fe}
        title={"Frontend"}
        href={"https://www.flaticon.com/free-icons/web-development"}
      />
      <Card
        img={be}
        title={"Backend"}
        href={"https://www.flaticon.com/free-icons/backend"}
      />
      <Card
        img={mobile}
        title={"Mobile"}
        href={"https://www.flaticon.com/free-icons/mobile-app"}
      />
    </div>
  );
}

function Card({ img, title, href }) {
  return (
    <div className="bg-[#212121] pt-10 rounded-3xl px-10 cursor-pointer transition hover:scale-110">
      <a href={href} target="_blank">
        <Image src={img} alt="service" className="h-32 w-32 mx-auto" />
      </a>
      <h1 className="capitalize text-2xl font-semibold mt-3 mb-10 text-center">
        {title} development
      </h1>
    </div>
  );
}
