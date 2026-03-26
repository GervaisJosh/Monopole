import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-brand text-lg text-foreground">
              MONOPOLE AI
            </span>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              Effective, affordable, beautiful software for hospitality.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pre-shift"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pre-Shift
                </Link>
              </li>
              <li>
                <Link
                  href="/club-cuvee"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Club Cuvée
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Contact
            </h4>
            <a
              href="mailto:josh@monopole-ai.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              josh@monopole-ai.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Monopole AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
