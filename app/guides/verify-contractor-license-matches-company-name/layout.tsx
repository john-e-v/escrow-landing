import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The License Was Real — But It Belonged to Someone Else. How to Check the Name Matches | CLRBLT',
  description: 'A real license number can belong to a different person entirely. Here\'s the 6-step check to confirm the license, business name, and contractor all match.',
  openGraph: {
    title: 'The License Was Real — But It Belonged to Someone Else. How to Check the Name Matches',
    description: 'A real license number can belong to a different person entirely. Here\'s the 6-step check to confirm the license, business name, and contractor all match.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-matches-company-name',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
