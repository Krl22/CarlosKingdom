import React from "react";
import Navbar from "../components/Navbar";
import { Element } from "react-scroll";
import { SplitText } from "../bitsUI/SplitText";
import BlobCursor from "../bitsUI/BlobkCursor";

const Landing = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <BlobCursor />
      <Navbar />
      <Element
        name="home"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 dark:from-gray-700 dark:to-gray-800"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <SplitText
            text="Welcome to My Portfolio!"
            className="custom-class"
            delay={50}
          />
        </h1>
      </Element>

      <Element
        name="projects"
        className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-lg md:text-xl">
            Here are some of the projects I've worked on.
          </p>
          {/* Add your project cards here */}
        </div>
      </Element>

      <Element
        name="about"
        className="h-screen flex items-center justify-center bg-gray-800 dark:bg-gray-900 text-white"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl">
            I'm a passionate frontend developer with a love for creating
            interactive and responsive websites.
          </p>
        </div>
      </Element>

      <Element
        name="contact"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 dark:from-gray-700 dark:to-gray-800"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-white">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          {/* Add your contact form or details here */}
        </div>
      </Element>
    </div>
  );
};

export default Landing;
