import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import { type AdviceEntry, getAdviceIndex } from "./advice";
import { canonicalUrl, SITE_URL } from "./canonical";

type JourneyEntry = CollectionEntry<"journeys">;
type EventEntry = CollectionEntry<"events">;
type PersonEntry = CollectionEntry<"people">;

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Markdown twin of a given path lives at `<SITE>/<path>.md` with no
// trailing slash, matching what Astro writes to disk for the `[slug].md.ts`
// endpoints under src/pages.
function markdownUrl(path: string): string {
  const clean = path.replace(/\/+$/, "");
  return `${SITE_URL}${clean}.md`;
}

function stripAdviceDirectives(body: string): string {
  // Keep the prose inside `:::advice{...}` blocks but drop the directive
  // wrapper so the mirror reads as a standalone document. Agents that want
  // the structured form can fetch `/advice/<slug>.md` instead.
  return body
    .replace(/:::advice\{[^}]*\}\s*([\s\S]*?):::/g, (_, inner: string) => inner.trim())
    .replace(/\n{3,}/g, "\n\n");
}

export function journeyToMarkdown(journey: JourneyEntry, person: PersonEntry): string {
  const url = canonicalUrl(`/journeys/${journey.id}`);
  const lines: string[] = [
    `# ${journey.data.title}`,
    "",
    `> ${journey.data.subtitle}`,
    "",
    `- Author: ${person.data.name} (${canonicalUrl(`/people/${person.id}`)})`,
    `- Published: ${formatDate(journey.data.date)}`,
    `- Canonical URL: ${url}`,
    "",
  ];
  if (journey.data.lessons.length > 0) {
    lines.push("## Key lessons", "");
    for (const lesson of journey.data.lessons) lines.push(`- ${lesson}`);
    lines.push("");
  }
  lines.push(stripAdviceDirectives(journey.body ?? ""));
  return `${lines.join("\n").trim()}\n`;
}

export async function eventToMarkdown(event: EventEntry): Promise<string> {
  const url = canonicalUrl(`/events/${event.id}`);
  const presenters = await Promise.all(
    event.data.presenters.map(async (slug) => {
      const person = await getEntry("people", slug);
      return person?.data.name ?? slug;
    }),
  );
  const lines: string[] = [
    `# ${event.data.title}`,
    "",
    `> ${event.data.subtitle}`,
    "",
    `- Date: ${formatDate(event.data.date)}`,
    `- Location: ${event.data.location}`,
    `- Presenters: ${presenters.join(", ")}`,
    `- Canonical URL: ${url}`,
  ];
  if (event.data.link) lines.push(`- Event link: ${event.data.link}`);
  lines.push("", stripAdviceDirectives(event.body ?? ""));
  return `${lines.join("\n").trim()}\n`;
}

