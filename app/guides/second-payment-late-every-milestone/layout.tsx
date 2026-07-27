import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Second Payment Is Always Late (And How to Structure It Out) | CLRBLT',
  description: 'The second payment drags because it depends on the client\'s mood, not a trigger. Fund milestones into escrow up front so each release is automatic.',
  openGraph: {
    title: 'Why Your Second Payment Is Always Late (And How to Structure It Out)',
    description: 'The second payment drags because it depends on the client\'s mood, not a trigger. Fund milestones into escrow up front so each release is automatic.',
    url: 'https://www.clrblt.com/guides/second-payment-late-every-milestone',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
