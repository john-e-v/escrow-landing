import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Utah Contractor Who Took Over $400,000 From Homeowners | CLRBLT',
  description: 'How a Utah contractor took over $400,000 in deposits from homeowners for work that was never finished, and the criminal charges that followed.',
  openGraph: {
    title: 'The Utah Contractor Who Took Over $400,000 From Homeowners',
    description: 'How a Utah contractor took over $400,000 in deposits from homeowners for work that was never finished, and the criminal charges that followed.',
    url: 'https://www.clrblt.com/articles/todd-brassner-utah-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
