'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-40 relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Halftone bg */}
      <div
        className="halftone absolute inset-0 pointer-events-none"
        style={{ opacity: 0.08 }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--border)' }}
      />

      <div
        data-reveal
        className="relative max-w-3xl mx-auto px-6 md:px-12 text-center"
      >
        <p
          className="text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
        >
          {t.contact.label}
        </p>

        <h2
          className="text-7xl md:text-9xl mb-6"
          style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
        >
          {t.contact.title}
        </h2>

        <p
          className="text-base md:text-lg mb-10"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-ibm)' }}
        >
          {t.contact.text}
        </p>

        <Button href="https://t.me/orhan_yunuszade" variant="primary" className="text-base px-10 py-4">
          {t.contact.cta} →
        </Button>
      </div>
    </section>
  )
}
