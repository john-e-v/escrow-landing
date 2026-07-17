import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Primary Suite Addition Worth It? Cost, ROI, and When It Backfires | CLRBLT',
  description: 'A primary suite addition returns just 50–60% at resale. Worth it if you\'re staying 5+ years, a money-loser if you\'re selling soon. Here\'s the full math.',
  openGraph: {
    title: 'Is a Primary Suite Addition Worth It? Cost, ROI, and When It Backfires',
    description: 'A primary suite addition returns just 50–60% at resale. Worth it if you\'re staying 5+ years, a money-loser if you\'re selling soon. Here\'s the full math.',
    url: 'https://www.clrblt.com/guides/primary-suite-addition-worth-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
