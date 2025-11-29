import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-xl mb-4">Monopole AI</h3>
            <p className="text-muted-foreground max-w-sm">
              Crafting intelligent tools for modern hospitality, transforming data into exceptional guest experiences.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/club-cuvee" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1">
                  Club Cuvée
                </Link>
              </li>
              <li>
                <Link href="/pre-shift" className="text-muted-foreground hover:text-foreground transition-colors inline-block py-1">
                  Pre-shift
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Monopole AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}