import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay Your Crew Directly in Cash Each Day: Why That Wrecks Your Records | CLRBLT',
  description: 'Daily cash payments to your crew leave you with zero records and full liability. Here\'s why to route every payment through the business and escrow instead.',
  openGraph: {
    title: 'The Client Wants to Pay Your Crew Directly in Cash Each Day: Why That Wrecks Your Records',
    description: 'Daily cash payments to your crew leave you with zero records and full liability. Here\'s why to route every payment through the business and escrow instead.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-per-visit-cash',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
