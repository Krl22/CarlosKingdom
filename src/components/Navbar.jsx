import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import ShinyText from "../bitsUI/ShinyText";
import GradientText from "../bitsUI/GradientText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = (event) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 z-20 w-full text-white transition-colors duration-300 bg-gray-800 shadow-lg dark:bg-gray-900">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-xl font-bold tracking-wide">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              My Portfolio
            </GradientText>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Home
            </GradientText>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
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
            className="transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            Contact
          </Link>
          <label className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-800 dark:bg-gray-900 transition-colors duration-300`}
      >
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Dark Mode Toggle */}
          <label className="flex items-center gap-2 mb-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* Mobile Menu Items */}
          <Link
            onClick={toggleNavbar}
            to="home"
            smooth={true}
            duration={500}
            className="block text-white transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Home
            </GradientText>
          </Link>
          <Link
            onClick={toggleNavbar}
            to="projects"
            smooth={true}
            duration={500}
            className="block text-white transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            <ShinyText
              text="Projects"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </Link>
          <Link
            onClick={toggleNavbar}
            to="about"
            smooth={true}
            duration={500}
            className="block text-white transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            About
          </Link>
          <Link
            onClick={toggleNavbar}
            to="contact"
            smooth={true}
            duration={500}
            className="block text-white transition-colors cursor-pointer hover:text-gray-300 dark:hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
