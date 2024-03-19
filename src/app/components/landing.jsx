import thumbnail from "../assets/img/person-with-laptop.jpg";
import Image from "next/image";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import Button from "../fragments/button";

export default function Landing() {
  return (
    <section className="h-screen flex items-center justify-between px-20">
      <div data-aos="fade-right">
        <h1 className="text-5xl">
          Hi, i'm{" "}
          <span className="font-bold text-[#FF644D]">
            Muhammad Faiz Al
            <br />
            Ghozi
          </span>
        </h1>
        <p className="text-xl mt-3 mb-6">Fullstack Developer</p>
        <Button
          className={"w-64"}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1f-CayiURoLGhCHXFlcw8V5IPZ-6hvPSj/view"
            )
          }
        >
          Download My CV
        </Button>
      </div>
      <div className="flex">
        <a
          data-aos="zoom-out"
          href="https://www.freepik.com/free-vector/coding-concept-illustration_82635880.htm"
          target="_blank"
        >
          <Image
            src={thumbnail}
            alt={"thumbnail"}
            className="h-[43rem] w-[43rem]"
          />
        </a>
        <div className="flex flex-col items-center space-y-3">
          <div className="w-0.5 h-1/2 bg-red-400" />
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-al-ghozi"
            target="_blank"
          >
            <Image src={linkedin} className="h-9 w-9" alt="linkedin" />
          </a>
          <a href="https://github.com/Al-Ghozy03" target="_blank">
            <Image src={github} className="h-9 w-9" alt="github" />
          </a>
          <a href="https://wa.me/6287818197732" target={"_blank"}>
            <Image src={whatsapp} className="h-9 w-9" alt="whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}
