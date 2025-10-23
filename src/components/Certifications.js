import React from "react";
import "./Certifications.css";

// Sample certification data
const certifications = [
  {
    id: 1,
    title: "React Developer Certificate",
    image: "/images/portfolio.png", // Replace with your actual image path
    issuer: "Meta",
    year: "2023",
  },
  {
    id: 2,
    title: "Python for Everybody",
    image: "/images/portfolio.png",
    issuer: "University of Michigan",
    year: "2022",
  },
  {
    id: 3,
    title: "Frontend Development",
    image: "/images/portfolio.png",
    issuer: "freeCodeCamp",
    year: "2021",
  },
  // Add more certifications as needed
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">📜 Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
