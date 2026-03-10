'use client'

interface MarqueeProps {
  reverse?: boolean
}

const items = [
  'Next.js', 'Web Dev', 'Web Animatsiyalar', 'Custom Integratsiyalar', 'SEO',
  'Next.js', 'Web Dev', 'Web Animatsiyalar', 'Custom Integratsiyalar', 'SEO',
  'Next.js', 'Web Dev', 'Web Animatsiyalar', 'Custom Integratsiyalar', 'SEO',
  'Next.js', 'Web Dev', 'Web Animatsiyalar', 'Custom Integratsiyalar', 'SEO',
]

export default function Marquee({ reverse = false }: MarqueeProps) {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(26,26,26,0.1)',
      borderBottom: '1px solid rgba(26,26,26,0.1)',
      padding: '16px 0',
      background: 'white',
    }}>
      <div
        className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}
        style={{
          display: 'flex',
          gap: '0',
          animationDuration: reverse ? '25s' : '20s',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '15px',
              fontStyle: 'italic',
              color: i % 5 === 0 ? 'var(--blue)' : 'var(--dark)',
              padding: '0 24px',
              whiteSpace: 'nowrap',
            }}
          >
            {item} •
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '15px',
              fontStyle: 'italic',
              color: i % 5 === 0 ? 'var(--blue)' : 'var(--dark)',
              padding: '0 24px',
              whiteSpace: 'nowrap',
            }}
          >
            {item} •
          </span>
        ))}
      </div>
    </div>
  )
}
