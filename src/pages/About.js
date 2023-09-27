import "./About.css"
import maskImage from "../images/Mask Group 1.png";

export default function About() {
  return (
    <div>
      <div className="selfie">
        <img src={maskImage} alt="Mask Group 1" />
      </div>
      <div className="about-name">
        <h2>Austin Kobie</h2>
        <p>-Software Enginner</p>
      </div>
      <div className="about-me">
        <p>
          I am a skilled software developer with expertise in databases,
          frameworks, and programming languages such as DBeaver, ElephantSQL,
          NoSQL, PostgreSQL, Bootstrap, Flask, NodeJs, Google API Services,
          React, React Native, CSS, HTML, JavaScript, Julia, Python, and Github.
          Along with my passion for coding, I also love to travel and explore
          new places, which enhances my creativity and problem-solving skills. I
          have experience building React Full Stack websites, designing frontend
          web applications, and developing object-oriented programs using
          Python. With a strong desire to take on challenging projects and
          always looking to learn new technologies, I bring a unique perspective
          to software development that allows me to think creatively and solve
          complex problems.
        </p>
      </div>
    </div>
  );
}
