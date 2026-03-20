import { describe, expect, it } from "vitest";
import {
  getAdviceByCategory,
  getAdviceBySlug,
  getAdviceForEvent,
  getAdviceForJourney,
  getAdviceIndex,
  getAllCategories,
} from "../src/lib/advice";

describe("advice helpers", () => {
  describe("getAdviceIndex", () => {
    it("returns all advice entries", () => {
      const index = getAdviceIndex();
      expect(index.length).toBeGreaterThan(0);
    });

    it("each entry has required fields", () => {
      const index = getAdviceIndex();
      for (const entry of index) {
        expect(entry.slug).toBeTruthy();
        expect(entry.category).toBeTruthy();
        expect(entry.title).toBeTruthy();
        expect(entry.content).toBeTruthy();
        expect(entry.personSlug).toBeTruthy();
        // journeySlug or eventSlug must be set (not both)
        const hasJourney = typeof entry.journeySlug === "string";
        const hasEvent = typeof entry.eventSlug === "string";
        expect(hasJourney || hasEvent).toBe(true);
      }
    });
  });

  describe("getAdviceBySlug", () => {
    it("finds an existing advice entry", () => {
      const entry = getAdviceBySlug("mindset-stop-polishing");
      expect(entry).toBeDefined();
      expect(entry?.title).toBe("Stop polishing code, start finding customers");
      expect(entry?.category).toBe("mindset");
    });

    it("returns undefined for non-existent slug", () => {
      const entry = getAdviceBySlug("does-not-exist");
      expect(entry).toBeUndefined();
    });
  });

  describe("getAdviceByCategory", () => {
    it("filters by category", () => {
      const seoAdvice = getAdviceByCategory("seo");
      expect(seoAdvice.length).toBeGreaterThan(0);
      for (const entry of seoAdvice) {
        expect(entry.category).toBe("seo");
      }
    });

    it("returns empty array for unknown category", () => {
      const result = getAdviceByCategory("nonexistent");
      expect(result).toEqual([]);
    });
  });

  describe("getAdviceForJourney", () => {
    it("returns advice for a specific journey", () => {
      const advice = getAdviceForJourney("vlad-sisif-ai");
      expect(advice.length).toBeGreaterThan(0);
      for (const entry of advice) {
        expect(entry.journeySlug).toBe("vlad-sisif-ai");
      }
    });

    it("returns empty array for unknown journey", () => {
      const result = getAdviceForJourney("nonexistent-journey");
      expect(result).toEqual([]);
    });
  });

  describe("getAllCategories", () => {
    it("returns all 5 categories", () => {
      const categories = getAllCategories();
      expect(categories).toHaveLength(5);
    });

    it("each category has required fields", () => {
      const categories = getAllCategories();
      for (const cat of categories) {
        expect(cat.slug).toBeTruthy();
        expect(cat.label).toBeTruthy();
        expect(cat.icon).toBeTruthy();
        expect(typeof cat.count).toBe("number");
      }
    });

    it("includes known categories", () => {
      const categories = getAllCategories();
      const slugs = categories.map((c) => c.slug);
      expect(slugs).toContain("seo");
      expect(slugs).toContain("distribution");
      expect(slugs).toContain("product");
      expect(slugs).toContain("business");
      expect(slugs).toContain("mindset");
    });

    it("counts match actual entries", () => {
      const categories = getAllCategories();
      const index = getAdviceIndex();
      for (const cat of categories) {
        const actualCount = index.filter((a) => a.category === cat.slug).length;
        expect(cat.count).toBe(actualCount);
      }
    });
  });

  describe("getAdviceForEvent", () => {
    it("is exported as a function", () => {
      expect(typeof getAdviceForEvent).toBe("function");
    });

    it("returns advice for a specific event", () => {
      const advice = getAdviceForEvent("indie-tm-5-timisoara-march-2026");
      expect(advice.length).toBeGreaterThan(0);
      for (const entry of advice) {
        expect(entry.eventSlug).toBe("indie-tm-5-timisoara-march-2026");
        expect(entry.journeySlug).toBeNull();
      }
    });

    it("returns empty array for unknown event", () => {
      const result = getAdviceForEvent("nonexistent-event");
      expect(result).toEqual([]);
    });
  });

  describe("no slug collisions with category slugs", () => {
    it("advice slugs do not collide with category names", () => {
      const categories = getAllCategories();
      const categorySlugs = new Set(categories.map((c) => c.slug));
      const index = getAdviceIndex();
      for (const entry of index) {
        expect(categorySlugs.has(entry.slug)).toBe(false);
      }
    });
  });
});
