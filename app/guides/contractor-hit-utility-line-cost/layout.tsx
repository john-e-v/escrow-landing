import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Hit a Gas Line Digging Your Trench. Who Pays the $18K? | CLRBLT',
  description: 'A contractor hit a gas line and turned a $6K trench job into $18K. Here\'s who\'s liable for utility strikes and how escrow keeps you from paying for the mistake.',
  openGraph: {
    title: 'The Contractor Hit a Gas Line Digging Your Trench. Who Pays the $18K?',
    description: 'A contractor hit a gas line and turned a $6K trench job into $18K. Here\'s who\'s liable for utility strikes and how escrow keeps you from paying for the mistake.',
    url: 'https://www.clrblt.com/guides/contractor-hit-utility-line-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
