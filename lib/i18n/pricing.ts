export type PricingRow = {
  type: string
  usd: string
  rub: string
  timeline: string
}

export type PricingSection = {
  num: string
  title: string
  rows: PricingRow[]
  note?: string
}

export type PackageCard = {
  name: string
  tagline: string
  items: string[]
  price: string
  meta: string
  featured?: boolean
  badge?: string
}

export type RetainerTier = {
  tier: string
  price: string
  per: string
  features: string[]
  highlight?: boolean
}

export type TermItem = {
  label: string
  value: string
}

export type PricingContent = {
  meta: {
    title: string
    description: string
  }
  header: {
    tagline: string
  }
  hero: {
    label: string
    titleLine1: string
    titleLine2: string
    subs: string[]
  }
  tableHeaders: {
    type: string
    priceUsd: string
    priceRub: string
    timeline: string
  }
  sections: PricingSection[]
  packagesTitle: { num: string; title: string }
  packages: PackageCard[]
  retainerTitle: { num: string; title: string }
  retainer: RetainerTier[]
  retainerNote: string
  termsTitle: { num: string; title: string }
  terms: TermItem[]
  cta: {
    title: string
    text: string
    button: string
  }
  footer: string
  back: string
}

export const pricingEn: PricingContent = {
  meta: {
    title: 'ORIKAI.DEV — Pricing',
    description:
      'Websites, Telegram bots, automation and AI integrations. Transparent pricing, delivery in days.',
  },
  header: { tagline: 'AI Developer · Services & Pricing' },
  hero: {
    label: 'ORIKAI.DEV — PRICING 2026',
    titleLine1: 'Websites. Bots.',
    titleLine2: 'Automation. AI.',
    subs: [
      'Delivered in days, not months',
      'AI speeds up development 3–5×',
      '50% upfront · 2 revisions included',
    ],
  },
  tableHeaders: {
    type: 'Type',
    priceUsd: 'Price ($)',
    priceRub: 'Price (₽)',
    timeline: 'Timeline',
  },
  sections: [
    {
      num: '01',
      title: 'WEBSITES & LANDINGS',
      rows: [
        { type: 'Landing page (1 page)', usd: '$400–600', rub: '30–45k ₽', timeline: '3–5 days' },
        { type: 'Business card site (3–5 pages)', usd: '$650–1 100', rub: '50–80k ₽', timeline: '5–8 days' },
        { type: 'Blog / course website', usd: '$950–1 500', rub: '70–110k ₽', timeline: '7–10 days' },
        { type: 'Restaurant / venue site', usd: '$800–1 350', rub: '60–100k ₽', timeline: '6–9 days' },
        { type: 'Corporate website', usd: '$1 350–2 400', rub: '100–180k ₽', timeline: '10–14 days' },
      ],
      note:
        'Included: responsive design, basic SEO, Telegram CTA, deployment · Add-ons: multilingual +20%, animations/3D +30%, CMS +$200',
    },
    {
      num: '02',
      title: 'TELEGRAM / WHATSAPP BOTS',
      rows: [
        { type: 'Basic bot (menu, forms, notifications)', usd: '$450–750', rub: '35–55k ₽', timeline: '3–5 days' },
        { type: 'AI-powered bot (GPT / Claude)', usd: '$950–1 500', rub: '70–110k ₽', timeline: '7–12 days' },
        { type: 'HR / screening / funnel + AI', usd: '$1 200–2 000', rub: '90–150k ₽', timeline: '10–14 days' },
        { type: 'Consumer product bot (subscriptions, b2c)', usd: '$1 350–2 400', rub: '100–180k ₽', timeline: '10–18 days' },
      ],
      note:
        'Included: deployment, QA, documentation · Add-ons: Stripe payments +$150, analytics +$120, WhatsApp mirror +20%',
    },
    {
      num: '03',
      title: 'AUTOMATION',
      rows: [
        { type: 'Simple workflow (2–3 services)', usd: '$240–440', rub: '18–32k ₽', timeline: '1–3 days' },
        { type: 'Complex automation (n8n / Make)', usd: '$680–1 200', rub: '50–90k ₽', timeline: '5–9 days' },
        { type: 'Full CRM integration', usd: '$950–1 900', rub: '70–140k ₽', timeline: '7–14 days' },
      ],
    },
    {
      num: '04',
      title: 'AI INTEGRATIONS',
      rows: [
        { type: 'LLM integration into existing product', usd: '$600–1 150', rub: '45–85k ₽', timeline: '3–7 days' },
        { type: 'Single AI agent', usd: '$1 100–1 900', rub: '80–140k ₽', timeline: '7–12 days' },
        { type: 'Multi-agent system', usd: '$2 000–4 000', rub: '150–300k ₽', timeline: '14–30 days' },
        { type: 'RAG / knowledge base + search', usd: '$1 000–1 750', rub: '75–130k ₽', timeline: '5–10 days' },
      ],
    },
  ],
  packagesTitle: { num: '05', title: 'PACKAGES' },
  packages: [
    {
      name: 'STARTER',
      tagline: '"Just go online"',
      items: ['Landing page (1 page)', 'Telegram form / CTA', 'Analytics setup'],
      price: '$500',
      meta: '4–5 days',
    },
    {
      name: 'BUSINESS',
      tagline: '"Site + Bot"',
      items: ['Business card site (3–5 pages)', 'Basic Telegram bot', 'Lead automation'],
      price: '$1 350',
      meta: '10 days · save ~20%',
    },
    {
      name: 'AI BUSINESS',
      tagline: '"Smart office"',
      items: ['Website', 'AI Telegram bot (GPT/Claude)', 'CRM integration', 'Onboarding guide'],
      price: '$2 300',
      meta: '14 days · save ~20%',
      featured: true,
      badge: 'POPULAR',
    },
    {
      name: 'MVP',
      tagline: '"Ship your product"',
      items: ['Web app (up to 5 screens)', 'Deployment (Vercel/Railway)', '2 weeks post-launch support'],
      price: '$3 100',
      meta: '14 days',
    },
  ],
  retainerTitle: { num: '06', title: 'MONTHLY RETAINER' },
  retainer: [
    {
      tier: 'LIGHT',
      price: '$200',
      per: '/month',
      features: ['4 hrs of work', 'Monitoring', 'Small fixes'],
    },
    {
      tier: 'STANDARD',
      price: '$430',
      per: '/month',
      features: ['10 hrs of work', 'Priority response', 'New features'],
      highlight: true,
    },
    {
      tier: 'PARTNER',
      price: '$800',
      per: '/month',
      features: ['20 hrs of work', 'Strategic tasks', 'Ongoing development'],
    },
  ],
  retainerNote:
    'White-label / Subcontracting: $45–65/hr · $300–450/day · NDA available · No attribution required',
  termsTitle: { num: '07', title: 'TERMS' },
  terms: [
    { label: 'Payment', value: '50% upfront · 50% on delivery' },
    { label: 'Revisions', value: '2 rounds free · $35/hr after' },
    { label: 'Rush delivery', value: 'Available · +30% to price' },
    { label: 'Methods', value: 'USDT · Wise · Revolut · Transfer' },
    { label: 'Contract', value: 'Available on request' },
    { label: 'Stack', value: 'Next.js · React · n8n · Claude API' },
  ],
  cta: {
    title: 'Got a project?',
    text: 'Send a message — I reply within an hour.',
    button: '@orhan_yunuszade →',
  },
  footer: 'AI Developer · Websites · Bots · Automation',
  back: '← Back to home',
}

