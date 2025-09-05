import React from 'react'
import styles from './Hero.module.css'
import Iswarya from '/public/Iswarya.jpg'

const Hero = () => {
  return (
    <header className="container hero">
      <div className={styles.wrap}>
        <div className={styles.text}>
          <h1>Hi, I'm <span className={styles.grad}>Iswaryalakshmi</span></h1>
          <p className="tagline">Full-Stack Developer — Java, Spring Boot, React, SQL</p>
          <div className="list">
            <span className="chip">Spring Boot</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">SQL</span>
            <span className="chip">Power BI</span>
          </div>
          <div style={{marginTop:16}}>
            <a href="http://localhost:8080/api/resume/download" className="btn primary">Download Resume</a>
          </div>
        </div>
        <div className={styles.avatar}>
          {/* <div className={styles.circle}></div>
          <div className={styles.circle2}></div> */}
          <div className={styles.photo} >
            <img src ={Iswarya} alt='iswarya'></img></div>
        </div>
      </div>
    </header>
  )
}

export default Hero
