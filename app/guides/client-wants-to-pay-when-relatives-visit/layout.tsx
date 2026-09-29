import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Wait to Pay Until \'After the Holidays\': Why the Calendar Isn\'t Your Problem | CLRBLT',
  description: 'A client asking to delay payment \'until after the holidays\' is using your cash flow as a loan. Here\'s how to structure payment so their calendar isn\'t your problem.',
  openGraph: {
    title: 'The Client Wants to Wait to Pay Until \'After the Holidays\': Why the Calendar Isn\'t Your Problem',
    description: 'A client asking to delay payment \'until after the holidays\' is using your cash flow as a loan. Here\'s how to structure payment so their calendar isn\'t your problem.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-when-relatives-visit',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
