import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCertificates } from '../store/slices/certificatesSlice.js'

const Certificates = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.certificates)

  useEffect(()=>{ dispatch(fetchCertificates()) }, [dispatch])

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2>Certificates</h2>
        <p className="subtitle">Learning never stops.</p>

        {status==='loading' && <div className="card">Loading certificates…</div>}
        {status==='failed' && <div className="card">Error: {error}</div>}
        {status==='succeeded' && (
          <div className="grid cols-3">
            {items.map((c, i)=>(
              <article className="card" key={i}>
                <h3 style={{marginTop:0}}>{c.name}</h3>
                <p style={{color:'#9db0d0'}}>{c.issuer}</p>
                <p style={{color:'#c7d8f8'}}>{c.monthYear}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
