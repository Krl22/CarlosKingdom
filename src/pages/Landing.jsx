import React from "react";
import Navbar from "../components/Navbar";
import { Element } from "react-scroll";
import { SplitText } from "../bitsUI/SplitText";
import BlobCursor from "../bitsUI/BlobkCursor";
import Hyperspeed from "../bitsUI/Hyperspeed";
import { hyperspeedPresets } from "../bitsUI/hyperspeedPresets";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ShinyText from "../bitsUI/ShinyText";
import ss1 from "../assets/ss1.png";

const projects = [
  {
    title: "Analyst Chatbot",
    description:
      "AI integration with Data analysis. Upload a csv table and try data analysis with AI",
    image:
      "https://images.treasuryandrisk.com/cdn-cgi/image/format=auto,fit=contain/https://images.treasuryandrisk.com/contrib/content/uploads/sites/411/2022/11/2022-11-17-AI-data-analysis.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "English Learning",
    description:
      "A platform where you can learn english through games and challenges.",
    image: ss1,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Web Scrapping",
    description: "get useful data from a website.",
    image: "https://i.imgur.com/6zM7JBq.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Game",
    description: "Multiplayer online game.",
    image:
      "https://www.algoworks.com/wp-content/uploads/2020/11/game-development-company.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Data Analysis",
    description: "Data Analysis project.",
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
        <div className="z-10 text-center pointer-events-none">
          {/* Add your project cards here */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-shadow duration-300 transform bg-gray-800 rounded-lg shadow-lg pointer-events-auto dark:bg-gray-900 hover:shadow-xl hover:scale-105"
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
        className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-800 dark:bg-black"
      >
        <div className="text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">About Me</h2>
          <p className="mb-12 text-xl md:text-2xl">
            I'm a passionate frontend developer with a love for creating
            interactive and responsive websites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Skills Card */}
          <div className="p-6 transition-transform duration-300 transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Skills</h3>
            <ul className="space-y-2 text-lg">
              <li>HTML | CSS | JavaScript | Node | Express</li>
              <li>React | jQuery | NoSQL | Git | PostgreSQL</li>
              <li>Python | Fast API | Excel | Tableau</li>
              <li>MSSQL | Frontend | Backend | Full-Stack</li>
              <li>English | Spanish</li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="p-6 transition-transform duration-300 transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Experience</h3>
            <div className="space-y-4 text-lg">
              <div>
                <h4 className="font-bold">Data Analyst</h4>
                <p className="text-sm text-gray-400">
                  Catholic Charities | 04/2022 - Current
                </p>
                <ul className="mt-2 space-y-1">
                  <li>• Analyzed datasets with SQL, Excel, and Python.</li>
                  <li>• Built interactive dashboards in Tableau.</li>
                  <li>• Automated tasks with Python scripts.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">IT, Intern</h4>
                <p className="text-sm text-gray-400">
                  Harvard | 01/2020 - 06/2020
                </p>
                <ul className="mt-2 space-y-1">
                  <li>• Provided technical support for faculty.</li>
                  <li>• Analyzed student performance data.</li>
                  <li>• Developed web pages with HTML.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 transition-transform duration-300 transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Education</h3>
            <div className="space-y-4 text-lg">
              <div>
                <h4 className="font-bold">Cybersecurity</h4>
                <p className="text-sm text-gray-400">
                  CyberWarriors | 07/2020 - 06/2021
                </p>
                <ul className="mt-2 space-y-1">
                  <li>• Studied threat detection and risk management.</li>
                  <li>• Learned Python and JavaScript for security scripts.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Quality Assurance</h4>
                <p className="text-sm text-gray-400">
                  Year Up | 07/2019 - 12/2019
                </p>
                <ul className="mt-2 space-y-1">
                  <li>• Learned software testing methodologies.</li>
                  <li>• Built websites using HTML, CSS, and JavaScript.</li>
                  <li>• Developed a 3D game in Unity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          className="px-8 py-3 mt-12 font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() =>
            alert("Aquí mostrarías tu currículum completo en la web.")
          }
        >
          View Full Resume
        </button>
      </Element>

      <Element
        name="contact"
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 dark:from-gray-700 dark:to-gray-800"
      >
        <div className="px-6 py-12 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="mb-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-left text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-left text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-left text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-6 font-bold text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
            >
              Send Message
            </button>
          </form>
        </div>
      </Element>
    </div>
  );
};

export default Landing;
