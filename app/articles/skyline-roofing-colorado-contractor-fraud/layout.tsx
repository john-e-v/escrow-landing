import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colorado\'s $2.5M Roofing Fraud: How Skyline Took Hail-Damage Deposits | CLRBLT',
  description: 'How a Colorado roofing contractor collected millions in deposits from hail-damage victims and left jobs unfinished. Lessons for homeowners.',
  openGraph: {
    title: 'Colorado\'s $2.5M Roofing Fraud: How Skyline Took Hail-Damage Deposits',
    description: 'How a Colorado roofing contractor collected millions in deposits from hail-damage victims and left jobs unfinished. Lessons for homeowners.',
    url: 'https://www.clrblt.com/articles/skyline-roofing-colorado-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
