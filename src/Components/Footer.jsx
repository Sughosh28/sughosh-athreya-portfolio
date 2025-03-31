import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerItems = [
        {
            id: '1',
            title: "GitHub",
            href: "https://github.com/Sughosh28",
            svgImage: <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        },
        {
            id: '2',
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/sughosh-athreya-7239661a0/",
            svgImage: <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
        },
    ]

    return (
        <footer className="bg-slate-950 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-800/10 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 py-8 relative">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex space-x-6">
                {footerItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-300"
                    aria-label={item.title}
                  >
                    {item.svgImage}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2
                                   bg-slate-900 text-gray-200 px-2 py-1 rounded text-sm
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
              
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Sughosh Athreya K N. 
              </p>
            </div>
          </div>
          
          <div className="h-1 bg-gradient-to-r from-slate-800 to-slate-700"></div>
        </footer>
      );
      
};

export default Footer;
