import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSkills } from '../store/slices/skillsSlice.js'

const Skills = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.skills)

  useEffect(()=>{ dispatch(fetchSkills()) }, [dispatch])

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <p className="subtitle">Technologies I work with day‑to‑day.</p>

        {status==='loading' && <div className="card">Loading skills…</div>}
        {status==='failed' && <div className="card">Error: {error}</div>}
        {status==='succeeded' && (
          <div className="card">
            <div className="list">
              {items.map((s, i)=>(
                <span key={i} className="chip">{s.name}{s.level ? ` · ${s.level}` : ''}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
