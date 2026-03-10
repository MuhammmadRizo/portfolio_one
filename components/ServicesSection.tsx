'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '⬡',
    title: 'Figma Dizaynlarini Ishlab Chiqish',
    desc: "Allaqachon dizayneringiz bormi? Ajoyib! Interaksiyalar va animatsiyalar haqida gaplashgandan so'ng, ishlab chiqish jarayonini boshlaymiz. Bu murakkablikka qarab 2-4 hafta davom etadi.",
    time: '2–4 hafta',
  },
  {
    icon: '⊕',
    title: 'White-label Dasturlash Xizmatlari',
    desc: "Men bir nechta xalqaro agentliklar uchun subpudratchi sifatida ishladim. Mijozlaringiz yaxshi qo'llarda ekanligiga ishonch hosil qiling.",
    time: 'Muzokaraga qarab',
  },
  {
    icon: '◉',
    title: 'Dizayn & Dasturlash',
    desc: 'Saytni ishga tushirishdan to yakungacha hamkorlik qilamiz. Discovery call dan keyin sitemap, keyin Figmada dizayn, so\'ng dasturlash. 4-8 hafta.',
    time: '4–8 hafta',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in-scroll')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: '100px 40px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '60px',
        opacity: 0.06,
        fontSize: '200px',
        fontFamily: 'var(--font-playfair)',
        fontWeight: 700,
        color: 'var(--dark)',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        MR
      </div>

      <div className="fade-in-scroll" style={{ marginBottom: '72px' }}>
        <p style={{ fontFamily: 'var(--font-dm)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
          ✦ XIZMATLAR
        </p>
        <h2 className="section-heading">
          Veb Dasturlash{' '}
          <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Xizmatlari</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card fade-in-scroll"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Decorative SVG */}
            <div style={{ marginBottom: '28px' }}>
              {i === 0 && (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="10" y="10" width="18" height="18" stroke="#4A7FA5" strokeWidth="1.5"/>
                  <rect x="32" y="10" width="18" height="18" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="10" y="32" width="18" height="18" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="41" cy="41" r="9" fill="#4A7FA5" opacity="0.2" stroke="#4A7FA5" strokeWidth="1.5"/>
                </svg>
              )}
              {i === 1 && (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="22" stroke="#4A7FA5" strokeWidth="1.5"/>
                  <path d="M20 30 L26 36 L40 22" stroke="#4A7FA5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {i === 2 && (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="20" r="10" fill="#E8C5A0" opacity="0.6" stroke="#4A7FA5" strokeWidth="1.5"/>
                  <path d="M10 50 Q30 35 50 50" stroke="#4A7FA5" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
            </div>

            <p style={{
              fontSize: '11px',
              color: 'var(--blue)',
              fontFamily: 'var(--font-dm)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              {s.time}
            </p>

            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '22px',
              fontWeight: 600,
              marginBottom: '16px',
              lineHeight: 1.2,
            }}>
              {s.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#555',
            }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
