import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hawaii Contractor Who Took Over $400,000 From Homeowners | CLRBLT',
  description: 'How a Hawaii contractor took over $400,000 in deposits from Oahu homeowners and left jobs unfinished. Lessons on protecting your money.',
  openGraph: {
    title: 'The Hawaii Contractor Who Took Over $400,000 From Homeowners',
    description: 'How a Hawaii contractor took over $400,000 in deposits from Oahu homeowners and left jobs unfinished. Lessons on protecting your money.',
    url: 'https://www.clrblt.com/articles/michael-tanner-hawaii-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
