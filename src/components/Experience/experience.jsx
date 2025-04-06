import React from 'react';
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
  return (
    <section className="experience-section" id='experience'>
      <h1>Experience</h1>
      <p><strong>I've more than 1 years of experience in below technologies.</strong></p>
      <div className="tech-icons">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
