'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Couple 3 Films',
    subtitle: 'NYC Ishlab Chiqarish Kompaniyasi',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/699a92dfb8fce23b12fd3e0b_couple%203%20sharing%20screenshot%20-%20smaller.avif',
    url: '#',
    description: "Animatsiyali intro va scroll-based loyiha interaksiyalari bilan bu loyihada men yagona dizayner va dasturchi bo'ldim.",
    role: 'Dizayn & Dasturlash',
  },
  {
    id: 2,
    title: 'Mountain Crust Pizza',
    subtitle: 'To\'ylar uchun Pitsa Kompaniyasi',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/68e80aef0f523e2c87eed911_Screenshot%202025-10-09%20151634%20(1).png',
    url: '#',
    description: "Vintage uslub va zamonaviy qiyofani uyg'unlashtirgan bu loyiha men uchun juda qiziqarli bo'ldi.",
    role: 'Dizayn & Dasturlash',
  },
  {
    id: 3,
    title: 'Juniper VC',
    subtitle: 'Bioindustrial Venchur Kapital',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/68e80a535f71bd6bf2718f18_Screenshot%202025-10-09%20151531%20(1).png',
    url: '#',
    description: 'Bu zamonaviy VC kompaniyasi uchun chiroyli va interaktiv saytni ishlab chiqdim va animatsiyalashtirdim.',
    role: 'Dasturlash & Animatsiya',
  },
  {
    id: 4,
    title: 'Princeton LGBTQIA+',
    subtitle: 'Tarixiy Ko\'rgazma Sayti',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/678f4166d038c96aaa0da619_Screenshot%202025-01-21%20014009.avif',
    url: '#',
    description: "Yuzlab intervyu va og'zaki tarixlarni o'z ichiga olgan onlayn ko'rgazma. Bunday loyihalar veb-saytlarning qudratiga ishontiradigan.",
    role: 'Dizayn & Dasturlash',
  },
  {
    id: 5,
    title: 'Biocreative Index',
    subtitle: 'Ijodkorlar × Biologiya',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/678f40bc5e5f6017d67c1c4a_Screenshot%202025-01-21%20013415%20(2).avif',
    url: '#',
    description: 'Biologiya va ijodiy soha kesishmasida ishlayotgan odamlar uchun katalog. Men dasturlash qismini amalga oshirdim.',
    role: 'Dasturlash',
  },
  {
    id: 6,
    title: 'Far Outtt',
    subtitle: 'Ijodiy Agentlik',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/66328b3ec17dbf0637401161_far%20outtt.avif',
    url: '#',
    description: "Kosmik mavzudagi bu saytni men ham dizayn qildim, ham kod yozdim. Agentlik yirik brendlar bilan ishlagan.",
    role: 'Dizayn & Dasturlash',
  },
  {
    id: 7,
    title: 'Brooklyn Editions',
    subtitle: 'Brooklyn Bosma Studiyasi',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/655827ff6ec4f39efa88616e_64a38eb537ef9a11b09688e2_Screenshot%202023-07-03%20231356.avif',
    url: '#',
    description: "Mening eng maqtanch loyiham. Sahifalar va animatsiyalardagi tafsilotlarga e'tibor meni yaxshiroq dasturchi qildi. Awwwards mukofoti laureati!",
    role: 'Dasturlash',
  },
  {
    id: 8,
    title: 'Cadence',
    subtitle: 'RPM Healthcare Startup',
    img: 'https://cdn.prod.website-files.com/629971ac1b962e42fe087309/63b59ab504d70c893676dd19_Screenshot%202023-01-04%20102623.avif',
    url: '#',
    description: 'Bu loyiha meni chindan ham kod yozishni o\'rgatdi. Figma dizaynlarini ishlab chiqdim, barcha animatsiyalarni men qo\'shdim.',
    role: 'Dasturlash & Animatsiya',
  },
]

export default function PortfolioSection() {
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in-scroll')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const activeProject = projects.find(p => p.id === activeModal)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{ padding: '100px 40px', background: 'var(--cream)' }}
    >
      {/* Header */}
      <div className="fade-in-scroll" style={{ marginBottom: '64px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-dm)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            ✦ PORTFOLIO
          </p>
          <h2 className="section-heading">
            Ko'zga ko'rinadigan{' '}
            <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Loyihalar</span>
          </h2>
        </div>
        <p style={{ maxWidth: '380px', lineHeight: 1.7, color: '#666', fontFamily: 'var(--font-dm)', fontSize: '15px' }}>
          Deyarli besh yil davomida yaratilgan veb-saytlardan tanlama.
          Skrinshotlar ularning haqiqiy go'zalligini ko'rsatmaydi — har birini bosib ko'ring!
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="portfolio-card fade-in-scroll"
            style={{
              transitionDelay: `${i * 0.05}s`,
              borderRadius: '4px',
              overflow: 'hidden',
              background: 'white',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}
            onClick={() => setActiveModal(project.id)}
          >
            <div style={{ position: 'relative', paddingTop: '65%', overflow: 'hidden' }}>
              <img
                src={project.img}
                alt={project.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div className="overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(26,26,26,0.82)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                flexDirection: 'column',
                gap: '8px',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5"/>
                  <path d="M10 16 L22 16 M18 12 L22 16 L18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ color: 'white', fontSize: '12px', fontFamily: 'var(--font-dm)', letterSpacing: '0.05em' }}>
                  Ko'rish
                </span>
              </div>
            </div>
            <div style={{ padding: '20px 24px' }}>
              <p style={{ fontSize: '11px', color: 'var(--blue)', fontFamily: 'var(--font-dm)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                {project.role}
              </p>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#888', fontFamily: 'var(--font-dm)' }}>
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(26,26,26,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            animation: 'fadeIn 0.25s ease both',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: 'var(--cream)',
              maxWidth: '700px',
              width: '100%',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: 'relative', paddingTop: '55%' }}>
              <img
                src={activeProject.img}
                alt={activeProject.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, marginBottom: '4px' }}>
                    {activeProject.title}
                  </h3>
                  <p style={{ color: '#888', fontFamily: 'var(--font-dm)', fontSize: '14px' }}>
                    {activeProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#666', lineHeight: 1 }}
                >
                  ✕
                </button>
              </div>
              <p style={{ lineHeight: 1.7, color: '#444', fontFamily: 'var(--font-dm)', fontSize: '15px', marginBottom: '24px' }}>
                {activeProject.description}
              </p>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>Saytga o'tish</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
