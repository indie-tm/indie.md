import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export interface ArticlePreviewProps {
  title: string;
  excerpt: string;
  readTime: string;
  topic: string;
  slug: string;
}

const ArticlePreview = ({ title, excerpt, readTime, topic, slug }: ArticlePreviewProps) => {
  return (
    <Link
      to={`/articles/${slug}`}
      className="group block py-5 border-b border-border/60 last:border-0 hover:pl-2 transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
          {topic}
        </span>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {readTime}
        </span>
      </div>
      <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {excerpt}
      </p>
    </Link>
  );
};

export default ArticlePreview;
