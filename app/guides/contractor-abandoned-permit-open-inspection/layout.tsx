import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Left the Permit Open. Now You Can\'t Sell Your House. | CLRBLT',
  description: 'An open permit stalled a home sale two years after the remodel finished. Here\'s why contractors leave permits open, what it costs, and how to prevent it.',
  openGraph: {
    title: 'The Contractor Left the Permit Open. Now You Can\'t Sell Your House.',
    description: 'An open permit stalled a home sale two years after the remodel finished. Here\'s why contractors leave permits open, what it costs, and how to prevent it.',
    url: 'https://www.clrblt.com/guides/contractor-abandoned-permit-open-inspection',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
