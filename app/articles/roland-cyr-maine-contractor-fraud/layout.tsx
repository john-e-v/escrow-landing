import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Maine Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a Maine contractor took over $200,000 in deposits from homeowners, abandoned projects, and faced theft charges. Lessons on protecting your money.',
  openGraph: {
    title: 'The Maine Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a Maine contractor took over $200,000 in deposits from homeowners, abandoned projects, and faced theft charges. Lessons on protecting your money.',
    url: 'https://www.clrblt.com/articles/roland-cyr-maine-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
