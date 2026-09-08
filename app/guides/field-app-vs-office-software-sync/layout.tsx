import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field App vs. Office Software: Where Job Data Actually Breaks in Transit | CLRBLT',
  description: 'Field-first apps and office-first software both leak data at the handoff. Here\'s where the sync breaks, what it costs, and how to keep escrow the only outside piece.',
  openGraph: {
    title: 'Field App vs. Office Software: Where Job Data Actually Breaks in Transit',
    description: 'Field-first apps and office-first software both leak data at the handoff. Here\'s where the sync breaks, what it costs, and how to keep escrow the only outside piece.',
    url: 'https://www.clrblt.com/guides/field-app-vs-office-software-sync',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
