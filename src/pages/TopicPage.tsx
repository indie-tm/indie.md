import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { topics, articles } from "@/data/content";
import { ArrowLeft, Clock } from "lucide-react";

const topicArticlesMap: Record<string, typeof articles> = {
  seo: articles.filter((a) => a.topic === "SEO"),
  "getting-started": articles.filter((a) => a.topic === "Getting Started"),
  business: articles.filter((a) => a.topic === "Business"),
  pmf: articles.filter((a) => a.topic === "PMF"),
  distribution: articles.filter((a) => a.topic === "Growth"),
  stories: articles.filter((a) => a.topic === "Stories"),
};

const TopicPage = () => {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Topic not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const topicArticles = topicArticlesMap[slug || ""] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 pt-10 pb-16">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all topics
        </Link>

        <div className="mb-10">
          <span className="text-4xl mb-4 block">{topic.icon}</span>
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">{topic.title}</h1>
          <p className="text-muted-foreground max-w-lg">{topic.description}</p>
        </div>

        {topicArticles.length > 0 ? (
          <div className="max-w-2xl space-y-0 divide-y divide-border/60">
            {topicArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group block py-5 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-10 text-center">
            <p className="text-muted-foreground">
              Guides coming soon. Want to contribute? Reach out to the community!
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TopicPage;
