import React, { useEffect, useState } from 'react';
import './experience.css';

const technologies = [
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'NumPy', img: 'https://numpy.org/images/logo.svg' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
];

const Experience = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="experience-section" id='experience'>
      <h1>Experience</h1>
      <p><strong>I've more than 1 year of experience in the below technologies.</strong></p>
      <div className="tech-icons">
        {technologies.map((tech, index) => {
          if (screenWidth > 1024) {
            return (
              <div key={index}>
                <div className="tech-item">
                  <img src={tech.img} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              </div>
            );
          } else if (screenWidth > 768) {
            return<div key={index}>
            <div className="tech-item">
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          </div>;
          } else {
            return (
              <div className="tech-item" key={index}>
                <img src={tech.img} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Experience;
