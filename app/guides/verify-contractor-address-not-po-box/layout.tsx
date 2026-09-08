import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor Has a Real Business Address (Not Just a PO Box) | CLRBLT',
  description: 'In 10 minutes you can confirm whether a contractor has a real business address or just a PO box and a burner phone. Here\'s the exact checklist.',
  openGraph: {
    title: 'How to Verify a Contractor Has a Real Business Address (Not Just a PO Box)',
    description: 'In 10 minutes you can confirm whether a contractor has a real business address or just a PO box and a burner phone. Here\'s the exact checklist.',
    url: 'https://www.clrblt.com/guides/verify-contractor-address-not-po-box',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
