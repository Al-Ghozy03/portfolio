import Image from "next/image";
import logo from "../assets/img/logo.png";
import { openEmail } from "../page";

export default function Footer() {
  return (
    <footer className="bg-dark-transparent w-full lg:px-28 px-10 py-7 lg:flex lg:justify-between">
      <div>
        <Image
          src={logo}
          alt="logo"
          height={30}
          priority
          className="lg:h-[1.875rem] lg:w-[8rem] h-[1.4rem] w-24"
        />
        <p className="lg:text-sm text-xs mt-1">
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
      <div>
        <p className="lg:text-sm text-xs" onClick={openEmail}>
          muhammadfaizalghozi1@gmail.com
        </p>
        <a
          href="https://wa.me/6287818197732"
          target="_blank"
          className="lg:text-sm text-xs mt-1"
        >
          +62 878 1819 7732
        </a>
      </div>
    </footer>
  );
}
