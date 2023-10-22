import Image from "next/image";
import logo from "../assets/img/logo.png";
import { openEmail } from "../page";

export default function Footer() {
  return (
    <footer className="bg-dark-transparent w-full px-28 py-7 flex justify-between">
      <div>
        <Image src={logo} alt="logo" height={30} priority />
        <p className="text-sm mt-1">
          Illustration from{" "}
          <a
            className="text-blue-500"
            href="https://www.freepik.com/"
            target="_blank"
          >
            Freepik
          </a>{" "}
          and{" "}
          <a
            className="text-blue-500"
            href="https://flaticon.com"
            target="_blank"
          >
            Flaticon
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <button className="text-sm" onClick={openEmail}>
          muhammadfaizalghozi1@gmail.com
        </button>
        <a href="https://wa.me/6287818197732" target="_blank" className="text-sm mt-1">
          +62 878 1819 7732
        </a>
      </div>
    </footer>
  );
}
