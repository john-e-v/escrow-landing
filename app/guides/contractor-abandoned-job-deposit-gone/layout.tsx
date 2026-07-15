import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Contractor Cashed the Deposit and Disappeared: What Actually Happens Next | CLRBLT',
  description: 'A $14,000 deposit vanished when the contractor walked. Here\'s the real timeline of job abandonment and the payment fix that would have prevented it.',
  openGraph: {
    title: 'Your Contractor Cashed the Deposit and Disappeared: What Actually Happens Next',
    description: 'A $14,000 deposit vanished when the contractor walked. Here\'s the real timeline of job abandonment and the payment fix that would have prevented it.',
    url: 'https://www.clrblt.com/guides/contractor-abandoned-job-deposit-gone',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
