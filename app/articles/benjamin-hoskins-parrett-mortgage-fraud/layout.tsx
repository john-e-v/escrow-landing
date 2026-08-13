import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor-Turned-Mortgage-Fraudster Who Cost Homeowners Millions | CLRBLT',
  description: 'How a contractor combined home repair fraud with predatory lending to devastate homeowners, and what red flags could have prevented it.',
  openGraph: {
    title: 'The Contractor-Turned-Mortgage-Fraudster Who Cost Homeowners Millions',
    description: 'How a contractor combined home repair fraud with predatory lending to devastate homeowners, and what red flags could have prevented it.',
    url: 'https://www.clrblt.com/articles/benjamin-hoskins-parrett-mortgage-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
