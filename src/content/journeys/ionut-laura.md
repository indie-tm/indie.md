---
title: "Laura: A One-Person Studio Selling a Synth Forever"
subtitle: "Why a niche audio plugin is a textbook solo product, and a perpetual license is a promise subscriptions cannot make"
person: "ionut"
date: 2026-06-02
lessons:
  - "Let the standard framework handle the cross-platform plumbing"
  - "A perpetual license is a promise no subscription can match"
  - "In a craft market, the moat is taste, not engineering"
  - "Scope one well-made instrument, not a do-everything synth"
  - "Use the distribution channels that already exist"
---

I build audio plugins as a one-person studio called [Lost Synapse](https://lostsynapse.store). The first release is Laura, a software synthesizer written in C and C++ on top of JUCE. It is the most different kind of indie product you will see at a meetup full of SaaS founders, and the economics fit one person almost perfectly.

![Lost Synapse running its Laura polysynth](/screenshots/lostsynapse.png)

## Let the framework do the plumbing

JUCE is the de facto standard C++ framework for audio plugins, the instruments and effects that load inside a digital audio workstation like Ableton Live, Logic Pro, or FL Studio. You write the processing code once and JUCE exports the same codebase to every major plugin format across desktop and mobile. Laura ships as an AU, VST3, and standalone instrument for macOS and Windows, and I did not write that cross-format, cross-platform plumbing myself. That is precisely the work that would otherwise eat a solo developer's entire timeline.

:::advice{slug="let-the-framework-do-the-plumbing" category="product" person="ionut" title="Let the standard framework handle the cross-platform plumbing"}
Laura ships in every major plugin format on macOS and Windows because JUCE, the standard audio framework, handles the brutal cross-format, cross-platform export. Ionut writes the sound once and lets the framework do the part that would otherwise consume a solo developer's whole timeline. In any domain with a mature standard framework, the leverage is to stand on it for the undifferentiated plumbing and spend your scarce time on the part that is actually yours. Do not hand-roll what a battle-tested framework already solves for everyone.
:::

## A promise a subscription cannot make

Laura sells for 69 dollars, one time, with lifetime updates and no telemetry, direct from the site or through Gumroad. That perpetual license is not just a price, it is a promise: one purchase, every new build free, forever. A subscription tool structurally cannot say that. In a market of producers who are tired of renting their tools, "you own this and the updates never stop" is a real differentiator, not a discount.

:::advice{slug="sell-a-promise-subscriptions-cant-make" category="business" person="ionut" title="A perpetual license is a promise no subscription can match"}
Laura is a one-time 69 dollar purchase with lifetime updates and no telemetry, and that perpetual license is itself the pitch: own it once, every future build is free, forever. A subscription product cannot structurally make that promise, which means it is a differentiator you get for free by choosing the model. When your audience is tired of renting (creative tools, developer tools, anything with subscription fatigue), perpetual ownership is not money left on the table, it is a competitive weapon. Sometimes the pricing model is the marketing.
:::

## The moat is taste, not engineering

It would be easy to assume the hard part of a synth is the engineering. It is not, or not only. The moat in audio software is taste and DSP craft: a recognizable sound and a brand that producers trust. Anyone can wire up oscillators; very few can make them sound like something people want to reach for. That is where the durable advantage lives, and it is the part no framework and no competitor can copy.

:::advice{slug="compete-on-taste-not-tech" category="mindset" person="ionut" title="In a craft market, the moat is taste, not engineering"}
The defensible part of Laura is not the code, it is the sound: a recognizable character and the trust producers place in the Lost Synapse name. In creative tools, taste and craft are the moat, because the underlying engineering is increasingly available to everyone. If you compete in a market where the output is judged by feel (audio, design, writing tools), invest in developing a recognizable point of view, not just shipping features. The taste is the part that compounds and the part nobody can fork.
:::

## Scope one instrument well

Laura is pitched at sound designers who would rather not learn another ecosystem: four oscillator engines under one signal path, a mod matrix, and a button that rolls the dice when inspiration is late. That is a deliberately bounded instrument, not a do-everything synth. One well-scoped product that a specific kind of user reaches for beats a sprawling one that tries to be every synth at once.

:::advice{slug="scope-one-well-made-thing" category="product" person="ionut" title="Scope one well-made instrument, not a do-everything synth"}
Laura is four oscillator engines, one signal path, a mod matrix, and one delightful "roll the dice" feature, aimed at a specific kind of sound designer. It is deliberately not a synth that tries to do everything. A single, well-scoped product that one type of user reaches for instinctively beats a feature-maximal one that serves no one in particular. Decide exactly who the tool is for and what the one delightful thing is, then resist the urge to add everything. Focus is what makes a solo product feel finished instead of thin.
:::

## The channels already exist

I do not have to build an audience from scratch. The distribution channels for audio plugins already exist: marketplaces like KVR Audio and Plugin Boutique, plus YouTube and the producer communities where people discover and demo instruments every day. My job is to show up where producers already gather, not to invent a new place for them to find me.

:::advice{slug="use-the-channels-that-already-exist" category="distribution" person="ionut" title="Use the distribution channels that already exist"}
Ionut does not need to build an audience for Laura from zero, because the audio-plugin world already has its gathering places: KVR Audio, Plugin Boutique, YouTube demos, and active producer communities. The distribution work is showing up where the buyers already are, not manufacturing a new channel. Before you assume you have to grow your own audience the slow way, check whether your niche already has established marketplaces and communities. Plugging into existing demand is far faster than creating it, and most mature niches have more of it than newcomers expect.
:::
