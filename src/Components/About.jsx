import React from 'react';
import './About.css';
import Footer from '../Footer';

export default function About() {
  return (
    <div className="about-section">
      <div className="about-flex">
        <div className="about-content">
          <h1>Learning Made Simple For EveryOne</h1>
          <p>Transforming the tech eaductaion for the nest step.</p>
        </div>

        <div className="about-images-grid">
          <img src="https://img.freepik.com/free-photo/close-up-student-online-class_23-2148888815.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740" alt="Education" />
          <img src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740" alt="Students" />
          <img src="https://img.freepik.com/free-photo/young-man-listening-music-study-session_23-2149285451.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740" alt="Teacher" />
        </div>
      </div>
      <div className="about-extra-section">
  <div className="about-extra-flex">
    <div className="about-extra-image">
      <img src="https://img.freepik.com/free-vector/online-school-education-with-student-home_40876-2534.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740" alt="Growth and Success" />
    </div>
    <div className="about-extra-content">
      <p style={{fontSize:'24px'}}>Our Story</p>
      <h2>Innovating New Ways to Train Students</h2>
      <p>
        We’re building a future where knowledge is accessible to everyone — regardless of geography, background, or experience. With the right support, anyone can thrive.
      </p>
    </div>
  </div>
</div>
      <Footer/>
    </div>
  );
}
