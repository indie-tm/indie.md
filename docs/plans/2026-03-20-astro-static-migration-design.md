# indie.md: Astro Static Site Migration

## Goal

Convert the React SPA into a statically generated site using Astro. Zero JavaScript shipped to the browser. Fast page loads, crawlable by search engines, deployable anywhere.

## Architecture

### Tech Stack

- **Astro**: static site generator, zero JS by default
- **Tailwind CSS**: same design system, same config
- **Markdown**: content authored in `.md` files with frontmatter
- **Remark plugin**: custom plugin to extract advice from journey content

### What Gets Removed

- React, ReactDOM, React Router
- All Radix UI / shadcn/ui dependencies (54 components)
- TanStack Query, React Hook Form, Zod (unused anyway)
- Vite config (replaced by Astro config)
- `src/data/content.ts` (replaced by markdown files)

### What Stays

- `tailwind.config.ts` (same design tokens, fonts, colors)
- CSS variables and Google Fonts from `index.css`
- The visual design (rebuilt in Astro templates)

## Project Structure

```
src/
  content/
    config.ts                # Content collection schemas (Zod)
    people/
      alex.md
      mircea.md
      raul.md
    journeys/
      alex-seo.md
      mircea-boring-saas.md
      raul-design-templates.md
  layouts/
    Base.astro               # HTML shell, header, footer, fonts, Tailwind
  pages/
    index.astro              # Home page
    people/
      index.astro            # All people (optional)
      [slug].astro           # Person bio + their journeys
    journeys/
      index.astro            # All journeys
      [slug].astro           # Single journey with inline advice callouts
    advice/
      index.astro            # All advice
      [category].astro       # Filtered by category
      [slug].astro           # Single advice piece
  components/
    Header.astro
    Footer.astro
    PersonCard.astro
    AdviceCard.astro
    JourneyCard.astro
    CategoryBadge.astro
    AdviceCallout.astro      # Inline advice block in journey pages
  styles/
    global.css               # Tailwind directives + CSS variables
  generated/
    advice-index.json        # Auto-generated at build time
plugins/
  remark-extract-advice.ts   # Remark plugin for :::advice directives
astro.config.mjs
tailwind.config.ts
```

## Content Model

### People (`src/content/people/*.md`)

Metadata-only, no body content needed.

```markdown
---
name: "Alex"
avatar: "A"
tagline: "Solo founder obsessed with organic growth"
bio: "Started building side projects in 2023..."
---
```

### Journeys (`src/content/journeys/*.md`)

Full markdown body with embedded advice directives.

```markdown
---
title: "How I Got 10k Organic Visitors in 6 Months"
subtitle: "From zero to 10k monthly visitors with pure SEO"
person: "alex"
date: 2026-03-01
lessons:
  - "Start with low-competition keywords"
  - "Consistency beats intensity"
  - "Internal linking compounds over time"
---

## The Beginning

I started with a simple blog and zero domain authority...

## What Worked

:::advice{slug="keyword-research-first" category="seo" title="Start With Keyword Research, Not Writing"}
Before writing a single word, spend 2 hours in a keyword tool.
Find long-tail keywords with <1k competition. This is the foundation.
:::

After finding my keywords, I created a content calendar...
```

### Advice (auto-extracted, no separate files)

Advice is extracted from `:::advice{...}` directives in journey markdown at build time. No separate content collection needed.

Each directive produces:
- A standalone page at `/advice/[slug]`
- An entry in the advice index for listing/filtering
- An inline callout in the journey page

Extracted metadata per advice:
- `slug`: URL-safe identifier
- `category`: one of: seo, distribution, product, business, mindset
- `title`: display title
- `content`: the body text inside the directive
- `journeySlug`: the parent journey (derived automatically)
- `personSlug`: the author (derived from journey frontmatter)

## Data Relationships

```
Person (1)
  └── Journey (many)
        └── Advice (many, embedded via :::advice directives)
```

A person can have multiple journeys (multiple indie projects).
Each journey can contain multiple advice blocks.
Each advice block becomes a standalone page and appears in category listings.

## Pages & Routing

| URL | Source | Description |
|-----|--------|-------------|
| `/` | `pages/index.astro` | Home: featured journeys, category cards, latest advice |
| `/people` | `pages/people/index.astro` | All people grid |
| `/people/[slug]` | `pages/people/[slug].astro` | Person bio + all their journeys |
| `/journeys` | `pages/journeys/index.astro` | All journeys grid |
| `/journeys/[slug]` | `pages/journeys/[slug].astro` | Full journey with advice callouts |
| `/advice` | `pages/advice/index.astro` | All advice listed |
| `/advice/seo` | `pages/advice/[category].astro` | Advice filtered by category |
| `/advice/[slug]` | `pages/advice/[slug].astro` | Single advice + source journey link |

### Category Filtering

Separate static pages per category, no JavaScript needed.

Generated pages: `/advice`, `/advice/seo`, `/advice/product`, `/advice/business`, `/advice/distribution`, `/advice/mindset`

Navigation is plain `<a>` links between them.

### Routing Ambiguity: `/advice/[category]` vs `/advice/[slug]`

Category slugs are a known set (seo, product, business, distribution, mindset). The `[category].astro` page uses `getStaticPaths()` with only these 5 values. The `[slug].astro` page generates paths for advice slugs which must not collide with category names (enforced by the remark plugin rejecting reserved slugs).

## Build Pipeline

```
astro build
  1. Astro loads journey markdown files
  2. Remark plugin parses :::advice directives
  3. Plugin writes src/generated/advice-index.json
  4. Astro generates static HTML for all pages
  5. Tailwind compiles CSS
  6. Output: dist/ (plain HTML + CSS)
```

## Build Output

```
dist/
  index.html
  people/
    index.html
    alex/index.html
    mircea/index.html
    raul/index.html
  journeys/
    index.html
    alex-seo/index.html
    mircea-boring-saas/index.html
    raul-design-templates/index.html
  advice/
    index.html
    seo/index.html
    product/index.html
    business/index.html
    distribution/index.html
    mindset/index.html
    keyword-research-first/index.html
    write-for-humans/index.html
    ...
  _astro/
    global.[hash].css
```

## Deployment

Push `dist/` to any static host: GitHub Pages, Netlify, Cloudflare Pages, S3, or a simple nginx server. No server runtime required.

## Visual Design

The visual design stays the same:
- Instrument Serif (display) + DM Sans (body)
- Orange primary, teal accent, warm earth-tone palette
- Card-based layouts with hover shadows
- Responsive: mobile-first with Tailwind breakpoints
- Light/dark mode via CSS class (toggle can be a tiny inline script or removed)

Components are rebuilt as `.astro` files instead of React JSX. The HTML output is identical.
