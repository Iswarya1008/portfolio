import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../store/slices/projectsSlice.js'

const Projects = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.projects)

  useEffect(()=>{ dispatch(fetchProjects()) }, [dispatch])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <p className="subtitle">Selected work that shows how I build and ship.</p>

        {status==='loading' && <div className="card">Loading projects…</div>}
        {status==='failed' && <div className="card">Error: {error}</div>}
        {status==='succeeded' && (
          <div className="grid cols-2">
            {items.map((p, i)=>(
              <article className="card" key={i}>
                <h3 style={{marginTop:0}}>{p.title}</h3>
                <p style={{color:'#c7d8f8'}}>{p.description}</p>
                <div className="list" style={{marginTop:8}}>
                  {p.tech?.split(',').map((t, k)=>(<span className="chip" key={k}>{t.trim()}</span>))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
