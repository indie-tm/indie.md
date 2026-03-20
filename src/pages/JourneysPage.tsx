import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { journeys, getPersonById } from "@/data/content";
import { BookOpen } from "lucide-react";

const JourneysPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-primary" />
            Journeys
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Real case studies from indie hackers in our community. Every journey has extractable advice linked below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {journeys.map((journey) => {
            const person = getPersonById(journey.personId);
            return (
              <Link
                key={journey.id}
                to={`/journey/${journey.id}`}
                className="group block rounded-xl border border-border/80 bg-card p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{person?.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{person?.name}</p>
                    <p className="text-xs text-muted-foreground italic">{person?.tagline}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                  {journey.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {journey.subtitle}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{journey.date}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-primary font-medium">
                    {journey.adviceIds.length} tips extracted
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JourneysPage;
