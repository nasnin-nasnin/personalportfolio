import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./SkillsSection.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <FaReact /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map(({ name, icon }) => (
          <div key={name} className="skill-item">
            <div className="skill-icon">{icon}</div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
