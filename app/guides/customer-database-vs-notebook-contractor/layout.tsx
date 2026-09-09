import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Database vs. Notebook: When Your Contact List Starts Costing You Jobs | CLRBLT',
  description: 'A notebook works until you\'re missing follow-ups and forgetting repeat clients. Here\'s when a customer database earns its keep for contractors.',
  openGraph: {
    title: 'Customer Database vs. Notebook: When Your Contact List Starts Costing You Jobs',
    description: 'A notebook works until you\'re missing follow-ups and forgetting repeat clients. Here\'s when a customer database earns its keep for contractors.',
    url: 'https://www.clrblt.com/guides/customer-database-vs-notebook-contractor',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
