# indie.md

A community-driven knowledge platform for indie hackers. Real stories, extractable advice, and IRL event recaps from builders who share their journeys openly.

**Live at:** [indie-tm.github.io/indie.md](https://indie-tm.github.io/indie.md)

## What is this?

indie.md captures practical knowledge from indie hackers through three content types:

- **Journeys**: first-person case studies about building a product (how it started, what worked, what didn't)
- **Events**: recaps from IRL meetups with multiple presenters and extracted advice
- **Advice**: atomic tips extracted from journeys and events, organized by category (SEO, Distribution, Product, Business, Mindset)

Every piece of advice links back to the story it came from. Every person links to their products with dofollow backlinks.

## Tech stack

- **Astro 6**: static site generator, zero JavaScript shipped to the browser
- **Tailwind CSS 3**: utility-first styling with custom design tokens
- **Markdown content**: people, journeys, and events are `.md` files with frontmatter
- **Remark plugin**: `:::advice` directives embedded in journey/event markdown are auto-extracted into standalone advice pages at build time

46 static HTML pages, 33KB CSS, no JS. Builds in under 2 seconds.

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Run the full quality gate (lint, typecheck, test, build)
npm run check
```

## Adding content

### Add a person

Create `src/content/people/{slug}.md`:

```yaml
---
name: "Your Name"
avatar: "/avatars/{slug}.png"
tagline: "One-line description"
products:
  - name: "Product Name"
    url: "https://your-product.com"
bio: "A few sentences about who you are and what you build."
---
```

Place a 400x400 PNG avatar at `public/avatars/{slug}.png`.

### Add a journey

Create `src/content/journeys/{slug}.md`:

```yaml
---
title: "Your Journey Title"
subtitle: "A brief description of the story"
person: "your-slug"
date: 2026-03-20
lessons:
  - "Lesson one"
  - "Lesson two"
---

Write your story in markdown here.

Embed advice using directives:

:::advice{slug="unique-advice-slug" category="seo" title="Your advice title" person="your-slug"}
The advice content goes here. This gets extracted as a standalone advice page.
:::
```

Categories: `seo`, `distribution`, `product`, `business`, `mindset`

### Add an event

Create `src/content/events/{slug}.md`:

```yaml
---
title: "Event Name"
subtitle: "Brief description"
date: 2026-03-19
location: "Venue, City"
link: "https://lu.ma/your-event"
presenters:
  - person-slug-1
  - person-slug-2
---

Write the event recap. Each presenter's section can embed advice:

:::advice{slug="advice-slug" category="distribution" title="Advice title" person="presenter-slug"}
Advice content attributed to the specific presenter.
:::
```

In events, the `person` attribute on `:::advice` directives is required to identify which presenter gave the tip.

## Project structure

```
src/
  content/
    people/           Person profiles (.md with frontmatter)
    journeys/         Case studies with :::advice directives
    events/           IRL meetup recaps with :::advice directives
  content.config.ts   Zod schemas for content collections
  layouts/            Base.astro (HTML shell, header, footer)
  components/         Astro components (cards, badges)
  pages/              Route pages
  plugins/            Remark plugin for advice callout rendering
  lib/                Advice index helpers
  styles/             Tailwind + CSS variables
  generated/          advice-index.json (auto-generated, do not edit)
scripts/
  extract-advice.ts   Pre-build script that generates advice-index.json
  lint-writing.sh     Enforces no em dashes, no emojis
tests/                Vitest test files
```

## Quality gate

```bash
npm run check
```

Runs sequentially:

1. `biome check .` (formatting + linting)
2. `lint:writing` (no em dashes, no emojis)
3. `astro sync && tsc --noEmit` (type checking)
4. `vitest run` (tests)
5. `extract-advice && astro build` (full build)

Pre-commit hook enforces: biome check, writing lint, and typecheck.

CI runs the full quality gate on every push and PR via GitHub Actions.

## Writing rules

- Never use em dashes. Use colons, commas, or parentheses instead.
- Never use emojis in code, content, or comments.
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`

## Contributing

1. Fork the repo
2. Create a branch
3. Add your person, journey, or event content
4. Run `npm run check` to verify everything passes
5. Open a PR

Every contributor gets a person page with dofollow backlinks to their products.

## License

MIT
