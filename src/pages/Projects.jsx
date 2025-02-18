import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "QuizO - A Quiz Application",
    description:
      "A scalable microservices-based quiz application built with Spring Boot, PostgreSQL, and Eureka for service discovery. Supports dynamic quiz creation, result processing, and seamless inter-service communication.",
    link: "https://github.com/Sughosh28/Quiz-O",
    tags: ["Spring Boot", "PostgreSQL", "Microservices", "Eureka", "REST API"],
  },
  {
    name: "Incident Report System",
    description:
      "A secure web-based platform for managing incident reports, ensuring data integrity with Spring Security. Features real-time updates, CSRF protection, and audit logging.",
    link: "https://github.com/Sughosh28/IncidentReport",
    tags: ["Spring Boot", "Spring Security",  "CSRF Protection", "REST API"],
  },
  {
    name: "Booking Bridge",
    description:
      "A robust event booking management backend that provides secure APIs for event creation, scheduling, and participant management. Features JWT authentication, role-based access control (RBAC), personalized email notifications, and real-time push notifications. Optimized database handling ensures high performance and scalability.",
    link: "https://github.com/Sughosh28/booking-bridge-backend",
    tags: [
      "Spring Boot",
      "REST API",
      "JWT Authentication",
      "RBAC",
      "Event Booking",
      "PostgreSQL",
      "Email Notifications",
      "Push Notifications"
    ],
  },
  
  {
    name: "Heart Disease Prediction",
    description:
      "An AI-driven federated learning model designed for privacy-preserving heart disease prediction. Utilizes TensorFlow, Flower, and Flask to enable decentralized model training across multiple data sources.",
    link: "https://github.com/Sughosh28/FL-for-heart-disease-prediction",
    tags: ["AI", "Federated Learning", "TensorFlow", "Flask", "Healthcare"],
  },
  {
    name: "Blogging Platform",
    description:
      "A secure full-stack blogging platform with React and Spring Boot. Features JWT-based authentication, personalized email notifications, MySQL for data persistence, and NGINX for load balancing on AWS.",
    link: "https://github.com/Sughosh28/blogs-by-sughosh-backend",
    live: "http://blogsbysughosh.xyz/home",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "AWS", "NGINX"],
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