import './globals.css';
import type { Metadata } from 'next';
import { inter, playfair, hvFlorentino, tayBasal } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Monopole AI | Intelligent Tools for Modern Hospitality',
  description: 'Monopole AI crafts intelligent SaaS tools for the modern hospitality industry, including Club Cuvée wine membership platform and Pre-shift staff training system.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        playfair.variable,
        hvFlorentino.variable,
        tayBasal.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}