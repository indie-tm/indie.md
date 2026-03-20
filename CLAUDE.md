# indie.md

An indie hacker knowledge platform — real stories, extractable advice. Built with Astro, generates static HTML with zero JavaScript.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Build static site
npm run check        # Full quality gate: biome + typecheck + test + build
npm run format       # Auto-format with Biome
npm run lint         # Lint with Biome
npm run typecheck    # TypeScript type checking
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Quality Gate

The quality gate is `npm run check`. It runs sequentially:

1. `biome check .` — formatting + linting
2. `tsc --noEmit` — type checking
3. `vitest run` — tests
4. `astro build` — full build (validates content schemas, remark plugins, all pages)

Pre-commit hook runs: `biome check . && tsc --noEmit`

## Architecture

- **Framework:** Astro 6 (static output, zero JS shipped)
- **Styling:** Tailwind CSS 3 with custom design tokens (CSS variables)
- **Content:** Markdown files in `src/content/` with Astro Content Collections
- **Advice extraction:** Custom remark plugin parses `:::advice{...}` directives from journey markdown, auto-generates advice pages

### Directory Structure

```
src/
  content/
    people/         # Person profiles (frontmatter-only .md)
    journeys/       # Case studies with embedded :::advice directives
  content.config.ts # Zod schemas for content collections
  layouts/          # Base.astro (HTML shell, header, footer)
  components/       # Astro components (Header, Footer, cards)
  pages/            # Route pages (index, journeys, advice, people)
  plugins/          # remark-extract-advice.ts
  lib/              # advice.ts helpers
  styles/           # global.css (Tailwind + CSS variables)
  generated/        # advice-index.json (auto-generated, do not edit)
tests/              # Vitest test files
```

### Content Model

```
Person → Journey (1:many) → Advice (embedded via :::advice directives)
```

People and journeys are content collections. Advice is auto-extracted from journey markdown at build time by the remark plugin and written to `src/generated/advice-index.json`.

### Adding Content

1. Add a person: create `src/content/people/{slug}.md` with name, avatar, tagline, bio frontmatter
2. Add a journey: create `src/content/journeys/{slug}.md` with title, subtitle, person, date, lessons frontmatter and markdown body
3. Embed advice: use `:::advice{slug="..." category="..." title="..."}` directives in journey markdown

Categories: seo, distribution, product, business, mindset

## Code Conventions

- **Formatting:** Biome — double quotes, 2-space indent, 100-char line width, semicolons, trailing commas
- **TypeScript:** Strict mode via `astro/tsconfigs/strict`. No `any` types. Use `const` always.
- **Components:** `.astro` files, typed Props interfaces in frontmatter
- **Naming:** kebab-case for files, camelCase for variables/functions
- **Imports:** Use relative paths from component to component. No barrel files.
- **CSS:** Tailwind utility classes. Custom tokens via CSS variables. No arbitrary values when a token exists.

## Commit Convention

Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`
