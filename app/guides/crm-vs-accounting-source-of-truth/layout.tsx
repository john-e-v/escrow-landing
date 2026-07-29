import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM vs. Accounting Software: Which One Should Own Your Job Data? | CLRBLT',
  description: 'Your CRM and accounting software both claim to track jobs, but neither is complete. Here\'s how to pick a single source of truth and stop double-entry.',
  openGraph: {
    title: 'CRM vs. Accounting Software: Which One Should Own Your Job Data?',
    description: 'Your CRM and accounting software both claim to track jobs, but neither is complete. Here\'s how to pick a single source of truth and stop double-entry.',
    url: 'https://www.clrblt.com/guides/crm-vs-accounting-source-of-truth',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