export function personToMarkdown(
  person: PersonEntry,
  journeys: JourneyEntry[],
  events: EventEntry[],
  advice: AdviceEntry[],
): string {
  const url = canonicalUrl(`/people/${person.id}`);
  const lines: string[] = [
    `# ${person.data.name}`,
    "",
    `> ${person.data.tagline}`,
    "",
    `- Canonical URL: ${url}`,
  ];
  if (person.data.products && person.data.products.length > 0) {
    lines.push(`- Products: ${person.data.products.map((p) => `${p.name} (${p.url})`).join(", ")}`);
  }
  if (person.data.twitter) {
    lines.push(`- X: https://x.com/${person.data.twitter.replace(/^@/, "")}`);
  }
  if (person.data.github) {
    lines.push(`- GitHub: https://github.com/${person.data.github.replace(/^@/, "")}`);
  }
  if (person.data.website) lines.push(`- Website: ${person.data.website}`);
  lines.push("", "## Bio", "", person.data.bio, "");

  const personJourneys = journeys.filter((j) => j.data.person === person.id);
  if (personJourneys.length > 0) {
    lines.push("## Journeys", "");
    for (const j of personJourneys) {
      lines.push(`- [${j.data.title}](${canonicalUrl(`/journeys/${j.id}`)}): ${j.data.subtitle}`);
    }
    lines.push("");
  }

  const personEvents = events.filter((e) => e.data.presenters.includes(person.id));
  if (personEvents.length > 0) {
    lines.push("## Events", "");
    for (const e of personEvents) {
      lines.push(
        `- [${e.data.title}](${canonicalUrl(`/events/${e.id}`)}): ${formatDate(e.data.date)}`,
      );
    }
    lines.push("");
  }

  if (advice.length > 0) {
    lines.push("## Advice", "");
    for (const a of advice) {
      lines.push(
        `### ${a.title}`,
        "",
        a.content,
        "",
        `Source: ${canonicalUrl(`/advice/${a.slug}`)}`,
        "",
      );
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

export async function adviceToMarkdown(advice: AdviceEntry): Promise<string> {
  const person = await getEntry("people", advice.personSlug);
  const sourceKind = advice.eventSlug ? "events" : "journeys";
  const sourceSlug = advice.eventSlug ?? advice.journeySlug;
  const sourceUrl = sourceSlug ? canonicalUrl(`/${sourceKind}/${sourceSlug}`) : undefined;

  const authorLabel = person
    ? `${person.data.name} (${canonicalUrl(`/people/${person.id}`)})`
    : advice.personSlug;

  const lines: string[] = [
    `# ${advice.title}`,
    "",
    `- Category: ${advice.category}`,
    `- Author: ${authorLabel}`,
  ];
  if (sourceUrl) lines.push(`- Source: ${sourceUrl}`);
  lines.push(`- Canonical URL: ${canonicalUrl(`/advice/${advice.slug}`)}`);
  lines.push("", advice.content);
  return `${lines.join("\n").trim()}\n`;
}

export async function siteIndexMarkdown(): Promise<string> {
  const [journeys, events, people] = await Promise.all([
    getCollection("journeys"),
    getCollection("events"),
    getCollection("people"),
  ]);

  journeys.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  events.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const lines: string[] = [
    "# indie.md",
    "",
    "> A knowledge platform for indie hackers: real stories, extractable advice. Every piece of advice is attributed to a named founder and sourced from a specific journey or IRL meetup.",
    "",
    "## About",
    "",
    "- Canonical domain: https://indie.md/",
    "- Every HTML page has a Markdown twin at the same URL with a `.md` suffix (for example `/advice/discover-the-enterprise-budget.md`).",
    "- Full concatenated corpus for LLM ingestion: https://indie.md/llms-full.txt",
    "- RSS feed: https://indie.md/rss.xml",
    "- Sitemap: https://indie.md/sitemap-index.xml",
    "",
    "## Journeys",
    "",
  ];
  for (const j of journeys) {
    lines.push(`- [${j.data.title}](${markdownUrl(`/journeys/${j.id}`)}): ${j.data.subtitle}`);
  }

  lines.push("", "## Events", "");
  for (const e of events) {
    lines.push(
      `- [${e.data.title}](${markdownUrl(`/events/${e.id}`)}): ${e.data.subtitle} (${formatDate(e.data.date)})`,
    );
  }

  lines.push("", "## People", "");
  for (const p of people) {
    lines.push(`- [${p.data.name}](${markdownUrl(`/people/${p.id}`)}): ${p.data.tagline}`);
  }

  return `${lines.join("\n")}\n`;
}

export async function fullCorpusMarkdown(): Promise<string> {
  const [journeys, events, people] = await Promise.all([
    getCollection("journeys"),
    getCollection("events"),
    getCollection("people"),
  ]);
  const index = getAdviceIndex();
  const sections: string[] = [
    "# indie.md (full corpus)",
    "",
    "> Every journey, event, and founder profile concatenated with attribution headers. Generated at build time. Individual pages also expose a Markdown twin at `<canonical-url>.md`.",
    "",
    "## Journeys",
    "",
  ];

  for (const j of journeys) {
    const person = await getEntry("people", j.data.person);
    if (!person) continue;
    sections.push(journeyToMarkdown(j, person));
    sections.push("---");
  }

  sections.push("## Events", "");
  for (const e of events) {
    sections.push(await eventToMarkdown(e));
    sections.push("---");
  }

  sections.push("## People", "");
  for (const p of people) {
    const advice = index.filter((a) => a.personSlug === p.id);
    sections.push(personToMarkdown(p, journeys, events, advice));
    sections.push("---");
  }

  return `${sections.join("\n\n")}\n`;
}
