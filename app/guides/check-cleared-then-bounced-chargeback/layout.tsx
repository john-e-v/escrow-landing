import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Check Cleared, Then Bounced Two Weeks Later: How to Not Get Burned | CLRBLT',
  description: 'A check can bounce up to two weeks after your bank shows the funds as available. Here\'s how to protect yourself from reversed payments on a job.',
  openGraph: {
    title: 'The Check Cleared, Then Bounced Two Weeks Later: How to Not Get Burned',
    description: 'A check can bounce up to two weeks after your bank shows the funds as available. Here\'s how to protect yourself from reversed payments on a job.',
    url: 'https://www.clrblt.com/guides/check-cleared-then-bounced-chargeback',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
