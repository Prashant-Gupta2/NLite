import React from 'react';
import './Contact.css';
import Footer from '../Footer';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        
        {/* Contact Form */}
        <div className="contact-left">
          <h2>Contact Our Team</h2>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-right">

          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> support@nlite.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 NLITE Street, Knowledge City, USA</p>

            <div className="contact-actions">
              <a href="mailto:support@nlite.com" className="contact-button email-btn">📧 Email Us</a>
              <a href="tel:+1234567890" className="contact-button call-btn">📞 Call Us</a>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
