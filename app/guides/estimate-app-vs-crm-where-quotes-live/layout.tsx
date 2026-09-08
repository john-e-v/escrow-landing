import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Your Quotes Should Live: Standalone Estimating App vs. CRM Module | CLRBLT',
  description: 'Standalone estimating apps build better bids; CRM modules keep quotes tied to the job. Here\'s how to decide which owns your quoting without splitting your data.',
  openGraph: {
    title: 'Where Your Quotes Should Live: Standalone Estimating App vs. CRM Module',
    description: 'Standalone estimating apps build better bids; CRM modules keep quotes tied to the job. Here\'s how to decide which owns your quoting without splitting your data.',
    url: 'https://www.clrblt.com/guides/estimate-app-vs-crm-where-quotes-live',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
