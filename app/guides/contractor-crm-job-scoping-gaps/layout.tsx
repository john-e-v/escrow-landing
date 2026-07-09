import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Most Contractor CRMs Get Wrong About Job Scoping | CLRBLT',
  description: 'Most contractor CRMs treat scope as a one-time form. Real jobs change daily. Here\'s what generic CRMs get wrong about job scoping and how to fix your stack.',
  openGraph: {
    title: 'What Most Contractor CRMs Get Wrong About Job Scoping',
    description: 'Most contractor CRMs treat scope as a one-time form. Real jobs change daily. Here\'s what generic CRMs get wrong about job scoping and how to fix your stack.',
    url: 'https://www.clrblt.com/guides/contractor-crm-job-scoping-gaps',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
