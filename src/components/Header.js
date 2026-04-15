import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollToElement, scrollToTop, handlePageNavigation } from '../utils/navigation';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      scrollToElement(sectionId);
    } else {
      handlePageNavigation(navigate, '/', () => {
        // Use a small delay to ensure DOM is ready
        requestAnimationFrame(() => scrollToElement(sectionId));
      });
    }
    closeMenu();
  };

  const handleBlogNavigation = () => {
    if (isBlogPage) {
      scrollToElement('blog');
    } else {
      handlePageNavigation(navigate, '/blog', () => {
        requestAnimationFrame(() => scrollToElement('blog'));
      });
    }
    closeMenu();
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToTop();
    } else {
      handlePageNavigation(navigate, '/', () => {
        requestAnimationFrame(() => scrollToTop());
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ to, section, children }) => {
    const isActive = activeSection === section;
    
    if (isHomePage) {
      return (
        <HashLink 
          smooth
          to={`#${to}`}
          className={`font-medium transition-colors duration-300 relative ${
            isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          {children}
          {isActive && (
            <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
          )}
        </HashLink>
      );
    }
    
    return (
      <button 
        onClick={() => handleSectionNavigation(to)}
        className={`font-medium transition-colors duration-300 relative ${
          isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
        }`}
      >
        {children}
        {isActive && (
          <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
        )}
      </button>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={handleLogoClick} 
            className="text-2xl font-bold text-gray-800 hover:opacity-80 transition-opacity"
          >
            Anoop Singla
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink 
                key={item.id}
                to={item.id} 
                section={item.id}
              >
                {item.label}
              </NavLink>
            ))}
            
            <button 
              onClick={handleBlogNavigation}
              className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Blog
            </button>
            
            <a 
              href="https://anoop-singla21.github.io/anoop-portfolio/Anoop_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item.id)}
                  className="font-medium text-gray-600 hover:text-blue-500 text-left transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={handleBlogNavigation}
                className="font-medium text-gray-600 hover:text-blue-500 text-left transition-colors duration-300"
              >
                Blog
              </button>
              
              <a 
                href="https://anoop-singla21.github.io/anoop-portfolio/Anoop_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 w-full text-center"
              >
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