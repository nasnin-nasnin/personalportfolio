import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="contact-section" id="contact">
      <div className="email-heading">
        DROP ME AN{' '}
        <a
          
    href="mailto:nasninnaznin@gmail.com" 
          className="email-hover"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          EMAIL
          {hovered && (
  <div className="emoji-container">
    {Array.from({ length: 15 }).map((_, i) => {
      // Generate random position and direction for each icon
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const offsetX = (Math.random() - 0.5) * 600; // horizontal flight
      const offsetY = (Math.random() - 1) * 600;   // upward mostly

      return (
        <span
          key={i}
          className="flying-icon"
          style={{
            left: `${startX}px`,
            top: `${startY}px`,
            '--x': `${offsetX}px`,
            '--y': `${offsetY}px`,
            animationDelay: `${i * 0.1}s`
          }}
        >
          📧
        </span>
      );
    })}
  </div>
)}


        </a>
      </div>

      <div className="footer-links">
        <div className="left-links">
          <a href="https://wa.me/9037370468" target="_blank" rel="noopener noreferrer">Whatsapp</a>
          <a href="https://github.com/nasnin-nasnin" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:nasninnaznin@gmail.com" target="_blank" rel="noopener noreferrer">E-MAIL</a>
          <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/__nasnin_" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://leetcode.com/nasnin-nasnin" target="_blank" rel="noopener noreferrer">Leetcode</a>
        </div>
        <div className="right-text">
          All rights reserved — © nasnin
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
