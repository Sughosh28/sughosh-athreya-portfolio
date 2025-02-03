const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 animate-gradient-shift bg-[length:200%_200%]"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-[128px] animate-pulse-slow delay-700"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-100">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                  Sughosh Athreya
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed">
              A passionate developer crafting exceptional digital experiences with Java, Spring Boot, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/25"
              >
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold text-gray-300 border border-gray-700 hover:border-yellow-500 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-md opacity-75 
                              group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative">
                <div className="rounded-full p-1 bg-gradient-to-r from-yellow-400 to-yellow-600">
                  <div className="relative rounded-full overflow-hidden w-56 h-56 lg:w-72 lg:h-72">
                    <img
                      src="/myImage2.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;