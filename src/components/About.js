// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container" id="about">
//       <h1 className="about-title">about<span className="dot">.</span></h1>
      
     
      
//       <p className="description">
//         I'm a <strong>Frontend, Backend Web Developer</strong> building and managing websites and web applications that lead
//         to the success of the overall product. Check out some of my work in the <a href="#projects">Projects</a> section.      
//         I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches
//         my <strong>skills</strong> and experience, then don't hesitate to contact me.</p>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-title">ABOUT ME</h1>
        </div>
        <div className="about-right">
          <p className="description">
            I'm a <strong>Frontend, Backend Web Developer</strong> building<br></br>
            and managing websites and web applications that  <br></br>
            lead to the success of the overall product. Check out  <br></br>
            some of my work in the<a href="#projects"> Projects</a> section.<br></br>      
            I'm open to job opportunities where I can contribute,  <br></br>
            learn, and grow. If you have a good opportunity that <br></br>
            and experience, matches my <strong>skills</strong> then don't hesitate <br></br>to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
