import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isEn = lang === 'en'
  return {
    title: isEn ? 'ORIKAI.DEV — Pricing' : 'ORIKAI.DEV — Прайс',
    description: isEn
      ? 'Websites, Telegram bots, automation and AI integrations — services and pricing 2026.'
      : 'Сайты, Telegram-боты, автоматизация и AI-интеграции — услуги и цены 2026.',
  }
}

const css = `
  :root {
    --bg: #0a0a0a;
    --bg2: #111111;
    --border: #222222;
    --accent: #c8f53c;
    --accent2: #3cffa0;
    --muted: #555;
    --text: #e8e8e8;
    --text2: #aaa;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Space Grotesk', sans-serif;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .pr-body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--mono);
    min-height: 100vh;
    font-size: 13px;
    line-height: 1.6;
  }
  .pr-header {
    position: sticky; top: 0; z-index: 100;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 32px;
  }
  .pr-logo {
    font-family: var(--mono); font-weight: 700; font-size: 15px;
    letter-spacing: 0.15em; color: var(--accent); text-decoration: none;
  }
  .pr-logo span { color: var(--text2); font-weight: 300; }
  .pr-header-right { display: flex; align-items: center; gap: 24px; }
  .pr-tag-line { font-size: 10px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .pr-lang-toggle { display: flex; border: 1px solid var(--border); overflow: hidden; border-radius: 2px; }
  .pr-lang-btn {
    padding: 6px 14px; font-family: var(--mono); font-size: 11px; font-weight: 700;
    letter-spacing: 0.1em; text-decoration: none; border: none;
    background: transparent; color: var(--muted); transition: all 0.2s;
  }
  .pr-lang-btn.active { background: var(--accent); color: #000; }
  .pr-main { max-width: 900px; margin: 0 auto; padding: 60px 32px 80px; }
  .pr-hero { margin-bottom: 64px; padding-bottom: 48px; border-bottom: 1px solid var(--border); }
  .pr-hero-label { font-size: 10px; letter-spacing: 0.25em; color: var(--accent); text-transform: uppercase; margin-bottom: 16px; }
  .pr-hero h1 { font-size: clamp(28px,5vw,48px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 16px; font-family: var(--mono); }
  .pr-hero h1 em { font-style: normal; color: var(--accent); }
  .pr-hero-sub { color: var(--text2); font-size: 12px; display: flex; flex-wrap: wrap; gap: 0; }
  .pr-hero-sub span { margin-right: 6px; }
  .pr-hero-sub .dot { color: var(--muted); }
  .pr-section { margin-bottom: 56px; }
  .pr-section-label { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .pr-section-num { font-size: 10px; color: var(--muted); letter-spacing: 0.1em; }
  .pr-section-title { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); font-weight: 700; }
  .pr-section-line { flex: 1; height: 1px; background: var(--border); }
  .pr-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 12px; }
  .pr-table thead tr { border-bottom: 1px solid var(--border); }
  .pr-table th { text-align: left; padding: 8px 12px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); font-weight: 400; }
  .pr-table td { padding: 10px 12px; border-bottom: 1px solid #161616; color: var(--text); vertical-align: top; }
  .pr-table tr:last-child td { border-bottom: none; }
  .pr-table tr:hover td { background: #131313; }
  .price-cell { font-weight: 700; color: var(--text); white-space: nowrap; }
  .price-cell .usd { color: var(--accent); }
  .price-cell .rub { color: var(--accent2); }
  .timeline-cell { color: var(--text2); white-space: nowrap; font-size: 11px; }
  .pr-note { font-size: 11px; color: var(--muted); padding: 8px 0; border-top: 1px solid #161616; }
  .pr-note strong { color: var(--text2); }
  .pr-packages-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap: 12px; margin-bottom: 12px; }
  .pr-package-card { border: 1px solid var(--border); padding: 20px; position: relative; transition: border-color 0.2s; }
  .pr-package-card:hover { border-color: #333; }
  .pr-package-card.featured { border-color: var(--accent); }
  .pr-package-badge { position: absolute; top: -1px; right: -1px; background: var(--accent); color: #000; font-size: 9px; font-weight: 700; letter-spacing: 0.1em; padding: 3px 8px; text-transform: uppercase; }
  .pkg-name { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; font-weight: 700; }
  .pkg-tagline { font-size: 11px; color: var(--text2); margin-bottom: 14px; font-style: italic; }
  .pkg-items { list-style: none; margin-bottom: 16px; }
  .pkg-items li { font-size: 11px; color: var(--text2); padding: 2px 0 2px 12px; position: relative; }
  .pkg-items li::before { content: '→'; position: absolute; left: 0; color: var(--muted); font-size: 10px; }
  .pkg-price { font-weight: 700; font-size: 16px; color: var(--text); margin-bottom: 4px; }
  .pkg-price .acc { color: var(--accent); }
  .pkg-meta { font-size: 10px; color: var(--muted); }
  .pr-retainer-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); margin-bottom: 12px; border: 1px solid var(--border); }
  .pr-retainer-col { background: var(--bg); padding: 20px; }
  .pr-retainer-col.highlight { background: #0e110a; }
  .ret-tier { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 4px; }
  .ret-price { font-size: 20px; font-weight: 700; color: var(--accent); margin-bottom: 12px; }
  .ret-price span { font-size: 11px; font-weight: 300; color: var(--muted); }
  .ret-features { list-style: none; }
  .ret-features li { font-size: 11px; color: var(--text2); padding: 3px 0; border-bottom: 1px solid #161616; }
  .ret-features li:last-child { border-bottom: none; }
  .pr-terms-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-bottom: 12px; }
  .pr-term-item { background: var(--bg); padding: 16px; }
  .pr-term-label { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .pr-term-value { font-size: 12px; color: var(--text); font-weight: 500; }
  .pr-cta-block { border: 1px solid var(--accent); padding: 32px; display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 48px; }
  .pr-cta-text h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
  .pr-cta-text p { font-size: 11px; color: var(--text2); }
  .pr-cta-btn { display: inline-block; background: var(--accent); color: #000; font-family: var(--mono); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; padding: 14px 28px; text-decoration: none; white-space: nowrap; transition: opacity 0.2s; }
  .pr-cta-btn:hover { opacity: 0.85; }
  .pr-footer { border-top: 1px solid var(--border); padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 10px; letter-spacing: 0.08em; }
  @media (max-width: 640px) {
    .pr-main { padding: 40px 20px 60px; }
    .pr-header { padding: 14px 20px; }
    .pr-tag-line { display: none; }
    .pr-retainer-grid { grid-template-columns: 1fr; }
    .pr-packages-grid { grid-template-columns: 1fr; }
    .pr-cta-block { flex-direction: column; align-items: flex-start; }
  }
`

