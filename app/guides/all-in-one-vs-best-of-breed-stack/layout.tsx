import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All-in-One vs. Best-of-Breed: What Contractors Actually Lose With Bundled Software | CLRBLT',
  description: 'All-in-one contractor software saves logins but locks you in and does most jobs at 70%. Here\'s when best-of-breed wins and the one piece to keep third-party.',
  openGraph: {
    title: 'All-in-One vs. Best-of-Breed: What Contractors Actually Lose With Bundled Software',
    description: 'All-in-one contractor software saves logins but locks you in and does most jobs at 70%. Here\'s when best-of-breed wins and the one piece to keep third-party.',
    url: 'https://www.clrblt.com/guides/all-in-one-vs-best-of-breed-stack',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
