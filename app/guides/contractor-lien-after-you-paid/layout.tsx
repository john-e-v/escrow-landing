import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Paid in Full. Then a Subcontractor Put a Lien on Your House. | CLRBLT',
  description: 'You can pay your contractor in full and still get a lien on your house if he never paid his subs. Here\'s why it happens and how to prevent it.',
  openGraph: {
    title: 'You Paid in Full. Then a Subcontractor Put a Lien on Your House.',
    description: 'You can pay your contractor in full and still get a lien on your house if he never paid his subs. Here\'s why it happens and how to prevent it.',
    url: 'https://www.clrblt.com/guides/contractor-lien-after-you-paid',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
