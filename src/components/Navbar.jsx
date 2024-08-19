import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import ShinyText from "../bitsUI/ShinyText";
import GradientText from "../bitsUI/GradientText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-gray-800 text-white fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} // Custom gradient colors
              animationSpeed={3} // Custom animation speed in seconds
              showBorder={false} // Show or hide border
              className="custom-class" // Add one or more custom classes
            >
              Home
            </GradientText>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            <ShinyText
              text="Projects"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400"
          >
            Contact
          </Link>
          <button onClick={toggleDarkMode} className="focus:outline-none ml-4">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="focus:outline-none mr-4">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            onClick={toggleNavbar}
            to="home"
            smooth={true}
            duration={500}
            className="block cursor-pointer text-white hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            onClick={toggleNavbar}
            to="projects"
            smooth={true}
            duration={500}
            className="block cursor-pointer text-white hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            onClick={toggleNavbar}
            to="about"
            smooth={true}
            duration={500}
            className="block cursor-pointer text-white hover:text-gray-400"
          >
            About
          </Link>

          <Link
            onClick={toggleNavbar}
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer text-white hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
