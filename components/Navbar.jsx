import Image from "next/image";
import { useState } from "react";
import { close, logo, menu } from "../assets/svg";
import NavLink from "../components/NavLink";

function Navbar() {
  let [openBar, setOpenBar] = useState(false);

  const handleClick = () => {
    setOpenBar(!openBar);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-2 bg-black shadow-sm md:px-10 shadow-gray-500/10">
      <NavLink exact href="/">
        <Image src={logo} alt="iBrad" />
      </NavLink>
      <button
        className="transition-all duration-200 outline-none active:scale-125"
        onClick={handleClick}
      >
        <Image src={menu} alt="menu" width={30} />
      </button>
      <ul
        className={`fixed top-0 right-0 w-3/4 h-screen pt-16 text-white transition-all duration-500 ${
          openBar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } bg-black md:w-1/3`}
      >
        <li>
          <button
            className="absolute transition-all duration-200 outline-none top-3 right-3 active:scale-125"
            onClick={handleClick}
          >
            <Image src={close} alt="close" width={25} />
          </button>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            href="/works"
            className="block px-5 py-5 text-sm font-medium transition-all duration-200 border-2 border-transparent md:text-md group hover:bg-accent active:bg-accent active:scale-125 hover:border-white active:border-white"
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            href="/skills"
            className="block px-5 py-5 text-sm font-medium transition-all duration-200 border-2 border-transparent md:text-md group hover:bg-accent active:bg-accent active:scale-125 hover:border-white active:border-white"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            href="/about"
            className="block px-5 py-5 text-sm font-medium transition-all duration-200 border-2 border-transparent md:text-md group hover:bg-accent active:bg-accent active:scale-125 hover:border-white active:border-white"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            href="/testimonials"
            className="block px-5 py-5 text-sm font-medium transition-all duration-200 border-2 border-transparent md:text-md group hover:bg-accent active:bg-accent active:scale-125 hover:border-white active:border-white"
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            href="/contact"
            className="block px-5 py-5 text-sm font-medium transition-all duration-200 border-2 border-transparent md:text-md group hover:bg-accent active:bg-accent active:scale-125 hover:border-white active:border-white"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
