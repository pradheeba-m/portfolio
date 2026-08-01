import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header>
        <h1>Pradheeba M</h1>
        <h3>Software Engineering Intern Aspirant</h3>

        <p>
          Pre-final year B.Tech Electronics and Computer Engineering student at
          VIT Chennai with a strong foundation in Java, Data Structures &
          Algorithms, and Full Stack Development. Passionate about solving
          challenging problems and building scalable software applications.
        </p>

        <div className="buttons">
          <a
            className="btn"
            href="mailto:pradheeba24@gmail.com"
          >
            Contact Me
          </a>

          <a
            className="btn"
            href="https://github.com/pradheeba-m"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn"
            href="https://linkedin.com/in/pradheeba-m-6a9a06324"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* About */}
      <section>
        <h2>About Me</h2>

        <p>
          I am a pre-final year B.Tech student at VIT Chennai with strong
          knowledge of Java, DSA, DBMS, Operating Systems and Computer
          Networks. I have solved more than 300 LeetCode problems across
          multiple topics and enjoy learning backend and full stack
          development.
        </p>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>

        <div className="card">
          <h3>Vellore Institute of Technology, Chennai</h3>

          <p>B.Tech Electronics and Computer Engineering</p>

          <p>CGPA: <strong>8.7 / 10</strong></p>

          <p>Expected Graduation: 2028</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2>Technical Skills</h2>

        <div className="skills">
          <span className="skill">Java</span>
          <span className="skill">C</span>
          <span className="skill">C++</span>
          <span className="skill">Python</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Node.js</span>
          <span className="skill">MySQL</span>
          <span className="skill">Git</span>
          <span className="skill">GitHub</span>
          <span className="skill">DBMS</span>
          <span className="skill">Operating Systems</span>
          <span className="skill">Computer Networks</span>
          <span className="skill">OOP</span>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>Full Stack Development Intern</h3>

          <h4>Twilight IT Solutions | June 2026 – July 2026</h4>

          <ul>
            <li>Designed and developed responsive web pages using HTML and CSS.</li>
            <li>Built interactive frontend components using JavaScript and React.</li>
            <li>Gained hands-on experience with Node.js for backend development.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Competitive Programming Practice</h3>

          <p>
            Solved 300+ LeetCode problems in Java across 12 Data Structures &
            Algorithms topics including Arrays, Binary Search, Sliding Window,
            Trees, Graphs, Backtracking and Dynamic Programming basics.
          </p>
        </div>

        <div className="card">
          <h3>Smart College Facility & Complaint Management System</h3>

          <p>
            Currently developing a full stack web application to manage campus
            complaints and facility requests with priority-based complaint
            handling.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2>Achievements</h2>

        <ul>
          <li>Solved 300+ LeetCode problems.</li>
          <li>Strong foundation in Java and Data Structures & Algorithms.</li>
          <li>Active participant in CodeYGen Club at VIT Chennai.</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>

        <p>📧 pradheeba24@gmail.com</p>
        <p>📱 +91 8610169400</p>
        <p>📍 Chennai, India</p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/pradheeba-m"
            target="_blank"
            rel="noreferrer"
          >
            github.com/pradheeba-m
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/pradheeba-m-6a9a06324"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/pradheeba-m-6a9a06324
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;