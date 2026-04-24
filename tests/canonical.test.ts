import { describe, expect, it } from "vitest";
import { canonicalUrl, SITE_URL } from "../src/lib/canonical";

describe("canonicalUrl", () => {
  it("adds a trailing slash to paths without one", () => {
    expect(canonicalUrl("/advice/foo")).toBe("https://indie.md/advice/foo/");
  });

  it("keeps a single trailing slash when the path already has one", () => {
    expect(canonicalUrl("/advice/foo/")).toBe("https://indie.md/advice/foo/");
  });

  it("collapses multiple trailing slashes to one", () => {
    expect(canonicalUrl("/advice/foo///")).toBe("https://indie.md/advice/foo/");
  });

  it("returns the bare site URL with slash for the home path", () => {
    expect(canonicalUrl("/")).toBe("https://indie.md/");
    expect(canonicalUrl("")).toBe("https://indie.md/");
  });

  it("exports the site origin", () => {
    expect(SITE_URL).toBe("https://indie.md");
  });
});
