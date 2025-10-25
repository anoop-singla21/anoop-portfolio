import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link to="/" className="text-2xl font-bold text-gray-800">Anoop Singla</Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <HashLink 
  smooth
  to="/#home"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'home' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  Home
</HashLink>
           <HashLink
  smooth
  to="/#about"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'about' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  About
  {activeSection === 'about' && (
    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
  )}
</HashLink>

<HashLink
  smooth
  to="/#skills"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'skills' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  Skills
  {activeSection === 'skills' && (
    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
  )}
</HashLink>

<HashLink
  smooth
  to="/#experience"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'experience' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  Experience
  {activeSection === 'experience' && (
    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
  )}
</HashLink>
<HashLink
  smooth
  to="/#education"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'education' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  Education
  {activeSection === 'education' && (
    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
  )}
</HashLink>
<HashLink
  smooth
  to="/#contact"
  className={`font-medium transition-colors duration-300 relative ${
    activeSection === 'contact' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }`}
>
  Contact
  {activeSection === 'contact' && (
    <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
  )}
</HashLink>
              </>
            ) : null}
            <Link 
              to="/blog" 
              className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Blog
            </Link>
            <a 
              href="/Anoop_Singla_CV.pdf" 
              download 
              className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={toggleMenu}
          >
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <HashLink smooth to="#home" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Home</HashLink>
                  <HashLink smooth to="#about" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>About</HashLink>
                  <HashLink smooth to="#skills" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Skills</HashLink>
                  <HashLink smooth to="#experience" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Experience</HashLink>
                  <HashLink smooth to="#education" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Education</HashLink>
                  <HashLink smooth to="#contact" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Contact</HashLink>
                </>
              ) : null}
              <Link to="/blog" className="font-medium text-gray-600 hover:text-blue-500" onClick={toggleMenu}>Blog</Link>
              <a href="/Anoop_Singla_CV.pdf" onClick={toggleMenu} download className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 w-full text-center">
                Download CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;