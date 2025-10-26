import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page and then scroll
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Anoop Singla</h3>
            <p className="text-gray-400 mb-4">
              Software Developer passionate about creating efficient and scalable solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('home')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('about')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('skills')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('experience')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Experience
                  </button>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('education')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact                
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleBlogNavigation}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/anoop-singla-717b56309" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-3 hover:bg-gray-900 transition-colors duration-300 group"
                title="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
              <a 
                href="https://github.com/anoop-singla21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-3 hover:bg-gray-900 transition-colors duration-300 group"
                title="GitHub"
              >
                <FaGithub className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
              <a 
                href="https://facebook.com/anoop.singla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-3 hover:bg-gray-900 transition-colors duration-300 group"
                title="Facebook"
              >
                <FaFacebook className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Anoop Singla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;