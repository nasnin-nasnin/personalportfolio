import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul>
        <li>
          <a href="https://wa.me/9037370468" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://github.com/nasnin-nasnin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:nasninnaznin@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
        </li>
        {/* <li>
          <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/__nasnin_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        {/* <li>
          <a href="https://leetcode.com/nasnin-nasnin" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="leetcode-icon"
            />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SocialSidebar;
