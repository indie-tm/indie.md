# indie.md

An indie hacker knowledge platform: real stories, extractable advice. Built with Astro, generates static HTML with zero JavaScript.

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

1. `biome check .`: formatting + linting
2. `tsc --noEmit`: type checking
3. `vitest run`: tests
4. `astro build`: full build (validates content schemas, remark plugins, all pages)

Pre-commit hook runs: `biome check . && tsc --noEmit`

Run `npm run check` after substantive changes. If content or remark plugin changed, also run `npm run build`.

## Architecture

- **Framework:** Astro 6 (static output, zero JS shipped)
- **Styling:** Tailwind CSS 3 with custom design tokens (CSS variables)
- **Content:** Markdown files in `src/content/` with Astro Content Collections
- **Advice extraction:** Custom remark plugin parses `:::advice{...}` directives from journey markdown, auto-generates advice pages

### Directory Structure

```
src/
  content/
    people/           # Person profiles (frontmatter-only .md)
    journeys/         # Case studies with embedded :::advice directives
    events/           # IRL meetup recaps with multi-presenter :::advice directives
  content.config.ts   # Zod schemas for content collections
  layouts/            # Base.astro (HTML shell, header, footer)
  components/         # Astro components (Header, Footer, cards)
  pages/              # Route pages (index, journeys, advice, people)
  plugins/            # remark-extract-advice.ts
  lib/                # advice.ts helpers (canonical AdviceEntry type)
  styles/             # global.css (Tailwind + CSS variables)
  generated/          # advice-index.json (auto-generated, do not edit)
tests/                # Vitest test files
```

### Content Model

```
Person -> Journey (1:many) -> Advice (embedded via :::advice directives)
Person -> Event (many:many) -> Advice (embedded via :::advice with person attribute)
```

People, journeys, and events are content collections. Advice is auto-extracted from journey and event markdown at build time by the remark plugin and written to `src/generated/advice-index.json`.

### Adding Content

1. Add a person: create `src/content/people/{slug}.md` with name, avatar, tagline, bio frontmatter
2. Add a journey: create `src/content/journeys/{slug}.md` with title, subtitle, person, date, lessons frontmatter and markdown body
3. Add an event: create `src/content/events/{slug}.md` with title, subtitle, date, location, presenters frontmatter and markdown body
4. Embed advice in journeys: use `:::advice{slug="..." category="..." title="..."}` directives
5. Embed advice in events: use `:::advice{slug="..." category="..." title="..." person="..."}` directives (person attribute required to identify the presenter)

Categories: seo, distribution, product, business, mindset

## Writing

- Never use em dashes. Use colons for definitions, commas or parentheses for asides, and restructure sentences that rely on em dashes
- Never use emojis in code, content, comments, or commit messages

## Code Style

- No `any` types, no type assertions (`as Type`). Use discriminated unions or type guards to narrow
- Use `const` always. `let` only when reassignment is truly necessary
- No bare `catch {}` blocks. Always handle or re-throw errors
- No nesting beyond 2 levels inside a function body. Prefer early returns and small helpers
- No magic numbers/strings. Use named constants
- No comments explaining *what*, only *why* when non-obvious
- Double quotes, semicolons, trailing commas (enforced by Biome)

## TypeScript

- Strict mode via `astro/tsconfigs/strict`
- Use `type` for unions/aliases, `interface` for object shapes
- Discriminated unions over optional fields when variant affects structure
- Use `import type` for type-only imports
- Canonical types live in one place. `AdviceEntry` and `CategoryMeta` are defined in `src/lib/advice.ts`; import from there, never re-declare

## Component Conventions

- Components are `.astro` files with typed `Props` interfaces in frontmatter
- Single file per component, no directories
- kebab-case for file names (`journey-card.astro`)
- Inline SVGs for icons (no icon library runtime)

## Styling

- Tailwind utility classes for all styling
- Custom design tokens via CSS variables in `src/styles/global.css`
- No Tailwind arbitrary values (`w-[347px]`) when a token or scale value exists
- Semantic color names: `primary`, `muted`, `foreground`, `card`, etc.
- Fonts: Instrument Serif (display), DM Sans (body)
- Light/dark mode via `.dark` CSS class

## Naming Conventions

- **Files:** kebab-case for components, camelCase for utilities
- **Variables/functions:** camelCase
- **Types:** PascalCase (`AdviceEntry`, `CategoryMeta`)
- **Constants:** UPPER_SNAKE_CASE for true constants, camelCase for config objects

## Imports

- Use relative paths (`../../lib/advice`) from Astro pages/components
- No barrel files
- Group imports: node builtins → external packages → type imports → local imports

## Testing

- Test real behavior, not mocked behavior
- All public exports from `src/lib/` must have tests
- All error paths must have tests
- Test output must be pristine: no warnings or errors in passing tests
- Place tests in `tests/*.test.ts` with behavior-focused `it(...)` names

## Engineering Principles

- DRY: extract shared patterns, no copy-paste
- YAGNI: no speculative features or unused abstractions
- Fail fast: validate inputs early, return before the happy path
- Errors are values: handle them explicitly, no bare catches

## Commit Convention

Follow conventional commits: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`
