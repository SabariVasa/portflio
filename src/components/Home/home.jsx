import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './home.css';
import profileImage from '../assets/profileImage.jpeg';
import Vaibhav_Resume from '../assets/Vaibhavresume.pdf';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = () => {
  const typedRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, duration = 1000) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Data Visualization",
        "Data Engineer",
        "Data Analysis",
        "Artificial Intelligence (AI)",
        "Machine Learning (ML)"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="home-container" id="home">
      <header className="navbar">
        <div className="logo">
          Vai<span className="highlight">bhav</span><br />
          Data <span className="highlight">Engineer</span>
        </div>

        {window.innerWidth <= 768 ? (
          <IconButton className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <div>
              <CloseIcon fontSize="large" />
              <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <div
                  key={section}
                  className={activeSection === section ? 'nav-link active' : 'nav-link'}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
                ))}
              </nav>
              </div> 
              : 
              <MenuIcon fontSize="large" />}
          </IconButton>
        ):(
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
            <div
              key={section}
              className={activeSection === section ? 'nav-link active' : 'nav-link'}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </nav>
        )}
      </header>

             <main className="intro-section">
         <div className="intro-text">
           <h1 className="intro-heading">
             Hi, I'm <span className="highlight">Vaibhav</span>
           </h1>
           <h2 className="sub-heading">
             I'm a <span className="typing-effect" ref={typedRef}></span>
             <span className="cursor">|</span>
           </h2>
           {window.innerWidth <= 768 && (
            <div className="profile-pic">
             <img src={profileImage} alt="Vaibhav" />
            </div>
           )}
           <p className="intro-description">
             I am a skilled developer with expertise in Data Visualization, Data Engineering, AI, and Machine Learning.
             I enjoy transforming raw data into meaningful insights and building scalable solutions.
           </p>

           <div className="social-icons">
             <h2><strong>Available On</strong></h2>
             <div className="row">
               <a href="https://github.com/Vaibhav3844" target="_blank" rel="noopener noreferrer">
                 <GitHubIcon fontSize="large" />
               </a>
               <a href="https://www.linkedin.com/in/vaibhav-vibhute" target="_blank" rel="noopener noreferrer">
                 <LinkedInIcon fontSize="large" />
               </a>
               <a href="https://www.instagram.com/mr.vibzz___" target="_blank" rel="noopener noreferrer">
                 <InstagramIcon fontSize="large" />
               </a>
             </div>
           </div>

           <Button
             className="resume-button"
             variant="contained"
             href={Vaibhav_Resume}
             sx={{
               marginTop: "1em",
               backgroundColor: '#f7a1d0',
               color: '#fff',
               '&:hover': {
                 backgroundColor: '#e28cbd',
               },
             }}
             download
           >
             Download Resume
           </Button>
         </div>
         <div className="profile-pic hide-on-mobile">
            <img src={profileImage} alt="Vaibhav" />
         </div>
       </main>
       {showScroll && (
         <div className="scroll-to-top" onClick={() => scrollToSection('home')}>
           <ArrowUpwardIcon style={{ fontSize: 28, color: 'white' }} />
         </div>
       )}
    </div>
  );
};

export default Home;
