import React from 'react'
import styles from './About.module.css'

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2>About Me</h2>
      <p className="subtitle">Turning ideas into clean, scalable software with Java, Spring Boot, and React.</p>
      <div className="card">
        <p className={styles.p}>
          I'm a full‑stack developer focused on building reliable backends with Spring Boot and crafting modern, responsive UIs.
          I enjoy solving end‑to‑end problems: API design, state management, and pixel‑perfect components.
        </p>
        <p className={styles.p}>
          Strengths: fast learning, attention to detail, and a bias for shipping polished work.
        </p>
      </div>
    </div>
  </section>
)

export default About
