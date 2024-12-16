import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 px-6 md:px-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-12">
          About Me
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed tracking-wide text-gray-200 mb-8 animate-fadeIn">
          I'm <span className="font-bold text-yellow-400 hover:text-yellow-500 transition-colors duration-300">
            Sughosh Athreya K N
          </span>, a dedicated software developer with expertise in Java, Spring Boot, and modern web frameworks. I have experience building scalable applications and delivering robust solutions for complex challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
