# Profile stacks

People can list selected tools in their profile frontmatter. The shared profile component renders the showcase, category filters, and linked badges. Profiles without stack data omit the section. Category filters work without JavaScript. A small native script progressively enhances the floating showcase; no video runtime is added.

```yaml
stack:
  - category: interfaces
    tools: [typescript, nuxt, vue]
  - category: cloud
    tools: [cloudflare, interserver]
```

Available categories: `ai`, `interfaces`, `backend`, `data`, `infrastructure`, `cloud`, and `product`. Tool IDs must exist in `src/data/stack-tools.ts`; the content schema rejects unknown tools. Add new tools there with their name, official URL, purpose, color, and a local brand logo. Stack data also appears in Markdown profiles and the full text corpus.

## Mircea's selection

Curated from application manifests and infrastructure definitions across the Monocube projects, rather than an exhaustive dependency list:

- Web and mobile: Nuxt/Vue, Astro, TypeScript, Tailwind, Expo/React Native across the apps and landing pages; Kotlin and Jetpack Compose in the Take10Media Android player.
- AI and agents: Cursor, Codex, and Grok Bot confirmed by Mircea; MCP in SingleFax's server dependencies and public agent integration; OCRSkill in current SingleFax and Renzi document workflows.
- Backend: Node.js/Bun, Nitro, Drizzle, and Better Auth in SingleFax, Renzi, Blahphone, and shared application foundations.
- Data: PostgreSQL, DragonflyDB, Redpanda, ClickHouse, and Temporal in application dependencies, Nomad jobs, and Take10Media monitoring definitions. Mircea confirmed DragonflyDB as the in-memory data store.
- Infrastructure: Nomad jobs, Docker builds, Proxmox operations, Traefik and Caddy routing, Consul service discovery, Tailscale networking, Grafana dashboards, VictoriaMetrics metrics, Loki logs, and OneUptime monitoring and incident management. These tools were confirmed by Mircea.
- Providers: Cloudflare Workers/R2 configurations, Hetzner via Take10Media's Pulumi hcloud integration, RunPod in Renzi inference infrastructure, and InterServer confirmed by Mircea.
- Product: Stripe, Telnyx, PostHog, and Rybbit integrations in product dependencies and infrastructure documentation.

These badges describe tools used across projects, not a claim that every tool runs in every product or a verification of current production deployments.

Visual direction draws from the [Hyperframes catalog](https://hyperframes.heygen.com/catalog): floating cards, depth, and continuous motion, adapted to the site's warm palette. The showcase adapts the catalog's [Soft Blur In](https://hyperframes.heygen.com/catalog/components/soft-blur-in) and [Blur Out Up](https://hyperframes.heygen.com/catalog/components/blur-out-up) primitives to the native Web Animations API. After a four-second hold, five random tools replace the visible set with staggered blur, opacity, and vertical motion. New selections exclude the current set when the pool is large enough and contain no duplicate tools.

The decorative showcase and ribbon share a persistent pause control. Cycling suspends when the showcase leaves the viewport or the page is hidden. Reduced-motion preferences disable cycling and animation, including preference changes during a transition. Without JavaScript, the initial five badges remain visible. The complete tool list remains static and keyboard accessible.

Hyperframes' motion primitives are Apache-2.0 licensed; the adapted implementation uses a shorter travel distance and native timing instead of the composition variables and GSAP timeline. See `docs/LICENSE-hyperframes.txt` for the upstream license.
