import { getCollection, getEntry } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { eventToMarkdown } from "../../lib/markdown-view";

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getCollection("events");
  return events.map((event) => ({ params: { slug: event.id } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response("Not found", { status: 404 });
  const event = await getEntry("events", slug);
  if (!event) return new Response("Not found", { status: 404 });
  const body = await eventToMarkdown(event);
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
