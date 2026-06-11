---
title: "SoundScrub: From a Terminal Script to a Product"
subtitle: "How a tool for cleaning up holiday footage became a focused app that beats the big editors at one job"
person: "camil"
date: 2026-06-10
lessons:
  - "A personal fix can become a product once others share the pain"
  - "Wrap your script in an app for everyone who fears the terminal"
  - "Stand on an open model and add the experience around it"
  - "Let your architecture hand you a feature worth selling"
  - "Be honest about the limits of your tool"
---

[SoundScrub](https://soundscrub.video) does one thing: you describe a sound in plain words, and it removes that sound from your video, keeps only that sound, or just turns it down. It did not start as a product. It started as a script I ran from the terminal to rescue my own footage.

![soundscrub.video homepage](/screenshots/soundscrub.png)

## From a personal fix to a product

I had come back from a holiday with a lot of footage I wanted to show my parents, and a lot of it was ruined by background noise. So I wrote a script to strip the noise out. It solved my problem, and then I hit the question every tinkerer eventually hits: this fixes my problem, but is it a product? The answer turned out to be yes, because the noise problem is not mine alone, it belongs to every traveler and videographer who films in the real world.

:::advice{slug="from-personal-fix-to-product" category="product" person="camil" title="A personal fix becomes a product when others share the pain"}
SoundScrub began as a script Camil wrote to clean the background noise out of his own holiday footage. The leap to a product came from one question: do enough other people have this exact pain? Scratching your own itch is a great way to start, but it only becomes a business when you confirm the itch is widely shared and worth paying to scratch. Build the thing that solves your problem first, because you understand it deeply, then go check that travelers and videographers are loudly describing the same problem before you commit to productizing it.
:::

## Build the app for the people who fear the terminal

The script worked, but only for someone comfortable in a terminal. The product is the desktop app I built for the much larger group of people who would never open one. That is the whole gap between a useful script and a sellable product: the same capability, wrapped so a non-technical person can use it without thinking about Python or command lines.

:::advice{slug="wrap-your-script-in-an-app" category="product" person="camil" title="Wrap your script in an app for the people who fear the terminal"}
Camil's noise-removal script already worked; the product was wrapping it in a desktop app for everyone who would never touch a terminal. The market for a command-line tool is other developers; the market for the same capability behind a clean interface is everyone. If you have a script that genuinely solves a problem, the productizing work is mostly removing the technical barriers around it, not adding features. A good interface over a working script reaches an audience an order of magnitude larger than the script ever could.
:::

## Stand on an open model

I did not train the audio model myself. SoundScrub runs on Meta's open-source SAM Audio, wrapped in an Electron shell with a Python backend that runs the model on RunPod GPUs. The hard research problem is solved by the open model; my job is the experience around it. Standing on open-source foundations is what let one person ship something this capable.

:::advice{slug="build-on-open-models" category="mindset" person="camil" title="Stand on an open model and build the experience around it"}
SoundScrub's audio separation is powered by Meta's open-source SAM Audio, not a model Camil trained. The leverage for a solo builder in 2026 is enormous: the hardest research is published and free, so your job is the product around it (the interface, the workflow, the trust). Do not try to out-research a frontier lab. Find the capable open model that does the hard part, and compete on the experience, the focus, and the polish that the raw model will never have on its own.
:::

## Let the architecture give you a feature

A nice property fell out of how SoundScrub is built. The video never leaves your machine; only the extracted audio is uploaded for processing, and it is deleted right after. I did not design that as a privacy feature, it was just how the pipeline worked, but it is a genuine selling point for anyone nervous about uploading personal footage. Sometimes the architecture hands you a promise you can make to users.

:::advice{slug="turn-architecture-into-a-promise" category="product" person="camil" title="Let your architecture hand you a feature worth selling"}
SoundScrub uploads only the extracted audio, never the video, and deletes it right after, so users get a real privacy guarantee that fell out of the technical design rather than a marketing decision. When a property of your architecture happens to answer a fear your users have (privacy, speed, offline use), name it and put it on the page. The most credible selling points are the ones that are simply true because of how the thing is built. Look at your own stack for promises you can already make and are not yet making.
:::

## Be honest about the limits

I was upfront with the room about where SoundScrub falls short. The prompt can describe what a sound is (a dog barking, people talking) but not where it sits in the frame, and the longest clip I had run through it was about twenty minutes. Saying that plainly did not weaken the pitch, it strengthened it, because the one comparison that made people sit up (it isolates a specific sound far more cleanly than DaVinci Resolve's built-in tools) was clearly coming from someone who knew exactly what his tool could and could not do.

:::advice{slug="name-your-tools-limits" category="mindset" person="camil" title="Be honest about the limits of your tool"}
Camil told the room exactly where SoundScrub breaks down (no spatial selection, a practical clip-length limit) and it made his strong claim, that it beats DaVinci Resolve at isolating a named sound, more believable, not less. Naming your limits signals that you understand your own product and are not overselling, which is precisely what makes your genuine advantages credible. Buyers trust a founder who volunteers the edges. Hiding the limits only means the user discovers them later, at the worst possible moment, and stops trusting everything else you said.
:::
