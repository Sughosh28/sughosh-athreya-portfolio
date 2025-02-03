import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const listItems = [
    { id: 1, fieldName: "Home", path: "#home" },
    { id: 2, fieldName: "Experience", path: "#exp" },
    { id: 3, fieldName: "Skills", path: "#skills" },
    { id: 4, fieldName: "Projects", path: "#projects" },
    { id: 5, fieldName: "Contact Me", path: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex space-x-12">
            {listItems.map(({ id, fieldName, path }) => (
              <li key={id} className="relative group">
                <a
                  href={`${path}`}
                  className={`${
                    scrolled
                      ? "text-gray-300 hover:text-yellow-400"
                      : "text-black hover:text-yellow-400"
                  } font-medium tracking-wide py-2 px-4 
                    transition-all duration-300 relative 
                    overflow-hidden hover:scale-105`}
                >
                  {fieldName}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 p-2 rounded-lg hover:bg-slate-800 transition-all duration-300 active:scale-95 z-50 relative"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {isMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            <div className={`fixed top-0 right-0 h-full w-72 
                          bg-slate-900 shadow-2xl z-50
                          transform transition-transform duration-300 ease-in-out
                          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                          border-l border-gray-700/50`}>
              <div className="pt-20 px-4">
                <ul className="space-y-2">
                  {listItems.map(({ id, fieldName, path }) => (
                    <li key={id} className="relative group">
                      <a
                        href={path}
                        className="flex items-center px-6 py-4 
                                text-gray-200 rounded-lg
                                hover:bg-gray-800/50 hover:text-yellow-400
                                transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-base font-medium">{fieldName}</span>
                        <span className="absolute left-0 w-1 h-full bg-yellow-400 
                                     scale-y-0 group-hover:scale-y-100 
                                     transition-transform duration-300 rounded-r-lg"/>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
