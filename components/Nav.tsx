import { useState } from "react";

const Nav = ({ showHamburger = false }) => {
  const [burgerMenuOpen, setburgerMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`z-40 fixed top-0 left-0 w-full h-fitn ${
          showHamburger ? "animate-bounceInLeft animate-fast block" : "hidden"
        } 2xl:hidden`}
      >
        <div className="flex flex-col">
          <div
            className={`-z-10 opacity-80 absolute bg-black -top-8 -left-8 rounded-br-[60%] transform transition-all duration-[0.2s] ${
              burgerMenuOpen
                ? "h-60 w-40 -top-4 -left-10 rounded-br-[35%]"
                : "h-24  w-20"
            }`}
          ></div>
          <div className="absolute top-2 left-2">
            <button
              onClick={() => setburgerMenuOpen(!burgerMenuOpen)}
              className={`h-6 w-6 duration-500 transform origin-center ${
                burgerMenuOpen ? "rotate-45" : ""
              }`}
            >
              <div
                className={`relative bg-white h-[2px] w-5 transform transition-all delay-100 origin-center before:bg-white before:h-[2px] before:w-5 before:absolute before:left-0 before:transition-all before:duration-100 after:bg-white after:h-[2px] after:w-5 after:absolute after:left-0 after:transition-all after:duration-100 ${
                  burgerMenuOpen
                    ? "before:rotate-90 before:top-0 after:rotate-90 after:bottom-0 "
                    : "before:-top-2 after:-bottom-2"
                }`}
              ></div>
            </button>
            <ul
              className={`text-white mt-4 ml-4 space-y-3 font-bold underline decoration-2 underline-offset-2 ${
                burgerMenuOpen
                  ? "block animate-bounceInLeft animate-duration-[0.9s]"
                  : "hidden"
              } `}
            >
              <li>
                <a
                  href="#home"
                  onClick={() => setburgerMenuOpen(!burgerMenuOpen)}
                  className="hover:text-lavaOrange active:text-red-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setburgerMenuOpen(!burgerMenuOpen)}
                  className="hover:text-amber-400 active:text-amber-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setburgerMenuOpen(!burgerMenuOpen)}
                  className="hover:text-teal-500 active:text-teal-600"
                >
                  Projects{" "}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setburgerMenuOpen(!burgerMenuOpen)}
                  className="hover:text-indigo-500 active:text-indigo-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="z-50 py-10 pr-16 fixed top-0 right-0 overflow-hidden hidden 2xl:inline">
        <ul className="flex px-1 gap-5 font-semibold text-neutral-900">
          <li className="bg-lavaOrange rounded-md animate-fadeInRight animate-slower">
            <a
              className="flex justify-center align-middle  rounded-md px-4 py-2 hover:text-white transition ease-in-out duration-150 hover:scale-110 active:scale-100 active:text-neutral-200 focus:ring-2 focus:ring-slate-700 focus:ring-inset outline-none focus:hover:ring-0"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="bg-amber-400 rounded-md animate-fadeInRight animate-slow ">
            <a
              className="flex justify-center align-middle rounded-md px-4 py-2 hover:text-white transition ease-in-out duration-150 hover:scale-110 active:scale-100 active:text-neutral-200 focus:ring-2 focus:ring-slate-700 focus:ring-inset outline-none focus:hover:ring-0"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="bg-teal-500 rounded-md animate-fadeInRight animate-fast">
            <a
              className="flex justify-center align-middle  rounded-md px-4 py-2 hover:text-white transition ease-in-out duration-150 hover:scale-110 active:scale-100 active:text-neutral-200 focus:ring-2 focus:ring-slate-700 focus:ring-inset outline-none focus:hover:ring-0"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="bg-indigo-500 rounded-md animate-fadeInRight animate-faster">
            <a
              className="flex justify-center align-middle  rounded-md px-4 py-2 hover:text-white transition ease-in-out duration-150 hover:scale-110 active:scale-100 active:text-neutral-200 focus:ring-2 focus:ring-slate-700 focus:ring-inset outline-none focus:hover:ring-0"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
