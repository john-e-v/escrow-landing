import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Florida Contractor Who Took Over $500K From Condo Associations | CLRBLT',
  description: 'How a Florida contractor took over $500,000 from condo associations for repairs that were never finished, leaving residents stuck with the bill.',
  openGraph: {
    title: 'The Florida Contractor Who Took Over $500K From Condo Associations',
    description: 'How a Florida contractor took over $500,000 from condo associations for repairs that were never finished, leaving residents stuck with the bill.',
    url: 'https://www.clrblt.com/articles/michael-marchand-florida-condo-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
