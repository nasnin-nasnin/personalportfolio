// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import EmailBar from "./components/EmailBar";
// import SocialSidebar from './components/SocialSidebar';
// import About from './components/About';
// import Expertise from './components/Expertise';
// import ProjectCardSection from './components/ProjectCardSection'; // update the path if needed
// import ContactSection from './components/ContactSection';
// import Certifications from "./components/Certifications";
// import "./App.css";

// function App() {
// return ( <div className="app">
//     <Navbar />
//     <SocialSidebar />
//     <EmailBar /> 
//     <HeroSection />
//     <About/>
//     <Expertise/>
//     <ProjectCardSection/>
//     <Certifications/>
//     <ContactSection/>
//     </div>

// );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EmailBar from "./components/EmailBar";
import SocialSidebar from './components/SocialSidebar';
import About from './components/About';
import Expertise from './components/Expertise';
import ProjectCardSection from './components/ProjectCardSection'; // your main projects section
import ContactSection from './components/ContactSection';
import Certifications from "./components/Certifications";
import SkillsSection from "./components/SkillsSection";
import ReactProjects from './components/ReactProjects'; // import your ReactProjects component

import "./App.css";

function Portfolio() {
  return (
    <div className="app">
      <Navbar />
      <SocialSidebar />
      <EmailBar />
      <HeroSection />
      <About />
      <Expertise />
      <ProjectCardSection />
      <Certifications />
      <SkillsSection/>
      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/works" element={<ReactProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
