# Events Content Type Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add IRL events as a new content type, allowing multi-presenter meetup recaps with embedded advice extraction.

**Architecture:** Events are a new Astro content collection alongside people and journeys. The remark plugin is extended to process `content/events/` files and support an optional `person` attribute on `:::advice` directives. The advice index gains an `eventSlug` field (mutually exclusive with `journeySlug`).

**Tech Stack:** Astro content collections, Zod schemas, remark plugin, Vitest

---

### Task 1: Extend AdviceEntry type

**Files:**
- Modify: `src/lib/advice.ts:4-11`

**Step 1: Write the failing test**

Add to `tests/advice.test.ts`:

```typescript
describe("getAdviceForEvent", () => {
  it("is exported as a function", () => {
    expect(typeof getAdviceForEvent).toBe("function");
  });

  it("returns empty array when no events exist yet", () => {
    const result = getAdviceForEvent("nonexistent-event");
    expect(result).toEqual([]);
  });
});
```

Also update the import at the top of the test file to include `getAdviceForEvent`.

**Step 2: Run test to verify it fails**

Run: `npx vitest run`
Expected: FAIL with import error (getAdviceForEvent does not exist)

**Step 3: Update AdviceEntry and add getAdviceForEvent**

In `src/lib/advice.ts`, change the `AdviceEntry` interface:

```typescript
export interface AdviceEntry {
  slug: string;
  category: string;
  title: string;
  content: string;
  journeySlug: string | null;
  eventSlug: string | null;
  personSlug: string;
}
```

Add the new helper function after `getAdviceForJourney`:

```typescript
export function getAdviceForEvent(eventSlug: string): AdviceEntry[] {
  return readIndex().filter((a) => a.eventSlug === eventSlug);
}
```

**Step 4: Update existing tests for new field**

In `tests/advice.test.ts`, the test "each entry has required fields" checks `entry.journeySlug` with `toBeTruthy()`. Since `journeySlug` can now be `null` (for event-sourced advice), change this assertion:

```typescript
it("each entry has required fields", () => {
  const index = getAdviceIndex();
  for (const entry of index) {
    expect(entry.slug).toBeTruthy();
    expect(entry.category).toBeTruthy();
    expect(entry.title).toBeTruthy();
    expect(entry.content).toBeTruthy();
    expect(entry.personSlug).toBeTruthy();
    // journeySlug or eventSlug must be set (not both)
    expect(entry.journeySlug !== null || entry.eventSlug !== null).toBe(true);
  }
});
```

**Step 5: Run tests to verify they pass**

Run: `npx vitest run`
Expected: PASS (all 15 tests)

**Step 6: Commit**

```bash
git add src/lib/advice.ts tests/advice.test.ts
git commit -m "feat: extend AdviceEntry with eventSlug, add getAdviceForEvent"
```

---

### Task 2: Update remark plugin to handle events and person attribute

**Files:**
- Modify: `src/plugins/remark-extract-advice.ts:86-151`

**Step 1: Write the failing test**

Create `tests/remark-plugin.test.ts`:

```typescript
import { describe, expect, it } from "vitest";
import { getAdviceIndex } from "../src/lib/advice";

describe("remark-extract-advice plugin", () => {
  it("sets journeySlug for journey-sourced advice", () => {
    const index = getAdviceIndex();
    const journeyAdvice = index.filter((a) => a.journeySlug !== null);
    expect(journeyAdvice.length).toBeGreaterThan(0);
    for (const entry of journeyAdvice) {
      expect(entry.eventSlug).toBeNull();
    }
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run`
Expected: FAIL because existing advice entries lack `eventSlug` field (it is `undefined`, not `null`)

**Step 3: Update the remark plugin**

In `src/plugins/remark-extract-advice.ts`, make these changes:

1. Change the file path check (line 94) to process both journeys AND events:

```typescript
const isJourney = filePath.includes("content/journeys");
const isEvent = filePath.includes("content/events");
if (!isJourney && !isEvent) return;
```

2. Set journeySlug/eventSlug based on source type:

```typescript
const sourceSlug = fileName ?? "unknown";
```

3. In the visit callback, read the optional `person` attribute from the directive. For events, `person` attribute is required; for journeys, fall back to frontmatter `person`:

```typescript
const directivePerson = attrs.person ?? "";
const resolvedPerson = directivePerson || personSlug;
```

4. Build the entry with the new fields:

```typescript
const entry: AdviceEntry = {
  slug,
  category,
  title,
  content,
  journeySlug: isJourney ? sourceSlug : null,
  eventSlug: isEvent ? sourceSlug : null,
  personSlug: resolvedPerson,
};
```

