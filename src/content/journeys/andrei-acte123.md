---
title: "ACTE123: A Compiler for the Queue at Vehicle Registration"
subtitle: "How repeated trips to vehicle registration became reusable plans, a document vault, and a case for fewer wasted trips"
person: "andrei-gudiu"
date: 2026-08-20
lessons:
  - "Encode the counter as procedure plus scenario, not as a blog post"
  - "Clone the ninety percent that is already the same"
  - "Ask the question that prevents the wasted trip"
  - "Ask for the exact value, not a category"
  - "Store the document once and let the next plan find it"
  - "Let the model draft the procedure, then make a human finish it"
  - "Fifty thousand users is a civic argument, not a vanity chart"
---

I keep buying motorcycles, which means I keep going back to vehicle registration. One came from Germany. I rode Transfăgărășan and Transalpina, then took it home and stored it. There is an '82 with the odometer stuck around 45,000. A BMW that did about 40,000 through the tight stuff. An Africa Twin I am not sure has 5,000. An Excel around four or five. A Ducati around two. One from England I had just registered. I know that counter the way other people know a coffee shop.

Two or three years ago the state made the old shortcut illegal. You used to pay a firm about 500 lei, they built the file, they showed up with the plates, the registration card arrived in the mail in two weeks. Now you need a notarized power of attorney, or you go yourself, and you need an appointment. In Timișoara that appointment is about a month out. The firms book the future slots and walk in with the client at the hour they already own.

![ACTE123 homepage](/screenshots/acte123.png)

## The panel on 26 October 2024

I was in that queue for about twenty minutes when I started reading the board. "Vehicle purchased outside the EU and never registered." "Vehicle purchased in Romania or another EU state and never registered," the new-car case. "Vehicle purchased in Romania and already registered in Bucharest or another county. Transfer." The wording fights you. Each case listed between nine and fourteen requirements. Seven of them were the same.

That is the product. Not a blog post that lists documents. A compiler. A procedure such as vehicle registration, civil status, passports, or the trade register combines with a scenario such as a lost card, change of address, or transfer. Together they become a recipe. The recipe asks questions and emits a plan with steps, requirements, fees, and forms. The voice on the site is second person and instructional. Do this. Take that. Book the appointment. Buy the insurance.

The plans are JSON. They carry a version, a specification, fee definitions, steps, answers, and check marks. Each requirement records how the document must be supplied. A copy is not the same as an original or a legalized copy. At the tax office you might need three copies plus the original. Two come back stamped. You take one of those to registration.

:::advice{slug="encode-the-counter-as-procedure-plus-scenario" category="product" person="andrei-gudiu" title="Encode the counter as procedure plus scenario, not as a blog post"}
Andrei did not start from a CMS article about "how to register a car." He started from a physical board that already grouped cases, then noticed that nine to fourteen requirements collapsed to seven shared ones. That observation produced a compiler. A procedure plus a scenario creates a versioned JSON plan of questions, steps, fees, and documents. Each requirement records whether the user needs a copy, an original, or a legalized copy. A blog post goes stale when the counter reprints the board. A recipe can be cloned, versioned, and asked a new question. If you are digitizing a bureaucracy, model the counter's own categories before you write marketing copy. The panel is the schema. The article is the residue.
:::

## A builder that clones the ninety percent

The builder keeps procedures and scenarios separate. Questions, requirements, steps, and documents can be reused. I clone between scenarios because registration from transfer is about ninety percent the same work. I change a shared question once and every scenario that uses it gets the update.

Labels can be rewritten per scenario. "Identity documents" becomes "the parents' identity documents" when the case is kindergarten. Several profiles can map onto the same requirement, both parents, a company, a car, a flat. Unique slugs let me import a set of questions instead of typing them again.

Fees can depend on an answer. Motorcycle plates are 22 lei. Car plates are 56 lei. Ask which plates the person needs and the plan can add the right line. Required questions can also change by scenario. The output stays a walkthrough in plain speech, not the sentence the ministry wrote.

:::advice{slug="clone-the-ninety-percent-then-override" category="product" person="andrei-gudiu" title="Clone the ninety percent that is already the same"}
Andrei's builder treats transfer-of-registration and first-registration as cousins, not as two products. He clones the shared questions, steps, and fees, then overrides the labels and the required flags that actually differ, parents' IDs at kindergarten, motorcycle plates at 22 lei versus car plates at 56. That is cheaper than maintaining two trees that drift, and it is more honest than a single checklist that lies to half the room. The rule for any procedure product is to find the seven common requirements before you design the fourteenth unique one. Clone first. Override second. If a change to a question does not propagate, you do not have a system. You have a pile of copies.
:::

## The question that sends you home

