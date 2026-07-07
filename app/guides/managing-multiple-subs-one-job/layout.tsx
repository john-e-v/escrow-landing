import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Manage Multiple Subs on One Job Without Losing the Thread | CLRBLT',
  description: 'Managing 4+ subs on one job? The real cost isn\'t the apps—it\'s the gaps between them. Here\'s how to structure coordination and payments so nothing slips.',
  openGraph: {
    title: 'How to Manage Multiple Subs on One Job Without Losing the Thread',
    description: 'Managing 4+ subs on one job? The real cost isn\'t the apps—it\'s the gaps between them. Here\'s how to structure coordination and payments so nothing slips.',
    url: 'https://www.clrblt.com/guides/managing-multiple-subs-one-job',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
