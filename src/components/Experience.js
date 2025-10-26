import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Meharsoft Technologies Pvt. Ltd.',
      position: 'Junior Backend Developer',
      period: 'June 2025 - Present',
      location: 'Malout, Punjab, India',
      project: 'MerchantPG Platform',
      architecture: 'Modular Monolithic with Repository Pattern & Unit of Work',
      description: 'Backend development with frontend contributions for a comprehensive payment gateway platform. Focused on building robust APIs, security layers, and payment processing systems while supporting frontend integration.',
      technicalHighlights: [
        'Developed Modular Monolithic architecture with Repository Pattern and Unit of Work',
        'Implemented hybrid session-based and token-based security layer with centralized authentication',
        'Designed and implemented database schema for security layer and core application',
        'Built RESTful APIs integrating Razorpay SDK for payment operations',
        'Supported frontend development with API integration and WebSocket implementation'
      ],
      keyResponsibilities: [
        'Developed core backend APIs and security middleware',
        'Implemented repository pattern with Unit of Work for data consistency',
        'Integrated payment gateway APIs and webhook handlers',
        'Created background task processing with Celery workers and Beat scheduler',
        'Supported frontend team with API integration and real-time features',
        'Deployed and configured applications on Digital Ocean virtual machines'
      ],
      technologies: {
        backend: ['Python', 'FastAPI', 'PostgreSQL', 'Valkey (Redis)', 'Celery', 'WebSocket'],
        frontend: ['Svelte', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
        devops: ['Docker', 'Nginx', 'Digital Ocean', 'Linux'],
        tools: ['Git', 'ClickUp', 'Clockify', 'Razorpay SDK']
      },
      achievements: [
        'Successfully delivered backend services for complete payment platform',
        'Implemented robust security layer preventing unauthorized access',
        'Achieved seamless payment processing with 99.5% success rate',
        'Reduced deployment time by 70% using Docker containerization',
        'Improved development efficiency with agile methodology and sprint planning',
        'Supported full-stack features while maintaining backend focus'
      ],
      architectureDetails: {
        pattern: 'Modular Monolithic with Repository Pattern',
        security: [
          'Hybrid Authentication (Session + Token based)',
          'Centralized Security Middleware',
          'Custom Rate Limiting Class',
          'JWT Token Management',
          'Role-Based Access Control'
        ],
        database: 'PostgreSQL with custom security tables design',
        infrastructure: [
          'Valkey for caching and session storage',
          'Celery Workers for background tasks',
          'Beat Scheduler for periodic jobs',
          'Nginx Reverse Proxy configuration',
          'Digital Ocean VM deployment'
        ],
        features: [
          'Audit Logging System',
          'Error Logging and Monitoring',
          'Razorpay SDK Integration',
          'WebSocket Real-time Communication',
          'Service Method Pattern Implementation'
        ]
      },
      projectComponents: [
        {
          name: 'Backend Security & Authentication',
          description: 'Custom security middleware with hybrid authentication system',
          features: ['User session management', 'Token-based API access', 'Centralized auth service', 'Custom security tables']
        },
        {
          name: 'Payment API Development',
          description: 'Razorpay SDK integration for payment operations',
          features: ['Linked account APIs', 'Stakeholder management', 'Product configuration', 'Document upload endpoints']
        },
        {
          name: 'API Infrastructure & Deployment',
          description: 'Backend deployment pipeline and server configuration',
          features: ['Docker containerization', 'Nginx reverse proxy', 'Digital Ocean VM setup', 'API documentation']
        }
      ]
    },
    {
      company: 'Chambal Fertilisers and Chemicals Limited',
      position: 'Office Assistant (via Hill Gaurd Services Pvt. Ltd.)',
      period: 'May 2023 - May 2025',
      location: 'Bathinda, Punjab, India',
      description: 'Managed comprehensive office operations with focus on SAP system management and advanced Excel reporting, developing strong analytical and process optimization skills.',
      keyResponsibilities: [
        'Created and managed Sales Orders (SO), Purchase Orders (PO), and Invoices in SAP',
        'Generated daily financial and operational reports including Stock Register',
        'Developed complex Excel reports using advanced functions (VLOOKUP, Pivot Tables, etc.)',
        'Maintained accurate sales registers and inventory records',
        'Coordinated with multiple departments for data collection and reporting'
      ],
      technicalSkills: [
        'SAP ERP System - Sales & Distribution Module',
        'Microsoft Excel - Advanced Formulas & Reporting',
        'Microsoft Office Suite',
        'Data Analysis & Reporting',
        'Inventory Management Systems'
      ],
      achievements: [
        'Automated daily reporting process reducing manual work by 60%',
        'Improved data accuracy in sales registers through systematic validation',
        'Developed comprehensive Excel templates adopted company-wide',
        'Streamlined PO creation process reducing processing time by 40%',
        'Maintained 99% accuracy in all financial documentation'
      ],
      tools: ['SAP ERP', 'Microsoft Excel', 'Microsoft Office', 'Inventory Management Software']
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 relative">
          Work Experience
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Backend development expertise with full-stack understanding
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Experience Header */}
              <div className={`p-6 text-white ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-green-600 to-teal-600'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <h4 className="text-xl font-semibold opacity-90">{exp.company}</h4>
                    {exp.project && (
                      <div className="mt-2 flex items-center">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                          Project: {exp.project}
                        </span>
                      </div>
                    )}
                    {exp.architecture && (
                      <div className="mt-1">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.architecture}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="text-lg font-semibold">{exp.period}</div>
                    <div className="text-white text-opacity-90">{exp.location}</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {index === 0 ? (
                  /* Junior Backend Developer Experience */
                  <>
                    {/* Role Focus */}
                    <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <h5 className="font-semibold text-gray-800">Primary Focus: Backend Development</h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-6">
                        Specialized in API development, security implementation, and system architecture with supporting frontend contributions
                      </p>
                    </div>

                    {/* Architecture & Technologies */}
                    <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Technical Architecture & Stack
                      </h5>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Backend Focus */}
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-3">Backend Implementation</h6>
                          <ul className="space-y-2">
                            {exp.architectureDetails.security.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-green-500 mr-2 mt-1">🔒</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Infrastructure */}
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-3">Infrastructure & Deployment</h6>
                          <ul className="space-y-2">
                            {exp.architectureDetails.infrastructure.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-blue-500 mr-2 mt-1">⚡</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies Grid with Backend Emphasis */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                          <h6 className="font-semibold text-gray-800 mb-2">Backend Technologies</h6>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.backend.map((tech, i) => (
                              <span key={i} className="px-3 py-2 bg-blue-100 border border-blue-300 text-blue-700 rounded-lg text-sm font-medium shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-2">Frontend Support</h6>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.frontend.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-2">DevOps & Tools</h6>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.devops.concat(exp.technologies.tools).map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Backend Responsibilities */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Backend Responsibilities
                        </h5>
                        <ul className="space-y-3">
                          {exp.keyResponsibilities.slice(0, 4).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Frontend & Additional Support */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Frontend Support & Collaboration
                        </h5>
                        <ul className="space-y-3">
                          {exp.keyResponsibilities.slice(4).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">Collaborated with frontend team for API integration and feature implementation</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-8">
                      <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Key Achievements
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <div className="flex items-start">
                              <span className="text-purple-500 mr-3 mt-1">🏆</span>
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Components */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Backend Components Delivered
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {exp.projectComponents.map((component, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                            <h6 className="text-lg font-bold text-gray-900 mb-2">{component.name}</h6>
                            <p className="text-gray-600 text-sm mb-3">{component.description}</p>
                            <ul className="space-y-1">
                              {component.features.map((feature, j) => (
                                <li key={j} className="text-xs text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-1 mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Office Assistant Experience */
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Key Responsibilities */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Key Responsibilities
                        </h5>
                        <ul className="space-y-3">
                          {exp.keyResponsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Skills */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Technical Skills Gained
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technicalSkills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-8">
                      <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Key Achievements
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <div className="flex items-start">
                              <span className="text-green-500 mr-3 mt-1">✓</span>
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Used */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h5 className="text-xl font-bold text-gray-900 mb-4">Tools & Software</h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Career Journey Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Career Progression</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">Backend</div>
              <div className="text-gray-700">Specialization</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">Full Stack</div>
              <div className="text-gray-700">Understanding</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">Payment</div>
              <div className="text-gray-700">Systems</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Junior Backend Developer with strong foundation in API development, security implementation, and system architecture. Experience in payment systems and full-stack collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;