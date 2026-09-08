import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Centerville Contractor Who Took Over $400,000 From Homeowners | CLRBLT',
  description: 'How an unlicensed Utah contractor took over $400,000 in deposits from homeowners for work that was never finished, and the criminal charges that followed.',
  alternates: { canonical: 'https://www.clrblt.com/articles/centerville-utah-contractor-fraud' },
  openGraph: {
    title: 'The Centerville Contractor Who Took Over $400,000 From Homeowners',
    description: 'How an unlicensed Utah contractor took over $400,000 in deposits from homeowners for work that was never finished, and the criminal charges that followed.',
    url: 'https://www.clrblt.com/articles/centerville-utah-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
