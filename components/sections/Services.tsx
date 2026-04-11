'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

const icons = ['◈', '◉', '⬡', '◫', '⟁', '⟴']

export default function Services() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = sectionRef.current?.querySelectorAll<HTMLElement>('[data-card]')
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>('[data-card]')
            cards.forEach((card, i) => {
              card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    items.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
          >
            {t.services.label}
          </p>
          <h2
            className="text-6xl md:text-8xl"
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
          >
            {t.services.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ border: '1px dashed var(--border)', background: 'var(--border)' }}
        >
          {t.services.items.map((item, i) => (
            <div
              key={i}
              data-card
              className="group p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--surface)' }}
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 1px var(--accent)',
                }}
              />

              <div
                className="text-3xl mb-6"
                style={{ color: 'var(--accent)' }}
              >
                {icons[i]}
              </div>

              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-ibm)' }}
              >
                {item.desc}
              </p>

              {/* Index */}
              <span
                className="absolute top-6 right-6 text-xs"
                style={{ color: 'var(--border)', fontFamily: 'var(--font-space)' }}
              >
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
