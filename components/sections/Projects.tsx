'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function Projects() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('[data-card]')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`
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
    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px)'
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
          >
            {t.projects.label}
          </p>
          <h2
            className="text-6xl md:text-8xl"
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
          >
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              data-card
              className="group relative flex flex-col p-8 border border-dashed transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg)',
              }}
            >
              {/* Accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 24px rgba(200,255,0,0.06), inset 0 0 0 1px var(--accent)' }}
              />

              {/* Number */}
              <span
                className="text-5xl mb-6 block"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  color: 'var(--accent)',
                  opacity: 0.3,
                }}
              >
                0{i + 1}
              </span>

              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border border-dashed uppercase tracking-wider"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-space)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
