import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check a Contractor With Your State License Board (Before You Sign) | CLRBLT',
  description: 'In 10 minutes, your state license board tells you if a contractor is disciplined, suspended, or complaint-heavy. Here\'s the exact lookup sequence.',
  openGraph: {
    title: 'How to Check a Contractor With Your State License Board (Before You Sign)',
    description: 'In 10 minutes, your state license board tells you if a contractor is disciplined, suspended, or complaint-heavy. Here\'s the exact lookup sequence.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-complaint-board',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
