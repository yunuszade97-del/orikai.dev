'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n/useTranslation'

export default function Navbar() {
  const { t, lang } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const otherLang = lang === 'ru' ? 'en' : 'ru'
  const otherHref = lang === 'ru' ? '/en' : '/'

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px dashed var(--border)',
      }}
    >
      {/* Logo */}
      <Link
        href={lang === 'ru' ? '/' : '/en'}
        className="font-display text-2xl text-[var(--accent)] tracking-widest"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        ORIK
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Lang switcher + hamburger */}
      <div className="flex items-center gap-4">
        <Link
          href={otherHref}
          className="text-xs uppercase tracking-widest px-3 py-1 border border-dashed border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          style={{ fontFamily: 'var(--font-space)' }}
        >
          {otherLang}
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[var(--text)] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[var(--text)] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[var(--text)] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 right-0 md:hidden flex flex-col gap-4 p-6"
          style={{ background: 'var(--surface)', borderBottom: '1px dashed var(--border)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
