import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Long Island Contractor Who Took Over $500K From Storm Victims | CLRBLT',
  description: 'A Long Island contractor took over $500,000 in deposits from homeowners for work never done. Here\'s how the scheme unraveled and how to protect yourself.',
  openGraph: {
    title: 'The Long Island Contractor Who Took Over $500K From Storm Victims',
    description: 'A Long Island contractor took over $500,000 in deposits from homeowners for work never done. Here\'s how the scheme unraveled and how to protect yourself.',
    url: 'https://www.clrblt.com/articles/long-island-contractor-fraud-thomas-farrell',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
