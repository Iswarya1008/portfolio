import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sticky">
      <div className="container">
        <div className={styles.brand}>Iswaryalakshmi</div>
        <div className={styles.links}>
          <button onClick={()=>scrollTo('about')}>About</button>
          <button onClick={()=>scrollTo('skills')}>Skills</button>
          <button onClick={()=>scrollTo('projects')}>Projects</button>
          <button onClick={()=>scrollTo('internships')}>Internships</button>
          <button onClick={()=>scrollTo('certificates')}>Certificates</button>
          <button onClick={()=>scrollTo('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
