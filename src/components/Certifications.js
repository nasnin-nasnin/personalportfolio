import React from "react";
import "./Certifications.css";

// Sample certification data
const certifications = [
  {
    id: 1,
    title: "Software Project Development",
    image: "/images/cert1.jpeg", // Replace with your actual image path
    year: "2025",
  },
  {
    id: 2,
    title: "Best programmer Award",
    image: "/images/cert2.jpeg",
    year: "2025",
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
