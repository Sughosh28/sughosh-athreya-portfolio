import React from "react";

const HeroSection = () => {
  return (
    <section id="home"
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 text-center px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4">Hi, I'm <span className="font-semibold text-yellow-500"> Sughosh Athreya K N</span>
          </h1>

          <p className="text-lg sm:text-xl mb-6">
            A passionate developer specializing in Java, Spring Boot, and modern web technologies.
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-6 text-lg font-semibold bg-yellow-500 text-black rounded-full hover:underline decoration-black hover:bg-yellow-600 transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="public\myImage2.jpg"
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-52 md:h-52 border-4 border-yellow-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
