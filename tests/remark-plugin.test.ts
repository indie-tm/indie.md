import { describe, expect, it } from "vitest";
import { getAdviceIndex } from "../src/lib/advice";

describe("remark-extract-advice plugin", () => {
  it("sets journeySlug for journey-sourced advice", () => {
    const index = getAdviceIndex();
    const journeyAdvice = index.filter((a) => a.journeySlug !== null);
    expect(journeyAdvice.length).toBeGreaterThan(0);
    for (const entry of journeyAdvice) {
      expect(entry.eventSlug).toBeNull();
    }
  });
});
