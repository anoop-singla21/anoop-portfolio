import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
      date: 'March 15, 2023',
      category: 'React'
    },
    {
      id: 2,
      title: 'Building Responsive Web Applications',
      excerpt: 'Explore techniques for creating web applications that work seamlessly across all device sizes.',
      date: 'February 28, 2023',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Introduction to Node.js and Express',
      excerpt: 'A beginner-friendly guide to setting up a server with Node.js and the Express framework.',
      date: 'January 10, 2023',
      category: 'Backend'
    },
    {
      id: 4,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      date: 'December 5, 2022',
      category: 'CSS'
    }
  ];

  return (
    <section id='blog'>
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Blog;