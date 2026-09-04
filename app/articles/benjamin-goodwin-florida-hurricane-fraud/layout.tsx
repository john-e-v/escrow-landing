import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Florida Contractor Charged After Taking Hurricane Deposits and Vanishing | CLRBLT',
  description: 'A Florida contractor took storm-repair deposits from homeowners and never finished the work, leading to multiple fraud charges. Here\'s what happened.',
  openGraph: {
    title: 'The Florida Contractor Charged After Taking Hurricane Deposits and Vanishing',
    description: 'A Florida contractor took storm-repair deposits from homeowners and never finished the work, leading to multiple fraud charges. Here\'s what happened.',
    url: 'https://www.clrblt.com/articles/benjamin-goodwin-florida-hurricane-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
