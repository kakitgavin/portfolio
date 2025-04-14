import { useState } from "react";
import { navLinks } from "../constants";

function NavItems({ onClick }) {
  return (
    <ul className="flex flex-col gap-4 m-7 md:m-0 md:flex-row text-neutral-400 font-bold text-lg">
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            onClick={onClick}
            href={item.link}
            className="cursor-pointer hover:text-white transition-colors"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="fixed flex flex-col justify-center top-0 w-full min-w-70 z-50 bg-black">
      <div className="max-w-7xl w-full p-5 flex justify-between">
        <div className="flex items-center gap-5">
          <a
            href="/portfolio/"
            className="text-neutral-400 text-lg font-bold hover:text-white transition-colors"
          >
            Gavin Lui
          </a>
          <a href="https://github.com/kakitgavin" target="_blank">
            <img src="github.png" className="w-10" />
          </a>
        </div>

        <button onClick={toggleMenu} className="md:hidden cursor-pointer">
          <img
            src={isOpen ? "close.svg" : "hamburger-menu.svg"}
            className="w-5 h-5 mx-2"
          ></img>
        </button>
        <nav className="md:flex hidden">
          <NavItems />
        </nav>
      </div>
      <nav
        className={`bg-white/10 w-full overflow-hidden self-start ${
          isOpen ? "max-h-screen" : "max-h-0"
        } md:hidden`}
      >
        <NavItems onClick={toggleMenu} />
      </nav>
    </header>
  );
}

export default NavBar;
