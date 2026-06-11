---
title: "Why I Built a Specialized OCR Engine in the Age of ChatGPT"
subtitle: "How OCRskill beats general LLMs on the only two numbers that matter: price per call and error rate"
person: "mihai-balint"
date: 2026-06-11
lessons:
  - "A purpose-built model can beat a frontier LLM on a narrow job"
  - "Owning your compute is what keeps a high-volume API profitable"
  - "For a developer tool, the integration is the product"
  - "Programmatic SEO works for developer tools too"
  - "When you are far cheaper than the alternative, price sells itself"
---

Every time I describe [OCRskill](https://ocrskill.com), someone asks the same question: why build OCR at all when you could just hand the image to ChatGPT? It is a fair question, and the answer is the whole reason the business works.

![OCRskill homepage](/screenshots/ocrskill.png)

## The specialist still beats the generalist

OCRskill turns a document image into clean markdown and pulls structured records out of sources like SEAP, Romania's public procurement portal. For that specific job (reading a document and returning structured data) a purpose-built pipeline is both cheaper to run and, in my own head-to-head testing, more accurate than any general model, including the frontier ones. Reading a scanned form is exactly the bounded, repetitive problem a dedicated OCR engine was built for. A general model is paying, on every call, for a universe of capabilities the task never uses.

:::advice{slug="the-boring-niche-is-the-moat" category="mindset" person="mihai-balint" title="The boring, narrow niche is the moat"}
OCRskill extracts structured data from procurement documents. It is not glamorous, and that is exactly why it is defensible. A narrow, unsexy, high-volume job is one most founders skip while looking for something more exciting, which leaves the field open to whoever is willing to go deep on it. Mihai out-specializes general LLMs on document extraction precisely because he only does that one thing. Boring problems with real, repeated demand are where a solo builder can build something a frontier lab will never bother to beat.
:::

## The economics live in the hardware

The part people miss is where it runs. OCRskill runs on bare metal in an air-conditioned room, not on rented per-call GPUs. That single decision is what lets the unit economics survive at volume. When you rent GPU time by the call, your cost scales linearly with usage forever, and a high-volume API quietly bleeds margin. Owning the machines turns that variable cost into a fixed one you control.

:::advice{slug="own-your-compute-for-margin" category="business" person="mihai-balint" title="Own your compute to keep a high-volume API profitable"}
OCRskill runs on owned bare-metal hardware instead of rented per-call GPUs, and that is the reason the margins hold at volume. Per-call cloud inference is convenient at the start and brutal at scale: your cost grows in lockstep with every request, forever. For a product whose whole job is to be cheap per call and run constantly, owning the compute converts an unbounded variable cost into a fixed one. If your product's economics depend on doing one expensive operation millions of times, model the bare-metal version before you assume the cloud is cheaper.
:::

## The schema is the API

OCRskill's API does not ask you to write a prompt. You describe the fields you want (first name, last name, whatever the schema calls for) and the service returns a typed object that matches. Under the hood, PydanticAI runs an agent loop that keeps talking to the model until the output validates against the schema, so the caller gets structured data instead of a paragraph to parse and pray over. The integration experience is the product. A developer does not want a model; they want clean data showing up in the shape they asked for.

:::advice{slug="developer-experience-is-the-product" category="product" person="mihai-balint" title="For a developer tool, the integration is the product"}
OCRskill's customers are developers, and what they buy is not the OCR model, it is never having to write brittle string parsing again. The API takes a schema and returns a typed object that matches it. For a developer tool, the quality of the integration (how few steps it takes to go from request to usable data) is the actual product, and the underlying technology is just how you deliver it. Spend disproportionate effort on the API surface, the docs, and the first five minutes. That is the part your buyer experiences and the part they tell other developers about.
:::

## SEO for a product whose users are developers

At an earlier meetup I sat through an evening of SEO advice aimed at consumer products and took notes the whole time, then went home with one question: does any of this apply when your customers are other developers? Most of it does. Programmatic pages built around each document type and use case rank for the long-tail queries developers actually search. Even FAQ schema, which feels like a consumer trick, earns rich results for the precise technical questions a developer types before they integrate a tool.

:::advice{slug="programmatic-pages-for-developer-tools" category="seo" person="mihai-balint" title="Programmatic SEO works for developer tools too"}
SEO advice is usually framed around consumer products, which makes technical founders assume it does not apply to an API. It does. Build a page per document type, per use case, per integration, each answering a real question a developer searches before they commit to a tool. Add FAQ schema for the specific technical questions they ask. Developers Google their problems exactly like everyone else, and a tool that ranks for "extract structured data from a PDF" gets found at the moment of intent. Do not skip programmatic SEO just because your buyer writes code.
:::

## When you are cheaper, the price does the selling

There is one more advantage to the specialist-plus-owned-hardware approach: the price itself becomes a sales argument. When OCRskill is meaningfully cheaper per call than handing the same work to a frontier model, I do not have to win the accuracy debate to win the customer. The math does part of the convincing before anyone reads the docs.

:::advice{slug="let-price-do-the-selling" category="business" person="mihai-balint" title="When you are far cheaper than the alternative, price sells itself"}
OCRskill is so much cheaper per call than the general-LLM alternative that the price tag does part of the selling on its own. When you have a real structural cost advantage (a specialized model, owned hardware, a narrower problem), put the comparison front and centre instead of hiding it. A prospect who can see that you cost a fraction of the obvious alternative for the same or better result has most of the buying decision made already. A genuine cost advantage is a marketing asset, not just an accounting one.
:::
