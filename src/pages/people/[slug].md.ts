import { getCollection, getEntry } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { getAdviceIndex } from "../../lib/advice";
import { personToMarkdown } from "../../lib/markdown-view";

export const getStaticPaths: GetStaticPaths = async () => {
  const people = await getCollection("people");
  return people.map((person) => ({ params: { slug: person.id } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response("Not found", { status: 404 });
  const person = await getEntry("people", slug);
  if (!person) return new Response("Not found", { status: 404 });
  const [journeys, events] = await Promise.all([
    getCollection("journeys"),
    getCollection("events"),
  ]);
  const advice = getAdviceIndex().filter((a) => a.personSlug === person.id);
  const body = personToMarkdown(person, journeys, events, advice);
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
