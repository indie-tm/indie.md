import fs from "node:fs";
import path from "node:path";

export interface AdviceEntry {
  slug: string;
  category: string;
  title: string;
  content: string;
  journeySlug: string;
  personSlug: string;
}

export interface CategoryMeta {
  slug: string;
  label: string;
  icon: string;
  count: number;
}

const CATEGORY_META: Record<string, { label: string; icon: string }> = {
  seo: { label: "SEO", icon: "\uD83D\uDD0D" },
  distribution: { label: "Distribution", icon: "\uD83D\uDCE1" },
  product: { label: "Product", icon: "\uD83C\uDFAF" },
  business: { label: "Business & Legal", icon: "\uD83D\uDCCB" },
  mindset: { label: "Mindset", icon: "\uD83E\uDDE0" },
};

const INDEX_PATH = path.resolve("src/generated/advice-index.json");

function readIndex(): AdviceEntry[] {
  try {
    const raw = fs.readFileSync(INDEX_PATH, "utf-8");
    return JSON.parse(raw) as AdviceEntry[];
  } catch {
    return [];
  }
}

export function getAdviceIndex(): AdviceEntry[] {
  return readIndex();
}

export function getAdviceBySlug(slug: string): AdviceEntry | undefined {
  return readIndex().find((a) => a.slug === slug);
}

export function getAdviceByCategory(category: string): AdviceEntry[] {
  return readIndex().filter((a) => a.category === category);
}

export function getAdviceForJourney(journeySlug: string): AdviceEntry[] {
  return readIndex().filter((a) => a.journeySlug === journeySlug);
}

export function getAllCategories(): CategoryMeta[] {
  const entries = readIndex();
  const counts = new Map<string, number>();

  for (const entry of entries) {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  }

  return Object.entries(CATEGORY_META).map(([slug, meta]) => ({
    slug,
    label: meta.label,
    icon: meta.icon,
    count: counts.get(slug) ?? 0,
  }));
}
