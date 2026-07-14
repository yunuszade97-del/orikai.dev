# orikai.dev

Next.js 14 (App Router) + React 18 + TypeScript portfolio/service site for an AI developer, offering websites, Telegram/WhatsApp bots, and automation (n8n/Make/CRM).

## Stack & structure

- **Styling**: Tailwind CSS driven by CSS-variable design tokens defined in `app/globals.css` (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`, `--accent2`), mapped into `tailwind.config.ts`. Components mix Tailwind utility classes with inline `style={{ color: 'var(--x)' }}` for token-driven values — match this pattern rather than introducing new conventions.
- **i18n**: custom setup in `lib/i18n/` — `en.json` / `ru.json` dictionaries consumed via the `useTranslation()` hook, routed through `app/[lang]/`. `ru` is the default locale.
- **3D/animation**: `@react-three/fiber` + `three` for the Hero scene (`components/three/HeroScene.tsx`); `gsap` for other animation.
- **Layout**: page sections in `components/sections/` (Hero, Services, Projects, HowItWorks, About, Contact), shared UI in `components/ui/` (Button, Navbar, Loader, CustomCursor). The pricing page (`app/[lang]/pricing/page.tsx`) is standalone and self-contained — it does not reuse the section components.
- **SEO surface**: `app/[lang]/layout.tsx` holds metadata and the JSON-LD `@graph`; `app/og/route.tsx` renders the OG image on the Edge runtime; `next-sitemap.config.js` regenerates `public/sitemap*.xml` on `postbuild` — rerun `npm run build` after adding or removing a route.
- No component library / design system package — all styling is hand-rolled per component.

## Engineering principles

1. **Think before coding** — surface wrong assumptions and ambiguity before writing code. State assumptions explicitly; ask when a request could mean more than one thing rather than guessing.
2. **Simplicity first** — implement only what's asked. No speculative abstractions, no unused flexibility, no error handling for cases that can't occur here.
3. **Surgical changes** — touch only the files/lines the task requires. Match existing style even where it differs from a personal preference (e.g. the inline-style + Tailwind mix already used throughout). Don't refactor adjacent code while passing through.
4. **Goal-driven execution** — turn each request into a concrete, verifiable end-state (e.g. "tag badges have no border, lime-tinted background, accent text") and check the rendered result before calling it done.
