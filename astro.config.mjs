import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkExtractAdvice from "./src/plugins/remark-extract-advice.ts";

export default defineConfig({
  site: process.env.CI ? "https://indie-tm.github.io" : "http://localhost:4321",
  base: process.env.CI ? "/indie.md" : "/",
  integrations: [
    sitemap(),
    tailwind({
      configFile: "./tailwind.config.ts",
    }),
  ],
  output: "static",
  markdown: {
    remarkPlugins: [remarkDirective, remarkExtractAdvice],
  },
});
