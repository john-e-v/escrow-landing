import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Wants to Start on a Handshake: Why No Written Contract Ends the Deal | CLRBLT',
  description: 'No written contract = no deal. Use this exact script to request a signed contract before hiring, plus the 7 items it must include and the one refusal that ends the conversation.',
  openGraph: {
    title: 'The Contractor Wants to Start on a Handshake: Why No Written Contract Ends the Deal',
    description: 'No written contract = no deal. Use this exact script to request a signed contract before hiring, plus the 7 items it must include and the one refusal that ends the conversation.',
    url: 'https://www.clrblt.com/guides/contractor-wont-give-written-contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
