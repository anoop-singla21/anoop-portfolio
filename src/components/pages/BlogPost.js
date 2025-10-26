// src/pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = {
    1: {
      title: 'Getting Started with React Hooks',
      date: 'March 15, 2023',
      category: 'React',
      content: `
        <p class="mb-4">React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They've revolutionized how we write React components, making them more concise and easier to understand.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Hooks?</h2>
        <p class="mb-4">Before Hooks, if you needed state in a component, you had to convert it to a class. This often led to complex components that were hard to understand and test. Hooks allow you to use state and lifecycle features in functional components.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Basic Hooks</h2>
        <p class="mb-4">The most commonly used hooks are:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>useState</strong>: For managing state in functional components</li>
          <li><strong>useEffect</strong>: For handling side effects (similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined)</li>
          <li><strong>useContext</strong>: For accessing context in functional components</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Example: useState</h2>
        <p class="mb-4">Here's a simple example of using the useState hook:</p>
        <pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
        
        <p class="mb-4">Hooks have made React development more intuitive and have reduced the amount of code needed for common patterns. They're definitely worth learning if you're working with React!</p>
      `
    },
    2: {
      title: 'Building Responsive Web Applications',
      date: 'February 28, 2023',
      category: 'Web Development',
      content: `
        <p class="mb-4">Building responsive web applications is crucial in today's multi-device world. With users accessing websites from phones, tablets, and desktops, creating fluid layouts that adapt to different screen sizes is essential.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Mobile-First Approach</h2>
        <p class="mb-4">Starting with mobile design ensures that your core content and functionality work on the most constrained devices, then enhancing the experience for larger screens.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">CSS Techniques</h2>
        <p class="mb-4">Modern CSS provides several tools for responsive design:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>Flexbox</strong>: For one-dimensional layouts</li>
          <li><strong>CSS Grid</strong>: For complex two-dimensional layouts</li>
          <li><strong>Media Queries</strong>: For conditional styling based on screen characteristics</li>
          <li><strong>Relative Units</strong>: Using em, rem, and percentages instead of fixed pixels</li>
        </ul>
      `
    },
    3: {
      title: 'Introduction to Node.js and Express',
      date: 'January 10, 2023',
      category: 'Backend',
      content: `
        <p class="mb-4">Node.js has revolutionized backend development by allowing JavaScript to run on the server. Combined with Express.js, it provides a powerful and flexible framework for building web applications and APIs.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Node.js?</h2>
        <p class="mb-4">Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with Express</h2>
        <p class="mb-4">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
        <pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});</code></pre>
      `
    },
    4: {
      title: 'CSS Grid vs Flexbox: When to Use What',
      date: 'December 5, 2022',
      category: 'CSS',
      content: `
        <p class="mb-4">Both CSS Grid and Flexbox are powerful layout systems in CSS, but they serve different purposes and work best in different scenarios.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Flexbox: One-Dimensional Layouts</h2>
        <p class="mb-4">Use Flexbox when you need to arrange elements in a single dimension - either horizontally or vertically. It's perfect for:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Navigation bars</li>
          <li>Card layouts with equal heights</li>
          <li>Centering content vertically and horizontally</li>
          <li>Distributing space within a container</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">CSS Grid: Two-Dimensional Layouts</h2>
        <p class="mb-4">Use CSS Grid when you need to control layout in both rows and columns simultaneously. It's ideal for:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Complete page layouts</li>
          <li>Complex grid-based designs</li>
          <li>Overlapping content</li>
          <li>Asymmetrical layouts</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Best of Both Worlds</h2>
        <p class="mb-4">In many cases, you'll use both together: Grid for the overall page structure and Flexbox for the components within grid areas.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-center text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <div className="text-center">
            <Link to="/blog" className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 transition-colors duration-300">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <header className="mb-8 text-center">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="text-gray-500">
                <span>{post.date}</span>
              </div>
            </header>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;