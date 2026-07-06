import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Bathroom Remodel Cost in 2026? | CLRBLT',
  description: 'A bathroom remodel costs $8,000–$35,000 in 2026, averaging around $15,000. Here\'s what moves the number: scope, plumbing, tile, fixtures, and labor.',
  openGraph: {
    title: 'How Much Does a Bathroom Remodel Cost in 2026?',
    description: 'A bathroom remodel costs $8,000–$35,000 in 2026, averaging around $15,000. Here\'s what moves the number: scope, plumbing, tile, fixtures, and labor.',
    url: 'https://www.clrblt.com/guides/bathroom-remodel-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
