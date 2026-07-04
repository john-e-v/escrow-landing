import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Nevada Contractor Who Took Over $200,000 From Las Vegas Homeowners | CLRBLT',
  description: 'How an unlicensed Las Vegas contractor collected over $200,000 in deposits and left homeowners with unfinished projects and financial losses.',
  openGraph: {
    title: 'The Nevada Contractor Who Took Over $200,000 From Las Vegas Homeowners',
    description: 'How an unlicensed Las Vegas contractor collected over $200,000 in deposits and left homeowners with unfinished projects and financial losses.',
    url: 'https://www.clrblt.com/articles/david-preston-nevada-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
