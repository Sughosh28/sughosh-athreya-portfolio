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
    <section id="exp" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-yellow-600/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text mb-16 text-center">
          Experience
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
  {experienceData.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden h-[250px]" // Added fixed height
    >
      <div className="relative backdrop-blur-lg bg-gray-800/50 p-8 rounded-2xl border border-gray-700 
                    transform transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/70
                    hover:border-yellow-500/50 h-full flex flex-col justify-between"> 
        
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex-1"> 
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">{item.title}</h3>
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <span className="mr-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">@</span>
            <span className="text-gray-300">{item.company}</span>
          </h4>
          <p className="text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Experience;