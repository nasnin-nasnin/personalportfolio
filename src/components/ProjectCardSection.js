import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const projects = [
  // {
  //   title: 'PERSONAL PORTFOLIO',
  //   description: 'A personal portfolio website built with React, featuring smooth animations and responsive design.',
  //   image: './images/portfolio.png',
  //   link: '#'
  // },
  {
    title: 'UDEMY CLONE WEBSITE',
    description: 'An Udemy-inspired online learning platform built with React and CSS.  Demonstrates strong skills in React component architecture, responsive layouts, and modern CSS techniques.',
    image: './images/udemy.png',
    link: 'https://udemy-coral.vercel.app/'
  },
  {
    title: 'ARUN ICECREAMS',
    description: 'A visually appealing website built with HTML, CSS, and JavaScript to showcase Arun Ice Cream’s products. Features interactive elements and smooth animations that enhance user experience. Demonstrates strong front-end development skills including layout design, responsive techniques, and DOM manipulation.',
    image: './images/arunicecream.png',
    link: 'https://nasnin-nasnin.github.io/arunicecream/'
  },
  {
    title: 'SINET',
    description: 'A sleek, modern landing page designed and developed using HTML and CSS, showcasing a creative agency’s services. The site features a clean layout, smooth navigation, and responsive design to ensure optimal viewing across all devices. This project highlights my skills in creating visually engaging and user-friendly web interfaces without relying on JavaScript.',
    image: './images/sinet.png',
    link: ' https://nasnin-nasnin.github.io/sinet/'
  },
  // {
  //   title: 'NIPIN NIRAVATH',
  //   description: 'A psychic’s professional portfolio and appointment booking site.',
  //   image: './images/nipinniravath.png',
  //   link: '#'
  // },
  {
    title: 'REKSHA',
    description: 'A web application designed to provide quick and effective help to people in danger during emergencies such as natural calamities or personal safety threats. Reksha connects users with appropriate forces and support systems based on the situation, ensuring timely assistance whether its disaster relief or safety measures for women facing danger. The app aims to empower vulnerable individuals by simplifying the process of reaching out for help in critical moments.',
    image: './images/reksha.png',
    link: 'https://github.com/nasnin-nasnin/Reksha.git'
  },
  {
    title: 'LIBRARY',
    description: 'A web application that allows users to search for and download books easily. The platform provides a seamless experience for users to find the books they need, while admins have the ability to manage the system by viewing registered users and adding new books. This project focuses on efficient book management and user accessibility, creating a digital library environment for easy access to resources.',
    image: './images/library.jpeg',
    link: 'https://github.com/nasnin-nasnin/library.git'
  },
];

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div 
    className="project-card" id="projects"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="project-content">
      <h1 className="project-title">{title}</h1>
      <p className="project-desc">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="view-button">
        View Project
      </a>
    </div>
    <div className="project-image">
      <img src={image} alt={`${title} screenshot`} />
    </div>
  </motion.div>
);


const ProjectCardSection = () => {
  return (
    <section id="projects-section">
      <h2 className="main-heading">Projects</h2>
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          title={proj.title}
          description={proj.description}
          image={proj.image}
          link={proj.link}
        />
      ))}
    </section>
  );
};


export default ProjectCardSection;
