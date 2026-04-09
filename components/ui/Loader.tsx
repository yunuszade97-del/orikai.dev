'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(false)
  const [chars, setChars] = useState<string[]>([])
  const letters = ['O', 'R', 'I', 'K']

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('orik_loaded')) return

    setVisible(true)
    document.body.style.overflow = 'hidden'

    let i = 0
    const interval = setInterval(() => {
      setChars((prev) => [...prev, letters[i]])
      i++
      if (i >= letters.length) clearInterval(interval)
    }, 150)

    const timer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
      sessionStorage.setItem('orik_loaded', '1')
    }, 1400)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="text-[var(--accent)] tracking-[0.5em] text-6xl md:text-8xl"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        {chars.join('')}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  )
}
