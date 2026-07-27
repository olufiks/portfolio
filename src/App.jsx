import "./App.css";

function App() {

  return (
    <>
    <header>
      <h1>olufikayo | portfolio</h1>
      <a href="#about">about</a>
      <a href="#skills">skills</a>
      <a href="#work">my work</a>
      <a href="#contact">contact</a>
    </header>
    <div className="hero-container">
      <img 
        src="heroimage.png" 
        alt="Hero background" 
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Hi! I'm Olufikayo!</h1>
        <p>I am a growing developer, learning everyday!</p>
        <a href="#work" className="hero-btn">Check out my work</a>
      </div>
    </div>

    <section id="about" className="section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves building things for the web.
          I enjoy turning ideas into reality through code and am always looking
          to improve my skills and learn new technologies.
        </p>
      </div>
      <img src="aboutmeimg.png" alt="About me" className="about-image" />
    </section>

    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">HTML & CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
      </div>
    </section>

    <section id="work" className="section">
      <h2>My Work</h2>
      <div className="work-grid">
        <div className="work-card">
          <h3>To-Do UI</h3>
          <p>A clean and minimal to-do list interface design.</p>
          <div className="work-preview">
            <img src="todoapp.png" alt="To-Do App Preview" />
          </div>
          <a
            href="https://github.com/olufiks/to-do"
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            View on GitHub →
          </a>
        </div>
        <div className="work-card">
          <h3>Notes App</h3>
          <p>A simple notes application for writing and organizing your thoughts.</p>
          <div className="work-preview">
            <img src="notesapp.png" alt="Notes App Preview" />
          </div>
          <a
            href="https://github.com/olufiks/notes-app"
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            View on GitHub →
          </a>
        </div>
        <div className="work-card work-card-featured">
          <h3>Weather App</h3>
          <p>A clean and simple weather application that displays real-time weather data.</p>
          <div className="work-preview">
            <iframe
              src="https://my-weather-app-nine-tan.vercel.app/"
              title="Weather App Preview"
              loading="lazy"
            ></iframe>
          </div>
          <a
            href="https://my-weather-app-nine-tan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            View Live →
          </a>
        </div>
      </div>
    </section>

    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Feel free to reach out to me!</p>
      <a href="mailto:fikayoamos7@gmail.com" className="contact-link">fikayoamos7@gmail.com</a>
    </section>
    </>
  );
}

export default App;
