import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How a $1.7M Contractor Fraud Scheme Hit Guam Homeowners and Federal Programs | CLRBLT',
  description: 'A Guam contractor fraud scheme defrauded homeowners and housing programs of $1.7M through inflated billing and unfinished work. Here\'s what happened.',
  openGraph: {
    title: 'How a $1.7M Contractor Fraud Scheme Hit Guam Homeowners and Federal Programs',
    description: 'A Guam contractor fraud scheme defrauded homeowners and housing programs of $1.7M through inflated billing and unfinished work. Here\'s what happened.',
    url: 'https://www.clrblt.com/articles/brothers-construction-guam-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
