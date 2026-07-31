import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Grading Mistake That Turned a $8K Patio Into a $27K Foundation Fix | CLRBLT',
  description: 'A $8K patio caused $27K in foundation damage because the grading pitched water toward the house. Here\'s why it happened and how to prevent it.',
  openGraph: {
    title: 'The Grading Mistake That Turned a $8K Patio Into a $27K Foundation Fix',
    description: 'A $8K patio caused $27K in foundation damage because the grading pitched water toward the house. Here\'s why it happened and how to prevent it.',
    url: 'https://www.clrblt.com/guides/grading-drainage-surprise-foundation-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
