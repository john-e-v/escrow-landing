import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead-Gen Platform vs. Your Own Pipeline: What Each Lead Actually Costs | CLRBLT',
  description: 'Paid leads can cost $50–$300 each and still get sold to 4 competitors. Here\'s when a lead-gen platform beats your own pipeline — and when it drains your margin.',
  openGraph: {
    title: 'Lead-Gen Platform vs. Your Own Pipeline: What Each Lead Actually Costs',
    description: 'Paid leads can cost $50–$300 each and still get sold to 4 competitors. Here\'s when a lead-gen platform beats your own pipeline — and when it drains your margin.',
    url: 'https://www.clrblt.com/guides/lead-gen-platform-vs-own-pipeline',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
