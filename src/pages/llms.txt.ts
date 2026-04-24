import type { APIRoute } from "astro";
import { siteIndexMarkdown } from "../lib/markdown-view";

export const GET: APIRoute = async () => {
  const body = await siteIndexMarkdown();
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
