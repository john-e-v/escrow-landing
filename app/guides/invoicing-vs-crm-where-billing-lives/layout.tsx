import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Your Billing Actually Lives: Standalone Invoicing vs. CRM Module | CLRBLT',
  description: 'Standalone invoicing vs. CRM billing module: which one actually owns your billing without duplicating job data or locking you in. An honest teardown.',
  openGraph: {
    title: 'Where Your Billing Actually Lives: Standalone Invoicing vs. CRM Module',
    description: 'Standalone invoicing vs. CRM billing module: which one actually owns your billing without duplicating job data or locking you in. An honest teardown.',
    url: 'https://www.clrblt.com/guides/invoicing-vs-crm-where-billing-lives',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
