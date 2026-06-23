import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Illinois Roofing Contractor Who Defrauded Homeowners and Insurers | CLRBLT',
  description: 'How an Illinois roofing contractor defrauded homeowners and insurers through fraudulent storm-damage claims, and what homeowners can learn from the case.',
  openGraph: {
    title: 'The Illinois Roofing Contractor Who Defrauded Homeowners and Insurers',
    description: 'How an Illinois roofing contractor defrauded homeowners and insurers through fraudulent storm-damage claims, and what homeowners can learn from the case.',
    url: 'https://www.clrblt.com/articles/michael-marr-illinois-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
