import { getCollection, getEntry } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { journeyToMarkdown } from "../../lib/markdown-view";

export const getStaticPaths: GetStaticPaths = async () => {
  const journeys = await getCollection("journeys");
  return journeys.map((journey) => ({ params: { slug: journey.id } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response("Not found", { status: 404 });
  const journey = await getEntry("journeys", slug);
  if (!journey) return new Response("Not found", { status: 404 });
  const person = await getEntry("people", journey.data.person);
  if (!person) return new Response("Not found", { status: 404 });
  const body = journeyToMarkdown(journey, person);
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
