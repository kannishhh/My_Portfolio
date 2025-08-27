import { useState } from "react";
import InitialsLogo from "../utils/logo";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          <InitialsLogo fullName="Kanish Kainth" />
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={600}
                // offset={-70}
                className="cursor-pointer hover:text-indigo-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-2 rounded-full border border-indigo-500 text-sm hover:bg-indigo-500/20 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button> */}

        <button
          className="md:hidden text-2xl ml-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-black/80 px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-indigo-400 transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