type T = {
  tagline: string
  heroLabel: string
  heroTitle: React.ReactNode
  heroSub: [string, string, string]
  s01: string
  s02: string
  s03: string
  s04: string
  s05: string
  s06: string
  s07: string
  web: { type: string; usd: string; rub: string; days: string }[]
  webNote: string
  bots: { type: string; usd: string; rub: string; days: string }[]
  botsNote: string
  auto: { type: string; usd: string; rub: string; days: string }[]
  ai: { type: string; usd: string; rub: string; days: string }[]
  colType: string
  colUsd: string
  colRub: string
  colDays: string
  pkgs: { name: string; tag: string; items: string[]; price: string; meta: string; featured?: boolean; badge?: string }[]
  retainerMonth: string
  retainerNote: string
  terms: { label: string; value: string }[]
  ctaTitle: string
  ctaSub: string
}

function getT(lang: string): T {
  const isEn = lang === 'en'

  const web = isEn
    ? [
        { type: 'Landing page (1 page)', usd: '$400–600', rub: '30–45k ₽', days: '3–5 days' },
        { type: 'Business card site (3–5 pages)', usd: '$650–1 100', rub: '50–80k ₽', days: '5–8 days' },
        { type: 'Blog / course website', usd: '$950–1 500', rub: '70–110k ₽', days: '7–10 days' },
        { type: 'Restaurant / venue site', usd: '$800–1 350', rub: '60–100k ₽', days: '6–9 days' },
        { type: 'Corporate website', usd: '$1 350–2 400', rub: '100–180k ₽', days: '10–14 days' },
      ]
    : [
        { type: 'Лендинг (1 страница)', usd: '$400–600', rub: '30–45k ₽', days: '3–5 дней' },
        { type: 'Сайт-визитка (3–5 стр.)', usd: '$650–1 100', rub: '50–80k ₽', days: '5–8 дней' },
        { type: 'Сайт блогера / курс', usd: '$950–1 500', rub: '70–110k ₽', days: '7–10 дней' },
        { type: 'Сайт ресторана / заведения', usd: '$800–1 350', rub: '60–100k ₽', days: '6–9 дней' },
        { type: 'Корпоративный сайт', usd: '$1 350–2 400', rub: '100–180k ₽', days: '10–14 дней' },
      ]

  const bots = isEn
    ? [
        { type: 'Basic bot (menu, forms, notifications)', usd: '$450–750', rub: '35–55k ₽', days: '3–5 days' },
        { type: 'AI-powered bot (GPT / Claude)', usd: '$950–1 500', rub: '70–110k ₽', days: '7–12 days' },
        { type: 'HR / screening / funnel + AI', usd: '$1 200–2 000', rub: '90–150k ₽', days: '10–14 days' },
        { type: 'Consumer product bot (subscriptions, b2c)', usd: '$1 350–2 400', rub: '100–180k ₽', days: '10–18 days' },
      ]
    : [
        { type: 'Базовый (меню, форма, уведомления)', usd: '$450–750', rub: '35–55k ₽', days: '3–5 дней' },
        { type: 'С AI-интеграцией (GPT / Claude)', usd: '$950–1 500', rub: '70–110k ₽', days: '7–12 дней' },
        { type: 'HR / скрининг / воронка + AI', usd: '$1 200–2 000', rub: '90–150k ₽', days: '10–14 дней' },
        { type: 'Масс-продукт (подписки, b2c, контент)', usd: '$1 350–2 400', rub: '100–180k ₽', days: '10–18 дней' },
      ]

  const auto = isEn
    ? [
        { type: 'Simple workflow (2–3 services)', usd: '$240–440', rub: '18–32k ₽', days: '1–3 days' },
        { type: 'Complex automation (n8n / Make)', usd: '$680–1 200', rub: '50–90k ₽', days: '5–9 days' },
        { type: 'Full CRM integration', usd: '$950–1 900', rub: '70–140k ₽', days: '7–14 days' },
      ]
    : [
        { type: 'Простая связка (2–3 сервиса)', usd: '$240–440', rub: '18–32k ₽', days: '1–3 дня' },
        { type: 'Комплексная автоматизация (n8n / Make)', usd: '$680–1 200', rub: '50–90k ₽', days: '5–9 дней' },
        { type: 'CRM-интеграция под ключ', usd: '$950–1 900', rub: '70–140k ₽', days: '7–14 дней' },
      ]

  const ai = isEn
    ? [
        { type: 'LLM integration into existing product', usd: '$600–1 150', rub: '45–85k ₽', days: '3–7 days' },
        { type: 'Single AI agent', usd: '$1 100–1 900', rub: '80–140k ₽', days: '7–12 days' },
        { type: 'Multi-agent system', usd: '$2 000–4 000', rub: '150–300k ₽', days: '14–30 days' },
        { type: 'RAG / knowledge base + search', usd: '$1 000–1 750', rub: '75–130k ₽', days: '5–10 days' },
      ]
    : [
        { type: 'Подключение LLM к продукту', usd: '$600–1 150', rub: '45–85k ₽', days: '3–7 дней' },
        { type: 'AI-агент (одиночный)', usd: '$1 100–1 900', rub: '80–140k ₽', days: '7–12 дней' },
        { type: 'Мультиагентная система', usd: '$2 000–4 000', rub: '150–300k ₽', days: '14–30 дней' },
        { type: 'RAG / база знаний + поиск', usd: '$1 000–1 750', rub: '75–130k ₽', days: '5–10 дней' },
      ]

  const pkgs = isEn
    ? [
        { name: 'STARTER', tag: '"Just go online"', items: ['Landing page (1 page)', 'Telegram form / CTA', 'Analytics setup'], price: '$500', meta: '4–5 days' },
        { name: 'BUSINESS', tag: '"Site + Bot"', items: ['Business card site (3–5 pages)', 'Basic Telegram bot', 'Lead automation'], price: '$1 350', meta: '10 days · save ~20%' },
        { name: 'AI BUSINESS', tag: '"Smart office"', items: ['Website', 'AI Telegram bot (GPT/Claude)', 'CRM integration', 'Onboarding guide'], price: '$2 300', meta: '14 days · save ~20%', featured: true, badge: 'POPULAR' },
        { name: 'MVP', tag: '"Ship your product"', items: ['Web app (up to 5 screens)', 'Deployment (Vercel/Railway)', '2 weeks post-launch support'], price: '$3 100', meta: '14 days' },
      ]
    : [
        { name: 'STARTER', tag: '"Просто онлайн"', items: ['Лендинг (1 страница)', 'Telegram-форма / кнопка', 'Подключение аналитики'], price: '$500', meta: '4–5 дней · ₽38 000' },
        { name: 'BUSINESS', tag: '"Сайт + Бот"', items: ['Сайт-визитка (3–5 стр.)', 'Базовый Telegram-бот', 'Автоматизация лидов'], price: '$1 350', meta: '10 дней · ₽100 000 · экономия ~20%' },
        { name: 'AI BUSINESS', tag: '"Умный офис"', items: ['Сайт-визитка', 'Telegram-бот с AI (GPT/Claude)', 'CRM-интеграция', 'Онбординг-инструкция'], price: '$2 300', meta: '14 дней · ₽170 000 · экономия ~20%', featured: true, badge: 'ХИТ' },
        { name: 'MVP', tag: '"Запустить продукт"', items: ['Веб-приложение (до 5 экранов)', 'Деплой (Vercel/Railway)', '2 недели пост-лонч поддержки'], price: '$3 100', meta: '14 дней · ₽230 000' },
      ]

  const terms = isEn
    ? [
        { label: 'Payment', value: '50% upfront · 50% on delivery' },
        { label: 'Revisions', value: '2 rounds free · $35/hr after' },
        { label: 'Rush delivery', value: 'Available · +30% to price' },
        { label: 'Methods', value: 'USDT · Wise · Revolut · Transfer' },
        { label: 'Contract', value: 'Available on request' },
        { label: 'Stack', value: 'Next.js · React · n8n · Claude API' },
      ]
    : [
        { label: 'Оплата', value: '50% до старта · 50% при сдаче' },
        { label: 'Правки', value: '2 раунда · далее ₽2 500/час' },
        { label: 'Срочный проект', value: 'Возможно · +30% к цене' },
        { label: 'Способы оплаты', value: 'USDT · Wise · Revolut · Transfer' },
        { label: 'Договор', value: 'По запросу' },
        { label: 'Стек', value: 'Next.js · React · n8n · Claude API' },
      ]

  return {
    tagline: isEn ? 'AI Developer · Services & Pricing' : 'AI-разработчик · Услуги и цены',
    heroLabel: isEn ? 'ORIKAI.DEV — PRICING 2026' : 'ORIKAI.DEV — ПРАЙС 2026',
    heroTitle: isEn ? <><em>Websites.</em> Bots.<br /><em>Automation. AI.</em></> : <><em>Сайты.</em> Боты.<br /><em>Автоматизация. AI.</em></>,
    heroSub: isEn
      ? ['Delivered in days, not months', 'AI speeds up development 3–5×', '50% upfront · 2 revisions included']
      : ['Сдаю за дни, не месяцы', 'AI ускоряет разработку в 3–5 раз', '50% предоплата · 2 раунда правок включены'],
    s01: isEn ? 'WEBSITES & LANDINGS' : 'САЙТЫ И ЛЕНДИНГИ',
    s02: isEn ? 'TELEGRAM / WHATSAPP BOTS' : 'TELEGRAM / WHATSAPP БОТЫ',
    s03: isEn ? 'AUTOMATION' : 'АВТОМАТИЗАЦИЯ',
    s04: isEn ? 'AI INTEGRATIONS' : 'AI-ИНТЕГРАЦИИ',
    s05: isEn ? 'PACKAGES' : 'ГОТОВЫЕ ПАКЕТЫ',
    s06: isEn ? 'MONTHLY RETAINER' : 'РЕТЕЙНЕР / ПОДДЕРЖКА',
    s07: isEn ? 'TERMS' : 'УСЛОВИЯ РАБОТЫ',
    web,
    webNote: isEn
      ? '<strong>Included:</strong> responsive design, basic SEO, Telegram CTA, deployment &nbsp;·&nbsp; <strong>Add-ons:</strong> multilingual +20%, animations/3D +30%, CMS +$200'
      : '<strong>Включено:</strong> адаптив, SEO-база, Telegram CTA, деплой &nbsp;·&nbsp; <strong>Опции:</strong> мультиязык +20%, анимации/3D +30%, CMS +15 000 ₽',
    bots,
    botsNote: isEn
      ? '<strong>Included:</strong> deployment, QA, documentation &nbsp;·&nbsp; <strong>Add-ons:</strong> Stripe payments +$150, analytics +$120, WhatsApp mirror +20%'
      : '<strong>Включено:</strong> деплой, тест, документация &nbsp;·&nbsp; <strong>Опции:</strong> оплата (ЮКасса/Stripe) +15k ₽, аналитика +10k ₽, WhatsApp +20%',
    auto,
    ai,
    colType: isEn ? 'Type' : 'Тип',
    colUsd: isEn ? 'Price ($)' : 'Цена ($)',
    colRub: isEn ? 'Price (₽)' : 'Цена (₽)',
    colDays: isEn ? 'Timeline' : 'Срок',
    pkgs,
    retainerMonth: isEn ? '/month' : '/мес',
    retainerNote: isEn
      ? '<strong>White-label / Subcontracting:</strong> $45–65/hr · $300–450/day · NDA available · No attribution required'
      : '<strong>Субподряд для агентств:</strong> $45–65/час · $300–450/день · NDA по запросу · White label',
    terms,
    ctaTitle: isEn ? 'Got a project?' : 'Есть задача?',
    ctaSub: isEn ? 'Send a message — I reply within an hour.' : 'Напишите в Telegram — отвечу в течение часа.',
  }
}

