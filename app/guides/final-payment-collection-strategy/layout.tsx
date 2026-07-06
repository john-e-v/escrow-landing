import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Collect Final Payment Before You Demobilize the Job | CLRBLT',
  description: 'The final 10% is where contractors lose money. Here\'s how to structure final payment so the funds are committed before you demobilize the crew.',
  openGraph: {
    title: 'How to Collect Final Payment Before You Demobilize the Job',
    description: 'The final 10% is where contractors lose money. Here\'s how to structure final payment so the funds are committed before you demobilize the crew.',
    url: 'https://www.clrblt.com/guides/final-payment-collection-strategy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
