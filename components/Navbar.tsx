'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,26,26,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <Link href="/" style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: '20px',
        fontWeight: 700,
        color: 'var(--dark)',
        textDecoration: 'none',
        letterSpacing: '-0.02em',
      }}>
        MR
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          style={{
            fontSize: '13px',
            color: '#666',
            textDecoration: 'none',
            fontFamily: 'var(--font-dm)',
            letterSpacing: '0.04em',
          }}
        >
          @muhammad.rizo
        </a>
        <a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: '13px', padding: '10px 22px' }}
        >
          <span>Bog'lanish</span>
        </a>
      </div>
    </nav>
  )
}
