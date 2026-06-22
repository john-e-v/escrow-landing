import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wisconsin Contractor Who Stole Over $250,000 From Homeowners | CLRBLT',
  description: 'Wisconsin contractor Tony Hieber took over $250,000 in deposits from homeowners and failed to complete the work, leading to felony theft charges.',
  openGraph: {
    title: 'The Wisconsin Contractor Who Stole Over $250,000 From Homeowners',
    description: 'Wisconsin contractor Tony Hieber took over $250,000 in deposits from homeowners and failed to complete the work, leading to felony theft charges.',
    url: 'https://www.clrblt.com/articles/tony-hieber-wisconsin-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
