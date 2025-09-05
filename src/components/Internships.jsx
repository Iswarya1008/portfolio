import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInternships } from '../store/slices/internshipsSlice.js'

const Internships = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.internships)

  useEffect(()=>{ dispatch(fetchInternships()) }, [dispatch])

  return (
    <section id="internships" className="section">
      <div className="container">
        <h2>Internships</h2>
        <p className="subtitle">Hands‑on experience from real environments.</p>

        {status==='loading' && <div className="card">Loading internships…</div>}
        {status==='failed' && <div className="card">Error: {error}</div>}
        {status==='succeeded' && (
          <div className="grid cols-2">
            {items.map((x, i)=>(
              <article className="card" key={i}>
                <h3 style={{marginTop:0}}>{x.company}</h3>
                <p style={{color:'#9db0d0', marginTop:-6}}>{x.monthYear}</p>
                <p style={{color:'#c7d8f8'}}>{x.summary}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Internships
