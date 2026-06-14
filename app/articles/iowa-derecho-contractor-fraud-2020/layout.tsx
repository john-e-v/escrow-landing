import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'After the 2020 Derecho: Cedar Rapids Homeowners Targeted by Roofing Scams | CLRBLT',
  description: 'After Iowa\'s 2020 derecho devastated Cedar Rapids, storm-chasing contractors took deposits and vanished. How homeowners were targeted and warned.',
  openGraph: {
    title: 'After the 2020 Derecho: Cedar Rapids Homeowners Targeted by Roofing Scams',
    description: 'After Iowa\'s 2020 derecho devastated Cedar Rapids, storm-chasing contractors took deposits and vanished. How homeowners were targeted and warned.',
    url: 'https://www.clrblt.com/articles/iowa-derecho-contractor-fraud-2020',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
