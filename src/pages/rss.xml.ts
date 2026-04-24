import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAdviceForEvent, getAdviceForJourney } from "../lib/advice";
import { canonicalUrl } from "../lib/canonical";
import { summarize } from "../lib/summarize";

type FeedItem = {
  title: string;
  description: string;
  pubDate: Date;
  link: string;
  categories: string[];
};

export async function GET(context: APIContext) {
  const [journeys, events] = await Promise.all([
    getCollection("journeys"),
    getCollection("events"),
  ]);

  const items: FeedItem[] = [
    ...journeys.map((journey) => {
      const adviceCount = getAdviceForJourney(journey.id).length;
      const suffix = adviceCount > 0 ? ` Extracts ${adviceCount} tips.` : "";
      return {
        title: journey.data.title,
        description: summarize(`${journey.data.subtitle}${suffix}`, 280),
        pubDate: journey.data.date,
        link: canonicalUrl(`/journeys/${journey.id}`),
        categories: ["journey"],
      };
    }),
    ...events.map((event) => {
      const adviceCount = getAdviceForEvent(event.id).length;
      const suffix = adviceCount > 0 ? ` ${adviceCount} pieces of advice extracted.` : "";
      return {
        title: event.data.title,
        description: summarize(`${event.data.subtitle}${suffix}`, 280),
        pubDate: event.data.date,
        link: canonicalUrl(`/events/${event.id}`),
        categories: ["event"],
      };
    }),
  ];

  items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "indie.md",
    description: "Real stories, hard-won lessons, and practical advice from indie hackers.",
    site: context.site ?? "https://indie.md",
    items,
    customData: "<language>en-us</language>",
  });
}