5. Update the dedup check to handle both source types:

```typescript
const exists = collectedAdvice.some(
  (a) => a.slug === slug && (a.journeySlug === sourceSlug || a.eventSlug === sourceSlug),
);
```

**Step 4: Rebuild to regenerate advice-index.json**

Run: `npm run build`

This regenerates `src/generated/advice-index.json` with the new `eventSlug: null` field on existing journey advice.

**Step 5: Run tests to verify they pass**

Run: `npx vitest run`
Expected: PASS

**Step 6: Commit**

```bash
git add src/plugins/remark-extract-advice.ts src/generated/advice-index.json
git commit -m "feat: extend remark plugin for events and person attribute"
```

---

### Task 3: Add events content collection

**Files:**
- Modify: `src/content.config.ts`
- Create: `src/content/events/bucharest-meetup-march-2026.md`

**Step 1: Add events collection schema**

In `src/content.config.ts`, add after the journeys collection:

```typescript
const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/events" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    presenters: z.array(z.string()),
  }),
});

export const collections = { people, journeys, events };
```

**Step 2: Create the events directory**

Run: `mkdir -p src/content/events`

**Step 3: Create the first event**

Create `src/content/events/bucharest-meetup-march-2026.md`:

```markdown
---
title: "SEO Tactics That Actually Work"
subtitle: "What we learned at our March meetup in Bucharest"
date: 2026-03-19
location: "Bucharest"
presenters:
  - vlad
  - mircea
  - raul
---

We got together last night to talk about what's actually working for our projects. No theory, no fluff, just real numbers and real tactics. Here's what came out of it.

## Vlad: The SEO Checklist

Vlad kicked things off with a practical SEO checklist he's been refining across his projects.

:::advice{slug="faq-schema-markup" category="seo" title="Add FAQ sections with FAQPage schema" person="vlad"}
Add human-written FAQ sections to every page on your site. Use FAQPage structured data so Google can pull your answers into rich results. This is low effort and high impact for visibility.
:::

:::advice{slug="programmatic-seo-pages" category="seo" title="Create localized landing pages at scale" person="vlad"}
Build pages targeting "[product/service] in [city/country]" combinations. Automate the structure but keep the content real. This is how you capture long-tail local search traffic with almost no competition.
:::

## Mircea: Distribution Beyond Cold Email

Mircea shared what he's learned about getting backlinks and distribution for his SaaS.

:::advice{slug="nocode-integration-backlinks" category="distribution" title="Get listed on no-code platforms for free backlinks" person="mircea"}
Integrate with Zapier, Make.com, n8n, and other workflow tools. Each platform gives you a listing page with a backlink to your domain. This is free, permanent, and builds domain authority over time.
:::

:::advice{slug="app-store-backlinks" category="distribution" title="Publish to app stores for authority backlinks" person="mircea"}
Even if your product is primarily web-based, publish a simple mobile wrapper to the App Store and Google Play. The backlinks from apple.com and google.com are extremely high authority.
:::

## Raul: Content That Converts

Raul talked about moving beyond text-only blog posts.

:::advice{slug="video-content-with-face" category="product" title="Record videos with your face in the corner" person="raul"}
Use tools like Lumen5 or Loom to record product walkthroughs with your face in the corner. People trust faces. These videos work as blog post embeds, YouTube content, and social proof simultaneously.
:::

:::advice{slug="infographics-for-backlinks" category="seo" title="Create infographics for blog posts and backlinks" person="raul"}
Infographics get shared and linked to far more than plain text. Create one per major blog post. Other sites will embed them and link back to you. This is one of the most reliable backlink strategies.
:::
```

**Step 4: Build to validate schema and generate advice**

Run: `npm run build`
Expected: builds successfully, generates new advice entries in `src/generated/advice-index.json`

**Step 5: Run tests**

Run: `npx vitest run`
Expected: PASS

**Step 6: Commit**

```bash
git add src/content.config.ts src/content/events/ src/generated/advice-index.json
git commit -m "feat: add events content collection with first event"
```

---

### Task 4: Add event-related tests

**Files:**
- Modify: `tests/advice.test.ts`
- Modify: `tests/remark-plugin.test.ts`

**Step 1: Add event-specific tests to advice.test.ts**

```typescript
describe("getAdviceForEvent", () => {
  it("returns advice for a specific event", () => {
    const advice = getAdviceForEvent("bucharest-meetup-march-2026");
    expect(advice.length).toBeGreaterThan(0);
    for (const entry of advice) {
      expect(entry.eventSlug).toBe("bucharest-meetup-march-2026");
      expect(entry.journeySlug).toBeNull();
    }
  });

  it("returns empty array for unknown event", () => {
    const result = getAdviceForEvent("nonexistent-event");
    expect(result).toEqual([]);
  });
});
```

