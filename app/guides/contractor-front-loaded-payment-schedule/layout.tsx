import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Payment Schedule Was Front-Loaded: Why You Paid 70% for 40% of the Work | CLRBLT',
  description: 'You paid 70% of the contract for 40% of the work. Front-loaded payment schedules leave you with no leverage when the job stalls. Here\'s how to spot and fix it.',
  openGraph: {
    title: 'The Payment Schedule Was Front-Loaded: Why You Paid 70% for 40% of the Work',
    description: 'You paid 70% of the contract for 40% of the work. Front-loaded payment schedules leave you with no leverage when the job stalls. Here\'s how to spot and fix it.',
    url: 'https://www.clrblt.com/guides/contractor-front-loaded-payment-schedule',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
