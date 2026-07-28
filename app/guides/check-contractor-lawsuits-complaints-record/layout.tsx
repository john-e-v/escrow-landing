import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check a Contractor\'s Lawsuit and Complaint History Before You Hire | CLRBLT',
  description: '5 free public records that reveal a contractor\'s lawsuits, complaints, and disciplinary history — before you sign anything.',
  openGraph: {
    title: 'How to Check a Contractor\'s Lawsuit and Complaint History Before You Hire',
    description: '5 free public records that reveal a contractor\'s lawsuits, complaints, and disciplinary history — before you sign anything.',
    url: 'https://www.clrblt.com/guides/check-contractor-lawsuits-complaints-record',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
