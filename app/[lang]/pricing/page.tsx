import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'
import PricingContent from '@/components/sections/PricingContent'
import { getPricing } from '@/lib/i18n/pricing'

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const p = getPricing(lang)
  const isEn = lang === 'en'
  return {
    title: p.meta.title,
    description: p.meta.description,
    alternates: {
      canonical: isEn ? 'https://orikai.dev/en/pricing' : 'https://orikai.dev/ru/pricing',
      languages: {
        ru: 'https://orikai.dev/ru/pricing',
        en: 'https://orikai.dev/en/pricing',
      },
    },
  }
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const p = getPricing(lang)
  const homeHref = lang === 'en' ? '/en' : '/ru'

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-16">
        <PricingContent content={p} homeHref={homeHref} />
      </main>
      <footer
        className="py-6 px-6 md:px-12 flex items-center justify-between text-xs"
        style={{
          borderTop: '1px dashed var(--border)',
          color: 'var(--muted)',
          fontFamily: 'var(--font-space)',
          background: 'var(--bg)',
        }}
      >
        <span>ORIKAI.DEV © {new Date().getFullYear()}</span>
        <span>{p.footer}</span>
      </footer>
      <div className="px-6 md:px-12 pb-10" style={{ background: 'var(--bg)' }}>
        <Link
          href={homeHref}
          className="text-xs uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
        >
          {p.back}
        </Link>
      </div>
    </>
  )
}
