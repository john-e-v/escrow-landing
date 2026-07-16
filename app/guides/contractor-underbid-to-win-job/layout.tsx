import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Lowball Bid That Cost You $14K: Why the Cheapest Quote Wins the Job and Loses the Budget | CLRBLT',
  description: 'A $38K kitchen quote became $52K—not because of surprises, but because the low bid was engineered to win. Here\'s how underbidding works and how to stop it.',
  openGraph: {
    title: 'The Lowball Bid That Cost You $14K: Why the Cheapest Quote Wins the Job and Loses the Budget',
    description: 'A $38K kitchen quote became $52K—not because of surprises, but because the low bid was engineered to win. Here\'s how underbidding works and how to stop it.',
    url: 'https://www.clrblt.com/guides/contractor-underbid-to-win-job',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
