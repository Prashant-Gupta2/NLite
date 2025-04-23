import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='top-sec'>
        <div className='heading'>NLITE Technologies LLP</div> 
        <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <i className="fab fa-youtube"></i>
  </a>
</div>
      </div>
      <div className="footer-grid">

        <div className="footer-section">
          <h4>Popular <span className='shade'>Courses</span></h4>
          <ul>
            <li><a href="#">React for Beginners</a></li>
            <li><a href="#">Advanced JavaScript</a></li>
            <li><a href="#">UI/UX Design Bootcamp</a></li>
            <li><a href="#">Python Masterclass</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick <span className='shade'>Links</span></h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our <span className='shade'>Locations</span></h4>
          <p>New York, USA</p>
          <p>London, UK</p>
          <p>Delhi, India</p>
          <p>Sydney, Australia</p>
        </div>

        <div className="footer-section">
          <h4>Contact <span className='shade'>Us</span></h4>
          <p>Email: support@nlite.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NLITE. All rights reserved.</p>
      </div>
    </footer>
  );
}
