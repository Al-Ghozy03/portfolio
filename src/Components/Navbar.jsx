/* eslint-disable jsx-a11y/anchor-is-valid */
import { HambergerMenu, Moon } from "iconsax-react";
import { useState } from "react";

const href_to = [
  { href: "#about", title: "About" },
  { href: "#portfolio", title: "Portfolio" },
  { href: "#skills", title: "Skills" },
  { href: "#experience", title: "Experience" },
  { href: "#contact_me", title: "Contact me" },
];

export default function Navbar() {
  const openTag = "<";
  const closeTag = "/>";
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section>
      <div className="w-full flex justify-between z-50 bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg items-center lg:px-16 px-10 py-4 fixed">
        <h1 className="logo lg:text-5xl text-3xl">
          {openTag}
          <span className="text-blue-theme">F</span>
          {closeTag}
        </h1>
        <button className="lg:hidden" onClick={handleOpen}>
          <HambergerMenu />
        </button>
        <nav className="space-x-4 lg:flex hidden items-center">
          {href_to.map((data, i) => (
            <a key={i} href={data.href} className="text-sm">
              {data.title}
            </a>
          ))}
          <Moon size={18} className="text-black" />
        </nav>
      </div>
      <MenuMobile open={open} setOpen={setOpen} />
    </section>
  );
}

function MenuMobile({ open, setOpen }) {
  return (
    <nav
      className={`bg-white bg-opacity-30 drop-shadow-lg backdrop-blur-lg fixed w-full flex flex-col z-40 px-10 pb-4 space-y-2 lg:hidden transition-all ${
        open ? "h-64 top-[2rem] pt-14 " : "h-0"
      }`}
    >
      {href_to.map((data, i) => (
        <a
          onClick={() => setOpen(false)}
          key={i}
          href={data.href}
          className={`text-sm ${!open && "hidden"}`}
        >
          {data.title}
        </a>
      ))}
      <Moon size={18} className={`text-black ${!open && "hidden"}`} />
    </nav>
  );
}
