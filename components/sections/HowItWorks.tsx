'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function HowItWorks() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const numRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const steps = sectionRef.current?.querySelectorAll<HTMLElement>('[data-step]')
    if (!steps) return

    // ── Step entrance (slide-up) ─────────────────────────────────
    if (!reducedMotion) {
      const stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              steps.forEach((step, i) => {
                step.style.transition = `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`
                step.style.opacity = '1'
                step.style.transform = 'translateY(0)'
              })
              stepObserver.disconnect()
            }
          })
        },
        { threshold: 0.2 }
      )
      if (sectionRef.current) stepObserver.observe(sectionRef.current)
      steps.forEach((step) => {
        step.style.opacity = '0'
        step.style.transform = 'translateY(30px)'
      })
    }

    // ── Number light-up: individual scroll + cursor hover ────────
    const numObservers: IntersectionObserver[] = []
    const cleanups: (() => void)[] = []

    steps.forEach((step, i) => {
      const numEl = numRefs.current[i]
      if (!numEl) return

      numEl.style.transition = 'opacity 0.4s ease, text-shadow 0.4s ease'
      numEl.style.opacity = '0.2'
      numEl.style.textShadow = 'none'

      const handleEnter = () => {
        if (numEl.dataset.lit === 'true') return
        numEl.style.opacity = '0.75'
        numEl.style.textShadow = '0 0 16px rgba(200,255,0,0.35)'
      }
      const handleLeave = () => {
        if (numEl.dataset.lit === 'true') return
        numEl.style.opacity = '0.2'
        numEl.style.textShadow = 'none'
      }
      step.addEventListener('mouseenter', handleEnter)
      step.addEventListener('mouseleave', handleLeave)
      cleanups.push(() => {
        step.removeEventListener('mouseenter', handleEnter)
        step.removeEventListener('mouseleave', handleLeave)
      })

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              numEl.dataset.lit = 'true'
              numEl.style.transition = 'opacity 1.8s ease, text-shadow 1.8s ease'
              numEl.style.opacity = '1'
              numEl.style.textShadow = '0 0 28px rgba(200,255,0,0.65)'
              step.removeEventListener('mouseenter', handleEnter)
              step.removeEventListener('mouseleave', handleLeave)
              obs.disconnect()
            }
          })
        },
        { threshold: 0.55 }
      )
      obs.observe(step)
      numObservers.push(obs)
    })

    return () => {
      numObservers.forEach((obs) => obs.disconnect())
      cleanups.forEach((fn) => fn())
    }
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
                ref={(el) => { numRefs.current[i] = el }}
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
