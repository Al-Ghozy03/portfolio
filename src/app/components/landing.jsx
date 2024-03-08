import thumbnail from "@/app/assets/img/person-with-laptop.jpg";
import dot from "@/app/assets/img/dot.png";
import Image from "next/image";
import github from "@/app/assets/svg/github.svg";
import linkedin from "@/app/assets/svg/linkedin.svg";
import whatsapp from "@/app/assets/svg/whatsapp.svg";

export default function Landing() {
  return (
    <section className="h-screen flex items-center justify-between px-20">
      <div>
        <h1 className="text-5xl">
          Hi, i'm{" "}
          <span className="font-bold text-[#FF644D]">
            Muhammad Faiz Al
            <br />
            Ghozi
          </span>
        </h1>
        <p className="text-xl mt-3 mb-6">Fullstack Developer</p>
        <div className="flex flex-col w-64 relative">
          <div className="bg-[#FF644D] rounded-full h-[3.7rem] relative blur-lg opacity-50" />
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1f-CayiURoLGhCHXFlcw8V5IPZ-6hvPSj/view"
              )
            }
            className="text-white font-semibold text-xl bg-[#FF644D] px-7 py-4 rounded-full absolute w-full transition-all hover:scale-110"
          >
            Download My CV
          </button>
        </div>
      </div>
      <div className="flex">
        <Image
          src={thumbnail}
          alt={"thumbnail"}
          className="h-[43rem] w-[43rem]"
        />
        <div className="flex flex-col items-center space-y-3">
          <div className="w-0.5 h-1/2 bg-red-400" />
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-al-ghozi"
            target="_blank"
          >
            <Image src={linkedin} className="h-9 w-9" />
          </a>
          <a href="https://github.com/Al-Ghozy03" target="_blank">
            <Image src={github} className="h-9 w-9" />
          </a>
          <a href="https://wa.me/6287818197732" target={"_blank"}>
            <Image src={whatsapp} className="h-9 w-9" />
          </a>
        </div>
      </div>
    </section>
  );
}
