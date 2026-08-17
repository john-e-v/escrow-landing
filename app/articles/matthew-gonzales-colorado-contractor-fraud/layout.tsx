import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Colorado Contractor Who Took Over $800,000 From Homeowners | CLRBLT',
  description: 'How a Colorado contractor took over $800,000 in homeowner deposits, abandoned projects, and faced felony theft charges. Lessons on escrow protection.',
  openGraph: {
    title: 'The Colorado Contractor Who Took Over $800,000 From Homeowners',
    description: 'How a Colorado contractor took over $800,000 in homeowner deposits, abandoned projects, and faced felony theft charges. Lessons on escrow protection.',
    url: 'https://www.clrblt.com/articles/matthew-gonzales-colorado-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
