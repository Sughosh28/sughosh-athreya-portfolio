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
          ? "bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/20"
          : "bg-slate-900/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex space-x-8">
            {listItems.map(({ id, fieldName, path }) => (
              <li key={id} className="relative group">
                <a
                  href={`${path}`}
                  className="text-gray-300 hover:text-gray-100
                    font-medium tracking-wide py-2 px-4
                    transition-all duration-300 relative
                    overflow-hidden hover:scale-105
                    text-sm uppercase tracking-wider"
                >
                  {fieldName}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-400 to-slate-300 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
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
                className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-40"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
  
            <div
              className={`fixed top-0 right-0 h-full w-72
                      bg-slate-900 shadow-2xl z-50
                      transform transition-transform duration-300 ease-in-out
                      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                      border-l border-slate-800`}
            >
              <div className="pt-20 px-4">
                <ul className="space-y-2">
                  {listItems.map(({ id, fieldName, path }) => (
                    <li key={id} className="relative group">
                      <a
                        href={path}
                        className="flex items-center px-6 py-4
                                text-gray-300 rounded-lg
                                hover:bg-slate-800/50 hover:text-gray-100
                                transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-sm font-medium uppercase tracking-wider">
                          {fieldName}
                        </span>
                        <span className="absolute left-0 w-1 h-full bg-slate-400
                                     scale-y-0 group-hover:scale-y-100
                                     transition-transform duration-300 rounded-r-lg" />
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
  
  
}
  

export default Header;
