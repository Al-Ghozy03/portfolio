import { Moon } from "iconsax-react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  const openTag = "<";
  const closeTag = "/>";
  const href_to = [
    { href: "#about", title: "About" },
    { href: "#portfolio", title: "Portfolio" },
    { href: "#skills", title: "Skills" },
    { href: "#experience", title: "Experience" },
    { href: "#contact_me", title: "Contact me" },
  ];
  return (
    <section className="w-full flex justify-between z-50 bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg items-center lg:px-8 lg:py-4 fixed">
      <h1 className="logo text-5xl">
        {openTag}
        <span className="text-blue-theme">F</span>
        {closeTag}
      </h1>
      <nav className="space-x-4 flex items-center">
        {href_to.map((data, i) => (
          <a key={i} href={data.href}>
            {data.title}
          </a>
        ))}
        <Moon size={18} className="text-black" />    
      </nav>
    </section>
  );
}