export const pricingRu: PricingContent = {
  meta: {
    title: 'ORIKAI.DEV — Прайс',
    description:
      'Сайты, Telegram-боты, автоматизация и AI-интеграции. Прозрачные цены, сдача за дни.',
  },
  header: { tagline: 'AI-разработчик · Услуги и цены' },
  hero: {
    label: 'ORIKAI.DEV — ПРАЙС 2026',
    titleLine1: 'Сайты. Боты.',
    titleLine2: 'Автоматизация. AI.',
    subs: [
      'Сдаю за дни, не месяцы',
      'AI ускоряет разработку в 3–5 раз',
      '50% предоплата · 2 раунда правок включены',
    ],
  },
  tableHeaders: {
    type: 'Тип',
    priceUsd: 'Цена ($)',
    priceRub: 'Цена (₽)',
    timeline: 'Срок',
  },
  sections: [
    {
      num: '01',
      title: 'САЙТЫ И ЛЕНДИНГИ',
      rows: [
        { type: 'Лендинг (1 страница)', usd: '$400–600', rub: '30–45k ₽', timeline: '3–5 дней' },
        { type: 'Сайт-визитка (3–5 стр.)', usd: '$650–1 100', rub: '50–80k ₽', timeline: '5–8 дней' },
        { type: 'Сайт блогера / курс', usd: '$950–1 500', rub: '70–110k ₽', timeline: '7–10 дней' },
        { type: 'Сайт ресторана / заведения', usd: '$800–1 350', rub: '60–100k ₽', timeline: '6–9 дней' },
        { type: 'Корпоративный сайт', usd: '$1 350–2 400', rub: '100–180k ₽', timeline: '10–14 дней' },
      ],
      note:
        'Включено: адаптив, SEO-база, Telegram CTA, деплой · Опции: мультиязык +20%, анимации/3D +30%, CMS +15 000 ₽',
    },
    {
      num: '02',
      title: 'TELEGRAM / WHATSAPP БОТЫ',
      rows: [
        { type: 'Базовый (меню, форма, уведомления)', usd: '$450–750', rub: '35–55k ₽', timeline: '3–5 дней' },
        { type: 'С AI-интеграцией (GPT / Claude)', usd: '$950–1 500', rub: '70–110k ₽', timeline: '7–12 дней' },
        { type: 'HR / скрининг / воронка + AI', usd: '$1 200–2 000', rub: '90–150k ₽', timeline: '10–14 дней' },
        { type: 'Масс-продукт (подписки, b2c, контент)', usd: '$1 350–2 400', rub: '100–180k ₽', timeline: '10–18 дней' },
      ],
      note:
        'Включено: деплой, тест, документация · Опции: оплата (ЮКасса/Stripe) +15k ₽, аналитика +10k ₽, WhatsApp +20%',
    },
    {
      num: '03',
      title: 'АВТОМАТИЗАЦИЯ',
      rows: [
        { type: 'Простая связка (2–3 сервиса)', usd: '$240–440', rub: '18–32k ₽', timeline: '1–3 дня' },
        { type: 'Комплексная автоматизация (n8n / Make)', usd: '$680–1 200', rub: '50–90k ₽', timeline: '5–9 дней' },
        { type: 'CRM-интеграция под ключ', usd: '$950–1 900', rub: '70–140k ₽', timeline: '7–14 дней' },
      ],
    },
    {
      num: '04',
      title: 'AI-ИНТЕГРАЦИИ',
      rows: [
        { type: 'Подключение LLM к продукту', usd: '$600–1 150', rub: '45–85k ₽', timeline: '3–7 дней' },
        { type: 'AI-агент (одиночный)', usd: '$1 100–1 900', rub: '80–140k ₽', timeline: '7–12 дней' },
        { type: 'Мультиагентная система', usd: '$2 000–4 000', rub: '150–300k ₽', timeline: '14–30 дней' },
        { type: 'RAG / база знаний + поиск', usd: '$1 000–1 750', rub: '75–130k ₽', timeline: '5–10 дней' },
      ],
    },
  ],
  packagesTitle: { num: '05', title: 'ГОТОВЫЕ ПАКЕТЫ' },
  packages: [
    {
      name: 'STARTER',
      tagline: '"Просто онлайн"',
      items: ['Лендинг (1 страница)', 'Telegram-форма / кнопка', 'Подключение аналитики'],
      price: '$500',
      meta: '4–5 дней · ₽38 000',
    },
    {
      name: 'BUSINESS',
      tagline: '"Сайт + Бот"',
      items: ['Сайт-визитка (3–5 стр.)', 'Базовый Telegram-бот', 'Автоматизация лидов'],
      price: '$1 350',
      meta: '10 дней · ₽100 000 · экономия ~20%',
    },
    {
      name: 'AI BUSINESS',
      tagline: '"Умный офис"',
      items: [
        'Сайт-визитка',
        'Telegram-бот с AI (GPT/Claude)',
        'CRM-интеграция',
        'Онбординг-инструкция',
      ],
      price: '$2 300',
      meta: '14 дней · ₽170 000 · экономия ~20%',
      featured: true,
      badge: 'ХИТ',
    },
    {
      name: 'MVP',
      tagline: '"Запустить продукт"',
      items: ['Веб-приложение (до 5 экранов)', 'Деплой (Vercel/Railway)', '2 недели пост-лонч поддержки'],
      price: '$3 100',
      meta: '14 дней · ₽230 000',
    },
  ],
  retainerTitle: { num: '06', title: 'РЕТЕЙНЕР / ПОДДЕРЖКА' },
  retainer: [
    {
      tier: 'LIGHT',
      price: '$200',
      per: '/мес',
      features: ['4 ч работы', 'Мониторинг', 'Мелкие правки'],
    },
    {
      tier: 'STANDARD',
      price: '$430',
      per: '/мес',
      features: ['10 ч работы', 'Приоритетный ответ', 'Новые фичи'],
      highlight: true,
    },
    {
      tier: 'PARTNER',
      price: '$800',
      per: '/мес',
      features: ['20 ч работы', 'Стратегические задачи', 'Постоянная разработка'],
    },
  ],
  retainerNote:
    'Субподряд для агентств: $45–65/час · $300–450/день · NDA по запросу · White label',
  termsTitle: { num: '07', title: 'УСЛОВИЯ РАБОТЫ' },
  terms: [
    { label: 'Оплата', value: '50% до старта · 50% при сдаче' },
    { label: 'Правки', value: '2 раунда · далее ₽2 500/час' },
    { label: 'Срочный проект', value: 'Возможно · +30% к цене' },
    { label: 'Способы оплаты', value: 'USDT · Wise · Revolut · Перевод' },
    { label: 'Договор', value: 'По запросу' },
    { label: 'Стек', value: 'Next.js · React · n8n · Claude API' },
  ],
  cta: {
    title: 'Есть задача?',
    text: 'Напишите в Telegram — отвечу в течение часа.',
    button: '@orhan_yunuszade →',
  },
  footer: 'AI-разработчик · Сайты · Боты · Автоматизация',
  back: '← Вернуться на главную',
}

export function getPricing(lang: string): PricingContent {
  return lang === 'en' ? pricingEn : pricingRu
}
