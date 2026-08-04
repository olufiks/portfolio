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

    <div className="skills-wrapper">
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: "0.75rem", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <rect width="32" height="32" rx="6" fill="#184539" fillOpacity="0.1"/>
              <path d="M8 8l14.5 2L21 22l-5 2-5-2-.5-3h2.5l.5 1.5L16 22l3-1 .5-4H10.5L10 14h9l.5-3H10L9.5 8H8z" fill="#184539"/>
            </svg>
            HTML & CSS
          </div>
          <div className="skill-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: "0.75rem", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <rect width="32" height="32" rx="6" fill="#184539" fillOpacity="0.1"/>
              <path d="M10 10l2 12 4 2 4-2 2-12H10zm4.5 4h-2l-.5-2h3v2h-2.5zM16 20l-2-4h1.5l.5 2 1 .5 1-.5.5-2H18l-2 4z" fill="#184539"/>
            </svg>
            JavaScript
          </div>
          <div className="skill-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: "0.75rem", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <rect width="32" height="32" rx="6" fill="#184539" fillOpacity="0.1"/>
              <path d="M16 8c-4.5 0-8 2-8 5 0 2.5 2 4 3.5 4.5-1 .5-3 1.5-3 3.5 0 2.5 2.5 4 7.5 4s7.5-1.5 7.5-4c0-2-2-3-3-3.5 1.5-.5 3.5-2 3.5-4.5 0-3-3.5-5-8-5zm0 2c2.5 0 5 1 5 3s-2.5 3-5 3-5-1-5-3 2.5-3 5-3zm0 13c-3.5 0-5.5-1-5.5-2 0-1 1-1.5 1.5-1.8 1.2.5 2.5.8 4 .8s2.8-.3 4-.8c.5.3 1.5.8 1.5 1.8 0 1-2 2-5.5 2z" fill="#184539"/>
            </svg>
            React
          </div>
          <div className="skill-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: "0.75rem", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <rect width="32" height="32" rx="6" fill="#184539" fillOpacity="0.1"/>
              <path d="M16 8C11 8 8 11 8 16s3 8 8 8 8-3 8-8-3-8-8-8zm3.5 12c-.5 0-.5-.5-1-1.5-.5-1-2.5-.5-3 .5-.5 1 .5 1.5 1 1.5.5 0 .5.5 0 .5-1 0-3-.5-3-2.5s2.5-3.5 4.5-3c2 .5 2.5 1.5 2.5 2.5s-.5 2-1 2z" fill="#184539"/>
            </svg>
            Node.js
          </div>
        </div>
      </section>
    </div>

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
        <div className="work-card">
          <h3>Countdown Timer</h3>
          <p>A countdown timer app to track time to your next deadline.</p>
          <div className="work-preview">
            <iframe
              src="https://timer-countdown-psi.vercel.app/"
              title="Countdown Timer Preview"
              loading="lazy"
            ></iframe>
          </div>
          <a
            href="https://timer-countdown-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            View Live →
          </a>
        </div>
      </div>
    </section>

    <div className="contact-wrapper">
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
        <a href="mailto:fikayoamos7@gmail.com" className="contact-link">fikayoamos7@gmail.com</a>
      </section>
    </div>
    </>
  );
}

export default App;
