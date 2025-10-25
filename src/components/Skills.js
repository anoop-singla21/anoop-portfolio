import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend & API Development",
      icon: "⚡",
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'FastAPI', level: 'Expert' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'SQLAlchemy', level: 'Advanced' },
        { name: 'Celery', level: 'Advanced' },
        { name: 'Redis/Valkey', level: 'Advanced' },
        { name: 'WebSocket', level: 'Intermediate' }
      ]
    },
    {
      category: "Architecture & Security",
      icon: "🏗️",
      skills: [
        { name: 'Modular Monolithic', level: 'Expert' },
        { name: 'Repository Pattern', level: 'Expert' },
        { name: 'Unit of Work', level: 'Expert' },
        { name: 'JWT Authentication', level: 'Advanced' },
        { name: 'API Security', level: 'Advanced' },
        { name: 'Rate Limiting', level: 'Advanced' },
        { name: 'Audit Logging', level: 'Advanced' },
        { name: 'Payment Gateway APIs', level: 'Advanced' }
      ]
    },
    {
      category: "Tools & Deployment",
      icon: "🛠️",
      skills: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'Git', level: 'Expert' },
        { name: 'Nginx', level: 'Intermediate' },
        { name: 'Digital Ocean', level: 'Intermediate' },
        { name: 'Linux', level: 'Intermediate' },
        { name: 'Svelte', level: 'Intermediate' },
        { name: 'Agile Methodology', level: 'Advanced' },
        { name: 'ClickUp/Clockify', level: 'Advanced' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'border-l-4 border-l-green-500 bg-green-50';
      case 'Advanced': return 'border-l-4 border-l-blue-500 bg-blue-50';
      case 'Intermediate': return 'border-l-4 border-l-yellow-500 bg-yellow-50';
      case 'Beginner': return 'border-l-4 border-l-gray-400 bg-gray-50';
      default: return 'border-l-4 border-l-gray-400 bg-gray-50';
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 relative">
          Technical Skills
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My technical expertise across backend development, system architecture, and deployment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${getLevelColor(skill.level)}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        skill.level === 'Expert' ? 'text-green-700' :
                        skill.level === 'Advanced' ? 'text-blue-700' :
                        skill.level === 'Intermediate' ? 'text-yellow-700' :
                        'text-gray-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Expertise */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Specialized Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">💳</div>
                <h4 className="font-semibold text-gray-800 mb-2">Payment Systems</h4>
                <p className="text-sm text-gray-600">Razorpay SDK integration, linked accounts, payment processing</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-800 mb-2">Security Architecture</h4>
                <p className="text-sm text-gray-600">Hybrid authentication, security middleware, audit logging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;