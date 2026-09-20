import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Won\'t Pay Until the City Inspection Passes: Why That\'s Their Delay, Not Yours | CLRBLT',
  description: 'A passed inspection isn\'t a payment trigger you control. Here\'s how to structure final payment so a slow permit office doesn\'t hold your money hostage.',
  openGraph: {
    title: 'The Client Won\'t Pay Until the City Inspection Passes: Why That\'s Their Delay, Not Yours',
    description: 'A passed inspection isn\'t a payment trigger you control. Here\'s how to structure final payment so a slow permit office doesn\'t hold your money hostage.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-after-inspection-passes',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
