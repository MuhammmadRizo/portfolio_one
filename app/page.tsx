import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Marquee from '@/components/Marquee'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <PortfolioSection />
        <Marquee reverse />
        <ServicesSection />
        <TeamSection />

        {/* CTA Banner */}
        <section style={{
          padding: '80px 40px',
          background: 'white',
          textAlign: 'center',
          borderTop: '1px solid rgba(26,26,26,0.06)',
        }}>
          <p style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '20px',
          }}>
            ✦ KELING, GAPLASHAMIZ
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 600,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Yangi saytingiz haqida...
          </h2>
          <p style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#888',
            marginBottom: '36px',
          }}>
            Dastlabki konsultatsiya bepul, shuning uchun yo'qotadigan hech narsangiz yo'q.{' '}
            <em>Va hammasini yutib olasiz.</em>
          </p>
          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            <span>Bog'lanish</span>
            <span>→</span>
          </a>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
