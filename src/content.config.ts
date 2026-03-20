import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/people" }),
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    tagline: z.string(),
    bio: z.string(),
  }),
});

const journeys = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/journeys" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    person: z.string(),
    date: z.coerce.date(),
    lessons: z.array(z.string()),
  }),
});

export const collections = { people, journeys };
