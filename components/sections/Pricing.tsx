'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function Pricing() {
  const { t, lang } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = sectionRef.current?.querySelectorAll<HTMLElement>('[data-row]')
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rows = entry.target.querySelectorAll<HTMLElement>('[data-row]')
            rows.forEach((row, i) => {
              row.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`
              row.style.opacity = '1'
              row.style.transform = 'translateY(0)'
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    items.forEach((row) => {
      row.style.opacity = '0'
      row.style.transform = 'translateY(20px)'
    })

    return () => observer.disconnect()
  }, [])

  const pricingHref = lang === 'en' ? '/en/pricing' : '/ru/pricing'

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 md:py-32 relative"
      style={{
        background: 'var(--bg)',
        borderTop: '1px dashed var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with full-price button in corner */}
        <div className="flex items-start justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
            >
              {t.pricing.label}
            </p>
            <h2
              className="text-6xl md:text-8xl"
              style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
            >
              {t.pricing.title}
            </h2>
          </div>

          {/* Full price button — in the corner */}
          <Link
            href={pricingHref}
            className="shrink-0 mt-2 inline-flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-200 hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            style={{
              border: '1px dashed var(--accent)',
              color: 'var(--accent)',
              fontFamily: 'var(--font-space)',
              fontWeight: 700,
            }}
          >
            {t.pricing.fullPriceBtn} →
          </Link>
        </div>

        {/* Summary list */}
        <div
          style={{
            border: '1px dashed var(--border)',
            background: 'var(--surface)',
          }}
        >
          {t.pricing.items.map((item, i) => (
            <div
              key={i}
              data-row
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto_auto] gap-3 md:gap-6 items-center px-5 md:px-6 py-4 md:py-5 transition-colors hover:bg-[var(--bg)]"
              style={{
                borderBottom:
                  i === t.pricing.items.length - 1
                    ? 'none'
                    : '1px dashed var(--border)',
              }}
            >
              <span
                className="hidden md:inline text-xs"
                style={{ color: 'var(--border)', fontFamily: 'var(--font-space)' }}
              >
                0{i + 1}
              </span>
              <div>
                <p
                  className="text-sm md:text-base mb-1"
                  style={{ color: 'var(--text)', fontFamily: 'var(--font-ibm)' }}
                >
                  {item.title}
                </p>
                <p
                  className="text-xs hidden md:block"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-ibm)' }}
                >
                  {item.desc}
                </p>
              </div>
              <span
                className="hidden md:inline text-xs whitespace-nowrap"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
              >
                {item.timeline}
              </span>
              <span
                className="text-sm md:text-base font-bold whitespace-nowrap"
                style={{
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-space)',
                }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-xs"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-ibm)' }}
        >
          {t.pricing.note}
        </p>
      </div>
    </section>
  )
}
