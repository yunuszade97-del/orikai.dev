'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function Projects() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const numRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('[data-card]')
    if (!cards) return

    // ── Card entrance (slide-up) ─────────────────────────────────
    if (!reducedMotion) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cards.forEach((card, i) => {
                card.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              })
              cardObserver.disconnect()
            }
          })
        },
        { threshold: 0.1 }
      )
      if (sectionRef.current) cardObserver.observe(sectionRef.current)
      cards.forEach((card) => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(40px)'
      })
    }

    // ── Number light-up: individual scroll + cursor hover ────────
    const numObservers: IntersectionObserver[] = []
    const cleanups: (() => void)[] = []

    cards.forEach((card, i) => {
      const numEl = numRefs.current[i]
      if (!numEl) return

      numEl.style.transition = 'opacity 0.4s ease, text-shadow 0.4s ease'
      numEl.style.opacity = '0.3'
      numEl.style.textShadow = 'none'

      const handleEnter = () => {
        if (numEl.dataset.lit === 'true') return
        numEl.style.opacity = '0.75'
        numEl.style.textShadow = '0 0 16px rgba(200,255,0,0.35)'
      }
      const handleLeave = () => {
        if (numEl.dataset.lit === 'true') return
        numEl.style.opacity = '0.3'
        numEl.style.textShadow = 'none'
      }
      card.addEventListener('mouseenter', handleEnter)
      card.addEventListener('mouseleave', handleLeave)
      cleanups.push(() => {
        card.removeEventListener('mouseenter', handleEnter)
        card.removeEventListener('mouseleave', handleLeave)
      })

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              numEl.dataset.lit = 'true'
              numEl.style.transition = 'opacity 1.8s ease, text-shadow 1.8s ease'
              numEl.style.opacity = '1'
              numEl.style.textShadow = '0 0 28px rgba(200,255,0,0.65)'
              card.removeEventListener('mouseenter', handleEnter)
              card.removeEventListener('mouseleave', handleLeave)
              obs.disconnect()
            }
          })
        },
        { threshold: 0.55 }
      )
      obs.observe(card)
      numObservers.push(obs)
    })

    return () => {
      numObservers.forEach((obs) => obs.disconnect())
      cleanups.forEach((fn) => fn())
    }
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
            <a
              key={i}
              data-card
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-8 border border-dashed transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg)',
                textDecoration: 'none',
              }}
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 24px rgba(200,255,0,0.06), inset 0 0 0 1px var(--accent)' }}
              />

              {/* Number */}
              <span
                ref={(el) => { numRefs.current[i] = el }}
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
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-ibm)' }}
              >
                {project.desc}
              </p>

              {/* Tags — accent border */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border border-dashed uppercase tracking-wider"
                    style={{
                      borderColor: 'var(--accent)',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-space)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
