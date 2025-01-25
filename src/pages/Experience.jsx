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
    <section id="exp" className="py-20 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg 
                         transform hover:scale-[1.02] transition-all duration-300 
                         border border-yellow-200 hover:border-yellow-400
                         group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <h4 className="text-lg font-medium text-gray-600 mb-4 flex items-center">
                  <span className="mr-2 text-yellow-500">@</span>
                  <span className="text-yellow-600">{item.company}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
