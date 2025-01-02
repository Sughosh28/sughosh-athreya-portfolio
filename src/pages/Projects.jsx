import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "QuizO - A Quiz Application",
    description:
      "A microservices-based quiz application using Spring Boot and PostgreSQL.",
    link: "https://github.com/Sughosh28/Quiz-O",
  },
  {
    name: "Incident Report System",
    description:
      "Web application for managing incident reports with secure data handling.",
    link: "https://github.com/Sughosh28/IncidentReport",
  },
  {
    name: "Heart Disease Prediction",
    description:
      "Federated learning model for predicting heart disease using AI.",
    link: "https://github.com/Sughosh28/FL-for-heart-disease-prediction",
  },
  {
    name: "Blog Platform",
    description:
      "Developed a secure full-stack blog platform with React, Spring Boot, MySQL, and AWS, featuring JWT authentication, personalized emails, and NGINX load balancing.",
    link: "https://github.com/Sughosh28/blog-backend",
    live: "http://blogsbysughosh.xyz/home",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 
              shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-evenly gap-4">
                <Link
                  to={project.link}
                  target="_blank"
                  className="inline-flex items-center justify-center w-1/2 py-3 px-6 text-base font-semibold 
    bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl 
    hover:from-yellow-500 hover:to-yellow-700 transform transition-all duration-300 
    focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Code
                </Link>
                {project.live && (
                  <Link
                    to={project.live}
                    target="_blank"
                    className="inline-flex items-center justify-center w-1/2 py-3 px-6 text-base font-semibold 
      bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl 
      hover:from-yellow-500 hover:to-yellow-700 transform transition-all duration-300 
      focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Live
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
