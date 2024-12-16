import React from "react";

const HeroSection = () => {
  return (
    <section id="home"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>

      <div className="z-10 text-center px-8 md:px-16 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="mb-6 lg:mb-0 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Sughosh Athreya K N</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-300 leading-relaxed">
            A passionate developer specializing in Java, Spring Boot, and modern web technologies.
          </p>
         
          <a
            href="#contact"
            className="inline-block py-4 px-8 text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Get in touch
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/myImage2.JPG"
              alt="Profile"
              className="relative rounded-full w-52 h-52 md:w-64 md:h-64 shadow-xl object-cover transform hover:scale-105 transition-transform duration-300 brightness-75 contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;