function PricingTable({ rows, colType, colUsd, colRub, colDays }: {
  rows: { type: string; usd: string; rub: string; days: string }[]
  colType: string; colUsd: string; colRub: string; colDays: string
}) {
  return (
    <table className="pr-table">
      <thead>
        <tr>
          <th>{colType}</th>
          <th>{colUsd}</th>
          <th>{colRub}</th>
          <th>{colDays}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.type}>
            <td>{r.type}</td>
            <td className="price-cell"><span className="usd">{r.usd}</span></td>
            <td className="price-cell"><span className="rub">{r.rub}</span></td>
            <td className="timeline-cell">{r.days}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEn = lang === 'en'
  const t = getT(lang)

  const ruHref = '/ru/pricing'
  const enHref = '/en/pricing'

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600&display=swap"
      />
      <div className="pr-body">
        {/* HEADER */}
        <header className="pr-header">
          <Link className="pr-logo" href={isEn ? '/en' : '/ru'}>
            ORIKAI<span>.DEV</span>
          </Link>
          <div className="pr-header-right">
            <span className="pr-tag-line">{t.tagline}</span>
            <div className="pr-lang-toggle">
              <Link href={ruHref} className={`pr-lang-btn${!isEn ? ' active' : ''}`}>RU</Link>
              <Link href={enHref} className={`pr-lang-btn${isEn ? ' active' : ''}`}>EN</Link>
            </div>
          </div>
        </header>

        <main className="pr-main">
          {/* HERO */}
          <div className="pr-hero">
            <p className="pr-hero-label">{t.heroLabel}</p>
            <h1>{t.heroTitle}</h1>
            <div className="pr-hero-sub">
              <span>{t.heroSub[0]}</span>
              <span className="dot">·</span>
              <span>{t.heroSub[1]}</span>
              <span className="dot">·</span>
              <span>{t.heroSub[2]}</span>
            </div>
          </div>

          {/* 01 WEBSITES */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">01</span>
              <span className="pr-section-title">{t.s01}</span>
              <div className="pr-section-line" />
            </div>
            <PricingTable rows={t.web} colType={t.colType} colUsd={t.colUsd} colRub={t.colRub} colDays={t.colDays} />
            <p className="pr-note" dangerouslySetInnerHTML={{ __html: t.webNote }} />
          </div>

          {/* 02 BOTS */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">02</span>
              <span className="pr-section-title">{t.s02}</span>
              <div className="pr-section-line" />
            </div>
            <PricingTable rows={t.bots} colType={t.colType} colUsd={t.colUsd} colRub={t.colRub} colDays={t.colDays} />
            <p className="pr-note" dangerouslySetInnerHTML={{ __html: t.botsNote }} />
          </div>

          {/* 03 AUTOMATION */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">03</span>
              <span className="pr-section-title">{t.s03}</span>
              <div className="pr-section-line" />
            </div>
            <PricingTable rows={t.auto} colType={t.colType} colUsd={t.colUsd} colRub={t.colRub} colDays={t.colDays} />
          </div>

          {/* 04 AI */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">04</span>
              <span className="pr-section-title">{t.s04}</span>
              <div className="pr-section-line" />
            </div>
            <PricingTable rows={t.ai} colType={t.colType} colUsd={t.colUsd} colRub={t.colRub} colDays={t.colDays} />
          </div>

          {/* 05 PACKAGES */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">05</span>
              <span className="pr-section-title">{t.s05}</span>
              <div className="pr-section-line" />
            </div>
            <div className="pr-packages-grid">
              {t.pkgs.map((pkg) => (
                <div key={pkg.name} className={`pr-package-card${pkg.featured ? ' featured' : ''}`}>
                  {pkg.badge && <div className="pr-package-badge">{pkg.badge}</div>}
                  <p className="pkg-name">{pkg.name}</p>
                  <p className="pkg-tagline">{pkg.tag}</p>
                  <ul className="pkg-items">
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="pkg-price"><span className="acc">{pkg.price}</span></p>
                  <p className="pkg-meta">{pkg.meta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 06 RETAINER */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">06</span>
              <span className="pr-section-title">{t.s06}</span>
              <div className="pr-section-line" />
            </div>
            <div className="pr-retainer-grid">
              <div className="pr-retainer-col">
                <p className="ret-tier">LIGHT</p>
                <p className="ret-price">$200 <span>{t.retainerMonth}</span></p>
                <ul className="ret-features">
                  <li>{isEn ? '4 hrs of work' : '4 ч работы'}</li>
                  <li>{isEn ? 'Monitoring' : 'Мониторинг'}</li>
                  <li>{isEn ? 'Small fixes' : 'Мелкие правки'}</li>
                </ul>
              </div>
              <div className="pr-retainer-col highlight">
                <p className="ret-tier">STANDARD</p>
                <p className="ret-price">$430 <span>{t.retainerMonth}</span></p>
                <ul className="ret-features">
                  <li>{isEn ? '10 hrs of work' : '10 ч работы'}</li>
                  <li>{isEn ? 'Priority response' : 'Приоритетный ответ'}</li>
                  <li>{isEn ? 'New features' : 'Новые фичи'}</li>
                </ul>
              </div>
              <div className="pr-retainer-col">
                <p className="ret-tier">PARTNER</p>
                <p className="ret-price">$800 <span>{t.retainerMonth}</span></p>
                <ul className="ret-features">
                  <li>{isEn ? '20 hrs of work' : '20 ч работы'}</li>
                  <li>{isEn ? 'Strategic tasks' : 'Стратегические задачи'}</li>
                  <li>{isEn ? 'Ongoing development' : 'Постоянная разработка'}</li>
                </ul>
              </div>
            </div>
            <p className="pr-note" dangerouslySetInnerHTML={{ __html: t.retainerNote }} />
          </div>

          {/* 07 TERMS */}
          <div className="pr-section">
            <div className="pr-section-label">
              <span className="pr-section-num">07</span>
              <span className="pr-section-title">{t.s07}</span>
              <div className="pr-section-line" />
            </div>
            <div className="pr-terms-grid">
              {t.terms.map((term) => (
                <div key={term.label} className="pr-term-item">
                  <p className="pr-term-label">{term.label}</p>
                  <p className="pr-term-value">{term.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pr-cta-block">
            <div className="pr-cta-text">
              <h3>{t.ctaTitle}</h3>
              <p>{t.ctaSub}</p>
            </div>
            <a className="pr-cta-btn" href="https://t.me/orhan_yunuszade">@orhan_yunuszade →</a>
          </div>
        </main>

        <footer className="pr-footer">
          <span>ORIKAI.DEV © 2026</span>
          <span>{isEn ? 'AI Developer · Websites · Bots · Automation' : 'AI-разработчик · Сайты · Боты · Автоматизация'}</span>
        </footer>
      </div>
    </>
  )
}
