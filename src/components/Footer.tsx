const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <span className="font-display text-xl text-foreground">
              indie<span className="text-primary">.md</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Real stories, real advice, from a real community of indie hackers helping each other grow.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="font-display text-base mb-3 text-foreground">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Journeys</li>
                <li>SEO Advice</li>
                <li>Distribution</li>
                <li>Product Tips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-base mb-3 text-foreground">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Share your story</li>
                <li>Contributors</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground">
          Built with ❤️ by indie hackers, for indie hackers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
