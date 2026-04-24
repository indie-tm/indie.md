---
name: indie-seo
description: Use before drafting a blog post, launching a landing page, or writing an SEO plan. Synthesizes fourteen SEO lessons from indie founders who have grown products to meaningful organic traffic without a marketing team: check keyword demand before writing, publish one article per day, write for "how to" intent, ship FAQ schema on every page, build an internal link graph, ride news cycles, and republish on Medium and dev.to with canonical links. Do not use for technical SEO audits, paid search, or Core Web Vitals tuning.
---

# indie-seo

An organic-traffic playbook distilled from founders who ship content as a solo act. The goal is an agent that checks each draft against a concrete set of proven moves before it is published, not a theoretical SEO guide.

## When to use

- The user is drafting a blog post, landing page, or documentation page.
- The user is planning a content calendar or first 50 articles.
- The user is choosing what to write next.
- The user is debugging "I publish content and nothing ranks."

## When not to use

- Technical SEO audits (crawlability, rendering, Core Web Vitals) -- those are their own discipline.
- Paid search campaigns, ad copy, or keyword bidding.
- Link-building outreach when the content foundation is not there yet.

## Before writing: two non-negotiables

1. **Has keyword demand been validated?** If the page targets a query no one searches for, no amount of craft will save it. Run the keyword through any tool (Ahrefs, Semrush, Keyword Planner, even `site:reddit.com`) and confirm there is intent before a word is written.
   Source: Zoltan, <https://indie.md/advice/keyword-demand-before-features/>
2. **Is analytics wired?** Set up Plausible, Fathom, or GA4 and Search Console before content starts. Otherwise you will not know what worked.
   Source: Zoltan, <https://indie.md/advice/analytics-before-scaling/>

## The fourteen lessons

### Pick topics that convert

**Write for "how to" queries.** "How to" searchers are closer to a purchase than informational searchers. A post that teaches a specific task attached to your product captures purchase-intent traffic that transactional pages alone cannot.
Source: Mircea, <https://indie.md/advice/seo-how-to-queries/>

**Solve a real pain point.** Posts that solve a searcher's actual problem out-perform posts that describe your product. Map one pain point to one post, not the other way around.
Source: Raul, <https://indie.md/advice/seo-pain-point-content/>

**Write useful content before you have a product.** Publish the content first, measure what ranks, then let the traffic tell you what to build. Avoids wasting effort on features no one will pay for.
Source: Cristian Antohe, <https://indie.md/advice/content-before-product/>

### Publish at the right cadence

**One article per day beats batching.** Search engines reward consistent publishing. Daily frequency at modest length compounds faster than a monthly long-form push.
Source: Petru Popa, <https://indie.md/advice/publish-one-article-per-day/>

**High quality at low volume.** If daily is unrealistic, do not compensate with thin content. Ship one deeply useful piece a week; Google punishes volume-for-volume's-sake.
Source: Cristian Antohe, <https://indie.md/advice/high-quality-low-volume-content/>

### Structure every page for the crawler

**Internal links between every page.** Every new page links to at least three existing pages and is linked from at least two. Build the graph as you publish, not after.
Source: Mircea, <https://indie.md/advice/internal-linking-seo/>

**FAQPage schema on every page that can carry it.** FAQ schema wins featured snippets and AI Overview citations. Write three to five real questions per page, mark them up with `FAQPage` JSON-LD.
Source: Petru Popa, <https://indie.md/advice/faq-schema-markup/>

**Ship Careers, About, and team pages.** Trust signals lift every other page on the site. Google's quality raters look for real humans behind the content.
Source: Petru Popa, <https://indie.md/advice/trust-pages-careers-about/>

### Distribute the content you already wrote

**Republish on Medium and dev.to with canonical links.** Cross-posting with a `rel=canonical` back to your site preserves SEO attribution on your domain and puts the piece in front of audiences that will not find your blog organically.
Source: Zoltan, <https://indie.md/advice/canonical-links-medium-devto/>

**Create infographics for blog posts to earn backlinks.** Visuals are the most portable asset for outbound links. One good infographic per post, published with an embed code, pays back across months.
Source: Raul, <https://indie.md/advice/infographics-backlink-strategy/>

### Capture traffic, do not leak it

**Optimize for users not returning to search.** If visitors click your result and go straight back to Google, the rank erodes. Keep them on the page: deeper internal links, clear next step, no aggressive modals in the first 30 seconds.
Source: Raul, <https://indie.md/advice/dont-let-users-return-to-search/>

**Ride news cycles for traffic spikes.** When a news angle intersects your category, publish within 24 hours. Late arrivals do not rank for breaking queries. Keep a news template ready so the 2-hour draft is realistic.
Source: Raul, <https://indie.md/advice/news-driven-seo-spikes/>

### Scale the footprint

**Create localized landing pages at scale.** Geo-intent queries ("thing near me", "thing in city") stack up. Programmatic pages per city or vertical, generated from a structured data source, capture the long tail that hand-written content cannot reach.
Source: Vlad, <https://indie.md/advice/programmatic-local-pages/>

**Translate every page including the URL slug.** Translated content with English slugs does not rank in non-English queries. Translate the slug, the title, the meta description, the body.
Source: Cristian Antohe, <https://indie.md/advice/translate-pages-slugs/>

## Workflow

1. Take the draft or plan the user provides.
2. Check the keyword and analytics prerequisites. If either is missing, stop and ask before continuing.
3. Run the draft through the applicable lessons above. Only cite the ones that actually apply.
4. Produce a concrete edit list: three to seven specific changes, each linked to the founder whose advice supports it.
5. If the user is planning rather than drafting, produce a prioritized sequence (demand check -> first post template -> distribution -> schema rollout -> news template).

## Anti-patterns

- Writing without checking keyword demand.
- Publishing thin content to hit a cadence.
- Orphan pages (no internal links in or out).
- Publishing only on your own site and not syndicating.
- Adding an exit-intent modal before the user has spent 30 seconds on the page.

## Source

Full SEO corpus at <https://indie.md/advice/seo/>. Machine-readable export at <https://indie.md/llms.jsonl>.
