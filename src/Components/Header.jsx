import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listItems = [
        { id: 1, fieldName: "Home", path: "#home" },
        { id: 2, fieldName: "About", path: "#about" },
        { id: 3, fieldName: "Experience", path: "#exp" },
        { id: 4, fieldName: "Skills", path: "#skills" },
        { id: 5, fieldName: "Projects", path: "#projects" },
        { id: 6, fieldName: "Contact Me", path: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-center items-center">
                    <ul className="hidden md:flex space-x-12">
                        {listItems.map(({ id, fieldName, path }) => (
                            <li key={id}>
                                <a
                                    href={`${path}`}
                                    className="text-gray-200 hover:text-yellow-400 font-medium tracking-wide py-2 px-4 transition-all duration-300 hover:scale-110 inline-block"
                                >
                                    {fieldName}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden w-full flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {isMenuOpen && (
                            <ul className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-xl py-4 space-y-2 border-t border-gray-800">
                                {listItems.map(({ id, fieldName, path }) => (
                                    <li key={id}>
                                        <a
                                            href={`${path}`}
                                            className="block text-center py-3 px-6 text-gray-200 hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-300"
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
