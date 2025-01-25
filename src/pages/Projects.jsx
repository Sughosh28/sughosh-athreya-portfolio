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
        className="py-20 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 min-h-screen"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl 
                         border border-yellow-200 hover:border-yellow-400 
                         shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
                         transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-yellow-100/10 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} 
                            className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium
                                     hover:bg-yellow-200 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-evenly gap-4">
                    <Link
                      to={project.link}
                      target="_blank"
                      className="inline-flex items-center justify-center w-1/2 py-3 px-6 text-base font-semibold 
                               bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-500 
                               transform transition-all duration-300 hover:scale-105"
                    >
                      Code
                    </Link>
                    {project.live && (
                      <Link
                        to={project.live}
                        target="_blank"
                        className="inline-flex items-center justify-center w-1/2 py-3 px-6 text-base font-semibold 
                                 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-500 
                                 transform transition-all duration-300 hover:scale-105"
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