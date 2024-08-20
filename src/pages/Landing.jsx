import React from "react";
import Navbar from "../components/Navbar";
import { Element } from "react-scroll";
import { SplitText } from "../bitsUI/SplitText";
import BlobCursor from "../bitsUI/BlobkCursor";
import Hyperspeed from "../bitsUI/Hyperspeed";
import { hyperspeedPresets } from "../bitsUI/hyperspeedPresets";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ShinyText from "../bitsUI/ShinyText";

const projects = [
  {
    title: "Analyst Chatbot",
    description:
      "AI integration with Data analysis. Upload a csv table and try data analysis with AI",
    image: "https://via.placeholder.com/400x250",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Two",
    description:
      "An overview of project two showcasing some cool features and technologies used.",
    image: "https://via.placeholder.com/400x250",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Three",
    description:
      "A brief look at project three, including its challenges and solutions.",
    image: "https://via.placeholder.com/400x250",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Four",
    description:
      "Details about project four, emphasizing its unique aspects and functionality.",
    image: "https://via.placeholder.com/400x250",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Five",
    description:
      "Insights into project five, focusing on its impact and technological stack.",
    image: "https://via.placeholder.com/400x250",
    demoLink: "#",
    codeLink: "#",
  },
];

const Landing = () => {
  return (
    <div className="text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-white">
      <BlobCursor />
      <Navbar />
      <Element
        name="home"
        className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500 dark:from-gray-700 dark:to-gray-800"
      >
        <h1 className="text-4xl font-bold md:text-6xl">
          <SplitText
            text="Welcome to My Portfolio!"
            className="custom-class"
            delay={50}
          />
        </h1>
      </Element>

      <Element
        name="projects"
        className="flex items-center justify-center h-screen bg-black"
      >
        <div className="z-10 text-center">
          {/* Add your project cards here */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-shadow duration-300 transform bg-gray-800 rounded-lg shadow-lg dark:bg-gray-900 hover:shadow-xl hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="block mb-2 text-2xl font-bold text-white dark:hidden">
                    {project.title}
                  </h3>
                  <ShinyText
                    text={project.title}
                    disabled={false}
                    speed={3}
                    className="hidden mb-2 text-2xl font-bold custom-class dark:block"
                  />
                  <p className="mb-4 text-gray-300 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-400"
                      >
                        <FaExternalLinkAlt className="inline-block w-5 h-5" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-600"
                      >
                        <FaGithub className="inline-block w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Hyperspeed effectOptions={hyperspeedPresets.cyberpunk}></Hyperspeed>
      </Element>

      <Element
        name="about"
        className="flex items-center justify-center h-screen text-white bg-gray-800 dark:bg-black"
      >
        <div className="z-50 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">About Me</h2>
          <p className="text-lg md:text-xl">
            I'm a passionate frontend developer with a love for creating
            interactive and responsive websites.
          </p>
        </div>
        <Hyperspeed effectOptions={hyperspeedPresets.cyberpunk}></Hyperspeed>
      </Element>

      <Element
        name="contact"
        className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-teal-500 dark:from-gray-700 dark:to-gray-800"
      >
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Contact
          </h2>
          <p className="text-lg text-white md:text-xl">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          {/* Add your contact form or details here */}
        </div>
      </Element>
    </div>
  );
};

export default Landing;