**Step 2: Add person-attribution test to remark-plugin.test.ts**

```typescript
it("sets personSlug from directive person attribute for events", () => {
  const index = getAdviceIndex();
  const eventAdvice = index.filter((a) => a.eventSlug !== null);
  expect(eventAdvice.length).toBeGreaterThan(0);
  for (const entry of eventAdvice) {
    expect(entry.personSlug).not.toBe("unknown");
    expect(entry.personSlug.length).toBeGreaterThan(0);
  }
});

it("event advice and journey advice are mutually exclusive", () => {
  const index = getAdviceIndex();
  for (const entry of index) {
    if (entry.journeySlug !== null) {
      expect(entry.eventSlug).toBeNull();
    }
    if (entry.eventSlug !== null) {
      expect(entry.journeySlug).toBeNull();
    }
  }
});
```

**Step 3: Run tests**

Run: `npx vitest run`
Expected: PASS (all tests)

**Step 4: Commit**

```bash
git add tests/
git commit -m "test: add event advice tests"
```

---

### Task 5: Create EventCard component and events pages

**Files:**
- Create: `src/components/EventCard.astro`
- Create: `src/pages/events/index.astro`
- Create: `src/pages/events/[slug].astro`

**Step 1: Create EventCard component**

Create `src/components/EventCard.astro`:

```astro
---
interface Props {
  event: {
    slug: string;
    title: string;
    subtitle: string;
    date: Date;
    location: string;
  };
  presenters: { name: string; avatar: string }[];
  adviceCount: number;
}

const { event, presenters, adviceCount } = Astro.props;

const formattedDate = event.date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
---

<a href={`/events/${event.slug}`}
   class="group block rounded-xl border border-border/80 bg-card p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 transition-all duration-300">
  <div class="flex items-center gap-2 mb-4">
    <div class="flex -space-x-2">
      {presenters.map((p) => (
        <span class="text-2xl" title={p.name}>{p.avatar}</span>
      ))}
    </div>
    <div class="ml-2">
      <p class="text-xs text-muted-foreground">{formattedDate}</p>
      <p class="text-xs text-muted-foreground">{event.location}</p>
    </div>
  </div>
  <h3 class="font-display text-xl text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
    {event.title}
  </h3>
  <p class="text-sm text-muted-foreground leading-relaxed mb-3">
    {event.subtitle}
  </p>
  <div class="flex items-center gap-2">
    <span class="text-xs text-primary font-medium">
      {adviceCount} tips extracted
    </span>
    <span class="text-muted-foreground/40">&middot;</span>
    <span class="text-xs text-muted-foreground">
      {presenters.length} presenters
    </span>
  </div>
</a>
```

**Step 2: Create events index page**

Create `src/pages/events/index.astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import EventCard from '../../components/EventCard.astro';
import { getCollection, getEntry } from 'astro:content';
import { getAdviceForEvent } from '../../lib/advice';

const events = await getCollection('events');

const eventsWithData = await Promise.all(
  events.map(async (e) => {
    const presenters = await Promise.all(
      e.data.presenters.map(async (slug: string) => {
        const person = await getEntry('people', slug);
        return person!.data;
      })
    );
    const adviceCount = getAdviceForEvent(e.id).length;
    return { event: e, presenters, adviceCount };
  })
);
---
<Base title="Events | indie.md" description="Recaps from our IRL meetups. Real conversations, real advice.">
  <section class="container mx-auto px-4 pt-16 pb-8 md:pt-20">
    <div class="max-w-2xl">
      <h1 class="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground mb-4">
        Events
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed">
        Recaps from our IRL meetups. Every event captures real conversations, real feedback, and actionable advice from the community.
      </p>
    </div>
  </section>

  <section class="container mx-auto px-4 pb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      {eventsWithData.map(({ event, presenters, adviceCount }) => (
        <EventCard
          event={{ slug: event.id, ...event.data }}
          presenters={presenters}
          adviceCount={adviceCount}
        />
      ))}
    </div>
  </section>
</Base>
```

**Step 3: Create event detail page**

