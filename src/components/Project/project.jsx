import React from 'react';
import './Project.css';


const projects = [
    {
        title: 'SALES PERFORMANCE ANALYSIS ',
        description:
            'Power BI, SQL Leveraged SQL to analyse over 500,000 sales records, identifying key revenue trends and patterns Developed interactive Power BI dashboards to visualize regional performance and provide actionable insights for sales growth strategies.',
        image: 'sales.png', // put this image in your public folder or import it if in src
    },
    {
        title: 'RANDOM PASSWORD GENERATOR ',
        description: '    Developed a Python-based software tool to generate strong, random passwords for enhanced security. Implemented customizable password length and a mix of alphabets, numbers, and special characters Utilized random and string modules to ensure unpredictability and security.',
        image: 'password-gen.webp',
    },
    {
        title: 'YOUTUBE VIDEO DOWNLOADER',
        description:
            'Created a Python script to download videos from YouTube using the pytube library. Implemented functionality to fetch video details and download the highest-resolution format. Enabled seamless video downloads for offline access',
        image: 'youtube.png',
    },
];

const Projects = () => {
    return (
        <div className="projects-section" id="projects">
            <h1>Projects</h1>
            <h2 className="sub-title">My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={`./${project.image}`} alt={project.title} className="project-image" />
                        <h3>
                            {project.title} <a href={project.url} target="_blank" rel="noopener noreferrer">visit</a>
                        </h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
