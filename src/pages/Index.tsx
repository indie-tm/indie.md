import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopicCard from "@/components/TopicCard";
import ArticlePreview from "@/components/ArticlePreview";
import { topics, articles } from "@/data/content";
import { Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Community-driven knowledge base
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] tracking-tight text-foreground mb-4">
            Everything indie hackers
            <br />
            <span className="text-primary italic">need to know.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            A curated wiki built by real founders sharing hard-won knowledge about SEO, business, growth, and the craft of building products independently.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl text-foreground">Browse Topics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} {...topic} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-foreground">Latest Guides</h2>
          </div>
          <div>
            {articles.map((article) => (
              <ArticlePreview key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            Knowledge grows when shared
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            This wiki is built by indie hackers like you. Every guide, every story, every resource comes from someone who's been there.
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer hover:gap-3 transition-all">
            Start contributing <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
