import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleBlogNavigation = () => {
    if (isBlogPage) {
      // If already on blog page, scroll to blog section
      const element = document.getElementById('blog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to blog page and then scroll to blog section
      navigate('/blog');
      setTimeout(() => {
        const element = document.getElementById('blog');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, children, section }) => {
    if (isHomePage) {
      return (
        <HashLink 
          smooth
          to={`#${to}`}
          className={`font-medium transition-colors duration-300 relative ${
            activeSection === section ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          {children}
          {activeSection === section && (
            <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
          )}
        </HashLink>
      );
    } else {
      return (
        <button 
          onClick={() => handleSectionNavigation(to)}
          className={`font-medium transition-colors duration-300 relative ${
            activeSection === section ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          {children}
          {activeSection === section && (
            <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>
          )}
        </button>
      );
    }
  };

  const MobileNavLink = ({ to, children, onClick }) => {
    if (isHomePage) {
      return (
        <HashLink 
          smooth 
          to={`#${to}`} 
          className="font-medium text-gray-600 hover:text-blue-500" 
          onClick={onClick}
        >
          {children}
        </HashLink>
      );
    } else {
      return (
        <button 
          onClick={() => {
            handleSectionNavigation(to);
            onClick();
          }}
          className="font-medium text-gray-600 hover:text-blue-500 text-left"
        >
          {children}
        </button>
      );
    }
  };
   const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home page and then scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <button 
              onClick={handleLogoClick} className="text-2xl font-bold text-gray-800">Anoop Singla</button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <NavLink to="home" section="home">Home</NavLink>
                <NavLink to="about" section="about">About</NavLink>
                <NavLink to="skills" section="skills">Skills</NavLink>
                <NavLink to="experience" section="experience">Experience</NavLink>
                <NavLink to="education" section="education">Education</NavLink>
                <NavLink to="contact" section="contact">Contact</NavLink>
              </>
            ) : (
              <>
                <button 
                  onClick={() => handleSectionNavigation('home')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleSectionNavigation('about')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => handleSectionNavigation('skills')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Skills
                </button>
                <button 
                  onClick={() => handleSectionNavigation('experience')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Experience
                </button>
                <button 
                  onClick={() => handleSectionNavigation('education')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Education
                </button>
                <button 
                  onClick={() => handleSectionNavigation('contact')}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Contact
                </button>
              </>
            )}
            
            {/* Updated Blog Link */}
            {isBlogPage ? (
              <button 
                onClick={handleBlogNavigation}
                className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                Blog
              </button>
            ) : (
              <button 
                onClick={handleBlogNavigation}
                className="font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                Blog
              </button>
            )}
            
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
                  <MobileNavLink to="home" onClick={toggleMenu}>Home</MobileNavLink>
                  <MobileNavLink to="about" onClick={toggleMenu}>About</MobileNavLink>
                  <MobileNavLink to="skills" onClick={toggleMenu}>Skills</MobileNavLink>
                  <MobileNavLink to="experience" onClick={toggleMenu}>Experience</MobileNavLink>
                  <MobileNavLink to="education" onClick={toggleMenu}>Education</MobileNavLink>
                  <MobileNavLink to="contact" onClick={toggleMenu}>Contact</MobileNavLink>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('home');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('about');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('skills');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('experience');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('education');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    Education
                  </button>
                  <button 
                    onClick={() => {
                      handleSectionNavigation('contact');
                      toggleMenu();
                    }}
                    className="font-medium text-gray-600 hover:text-blue-500 text-left"
                  >
                    Contact
                  </button>
                </>
              )}
              
              {/* Updated Mobile Blog Link */}
              <button 
                onClick={() => {
                  handleBlogNavigation();
                  toggleMenu();
                }}
                className="font-medium text-gray-600 hover:text-blue-500 text-left"
              >
                Blog
              </button>
              
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