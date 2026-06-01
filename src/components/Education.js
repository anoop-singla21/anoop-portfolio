import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Advanced Diploma in Computer Application',
      institution: 'Digital Group of Institutes',
      period: '2013 - 2014',
      location: 'Punjab, India',
      description: 'Focused on computer applications and programming fundamentals, building a strong foundation in software development.',
      achievements: [
        'Completed comprehensive computer application program',
        'Gained foundational knowledge in programming and software development',
        'Developed practical skills in various computer applications'
      ]
    },
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'University College of Engineering, Punjabi University',
      period: '2009 - 2013',
      location: 'Patiala, Punjab, India',
      description: 'Specialized in mechanical engineering with extensive practical training and active participation in technical and cultural activities.',
      score: '8.3 CGPA',
      achievements: [
        'Achieved outstanding academic performance with 8.3 CGPA',
        'Active member of SAEINDIA BAJA team - collaborative engineering project',
        'Developed strong analytical and problem-solving skills'
      ],
      trainings: [
        {
          company: 'Setia Paper Industries',
          duration: '2 Months',
          role: 'Production Department Trainee',
          description: 'Studied complete paper production process from raw materials to finished product',
          learnings: [
            'Paper production flow from wheat straw to bleaching',
            'Pulp making and dehydration process using drums',
            'Boiler operations for steam generation',
            'Turbine operations for electricity production'
          ]
        },
        {
          company: 'Escorts Construction Pvt. Ltd.',
          duration: '4 Months',
          role: 'Quality Department Trainee',
          description: 'Focused on quality improvement and cost reduction in backhoe loader manufacturing',
          learnings: [
            'Analyzed hydraulic leakage issues in backhoe loaders',
            'Implemented quality improvement measures',
            'Developed cost reduction strategies',
            'Gained hands-on experience in manufacturing quality control'
          ]
        }
      ],
      extracurricular: [
        {
          role: 'Cultural Head',
          event: 'Crispolatieia Inter College Fest',
          description: 'Led cultural activities and event management for inter-college festival'
        },
        {
          role: 'Joint Secretary',
          event: 'Runbhoomi Intra-college Fest',
          description: 'Managed cultural team and coordinated various events'
        },
        {
          role: 'Bhangra Team Member',
          event: 'Multiple College Fests',
          description: 'Performed in various college cultural festivals'
        },
        {
          role: 'NSS Volunteer',
          event: 'National Service Scheme Camp',
          description: 'Organized blood donation camps and community service activities'
        }
      ]
    }];

  const technicalSkills = [
    'AutoCAD', 'Engineering Drawing', 'Technical Documentation', 'Quality Control',
    'Process Optimization', 'Manufacturing Processes', 'Hydraulic Systems'
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 relative">
          Education & Training
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Strong educational foundation in engineering with practical industry experience and diverse extracurricular involvement
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Education Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <h4 className="text-xl font-semibold opacity-90">{edu.institution}</h4>
                    <p className="text-blue-100 mt-1">{edu.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="text-lg font-semibold">{edu.period}</div>
                    {edu.score && (
                      <div className="text-blue-100 bg-blue-400 bg-opacity-30 px-3 py-1 rounded-md text-sm font-medium inline-block mt-2">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-sm mr-3"></span>
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selected Training (concise) */}
                {edu.trainings && (
                  <div className="mb-6">
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-sm mr-3"></span>
                      Industrial Training
                    </h5>
                    <ul className="space-y-3">
                      {edu.trainings.map((training, i) => (
                        <li key={i} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div>
                            <h6 className="text-lg font-semibold text-gray-900">{training.company}</h6>
                            <p className="text-sm text-gray-600">{training.role} • {training.duration}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Extracurricular Activities */}
                {edu.extracurricular && (
                  <div className="mb-6">
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-sm mr-3"></span>
                      Extracurricular Activities
                    </h5>
                    <p className="text-sm text-gray-700">
                      {edu.extracurricular.map((activity, i) => (
                        <span key={i}>
                          {activity.role}{i < edu.extracurricular.length - 1 ? ' • ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Career Transition Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From Mechanical Engineering to Software Development</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              My journey from mechanical engineering to software development has equipped me with unique problem-solving abilities, 
              systematic thinking, and a strong understanding of real-world systems. The analytical skills and attention to detail 
              developed through engineering training directly translate to building robust, efficient software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>🏭 Industrial Process Understanding</span>
              <span>🔧 Systematic Problem Solving</span>
              <span>📊 Analytical Thinking</span>
              <span>⚡ Quality Focus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;