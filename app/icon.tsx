import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#f5f0e8',
          border: '1.5px solid #1a1a1a',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          fontSize: 13,
          color: '#1a1a1a',
          letterSpacing: '-0.5px',
        }}
      >
        MR
      </div>
    ),
    { ...size }
  )
}
