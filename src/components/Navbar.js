import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">N</div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><span>01.</span> <a href="#about">About</a></li>
        <li><span>02.</span> <a href="#expertise">Expertise</a></li>
        <li><span>03.</span> <a href="#projects">Projects</a></li>
        <li><span>04.</span><Link to="/works">Works</Link></li>
        <li><span>05.</span> <a href="#certifications">Certifications</a></li>
        <li><span>06.</span> <a href="#contact">Contact</a></li>
      </ul>

      <button className="resume-btn">⬇️ Resume</button>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
