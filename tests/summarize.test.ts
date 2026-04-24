import { describe, expect, it } from "vitest";
import { summarize } from "../src/lib/summarize";

describe("summarize", () => {
  it("returns the input unchanged when short enough", () => {
    expect(summarize("Short enough.", 40)).toBe("Short enough.");
  });

  it("prefers a sentence boundary when one sits in the back half of the window", () => {
    const input =
      "First sentence ends here. Second sentence keeps going and going and going until forever.";
    expect(summarize(input, 40)).toBe("First sentence ends here.");
  });

  it("falls back to a word boundary with an ellipsis when no sentence fits", () => {
    const input = "reallylongfirstphrasewithnospacesbutthenasecondpartthatfollows";
    const result = summarize(input, 40);
    expect(result.endsWith("…")).toBe(true);
    expect(result.length).toBeLessThanOrEqual(41);
    expect(result.endsWith(" …")).toBe(false);
  });

  it("does not cut a word in the middle when a space is available", () => {
    const input = "How do you price on-prem deployments for a security tool?";
    const out = summarize(input, 25);
    expect(out).toBe("How do you price on-prem…");
  });

  it("only hard-cuts when the whole window has no spaces", () => {
    const input = "abcdefghijabcdefghijabcdefghij";
    const out = summarize(input, 10);
    expect(out.length).toBeLessThanOrEqual(11);
    expect(out.endsWith("…")).toBe(true);
  });
});
