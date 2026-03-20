import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkExtractAdvice from "./src/plugins/remark-extract-advice.ts";

export default defineConfig({
  integrations: [
    tailwind({
      configFile: "./tailwind.config.ts",
    }),
  ],
  output: "static",
  markdown: {
    remarkPlugins: [remarkDirective, remarkExtractAdvice],
  },
});
