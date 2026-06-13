import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hurricane Laura\'s Aftermath: The Storm-Chasing Roofers Who Vanished | CLRBLT',
  description: 'After Hurricane Laura, storm-chasing contractors took deposits and insurance money from Louisiana homeowners then vanished. How the fraud unfolded.',
  openGraph: {
    title: 'Hurricane Laura\'s Aftermath: The Storm-Chasing Roofers Who Vanished',
    description: 'After Hurricane Laura, storm-chasing contractors took deposits and insurance money from Louisiana homeowners then vanished. How the fraud unfolded.',
    url: 'https://www.clrblt.com/articles/national-prospect-roofing-fraud-louisiana',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
