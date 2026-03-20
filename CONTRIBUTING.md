# Contributing to indie.md

Thanks for your interest in contributing. indie.md is a community-driven knowledge platform for indie hackers, and every contribution makes it better.

## How to contribute

### Share your story

The easiest way to contribute is adding content: your person profile, a journey about building your product, or a recap of an event you attended.

1. Fork the repository
2. Create a branch (`git checkout -b add-your-name`)
3. Add your content (see below)
4. Run `npm run check` to verify everything passes
5. Open a pull request

### Content types

**Person profile**: create `src/content/people/{your-slug}.md` with your name, avatar, tagline, bio, and product links. Place a 400x400 PNG avatar at `public/avatars/{your-slug}.png`.

**Journey**: create `src/content/journeys/{slug}.md` with a first-person story about building your product. Embed `:::advice` directives for extractable tips.

**Event recap**: create `src/content/events/{slug}.md` with a meetup recap. Include presenters and `:::advice` directives with `person` attributes.

See [README.md](README.md) for detailed format examples.

### Fix bugs or improve the site

1. Fork the repository
2. Create a branch
3. Make your changes
4. Run `npm run check` (must pass: biome, writing lint, typecheck, tests, build)
5. Open a pull request

## Writing rules

- Never use em dashes. Use colons, commas, or parentheses instead.
- Never use emojis in code, content, or comments.
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`

## Code conventions

- Biome handles formatting: double quotes, 2-space indent, 100-char lines, semicolons
- TypeScript strict mode, no `any` types
- Astro components with typed Props interfaces
- See [CLAUDE.md](CLAUDE.md) for the full code style guide

## Quality gate

Every PR must pass `npm run check`, which runs:

1. Biome formatting and linting
2. Writing rules (no em dashes, no emojis)
3. TypeScript type checking
4. Tests
5. Full Astro build

The CI pipeline runs this automatically on every PR.

## Product backlinks

Every contributor gets a person page with dofollow backlinks to their products. List your products in the `products` frontmatter field of your person profile.
