import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "QuizO - A Quiz Application",
    description: "A microservices-based quiz application using Spring Boot and PostgreSQL.",
    link: "https://github.com/Sughosh28/Quiz-O",
  },
  {
    name: "Incident Report System",
    description: "Web application for managing incident reports with secure data handling.",
    link: "https://github.com/Sughosh28/IncidentReport",
  },
  {
    name: "Heart Disease Prediction",
    description: "Federated learning model for predicting heart disease using AI.",
    link: "https://github.com/Sughosh28/FL-for-heart-disease-prediction",
  },
  {
    name: "Training Center Registry",
    description: "API development for managing the registry of training centers.",
    link: "https://github.com/Sughosh28/Backend_traini8_Sughosh",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-yellow-500 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <Link
                to={project.link}
                target="_blank"
                className="inline-block py-3 px-6 text-lg font-semibold bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition-all duration-300"
              >
                View Code
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
