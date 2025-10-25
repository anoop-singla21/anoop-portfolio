import React from 'react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Anoop Singla
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-500 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Passionate about creating efficient, scalable software solutions with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600">
                Get In Touch
              </a>
              <a href="Anoop_Singla_CV.pdf" download className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white">
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
              <img 
  src="anoop.png" 
  alt="Anoop Singla"
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;