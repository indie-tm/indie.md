---
title: "DataDriven: Reading Every Public Tender in Romania, Alone"
subtitle: "How an ex-Microsoft engineer turned burnout into a solo company that crawls 10,000 sources, OCRs tender documents on a gaming GPU, and gets 300 firms to pay for the result"
person: "mihai-negrea"
date: 2026-07-13
lessons:
  - "Design the company around the life you need, even if that means no cofounders"
  - "Read the source documents, because official classifications lie"
  - "Price against the manual workflow you replace, not the software you wrote"
  - "In a niche B2B market, public data plus cold email beats paid ads"
  - "An AI translation layer can shrink a database migration from months to days"
  - "Cloud egress, not compute, is what eats a data-heavy product's margin"
  - "Ask for thirty characters at signup and do the setup for the user"
  - "Publish your prices in a market that hides behind contact forms"
---

I spent twelve years as a developer at Microsoft, two of them in the US on the Bing team. In 2021 I burned out and quit. In 2023, with zero experience as an entrepreneur, I founded a company and launched [DataDriven](https://datadriven.ro), a platform that monitors public tenders across Romania. Today it crawls more than 10,000 sources daily, reads the actual tender documentation with an OCR pipeline I run on a gaming GPU in my office, and serves over 300 paying firms at around 27,000 lei in monthly recurring revenue. I still work alone, and that is not an accident.

![datadriven.ro homepage](/screenshots/datadriven.png)

## An uncle lost in SEAP

The idea came from watching my uncle, a real estate appraiser who worked on public procurement contracts. He would spend hours inside SEAP, Romania's electronic public procurement system, because the interface gave him six different menus where a tender relevant to his business might be classified. For him there was one primary category where his work obviously belonged, but the authorities filing the tenders did not always agree. So he searched all six, every day.

It got worse after the search. To download a tender's documentation you receive a .p7s file, a cryptographically signed wrapper that Windows does not open. The standard move, for him and for everyone else in the industry, was to google "p7s open" and land on some piece of trialware. This is the daily reality of the people who sell to the Romanian state.

I did the obvious engineer thing: I wrote a script that watched for new tenders in his domain, crawled the data in Azure, and emailed him whatever appeared. That script was the seed of the company.

## A company of one, on purpose

When I decided to build a business, I decided to build it alone. After the burnout I wanted to eliminate human contact from my working life, bluntly put. No cofounders, no meetings about meetings, nobody to negotiate the roadmap with. I wanted to build the application exactly the way I saw fit.

:::advice{slug="solo-founder-by-design" category="mindset" person="mihai-negrea" title="Design the company around the life you need, even if that means no cofounders"}
Mihai came out of a burnout at Microsoft with a hard constraint: he needed to remove obligatory human contact from his working life for a while. So he designed the company around that constraint, no cofounders, no employees, full control over every product decision. The standard advice says find a cofounder, split the load, hire early, but standard advice optimizes for growth, not for the founder staying functional. A company shaped around your actual capacity is one you can run for years; a company shaped around a template is one you abandon. Constraints like health, energy, and tolerance for people are real inputs to company design, not weaknesses to overcome. Decide what you need to stay in the game, then build the business that fits inside it.
:::

## Launching into silence

I founded the company in 2023 and got into a startup program with Azure cloud credits worth up to $150,000. I burned through about $100,000 of it on the AI scripts that crawled and processed everything. In February 2023 I launched, put up some ads, and waited for the server to crash under the load of eager customers.

The server was fine. Nobody converted. The first paying client arrived in April 2023, two months after launch, at 19 lei per month, roughly four euros. For a long time the business was 40 clients at 19 lei each, which is not a business, it is a hobby with invoices. Until 2025 I barely looked at marketing at all; I was heads-down on the crawler, the data pipeline, and the frontend.

## The customers taught me the product

The shape of the real product came from two kinds of customers.

The first was a security services firm. Their tender-finding process was a browser bookmark folder organized by county, and every day someone opened the town hall websites one by one to check whether a new tender had appeared. That was a salaried human being clicking through bookmarks daily. They became my first serious contract at 2,000 lei per month for complete coverage of the sites they cared about.

The second group was catering firms, the companies behind school meal programs like the old "cornul și laptele" (now "masă sănătoasă"), where town halls receive budgets for sandwiches and related products. Catering is logistically bound to a county: you cannot deliver school meals two counties over. So each firm needs to watch every town hall in its county, and only those. That constraint made the product's value concrete: complete local coverage, zero noise from the rest of the country.

:::advice{slug="replace-the-bookmark-folder-workflow" category="business" person="mihai-negrea" title="Price against the manual workflow you replace, not the software you wrote"}
Mihai's first serious customer was a security firm whose tender discovery process was a bookmark folder organized by county and an employee who opened town hall websites every single day. They happily paid 2,000 lei per month for complete automated coverage, a hundred times his 19 lei list price at the time, because the alternative was a salary. The lesson is that software is not priced against its build cost or against other software, it is priced against the manual grind it replaces. Find the customer who is already paying a human to do the thing badly, and the budget already exists; you are not creating a line item, you are shrinking one. Before setting a price, ask what the current workflow costs in hours and salaries, and anchor there.
:::

## Read the documents, not the labels

The deeper I got into tender data, the clearer one thing became: you cannot trust what the authorities write on the tin. The official CPV classification system has around 10,000 subcategories, and misclassification is routine. I have seen food accessories filed under laptops. Titles and descriptions are frequently vague, misleading, or simply wrong.

So DataDriven reads the actual documentation, the PDFs and scans behind each tender, and classifies from the content. I built my own taxonomy of about 180 categories, deliberately down-to-earth, meant to mirror how Romanian companies actually describe their work rather than how a European classification committee does. That is what lets the platform recommend exactly the products requested in a caiet de sarcini instead of shrugging out something generic like "medical equipment."

:::advice{slug="read-the-documents-not-the-labels" category="product" person="mihai-negrea" title="Read the source documents, because official classifications lie"}
Public tenders in Romania carry official CPV codes, a taxonomy of roughly 10,000 subcategories, and Mihai found the labels wrong often enough to be dangerous, including food accessories classified under laptops. So DataDriven ignores the metadata and reads the actual tender documentation, OCRing PDFs and scans, then classifies everything against a hand-built taxonomy of about 180 categories that mirrors how companies really describe their work. That is the product's core advantage: competitors who filter on the official codes inherit the errors, and their users miss winnable contracts. Whenever your product sits on top of someone else's data, ask whether the labels are trustworthy or just convenient. Going to the primary source is expensive, which is exactly why doing it becomes a moat.
:::

## The marketing that finally worked

Google Ads was my first channel, and it mostly bought me branding. Conversion was terrible for a structural reason: people searched for construction work, clicked the ad, and landed on a platform full of tenders they were not eligible for. Public procurement has revenue thresholds, employee counts, and certification requirements, and an ad click cannot check any of them.

Cold email became the channel that actually worked, and the raw material was public data. SEAP exposes who has participated in tenders, who has won them, phone numbers, and activity domains. That is a pre-qualified lead list: these firms already sell to the state, they just find tenders badly. The market is roughly 20,000 firms, so I use Instantly.ai at about $150 per month, plus Google Workspace accounts at around $5 per address, to run multiple sending addresses across several domains with automated warm-up, keeping deliverability healthy at a deliberately limited throughput.

:::advice{slug="cold-email-runs-on-public-data" category="distribution" person="mihai-negrea" title="In a niche B2B market, public data plus cold email beats paid ads"}
Google Ads sent Mihai visitors who could never buy: public tenders have eligibility requirements around revenue, staff, and certifications that an ad click cannot filter for. Cold email inverted the problem, because Romania's procurement system publishes exactly who participates in tenders, who wins them, and how to reach them. A firm that already bids on public contracts is pre-qualified by its own history, so the public record becomes the lead list. With a market of roughly 20,000 firms, a modest cold email setup beats an ad budget: the targeting information ads cannot access is sitting in the open data. Before paying platforms to guess at your buyer, check whether a public registry, license list, or procurement record already names every one of them.
:::

## Escaping the cloud bill

When the Azure sponsorship expired, reality arrived: 2,500 to 3,000 EUR per month across Azure Search, Cosmos DB, OpenAI, and storage. For a business then doing about 1,500 EUR in MRR, that is not a cost structure, it is a countdown.

The migration happened in pieces. Azure Search, at about $500 per 16GB instance and two instances for availability, became self-hosted Elasticsearch. The web backend moved to Hetzner. Storage moved to Hetzner's S3-compatible object storage, after I discovered what egress and ingress really cost: my pipeline downloads documentation from SEAP, OCRs it, re-uploads it to storage, and serves it to processing jobs and users, and all that shuttling produced surprises like a 700 EUR ingress line item in a single month. For overflow, when my local infrastructure has downtime, I spin up Azure Batch Low Priority instances for a few hours at a moderate hourly cost. The target architecture is three dedicated Hetzner servers, one each for Elasticsearch, MongoDB, and the web stack, plus temporary cloud instances when needed.

The move I expected to dread, Cosmos DB to MongoDB, took two to three days. I had Claude build a query translation layer, then ran Cosmos and the new Mongo layer in parallel with automated validation comparing results until they reached parity. Only then did I cut over.

:::advice{slug="use-ai-to-derisk-a-database-migration" category="product" person="mihai-negrea" title="An AI translation layer can shrink a database migration from months to days"}
Migrating from Cosmos DB to MongoDB is the kind of project that haunts a solo founder, so Mihai turned it into a verification problem instead of a rewrite. He had Claude build a translation layer for his queries, then ran the old Cosmos path and the new Mongo path in parallel, with automated validation comparing outputs until the two systems agreed on everything. Once parity held, the cutover was boring, and the whole thing took two to three days. The pattern generalizes beyond databases: when replacing a load-bearing component, do not aim for a heroic big-bang rewrite, aim for a shim that lets old and new run side by side while machines check the diff. AI assistants are unusually good at generating exactly this kind of mechanical translation code that nobody wants to write by hand.
:::

The other half of the cost story is OCR. Azure Document Intelligence became Tesseract plus my own classifiers that validate output quality, running on an RTX 3090 with 24GB of VRAM sitting in my office, chewing through about 1,500 pages per hour. The office has solar panels that cover both the machine and its cooling, so the marginal energy cost is roughly zero, while the same GPU capacity in the cloud would be prohibitive. Last month the entire Azure bill was down to $1,500, and it keeps falling.

:::advice{slug="watch-the-egress-not-the-compute" category="business" person="mihai-negrea" title="Cloud egress, not compute, is what eats a data-heavy product's margin"}
Mihai's Azure bill was not dominated by the compute he had planned for, but by data movement he had never priced: documents flowing from the procurement system into processing, into storage, back out to jobs and users, culminating in a 700 EUR ingress charge in a single month. Hyperscaler pricing makes exactly this traffic expensive while keeping headline compute prices attractive, which is why his migration to Hetzner dedicated servers and S3-compatible storage, plus a self-hosted OCR pipeline on a local GPU, cut a 2,500 to 3,000 EUR monthly burn to a fraction. If your product's core loop is moving files around, model the traffic before choosing infrastructure, because the cloud's convenience premium applies to every gigabyte, every direction, forever. Data-heavy products are precisely the ones where owning the pipes pays.
:::

## Thirty characters and a running start

The eligibility mismatch that killed my ad conversion also shaped onboarding. At signup I ask for a minimum of 30 characters describing the tenders you care about. The AI turns that free text into monitoring criteria, so your first login already shows relevant tenders instead of an empty dashboard. From there the system watches behavior, thumbs up and down, what you save, where you navigate, and adjusts the filtering, with changes reviewed so nobody gets surprised.

Some users push back on even 30 characters, they want to "just see the app." But without that input the recommendation quality craters on day one, and day one is when they decide whether to stay. I run two open training sessions every week, offer a short personalized setup meeting for free, and send scheduled emails on days 1, 2, 5, and 10 with practical suggestions instead of forcing a first-time tutorial nobody reads.

:::advice{slug="ask-for-thirty-characters-then-do-the-setup" category="product" person="mihai-negrea" title="Ask for thirty characters at signup and do the setup for the user"}
DataDriven's onboarding asks one thing: at least 30 characters describing the tenders you care about. AI converts that sentence into monitoring criteria, so the first login shows relevant results instead of an empty dashboard and a configuration wizard. Behavior then tunes the filters automatically, thumbs up and down, saves, navigation. Some users resist even that single question and want to see the app first, but Mihai holds the line, because without the sentence the first session shows noise, and the first session is where churn is decided. The general principle: do not make users configure your product, make them describe their problem in their own words, then configure it for them. One honest question plus AI setup beats a five-step wizard that gets skipped.
:::

## The numbers

Today DataDriven is at over 300 paying firms and about 27,000 lei in MRR, roughly 5,000 EUR, up from about 1,500 EUR in September 2025. Total revenue last year was around 40,000 EUR. Growth is a steady, unglamorous 2 to 5 percent per month. The company has been profitable on paper for about three months, with minimal salaries for me and my wife, and Romania had a lesson waiting for me there: you cannot repay money you personally lent the company, or pay dividends, until the balance sheet turns positive. It was my own money, and I still could not touch it.

Pricing is public, no "contact us for a quote," which in this market is itself a differentiator. The top plan is 290 lei per month and recently gained API access and an MCP server that customers can point Claude or ChatGPT at. The premium tier picked up its first 3 or 4 subscribers within a month of launching, which at this scale is a signal worth respecting.

:::advice{slug="publish-prices-in-a-contact-us-market" category="business" person="mihai-negrea" title="Publish your prices in a market that hides behind contact forms"}
Every plan on DataDriven has a public price, topping out at 290 lei per month, in a category where the incumbent reflex is "contact us for pricing." For small firms deciding whether to try a tool, the hidden price is a wall: it signals enterprise sales calls, negotiation, and wasted time, exactly what a two-person catering company will not endure. Transparent pricing lets the product sell itself to the long tail the incumbents ignore, and it filters out nobody who was actually going to pay. Mihai treats it as strategy, not cosmetics: his revenue is built from hundreds of small subscriptions rather than a handful of negotiated contracts, and that model only works when the price is on the page. If your competitors hide their prices, publishing yours is free positioning.
:::

What is next is more of the same compounding: an MCP server that turns tender documentation into clean, navigable markdown for the AI assistants my customers already use, an end-to-end agent that prepares complete tender submissions, and a slow expansion across more than 60 European procurement portals, with titles translated to Romanian for Romanian firms first. All of it still a company of one, which is how I designed it, and how I intend to keep it for as long as it keeps working.
