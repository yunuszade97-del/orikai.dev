import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          fontFamily: 'monospace',
        }}
      >
        {/* Grid lines decoration */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(200,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top label */}
        <div
          style={{
            fontSize: '14px',
            letterSpacing: '0.3em',
            color: '#666666',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          AI DEVELOPER · orikai.dev
        </div>

        {/* Main name */}
        <div
          style={{
            fontSize: '160px',
            fontWeight: 900,
            color: '#F0EDE4',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          ORIK
        </div>

        {/* Accent underline */}
        <div
          style={{
            width: '240px',
            height: '6px',
            background: '#C8FF00',
            marginTop: '20px',
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: '#F0EDE4',
            marginTop: '32px',
            maxWidth: '600px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Сайты, боты и автоматизация — быстро, умно, с AI
        </div>

        {/* Telegram */}
        <div
          style={{
            marginTop: '40px',
            fontSize: '16px',
            color: '#C8FF00',
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ display: 'flex' }}>t.me/orhan_yunuszade</span>
        </div>

        {/* Decorative corner element */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '280px',
            height: '280px',
            border: '2px solid rgba(200,255,0,0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '200px',
              height: '200px',
              border: '2px solid rgba(200,255,0,0.15)',
              borderRadius: '50%',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
