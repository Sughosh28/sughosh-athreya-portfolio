import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listItems = [
        { id: 1, fieldName: "Home", path: "#home" },
        { id: 2, fieldName: "Experience", path: "#exp" },
        { id: 3, fieldName: "Skills", path: "#skills" },
        { id: 4, fieldName: "Projects", path: "#projects" },
        { id: 5, fieldName: "Contact Me", path: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-yellow-100/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-8 py-5">
                <div className="flex justify-center items-center">
                    <ul className="hidden md:flex space-x-16">
                        {listItems.map(({ id, fieldName, path }) => (
                            <li key={id} className="relative group">
                                <a
                                    href={`${path}`}
                                    className="text-gray-700 font-medium tracking-wide py-2 transition-all duration-300 group-hover:text-yellow-600"
                                >
                                    {fieldName}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden w-full flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 p-2 rounded-full hover:bg-yellow-200/50 transition-all duration-300 active:scale-95"
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {isMenuOpen && (
                            <ul className="absolute top-full left-0 w-full bg-yellow-100/90 backdrop-blur-lg shadow-lg py-6 space-y-4 border-t border-yellow-200/50 animate-fadeIn">
                                {listItems.map(({ id, fieldName, path }) => (
                                    <li key={id}>
                                        <a
                                            href={`${path}`}
                                            className="block text-center py-3 px-6 text-gray-700 hover:text-yellow-600 hover:bg-yellow-200/50 transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {fieldName}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
