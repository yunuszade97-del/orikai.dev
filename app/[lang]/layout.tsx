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
      ? 'Freelance AI developer — Next.js websites, Telegram bots & n8n automation. Fast delivery, quality guaranteed.'
      : 'AI-разработчик: сайты на Next.js, Telegram-боты, автоматизация на n8n. Быстро, под ключ, с гарантией результата.',
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
      images: [{ url: '/og', width: 1200, height: 630, alt: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик' }],
      type: 'website',
      locale: isEn ? 'en_US' : 'ru_RU',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик',
      description: isEn
        ? 'Websites, Telegram bots & AI automation — fast, quality, guaranteed.'
        : 'Сайты, боты и автоматизация — быстро, с гарантией.',
      images: [{ url: '/og', alt: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик' }],
    },
    robots: { index: true, follow: true },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isEn = lang === 'en'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Orik',
        jobTitle: isEn ? 'AI Developer' : 'AI-разработчик',
        url: 'https://orikai.dev',
        sameAs: ['https://t.me/orhan_yunuszade'],
        knowsAbout: ['Next.js', 'Python', 'Telegram Bots', 'n8n', 'AI Automation', 'Web Development', 'WhatsApp Bots', 'Make', 'CRM Integration'],
      },
      {
        '@type': 'WebSite',
        name: 'orikai.dev',
        url: 'https://orikai.dev',
        inLanguage: isEn ? 'en' : 'ru',
      },
      {
        '@type': 'ProfessionalService',
        name: isEn ? 'Orik — AI Developer' : 'Orik — AI-разработчик',
        url: 'https://orikai.dev',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://t.me/orhan_yunuszade',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isEn ? 'Development Services' : 'Услуги разработки',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEn ? 'Websites & Landing Pages' : 'Сайты и лендинги' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEn ? 'Telegram & WhatsApp Bots' : 'Telegram и WhatsApp боты' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEn ? 'Workflow Automation (n8n, Make, CRM)' : 'Автоматизация (n8n, Make, CRM)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEn ? 'Web Applications' : 'Веб-приложения' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEn ? 'Custom Software' : 'ПО под заказ' } },
          ],
        },
      },
    ],
  }

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
