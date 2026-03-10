'use client'

import { useEffect, useRef, useState } from 'react'
import Draggable from './Draggable'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--cream)',
      }}
    >
      {/* Background blobs */}
      <div className="blob" style={{
        width: '500px', height: '500px',
        background: 'var(--blue)',
        top: '-100px', right: '-100px',
      }} />
      <div className="blob" style={{
        width: '300px', height: '300px',
        background: 'var(--accent)',
        bottom: '100px', left: '-50px',
      }} />

      {/* Floating decorative shapes */}
      <Draggable style={{ top: '20%', right: '12%' }}>
        <div className="float-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          {/* Blue planet SVG */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" fill="#6FA3C8" opacity="0.8"/>
            <ellipse cx="40" cy="40" rx="38" ry="10" fill="none" stroke="#4A7FA5" strokeWidth="2" opacity="0.6"/>
            <circle cx="30" cy="32" r="5" fill="white" opacity="0.3"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-dm)', letterSpacing: '0.05em' }}>
            Meni sudra!
          </span>
        </div>
      </Draggable>

      <Draggable style={{ top: '55%', right: '6%' }}>
        <div className="float-2">
          {/* Column and hole SVG */}
          <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
            <rect x="20" y="0" width="20" height="70" rx="10" fill="#4A7FA5" opacity="0.7"/>
            <ellipse cx="30" cy="80" rx="25" ry="8" fill="#1a1a1a" opacity="0.15"/>
          </svg>
        </div>
      </Draggable>

      <Draggable style={{ top: '70%', left: '5%' }}>
        <div className="float-3">
          <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
            <path d="M35 5 L65 45 L5 45 Z" fill="none" stroke="#E8C5A0" strokeWidth="2"/>
            <circle cx="35" cy="25" r="8" fill="#E8C5A0" opacity="0.6"/>
          </svg>
        </div>
      </Draggable>

      {/* Globe icon */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '80px',
          opacity: loaded ? 0.4 : 0,
          transition: 'opacity 1s ease 0.8s',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#4A7FA5" strokeWidth="1.5"/>
          <ellipse cx="24" cy="24" rx="10" ry="20" stroke="#4A7FA5" strokeWidth="1.5"/>
          <line x1="4" y1="24" x2="44" y2="24" stroke="#4A7FA5" strokeWidth="1.5"/>
          <line x1="4" y1="16" x2="44" y2="16" stroke="#4A7FA5" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="4" y1="32" x2="44" y2="32" stroke="#4A7FA5" strokeWidth="1" strokeDasharray="3 2"/>
        </svg>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <p
          className="hero-subtitle"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.1s',
            marginBottom: '16px',
          }}
        >
          ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆
        </p>

        <p
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '18px',
            color: '#555',
            marginBottom: '12px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          Men Muhammad Rizo,
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          freelance web
          <br />
          <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>dizayner</span> &{' '}
          <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>dasturchi</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: '#666',
            fontStyle: 'italic',
            marginBottom: '32px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.45s',
          }}
        >
          sizning raqamli orzuingizni amalga oshiraman
        </p>

        <p
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '16px',
            color: '#555',
            maxWidth: '540px',
            lineHeight: 1.7,
            marginBottom: '40px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.55s',
          }}
        >
          Salom! Agar siz ta'sirchan interaktiv va animatsiyali veb-sayt qurish uchun
          tajribali dasturchi qidirayotgan bo'lsangiz, xush kelibsiz — siz to'g'ri joyga keldingiz.{' '}
          <span style={{ color: '#888' }}>⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆</span>
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.65s',
          }}
        >
          <a href="#contact" className="btn-primary">
            <span>Bog'lanish</span>
            <span>→</span>
          </a>
          <a href="#portfolio" className="btn-outline">
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  )
}
