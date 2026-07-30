import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Septic Surprise: Why Your $12K Job Became a $34K Dig | CLRBLT',
  description: 'A $12K septic replacement ballooned to $34K after a failed perc test forced an engineered mound system. Here\'s why it happened and how to protect your money.',
  openGraph: {
    title: 'The Septic Surprise: Why Your $12K Job Became a $34K Dig',
    description: 'A $12K septic replacement ballooned to $34K after a failed perc test forced an engineered mound system. Here\'s why it happened and how to protect your money.',
    url: 'https://www.clrblt.com/guides/septic-system-cost-blew-budget',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
