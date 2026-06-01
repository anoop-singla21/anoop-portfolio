import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Meharsoft Technologies Pvt. Ltd.',
      position: 'Junior Backend Developer',
      period: 'June 2025 - Present',
      location: 'Malout, Punjab, India',
      projects: [
        {
          name: 'PACS ERP Data Sync',
          period: 'Jan 2026 - Present',
          architecture: 'Multi-Application',
          framework: 'Page Object Model (POM)',
          description: 'ERP Data Sync & Automation: Automated ERP data extraction using Playwright for dynamic web applications, cleaned and preprocessed data using Python, designed transformation logic to map legacy data to ERP schema, built end-to-end data migration pipelines ensuring data integrity.',
          technicalHighlights: [
            'Developed automated ERP data synchronization pipeline using Playwright',
            'Implemented web scraping and automation for dynamic web applications',
            'Designed data cleaning and transformation workflows in Python',
            'Built end-to-end data migration pipelines with data integrity validation',
            'Automated data ingestion into ERP systems using Playwright framework',
            'Worked on large-scale data synchronization between legacy and ERP systems'
          ],
          keyResponsibilities: [
            'Automated ERP data extraction using Playwright for dynamic web applications',
            'Cleaned and preprocessed data using Python (handling nulls, inconsistencies, formatting)',
            'Designed transformation logic to map legacy data to ERP schema',
            'Built end-to-end data migration pipelines ensuring data integrity',
            'Automated data ingestion into ERP systems using Playwright',
            'Worked on large-scale data synchronization between legacy and ERP systems'
          ],
          technologies: {
            backend: ['Python', 'TypeScript', 'SQLite'],
            frontend: ['React'],
            devops: ['Chromium'],
            tools: ['Playwright', 'Page Object Model (POM)']
          },
          achievements: [
            'Successfully developed automated ERP data synchronization pipeline',
            'Implemented robust web scraping and automation using Playwright',
            'Designed comprehensive data cleaning and transformation workflows',
            'Ensured reliable data migration between legacy and ERP systems',
            'Automated large-scale data synchronization processes',
            'Delivered end-to-end data migration solutions with integrity validation'
          ],
          architectureDetails: {
            pattern: 'Multi-Application Architecture',
            automation: [
              'Playwright Web Automation Framework',
              'Page Object Model Implementation',
              'Dynamic Web Application Scraping',
              'Automated Data Extraction',
              'Cross-browser Compatibility (Chromium)'
            ],
            database: 'SQLite for local data processing and caching',
            infrastructure: [
              'Python-based Data Processing Pipeline',
              'Automated Data Transformation Logic',
              'Data Integrity Validation Systems',
              'Legacy to ERP Data Mapping',
              'Scalable Synchronization Framework'
            ],
            features: [
              'Null Value Handling and Data Cleaning',
              'Inconsistency Resolution Algorithms',
              'Data Formatting and Standardization',
              'Migration Pipeline Monitoring',
              'Error Handling and Recovery Systems'
            ]
          },
          projectComponents: [
            {
              name: 'Data Extraction Automation',
              description: 'Playwright-based web scraping for dynamic ERP applications',
              features: ['Automated data extraction', 'Dynamic content handling', 'Multi-page navigation', 'Error recovery']
            },
            {
              name: 'Data Processing Pipeline',
              description: 'Python-based data cleaning and transformation system',
              features: ['Null handling algorithms', 'Data inconsistency resolution', 'Format standardization', 'Validation checks']
            },
            {
              name: 'ERP Integration System',
              description: 'Automated data ingestion into ERP systems',
              features: ['Schema mapping logic', 'Data migration pipelines', 'Integrity validation', 'Synchronization monitoring']
            }
          ]
        },
        {
          name: 'MerchantPG Platform',
          period: 'June 2025 - Dec 2025',
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
            frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
            devops: ['Docker', 'Nginx', 'Digital Ocean', 'Linux', 'AWS'],
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
        }
      ],
      description: 'Full-stack development role focusing on backend architecture, API development, and data automation. Currently working on PACS ERP Data Sync project while having previously developed the MerchantPG payment platform.',
      keyResponsibilities: [
        'Developed automated ERP data synchronization systems using Playwright and Python',
        'Built robust payment gateway APIs with security middleware and Razorpay integration',
        'Implemented modular monolithic architecture with Repository Pattern and Unit of Work',
        'Created comprehensive data processing pipelines and migration systems',
        'Deployed and maintained applications on cloud infrastructure (Digital Ocean)',
        'Collaborated with cross-functional teams for full-stack feature development'
      ],
      technologies: {
        backend: ['Python', 'FastAPI', 'PostgreSQL', 'SQLite', 'Valkey (Redis)', 'Celery', 'WebSocket'],
        frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
        devops: ['Docker', 'Nginx', 'Digital Ocean', 'Linux', 'Chromium', 'AWS'],
        tools: ['Git', 'Playwright', 'TypeScript', 'ClickUp', 'Clockify', 'Razorpay SDK']
      },
      achievements: [
        'Successfully delivered two major projects: PACS ERP Data Sync and MerchantPG Platform',
        'Implemented automated data processing reducing manual work by 80%',
        'Achieved 99.5% success rate in payment processing systems',
        'Reduced deployment time by 70% using Docker containerization',
        'Developed comprehensive security layers preventing unauthorized access',
        'Built scalable architectures supporting high-volume data operations'
      ]
    },
    {
      company: 'Memorique (https://memorique.ai/)',
      position: 'Frontend Training Experience | Memorique',
      period: 'Nov 2024 – May 2025',
      location: 'Remote',
      project: 'Gifting Dashboard · React & TypeScript',
      description: 'Frontend training focused on building a gifting dashboard using React and TypeScript; emphasized modular UI, responsive design, and API integration.',
      keyResponsibilities: [
        'Built and refined a gifting dashboard frontend using React and TypeScript, focusing on modular UI components and responsive design.',
        'Collaborated with backend teams to integrate APIs for gift catalog, user authentication, and transaction workflows.',
        'Applied state management patterns to ensure smooth user interactions and real-time updates.',
        'Enhanced dashboard usability with intuitive navigation and clean UI layouts, improving user experience.',
        'Gained hands-on exposure to agile development practices and collaborative version control with Git.'
      ],
      technicalSkills: ['React', 'TypeScript', 'State Management', 'Responsive Design', 'UI/UX'],
      achievements: [
        'Delivered a modular, responsive gifting dashboard with improved UX',
        'Integrated APIs for catalog and transactions enabling end-to-end flows'
      ],
      tools: ['React', 'TypeScript', 'Git']
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
              <div className={`p-6 text-white ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : index === 1 ? 'bg-gradient-to-r from-green-600 to-teal-600' : 'bg-gradient-to-r from-green-600 to-teal-600'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <h4 className="text-xl font-semibold opacity-90">{exp.company}</h4>
                    {exp.projects ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.projects.map((project, i) => (
                          <span key={i} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                            {project.name}
                          </span>
                        ))}
                      </div>
                    ) : exp.project && (
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
                  /* Meharsoft Technologies - Multiple Projects */
                  <>
                    {/* Overall Role Description */}
                    <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <h5 className="font-semibold text-gray-800">Primary Focus: Backend Development & Data Automation</h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-6">
                        Full-stack development role encompassing backend architecture, API development, payment systems, and automated data processing
                      </p>
                    </div>

                    {/* Projects Section */}
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="mb-8 border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-2xl font-bold text-gray-900">{project.name}</h4>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {project.period}
                          </span>
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Architecture & Technologies */}
                        <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Technical Architecture & Stack
                          </h5>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h6 className="font-semibold text-gray-800 mb-2">
                                {projectIndex === 0 ? 'Automation Implementation' : 'Backend Implementation'}
                              </h6>
                              <ul className="space-y-1">
                                {(projectIndex === 0 ? project.architectureDetails.automation : project.architectureDetails.security).slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-700">
                                    <span className="text-green-500 mr-2 mt-1">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h6 className="font-semibold text-gray-800 mb-2">Infrastructure & Features</h6>
                              <ul className="space-y-1">
                                {project.architectureDetails.infrastructure.slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-700">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            <div className="md:col-span-2">
                              <h6 className="font-semibold text-gray-800 mb-2">Backend Technologies</h6>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.backend.map((tech, i) => (
                                  <span key={i} className="px-2 py-1 bg-blue-100 border border-blue-300 text-blue-700 rounded text-sm font-medium">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="font-semibold text-gray-800 mb-2">Frontend Support</h6>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.frontend.map((tech, i) => (
                                  <span key={i} className="px-1 py-1 bg-green-100 text-green-700 rounded text-xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="font-semibold text-gray-800 mb-2">Tools & DevOps</h6>
                              <div className="flex flex-wrap gap-1">
                                {[...project.technologies.devops, ...project.technologies.tools].map((tech, i) => (
                                  <span key={i} className="px-1 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Project Components */}
                        <div className="mb-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            Key Components Delivered
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.projectComponents.map((component, i) => (
                              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <h6 className="text-sm font-bold text-gray-900 mb-2">{component.name}</h6>
                                <p className="text-xs text-gray-600 mb-2">{component.description}</p>
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

                        {/* Project Achievements */}
                        <div className="mb-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            Key Achievements
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.achievements.map((achievement, i) => (
                              <div key={i} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                                <div className="flex items-start">
                                  <span className="text-purple-500 mr-2 mt-1">🏆</span>
                                  <span className="text-gray-700 text-sm">{achievement}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Overall Achievements */}
                    <div className="mt-8">
                      <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Overall Achievements at Meharsoft Technologies
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
                  </>
                ) : (
                  /* Memorique Training Experience */
                  <>
                    <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <h5 className="font-semibold text-gray-800">Training Focus: Frontend Dashboard Development</h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-6">
                        Built and refined a gifting dashboard frontend using React and TypeScript, with emphasis on modular UI components, responsive design, and API-driven workflows.
                      </p>
                    </div>

                    <div className="mb-8 border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-gray-900">{exp.project}</h4>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Training
                        </span>
                      </div>

                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Technical Focus & Stack
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-semibold text-gray-800 mb-2">Core Skills</h6>
                            <ul className="space-y-1">
                              {exp.technicalSkills.map((skill, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-700">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-gray-800 mb-2">UX & Workflow Focus</h6>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span>Modular UI components</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span>Responsive dashboard layout</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span>API-driven transaction workflows</li>
                            </ul>
                          </div>
                        </div>
                      </div>

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
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          Key Achievements
                        </h5>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                              <div className="flex items-start">
                                <span className="text-purple-500 mr-2 mt-1">🏆</span>
                                <span className="text-gray-700 text-sm">{achievement}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Tools & Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
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
              <div className="text-3xl font-bold text-purple-600 mb-2">Automation</div>
              <div className="text-gray-700">Expertise</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">FinTech</div>
              <div className="text-gray-700">Focus</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Data Automation Engineer with expertise in backend development, API design, and automated data processing. 
            Experience in payment systems, ERP integration, and modern web technologies at Meharsoft Technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;