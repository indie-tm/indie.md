import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
  articleCount: number;
  slug: string;
  color: "primary" | "accent" | "warm";
}

const colorMap = {
  primary: "border-primary/20 hover:border-primary/40 bg-primary/5",
  accent: "border-accent/20 hover:border-accent/40 bg-accent/5",
  warm: "border-border hover:border-primary/30 bg-card",
};

const TopicCard = ({ title, description, icon, articleCount, slug, color }: TopicCardProps) => {
  return (
    <Link
      to={`/topics/${slug}`}
      className={`group block rounded-xl border p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] ${colorMap[color]}`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-xs text-muted-foreground font-medium">
          {articleCount} {articleCount === 1 ? "guide" : "guides"}
        </span>
      </div>
      <h3 className="font-display text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
};

export default TopicCard;
