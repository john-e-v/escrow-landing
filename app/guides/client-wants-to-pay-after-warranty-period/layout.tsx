import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Hold Final Payment Until the Warranty Period Ends: Why That\'s Not How It Works | CLRBLT',
  description: 'A client wanting to hold final payment until the warranty expires is confusing payment with warranty. Get paid on completion — here\'s the structure.',
  openGraph: {
    title: 'The Client Wants to Hold Final Payment Until the Warranty Period Ends: Why That\'s Not How It Works',
    description: 'A client wanting to hold final payment until the warranty expires is confusing payment with warranty. Get paid on completion — here\'s the structure.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-after-warranty-period',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
