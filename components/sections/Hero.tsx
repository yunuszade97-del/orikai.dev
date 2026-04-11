'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import { useTranslation } from '@/lib/i18n/useTranslation'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(200,255,0,0.04) 0%, transparent 70%)',
      }}
    />
  ),
})

export default function Hero() {
  const { t } = useTranslation()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      return
    }

    const children = el.querySelectorAll<HTMLElement>('[data-reveal]')
    children.forEach((child, i) => {
      child.style.opacity = '0'
      child.style.transform = 'translateY(24px)'
      child.style.transition = `opacity 0.7s ease ${i * 0.15 + 0.3}s, transform 0.7s ease ${i * 0.15 + 0.3}s`
    })

    requestAnimationFrame(() => {
      children.forEach((child) => {
        child.style.opacity = '1'
        child.style.transform = 'translateY(0)'
      })
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Halftone decoration */}
      <div
        className="halftone absolute bottom-0 right-0 w-96 h-96 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.3) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16"
      >
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
        >
          {t.hero.label}
        </p>

        <h1
          data-reveal
          className="text-7xl md:text-9xl lg:text-[10rem] leading-none mb-6"
          style={{
            fontFamily: 'var(--font-bebas)',
            color: 'var(--text)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.hero.title}
          <span
            className="block h-1 w-24 mt-3"
            style={{ background: 'var(--accent)' }}
          />
        </h1>

        <p
          data-reveal
          className="text-base md:text-lg max-w-md mb-10 leading-relaxed"
          style={{
            color: 'var(--muted)',
            fontFamily: 'var(--font-ibm)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.hero.subtitle}
        </p>

        <div data-reveal className="flex flex-wrap gap-4">
          <Button href="https://t.me/orhan_yunuszade" variant="primary">
            {t.hero.cta_primary} →
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t.hero.cta_secondary} ↓
          </Button>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'var(--border)' }}
      />
    </section>
  )
}
