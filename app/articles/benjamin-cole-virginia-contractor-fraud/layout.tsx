import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Virginia Contractor Who Stole $880,000 From Homeowners | CLRBLT',
  description: 'How Virginia contractor Benjamin Cole defrauded homeowners of $880,000 in deposits for renovations he never finished.',
  openGraph: {
    title: 'The Virginia Contractor Who Stole $880,000 From Homeowners',
    description: 'How Virginia contractor Benjamin Cole defrauded homeowners of $880,000 in deposits for renovations he never finished.',
    url: 'https://www.clrblt.com/articles/benjamin-cole-virginia-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
