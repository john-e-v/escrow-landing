import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Should a Contractor Deposit Be? What\'s Normal vs. a Warning Sign | CLRBLT',
  description: 'A normal contractor deposit is 10-30% of the job, not 50%. Here\'s how to know what\'s reasonable, what to ask, and the one deposit demand that should end the deal.',
  openGraph: {
    title: 'How Much Should a Contractor Deposit Be? What\'s Normal vs. a Warning Sign',
    description: 'A normal contractor deposit is 10-30% of the job, not 50%. Here\'s how to know what\'s reasonable, what to ask, and the one deposit demand that should end the deal.',
    url: 'https://www.clrblt.com/guides/contractor-deposit-amount-normal',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
