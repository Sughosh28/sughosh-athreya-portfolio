import React from "react";

const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Bytemonk",
    description: "Worked on backend services and configuration management systems.",
  },
  {
    title: "Web Developer Intern",
    company: "Render Infotech",
    description: "Developed user interfaces and improved website performance.",
  },
];

const Experience = () => {
  return (
    <section id="exp" className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8 text-center">
          Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg 
                         transform hover:scale-105 transition-all duration-300 
                         border border-gray-700 hover:border-yellow-500/50
                         group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
              <h4 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                <span className="mr-2">@</span>{item.company}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
