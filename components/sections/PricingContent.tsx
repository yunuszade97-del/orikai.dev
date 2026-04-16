'use client'

import Button from '@/components/ui/Button'
import type { PricingContent as PricingContentT } from '@/lib/i18n/pricing'

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-[10px] tracking-[0.2em]"
        style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
      >
        {num}
      </span>
      <span
        className="text-xs uppercase tracking-[0.2em] font-bold"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-space)' }}
      >
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

export default function PricingContent({
  content: p,
  homeHref,
}: {
  content: PricingContentT
  homeHref: string
}) {
  void homeHref
  return (
    <div
      className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20"
      style={{ fontFamily: 'var(--font-ibm)' }}
    >
      {/* HERO */}
      <div
        className="mb-14 md:mb-16 pb-10 md:pb-12"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <p
          className="text-[10px] uppercase tracking-[0.25em] mb-4"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-space)' }}
        >
          {p.hero.label}
        </p>
        <h1
          className="text-5xl md:text-7xl leading-none mb-4"
          style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
        >
          {p.hero.titleLine1}
          <br />
          <span style={{ color: 'var(--accent)' }}>{p.hero.titleLine2}</span>
        </h1>
        <div
          className="flex flex-wrap items-center text-xs gap-x-2"
          style={{ color: 'var(--muted)' }}
        >
          {p.hero.subs.map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              <span>{s}</span>
              {i < p.hero.subs.length - 1 && (
                <span style={{ color: 'var(--border)' }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* TABLE SECTIONS */}
      {p.sections.map((section) => (
        <div key={section.num} className="mb-12">
          <SectionLabel num={section.num} title={section.title} />
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th
                    className="text-left py-2 px-3 text-[10px] uppercase tracking-[0.1em] font-normal"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.tableHeaders.type}
                  </th>
                  <th
                    className="text-left py-2 px-3 text-[10px] uppercase tracking-[0.1em] font-normal"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.tableHeaders.priceUsd}
                  </th>
                  <th
                    className="text-left py-2 px-3 text-[10px] uppercase tracking-[0.1em] font-normal"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.tableHeaders.priceRub}
                  </th>
                  <th
                    className="text-left py-2 px-3 text-[10px] uppercase tracking-[0.1em] font-normal"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.tableHeaders.timeline}
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="transition-colors hover:bg-[var(--surface)]"
                    style={{
                      borderBottom:
                        i === section.rows.length - 1 ? 'none' : '1px solid #161616',
                    }}
                  >
                    <td
                      className="py-2.5 px-3 align-top"
                      style={{ color: 'var(--text)' }}
                    >
                      {row.type}
                    </td>
                    <td
                      className="py-2.5 px-3 font-bold whitespace-nowrap"
                      style={{ color: 'var(--accent)' }}
                    >
                      {row.usd}
                    </td>
                    <td
                      className="py-2.5 px-3 font-bold whitespace-nowrap"
                      style={{ color: 'var(--text)' }}
                    >
                      {row.rub}
                    </td>
                    <td
                      className="py-2.5 px-3 text-[11px] whitespace-nowrap"
                      style={{ color: 'var(--muted)' }}
                    >
                      {row.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.note && (
            <p
              className="text-[11px] pt-2 mt-1"
              style={{
                color: 'var(--muted)',
                borderTop: '1px solid #161616',
              }}
            >
              {section.note}
            </p>
          )}
        </div>
      ))}

      {/* PACKAGES */}
      <div className="mb-12">
        <SectionLabel num={p.packagesTitle.num} title={p.packagesTitle.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {p.packages.map((pkg, i) => (
            <div
              key={i}
              className="relative p-5 transition-colors hover:border-[var(--muted)]"
              style={{
                border: pkg.featured
                  ? '1px solid var(--accent)'
                  : '1px solid var(--border)',
              }}
            >
              {pkg.badge && (
                <div
                  className="absolute top-0 right-0 text-[9px] font-bold tracking-[0.1em] px-2 py-[3px] uppercase"
                  style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                >
                  {pkg.badge}
                </div>
              )}
              <p
                className="text-[10px] tracking-[0.15em] uppercase font-bold mb-1.5"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-space)' }}
              >
                {pkg.name}
              </p>
              <p
                className="text-[11px] italic mb-3.5"
                style={{ color: 'var(--text)' }}
              >
                {pkg.tagline}
              </p>
              <ul className="mb-4 space-y-0.5">
                {pkg.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[11px] pl-3 relative"
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className="absolute left-0 text-[10px]"
                      style={{ color: 'var(--border)' }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-base font-bold mb-1"
                style={{ color: 'var(--accent)' }}
              >
                {pkg.price}
              </p>
              <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                {pkg.meta}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RETAINER */}
      <div className="mb-12">
        <SectionLabel num={p.retainerTitle.num} title={p.retainerTitle.title} />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {p.retainer.map((r, i) => (
            <div
              key={i}
              className="p-5"
              style={{ background: r.highlight ? '#0e110a' : 'var(--bg)' }}
            >
              <p
                className="text-[10px] tracking-[0.15em] uppercase mb-1"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
              >
                {r.tier}
              </p>
              <p
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {r.price}{' '}
                <span
                  className="text-[11px] font-light"
                  style={{ color: 'var(--muted)' }}
                >
                  {r.per}
                </span>
              </p>
              <ul>
                {r.features.map((f, j) => (
                  <li
                    key={j}
                    className="text-[11px] py-1"
                    style={{
                      color: 'var(--muted)',
                      borderBottom:
                        j === r.features.length - 1 ? 'none' : '1px solid #161616',
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p
          className="text-[11px] pt-2 mt-1"
          style={{
            color: 'var(--muted)',
            borderTop: '1px solid #161616',
          }}
        >
          {p.retainerNote}
        </p>
      </div>

      {/* TERMS */}
      <div className="mb-12">
        <SectionLabel num={p.termsTitle.num} title={p.termsTitle.title} />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {p.terms.map((term, i) => (
            <div key={i} className="p-4" style={{ background: 'var(--bg)' }}>
              <p
                className="text-[9px] tracking-[0.15em] uppercase mb-1.5"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-space)' }}
              >
                {term.label}
              </p>
              <p
                className="text-xs font-medium"
                style={{ color: 'var(--text)' }}
              >
                {term.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="mt-12 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        style={{ border: '1px solid var(--accent)' }}
      >
        <div>
          <h3
            className="text-2xl mb-1.5"
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--text)' }}
          >
            {p.cta.title}
          </h3>
          <p className="text-[11px]" style={{ color: 'var(--muted)' }}>
            {p.cta.text}
          </p>
        </div>
        <Button href="https://t.me/orhan_yunuszade" variant="primary">
          {p.cta.button}
        </Button>
      </div>
    </div>
  )
}
