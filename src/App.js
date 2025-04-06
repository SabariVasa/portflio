import './App.css';
import Home from './components/Home/home.jsx';
import About from './components/About/About.jsx';
import Project from './components/Project/project.jsx';
import Experience from './components/Experience/experience.jsx'; 
import Contact from './components/Contact/contact.jsx';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact/>
    </div>
  );
}

export default App;
