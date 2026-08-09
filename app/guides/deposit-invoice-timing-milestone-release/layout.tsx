import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Invoiced Before You Started the Work. Here\'s Why the Money Still Isn\'t Yours | CLRBLT',
  description: 'Invoicing before the work is done doesn\'t secure your cash, it exposes it to clawbacks. Tie releases to verifiable milestones so collected money stays yours.',
  openGraph: {
    title: 'You Invoiced Before You Started the Work. Here\'s Why the Money Still Isn\'t Yours',
    description: 'Invoicing before the work is done doesn\'t secure your cash, it exposes it to clawbacks. Tie releases to verifiable milestones so collected money stays yours.',
    url: 'https://www.clrblt.com/guides/deposit-invoice-timing-milestone-release',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