Create `src/pages/events/[slug].astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import CategoryBadge from '../../components/CategoryBadge.astro';
import { getCollection, getEntry, render } from 'astro:content';
import { getAdviceForEvent, getAllCategories } from '../../lib/advice';

export async function getStaticPaths() {
  const events = await getCollection('events');
  return events.map((e) => ({
    params: { slug: e.id },
    props: { event: e },
  }));
}

const { event } = Astro.props;
const adviceList = getAdviceForEvent(event.id);
const categories = getAllCategories();
const categoryMap = new Map(categories.map(c => [c.slug, c]));

const presenters = await Promise.all(
  event.data.presenters.map(async (slug: string) => {
    const person = await getEntry('people', slug);
    return person!;
  })
);

const { Content } = await render(event);

const formattedDate = event.data.date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
---
<Base title={`${event.data.title} | indie.md`} description={event.data.subtitle}>
  <article class="container mx-auto px-4 pt-16 pb-20 md:pt-20">
    <!-- Back link -->
    <a href="/events" class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      All events
    </a>

    <!-- Event header -->
    <div class="mb-8">
      <p class="text-sm text-muted-foreground mb-2">{formattedDate} &middot; {event.data.location}</p>
      <h1 class="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground mb-3">
        {event.data.title}
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {event.data.subtitle}
      </p>
    </div>

    <!-- Presenters -->
    <div class="flex flex-wrap gap-3 mb-10">
      {presenters.map((p) => (
        <a href={`/people/${p.id}`}
           class="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/60 bg-card hover:border-primary/30 transition-all">
          <span class="text-xl">{p.data.avatar}</span>
          <span class="text-sm font-medium text-foreground">{p.data.name}</span>
        </a>
      ))}
    </div>

    <!-- Event content -->
    <div class="prose prose-lg max-w-2xl
      prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-strong:text-foreground
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-li:text-muted-foreground
      prose-blockquote:border-primary/40 prose-blockquote:text-muted-foreground">
      <Content />
    </div>

    <!-- Advice extracted from this event -->
    {adviceList.length > 0 && (
      <div class="mt-16 max-w-2xl">
        <h2 class="font-display text-2xl text-foreground mb-6">
          Advice from this event
        </h2>
        <div class="space-y-3">
          {adviceList.map((a) => {
            const cat = categoryMap.get(a.category);
            return (
              <a href={`/advice/${a.slug}`}
                 class="group flex items-start gap-4 rounded-xl border border-border/80 bg-card p-5 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    {cat && (
                      <CategoryBadge category={cat.slug} label={cat.label} icon={cat.icon} />
                    )}
                  </div>
                  <h3 class="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p class="text-sm text-muted-foreground mt-1 line-clamp-2">{a.content}</p>
                </div>
                <span class="text-muted-foreground group-hover:text-primary transition-colors mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    )}
  </article>
</Base>
```

**Step 4: Build and verify**

Run: `npm run build`
Expected: new event pages appear in the build output

**Step 5: Commit**

```bash
git add src/components/EventCard.astro src/pages/events/
git commit -m "feat: add events index and detail pages"
```

---

### Task 6: Add events to navigation, homepage, person pages, and advice source links

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/people/[slug].astro`
- Modify: `src/pages/advice/[...slug].astro`

**Step 1: Add Events link to Header nav**

In `src/components/Header.astro`, add after the Advice link (line 14):

```html
<a href="/events" class="text-foreground/70 hover:text-foreground transition-colors">Events</a>
```

**Step 2: Add Events link to Footer**

In `src/components/Footer.astro`, add in the Explore list after "Product Tips":

```html
<li><a href="/events" class="hover:text-foreground transition-colors">Events</a></li>
```

**Step 3: Add Events section to homepage**

In `src/pages/index.astro`, add an Events section after the Journeys section. Import EventCard, getCollection('events'), and getAdviceForEvent. Show events in a grid with EventCard component.

**Step 4: Show events on person pages**

In `src/pages/people/[slug].astro`, query events where the person is in the presenters list. Show them in a section between Journeys and Advice.

**Step 5: Update advice detail source link**

In `src/pages/advice/[...slug].astro`, the "Extracted from" source link currently only handles journeys. Add logic: if `advice.eventSlug` is set, link to `/events/{eventSlug}` instead.

**Step 6: Build and verify**

Run: `npm run check`
Expected: full quality gate passes

**Step 7: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro src/pages/index.astro src/pages/people/\[slug\].astro src/pages/advice/\[...slug\].astro
git commit -m "feat: wire events into navigation, homepage, person pages, and advice links"
```

---

### Task 7: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update content model section**

Change the content model diagram to:

```
Person -> Journey (1:many) -> Advice (embedded via :::advice directives)
Person -> Event (many:many) -> Advice (embedded via :::advice with person attribute)
```

**Step 2: Update "Adding Content" section**

Add event instructions:

```
4. Add an event: create `src/content/events/{slug}.md` with title, subtitle, date, location, presenters frontmatter and markdown body
5. In events, each :::advice directive requires a person="slug" attribute to identify the presenter
```

**Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with events content type"
```
