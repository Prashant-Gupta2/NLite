import React from 'react';
import './Blog.css';
import Footer from '../Footer';

export default function Blogs() {
  const posts = [
    {
      title: "Top 5 Skills to Learn in 2025",
      excerpt: "Stay ahead of the curve with these in-demand tech skills that can transform your career.",
      image: "https://source.unsplash.com/400x250/?technology,future",
      date: "April 10, 2025",
    },
    {
      title: "Why React Is Still King in 2025",
      excerpt: "React continues to dominate the frontend world. Here’s why developers still love it.",
      image: "https://source.unsplash.com/400x250/?react,javascript",
      date: "April 5, 2025",
    },
    {
      title: "UX Tips for Better Product Design",
      excerpt: "Designing for users is more than just pretty UI. These UX tips will elevate your product.",
      image: "https://source.unsplash.com/400x250/?ux,design",
      date: "March 28, 2025",
    },
  ];

  return (
    <div className="blog-section">
      <h2>Our Blogs</h2>
      <h1 className='shade'>Resource and insights</h1>
      <p>The latest instustry news</p>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
