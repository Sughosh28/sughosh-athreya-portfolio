import React from "react";

const HeroSection = () => {
  return (
    <section id="home"
      className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="z-10 text-center px-8 md:px-16 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="mb-6 lg:mb-0 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-800">
            Hi, I'm <span className="font-semibold p-2 pt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Sughosh Athreya K N</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-600 leading-relaxed">
            A passionate developer specializing in Java, Spring Boot, and modern web technologies.
          </p>
         
          <a
            href="#contact"
            className="inline-block py-4 px-8 text-lg font-bold bg-yellow-400 text-gray-900 rounded-full 
                     hover:shadow-lg hover:shadow-yellow-300/50 transform hover:-translate-y-1 
                     transition-all duration-300 ease-in-out hover:bg-yellow-500"
          >
            Get in touch
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-75 
                          group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-yellow-200 to-yellow-400 ring-1 ring-yellow-200">
              <img
                src="/myImage2.jpg"
                alt="Profile"
                className="rounded-full w-52 h-52 md:w-64 md:h-64 object-cover transform hover:scale-105 
                         transition-transform duration-300 ring-4 ring-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default HeroSection;
