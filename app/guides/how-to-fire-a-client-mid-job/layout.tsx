import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Fire a Non-Paying Client Mid-Job Without Eating the Loss | CLRBLT',
  description: 'Firing a non-paying client mid-job? Stop at a funded milestone, document completion, and never leave money on the table. Here\'s the clean exit playbook.',
  openGraph: {
    title: 'How to Fire a Non-Paying Client Mid-Job Without Eating the Loss',
    description: 'Firing a non-paying client mid-job? Stop at a funded milestone, document completion, and never leave money on the table. Here\'s the clean exit playbook.',
    url: 'https://www.clrblt.com/guides/how-to-fire-a-client-mid-job',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
