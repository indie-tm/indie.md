import type { APIRoute, GetStaticPaths } from "astro";
import { getAdviceBySlug, getAdviceIndex } from "../../lib/advice";
import { adviceToMarkdown } from "../../lib/markdown-view";

export const getStaticPaths: GetStaticPaths = async () => {
  return getAdviceIndex().map((advice) => ({ params: { slug: advice.slug } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response("Not found", { status: 404 });
  const advice = getAdviceBySlug(slug);
  if (!advice) return new Response("Not found", { status: 404 });
  const body = await adviceToMarkdown(advice);
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
