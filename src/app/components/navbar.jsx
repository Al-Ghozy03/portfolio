"use client";
import Image from "next/image";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center">
      <Image src={logo} alt="logo" height={30} priority />
      <nav className="capitalize lg:flex lg:space-x-5 lg:text-sm items-center">
        <p>about</p>
        <p>skills</p>
        <p>my services</p>
        <p>work experiences</p>
        <p>portfolio</p>
        <div className="bg-gradient-to-r from-[#834D9B] to-[#D04ED6] p-px flex justify-center items-center rounded-full">
          <button className="w-full hover:bg-gradient-to-r hover:from-[#834D9B] hover:to-[#D04ED6] hover:font-semibold bg-[#161616] px-5 py-2.5 rounded-full">
            Contact me
          </button>
        </div>
      </nav>
    </header>
  );
}
