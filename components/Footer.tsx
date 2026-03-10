"use client";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 40px 40px',
      background: 'var(--dark)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      color: 'var(--cream)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '60px',
      }}>
        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--cream)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            MR
          </Link>
          <p style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '14px',
            color: '#777',
            maxWidth: '280px',
            lineHeight: 1.7,
          }}>
            Muhammad Rizo — Sirdaryo, O'zbekiston asosidagi
            freelance veb dizayner va dasturchi.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '16px',
            }}>
              Email
            </p>
            <a
              href="mailto:muhammadrizodev@gmail.com"
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: '14px',
                color: 'var(--cream)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream)')}
            >
              adilovdev1@gmail.com
            </a>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '16px',
            }}>
              Instagram
            </p>
            <a
              href="https://www.instagram.com/rizo_adilov"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: '14px',
                color: 'var(--cream)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream)')}
            >
              @rizo_adilov
            </a>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        paddingTop: '24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <p style={{
          fontFamily: 'var(--font-dm)',
          fontSize: '12px',
          color: '#555',
        }}>
          Muhammad Rizo © 2026 Barcha huquqlar himoyalangan.
        </p>
        <p style={{
          fontFamily: 'var(--font-dm)',
          fontSize: '11px',
          color: '#444',
        }}>
          ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆
        </p>
      </div>
    </footer>
  )
}
