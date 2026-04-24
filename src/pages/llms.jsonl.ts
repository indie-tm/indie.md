import { getCollection, getEntry } from "astro:content";
import type { APIRoute } from "astro";
import { type AdviceEntry, getAdviceIndex } from "../lib/advice";
import { canonicalUrl, SITE_URL } from "../lib/canonical";

// One JSON object per line so this file can be fed directly into
// langchain JSONLoader, llamaIndex JSONLReader, OpenAI Files API, Pinecone,
// Weaviate, or pgvector. Schema is stable across deploys; `id` is the
// primary key.

type BaseDocument = {
  id: string;
  type: "journey" | "event" | "person" | "advice";
  url: string;
  markdown_url: string;
  title: string;
  description: string;
  content: string;
};

type JourneyDocument = BaseDocument & {
  type: "journey";
  author: string;
  author_url: string;
  published: string;
  lessons: string[];
};

type EventDocument = BaseDocument & {
  type: "event";
  location: string;
  presenters: string[];
  presenter_urls: string[];
  event_link: string | null;
  published: string;
};

type PersonDocument = BaseDocument & {
  type: "person";
  role: string | null;
  tagline: string;
  website: string | null;
  products: { name: string; url: string }[];
};

type AdviceDocument = BaseDocument & {
  type: "advice";
  category: string;
  author: string;
  author_url: string;
  source_url: string | null;
  source_type: "journey" | "event" | null;
};

type Document = JourneyDocument | EventDocument | PersonDocument | AdviceDocument;

function mdUrl(path: string): string {
  return `${SITE_URL}${path.replace(/\/+$/, "")}.md`;
}

function truncate(text: string, max = 280): string {
  const trimmed = text.trim();
  return trimmed.length <= max ? trimmed : `${trimmed.slice(0, max - 1)}…`;
}

export const GET: APIRoute = async () => {
  const [journeys, events, people] = await Promise.all([
    getCollection("journeys"),
    getCollection("events"),
    getCollection("people"),
  ]);
  const adviceIndex = getAdviceIndex();

  const documents: Document[] = [];

  for (const journey of journeys) {
    const person = await getEntry("people", journey.data.person);
    if (!person) continue;
    documents.push({
      id: `journey/${journey.id}`,
      type: "journey",
      url: canonicalUrl(`/journeys/${journey.id}`),
      markdown_url: mdUrl(`/journeys/${journey.id}`),
      title: journey.data.title,
      description: journey.data.subtitle,
      content: journey.body ?? "",
      author: person.data.name,
      author_url: canonicalUrl(`/people/${person.id}`),
      published: journey.data.date.toISOString().slice(0, 10),
      lessons: journey.data.lessons,
    });
  }

  for (const event of events) {
    const presenterEntries = await Promise.all(
      event.data.presenters.map((slug) => getEntry("people", slug)),
    );
    const presenterPeople = presenterEntries.filter((p): p is NonNullable<typeof p> => Boolean(p));
    documents.push({
      id: `event/${event.id}`,
      type: "event",
      url: canonicalUrl(`/events/${event.id}`),
      markdown_url: mdUrl(`/events/${event.id}`),
      title: event.data.title,
      description: event.data.subtitle,
      content: event.body ?? "",
      location: event.data.location,
      presenters: presenterPeople.map((p) => p.data.name),
      presenter_urls: presenterPeople.map((p) => canonicalUrl(`/people/${p.id}`)),
      event_link: event.data.link ?? null,
      published: event.data.date.toISOString().slice(0, 10),
    });
  }

  for (const person of people) {
    documents.push({
      id: `person/${person.id}`,
      type: "person",
      url: canonicalUrl(`/people/${person.id}`),
      markdown_url: mdUrl(`/people/${person.id}`),
      title: person.data.name,
      description: person.data.tagline,
      content: person.data.bio,
      role: person.data.role ?? null,
      tagline: person.data.tagline,
      website: person.data.website ?? null,
      products: person.data.products ?? [],
    });
  }

  for (const advice of adviceIndex) {
    const person = await getEntry("people", advice.personSlug);
    const doc = buildAdviceDocument(advice, person?.data.name ?? advice.personSlug);
    documents.push(doc);
  }

  const body = documents.map((d) => JSON.stringify(d)).join("\n");
  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

function buildAdviceDocument(advice: AdviceEntry, authorName: string): AdviceDocument {
  const sourceType: AdviceDocument["source_type"] = advice.eventSlug
    ? "event"
    : advice.journeySlug
      ? "journey"
      : null;
  const sourceSlug = advice.eventSlug ?? advice.journeySlug;
  const sourceUrl = sourceSlug && sourceType ? canonicalUrl(`/${sourceType}s/${sourceSlug}`) : null;
  return {
    id: `advice/${advice.slug}`,
    type: "advice",
    url: canonicalUrl(`/advice/${advice.slug}`),
    markdown_url: mdUrl(`/advice/${advice.slug}`),
    title: advice.title,
    description: truncate(advice.content),
    content: advice.content,
    category: advice.category,
    author: authorName,
    author_url: canonicalUrl(`/people/${advice.personSlug}`),
    source_url: sourceUrl,
    source_type: sourceType,
  };
}
