import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className=" text-2xl sm:text-4xl lg:text-4xl font-bold text-yellow-500 mb-8">About Me</h2>
        <p className="text-lg sm:text-xl mb-8 animate-fadeIn">
          I'm <span className="font-semibold text-yellow-500">Sughosh Athreya K N</span>, a dedicated software developer with expertise in Java, Spring Boot, and modern web frameworks. I have experience building scalable applications and delivering robust solutions for complex challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
