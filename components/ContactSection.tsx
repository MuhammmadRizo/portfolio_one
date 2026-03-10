'use client'

import { useState, useRef, useEffect } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in-scroll')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '100px 40px',
        background: 'var(--dark)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-60px',
        opacity: 0.04,
        fontSize: '300px',
        fontFamily: 'var(--font-playfair)',
        fontStyle: 'italic',
        color: 'white',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        Bog'lanish
      </div>

      {/* Floating shapes */}
      <div style={{ position: 'absolute', bottom: '60px', right: '80px', opacity: 0.15 }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#6FA3C8" strokeWidth="1"/>
          <circle cx="60" cy="60" r="35" stroke="#6FA3C8" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="60" cy="60" r="10" fill="#6FA3C8"/>
        </svg>
      </div>

      <div style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
        <div className="fade-in-scroll" style={{ marginBottom: '60px' }}>
          <p style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '12px',
          }}>
            ✦ ALOQA
          </p>
          <h2 className="section-heading" style={{ color: 'var(--cream)' }}>
            Yangi saytingiz{' '}
            <span style={{ color: 'var(--blue-light)', fontStyle: 'italic' }}>haqida...</span>
          </h2>
          <p style={{
            marginTop: '16px',
            fontFamily: 'var(--font-dm)',
            fontSize: '16px',
            color: '#aaa',
            lineHeight: 1.7,
          }}>
            Dastlabki konsultatsiya bepul, shuning uchun yo'qotadigan hech narsangiz yo'q.{' '}
            <em style={{ color: '#ccc' }}>Va hammasini yutib olasiz.</em>
          </p>
          <p style={{ marginTop: '16px', fontFamily: 'var(--font-dm)', fontSize: '14px', color: '#666' }}>
            Yoki to'g'ridan-to'g'ri:{' '}
            <a
              href="mailto:muhammadrizodev@gmail.com"
              style={{ color: 'var(--blue-light)', textDecoration: 'none' }}
            >
              muhammadrizodev@gmail.com
            </a>
          </p>
        </div>

        {submitted ? (
          <div
            className="fade-in-scroll visible"
            style={{
              padding: '48px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '40px', marginBottom: '16px' }}>✦</p>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', marginBottom: '12px', color: 'var(--cream)' }}>
              Xabaringiz yuborildi!
            </h3>
            <p style={{ color: '#aaa', fontFamily: 'var(--font-dm)', fontSize: '15px' }}>
              Tez orada siz bilan bog'lanaman. Sabr qiling! ⋆｡ ﾟ☾ ﾟ｡ ⋆
            </p>
          </div>
        ) : (
          <div className="fade-in-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <input
              type="text"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="form-field"
              style={{ color: 'var(--cream)', borderBottomColor: 'rgba(255,255,255,0.2)' }}
            />
            <input
              type="email"
              placeholder="Emailingiz"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="form-field"
              style={{ color: 'var(--cream)', borderBottomColor: 'rgba(255,255,255,0.2)' }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <select
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
                className="form-field form-select"
                style={{ color: formData.service ? 'var(--cream)' : '#666', borderBottomColor: 'rgba(255,255,255,0.2)', background: 'transparent' }}
              >
                <option value="" disabled>Xizmat turi</option>
                <option value="dev" style={{ color: 'var(--dark)' }}>Dasturlash</option>
                <option value="whitelabel" style={{ color: 'var(--dark)' }}>White-Label</option>
                <option value="design-dev" style={{ color: 'var(--dark)' }}>Dizayn & Dasturlash</option>
                <option value="unsure" style={{ color: 'var(--dark)' }}>Aniq emas</option>
              </select>

              <select
                value={formData.budget}
                onChange={e => setFormData({...formData, budget: e.target.value})}
                className="form-field form-select"
                style={{ color: formData.budget ? 'var(--cream)' : '#666', borderBottomColor: 'rgba(255,255,255,0.2)', background: 'transparent' }}
              >
                <option value="" disabled>Byudjet (ixtiyoriy)</option>
                <option value="none" style={{ color: 'var(--dark)' }}>Aniq emas</option>
                <option value="2-5k" style={{ color: 'var(--dark)' }}>$2–5k</option>
                <option value="5-8k" style={{ color: 'var(--dark)' }}>$5–8k</option>
                <option value="8-12k" style={{ color: 'var(--dark)' }}>$8–12k</option>
                <option value="12k+" style={{ color: 'var(--dark)' }}>$12k+</option>
              </select>
            </div>

            <textarea
              placeholder="Xabaringiz"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="form-field"
              style={{
                color: 'var(--cream)',
                borderBottomColor: 'rgba(255,255,255,0.2)',
                resize: 'none',
              }}
            />

            <button
              onClick={handleSubmit}
              style={{
                padding: '16px 32px',
                background: 'var(--cream)',
                color: 'var(--dark)',
                border: 'none',
                fontFamily: 'var(--font-dm)',
                fontSize: '14px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'background 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e0d8cc')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
            >
              Yuborish →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
