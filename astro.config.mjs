import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkExtractAdvice from "./src/plugins/remark-extract-advice.ts";

export default defineConfig({
  site: "https://indie.md",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkDirective, remarkExtractAdvice],
  },
});
