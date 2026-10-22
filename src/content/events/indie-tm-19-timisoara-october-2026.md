---
title: "Indie TM #19: TranslatePress Moves Into Shopify, and GlowSpace Prices the Building"
subtitle: "What we learned at our nineteenth meetup, where Cristian took TranslatePress from WordPress to Shopify on his own AI translation nodes, and Emil showed GlowSpace turning 3D scans into real estate underwriting"
date: 2026-10-16
location: "Cowork Timisoara - The Office, Timisoara"
link: "https://luma.com/62jct6h6"
image: "/images/events/indie-tm-19.jpg"
presenters:
  - cristian-antohe
  - emil-indiricau
---

Two weeks after [Indie TM #18](/events/indie-tm-18-timisoara-october-2026), where a video wrapper learned to charge a dollar, we went back to Cowork. Thirteen people came. Two founders had the screen. [Cristian](/people/cristian-antohe) brought [TranslatePress for Shopify](https://translatepress.com/shopify-translation-app/), the newest branch of a plugin the room first met at [Indie TM #5](/events/indie-tm-5-timisoara-march-2026). [Emil](/people/emil-indiricau) brought GlowSpace, a B2B platform that reads a building from the inside and puts a price on what it could become. The decade before Shopify is in [Cristian's Cozmoslabs journey](/journeys/cristian-cozmoslabs). This recap is what the room took from both.

## From an agency to a plugin that paid on day one

[Cristian](/people/cristian-antohe) started with the road. A short stint at Flextronics during college. Then freelancing. Then an agency with a classmate.

For a while the agency's revenue split half and half: outsourcing on one side, its own products on the other. They cut the outsourcing completely and kept only the products.

The first real hit was [Profile Builder](https://www.cozmoslabs.com/wordpress-profile-builder/). WordPress was weak at login and registration forms. The plugin filled that gap and made money from its first day.

:::advice{slug="cut-the-client-work-to-ship-products" category="mindset" person="cristian-antohe" title="Cut the client work so the products get the whole team"}
Cozmoslabs once earned half its revenue from outsourcing and half from its own plugins. The team dropped the outsourcing entirely and kept only the products. A 50/50 split feels safe, but every client deadline takes hours from the thing you own. If your products already carry half the business, the client work is no longer the safety net. It is the ceiling.
:::

:::advice{slug="build-the-feature-the-platform-forgot" category="product" person="cristian-antohe" title="Build the feature the platform forgot"}
Profile Builder earned money from its first day because WordPress handled login and registration forms badly. Nobody had to be convinced the problem existed: site owners hit it the moment they needed a member area. Look for the job your host platform leaves half done. A gap every user runs into is demand you do not have to create.
:::

## 400,000 sites, then a Shopify app built by one person

![TranslatePress homepage](/screenshots/translatepress.png)

[TranslatePress](https://translatepress.com) became the main product. It has more than 400,000 active installs on WordPress.

When the new AI coding tools arrived, the team decided to follow merchants to [Shopify](https://www.shopify.com). They did not hire React developers. They did not outsource it. Cristian built the Shopify app himself, on and off, over six months.

The two versions work very differently. On WordPress, TranslatePress parses the rendered HTML into small strings, stores them in the database, and swaps them back in for the selected language. That is why it works with any theme. On Shopify, the app writes straight into the platform's own multilingual API. The translations live in Shopify's database, so they stay even if the merchant turns the app off. There is no outside proxy in front of the store, so page speed stays the same and the storefront stays the merchant's.

:::advice{slug="store-translations-in-the-platform-not-a-proxy" category="product" person="cristian-antohe" title="Store the work in the platform, not behind a proxy"}
TranslatePress for Shopify writes every translation into Shopify's native multilingual API instead of serving pages through an outside proxy. The merchant keeps the translations if the app is removed, the store loads as fast as before, and the front end stays theirs. That removes the two fears that stop a merchant from installing: lock-in and a slower store. If your app can save its output in the host platform's own storage, do it, and say so on the listing.
:::

## Own the translation nodes once the volume is yours

The bigger change was cost. TranslatePress used to send text to commercial providers: Google Translate, [DeepL](https://www.deepl.com), and Google Gemini. Each request had a price. At their word volume, that price added up.

They now run their own AI processing nodes, so a large job no longer costs per request. To plug in different models they go through [OpenRouter](https://openrouter.ai), which keeps them clear of terms that forbid reselling a provider's API directly.

Next on the list is a cloud service on the main domain, working as a proxy routed by DNS.

:::advice{slug="run-your-own-translation-nodes" category="business" person="cristian-antohe" title="Run your own model once the volume is predictable"}
TranslatePress moved from Google Translate, DeepL, and Gemini to its own AI processing nodes, which removed the per-request cost on large translation volumes. Models are routed through OpenRouter so the product does not break a provider's rule against reselling its API. Per-call pricing is perfect while you are testing demand. Once you know how many words go through every month, the invoice is a tax on your own success. Price the hardware against it, and read each provider's resale terms before you build on them.
:::

## Ask for the review right after support helps

Reviews are manual at TranslatePress. The support team asks happy users directly. That includes people who just got a refund for a renewal they did not mean to pay.

No paid review platform, no incentives. That keeps them away from the money and the bans that come with gaming a marketplace. The goal Cristian named is a love brand: a plugin people recommend because it is simple and the support is good.

:::advice{slug="ask-for-the-review-after-the-refund" category="distribution" person="cristian-antohe" title="Ask for the review right after support solved the problem"}
TranslatePress collects reviews by hand: support asks users who just had a good experience, even right after refunding a renewal they did not intend to pay. A refund handled fast is often the moment a customer trusts you most. Asking directly, with no incentive and no third-party review service, keeps the listing clean and the marketplace off your back. Make the ask part of closing a ticket, not a campaign.
:::

## GlowSpace reads the inside of a building

[Emil](/people/emil-indiricau) took the second half of the night. GlowSpace is a B2B platform that finds hidden value in a property before anyone starts a renovation. It uses 3D spatial data, digital twins, and underwriting.

Most real estate analysis starts and ends with location. GlowSpace looks at what the interior could become. The buyers he listed: house flippers and retrofitters, developers, investment funds, and universities.

It takes whatever the client has. 2D plans, 3D scans, PUZ zoning documents, technical reports.

The generative 3D model is the part that makes a room lean in. Emil was clear that it is not the product. Banks and investors pay for the financial engine behind it: the return on investment, the cost of the works, the taxes, and the permits a project needs.

:::advice{slug="sell-the-numbers-show-the-3d" category="product" person="emil-indiricau" title="Show the 3D model, sell the numbers"}
GlowSpace can generate a 3D model of a renovated building, and it is the part that gets attention in a demo. What banks and investors pay for is the engine underneath: ROI, execution cost, taxes, and permits for the project. If your product has a visual hook and a calculation, open with the hook and price the calculation. A render is easy to copy. A trusted number is what a lender takes to committee.
:::

## UK universities have hundreds of buildings and a rulebook

The segment Emil singled out was universities in the United Kingdom. They manage portfolios of hundreds or thousands of buildings. They also have to meet strict compliance and accessibility standards, including HESA reporting.

That is a buyer with a lot of buildings, a recurring obligation, and a budget. Emil put contracts with universities and investment funds in the tens of thousands of euros a year.

:::advice{slug="pick-a-buyer-with-a-compliance-duty" category="business" person="emil-indiricau" title="Pick the buyer who has to report every year"}
GlowSpace aims first at UK universities: hundreds or thousands of buildings each, and compliance and accessibility standards such as HESA they have to keep meeting. A buyer with a standing obligation renews because the obligation renews. Emil puts these contracts, and those with investment funds, in the tens of thousands of euros a year. When you choose a first segment, look for the one whose rulebook already forces them to measure what you measure.
:::

## Credits, an API, then the funding round

GlowSpace runs on a classic SaaS subscription today. Emil wants to move it to credits, so a large asset manager can pay for the analysis it actually runs.

Those clients will not change how they work for a new tool. So the plan is an API that plugs into the property management systems they already use.

The order of the roadmap is deliberate. The UK first. Then continental Europe. Partnerships with architecture and construction firms, to bring real cost data into the model. Only after that, a venture round.

:::advice{slug="plug-into-the-system-they-already-run" category="distribution" person="emil-indiricau" title="Plug into the system the buyer already runs"}
GlowSpace's institutional clients already manage their buildings in property management software, and they will not move their workflow for a new vendor. So the integration is an API into those systems, with pricing moving from a flat subscription to credits that match how much each portfolio actually analyzes. For big organizations, the switching cost is the workflow, not the price. Arrive inside the tool they open every morning, and the sale becomes a configuration.
:::

## Nineteen editions in

Edition eighteen asked what you sell when the model under your wrapper gets cheap. Edition nineteen had two answers. Run the model yourself and keep the work inside the platform. Show the picture, and sell the number behind it. See you at the twentieth.
