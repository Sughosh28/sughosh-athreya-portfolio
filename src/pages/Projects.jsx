import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "QuizO - A Quiz Application",
    description: "A microservices-based quiz application using Spring Boot and PostgreSQL.",
    link: "https://github.com/Sughosh28/Quiz-O",
    tags: ["Spring Boot", "PostgreSQL", "Microservices"],
  },
  {
    name: "Incident Report System",
    description: "Web application for managing incident reports with secure data handling.",
    link: "https://github.com/Sughosh28/IncidentReport",
    tags: ["Web App", "Security", "Data Handling"],
  },
  {
    name: "Booking Bridge",
    description: "Backend application for seamless event booking management with secure APIs and efficient data handling.",
    link: "https://github.com/Sughosh28/event-booking-backend",
    tags: ["Backend", "APIs", "Event Management"],
  },
  {
    name: "Heart Disease Prediction",
    description: "Federated learning model for predicting heart disease using AI.",
    link: "https://github.com/Sughosh28/FL-for-heart-disease-prediction",
    tags: ["AI", "Federated Learning", "Healthcare"],
  },
  {
    name: "Blog Platform",
    description: "Developed a secure full-stack blog platform with React, Spring Boot, MySQL, and AWS, featuring JWT authentication, personalized emails, and NGINX load balancing.",
    link: "https://github.com/Sughosh28/blog-backend",
    live: "http://blogsbysughosh.xyz/home",
    tags: ["React", "Spring Boot", "MySQL", "AWS"],
  },
];

const Projects = () => {
  
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-950 via-gray-900 to-black min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl font-bold text-center text-gray-100 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl
                       border border-slate-800 hover:border-slate-600
                       shadow-lg hover:shadow-slate-800/20 transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-sm
                               border border-slate-700 hover:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-evenly gap-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    className="inline-flex items-center justify-center w-1/2 py-3 px-6
                             bg-slate-800 text-gray-100 rounded-xl font-semibold
                             hover:bg-slate-700 transform transition-all duration-300
                             focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Code
                  </Link>
                  {project.live && (
                    <Link
                      to={project.live}
                      target="_blank"
                      className="inline-flex items-center justify-center w-1/2 py-3 px-6
                               bg-slate-800 text-gray-100 rounded-xl font-semibold
                               hover:bg-slate-700 transform transition-all duration-300
                               focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  };
  
  export default Projects;