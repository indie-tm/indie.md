import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { advice, categoryLabels, categoryIcons, getPersonById, type AdviceCategory } from "@/data/content";

const AdvicePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") as AdviceCategory | null;

  const categories = Object.keys(categoryLabels) as AdviceCategory[];
  const filtered = activeCategory ? advice.filter((a) => a.category === activeCategory) : advice;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">Advice</h1>
          <p className="text-muted-foreground max-w-lg">
            Practical tips extracted from real journeys. Every piece of advice links back to the story it came from.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSearchParams({})}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({advice.length})
          </button>
          {categories.map((cat) => {
            const count = advice.filter((a) => a.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {categoryIcons[cat]} {categoryLabels[cat]} ({count})
              </button>
            );
          })}
        </div>

        {/* Advice list */}
        <div className="max-w-2xl divide-y divide-border/60">
          {filtered.map((tip) => {
            const person = getPersonById(tip.personId);
            return (
              <Link
                key={tip.id}
                to={`/advice/${tip.id}`}
                className="group block py-5 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {categoryLabels[tip.category]}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    {person?.avatar} {person?.name}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tip.content}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvicePage;
