import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-foreground">
            indie<span className="text-primary">.md</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/journeys" className="text-foreground/70 hover:text-foreground transition-colors">
            Journeys
          </Link>
          <Link to="/advice" className="text-foreground/70 hover:text-foreground transition-colors">
            Advice
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            From the community
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
