'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function HowItWorks() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const steps = sectionRef.current?.querySelectorAll<HTMLElement>('[data-step]')
    if (!steps) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step, i) => {
              step.style.transition = `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`
              step.style.opacity = '1'
              step.style.transform = 'translateY(0)'
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    steps.forEach((step) => {
      step.style.opacity = '0'
      step.style.transform = 'translateY(30px)'
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
          >
            {t.how.label}
          </p>
          <h2
            className="text-6xl md:text-8xl"
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
          >
            {t.how.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {t.how.steps.map((step, i) => (
            <div
              key={i}
              data-step
              className="relative p-8 md:p-12"
              style={{
                borderLeft: i > 0 ? '1px dashed var(--border)' : 'none',
              }}
            >
              {/* Connector line on mobile */}
              {i < t.how.steps.length - 1 && (
                <div
                  className="absolute bottom-0 left-8 right-8 h-px md:hidden"
                  style={{ background: 'var(--border)' }}
                />
              )}

              <div
                className="text-7xl md:text-8xl mb-6 block leading-none"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  color: 'var(--accent)',
                  opacity: 0.2,
                }}
              >
                {step.num}
              </div>

              <p
                className="text-lg md:text-xl leading-snug"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-ibm)' }}
              >
                {step.text}
              </p>

              {/* Arrow (desktop) */}
              {i < t.how.steps.length - 1 && (
                <span
                  className="hidden md:block absolute top-1/2 -right-3 z-10 text-xl -translate-y-1/2"
                  style={{ color: 'var(--accent)' }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
