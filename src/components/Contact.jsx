import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendContact, resetContact } from '../store/slices/contactSlice.js'

const Contact = () => {
  const dispatch = useDispatch()
  const { status, error, lastResponse } = useSelector(s => s.contact)

  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })

  const submit = (e) => {
    e.preventDefault()
    dispatch(sendContact(form))
  }

  const onChange = (e) => setForm(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="subtitle">Have a project in mind or want to collaborate? Let’s talk.</p>

        <div className="card">
          {status==='succeeded' ? (
            <div>
              <p>Thanks, <strong>{lastResponse?.name}</strong> — your message was received.</p>
              <button className="btn" onClick={()=>dispatch(resetContact())}>Send another</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="row">
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required maxLength={80} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={onChange} required />
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={onChange} maxLength={30} />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="3" value={form.message} onChange={onChange} required maxLength={1000} />
                </div>
              </div>
              <div style={{marginTop:12, display:'flex', gap:10, alignItems:'center'}}>
                <button className="btn primary" disabled={status==='loading'}>{status==='loading'?'Sending…':'Send message'}</button>
                {error && <span style={{color:'#ff9b9b'}}>Error: {error}</span>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
