import React from 'react';
import './Courses.css';
import Footer from '../Footer';

export default function Courses() {
  const courses = [
    {
      title: "React for Beginners",
      description: "Master the basics of React and build dynamic web apps.",
      image: "https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740",
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into JS concepts like closures, async, and ES6+.",
      image: "https://th.bing.com/th/id/OIP.Oag0dh4MINdG_qxOzJMoiwHaIB?w=139&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "UI/UX Design Bootcamp",
      description: "Learn design principles and tools like Figma and Adobe XD.",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740",
    },
    {
      title: "Python Masterclass",
      description: "From basics to building apps with Django and Flask.",
      image: "https://th.bing.com/th/id/OIP.kbO1T90NqtfN3K-K58a20wHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Crack coding interviews with in-depth DSA training.",
      image: "https://source.unsplash.com/400x250/?algorithm,data",
    },
    {
      title: "Frontend Development",
      description: "Start from scratch with HTML, CSS & JS.",
      image: "https://source.unsplash.com/400x250/?frontend,html",
    },
    {
      title: "Full Stack with MERN",
      description: "Build real-world web apps with MongoDB, Express, React, Node.",
      image: "https://source.unsplash.com/400x250/?fullstack,web",
    },
  ];

  return (
    <div className="courses-section">
      <h2>Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
