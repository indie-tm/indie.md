import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAdviceById, getJourneyById, getPersonById, categoryLabels, categoryIcons } from "@/data/content";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

const AdviceDetailPage = () => {
  const { id } = useParams();
  const tip = getAdviceById(id || "");
  const journey = tip ? getJourneyById(tip.journeyId) : null;
  const person = tip ? getPersonById(tip.personId) : null;

  if (!tip || !journey || !person) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Advice not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <article className="container mx-auto px-4 pt-10 pb-16 max-w-2xl">
        <Link to="/advice" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          All advice
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          {categoryIcons[tip.category]} {categoryLabels[tip.category]}
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
          {tip.title}
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          {tip.content}
        </p>

        {/* Source journey */}
        <div className="rounded-xl border border-border/80 bg-card p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Extracted from
          </p>
          <Link
            to={`/journey/${journey.id}`}
            className="group flex items-center gap-4"
          >
            <span className="text-3xl">{person.avatar}</span>
            <div className="flex-1">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                {journey.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                by {person.name} · {journey.date}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AdviceDetailPage;
