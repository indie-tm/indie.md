import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getJourneyById, getPersonById, getAdviceForJourney, categoryLabels } from "@/data/content";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

const JourneyDetailPage = () => {
  const { id } = useParams();
  const journey = getJourneyById(id || "");
  const person = journey ? getPersonById(journey.personId) : null;
  const relatedAdvice = journey ? getAdviceForJourney(journey.id) : [];

  if (!journey || !person) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Journey not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const paragraphs = journey.story.split("\n\n");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <article className="container mx-auto px-4 pt-10 pb-16 max-w-2xl">
        <Link to="/journeys" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          All journeys
        </Link>

        {/* Author card */}
        <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-card border border-border/60">
          <span className="text-4xl">{person.avatar}</span>
          <div>
            <p className="font-semibold text-foreground">{person.name}</p>
            <p className="text-sm text-muted-foreground italic">{person.tagline}</p>
            <p className="text-xs text-muted-foreground mt-1">{journey.date}</p>
          </div>
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-3">
          {journey.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-10">{journey.subtitle}</p>

        {/* Story */}
        <div className="space-y-4">
          {paragraphs.map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h2 key={i} className="font-display text-xl text-foreground mt-8 mb-2">
                  {para.replace(/\*\*/g, "")}
                </h2>
              );
            }
            if (para.startsWith("**")) {
              const match = para.match(/^\*\*(.+?)\*\*\s*([\s\S]*)/);
              if (match) {
                return (
                  <div key={i} className="mt-8">
                    <h2 className="font-display text-xl text-foreground mb-3">{match[1]}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{match[2]}</p>
                  </div>
                );
              }
            }
            if (para.startsWith("- ")) {
              return (
                <div key={i} className="space-y-1.5 ml-1">
                  {para.split("\n").map((line, j) => (
                    <div key={j} className="flex gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-muted-foreground">{line.replace(/^- /, "")}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* Lessons */}
        <div className="mt-12 p-6 rounded-xl bg-highlight border border-primary/10">
          <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            Key Lessons
          </h3>
          <ul className="space-y-2">
            {journey.lessons.map((lesson, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-primary font-semibold">{i + 1}.</span>
                <span className="text-foreground/80">{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extracted Advice */}
        <div className="mt-12">
          <h3 className="font-display text-xl text-foreground mb-6">
            Advice extracted from this journey
          </h3>
          <div className="space-y-3">
            {relatedAdvice.map((tip) => (
              <Link
                key={tip.id}
                to={`/advice/${tip.id}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/8 px-2 py-1 rounded-md whitespace-nowrap mt-0.5">
                  {categoryLabels[tip.category]}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tip.content}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default JourneyDetailPage;
