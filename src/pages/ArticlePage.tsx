import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/content";
import { ArrowLeft, Clock } from "lucide-react";

const articleContent: Record<string, string> = {
  "seo-no-bs-guide": `
## Why SEO matters for indie hackers

Organic search is the only channel that compounds over time. Every blog post, every landing page you optimize — it all stacks. Unlike paid ads, you don't lose traffic the moment you stop spending.

### The basics you actually need

1. **Keyword research** — Use free tools like Google's "People also ask" and Ubersuggest's free tier. Find keywords with decent volume (100+/mo) and low difficulty.

2. **On-page SEO** — Title tags, meta descriptions, H1s. It's not rocket science but most indie hackers skip it entirely.

3. **Content that ranks** — Write for humans first. Answer the search query completely. Make your content better than the top 3 results.

4. **Technical basics** — Fast load times, mobile-friendly, proper sitemap. Use a modern framework and you're 80% there.

### What NOT to waste time on

- Don't buy backlinks
- Don't obsess over keyword density
- Don't write 50 blog posts before checking if any rank
- Don't ignore search console — it's free and gold

### The 80/20 of SEO

Write 5 really good articles targeting specific keywords. Optimize them properly. Wait 3 months. Check what's working. Double down on what ranks. That's it.
  `,
  "merchant-of-record": `
## What is a Merchant of Record?

A Merchant of Record (MoR) is a company that handles the legal and financial complexity of selling digital products internationally. They become the "seller" of your product on paper, handling:

- **Sales tax & VAT** — They calculate, collect, and remit taxes in every jurisdiction
- **Payment processing** — Credit cards, PayPal, local payment methods
- **Invoicing** — Proper invoices for every country's requirements
- **Chargebacks & fraud** — They deal with it so you don't have to

### Why indie hackers should care

If you're selling globally (you are), you technically need to handle tax compliance in every country where you have customers. That's 100+ jurisdictions with different rules.

### Popular MoR options

- **Lemon Squeezy** — Built for indie hackers. Simple, good UX, reasonable fees.
- **Paddle** — More established. Better for higher volume. Good analytics.
- **Gumroad** — Simple but higher fees. Great for digital products and courses.

### The trade-off

You pay higher fees (typically 5-8% vs 2.9% for Stripe) but you save hundreds of hours and avoid legal risk. For most indie hackers making under $100K/year, it's a no-brainer.
  `,
  "wrong-thing-postmortem": `
## The setup

I had an idea for a project management tool for freelancers. I was a freelancer. I hated existing tools. Classic indie hacker origin story.

### Where it went wrong

I spent 6 months building features:
- Gantt charts (nobody asked for this)
- Time tracking with AI categorization (cool but unnecessary)
- A custom invoicing system (Stripe already does this)
- Team collaboration features (for a solo freelancer tool??)

### The wake-up call

After launching to 200 beta users, I checked the data:
- 80% of users only used the simple task list
- 0 users touched Gantt charts
- 3 users tried invoicing, 0 came back

### What I learned

1. **Talk to users before building** — I built what I thought freelancers needed, not what they actually needed
2. **Ship the smallest thing first** — A todo list with freelancer-specific features would have been enough
3. **Features ≠ value** — More features often means more confusion
4. **Your assumptions are wrong** — That's not a failure, that's the default state

### The pivot

I stripped everything back to the task list, added recurring tasks and client grouping. MRR went from $0 to $800/mo in 3 months.
  `,
  "solo-founder-pmf": `
## What PMF actually feels like

Product-market fit isn't a metric. It's a feeling backed by signals. When you have it, things feel like they're pulling forward instead of you pushing.

### Signals that you're getting close

- Users come back without you reminding them
- People recommend your product without being asked
- Your support inbox has feature requests, not complaints
- Churn is low and retention curves flatten

### Signals that you're NOT there

- You're spending more time on marketing than product
- Users sign up but don't come back
- Every conversation starts with you explaining what the product does
- You're adding features hoping one will "click"

### The framework that worked for me

1. **Find 5 power users** — People who use your product every day
2. **Ask them one question**: "How would you feel if you could no longer use this product?"
3. If 40%+ say "very disappointed" — you might have PMF
4. If not, ask: "What would make you very disappointed to lose it?"
5. Build that. Nothing else.

### The hard truth

Most indie hackers never find PMF with their first product. That's normal. The skill is recognizing when to pivot vs when to persist.
  `,
  "first-100-users": `
## Forget viral, think manual

Your first 100 users won't come from a viral loop or SEO. They'll come from you, manually, doing things that don't scale.

### 10 tactics that actually work

1. **Post in communities** — Reddit, Indie Hackers, Hacker News. Be genuine, share your journey, don't spam.

2. **Build in public** — Share your progress on Twitter/X. People root for builders.

3. **Launch on Product Hunt** — Won't make or break you, but a good launch gets you 50-200 signups.

4. **Cold DM potential users** — Find people complaining about the problem you solve. DM them.

5. **Write one great blog post** — Target a specific keyword your audience searches for.

6. **Join Slack/Discord communities** — Be helpful first. Mention your product when relevant.

7. **Create a free tool** — A calculator, checker, or generator related to your niche. Give it away.

8. **Partner with complementary products** — Cross-promote with non-competing tools your audience uses.

9. **Email your network** — Friends, former colleagues, Twitter mutuals. Ask for honest feedback.

10. **Offer lifetime deals** — AppSumo or your own LTD. Great for initial traction and feedback.

### The one rule

Every tactic above requires you to show up consistently. Do one thing every day for 30 days. That's it.
  `,
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug || ""];

  if (!article || !content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Article not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <article className="container mx-auto px-4 pt-10 pb-16 max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              {article.topic}
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="prose prose-stone max-w-none">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="font-display text-2xl text-foreground mt-10 mb-4">{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i} className="font-display text-xl text-foreground mt-8 mb-3">{line.replace("### ", "")}</h3>;
            }
            if (line.startsWith("- **")) {
              const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
              if (match) {
                return (
                  <div key={i} className="flex gap-2 mb-2 text-sm leading-relaxed">
                    <span className="text-primary mt-1">•</span>
                    <p><strong className="text-foreground">{match[1]}</strong> <span className="text-muted-foreground">— {match[2]}</span></p>
                  </div>
                );
              }
            }
            if (line.startsWith("- ")) {
              return (
                <div key={i} className="flex gap-2 mb-1.5 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <p className="text-muted-foreground">{line.replace("- ", "")}</p>
                </div>
              );
            }
            if (/^\d+\. \*\*/.test(line)) {
              const match = line.match(/^\d+\. \*\*(.+?)\*\* — (.+)/);
              if (match) {
                return (
                  <div key={i} className="flex gap-2 mb-3 text-sm leading-relaxed">
                    <span className="text-primary font-semibold mt-0.5">{line.match(/^\d+/)?.[0]}.</span>
                    <p><strong className="text-foreground">{match[1]}</strong> <span className="text-muted-foreground">— {match[2]}</span></p>
                  </div>
                );
              }
            }
            if (line.trim() === "") return null;
            return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">{line.trim()}</p>;
          })}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ArticlePage;
