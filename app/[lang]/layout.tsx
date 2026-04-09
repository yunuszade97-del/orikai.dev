import type { Metadata } from 'next'
import { Bebas_Neue, IBM_Plex_Mono, Space_Mono } from 'next/font/google'
import '../globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ibm',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isEn = lang === 'en'

  return {
    title: isEn
      ? 'Orik — AI Developer | Websites, Bots & Automation'
      : 'Orik — AI-разработчик | Сайты, боты, автоматизация',
    description: isEn
      ? 'I build websites, Telegram bots and AI automation. Fast, quality, guaranteed. Message on Telegram.'
      : 'Создаю сайты, Telegram-боты и AI-автоматизацию под ключ. Быстро, качественно, с гарантией.',
    metadataBase: new URL('https://orikai.dev'),
    alternates: {
      canonical: isEn ? 'https://orikai.dev/en' : 'https://orikai.dev',
      languages: {
        ru: 'https://orikai.dev',
        en: 'https://orikai.dev/en',
      },
    },
    openGraph: {
      title: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик',
      description: isEn
        ? 'Websites, bots & automation — fast, smart, with AI'
        : 'Сайты, боты и автоматизация — быстро, умно, с AI',
      url: isEn ? 'https://orikai.dev/en' : 'https://orikai.dev',
      siteName: 'orikai.dev',
      images: [{ url: '/og', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик',
      images: ['/og'],
    },
    robots: { index: true, follow: true },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Orik',
  jobTitle: 'AI Developer',
  url: 'https://orikai.dev',
  sameAs: ['https://t.me/orhan_yunuszade'],
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html
      lang={lang}
      className={`${bebasNeue.variable} ${ibmPlexMono.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-ibm), monospace' }}>
        {children}
      </body>
    </html>
  )
}
