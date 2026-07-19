import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Supplier Never Delivered. The Homeowner\'s Material Deposit Was Still Safe. | CLRBLT',
  description: '$9,200 in custom cabinet money vanished when the supplier folded, but escrow milestones meant the homeowner lost nothing. Here\'s exactly how it worked.',
  openGraph: {
    title: 'The Supplier Never Delivered. The Homeowner\'s Material Deposit Was Still Safe.',
    description: '$9,200 in custom cabinet money vanished when the supplier folded, but escrow milestones meant the homeowner lost nothing. Here\'s exactly how it worked.',
    url: 'https://www.clrblt.com/guides/escrow-protected-material-deposit-supplier',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
