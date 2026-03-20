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

  it("sets personSlug from directive person attribute for events", () => {
    const index = getAdviceIndex();
    const eventAdvice = index.filter((a) => a.eventSlug !== null);
    expect(eventAdvice.length).toBeGreaterThan(0);
    for (const entry of eventAdvice) {
      expect(entry.personSlug).not.toBe("unknown");
      expect(entry.personSlug.length).toBeGreaterThan(0);
    }
  });

  it("event advice and journey advice are mutually exclusive", () => {
    const index = getAdviceIndex();
    for (const entry of index) {
      if (entry.journeySlug !== null) {
        expect(entry.eventSlug).toBeNull();
      }
      if (entry.eventSlug !== null) {
        expect(entry.journeySlug).toBeNull();
      }
    }
  });
});