I had an English contract for Dumbrăvița town hall. I ran it through ChatGPT, printed three copies, and they stamped the translation. At the next counter they told me the translation had to be authorized, and that I had to bring the English original. The question the platform should have asked first is "Did you get a translation of a contract stamped?" If yes, bring the translation and the original. If not, you will be sent home.

That is the job. Stop people from visiting the same counter four times. Official sites can look updated from a month ago and still be wrong. You end up reading seven places. Libertatea has guides Google can find. The ANAF rent declaration is hard to reach even if you are already in the Virtual Private Space. You leave the homepage, walk through a cluster of buttons, and land on a pile of codes, DEP, DEC, L, UNICA. The plan should point at the action, not at the ministry's information architecture.

I looked at [roepas.ro](https://roepas.ro), the state's own procedures portal. It launched in beta. I searched Garda Forestieră Timișoara. Nothing came back, even though those procedures exist. Open data is not the same as a usable path.

:::advice{slug="ask-the-question-that-saves-the-trip" category="product" person="andrei-gudiu" title="Ask the question that prevents the wasted trip"}
The Dumbrăvița contract taught Andrei a cheaper product rule than another page of explanation. The town hall stamped a machine translation. The next counter wanted an authorized translation and the English original. The missing question was not "what is a translation." It was "did you already get this stamped," because that answer changes the bag you take tomorrow. Bureaucracy products fail by listing every document in the universe. They work by asking the fork that would have sent you home. If your checklist cannot change after a yes, it is a brochure. Put the expensive mistake, the fourth visit, the rejected copy, into a single required question and let the plan rewrite itself.
:::

## Ask for the exact value

I had already studied [GOV.UK](https://www.gov.uk) and its open source design system. It asks your exact age instead of asking whether you are under 14, then hides the questions you do not need. It also lets people type a date such as 14-12-2015 instead of hunting through dropdowns or a calendar. Most people should be able to finish the task without learning how the form was built.

:::advice{slug="ask-for-exact-value-not-category" category="product" person="andrei-gudiu" title="Ask for the exact value, not a category"}
Ask for the precise fact that deletes later questions. Exact age removes a tree of "under 14" follow-ups. A typed date is faster than a set of dropdowns for many people. The same rule applies to contextual requiredness. Ask for the raw value and let the plan hide the branches that do not apply.
:::

## Reuse the document in the next plan

I built the vault around reuse. A person can keep profiles for themselves, a child, a company, a car, or a flat. A document attached to one requirement can satisfy the same requirement in a later plan. The profile can also fill fields that were mapped on a form. An expiry date can warn the person before an identity document becomes another reason to go home.

:::advice{slug="store-the-document-once-reuse-the-plan" category="product" person="andrei-gudiu" title="Store the document once and let the next plan find it"}
ACTE123's vault is not a drive with nicer icons. It remembers which requirement a document fulfilled. The next procedure that needs the same file can offer it instead of sending the person back through email. Profiles can reuse personal data across plans and fill mapped form fields. Consumer document products fail when they become folders. They work when the next checklist can see what the user already proved. If you ask for the same scan twice, you are not a guide. You are another counter.
:::

## Let a model draft the procedure

I think a model can draft 60-70% of a procedure when it receives the source material and a schema for the questions, documents, and steps. A practitioner must finish the rest. That last part contains the fork that sends someone home, such as the stamped translation that still needs authorization and its English original.

:::advice{slug="let-the-model-draft-then-finish" category="product" person="andrei-gudiu" title="Let the model draft the procedure, then make a human finish it"}
Give the model the sources and the schema, then treat its 60-70% draft as a starting point. The remaining work contains the detail that decides whether a person completes the procedure or goes home. A practitioner must check the sources, add the missing forks, and maintain the result when the procedure changes. Generative admin tools fail when they publish the draft. They work when a human who has stood in the queue finishes it.
:::

## Usage and the civic goal

I launched the site in September 2024. By the night of Indie TM #15 it had 63 users. Twenty-nine came through Google, 31 through email, and 3 through the new electronic identity card. [EidKit](https://eidkit.ro), built in Timișoara by Cătălin Toma, provides that last route. Nobody pays yet.

The larger dream is civic. If 50,000 people use a guide, that use becomes evidence that the procedure is hard to follow. It can support a request for simpler rules and fewer wasted trips to the counter.

I want an experienced vehicle-registration practitioner who can maintain the procedures and keep the plans accurate.

:::advice{slug="fifty-thousand-users-is-a-civic-argument" category="mindset" person="andrei-gudiu" title="Fifty thousand users is a civic argument, not a vanity chart"}
Fifty thousand completed guides would show that the problem is shared. That evidence can support a public case for clearer procedures and fewer wasted trips. Treat the number as civic evidence, not as proof that the product has found a paying customer.
:::
