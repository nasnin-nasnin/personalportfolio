import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">Fathima Nasnin KP</h1>
      <h2 className="subtitle">I am a Full Stack Developer.</h2>
      <p className="description">
        I am a passionate full stack developer with a love for crafting seamless
        digital experiences — blending logic, design, and performance across both
        frontend and backend.
      </p>

      {/* Link styled as button */}
      <Link to="/works" className="cta-btn">
        Check out my works!
      </Link>
    </section>
  );
}

export default HeroSection;
