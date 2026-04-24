import { describe, expect, it } from "vitest";
import { buildPersonSameAs } from "../src/lib/person-sameas";

describe("buildPersonSameAs", () => {
  it("expands shorthand handles into canonical URLs", () => {
    const result = buildPersonSameAs({
      twitter: "@vtemian",
      github: "vtemian",
      linkedin: "vladtemian",
      website: "https://sisif.ai",
    });
    expect(result).toContain("https://x.com/vtemian");
    expect(result).toContain("https://github.com/vtemian");
    expect(result).toContain("https://www.linkedin.com/in/vladtemian");
    expect(result).toContain("https://sisif.ai");
  });

  it("keeps explicit sameAs URLs as-is", () => {
    const result = buildPersonSameAs({
      sameAs: ["https://example.com/profile"],
    });
    expect(result).toEqual(["https://example.com/profile"]);
  });

  it("preserves LinkedIn full URLs when provided", () => {
    const result = buildPersonSameAs({
      linkedin: "https://www.linkedin.com/in/someone-custom-path",
    });
    expect(result).toEqual(["https://www.linkedin.com/in/someone-custom-path"]);
  });

  it("falls back to the first product URL when no profiles exist", () => {
    const result = buildPersonSameAs({
      products: [{ url: "https://first-product.com" }, { url: "https://second-product.com" }],
    });
    expect(result).toEqual(["https://first-product.com"]);
  });

  it("returns an empty list when nothing is available", () => {
    expect(buildPersonSameAs({})).toEqual([]);
  });

  it("de-duplicates repeated URLs", () => {
    const result = buildPersonSameAs({
      twitter: "@v",
      sameAs: ["https://x.com/v"],
    });
    expect(result).toEqual(["https://x.com/v"]);
  });
});
