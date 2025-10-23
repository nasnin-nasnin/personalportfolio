import React from 'react';
import './Expertise.css';

const expertiseData = [
  {
    title: 'Bachelor of Computer Application',
    description: 'I hold a BCA degree with strong fundamentals in programming, databases, and computer science concepts.',
    icon: '/images/bca.webp', // You can replace these with actual SVGs or images
  },
  {
    title: 'Python Django',
    description: 'I use Django to build scalable, secure, and database-driven web applications.',
    icon: '/images/python.webp',
  },
  {
    title: 'Mern Stack',
    description: 'I build full-stack applications using MongoDB, Express, React, and Node.js.',
    icon: '/images/mern.webp',
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <h2 className="expertise-title">My Expertise.</h2>
      <div className="expertise-cards">
        {expertiseData.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon-circle">
                <img src={item.icon} alt={item.title} className="icon-image" />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
