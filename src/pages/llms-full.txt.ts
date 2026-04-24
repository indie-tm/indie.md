import type { APIRoute } from "astro";
import { fullCorpusMarkdown } from "../lib/markdown-view";

export const GET: APIRoute = async () => {
  const body = await fullCorpusMarkdown();
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
