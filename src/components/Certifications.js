import React, { useState } from "react";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Software Project Development",
    image: "/images/cert1.jpeg",
    year: "2025",
  },
  {
    id: 2,
    title: "Best Programmer Award",
    image: "/images/cert2.jpeg",
    year: "2025",
  },
  {
    id: 3,
    title: "Bootstrap CSS Bootcamp",
    image: "/images/bootcss.jpeg",
    year: "2025",
  },
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">📜 Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => openModal(cert)}
          >
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <span className="cert-year">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedCert.title}</h3>
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
