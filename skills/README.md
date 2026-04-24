# indie.md skills

Agent-native playbooks distilled from real indie hacker meetups and journeys at [indie.md](https://indie.md). Each skill synthesizes a cluster of founder advice into a decision prompt your coding agent can consult at the exact moment it is needed.

Designed to be a zero-maintenance install: drop the folder into your agent's skill path and the right skill fires when the task matches its description.

## Available skills

| Skill | Fires when | Advice synthesized |
|---|---|---|
| [`indie-pricing`](./indie-pricing/SKILL.md) | Setting a price, writing a pricing page, or choosing tiers | 7 business advice entries |
| [`indie-seo`](./indie-seo/SKILL.md) | Drafting blog posts, landing pages, or an SEO plan | 14 SEO advice entries |
| [`indie-distribution`](./indie-distribution/SKILL.md) | Prepping a launch, picking channels, first-user hunt | 7 distribution + 2 mindset entries |
| [`indie-product-scoping`](./indie-product-scoping/SKILL.md) | Scoping v1, cutting features, deciding what to build | 9 product advice entries |
| [`indie-mindset`](./indie-mindset/SKILL.md) | Stuck, over-polishing, or redefining what "done" means | 6 mindset advice entries |

Every skill cites the specific founder and links back to the canonical advice URL on indie.md so the agent (and you) can read the full source.

## Install

### Claude Code

```bash
git clone https://github.com/indie-tm/indie.md.git /tmp/indie.md
mkdir -p ~/.claude/skills
cp -r /tmp/indie.md/skills/* ~/.claude/skills/
```

Skills are auto-discovered by name. No further configuration required. Restart your Claude Code session to pick them up.

### Cursor

```bash
git clone https://github.com/indie-tm/indie.md.git /tmp/indie.md
mkdir -p .cursor/skills
cp -r /tmp/indie.md/skills/* .cursor/skills/
```

Cursor picks up `SKILL.md` files from `.cursor/skills/` in your workspace and surfaces them to the agent. If your Cursor version uses rules instead, copy the body into `.cursor/rules/<skill-name>.mdc` with frontmatter `{ description: "<when to use>", globs: "**/*" }`.

### Anthropic Agent Skills (API)

Upload each skill folder via the Agent Skills API. The `SKILL.md` frontmatter (`name`, `description`) maps directly to the API schema.

### Other agents

The format is portable: a folder per skill, a `SKILL.md` file with YAML frontmatter (`name`, `description`) and a Markdown body. Any agent runtime that reads this convention will work.

## Update cadence

Skills are regenerated whenever new advice is extracted from indie.md content. The source of truth for the advice itself is [src/generated/advice-index.json](../src/generated/advice-index.json) in this repository; skills synthesize and contextualize it.

## Conventions

- Every skill fires on task intent, not file extension.
- Every skill opens with a "When to use / When not to use" block so the agent can bail out cleanly.
- Every recommendation is attributed to the founder who said it, with a link to the canonical advice URL. The agent is expected to cite these when it applies the advice.
- No skill is longer than what fits comfortably in a single system prompt injection (roughly 150 lines of markdown).

## Contributing

Add an advice entry via `:::advice` in any journey or event markdown under `src/content/`. Rebuild (`npm run build`) and re-synthesize the affected skill.
