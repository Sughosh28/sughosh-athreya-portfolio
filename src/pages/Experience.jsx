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
    <section id="exp" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-4xl font-bold text-yellow-500 mb-8">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{item.title}</h3>
              <h4 className="text-xl font-medium text-gray-400 mb-4">{item.company}</h4>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
