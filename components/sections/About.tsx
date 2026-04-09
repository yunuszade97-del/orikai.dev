'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function About() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = sectionRef.current?.querySelector<HTMLElement>('[data-reveal]')
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative"
      style={{ background: 'var(--surface)' }}
    >
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
            >
              {t.about.label}
            </p>
            <h2
              className="text-6xl md:text-8xl"
              style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
            >
              {t.about.title}
            </h2>
          </div>

          <div data-reveal>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-ibm)' }}
            >
              {t.about.text}
            </p>

            {/* Decorative grid */}
            <div className="mt-8 grid grid-cols-3 gap-px"
              style={{ background: 'var(--border)' }}
            >
              {['AI', 'WEB', 'BOT'].map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-3 text-center"
                  style={{ background: 'var(--bg)' }}
                >
                  <span
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-bebas)', color: 'var(--accent)' }}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
