import React from 'react';
import { HashLink } from 'react-router-hash-link';

const About = () => {
  const skills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'FastAPI', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Svelte', level: 'Intermediate' },
    { name: 'REST APIs', level: 'Advanced' },
  ];

  const interests = [
    'Backend Architecture',
    'API Design',
    'Security Implementation',
    'Payment Systems',
    'System Optimization',
    'Agile Development'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 relative">
          About Me
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Passionate Backend Developer specializing in robust API development and secure system architecture
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info & Story */}
            <div className="space-y-8">
              {/* Personal Story */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a <span className="font-semibold text-blue-600">Junior Backend Developer</span> with a passion for 
                    building scalable and secure web applications. My journey into software development started with 
                    a strong foundation in business operations, which gives me a unique perspective on how technology 
                    solves real-world problems.
                  </p>
                  <p>
                    Currently, I'm working on the <span className="font-semibold text-green-600">MerchantPG Platform</span> at Meharsoft Technologies, 
                    where I've developed expertise in payment gateway integration, security implementation, and 
                    backend architecture using Python and FastAPI.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and enjoy tackling complex challenges in 
                    system design and API development. When I'm not coding, I'm exploring new technologies 
                    and contributing to open-source projects.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <strong className="text-gray-800">Current Role</strong>
                    <span className="text-blue-600 font-medium">Junior Backend Developer</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <strong className="text-gray-800">Current Experience</strong>
                    <span className="text-green-600 font-medium">5+ Months</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <strong className="text-gray-800">Total Experience</strong>
                    <span className="text-green-600 font-medium">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <strong className="text-gray-800">Education</strong>
                    <span className="text-purple-600 font-medium">B.Tech Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <strong className="text-gray-800">Status</strong>
                    <span className="text-orange-600 font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Details */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        skill.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                        skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Architecture Patterns</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Modular Monolithic</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Repository Pattern</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Unit of Work</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">REST APIs</span>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <strong className="text-gray-700">Full Name</strong>
                    <span className="text-gray-600">Anoop Singla</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <strong className="text-gray-700">Email</strong>
                    <span className="text-blue-600">anoopsingla21@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <strong className="text-gray-700">Location</strong>
                    <span className="text-gray-600">Gidderbaha, Punjab, India</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <strong className="text-gray-700">Languages</strong>
                    <span className="text-gray-600">English, Hindi, Punjabi</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <strong className="text-gray-700">Availability</strong>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Interests */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you need backend development, API design, or system architecture expertise, 
                I'd love to discuss how I can contribute to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HashLink
                  smooth to="#contact"
                  className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </HashLink>
                <a
                  href="/Anoop_Singla_CV.pdf"
                  download
                  className="inline-block px-8 py-3 bg-white text-blue-500 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;