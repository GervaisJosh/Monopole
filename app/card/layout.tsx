import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Josh Gervais | Monopole AI',
  description: 'Founder of Monopole AI — effective, affordable, beautiful software for hospitality.',
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
